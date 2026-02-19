export type Lang = "el" | "en"

export const t = {
  hero: {
    headline: {
      el: "Η δική σου AI.\nΠάντα εδώ.",
      en: "Your AI.\nAlways here.",
    },
    subtitle: {
      el: "Προσωπική βοηθός που θυμάται τα πάντα, σε προκαλεί, και σου φέρνει ό,τι χρειάζεσαι — πριν το ζητήσεις.",
      en: "A personal assistant that remembers everything, challenges you, and brings you what you need — before you ask.",
    },
    cta: {
      el: "Ξεκίνα Δωρεάν",
      en: "Start Free",
    },
    badge: {
      el: "Διαθέσιμη στο Telegram",
      en: "Available on Telegram",
    },
  },
  features: {
    title: {
      el: "Τι Κάνει η EvE",
      en: "What EvE Does",
    },
    subtitle: {
      el: "Δεν είναι chatbot. Είναι concierge.",
      en: "Not a chatbot. A concierge.",
    },
    items: [
      {
        title: { el: "Θυμάται Τα Πάντα", en: "Remembers Everything" },
        desc: {
          el: "Ονόματα, προτιμήσεις, ρουτίνες, inside jokes. Η EvE χτίζει σιγά σιγά μια εικόνα για σένα.",
          en: "Names, preferences, routines, inside jokes. EvE gradually builds a picture of who you are.",
        },
        icon: "brain",
      },
      {
        title: { el: "Κλείνει τον Κύκλο", en: "Closes the Loop" },
        desc: {
          el: "Δεν απαντάει απλά — ακολουθεί, υπενθυμίζει, προτείνει. Μέχρι να ολοκληρωθεί.",
          en: "Doesn't just answer — follows up, reminds, suggests. Until it's actually done.",
        },
        icon: "refresh",
      },
      {
        title: { el: "Σε Ενημερώνει", en: "Keeps You Informed" },
        desc: {
          el: "Νέα, trends, καιρός — φιλτραρισμένα για σένα. Χωρίς θόρυβο, μόνο αξία.",
          en: "News, trends, weather — filtered for you. No noise, just value.",
        },
        icon: "newspaper",
      },
      {
        title: { el: "Σε Προκαλεί", en: "Challenges You" },
        desc: {
          el: "Δεν λέει ναι σε όλα. Αν κάτι δεν πάει καλά, στο λέει — με αγάπη αλλά ειλικρινά.",
          en: "Doesn't say yes to everything. If something's off, she'll tell you — with love, but honestly.",
        },
        icon: "sparkles",
      },
    ],
  },
  comparison: {
    title: {
      el: "Γιατί η EvE;",
      en: "Why EvE?",
    },
    subtitle: {
      el: "Άλλοι AI βοηθοί ξεκινάνε από €10/μήνα και κάνουν μόνο chat. Η EvE κάνει πολύ περισσότερα.",
      en: "Other AI assistants start at €10/month and only do chat. EvE does so much more.",
    },
    others: {
      title: {
        el: "Τυπικοί AI Βοηθοί",
        en: "Typical AI Assistants",
      },
      price: {
        el: "από €10-20/μήνα",
        en: "from €10-20/month",
      },
      items: [
        { el: "Μόνο chat, χωρίς μνήμη", en: "Chat only, no memory" },
        { el: "Ξεχνάει τα πάντα μετά τη συνομιλία", en: "Forgets everything after each conversation" },
        { el: "Δεν σε γνωρίζει προσωπικά", en: "Doesn't know you personally" },
        { el: "Δεν διαβάζει email ή ημερολόγιο", en: "Can't read email or calendar" },
        { el: "Γενικά, αποστειρωμένα", en: "Generic, sterile responses" },
      ],
    },
    evey: {
      title: {
        el: "EvE",
        en: "EvE",
      },
      items: [
        { el: "Θυμάται ΟΛΑ — ονόματα, προτιμήσεις, συνήθειες", en: "Remembers EVERYTHING — names, preferences, habits" },
        { el: "Σε ξυπνάει, σου θυμίζει, σε ρωτάει πώς πήγε", en: "Wakes you up, reminds you, asks how it went" },
        { el: "Διαβάζει email & ημερολόγιο (Pro)", en: "Reads email & calendar (Pro)" },
        { el: "Σε προκαλεί αν παίρνεις κακές αποφάσεις", en: "Challenges you on bad decisions" },
        { el: "Σαν φίλη, όχι σαν ρομπότ", en: "Like a friend, not a robot" },
      ],
    },
    humanPa: {
      title: {
        el: "Προσωπικός Βοηθός (Άνθρωπος)",
        en: "Personal Assistant (Human)",
      },
      price: {
        el: "€800-1.500/μήνα",
        en: "€800-1,500/month",
      },
      items: [
        { el: "Δουλεύει 8 ώρες/μέρα", en: "Works 8 hours/day" },
        { el: "Άδειες, αρρώστιες, ωράρια", en: "Vacations, sick days, schedules" },
        { el: "Δεν είναι πάντα available", en: "Not always available" },
      ],
    },
    eveyAdvantage: {
      el: "Η EvE είναι available 24/7, κοστίζει κλάσματα, και δεν παίρνει ποτέ άδεια.",
      en: "EvE is available 24/7, costs a fraction, and never takes a day off.",
    },
  },
  howItWorks: {
    title: {
      el: "Πώς Λειτουργεί",
      en: "How It Works",
    },
    steps: [
      {
        step: "1",
        title: { el: "Άνοιξε το Telegram", en: "Open Telegram" },
        desc: {
          el: "Πάτα το κουμπί και στείλε ένα μήνυμα στην EvE.",
          en: "Tap the button and send a message to EvE.",
        },
      },
      {
        step: "2",
        title: { el: "Γνωρίσου Μαζί Της", en: "Get to Know Her" },
        desc: {
          el: "Θα σου συστηθεί και θα σε ρωτήσει τι χρειάζεσαι.",
          en: "She'll introduce herself and ask what you need.",
        },
      },
      {
        step: "3",
        title: { el: "Μεγαλώνει Μαζί Σου", en: "She Grows With You" },
        desc: {
          el: "Όσο περισσότερα μοιράζεσαι, τόσο πιο χρήσιμη γίνεται.",
          en: "The more you share, the more useful she becomes.",
        },
      },
    ],
  },
  pricing: {
    title: {
      el: "Απλά. Ξεκάθαρα. Χωρίς Κρυφά.",
      en: "Simple. Transparent. No Hidden Fees.",
    },
    subtitle: {
      el: "Ξεκίνα δωρεάν. Αναβάθμισε όταν είσαι έτοιμος.",
      en: "Start free. Upgrade when you're ready.",
    },
    tiers: [
      {
        name: { el: "Δωρεάν", en: "Free" },
        price: { el: "€0", en: "€0" },
        period: { el: "για πάντα", en: "forever" },
        desc: { el: "Γνώρισε την EvE. Χωρίς δεσμεύσεις.", en: "Meet EvE. No strings attached." },
        features: [
          { el: "30 μηνύματα/μέρα", en: "30 messages/day" },
          { el: "Θυμάται τα πάντα για σένα", en: "Remembers everything about you" },
          { el: "Νέα, καιρός, ενημερώσεις", en: "News, weather, updates" },
          { el: "Σε προκαλεί & σε φροντίζει", en: "Challenges & cares for you" },
        ],
        cta: { el: "Ξεκίνα Δωρεάν", en: "Start Free" },
        highlighted: false,
      },
      {
        name: { el: "Pro", en: "Pro" },
        price: { el: "€29", en: "€29" },
        period: { el: "/μήνα", en: "/month" },
        desc: { el: "Η EvE γίνεται η προσωπική σου βοηθός.", en: "EvE becomes your personal assistant." },
        features: [
          { el: "Απεριόριστα μηνύματα", en: "Unlimited messages" },
          { el: "Πιο έξυπνο AI (Claude Sonnet)", en: "Smarter AI (Claude Sonnet)" },
          { el: "Διαβάζει & απαντάει email", en: "Reads & replies to email" },
          { el: "Διαχειρίζεται το ημερολόγιό σου", en: "Manages your calendar" },
          { el: "Χωρίς διαφημίσεις", en: "No ads" },
          { el: "Προτεραιότητα στις απαντήσεις", en: "Priority responses" },
        ],
        cta: { el: "Αναβάθμισε σε Pro", en: "Upgrade to Pro" },
        highlighted: true,
      },
      {
        name: { el: "Executive", en: "Executive" },
        price: { el: "€49", en: "€49" },
        period: { el: "/μήνα", en: "/month" },
        desc: { el: "Πλήρης AI βοηθός για σένα & την οικογένειά σου.", en: "Full AI assistant for you & your family." },
        features: [
          { el: "Όλα του Pro +", en: "Everything in Pro +" },
          { el: "WhatsApp integration", en: "WhatsApp integration" },
          { el: "Φωνητικά μηνύματα", en: "Voice messages" },
          { el: "Οικογενειακή πρόσβαση (5 άτομα)", en: "Family access (5 people)" },
          { el: "Αποκλειστική υποστήριξη", en: "Dedicated support" },
        ],
        cta: { el: "Πάρε Executive", en: "Get Executive" },
        highlighted: false,
      },
    ],
    savings: {
      el: "Ένας προσωπικός βοηθός στην Ελλάδα κοστίζει €800-1.500/μήνα. Η EvE κάνει τα ίδια, 24/7, από €29.",
      en: "A personal assistant in Greece costs €800-1,500/month. EvE does the same, 24/7, from €29.",
    },
  },
  addToPhone: {
    title: {
      el: "Πρόσθεσέ Την στο Κινητό Σου",
      en: "Add Her to Your Phone",
    },
    subtitle: {
      el: "3 βήματα και η EvE είναι πάντα μαζί σου.",
      en: "3 steps and EvE is always with you.",
    },
    steps: [
      {
        title: { el: "Κατέβασε το Telegram", en: "Download Telegram" },
        desc: {
          el: "Δωρεάν από App Store ή Google Play. Αν το έχεις ήδη, πήγαινε στο βήμα 2.",
          en: "Free from App Store or Google Play. If you already have it, skip to step 2.",
        },
        icon: "download" as const,
      },
      {
        title: { el: "Πάτα «Ξεκίνα Δωρεάν»", en: "Tap «Start Free»" },
        desc: {
          el: "Θα ανοίξει αυτόματα το Telegram και θα βρεις την EvE.",
          en: "It will automatically open Telegram and find EvE for you.",
        },
        icon: "smartphone" as const,
      },
      {
        title: { el: "Πες της «Γεια»", en: "Say «Hi»" },
        desc: {
          el: "Στείλε ένα μήνυμα και η EvE θα ξεκινήσει να σε γνωρίζει. Τόσο απλά.",
          en: "Send a message and EvE will start getting to know you. That simple.",
        },
        icon: "user" as const,
      },
    ],
  },
  numbers: {
    title: {
      el: "Τα Νούμερα Μιλάνε",
      en: "The Numbers Speak",
    },
    items: [
      {
        value: "24/7",
        label: { el: "Διαθεσιμότητα", en: "Availability" },
        desc: { el: "Δεν κοιμάται, δεν αρρωσταίνει, δεν παίρνει άδεια", en: "Never sleeps, never sick, never on vacation" },
      },
      {
        value: "96%",
        label: { el: "Ασφάλεια", en: "Security" },
        desc: { el: "Κρυπτογράφηση & GDPR compliance", en: "Encryption & GDPR compliance" },
      },
      {
        value: "30x",
        label: { el: "Φθηνότερη", en: "Cheaper" },
        desc: { el: "Σε σχέση με ανθρώπινο βοηθό", en: "Compared to a human assistant" },
      },
    ],
  },
  finalCta: {
    title: {
      el: "Έτοιμος να Γνωρίσεις την EvE;",
      en: "Ready to Meet EvE?",
    },
    subtitle: {
      el: "Ξεκίνα δωρεάν σήμερα. Αναβάθμισε αν & όταν θέλεις.",
      en: "Start free today. Upgrade if and when you want.",
    },
    cta: {
      el: "Ξεκίνα Τώρα",
      en: "Start Now",
    },
  },
  footer: {
    privacy: {
      el: "Κάθε συνομιλία είναι κρυπτογραφημένη και 100% ιδιωτική.",
      en: "Every conversation is encrypted and 100% private.",
    },
  },
} as const
