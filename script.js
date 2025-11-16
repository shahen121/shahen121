// Rix Printing - Multilingual Website JavaScript

// Language translations
const translations = {
    ckb: {
        'nav-services': 'خزمەتگوزارییەکان',
        'nav-designs': 'تصاميم المميزة',
        'nav-about': 'دەربارەی ئێمە',
        'nav-contact': 'پەیوەندی',
        'nav-blog': 'بلاگ',
        'nav-whatsapp': 'واتساپ',
        'hero-title': 'چاپخانەی ریکس بۆ چاپەمەنی گشتی',
        'hero-subtitle': 'ئێمە یارمەتی براندەکان دەدەین بۆ دروستکردنی چاپی جیاواز و سەرنجڕاکێش.',
        'hero-trust': 'متمانە',
        'hero-quality': 'کواڵیتی',
        'hero-speed': 'خێرایی',
        'hero-cta': 'دەستپێبکە',
        'services-title': 'خزمەتگوزارییەکانمان',
        'services-subtitle': 'چاپخانەی ڕیکس ئەم خزمەتگوزارییانە پێشکەش دەکات',
        'printing-types': 'جۆرەکانی چاپکردن',
        'offset-printing': '• چاپی ئۆفسێت',
        'digital-printing': '• چاپی دیجیتال',
        'embossing': '• حەرف بارز',
        'uv-dtf': '• UV DTF چاپی',
        'dtf-printing': '• DTF چاپی',
        'tampo-printing': '• چاپی تامپۆ',
        'laser-printing': '• چاپی لێزەر',
        'thermal-printing': '• چاپی حەراری',
        'screen-printing': '• چاپی سکڕین',
        'drum-printing': '• چاپی دروومان',
        'poster-printing': 'چاپکردنی پۆستەر و بانەر',
        'design-print': '• دیزاین و چاپ',
        'large-format': '• چاپکردنی قەبارە گەورە',
        'high-quality': '• کوالێتی بەرز',
        'book-printing': 'چاپکردنی کتێب و گۆڤار',
        'various-designs': '• دیزاین و قەبارەی جیاواز',
        'cover-printing': '• چاپکردنی ناوەوە و بەرگ',
        'card-printing': 'چاپکردنی کارتی بانگهێشت و بزنس',
        'custom-design': '• دیزاینی تایبەت',
        'precise-cutting': '• بڕینی ورد',
        'clothing-printing': 'چاپکردنی جل و بەرگ',
        'direct-printing': '• دروومان و چاپکردنی ڕاستەوخۆ',
        'color-variety': '• ڕەنگ و دیزاینی جیاواز',
        'custom-packaging': 'چاپکردنی کارتۆنی تایبەت',
        'packaging-desc': 'چاپخانەی ڕیکس ڕێگەت پێدەدات چاپکراوی تایبەت بە براندەکەت دیزاین بکەیت و چاپی بکەیت.',
        'design-products': 'تصاميم المميزة',
        'booklet-catalog': 'بووکلیەت و کتەلۆگ',
        'brochure': 'بروشور',
        'business-card': 'کارتێکی کاروبار',
        'calendars': 'ساڵنامەکان',
        'car-stickers': 'ستیكەرەکانی ئۆتۆمبێل',
        'carbon-forms': 'فۆڕمەکانی کاربۆن‌نەبۆ',
        'clocks': 'کاتژمێر',
        'clothing-accessories': 'جل و جەمدان',
        'custom-pens': 'قەڵەمەکان کراوەسازکراو',
        'desk-sets': 'کۆمەڵەکانی سەریسێخ',
        'gift-baskets': 'دۆرهەنگەر',
        'envelopes': 'پاکەتنامە / ئەنوێلۆپ',
        'flags': 'ئالا',
        'flyers': 'فڵایەر',
        'folders': 'فۆڵدەر',
        'keychains': 'کلیلەکان/چاویلیکان',
        'labels-stickers': 'لێیبڵ و ستیكەر',
        'letterheads': 'سەرنامە',
        'notepads': 'نۆتبڵۆک',
        'notebooks': 'نوتبووک',
        'notepads-small': 'نوتپاد',
        'services-title': 'خزمەتگوزاریەکانمان',
        'food-products': 'بەرهەمە خواردنەوەیی ڕیکلامی',
        'gift-items': 'دۆرەفەری ڕیکلامی',
        'advertising-products': 'بەرهەمە ڕیکلامیەکان',
        'advertising-technology': 'تەکنەلۆژیای ڕیکلامی',
        'safety-items': 'کێشەکانی سەلامەتی',
        'signs-banners': 'نیشانە و بانەر',
        'flyers-d': 'فڵایەر د',
        'process-title': 'Your Custom Printing',
        'process-subtitle': 'لە Rix Printing، ئێمە بژاردەی چاپکردنی زۆر بە کوالێتی بەرز پێشکەش دەکەین.',
        'process-step1-title': 'قۆناغی یەکەم: دیزاین و چاپکردن',
        'process-step1-desc': 'هەڵبژاردنی جۆری دیزاین و ماددەکان بۆ چاپکراوی دیاریکراو.',
        'process-step2-title': 'قۆناغی دووەم: نموونە و پەسەندکردن',
        'process-step2-desc': 'پێشکەشکردنی نموونە بۆ پێداچوونەوە و پەسەندکردنی کۆتایی.',
        'process-step3-title': 'قۆناغی سێیەم: چاپکردن و گەیاندن',
        'process-step3-desc': 'دەستپێکردنی پڕۆسەی چاپ و گەیاندن بە کوالێتی بەرز.',
        'about-title': 'دەربارەی ئێمە',
        'about-desc1': 'ئێمە، لە چاپخانەی ڕیکس، شانازی دەکەین بە پێشکەشکردنی خزمەتگوزارییەکانی چاپ بە کڕیارە بەڕێزەکانمان.',
        'about-desc2': 'بۆ چەندین ساڵ، پشتگیری کڕیارەکانمان کردووە لە بوارە جیاوازەکانی چاپدا، بە هەوڵدان بۆ بەکارهێنانی تەواوی تواناکانمان بۆ پێشکەشکردنی خزمەتگوزاری چاپکردنی گشتیی کوالێتی بەرز و پێشکەوتوو.',
        'about-trust': 'متمانەپێکراوی',
        'about-quality': 'کوالێتی',
        'about-speed': 'خێرایی',
        'learn-title': 'فێربە چۆن سەرکەوتوو بیت بە چاپکردن',
        'learn-subtitle': 'ئێمە چارەسەری چاپکردنی داهێنەرانە پێشکەش دەکەین کە یارمەتی براندەکان دەدات سەرنجڕاکێش بن.',
        'learn-innovation': 'داهێنان',
        'learn-innovation-desc': 'تەکنەلۆژیای پێشکەوتوو بۆ باشترین ئەنجام',
        'learn-creativity': 'دەستفرۆشی',
        'learn-creativity-desc': 'دیزاینە تایبەتەکان بۆ براندەکەت',
        'learn-speed': 'خێرایی',
        'learn-speed-desc': 'خێرایی لە چاپ و گەیاندن',
        'partners-title': 'هاوبەش و کڕیارەکانمان',
        'partners-subtitle': 'کڕیارەکانمان سەرچاوەی هێز و سەرکەوتنمانن',
        'contact-title': 'پەیوەندی لەگەڵمان',
        'contact-subtitle': 'بۆ هەر پرسیارێک یان داواکارییەک پەیوەندیمان پێوە بکەن',
        'contact-form-title': 'فۆرمی پەیوەندی',
        'contact-name': 'ناوت',
        'contact-phone': 'ژمارەی مۆبایل',
        'contact-description': 'وەسفێک لەسەر داواکارییەکەت',
        'contact-submit': 'ناردن',
        'contact-info-title': 'زانیاری پەیوەندی',
        'contact-address': 'Bahrka - 150m overpass, Erbil, Iraq',
        'map-title': 'شوێنی چاپخانەکەمان',
        'footer-info': 'زانیاری',
        'footer-desc': 'باشترین چاپخانە لە هەرێمی کوردستان',
        'footer-contact': 'پەیوەندی',
        'footer-address': 'Bahrka - 150m overpass, Erbil, Iraq',
        'footer-follow': 'شوێنەکانمان',
        'footer-copyright': '© 2025 Rix Printing. هەموو مافەکانی پارێزراون.'
    },
    ar: {
        'nav-services': 'خدماتنا',
        'nav-designs': 'تصاميم المميزة',
        'nav-about': 'من نحن',
        'nav-contact': 'اتصل بنا',
        'nav-blog': 'المدونة',
        'nav-whatsapp': 'واتساب',
        'hero-title': 'مطبعة ريكس للطباعة العامة',
        'hero-subtitle': 'نحن نساعد العلامات التجارية على إنشاء طباعة مميزة وجذابة.',
        'hero-trust': 'موثوقية',
        'hero-quality': 'جودة',
        'hero-speed': 'سرعة',
        'hero-cta': 'ابدأ الآن',
        'services-title': 'خدماتنا',
        'services-subtitle': 'مطبعة ريكس تقدم هذه الخدمات',
        'printing-types': 'أنواع الطباعة',
        'offset-printing': '• طباعة أوفست',
        'digital-printing': '• طباعة رقمية',
        'embossing': '• طباعة بارزة',
        'uv-dtf': '• طباعة UV DTF',
        'dtf-printing': '• طباعة DTF',
        'tampo-printing': '• طباعة تمبوب',
        'laser-printing': '• طباعة ليزر',
        'thermal-printing': '• طباعة حرارية',
        'screen-printing': '• طباعة شاشة',
        'drum-printing': '• طباعة درام',
        'poster-printing': 'طباعة بوستر وبنر',
        'design-print': '• تصميم وطباعة',
        'large-format': '• طباعة كبيرة الحجم',
        'high-quality': '• جودة عالية',
        'book-printing': 'طباعة كتب ومجلات',
        'various-designs': '• تصاميم وأحجام متنوعة',
        'cover-printing': '• طباعة الغلاف والداخل',
        'card-printing': 'طباعة بطاقات دعوة وعمل',
        'custom-design': '• تصميم مخصص',
        'precise-cutting': '• قص دقيق',
        'clothing-printing': 'طباعة ملابس وأقمشة',
        'direct-printing': '• طباعة مباشرة ودرام',
        'color-variety': '• ألوان وتصاميم متنوعة',
        'custom-packaging': 'طباعة كرتون مخصص',
        'packaging-desc': 'مطبعة ريكس تتيح لك تصميم وطباعة منتجات مخصصة لعلامتك التجارية.',
        'design-products': 'تصاميم المميزة',
        'booklet-catalog': 'كتيبات وكتالوجات',
        'brochure': 'بروشورات',
        'business-card': 'بطاقات العمل',
        'calendars': 'تقاويم',
        'car-stickers': 'ملصقات السيارات',
        'carbon-forms': 'نماذج الكربون',
        'clocks': 'ساعات',
        'clothing-accessories': 'ملابس وإكسسوارات',
        'custom-pens': 'أقلام مخصصة',
        'desk-sets': 'مجموعات المكتب',
        'gift-baskets': 'سلال هدايا',
        'envelopes': 'ظروف',
        'flags': 'أعلام',
        'flyers': 'منشورات',
        'folders': 'مجلدات',
        'keychains': 'سلاسل مفاتيح',
        'labels-stickers': 'ملصقات وستيكرات',
        'letterheads': 'رؤوساءاءات',
        'notepads': 'دفاتر ملاحظات',
        'notebooks': 'كراسات',
        'notepads-small': 'دفاتر صغيرة',
        'services-title': 'خدماتنا',
        'food-products': 'منتجات غذائية إعلانية',
        'gift-items': 'هدايا إعلانية',
        'advertising-products': 'منتجات إعلانية',
        'advertising-technology': 'تكنولوجيا إعلانية',
        'safety-items': 'عناصر سلامة',
        'signs-banners': 'لافتات وبنرات',
        'flyers-d': 'منشورات د',
        'process-title': 'طباعتك المخصصة',
        'process-subtitle': 'في ريكس برنتينغ، نقدم خدمات طباعة عالية الجودة.',
        'process-step1-title': 'الخطوة الأولى: التصميم والطباعة',
        'process-step1-desc': 'اختيار نوع التصميم والمواد للمنتج المحدد.',
        'process-step2-title': 'الخطوة الثانية: العينة والموافقة',
        'process-step2-desc': 'تقديم عينة للمراجعة والموافقة النهائية.',
        'process-step3-title': 'الخطوة الثالثة: الطباعة والتسليم',
        'process-step3-desc': 'بدء عملية الطباعة والتسليم بجودة عالية.',
        'about-title': 'من نحن',
        'about-desc1': 'نحن، في مطبعة ريكس، نفخر بتقديم خدمات الطباعة لعملائنا الكرام.',
        'about-desc2': 'للسنوات عديدة، دعمنا عملائنا في مختلف مجالات الطباعة، من خلال بذل كل جهدنا لتقديم خدمات طباعة عامة عالية الجودة والتطور.',
        'about-trust': 'موثوقية',
        'about-quality': 'جودة',
        'about-speed': 'سرعة',
        'learn-title': 'تعلم كيف تنجح في الطباعة',
        'learn-subtitle': 'نحن نقدم حلول طباعة مبتكرة تساعد العلامات التجارية على التميز.',
        'learn-innovation': 'الابتكار',
        'learn-innovation-desc': 'تكنولوجيا متقدمة لأفضل النتائج',
        'learn-creativity': 'الإبداع',
        'learn-creativity-desc': 'تصاميم مخصصة لعلامتك التجارية',
        'learn-speed': 'السرعة',
        'learn-speed-desc': 'السرعة في الطباعة والتسليم',
        'partners-title': 'شركاؤنا وعملاؤنا',
        'partners-subtitle': 'عملاؤنا هم مصدر قوتنا ونجاحنا',
        'contact-title': 'اتصل بنا',
        'contact-subtitle': 'لا تتردد في الاتصال بنا لأي سؤال أو طلب',
        'contact-form-title': 'نموذج الاتصال',
        'contact-name': 'اسمك',
        'contact-phone': 'رقم الهاتف',
        'contact-description': 'وصف طلبك',
        'contact-submit': 'إرسال',
        'contact-info-title': 'معلومات الاتصال',
        'contact-address': 'بحركة - بعد جسر 150م، أربيل، العراق',
        'map-title': 'موقع مطبعتنا',
        'footer-info': 'معلومات',
        'footer-desc': 'أفضل مطبعة في إقليم كردستان',
        'footer-contact': 'اتصل بنا',
        'footer-address': 'بحركة - بعد جسر 150م، أربيل، العراق',
        'footer-follow': 'تابعنا',
        'footer-copyright': '© 2025 ريكس برنتينغ. جميع الحقوق محفوظة.'
    },
    en: {
        'nav-services': 'Services',
        'nav-designs': 'Featured Designs',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'nav-blog': 'Blog',
        'nav-whatsapp': 'WhatsApp',
        'hero-title': 'Rix Printing - General Printing Services',
        'hero-subtitle': 'We help brands create distinctive and attractive printing.',
        'hero-trust': 'Trust',
        'hero-quality': 'Quality',
        'hero-speed': 'Speed',
        'hero-cta': 'Get Started',
        'services-title': 'Our Services',
        'services-subtitle': 'Rix Printing offers these services',
        'printing-types': 'Printing Types',
        'offset-printing': '• Offset Printing',
        'digital-printing': '• Digital Printing',
        'embossing': '• Embossing',
        'uv-dtf': '• UV DTF Printing',
        'dtf-printing': '• DTF Printing',
        'tampo-printing': '• Tampo Printing',
        'laser-printing': '• Laser Printing',
        'thermal-printing': '• Thermal Printing',
        'screen-printing': '• Screen Printing',
        'drum-printing': '• Drum Printing',
        'poster-printing': 'Poster & Banner Printing',
        'design-print': '• Design & Print',
        'large-format': '• Large Format Printing',
        'high-quality': '• High Quality',
        'book-printing': 'Book & Magazine Printing',
        'various-designs': '• Various Designs & Sizes',
        'cover-printing': '• Cover & Interior Printing',
        'card-printing': 'Business Card & Invitation Printing',
        'custom-design': '• Custom Design',
        'precise-cutting': '• Precise Cutting',
        'clothing-printing': 'Clothing & Fabric Printing',
        'direct-printing': '• Direct & Drum Printing',
        'color-variety': '• Various Colors & Designs',
        'custom-packaging': 'Custom Packaging Printing',
        'packaging-desc': 'Rix Printing allows you to design and print custom products for your brand.',
        'design-products': 'Featured Designs',
        'booklet-catalog': 'Booklets & Catalogs',
        'brochure': 'Brochures',
        'business-card': 'Business Cards',
        'calendars': 'Calendars',
        'car-stickers': 'Car Stickers',
        'carbon-forms': 'Carbon Forms',
        'clocks': 'Clocks',
        'clothing-accessories': 'Clothing & Accessories',
        'custom-pens': 'Custom Pens',
        'desk-sets': 'Desk Sets',
        'gift-baskets': 'Gift Baskets',
        'envelopes': 'Envelopes',
        'flags': 'Flags',
        'flyers': 'Flyers',
        'folders': 'Folders',
        'keychains': 'Keychains',
        'labels-stickers': 'Labels & Stickers',
        'letterheads': 'Letterheads',
        'notepads': 'Notepads',
        'notebooks': 'Notebooks',
        'notepads-small': 'Small Notepads',
        'services-title': 'Our Services',
        'food-products': 'Advertising Food Products',
        'gift-items': 'Advertising Gift Items',
        'advertising-products': 'Advertising Products',
        'advertising-technology': 'Advertising Technology',
        'safety-items': 'Safety Items',
        'signs-banners': 'Signs & Banners',
        'flyers-d': 'Flyers D',
        'process-title': 'Your Custom Printing',
        'process-subtitle': 'At Rix Printing, we offer high-quality printing options.',
        'process-step1-title': 'Step 1: Design & Print',
        'process-step1-desc': 'Choosing the design type and materials for the specified product.',
        'process-step2-title': 'Step 2: Sample & Approval',
        'process-step2-desc': 'Providing a sample for review and final approval.',
        'process-step3-title': 'Step 3: Printing & Delivery',
        'process-step3-desc': 'Starting the printing process and delivery with high quality.',
        'about-title': 'About Us',
        'about-desc1': 'We, at Rix Printing, take pride in providing printing services to our valued customers.',
        'about-desc2': 'For many years, we have supported our customers in various printing fields, striving to use all our capabilities to provide high-quality and advanced general printing services.',
        'about-trust': 'Trusted',
        'about-quality': 'Quality',
        'about-speed': 'Speed',
        'learn-title': 'Learn How to Succeed in Printing',
        'learn-subtitle': 'We provide innovative printing solutions that help brands stand out.',
        'learn-innovation': 'Innovation',
        'learn-innovation-desc': 'Advanced technology for best results',
        'learn-creativity': 'Creativity',
        'learn-creativity-desc': 'Custom designs for your brand',
        'learn-speed': 'Speed',
        'learn-speed-desc': 'Speed in printing and delivery',
        'partners-title': 'Our Partners & Customers',
        'partners-subtitle': 'Our customers are our source of strength and success',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Feel free to contact us for any questions or requests',
        'contact-form-title': 'Contact Form',
        'contact-name': 'Your Name',
        'contact-phone': 'Phone Number',
        'contact-description': 'Description of your request',
        'contact-submit': 'Send',
        'contact-info-title': 'Contact Information',
        'contact-address': 'Bahrka - 150m overpass, Erbil, Iraq',
        'map-title': 'Our Printing House Location',
        'footer-info': 'Information',
        'footer-desc': 'The best printing house in Kurdistan Region',
        'footer-contact': 'Contact',
        'footer-address': 'Bahrka - 150m overpass, Erbil, Iraq',
        'footer-follow': 'Follow Us',
        'footer-copyright': '© 2025 Rix Printing. All rights reserved.'
    }
};

