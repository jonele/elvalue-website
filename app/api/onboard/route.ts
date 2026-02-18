import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import Stripe from "stripe"

const EL_GOD_ONBOARD_URL =
  "https://uglyqndupprtwoqxexkj.supabase.co/functions/v1/el-god-onboard"

// Generate HMAC signature for EL-GOD authentication
function generateHmacSignature(
  payload: string,
  timestamp: string,
  secret: string
): string {
  const message = `${timestamp}.${payload}`
  return crypto.createHmac("sha256", secret).update(message).digest("hex")
}

// Product pricing (annual plans)
const PRODUCT_PRICING: Record<string, { amount: number; name: string }> = {
  all: { amount: 149900, name: "EL VALUE Full Ecosystem" }, // €1,499/year
  "el-os": { amount: 59900, name: "EL-OS B2B Portal" }, // €599/year
  "el-loyal": { amount: 39900, name: "EL-Loyal Loyalty" }, // €399/year
  rsrv: { amount: 29900, name: "RSRV Reservations" }, // €299/year
  "el-pos": { amount: 79900, name: "EL-POS Point of Sale" }, // €799/year
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { vat_id, client_name, email, mobile, contact_name, interest, message } =
      body

    // Validate required fields
    if (!vat_id || !client_name || !email) {
      return NextResponse.json(
        { error: "Missing required fields: vat_id, client_name, email" },
        { status: 400 }
      )
    }

    // Validate environment variables
    const hmacSecret = process.env.EL_GOD_HMAC_SECRET
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY

    if (!hmacSecret || !stripeSecretKey) {
      console.error("Missing environment variables")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Map interest to product ID
    const productKey = interest || "all"
    const product = PRODUCT_PRICING[productKey] || PRODUCT_PRICING.all

    // Prepare EL-GOD onboard payload
    const onboardPayload = {
      vat_id,
      client_name,
      email,
      mobile: mobile || null,
      contact_name: contact_name || client_name,
      plan: "starter",
      source_product: "elvalue-website",
      source_url: "https://elvalue.com/contact",
      products_interested: [productKey],
      notes: message || null,
    }

    // Generate HMAC authentication
    const timestamp = Math.floor(Date.now() / 1000).toString()
    const payloadString = JSON.stringify(onboardPayload)
    const signature = generateHmacSignature(payloadString, timestamp, hmacSecret)

    // Call EL-GOD onboard edge function
    const onboardResponse = await fetch(EL_GOD_ONBOARD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hmac-signature": signature,
        "x-hmac-timestamp": timestamp,
      },
      body: payloadString,
    })

    if (!onboardResponse.ok) {
      const errorText = await onboardResponse.text()
      console.error("EL-GOD onboard error:", errorText)
      return NextResponse.json(
        { error: "Failed to register lead" },
        { status: 500 }
      )
    }

    const onboardResult = await onboardResponse.json()
    const clientId = onboardResult.client_id

    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey)

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      client_reference_id: clientId,
      metadata: {
        client_id: clientId,
        vat_id,
        client_name,
        product: productKey,
        source: "elvalue-website",
      },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: product.name,
              description: "Annual subscription - EL VALUE Cyprus Ltd",
            },
            unit_amount: product.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/contact?cancelled=true`,
      billing_address_collection: "required",
      tax_id_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({
      success: true,
      client_id: clientId,
      checkout_url: session.url,
    })
  } catch (error) {
    console.error("Onboard API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
