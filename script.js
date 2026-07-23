/* ================= DATA ================= */
const projects = [
  {
    slug: "isoul",
    title: "ISOUL",
    label: "Social Platform / Mobile",
    period: "Октябрь 2024 — н.в. · App Store + Google Play",
    theme: { primary: "#2F6BFF", accent: "#7A3CFF", surface: "#0E1730" },
    subtitle: "Международная женская ассоциация: соцплатформа для нетворкинга, событий и личностного роста.",
    summary: "ISOUL — платформа, где женщины общаются, делятся опытом и участвуют в воркшопах для личностного роста. Регистрация, участие в событиях, нетворкинг и доступ к эксклюзивному контенту в безопасном и поддерживающем пространстве с персональными рекомендациями.",
    client: "ISOUL — международная женская ассоциация",
    cover: "assets/projects/isoul/cover.png",
    coverFit: "cover",
    links: [
      { label: "App Store", type: "appstore", url: "https://apps.apple.com/app/isoul-women-networking/id6742156958" },
      { label: "Google Play", type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.mycompany.isoul" },
    ],
    challenge: [
      "Сообщество жило в разрозненных чатах и таблицах — не было единого пространства для резидентов.",
      "Нужно было объединить события, нетворкинг, библиотеку материалов и профили в одном приложении.",
      "Международная аудитория требовала стабильной работы, пушей и медиа-контента на iOS и Android.",
    ],
    solution: [
      "Собрали кроссплатформенное приложение «под ключ»: события с календарём, нетворкинг, лента новостей и профиль.",
      "Реализовали регистрацию, роли (резиденты/лидеры/партнёры), подписку, чаты и push-уведомления.",
      "Подключили Firebase, встроенное видео (Zoom/записи мастермайндов) и библиотеку материалов по направлениям.",
      "Опубликовали в App Store и Google Play, настроили обновления и стабильные релизы.",
    ],
    stack: ["Flutter", "FlutterFlow", "Dart", "Firebase", "Supabase", "Push Notifications"],
    stats: [
      { value: "200+", label: "Резидентов" },
      { value: "4000+", label: "Последовательниц" },
      { value: "432", label: "Мероприятия" },
      { value: "7", label: "Направлений" },
      { value: "6", label: "Президентов" },
      { value: "iOS + Android", label: "Публикация" },
    ],
    gallery: [
      { src: "assets/projects/isoul/news.png", caption: "Лента новостей и анонсов сообщества.", fit: "contain" },
      { src: "assets/projects/isoul/networking.png", caption: "Нетворкинг: участницы, лидеры, партнёры.", fit: "contain" },
      { src: "assets/projects/isoul/library.png", caption: "Библиотека материалов по направлениям.", fit: "contain" },
    ],
  },
  {
    slug: "ryba-rf",
    title: "РЫБА.РФ",
    label: "E-commerce / Mobile",
    period: "2025 · RuStore",
    theme: { primary: "#D0A93D", accent: "#8a6f28", surface: "#141414" },
    subtitle: "Магазин свежей рыбы, икры и морепродуктов с доставкой на дом: каталог, корзина, оплата картой и СБП.",
    summary: "РЫБА.РФ — мобильный магазин деликатесов: свежая и вяленая рыба, икра, морепродукты, пресервы, рулеты, полуфабрикаты. Удобный каталог с категориями, поиск, подробные карточки товаров с составом и условиями хранения, избранное, оформление заказа с доставкой или самовывозом, оплата картой и через СБП.",
    client: "РЫБА.РФ — доставка морепродуктов",
    cover: "assets/projects/ryba/cover.png",
    coverFit: "cover",
    links: [
      { label: "RuStore", type: "rustore", url: "https://www.rustore.ru/catalog/app/com.vashariba.app" },
    ],
    challenge: [
      "Нужен был удобный каталог с категориями и подкатегориями для широкого ассортимента.",
      "Покупателю важны состав, вес, условия хранения и производитель по каждому товару.",
      "Требовалась мультитенантность и стабильная работа на мобильных и в вебе.",
    ],
    solution: [
      "Собрали каталог с категориями, поиском, карточками товаров, избранным и корзиной.",
      "Реализовали оформление заказа с доставкой/самовывозом и оплатой картой и через СБП.",
      "Построили монорепо на Expo/React Native с общими @shop/* пакетами и REST-бэкендом.",
      "Опубликовали приложение в RuStore, настроили SMS-авторизацию и мультитенантность.",
    ],
    stack: ["React Native", "Expo SDK 54", "TypeScript", "Zustand", "React Query", "Supabase", "Node.js"],
    stats: [
      { value: "RuStore", label: "Публикация" },
      { value: "Mobile + Web", label: "Платформы" },
      { value: "Карта + СБП", label: "Оплата" },
      { value: "7+", label: "Категорий товаров" },
      { value: "Мультитенант", label: "Архитектура" },
      { value: "Expo RN", label: "Стек" },
    ],
    galleryTitle: "Товары из каталога",
    gallery: [
      { src: "assets/projects/ryba/ruleti.jpeg", caption: "Премиальные рулеты из рыбы." },
      { src: "assets/projects/ryba/ikra.jpeg", caption: "Икра — раздел деликатесов." },
      { src: "assets/projects/ryba/kopchenka.jpeg", caption: "Копчёная рыба и морепродукты." },
    ],
  },
  {
    slug: "backload",
    title: "Попутный груз",
    label: "Logistics / Mobile",
    period: "2026 · RuStore + Google Play",
    theme: { primary: "#1667E6", accent: "#F5A623", surface: "#E7F0FF" },
    subtitle: "P2P-логистика: заказчики создают заявки, а попутные перевозчики находят их на карте и откликаются.",
    summary: "Приложение для перевозки грузов попутными перевозчиками в одном направлении движения. Заказчик создаёт заявку за пару минут (маршрут, тип отправления, вес, габариты, сроки, вознаграждение), а исполнители находят заказы рядом — в каталоге или на карте, фильтруют по геолокации, срокам и стоимости, и откликаются со своей ценой. Профили с портфолио, встроенный чат, push-уведомления, отзывы и безопасная оплата картой.",
    client: "Попутный груз",
    cover: "assets/projects/backload/cover.png",
    coverFit: "cover",
    links: [
      { label: "RuStore", type: "rustore", url: "https://www.rustore.ru/catalog/app/com.mycompany.backloadapp" },
      { label: "Google Play", type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.mycompany.backloadapp" },
    ],
    challenge: [
      "Заказчики и перевозчики не имели единого места для попутных перевозок в одном направлении.",
      "Исполнителю нужно было находить заказы рядом — по городу, области или радиусу от себя.",
      "Ключевые требования — доверие и безопасность: проверенные профили, отзывы, защищённая оплата.",
    ],
    solution: [
      "Собрали двусторонний маркетплейс: заказчик создаёт заявку, исполнители откликаются с ценой и сроком.",
      "Сделали каталог и карту заказов с фильтрами по геолокации, срокам доставки и стоимости.",
      "Добавили профили с портфолио, встроенный чат с фото и push-уведомления о статусах.",
      "Внедрили 5-балльные отзывы и оплату банковской картой; опубликовали в RuStore и Google Play.",
    ],
    stack: ["Flutter", "FlutterFlow", "Dart", "Firebase", "OpenStreetMap", "Push Notifications"],
    stats: [
      { value: "RuStore + GP", label: "Публикация" },
      { value: "Заказчик ↔ Исполнитель", label: "Две роли" },
      { value: "Карта + радиус", label: "Геопоиск заказов" },
      { value: "Чат + Push", label: "Коммуникация" },
      { value: "5★ отзывы", label: "Репутация" },
      { value: "Оплата картой", label: "Платежи" },
    ],
    gallery: [
      { src: "assets/projects/backload/screen1.png", caption: "Поиск заказов: список заявок с маршрутом и ценой.", fit: "contain" },
      { src: "assets/projects/backload/screen2.png", caption: "Управление заявкой: исполнитель, маршрут, габариты.", fit: "contain" },
      { src: "assets/projects/backload/screen3.png", caption: "Профиль перевозчика: рейтинг и отзывы.", fit: "contain" },
    ],
  },
  {
    slug: "onymi",
    title: "Onymi",
    label: "Creator Tools / Video",
    period: "6 месяцев · Google Play + Telegram",
    theme: { primary: "#FF5A1F", accent: "#1A1020", surface: "#FFF0E8" },
    subtitle: "Сервис создания стикеров и анимаций с высоконагруженной обработкой пользовательского видео.",
    summary: "Платформа генерации стикеров и коротких анимаций с пайплайном массовой обработки медиа и автоматической оптимизацией контента.",
    client: "Creator startup",
    cover: "assets/projects/onymi/hero-card.png",
    challenge: [
      "Нужно было обеспечить массовую обработку пользовательских видео без деградации качества.",
      "Сервис должен выдерживать пиковые нагрузки в viral-сценариях.",
      "Ключевая задача — быстрое время до результата для пользователя.",
    ],
    solution: [
      "Построили распределённый пайплайн транскодинга и рендеринга с автомасштабированием.",
      "Оптимизировали алгоритмы детекции ключевых кадров и масок под пакетный режим.",
      "Сделали очередь приоритетов и предиктивное распределение воркеров.",
    ],
    stack: ["Flutter", "Supabase", "Docker", "Kubernetes", "Python", "Node.js", "FFmpeg"],
    stats: [
      { value: "Flutter", label: "Frontend" },
      { value: "Supabase on VPS", label: "Backend" },
      { value: "K8s + Docker + Python", label: "Видеопайплайн" },
    ],
    gallery: [
      { src: "assets/projects/onymi/mobile-main.png", caption: "Основной рабочий сценарий." },
      { src: "assets/projects/onymi/mobile-details.jpg", caption: "Детали пользовательского контента." },
      { src: "assets/projects/onymi/hero-card.png", caption: "Desktop-экран платформы Onymi." },
    ],
  },
  {
    slug: "bronicot",
    title: "Броникот",
    label: "Hospitality / Mobile + Web",
    period: "7 месяцев",
    theme: { primary: "#671C2D", accent: "#07BD74", surface: "#F3E9EB" },
    subtitle: "Экосистема ресторанного бронирования с рейтингом заведений и интерактивной картой зала.",
    summary: "Платформа для гостей и ресторанов: поиск, рейтинг, смарт-бронирование, управление загрузкой и онлайн-планом зала.",
    client: "Сеть ресторанных партнёров",
    cover: "assets/projects/bronicot/hero-card.png",
    challenge: [
      "Гостям сложно выбирать место в зале без наглядной схемы.",
      "У ресторанов были разрозненные каналы бронирования и высокий no-show.",
      "Нужно было синхронизировать booking, рейтинг и статусы столов в реальном времени.",
    ],
    solution: [
      "Сделали собственный графический движок схемы зала с drag/drop-логикой столов.",
      "Собрали единый контур бронирования: mobile для гостей + web-кабинет ресторана.",
      "Внедрили рейтинг и репутационную механику с модерацией и антифрод-фильтрами.",
    ],
    stack: ["Flutter", "Supabase", "Docker", "Node.js", "Custom Painter"],
    stats: [
      { value: "Flutter", label: "Frontend" },
      { value: "Supabase Docker + Node.js", label: "Backend" },
      { value: "Custom Painter", label: "Движок карты" },
    ],
    gallery: [
      { src: "assets/projects/bronicot/mobile-main.png", caption: "Мобильный главный экран приложения." },
      { src: "assets/projects/bronicot/mobile-favorites.png", caption: "Экран избранных заведений." },
      { src: "assets/projects/bronicot/hero-card.png", caption: "Desktop-сценарий бронирования." },
    ],
  },
  {
    slug: "bum-messenger",
    title: "BuMe",
    label: "Messenger / Mobile",
    period: "9 месяцев · RuStore",
    theme: { primary: "#3159C7", accent: "#3A6EFF", surface: "#EAF0FF" },
    subtitle: "Мобильный мессенджер с задачами внутри чатов и E2EE-шифрованием уровня Signal.",
    summary: "Коммуникационный продукт для команд с безопасным обменом сообщениями, задачами, файлами и приватными рабочими группами.",
    client: "B2B SaaS",
    cover: "assets/projects/bum-messenger/hero-card.png",
    links: [
      { label: "RuStore", type: "rustore", url: "https://www.rustore.ru/catalog/app/com.boom.app" },
    ],
    challenge: [
      "Требовалось реализовать защищённый обмен сообщениями с минимальной задержкой.",
      "Задачи и чаты были разнесены по разным продуктам, снижая эффективность команд.",
      "Ключевой риск — безопасность ключей и синхронизация на нескольких устройствах.",
    ],
    solution: [
      "Построили E2EE-протокол и ротацию ключей по модели, близкой к Signal.",
      "Интегрировали задачи прямо в чаты: SLA, дедлайны, ответственные, статусы.",
      "Реализовали защищённые вложения и офлайн-очередь сообщений.",
    ],
    stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "libsignal"],
    stats: [
      { value: "React Native", label: "Frontend" },
      { value: "libsignal E2EE", label: "Шифрование" },
      { value: "PostgreSQL + Node.js", label: "Backend" },
    ],
    gallery: [
      { src: "assets/projects/bum-messenger/mobile-screen-1.png", caption: "Чат с рабочим контекстом и задачами." },
      { src: "assets/projects/bum-messenger/mobile-screen-2.png", caption: "Переписка с деталями сообщения." },
      { src: "assets/projects/bum-messenger/hero-card.png", caption: "Desktop-экран рабочих чатов." },
    ],
  },
  {
    slug: "strahovoy-market",
    title: "Страховой маркет",
    label: "InsurTech / Mobile + AI",
    period: "2026 · App Store · Google Play · RuStore",
    theme: { primary: "#0D9488", accent: "#F5A623", surface: "#E0F2F1" },
    subtitle: "Оформление страховок онлайн с ИИ-ассистентом: ОСАГО, КАСКО и страхование жизни и имущества при ипотеке.",
    summary: "Мобильное приложение для быстрого оформления страховых продуктов онлайн: ОСАГО, КАСКО, страхование жизни и имущества при ипотеке. Расчёт стоимости, сравнение предложений, оплата и хранение полисов — в одном приложении. Встроенный ИИ-ассистент понимает запросы голосом и текстом: подскажет нужный продукт, поможет собрать документы и проведёт по шагам до готового полиса — доступен в каждом разделе и заменяет техподдержку.",
    client: "Страховой маркет (Сммаркет)",
    cover: "assets/projects/strahovoy-market/cover.png",
    coverFit: "cover",
    links: [
      { label: "App Store", type: "appstore", url: "https://apps.apple.com/app/id6779952432" },
      { label: "Google Play", type: "googleplay", url: "https://play.google.com/store/apps/details?id=com.developer.strahovoymarket" },
      { label: "RuStore", type: "rustore", url: "https://www.rustore.ru/catalog/app/com.developer.strahovoymarket" },
    ],
    challenge: [
      "Оформление страховок обычно требует бумаг, поездок в офис и ручного ввода данных.",
      "Пользователю сложно выбрать продукт и сравнить предложения без консультанта.",
      "Нужно было заменить техподдержку умным помощником, доступным в каждом разделе.",
    ],
    solution: [
      "Собрали ИИ-ассистента с голосовым и текстовым вводом, который ведёт до готового полиса.",
      "Реализовали распознавание данных с фото документов (паспорт, СТС, ВУ) через камеру.",
      "Сделали расчёт и сравнение предложений, разделы «Мои документы» и «Мои полисы» со статусами.",
      "Добавили push о пролонгации заранее, SMS-регистрацию и оплату; выпустили в 3 сторах.",
    ],
    stack: ["React Native", "Expo SDK 54", "TypeScript", "Supabase", "ИИ-ассистент", "Camera OCR", "Push"],
    stats: [
      { value: "ИИ-ассистент", label: "Голос + текст" },
      { value: "OCR документов", label: "Паспорт · СТС · ВУ" },
      { value: "3 стора", label: "App Store · GP · RuStore" },
      { value: "ОСАГО · КАСКО", label: "+ Ипотека" },
      { value: "Мои полисы", label: "Статусы + пролонгация" },
      { value: "Expo RN", label: "Стек" },
    ],
    gallery: [
      { src: "assets/projects/strahovoy-market/app1.png", caption: "Главный экран: продукты и категории страхования.", fit: "contain" },
      { src: "assets/projects/strahovoy-market/app2.png", caption: "ИИ-консультант: помощь и быстрые сценарии.", fit: "contain" },
      { src: "assets/projects/strahovoy-market/app3.png", caption: "Чат с ассистентом: сравнение предложений.", fit: "contain" },
    ],
  },
  {
    slug: "study-work-shop",
    title: "Study&Work Shop",
    label: "EduTech / Marketplace",
    period: "5 месяцев · Telegram Mini App",
    theme: { primary: "#451DCE", accent: "#F17A28", surface: "#EEEBFB" },
    subtitle: "Маркетплейс учебных материалов: Telegram Mini App + веб-платформа с авторскими кабинетами.",
    summary: "Сервис публикации и продажи учебных материалов с полной логикой управления авторами, ролями, модерацией и выплатами.",
    client: "Независимая образовательная команда",
    cover: "assets/projects/study-work-shop/hero-card.png",
    challenge: [
      "Авторы и модераторы работали в разных инструментах без единого workflow.",
      "Покупателю было сложно находить релевантные материалы по уровню и теме.",
      "Нужен был единый каталог, доступный и в Telegram, и в web-версии.",
    ],
    solution: [
      "Реализовали единое ядро контента и самописный движок управления авторами.",
      "Сделали Telegram Mini App как быстрый канал покупки и доступа к материалам.",
      "Добавили web-кабинеты, модерацию, теги, витрины и прозрачную аналитику продаж.",
    ],
    stack: ["Vite", "React 19", "TypeScript", "Node.js", "Express", "nginx", "pm2"],
    stats: [
      { value: "Vite + React 19", label: "Frontend" },
      { value: "Express + Node.js", label: "Backend" },
      { value: "nginx + pm2", label: "Инфраструктура" },
    ],
    gallery: [
      { src: "assets/projects/study-work-shop/mobile-catalog.png", caption: "Каталог материалов." },
      { src: "assets/projects/study-work-shop/mobile-photo.png", caption: "Карточка материала." },
      { src: "assets/projects/study-work-shop/hero-card.png", caption: "Desktop-экран платформы." },
    ],
  },
  {
    slug: "carzo",
    title: "Carzo",
    label: "Mobility / Dubai",
    period: "4 месяца",
    theme: { primary: "#00C2A8", accent: "#405FF2", surface: "#E1F7F3" },
    subtitle: "Сервис аренды автомобилей в Дубае с быстрым бронированием и прозрачными условиями аренды.",
    summary: "Платформа short-term и premium-аренды авто с каталогом, фильтрами, документ-онбордингом и управлением бронированием.",
    client: "Dubai rental operator",
    cover: "assets/projects/carzo/hero-card.png",
    challenge: [
      "Клиентам было сложно понять реальные условия аренды и лимиты депозитов.",
      "Большой каталог авто требовал быстрого и понятного подбора по параметрам.",
      "Команда оператора теряла скорость на ручной верификации документов.",
    ],
    solution: [
      "Собрали premium-витрину авто с прозрачными тарифами и правилами аренды.",
      "Внедрили умные фильтры, календарь доступности и экспресс-бронирование.",
      "Автоматизировали KYC-процесс и кабинет оператора для обработки заказов.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    stats: [
      { value: "+26%", label: "Конверсия в бронь" },
      { value: "-52%", label: "Время подтверждения" },
      { value: "+18%", label: "Повторная аренда" },
    ],
    gallery: [
      { src: "assets/projects/carzo/mobile-search.png", caption: "Поиск автомобиля." },
      { src: "assets/projects/carzo/mobile-push.png", caption: "In-app push в верхней зоне." },
      { src: "assets/projects/carzo/hero-card.png", caption: "Desktop-экран поиска и выбора." },
    ],
  },
];

const skills = [
  { icon: "📱", title: "Мобильная разработка", chips: ["Flutter", "FlutterFlow", "Dart", "React Native", "Expo"] },
  { icon: "🖥️", title: "Фронтенд", chips: ["React.js", "Next.js 14", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { icon: "🧩", title: "Языки", chips: ["JavaScript (ES6+)", "TypeScript", "Dart"] },
  { icon: "🗄️", title: "Backend / BaaS", chips: ["Firebase", "Supabase", "RESTful API", "Edge Functions", "SQL", "Node.js"] },
  { icon: "🔄", title: "Стейт-менеджмент", chips: ["Redux", "Redux Toolkit"] },
  { icon: "⚙️", title: "Инструменты и методологии", chips: ["Git", "Jira", "Agile / Scrum", "Код-ревью", "Спринты"] },
];

const timeline = [
  {
    period: "Октябрь 2024 — по настоящее время",
    place: "ISOUL / Студия + Фриланс",
    title: "Mobile Application Developer",
    points: [
      "Разработка мобильных приложений с нуля «под ключ» — от архитектуры до публикации в App Store и Google Play.",
      "Стек: Flutter, FlutterFlow, Dart, Firebase, Supabase, SQL, Edge Functions.",
      "Интеграция внешних API: Google Calendar, геолокация, Telegram Bot API, платёжные системы.",
      "Аутентификация, роли, права доступа, push-уведомления и облачные функции.",
      "Параллельно — фриланс-проекты под заказ для клиентов из СНГ и зарубежья.",
    ],
  },
  {
    period: "Февраль 2024 — Август 2024",
    place: "Deveducation · Psyconica",
    title: "Lead Frontend Developer",
    points: [
      "Руководил командой из 3 разработчиков на стартап-проекте платформы психологической поддержки.",
      "Стек: Next.js 14, TypeScript, Tailwind CSS, Redux Toolkit, Firebase Firestore.",
      "Реализовал OAuth-аутентификацию через Google и Twitter.",
      "Код-ревью, распределение задач в Jira по 5 спринтам, своевременная сдача проекта.",
    ],
  },
  {
    period: "Октябрь 2023 — Февраль 2024",
    place: "Deveducation",
    title: "Intern Frontend Developer",
    points: [
      "Разработал три веб-приложения на React, Redux, Bootstrap и Firebase в рамках стажировки.",
    ],
  },
];

/* ================= RENDER ================= */
const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };

function storeIcon(type) {
  if (type === "appstore") {
    return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 1.5c.1 1-.3 2-1 2.8-.7.8-1.7 1.3-2.7 1.2-.1-1 .3-2 1-2.7.7-.8 1.8-1.3 2.7-1.3zM19.9 17c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.2 3.2-3.8 3.2-1.4 0-1.8-.9-3.7-.9s-2.3.9-3.7.9c-1.6 0-2.8-1.6-3.7-3C1.1 16.1.8 11.5 2.4 9c1.1-1.7 2.9-2.7 4.6-2.7 1.7 0 2.8 1 4.2 1 1.4 0 2.2-1 4.2-1 1.5 0 3.1.8 4.2 2.3-3.7 2-3.1 7.3.1 8.4z"/></svg>`;
  }
  if (type === "rustore") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="7" fill="#0A6CFF"/><path d="M7.4 7.2h6.7c1.7 0 2.9 1 2.9 2.6 0 1.2-.7 2.1-1.8 2.5l2 4.1h-2.3l-1.8-3.8H9.4v3.8H7.4V7.2zm2 2v2.3h4.4c.7 0 1.2-.4 1.2-1.1 0-.7-.5-1.2-1.2-1.2H9.4z" fill="#fff"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00D2FF" d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l.1.1L13 12.4v-.2L3.7 2.2z"/><path fill="#00E676" d="M16.4 15.5 13 12.2v-.3l3.4-3.4.1.1 4 2.3c1.2.6 1.2 1.8 0 2.5z"/><path fill="#FF3D57" d="M16.5 15.4 13 12 3.6 21.7c.4.4 1 .5 1.8.1l11.1-6.4"/><path fill="#FFC107" d="M16.5 8.6 5.4 2.2C4.6 1.8 4 1.9 3.6 2.3L13 12z"/></svg>`;
}

// Cases
const casesGrid = document.getElementById("casesGrid");
projects.forEach((p, i) => {
  const bleed = p.coverFit === "cover";
  const card = el(`
    <article class="case" data-i="${i}" style="--p:${p.theme.primary}">
      <div class="case__media${bleed ? " case__media--bleed" : ""}" style="background:linear-gradient(160deg, ${p.theme.surface}, #ffffff)">
        <span class="case__label">${p.label}</span>
        <img src="${p.cover}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="case__body">
        <h3 class="case__title">${p.title}</h3>
        <p class="case__sub">${p.subtitle}</p>
        <div class="case__foot">
          <span class="case__period">${p.period}</span>
          <span class="case__more" style="color:${p.theme.primary}">Открыть кейс <span>→</span></span>
        </div>
      </div>
    </article>`);
  card.addEventListener("click", () => openModal(i));
  casesGrid.appendChild(card);
});

// Skills
const skillsGrid = document.getElementById("skillsGrid");
skills.forEach((s) => {
  skillsGrid.appendChild(el(`
    <div class="skill">
      <h3><i>${s.icon}</i> ${s.title}</h3>
      <div class="chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
    </div>`));
});

// Timeline
const tl = document.getElementById("timeline");
timeline.forEach((t) => {
  tl.appendChild(el(`
    <div class="tl">
      <div>
        <div class="tl__period">${t.period}</div>
        <div class="tl__place">${t.place}</div>
      </div>
      <div>
        <h3>${t.title}</h3>
        <ul>${t.points.map((p) => `<li>${p}</li>`).join("")}</ul>
      </div>
    </div>`));
});

/* ================= MODAL ================= */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

function openModal(i) {
  const p = projects[i];
  modalContent.innerHTML = `
    <div class="m-hero">
      <span class="m-label" style="background:${p.theme.primary}">${p.label}</span>
      <h2>${p.title}</h2>
      <p>${p.subtitle}</p>
      <div class="m-meta">
        <div><span>Клиент</span><b>${p.client}</b></div>
        <div><span>Период</span><b>${p.period}</b></div>
      </div>
      ${p.links ? `<div class="m-links">${p.links.map((l) => `<a class="store-btn store-btn--${l.type}" href="${l.url}" target="_blank" rel="noopener">${storeIcon(l.type)}<span><small>Загрузить в</small>${l.label}</span></a>`).join("")}</div>` : ""}
    </div>
    <div class="m-summary">${p.summary}</div>
    <div class="m-cols">
      <div class="m-col">
        <h4 style="color:${p.theme.primary}">Challenge</h4>
        <ul>${p.challenge.map((c) => `<li style="--b:${p.theme.primary}">${c}</li>`).join("")}</ul>
      </div>
      <div class="m-col">
        <h4 style="color:${p.theme.accent}">Solution</h4>
        <ul>${p.solution.map((c) => `<li style="--b:${p.theme.accent}">${c}</li>`).join("")}</ul>
      </div>
    </div>
    <h4 class="m-h4">Ключевые метрики</h4>
    <div class="m-stats">
      ${p.stats.map((s) => `<div class="m-stat"><b style="color:${p.theme.primary}">${s.value}</b><span>${s.label}</span></div>`).join("")}
    </div>
    <h4 class="m-h4">Стек</h4>
    <div class="m-stack">${p.stack.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
    <h4 class="m-h4">${p.galleryTitle || "Экраны"}</h4>
    <div class="m-gallery">
      ${p.gallery.map((g) => `<figure class="${g.fit === "contain" ? "fig--contain" : ""}"><img src="${g.src}" alt="${g.caption}" loading="lazy"><figcaption>${g.caption}</figcaption></figure>`).join("")}
    </div>`;
  modalContent.parentElement.scrollTop = 0;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modal.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ================= NAV ================= */
const burger = document.getElementById("burger");
const navMobile = document.getElementById("navMobile");
burger.addEventListener("click", () => navMobile.classList.toggle("open"));
navMobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navMobile.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