// Current language
let currentLang = 'ckb';

// DOM elements
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const html = document.documentElement;
const body = document.body;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    const savedLang = localStorage.getItem('preferred-language') || 'ckb';
    switchLanguage(savedLang);
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize form handling
    initContactForm();
    
    // Initialize animations
    initAnimations();
    
    // Initialize featured designs
    initFeaturedDesigns();
});

// Language switching functionality
langToggle.addEventListener('click', function() {
    langDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!langToggle.contains(event.target) && !langDropdown.contains(event.target)) {
        langDropdown.classList.add('hidden');
    }
});

// Language selection
langDropdown.addEventListener('click', function(event) {
    if (event.target.classList.contains('language-option')) {
        const selectedLang = event.target.dataset.lang;
        switchLanguage(selectedLang);
        langDropdown.classList.add('hidden');
    }
});

// Switch language function
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update UI language
    currentLangSpan.textContent = getLanguageName(lang);
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Update HTML attributes
    html.lang = lang;
    html.dir = (lang === 'ckb' || lang === 'ar') ? 'rtl' : 'ltr';
    
    // Update body classes
    body.classList.remove('rtl', 'ltr');
    body.classList.add(html.dir === 'rtl' ? 'rtl' : 'ltr');
    
    // Update font
    if (lang === 'ckb' || lang === 'ar') {
        body.classList.add('font-kurdish');
        body.classList.remove('font-english');
    } else {
        body.classList.add('font-english');
        body.classList.remove('font-kurdish');
    }
    
    // Update text content
    updateTextContent();
    
    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Get language display name
