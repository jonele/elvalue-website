export type Lang = "el" | "en" | "ru" | "ar"

export const LANG_LABELS: Record<Lang, string> = {
  el: "GR",
  en: "EN",
  ru: "RU",
  ar: "AR",
}

export const t = {
  aiTeam: {
    badge: {
      el: "Γνωρίστε την AI Ομάδα Μας",
      en: "Meet Our AI Team",
      ru: "Познакомьтесь с нашей AI командой",
      ar: "تعرّف على فريق الذكاء الاصطناعي",
    },
    title: {
      el: "Τεχνητή Νοημοσύνη Που Δουλεύει Για Σας",
      en: "Intelligence That Works For You",
      ru: "Интеллект, который работает на вас",
      ar: "ذكاء اصطناعي يعمل من أجلك",
    },
    subtitle: {
      el: "Δύο AI βοηθοί, ο καθένας εξειδικευμένος σε διαφορετικές πτυχές της επιχείρησής σας.",
      en: "Two AI assistants, each specialized for different aspects of your business.",
      ru: "Два AI-ассистента, каждый специализируется на разных аспектах вашего бизнеса.",
      ar: "مساعدان ذكيان، كل منهما متخصص في جوانب مختلفة من عملك.",
    },
  },
  ella: {
    role: {
      el: "AI Εμπειρίας Πελατών",
      en: "Customer Experience AI",
      ru: "AI клиентского опыта",
      ar: "ذكاء اصطناعي لتجربة العملاء",
    },
    desc: {
      el: "Η προσωπική concierge των πελατών σας. Η Ella θυμάται προτιμήσεις, προτείνει εξατομικευμένες προσφορές, διαχειρίζεται ανταμοιβές loyalty, και παρέχει υποστήριξη 24/7 στα Ελληνικά, Αγγλικά και Αραβικά.",
      en: "Your customers' personal concierge. Ella remembers preferences, suggests personalized offers, handles loyalty rewards, and provides 24/7 support in Greek, English, and Arabic.",
      ru: "Персональный консьерж ваших клиентов. Ella запоминает предпочтения, предлагает персонализированные акции, управляет программой лояльности и обеспечивает поддержку 24/7 на греческом, английском и арабском.",
      ar: "الكونسيرج الشخصي لعملائك. إيلا تتذكر التفضيلات، تقترح عروضاً مخصصة، تدير مكافآت الولاء، وتوفر دعماً على مدار الساعة باليونانية والإنجليزية والعربية.",
    },
  },
  theo: {
    role: {
      el: "AI Λειτουργιών",
      en: "Operations AI",
      ru: "AI операций",
      ar: "ذكاء اصطناعي للعمليات",
    },
    desc: {
      el: "Νοημοσύνη για managers και ιδιοκτήτες. Ο Theo διαχειρίζεται analytics, forecasting, insights αποθέματος, και B2B λειτουργίες. Τα δεδομένα σας, μετατρεπόμενα σε αποφάσεις.",
      en: "Intelligence for managers and owners. Theo handles analytics, forecasting, inventory insights, and B2B operations. Your data, transformed into actionable decisions.",
      ru: "Интеллект для менеджеров и владельцев. Theo управляет аналитикой, прогнозированием, складскими данными и B2B-операциями. Ваши данные — в действенные решения.",
      ar: "ذكاء للمديرين والملاك. ثيو يتولى التحليلات والتنبؤات وإدارة المخزون وعمليات B2B. بياناتك تتحول إلى قرارات فعّالة.",
    },
  },
  elLoyal: {
    badge: { el: "EL-Loyal", en: "EL-Loyal", ru: "EL-Loyal", ar: "EL-Loyal" },
    title: {
      el: "Loyalty Που Πραγματικά Λειτουργεί",
      en: "Loyalty That Actually Works",
      ru: "Программа лояльности, которая работает",
      ar: "ولاء يعمل فعلاً",
    },
    desc: {
      el: "Ξεχάστε τις κάρτες σφραγίδων. Το EL-Loyal κάνει gamify την εμπειρία πελάτη με πόντους, επίπεδα, challenges και ανταμοιβές. Η Ella κάνει κάθε πελάτη να νιώθει VIP.",
      en: "Forget punch cards. EL-Loyal gamifies the customer experience with points, tiers, challenges, and rewards. Ella makes every customer feel like a VIP.",
      ru: "Забудьте о карточках со штампами. EL-Loyal геймифицирует клиентский опыт с баллами, уровнями, челленджами и наградами. Ella делает каждого клиента VIP.",
      ar: "انسَ بطاقات الختم. EL-Loyal يحوّل تجربة العميل إلى لعبة بالنقاط والمستويات والتحديات والمكافآت. إيلا تجعل كل عميل يشعر كشخصية مهمة.",
    },
    stat1: { el: "Υψηλότερο ποσοστό επιστροφής", en: "Higher return rate", ru: "Выше возвращаемость", ar: "معدل عودة أعلى" },
    stat2: { el: "Μέσ. αύξηση λογαριασμού", en: "Avg. ticket increase", ru: "Ср. рост чека", ar: "زيادة متوسط الفاتورة" },
    features: {
      pointsTiers: {
        title: { el: "Πόντοι & Επίπεδα", en: "Points & Tiers", ru: "Баллы и уровни", ar: "نقاط ومستويات" },
        desc: {
          el: "Ανταμείψτε πιστούς πελάτες με επίπεδα και αποκλειστικά προνόμια",
          en: "Reward loyal customers with levels and exclusive perks",
          ru: "Поощряйте лояльных клиентов уровнями и эксклюзивными привилегиями",
          ar: "كافئ العملاء المخلصين بمستويات وامتيازات حصرية",
        },
      },
      aiConcierge: {
        title: { el: "AI Concierge", en: "AI Concierge", ru: "AI Консьерж", ar: "كونسيرج ذكي" },
        desc: {
          el: "Η Ella υποδέχεται, προτείνει και διαχειρίζεται ανταμοιβές αυτόματα",
          en: "Ella greets, recommends, and handles rewards automatically",
          ru: "Ella приветствует, рекомендует и управляет наградами автоматически",
          ar: "إيلا ترحّب وتوصي وتدير المكافآت تلقائياً",
        },
      },
      challenges: {
        title: { el: "Gamified Challenges", en: "Gamified Challenges", ru: "Игровые челленджи", ar: "تحديات تفاعلية" },
        desc: {
          el: "Εβδομαδιαία challenges που αυξάνουν τις επαναλαμβανόμενες επισκέψεις",
          en: "Weekly challenges that drive repeat visits and engagement",
          ru: "Еженедельные челленджи для повторных визитов и вовлечённости",
          ar: "تحديات أسبوعية تزيد الزيارات المتكررة والتفاعل",
        },
      },
      multiLang: {
        title: { el: "Πολύγλωσσο", en: "Multi-language", ru: "Мультиязычность", ar: "متعدد اللغات" },
        desc: {
          el: "Πλήρης υποστήριξη σε Ελληνικά, Αγγλικά και Αραβικά",
          en: "Full support in Greek, English, and Arabic",
          ru: "Полная поддержка на греческом, английском и арабском",
          ar: "دعم كامل باليونانية والإنجليزية والعربية",
        },
      },
    },
    cta: { el: "Επισκεφτείτε το EL-Loyal", en: "Visit EL-Loyal", ru: "Посетить EL-Loyal", ar: "زيارة EL-Loyal" },
  },
  rsrv: {
    badge: { el: "RSRV", en: "RSRV", ru: "RSRV", ar: "RSRV" },
    title: {
      el: "Κρατήσεις, Ξανασχεδιασμένες",
      en: "Reservations, Reimagined",
      ru: "Бронирования нового поколения",
      ar: "حجوزات أُعيد تصميمها",
    },
    desc: {
      el: "Διαχειριστείτε τα τραπέζια σας σαν έμπειρος maître d'. Real-time διαθεσιμότητα, έξυπνη πρόληψη overbooking, επιβεβαιώσεις WhatsApp, και απρόσκοπτη επικοινωνία.",
      en: "Manage your tables like a seasoned maitre d'. Real-time availability, smart overbooking prevention, WhatsApp confirmations, and seamless guest communication.",
      ru: "Управляйте столиками как опытный метрдотель. Доступность в реальном времени, умное предотвращение овербукинга, подтверждения WhatsApp и бесшовная коммуникация.",
      ar: "أدِر طاولاتك كمضيف محترف. توفر فوري، منع ذكي للحجز الزائد، تأكيدات واتساب، وتواصل سلس مع الضيوف.",
    },
    features: [
      { el: "Widget κρατήσεων online", en: "Online booking widget", ru: "Виджет онлайн-бронирования", ar: "أداة حجز إلكتروني" },
      { el: "Διαχείριση τραπεζιών", en: "Table management", ru: "Управление столиками", ar: "إدارة الطاولات" },
      { el: "Ειδοποιήσεις WhatsApp & SMS", en: "WhatsApp & SMS notifications", ru: "Уведомления WhatsApp и SMS", ar: "إشعارات واتساب ورسائل نصية" },
      { el: "Παρακολούθηση no-show", en: "No-show tracking", ru: "Отслеживание неявок", ar: "تتبع عدم الحضور" },
    ],
    featureCards: {
      booking: {
        title: { el: "Online Κρατήσεις", en: "Online Booking", ru: "Онлайн-бронирование", ar: "حجز إلكتروني" },
        desc: {
          el: "Ενσωματώσιμο widget για το site και τα social σας",
          en: "Embeddable widget for your website and social media",
          ru: "Встраиваемый виджет для сайта и соцсетей",
          ar: "أداة قابلة للتضمين في موقعك ووسائل التواصل",
        },
      },
      tables: {
        title: { el: "Διαχείριση Τραπεζιών", en: "Table Management", ru: "Управление столиками", ar: "إدارة الطاولات" },
        desc: {
          el: "Real-time κάτοψη με έξυπνη βελτιστοποίηση θέσεων",
          en: "Real-time floor plan with smart seat optimization",
          ru: "План зала в реальном времени с оптимизацией рассадки",
          ar: "مخطط فوري للقاعة مع تحسين ذكي للمقاعد",
        },
      },
      whatsapp: {
        title: { el: "Ειδοποιήσεις WhatsApp", en: "WhatsApp Alerts", ru: "Уведомления WhatsApp", ar: "تنبيهات واتساب" },
        desc: {
          el: "Αυτόματες επιβεβαιώσεις και υπενθυμίσεις μέσω WhatsApp",
          en: "Automatic confirmations and reminders via WhatsApp",
          ru: "Автоматические подтверждения и напоминания через WhatsApp",
          ar: "تأكيدات وتذكيرات تلقائية عبر واتساب",
        },
      },
      analytics: {
        title: { el: "Αναλυτικά No-show", en: "No-show Analytics", ru: "Аналитика неявок", ar: "تحليلات عدم الحضور" },
        desc: {
          el: "Παρακολουθήστε μοτίβα και μειώστε ακυρώσεις με δεδομένα",
          en: "Track patterns and reduce cancellations with data",
          ru: "Отслеживайте паттерны и сокращайте отмены с помощью данных",
          ar: "تتبع الأنماط وقلل الإلغاءات بالبيانات",
        },
      },
    },
    cta: { el: "Επισκεφτείτε το RSRV", en: "Visit RSRV", ru: "Посетить RSRV", ar: "زيارة RSRV" },
  },
  elOs: {
    badge: { el: "EL-OS", en: "EL-OS", ru: "EL-OS", ar: "EL-OS" },
    title: {
      el: "Το B2B Κέντρο Ελέγχου Σας",
      en: "Your B2B Command Center",
      ru: "Ваш B2B командный центр",
      ar: "مركز التحكم B2B الخاص بك",
    },
    desc: {
      el: "Χονδρικές παραγγελίες, διαχείριση προμηθευτών, ενσωμάτωση ERP, και φορολογικές αναφορές. Όλο το backend, ενοποιημένο σε ένα έξυπνο dashboard.",
      en: "Wholesale ordering, vendor management, ERP integration, and fiscal reports. Everything backend, unified in one intelligent dashboard.",
      ru: "Оптовые заказы, управление поставщиками, интеграция ERP и фискальные отчёты. Весь бэкенд в одной умной панели.",
      ar: "طلبات الجملة، إدارة الموردين، تكامل ERP، والتقارير المالية. كل شيء في لوحة تحكم ذكية واحدة.",
    },
    features: [
      { el: "Διαχείριση προμηθευτών", en: "Vendor & supplier management", ru: "Управление поставщиками", ar: "إدارة الموردين" },
      { el: "Ενσωμάτωση ERP", en: "ERP integration", ru: "Интеграция ERP", ar: "تكامل ERP" },
      { el: "Φορολογική συμμόρφωση", en: "Fiscal compliance", ru: "Фискальное соответствие", ar: "الامتثال الضريبي" },
      { el: "Real-time αναλυτικά", en: "Real-time analytics", ru: "Аналитика в реальном времени", ar: "تحليلات فورية" },
    ],
    featureCards: {
      wholesale: {
        title: { el: "Χονδρικές Παραγγελίες", en: "Wholesale Ordering", ru: "Оптовые заказы", ar: "طلبات الجملة" },
        desc: {
          el: "Εξυπνοποιημένες B2B παραγγελίες από το δίκτυο προμηθευτών σας",
          en: "Streamlined B2B ordering from your supplier network",
          ru: "Оптимизированные B2B-заказы из вашей сети поставщиков",
          ar: "طلبات B2B مبسّطة من شبكة مورديك",
        },
      },
      vendors: {
        title: { el: "Διαχείριση Προμηθευτών", en: "Vendor Management", ru: "Управление поставщиками", ar: "إدارة الموردين" },
        desc: {
          el: "Παρακολουθήστε προμηθευτές, τιμολόγια και όρους πληρωμής σε ένα μέρος",
          en: "Track suppliers, invoices, and payment terms in one place",
          ru: "Отслеживайте поставщиков, счета и условия оплаты в одном месте",
          ar: "تتبع الموردين والفواتير وشروط الدفع في مكان واحد",
        },
      },
      erp: {
        title: { el: "Ενσωμάτωση ERP", en: "ERP Integration", ru: "Интеграция ERP", ar: "تكامل ERP" },
        desc: {
          el: "Συνδεθείτε με υπάρχοντα συστήματα για απρόσκοπτη ροή δεδομένων",
          en: "Connect with existing systems for seamless data flow",
          ru: "Подключайтесь к существующим системам для бесшовного потока данных",
          ar: "اتصل بالأنظمة الحالية لتدفق سلس للبيانات",
        },
      },
      fiscal: {
        title: { el: "Φορολογικές Αναφορές", en: "Fiscal Reports", ru: "Фискальные отчёты", ar: "التقارير المالية" },
        desc: {
          el: "Αυτόματες αναφορές συμμόρφωσης για την ελληνική φορολογία",
          en: "Auto-generated compliance reports for Greek tax law",
          ru: "Автогенерация отчётов по греческому налоговому законодательству",
          ar: "تقارير امتثال تلقائية للقانون الضريبي اليوناني",
        },
      },
    },
    cta: { el: "Επισκεφτείτε το EL-OS", en: "Visit EL-OS", ru: "Посетить EL-OS", ar: "زيارة EL-OS" },
  },
  ellaDedicated: {
    badge: {
      el: "Για Τους Πελάτες Σας",
      en: "For Your Customers",
      ru: "Для ваших клиентов",
      ar: "لعملائك",
    },
    title: {
      el: "Γνωρίστε την Ella — Η AI Concierge Των Πελατών Σας",
      en: "Meet Ella — Your Customers' AI Concierge",
      ru: "Познакомьтесь с Ella — AI-консьерж ваших клиентов",
      ar: "تعرّف على إيلا — كونسيرج الذكاء الاصطناعي لعملائك",
    },
    desc: {
      el: "Εγκαταστήστε την Ella στο μαγαζί σας και αφήστε τη να διαχειρίζεται loyalty πελατών, εξατομικευμένες προτάσεις, και 24/7 πολύγλωσση υποστήριξη. Γίνεται πιο έξυπνη με κάθε αλληλεπίδραση.",
      en: "Deploy Ella at your venue and let her handle customer loyalty, personalized recommendations, and 24/7 multilingual support. She gets smarter with every interaction.",
      ru: "Подключите Ella в вашем заведении — она управляет лояльностью, персонализированными рекомендациями и многоязычной поддержкой 24/7. Она умнеет с каждым взаимодействием.",
      ar: "فعّل إيلا في مكانك ودعها تدير ولاء العملاء والتوصيات المخصصة والدعم متعدد اللغات على مدار الساعة. تصبح أذكى مع كل تفاعل.",
    },
    cta: {
      el: "Δείτε την Ella σε Δράση",
      en: "See Ella in Action",
      ru: "Смотреть Ella в действии",
      ar: "شاهد إيلا أثناء العمل",
    },
    features: [
      {
        title: { el: "Θυμάται Κάθε Πελάτη", en: "Remembers Every Customer", ru: "Запоминает каждого клиента", ar: "تتذكر كل عميل" },
        desc: {
          el: "Ονόματα, προτιμήσεις, αλλεργίες, αγαπημένο τραπέζι — η Ella δεν ξεχνά ποτέ.",
          en: "Names, preferences, allergies, favourite table — Ella never forgets.",
          ru: "Имена, предпочтения, аллергии, любимый столик — Ella никогда не забывает.",
          ar: "الأسماء، التفضيلات، الحساسيات، الطاولة المفضلة — إيلا لا تنسى أبداً.",
        },
      },
      {
        title: { el: "Διαχειρίζεται Loyalty Αυτόματα", en: "Handles Loyalty Automatically", ru: "Управляет лояльностью автоматически", ar: "تدير الولاء تلقائياً" },
        desc: {
          el: "Πόντοι, επίπεδα, ανταμοιβές και challenges — όλα χωρίς κόπο του προσωπικού.",
          en: "Points, tiers, rewards, and challenges — all managed without staff effort.",
          ru: "Баллы, уровни, награды и челленджи — всё без усилий персонала.",
          ar: "نقاط ومستويات ومكافآت وتحديات — كل شيء بدون جهد من الموظفين.",
        },
      },
      {
        title: { el: "Μιλάει τη Γλώσσα Τους", en: "Speaks Their Language", ru: "Говорит на их языке", ar: "تتحدث لغتهم" },
        desc: {
          el: "Πλήρεις συνομιλίες σε Ελληνικά, Αγγλικά και Αραβικά — ιδανικό για τουρισμό.",
          en: "Full conversations in Greek, English, and Arabic — perfect for tourism.",
          ru: "Полноценные разговоры на греческом, английском и арабском — идеально для туризма.",
          ar: "محادثات كاملة باليونانية والإنجليزية والعربية — مثالي للسياحة.",
        },
      },
      {
        title: { el: "Προληπτικές Προτάσεις", en: "Proactive Recommendations", ru: "Проактивные рекомендации", ar: "توصيات استباقية" },
        desc: {
          el: "Προτείνει πιάτα, υπενθυμίζει προσφορές, και κάνει follow-up μετά τις επισκέψεις.",
          en: "Suggests dishes, reminds about offers, and follows up after visits.",
          ru: "Предлагает блюда, напоминает об акциях и следит после визитов.",
          ar: "تقترح أطباقاً وتذكّر بالعروض وتتابع بعد الزيارات.",
        },
      },
    ],
  },
  eveyDedicated: {
    badge: {
      el: "Για Σας, Προσωπικά",
      en: "For You, Personally",
      ru: "Для вас лично",
      ar: "لك شخصياً",
    },
    title: {
      el: "Γνωρίστε την EveY — Η Προσωπική Σας AI",
      en: "Meet EveY — Your Personal AI",
      ru: "Познакомьтесь с EveY — ваш персональный AI",
      ar: "تعرّف على EveY — ذكاؤك الاصطناعي الشخصي",
    },
    desc: {
      el: "Δεν είναι chatbot. Είναι concierge. Η EveY είναι η προσωπική σας AI βοηθός που θυμάται τα πάντα, διαχειρίζεται τη μέρα σας, και γίνεται πιο έξυπνη όσο μιλάτε. Διαθέσιμη στο Telegram.",
      en: "Not a chatbot. A concierge. EveY is your personal AI assistant that remembers everything, manages your day, and grows smarter the more you talk to her. Available on Telegram.",
      ru: "Не чат-бот. Консьерж. EveY — ваш персональный AI-ассистент, который запоминает всё, управляет вашим днём и становится умнее с каждым разговором. Доступна в Telegram.",
      ar: "ليست روبوت دردشة. إنها كونسيرج. EveY مساعدتك الذكية الشخصية التي تتذكر كل شيء وتدير يومك وتصبح أذكى كلما تحدثت معها. متاحة على تيليجرام.",
    },
    cta: {
      el: "Δοκιμάστε την EveY Δωρεάν",
      en: "Try EveY Free",
      ru: "Попробуйте EveY бесплатно",
      ar: "جرّب EveY مجاناً",
    },
    features: [
      {
        title: { el: "Θυμάται Τα Πάντα", en: "Remembers Everything", ru: "Запоминает всё", ar: "تتذكر كل شيء" },
        desc: {
          el: "Τις προτιμήσεις σας, τις ρουτίνες, τις επαφές — η EveY χτίζει μια εικόνα για σας.",
          en: "Your preferences, routines, contacts — EveY builds a picture of you over time.",
          ru: "Ваши предпочтения, рутины, контакты — EveY создаёт ваш портрет со временем.",
          ar: "تفضيلاتك وروتينك وجهات اتصالك — EveY تبني صورة عنك مع الوقت.",
        },
      },
      {
        title: { el: "Προληπτικό Follow-up", en: "Proactive Follow-ups", ru: "Проактивные напоминания", ar: "متابعة استباقية" },
        desc: {
          el: "Δεν περιμένει να ρωτηθεί. Υπενθυμίζει, ελέγχει, και κλείνει τον κύκλο.",
          en: "She doesn't wait to be asked. She reminds, checks in, and closes the loop.",
          ru: "Не ждёт, пока её спросят. Напоминает, проверяет и доводит до конца.",
          ar: "لا تنتظر أن تُسأل. تذكّر وتتابع وتغلق الحلقة.",
        },
      },
      {
        title: { el: "Νέα & Ενημερώσεις", en: "News & Updates", ru: "Новости и обновления", ar: "أخبار وتحديثات" },
        desc: {
          el: "Επιλεγμένα νέα, καιρός και trends φιλτραρισμένα μόνο για σας — χωρίς θόρυβο.",
          en: "Curated news, weather, and trends filtered just for you — no noise.",
          ru: "Отобранные новости, погода и тренды только для вас — без шума.",
          ar: "أخبار وطقس واتجاهات مختارة لك فقط — بدون ضوضاء.",
        },
      },
      {
        title: { el: "Σας Προκαλεί", en: "Challenges You", ru: "Бросает вызов", ar: "تتحداك" },
        desc: {
          el: "Δεν λέει απλά ναι. Αν κάτι δεν πάει καλά, στο λέει — ειλικρινά.",
          en: "She won't just say yes. If something's off, she'll tell you — honestly.",
          ru: "Не просто соглашается. Если что-то не так — скажет честно.",
          ar: "لن توافق فقط. إذا كان هناك خطأ، ستخبرك — بصراحة.",
        },
      },
    ],
  },
  portfolio: {
    badge: {
      el: "Το Χαρτοφυλάκιό Μας",
      en: "Our Portfolio",
      ru: "Наше портфолио",
      ar: "أعمالنا",
    },
    title: {
      el: "Έργα της EL VALUE",
      en: "Projects by EL VALUE",
      ru: "Проекты EL VALUE",
      ar: "مشاريع EL VALUE",
    },
    extratzis: {
      el: "Πλατφόρμα Εύρεσης Εργασίας — Βρες Δουλειά Σε Όλους Τους Κλάδους",
      en: "Job Platform — Find Work Across All Sectors",
      ru: "Платформа поиска работы — Найди работу во всех отраслях",
      ar: "منصة توظيف — اعثر على عمل في جميع القطاعات",
    },
    nextgencalls: {
      el: "AI Τηλεφωνικός Πράκτορας — Κλήσεις Με Τεχνητή Νοημοσύνη",
      en: "AI Call Agent — Intelligent Phone Automation",
      ru: "AI телефонный агент — Интеллектуальная автоматизация звонков",
      ar: "وكيل مكالمات ذكي — أتمتة هاتفية بالذكاء الاصطناعي",
    },
  },
  stats: {
    venues: { el: "Καταστήματα", en: "Venues", ru: "Заведения", ar: "مواقع" },
    transactions: { el: "Συναλλαγές", en: "Transactions", ru: "Транзакции", ar: "معاملات" },
    uptime: { el: "Διαθεσιμότητα", en: "Uptime", ru: "Аптайм", ar: "وقت التشغيل" },
    aiSupport: { el: "AI Υποστήριξη", en: "AI Support", ru: "AI поддержка", ar: "دعم ذكي" },
  },
  cta: {
    title: {
      el: "Έτοιμοι να Μεταμορφώσετε την Επιχείρησή Σας;",
      en: "Ready to Transform Your Business?",
      ru: "Готовы трансформировать ваш бизнес?",
      ar: "مستعد لتحويل عملك؟",
    },
    subtitle: {
      el: "Γίνετε μέρος εκατοντάδων καταστημάτων που χρησιμοποιούν ήδη την EL VALUE για να βελτιώσουν τις λειτουργίες τους.",
      en: "Join hundreds of venues already using EL VALUE to streamline operations and delight customers.",
      ru: "Присоединяйтесь к сотням заведений, уже использующих EL VALUE для оптимизации и радости клиентов.",
      ar: "انضم إلى مئات المواقع التي تستخدم EL VALUE لتبسيط العمليات وإسعاد العملاء.",
    },
    button: {
      el: "Ξεκινήστε",
      en: "Get Started",
      ru: "Начать",
      ar: "ابدأ الآن",
    },
    viva: {
      el: "Άνοιγμα Λογαριασμού Viva",
      en: "Open Viva Account",
      ru: "Открыть счёт Viva",
      ar: "افتح حساب Viva",
    },
    badges: {
      gdpr: { el: "Συμμόρφωση GDPR", en: "GDPR Compliant", ru: "Соответствие GDPR", ar: "متوافق مع GDPR" },
      eu: { el: "EU Data Centers", en: "EU Data Centers", ru: "Дата-центры ЕС", ar: "مراكز بيانات أوروبية" },
      sla: { el: "99.9% Uptime SLA", en: "99.9% Uptime SLA", ru: "SLA 99.9% аптайм", ar: "SLA وقت تشغيل 99.9%" },
    },
  },
} as const