function getLanguageName(lang) {
    const names = {
        'ckb': 'کوردی',
        'ar': 'العربية',
        'en': 'English'
    };
    return names[lang] || 'کوردی';
}

// Update text content based on current language
function updateTextContent() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileMenuOverlay = createMobileMenuOverlay();
    
    mobileMenuBtn.addEventListener('click', function() {
        openMobileMenu();
    });
    
    closeMobileMenu.addEventListener('click', function() {
        closeMobileMenuFunction();
    });
    
    mobileMenuOverlay.addEventListener('click', function() {
        closeMobileMenuFunction();
    });
    
    function openMobileMenu() {
        mobileMenu.classList.add('open');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenuFunction() {
        mobileMenu.classList.remove('open');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function createMobileMenuOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        document.body.appendChild(overlay);
        return overlay;
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendContactEmail(e, currentLang);
        });
    }
}

// Send contact email function
function sendContactEmail(event, lang) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        description: formData.get('description'),
        lang: lang
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate API call (replace with actual endpoint)
    setTimeout(() => {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
        
        // Reset form
        form.reset();
    }, 2000);
    
    // Actual API call (uncomment when backend is ready)
    /*
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        if (result.success) {
            showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
            form.reset();
        } else {
            showNotification('حدث خطأ أثناء الإرسال. حاول مرة أخرى.', 'error');
        }
    })
    .catch(error => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showNotification('حدث خطأ أثناء الإرسال. حاول مرة أخرى.', 'error');
    });
    */
}

// Show notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize animations
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card-hover, .design-item, section h2, section p').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize featured designs
function initFeaturedDesigns() {
    const designItems = document.querySelectorAll('.design-item');
    
    designItems.forEach((item, index) => {
        // Add click handler for each design item
        item.addEventListener('click', function() {
            const title = this.querySelector('.design-title').textContent;
            const description = this.querySelector('.design-description').textContent;
            
            // Show notification with product info
            showNotification(`بە دیاری کراوە: ${title} - ${description}`, 'info');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add keyboard navigation
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    const mobileMenu = document.getElementById('mobileMenu');
    if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }
}, 250));

// Handle scroll events
let lastScrollTop = 0;
window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('nav');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, 100));

// Add scroll effect to navbar
const navbar = document.querySelector('nav');
navbar.style.transition = 'transform 0.3s ease';

// Function to scroll to specific sections (used by design items)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // If section doesn't exist, show a message
        showNotification('ئەم بەشە بەردەست نییە لە ئێستادا', 'info');
    }
}

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj73Meo.../s600/1111%D8%AB.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibm75.../s300/357%D8%B95%D8%B9.jpg',
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit9gM.../s300/34634576.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
preloadImages();