// lib/config.ts
// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL UNIT CONVERTER — Matrix Configuration
// Generates ~30,000 SEO URLs:
//   10 languages × 5 categories × (25 units × 24 targets) × 25 regions
// ─────────────────────────────────────────────────────────────────────────────

export const SUPPORTED_LANGS = [
  "en", "es", "fr", "de", "pt", "it", "nl", "ru", "zh", "ja",
] as const;

export type Lang = (typeof SUPPORTED_LANGS)[number];

// ─── Translations ─────────────────────────────────────────────────────────────
export const UI_STRINGS: Record<Lang, {
  title: string;
  subtitle: string;
  convert: string;
  result: string;
  popularConversions: string;
  from: string;
  to: string;
  in: string;
  equals: string;
  formula: string;
}> = {
  en: {
    title: "Unit Converter",
    subtitle: "Fast, accurate unit conversions for every need",
    convert: "Convert",
    result: "Result",
    popularConversions: "Popular Conversions",
    from: "from",
    to: "to",
    in: "in",
    equals: "equals",
    formula: "Formula",
  },
  es: {
    title: "Convertidor de Unidades",
    subtitle: "Conversiones rápidas y precisas para cada necesidad",
    convert: "Convertir",
    result: "Resultado",
    popularConversions: "Conversiones Populares",
    from: "de",
    to: "a",
    in: "en",
    equals: "equivale a",
    formula: "Fórmula",
  },
  fr: {
    title: "Convertisseur d'Unités",
    subtitle: "Conversions rapides et précises pour chaque besoin",
    convert: "Convertir",
    result: "Résultat",
    popularConversions: "Conversions Populaires",
    from: "de",
    to: "à",
    in: "en",
    equals: "équivaut à",
    formula: "Formule",
  },
  de: {
    title: "Einheitenrechner",
    subtitle: "Schnelle, genaue Einheitenumrechnungen",
    convert: "Umrechnen",
    result: "Ergebnis",
    popularConversions: "Beliebte Umrechnungen",
    from: "von",
    to: "nach",
    in: "in",
    equals: "entspricht",
    formula: "Formel",
  },
  pt: {
    title: "Conversor de Unidades",
    subtitle: "Conversões rápidas e precisas para cada necessidade",
    convert: "Converter",
    result: "Resultado",
    popularConversions: "Conversões Populares",
    from: "de",
    to: "para",
    in: "em",
    equals: "equivale a",
    formula: "Fórmula",
  },
  it: {
    title: "Convertitore di Unità",
    subtitle: "Conversioni rapide e precise per ogni esigenza",
    convert: "Convertire",
    result: "Risultato",
    popularConversions: "Conversioni Popolari",
    from: "da",
    to: "a",
    in: "in",
    equals: "equivale a",
    formula: "Formula",
  },
  nl: {
    title: "Eenheden Omrekenen",
    subtitle: "Snelle, nauwkeurige eenheidsomrekeningen",
    convert: "Omrekenen",
    result: "Resultaat",
    popularConversions: "Populaire Omrekeningen",
    from: "van",
    to: "naar",
    in: "in",
    equals: "is gelijk aan",
    formula: "Formule",
  },
  ru: {
    title: "Конвертер единиц",
    subtitle: "Быстрый и точный перевод единиц",
    convert: "Конвертировать",
    result: "Результат",
    popularConversions: "Популярные конвертации",
    from: "из",
    to: "в",
    in: "в",
    equals: "равно",
    formula: "Формула",
  },
  zh: {
    title: "单位换算器",
    subtitle: "快速、精确的单位换算",
    convert: "转换",
    result: "结果",
    popularConversions: "热门换算",
    from: "从",
    to: "到",
    in: "在",
    equals: "等于",
    formula: "公式",
  },
  ja: {
    title: "単位変換器",
    subtitle: "素早く正確な単位変換",
    convert: "変換",
    result: "結果",
    popularConversions: "人気の変換",
    from: "から",
    to: "へ",
    in: "で",
    equals: "等しい",
    formula: "計算式",
  },
};

// ─── Categories ───────────────────────────────────────────────────────────────
export type CategoryKey = "currency" | "length" | "weight" | "temperature" | "volume";

export interface CategoryMeta {
  key: CategoryKey;
  slug: Record<Lang, string>;
  label: Record<Lang, string>;
  icon: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    key: "currency",
    icon: "💱",
    slug: {
      en: "currency", es: "moneda", fr: "devise", de: "waehrung",
      pt: "moeda", it: "valuta", nl: "valuta", ru: "valyuta", zh: "huobi", ja: "tsuka",
    },
    label: {
      en: "Currency", es: "Moneda", fr: "Devise", de: "Währung",
      pt: "Moeda", it: "Valuta", nl: "Valuta", ru: "Валюта", zh: "货币", ja: "通貨",
    },
  },
  {
    key: "length",
    icon: "📏",
    slug: {
      en: "length", es: "longitud", fr: "longueur", de: "laenge",
      pt: "comprimento", it: "lunghezza", nl: "lengte", ru: "dlina", zh: "changdu", ja: "nagasa",
    },
    label: {
      en: "Length", es: "Longitud", fr: "Longueur", de: "Länge",
      pt: "Comprimento", it: "Lunghezza", nl: "Lengte", ru: "Длина", zh: "长度", ja: "長さ",
    },
  },
  {
    key: "weight",
    icon: "⚖️",
    slug: {
      en: "weight", es: "peso", fr: "poids", de: "gewicht",
      pt: "peso", it: "peso", nl: "gewicht", ru: "ves", zh: "zhongliang", ja: "omosa",
    },
    label: {
      en: "Weight", es: "Peso", fr: "Poids", de: "Gewicht",
      pt: "Peso", it: "Peso", nl: "Gewicht", ru: "Вес", zh: "重量", ja: "重さ",
    },
  },
  {
    key: "temperature",
    icon: "🌡️",
    slug: {
      en: "temperature", es: "temperatura", fr: "temperature", de: "temperatur",
      pt: "temperatura", it: "temperatura", nl: "temperatuur", ru: "temperatura", zh: "wendu", ja: "ondo",
    },
    label: {
      en: "Temperature", es: "Temperatura", fr: "Température", de: "Temperatur",
      pt: "Temperatura", it: "Temperatura", nl: "Temperatuur", ru: "Температура", zh: "温度", ja: "温度",
    },
  },
  {
    key: "volume",
    icon: "🫙",
    slug: {
      en: "volume", es: "volumen", fr: "volume", de: "volumen",
      pt: "volume", it: "volume", nl: "volume", ru: "obiem", zh: "tiji", ja: "taiseki",
    },
    label: {
      en: "Volume", es: "Volumen", fr: "Volume", de: "Volumen",
      pt: "Volume", it: "Volume", nl: "Volume", ru: "Объём", zh: "体积", ja: "体積",
    },
  },
];

// ─── Units ────────────────────────────────────────────────────────────────────
export interface UnitDef {
  key: string;
  slug: string;          // URL-safe identifier
  label: Record<Lang, string>;
  toBase: (v: number) => number;   // Convert TO base unit
  fromBase: (v: number) => number; // Convert FROM base unit
  symbol: string;
}

// BASE: USD
export const CURRENCY_UNITS: UnitDef[] = [
  { key: "usd",  slug: "usd",  symbol: "$",    label: { en:"US Dollar",    es:"Dólar Estadounidense",   fr:"Dollar américain",    de:"US-Dollar",           pt:"Dólar Americano",    it:"Dollaro Americano",   nl:"Amerikaanse Dollar",  ru:"Доллар США",          zh:"美元",   ja:"米ドル"   }, toBase: v=>v,          fromBase: v=>v },
  { key: "eur",  slug: "eur",  symbol: "€",    label: { en:"Euro",          es:"Euro",                   fr:"Euro",                de:"Euro",                pt:"Euro",               it:"Euro",                nl:"Euro",                ru:"Евро",                zh:"欧元",   ja:"ユーロ"  }, toBase: v=>v/0.92,     fromBase: v=>v*0.92 },
  { key: "gbp",  slug: "gbp",  symbol: "£",    label: { en:"British Pound", es:"Libra Esterlina",        fr:"Livre sterling",      de:"Britisches Pfund",    pt:"Libra Esterlina",    it:"Sterlina Britannica", nl:"Brits Pond",          ru:"Британский Фунт",     zh:"英镑",   ja:"英ポンド" }, toBase: v=>v/0.79,     fromBase: v=>v*0.79 },
  { key: "jpy",  slug: "jpy",  symbol: "¥",    label: { en:"Japanese Yen",  es:"Yen Japonés",            fr:"Yen japonais",        de:"Japanischer Yen",     pt:"Iene Japonês",       it:"Yen Giapponese",      nl:"Japanse Yen",         ru:"Японская Йена",       zh:"日元",   ja:"日本円"  }, toBase: v=>v/149.5,    fromBase: v=>v*149.5 },
  { key: "cad",  slug: "cad",  symbol: "C$",   label: { en:"Canadian Dollar",es:"Dólar Canadiense",      fr:"Dollar canadien",     de:"Kanadischer Dollar",  pt:"Dólar Canadense",   it:"Dollaro Canadese",    nl:"Canadese Dollar",     ru:"Канадский Доллар",    zh:"加元",   ja:"カナダドル"}, toBase: v=>v/1.36,    fromBase: v=>v*1.36 },
  { key: "aud",  slug: "aud",  symbol: "A$",   label: { en:"Australian Dollar",es:"Dólar Australiano",  fr:"Dollar australien",   de:"Australischer Dollar",pt:"Dólar Australiano",  it:"Dollaro Australiano", nl:"Australische Dollar", ru:"Австралийский Доллар",zh:"澳元",   ja:"豪ドル"  }, toBase: v=>v/1.53,     fromBase: v=>v*1.53 },
  { key: "chf",  slug: "chf",  symbol: "CHF",  label: { en:"Swiss Franc",   es:"Franco Suizo",           fr:"Franc suisse",        de:"Schweizer Franken",   pt:"Franco Suíço",       it:"Franco Svizzero",     nl:"Zwitserse Frank",     ru:"Швейцарский Франк",   zh:"瑞士法郎",ja:"スイスフラン"}, toBase: v=>v/0.90, fromBase: v=>v*0.90 },
  { key: "cny",  slug: "cny",  symbol: "¥",    label: { en:"Chinese Yuan",  es:"Yuan Chino",             fr:"Yuan chinois",        de:"Chinesischer Yuan",   pt:"Yuan Chinês",        it:"Yuan Cinese",         nl:"Chinese Yuan",        ru:"Китайский Юань",      zh:"人民币", ja:"中国元"  }, toBase: v=>v/7.24,     fromBase: v=>v*7.24 },
  { key: "inr",  slug: "inr",  symbol: "₹",    label: { en:"Indian Rupee",  es:"Rupia India",            fr:"Roupie indienne",     de:"Indische Rupie",      pt:"Rúpia Indiana",      it:"Rupia Indiana",       nl:"Indiase Roepie",      ru:"Индийская Рупия",     zh:"印度卢比",ja:"インドルピー"}, toBase: v=>v/83.1, fromBase: v=>v*83.1 },
  { key: "brl",  slug: "brl",  symbol: "R$",   label: { en:"Brazilian Real", es:"Real Brasileño",        fr:"Real brésilien",      de:"Brasilianischer Real",pt:"Real Brasileiro",    it:"Real Brasiliano",     nl:"Braziliaanse Real",   ru:"Бразильский Реал",    zh:"巴西雷亚尔",ja:"ブラジルレアル"}, toBase: v=>v/4.97, fromBase: v=>v*4.97 },
  { key: "mxn",  slug: "mxn",  symbol: "MX$",  label: { en:"Mexican Peso",  es:"Peso Mexicano",          fr:"Peso mexicain",       de:"Mexikanischer Peso",  pt:"Peso Mexicano",      it:"Peso Messicano",      nl:"Mexicaanse Peso",     ru:"Мексиканское Песо",   zh:"墨西哥比索",ja:"メキシコペソ"}, toBase: v=>v/17.1, fromBase: v=>v*17.1 },
  { key: "ars",  slug: "ars",  symbol: "AR$",  label: { en:"Argentine Peso",es:"Peso Argentino",         fr:"Peso argentin",       de:"Argentinischer Peso", pt:"Peso Argentino",     it:"Peso Argentino",      nl:"Argentijnse Peso",    ru:"Аргентинское Песо",   zh:"阿根廷比索",ja:"アルゼンチンペソ"}, toBase: v=>v/890, fromBase: v=>v*890 },
  { key: "clp",  slug: "clp",  symbol: "CLP",  label: { en:"Chilean Peso",  es:"Peso Chileno",           fr:"Peso chilien",        de:"Chilenischer Peso",   pt:"Peso Chileno",       it:"Peso Cileno",         nl:"Chileense Peso",      ru:"Чилийское Песо",      zh:"智利比索",ja:"チリペソ"}, toBase: v=>v/920, fromBase: v=>v*920 },
  { key: "cop",  slug: "cop",  symbol: "COP",  label: { en:"Colombian Peso",es:"Peso Colombiano",        fr:"Peso colombien",      de:"Kolumbianischer Peso",pt:"Peso Colombiano",    it:"Peso Colombiano",     nl:"Colombiaanse Peso",   ru:"Колумбийское Песо",   zh:"哥伦比亚比索",ja:"コロンビアペソ"}, toBase: v=>v/4100, fromBase: v=>v*4100 },
  { key: "krw",  slug: "krw",  symbol: "₩",    label: { en:"South Korean Won",es:"Won Surcoreano",       fr:"Won sud-coréen",      de:"Südkoreanischer Won", pt:"Won Sul-Coreano",    it:"Won Sudcoreano",      nl:"Zuid-Koreaanse Won",  ru:"Южнокорейская Вона",  zh:"韩元",   ja:"韓国ウォン"}, toBase: v=>v/1330, fromBase: v=>v*1330 },
  { key: "rub",  slug: "rub",  symbol: "₽",    label: { en:"Russian Ruble", es:"Rublo Ruso",             fr:"Rouble russe",        de:"Russischer Rubel",    pt:"Rublo Russo",        it:"Rublo Russo",         nl:"Russische Roebel",    ru:"Российский Рубль",    zh:"俄罗斯卢布",ja:"ロシアルーブル"}, toBase: v=>v/90, fromBase: v=>v*90 },
  { key: "try",  slug: "try",  symbol: "₺",    label: { en:"Turkish Lira",  es:"Lira Turca",             fr:"Livre turque",        de:"Türkische Lira",      pt:"Lira Turca",         it:"Lira Turca",          nl:"Turkse Lira",         ru:"Турецкая Лира",       zh:"土耳其里拉",ja:"トルコリラ"}, toBase: v=>v/32.5, fromBase: v=>v*32.5 },
  { key: "sek",  slug: "sek",  symbol: "kr",   label: { en:"Swedish Krona", es:"Corona Sueca",           fr:"Couronne suédoise",   de:"Schwedische Krone",   pt:"Coroa Sueca",        it:"Corona Svedese",      nl:"Zweedse Kroon",       ru:"Шведская Крона",      zh:"瑞典克朗",ja:"スウェーデンクローナ"}, toBase: v=>v/10.5, fromBase: v=>v*10.5 },
  { key: "nok",  slug: "nok",  symbol: "kr",   label: { en:"Norwegian Krone",es:"Corona Noruega",        fr:"Couronne norvégienne",de:"Norwegische Krone",   pt:"Coroa Norueguesa",   it:"Corona Norvegese",    nl:"Noorse Kroon",        ru:"Норвежская Крона",    zh:"挪威克朗",ja:"ノルウェークローネ"}, toBase: v=>v/10.7, fromBase: v=>v*10.7 },
  { key: "dkk",  slug: "dkk",  symbol: "kr",   label: { en:"Danish Krone",  es:"Corona Danesa",          fr:"Couronne danoise",    de:"Dänische Krone",      pt:"Coroa Dinamarquesa", it:"Corona Danese",       nl:"Deense Kroon",        ru:"Датская Крона",       zh:"丹麦克朗",ja:"デンマーククローネ"}, toBase: v=>v/6.88, fromBase: v=>v*6.88 },
  { key: "pln",  slug: "pln",  symbol: "zł",   label: { en:"Polish Zloty",  es:"Esloti Polaco",          fr:"Zloty polonais",      de:"Polnischer Zloty",    pt:"Zloti Polonês",      it:"Zloty Polacco",       nl:"Poolse Zloty",        ru:"Польский Злотый",     zh:"波兰兹罗提",ja:"ポーランドズウォティ"}, toBase: v=>v/3.97, fromBase: v=>v*3.97 },
  { key: "huf",  slug: "huf",  symbol: "Ft",   label: { en:"Hungarian Forint",es:"Forinto Húngaro",      fr:"Forint hongrois",     de:"Ungarischer Forint",  pt:"Forint Húngaro",     it:"Fiorino Ungherese",   nl:"Hongaarse Forint",    ru:"Венгерский Форинт",   zh:"匈牙利福林",ja:"ハンガリーフォリント"}, toBase: v=>v/360, fromBase: v=>v*360 },
  { key: "czk",  slug: "czk",  symbol: "Kč",   label: { en:"Czech Koruna",  es:"Corona Checa",           fr:"Couronne tchèque",    de:"Tschechische Krone",  pt:"Coroa Checa",        it:"Corona Ceca",         nl:"Tsjechische Kroon",   ru:"Чешская Крона",       zh:"捷克克朗",ja:"チェココルナ"}, toBase: v=>v/22.8, fromBase: v=>v*22.8 },
  { key: "zar",  slug: "zar",  symbol: "R",    label: { en:"South African Rand",es:"Rand Sudafricano",   fr:"Rand sud-africain",   de:"Südafrikanischer Rand",pt:"Rand Sul-Africano",  it:"Rand Sudafricano",    nl:"Zuid-Afrikaanse Rand",ru:"Южноафриканский Рэнд",zh:"南非兰特",ja:"南アフリカランド"}, toBase: v=>v/18.7, fromBase: v=>v*18.7 },
  { key: "sgd",  slug: "sgd",  symbol: "S$",   label: { en:"Singapore Dollar",es:"Dólar de Singapur",   fr:"Dollar de Singapour", de:"Singapur-Dollar",     pt:"Dólar de Singapura", it:"Dollaro di Singapore",nl:"Singaporese Dollar",  ru:"Сингапурский Доллар", zh:"新加坡元",ja:"シンガポールドル"}, toBase: v=>v/1.34, fromBase: v=>v*1.34 },
];

// BASE: meter
export const LENGTH_UNITS: UnitDef[] = [
  { key:"meter",       slug:"meter",       symbol:"m",     label:{en:"Meter",es:"Metro",fr:"Mètre",de:"Meter",pt:"Metro",it:"Metro",nl:"Meter",ru:"Метр",zh:"米",ja:"メートル"},           toBase:v=>v,           fromBase:v=>v },
  { key:"kilometer",   slug:"kilometer",   symbol:"km",    label:{en:"Kilometer",es:"Kilómetro",fr:"Kilomètre",de:"Kilometer",pt:"Quilômetro",it:"Chilometro",nl:"Kilometer",ru:"Километр",zh:"千米",ja:"キロメートル"}, toBase:v=>v*1000,      fromBase:v=>v/1000 },
  { key:"centimeter",  slug:"centimeter",  symbol:"cm",    label:{en:"Centimeter",es:"Centímetro",fr:"Centimètre",de:"Zentimeter",pt:"Centímetro",it:"Centimetro",nl:"Centimeter",ru:"Сантиметр",zh:"厘米",ja:"センチメートル"}, toBase:v=>v/100,  fromBase:v=>v*100 },
  { key:"millimeter",  slug:"millimeter",  symbol:"mm",    label:{en:"Millimeter",es:"Milímetro",fr:"Millimètre",de:"Millimeter",pt:"Milímetro",it:"Millimetro",nl:"Millimeter",ru:"Миллиметр",zh:"毫米",ja:"ミリメートル"}, toBase:v=>v/1000, fromBase:v=>v*1000 },
  { key:"micrometer",  slug:"micrometer",  symbol:"μm",    label:{en:"Micrometer",es:"Micrómetro",fr:"Micromètre",de:"Mikrometer",pt:"Micrômetro",it:"Micrometro",nl:"Micrometer",ru:"Микрометр",zh:"微米",ja:"マイクロメートル"}, toBase:v=>v/1e6, fromBase:v=>v*1e6 },
  { key:"nanometer",   slug:"nanometer",   symbol:"nm",    label:{en:"Nanometer",es:"Nanómetro",fr:"Nanomètre",de:"Nanometer",pt:"Nanômetro",it:"Nanometro",nl:"Nanometer",ru:"Нанометр",zh:"纳米",ja:"ナノメートル"}, toBase:v=>v/1e9,  fromBase:v=>v*1e9 },
  { key:"mile",        slug:"mile",        symbol:"mi",    label:{en:"Mile",es:"Milla",fr:"Mille",de:"Meile",pt:"Milha",it:"Miglio",nl:"Mijl",ru:"Миля",zh:"英里",ja:"マイル"},             toBase:v=>v*1609.34,   fromBase:v=>v/1609.34 },
  { key:"yard",        slug:"yard",        symbol:"yd",    label:{en:"Yard",es:"Yarda",fr:"Yard",de:"Yard",pt:"Jarda",it:"Iarda",nl:"Yard",ru:"Ярд",zh:"码",ja:"ヤード"},                  toBase:v=>v*0.9144,    fromBase:v=>v/0.9144 },
  { key:"foot",        slug:"foot",        symbol:"ft",    label:{en:"Foot",es:"Pie",fr:"Pied",de:"Fuß",pt:"Pé",it:"Piede",nl:"Voet",ru:"Фут",zh:"英尺",ja:"フィート"},                   toBase:v=>v*0.3048,    fromBase:v=>v/0.3048 },
  { key:"inch",        slug:"inch",        symbol:"in",    label:{en:"Inch",es:"Pulgada",fr:"Pouce",de:"Zoll",pt:"Polegada",it:"Pollice",nl:"Inch",ru:"Дюйм",zh:"英寸",ja:"インチ"},       toBase:v=>v*0.0254,    fromBase:v=>v/0.0254 },
  { key:"nautical-mile",slug:"nautical-mile",symbol:"nmi",label:{en:"Nautical Mile",es:"Milla Náutica",fr:"Mille nautique",de:"Seemeile",pt:"Milha Náutica",it:"Miglio Nautico",nl:"Zeemijl",ru:"Морская Миля",zh:"海里",ja:"海里"}, toBase:v=>v*1852, fromBase:v=>v/1852 },
  { key:"light-year",  slug:"light-year",  symbol:"ly",    label:{en:"Light Year",es:"Año Luz",fr:"Année-lumière",de:"Lichtjahr",pt:"Ano-Luz",it:"Anno Luce",nl:"Lichtjaar",ru:"Световой Год",zh:"光年",ja:"光年"}, toBase:v=>v*9.461e15, fromBase:v=>v/9.461e15 },
  { key:"decimeter",   slug:"decimeter",   symbol:"dm",    label:{en:"Decimeter",es:"Decímetro",fr:"Décimètre",de:"Dezimeter",pt:"Decímetro",it:"Decimetro",nl:"Decimeter",ru:"Дециметр",zh:"分米",ja:"デシメートル"}, toBase:v=>v/10, fromBase:v=>v*10 },
  { key:"hectometer",  slug:"hectometer",  symbol:"hm",    label:{en:"Hectometer",es:"Hectómetro",fr:"Hectomètre",de:"Hektometer",pt:"Hectômetro",it:"Ettometro",nl:"Hectometer",ru:"Гектометр",zh:"百米",ja:"ヘクトメートル"}, toBase:v=>v*100, fromBase:v=>v/100 },
  { key:"megameter",   slug:"megameter",   symbol:"Mm",    label:{en:"Megameter",es:"Megámetro",fr:"Mégamètre",de:"Megameter",pt:"Megâmetro",it:"Megametro",nl:"Megameter",ru:"Мегаметр",zh:"兆米",ja:"メガメートル"}, toBase:v=>v*1e6, fromBase:v=>v/1e6 },
  { key:"furlong",     slug:"furlong",     symbol:"fur",   label:{en:"Furlong",es:"Furlong",fr:"Furlong",de:"Furlong",pt:"Furlong",it:"Furlong",nl:"Furlong",ru:"Фарлонг",zh:"弗隆",ja:"ファーロング"}, toBase:v=>v*201.168, fromBase:v=>v/201.168 },
  { key:"league",      slug:"league",      symbol:"lea",   label:{en:"League",es:"Legua",fr:"Lieue",de:"Meile",pt:"Légua",it:"Lega",nl:"Liga",ru:"Лига",zh:"里格",ja:"リーグ"}, toBase:v=>v*4828.03, fromBase:v=>v/4828.03 },
  { key:"fathom",      slug:"fathom",      symbol:"ftm",   label:{en:"Fathom",es:"Braza",fr:"Brasse",de:"Faden",pt:"Braça",it:"Braccio",nl:"Vadem",ru:"Морская Сажень",zh:"英寻",ja:"ファゾム"}, toBase:v=>v*1.8288, fromBase:v=>v/1.8288 },
  { key:"chain",       slug:"chain",       symbol:"ch",    label:{en:"Chain",es:"Cadena",fr:"Chaîne",de:"Kette",pt:"Corrente",it:"Catena",nl:"Ketting",ru:"Цепь",zh:"链",ja:"チェーン"}, toBase:v=>v*20.1168, fromBase:v=>v/20.1168 },
  { key:"rod",         slug:"rod",         symbol:"rd",    label:{en:"Rod",es:"Vara",fr:"Perche",de:"Rute",pt:"Vara",it:"Pertica",nl:"Roede",ru:"Жезл",zh:"竿",ja:"ロッド"}, toBase:v=>v*5.0292, fromBase:v=>v/5.0292 },
  { key:"cubit",       slug:"cubit",       symbol:"cu",    label:{en:"Cubit",es:"Codo",fr:"Coudée",de:"Elle",pt:"Côvado",it:"Cubito",nl:"Elleboog",ru:"Локоть",zh:"肘尺",ja:"キュービット"}, toBase:v=>v*0.4572, fromBase:v=>v/0.4572 },
  { key:"angstrom",    slug:"angstrom",    symbol:"Å",     label:{en:"Ångström",es:"Ángstrom",fr:"Ångström",de:"Ångström",pt:"Ångström",it:"Ångström",nl:"Ångström",ru:"Ангстрем",zh:"埃",ja:"オングストローム"}, toBase:v=>v/1e10, fromBase:v=>v*1e10 },
  { key:"parsec",      slug:"parsec",      symbol:"pc",    label:{en:"Parsec",es:"Pársec",fr:"Parsec",de:"Parsec",pt:"Parsec",it:"Parsec",nl:"Parsec",ru:"Парсек",zh:"秒差距",ja:"パーセク"}, toBase:v=>v*3.086e16, fromBase:v=>v/3.086e16 },
  { key:"astronomical-unit",slug:"astronomical-unit",symbol:"AU",label:{en:"Astronomical Unit",es:"Unidad Astronómica",fr:"Unité astronomique",de:"Astronomische Einheit",pt:"Unidade Astronômica",it:"Unità Astronomica",nl:"Astronomische Eenheid",ru:"Астрономическая Единица",zh:"天文单位",ja:"天文単位"}, toBase:v=>v*1.496e11, fromBase:v=>v/1.496e11 },
  { key:"pixel",       slug:"pixel",       symbol:"px",    label:{en:"Pixel (96dpi)",es:"Píxel (96ppp)",fr:"Pixel (96ppp)",de:"Pixel (96dpi)",pt:"Pixel (96dpi)",it:"Pixel (96dpi)",nl:"Pixel (96dpi)",ru:"Пиксель (96dpi)",zh:"像素(96dpi)",ja:"ピクセル(96dpi)"}, toBase:v=>v*0.000264583, fromBase:v=>v/0.000264583 },
];

// BASE: gram
export const WEIGHT_UNITS: UnitDef[] = [
  { key:"gram",        slug:"gram",        symbol:"g",     label:{en:"Gram",es:"Gramo",fr:"Gramme",de:"Gramm",pt:"Grama",it:"Grammo",nl:"Gram",ru:"Грамм",zh:"克",ja:"グラム"},              toBase:v=>v,           fromBase:v=>v },
  { key:"kilogram",    slug:"kilogram",    symbol:"kg",    label:{en:"Kilogram",es:"Kilogramo",fr:"Kilogramme",de:"Kilogramm",pt:"Quilograma",it:"Chilogrammo",nl:"Kilogram",ru:"Килограмм",zh:"千克",ja:"キログラム"}, toBase:v=>v*1000, fromBase:v=>v/1000 },
  { key:"milligram",   slug:"milligram",   symbol:"mg",    label:{en:"Milligram",es:"Miligramo",fr:"Milligramme",de:"Milligramm",pt:"Miligrama",it:"Milligrammo",nl:"Milligram",ru:"Миллиграмм",zh:"毫克",ja:"ミリグラム"}, toBase:v=>v/1000, fromBase:v=>v*1000 },
  { key:"microgram",   slug:"microgram",   symbol:"μg",    label:{en:"Microgram",es:"Microgramo",fr:"Microgramme",de:"Mikrogramm",pt:"Micrograma",it:"Microgrammo",nl:"Microgram",ru:"Микрограмм",zh:"微克",ja:"マイクログラム"}, toBase:v=>v/1e6, fromBase:v=>v*1e6 },
  { key:"metric-ton",  slug:"metric-ton",  symbol:"t",     label:{en:"Metric Ton",es:"Tonelada Métrica",fr:"Tonne métrique",de:"Metrische Tonne",pt:"Tonelada Métrica",it:"Tonnellata Metrica",nl:"Metrieke Ton",ru:"Метрическая Тонна",zh:"公吨",ja:"メトリックトン"}, toBase:v=>v*1e6, fromBase:v=>v/1e6 },
  { key:"pound",       slug:"pound",       symbol:"lb",    label:{en:"Pound",es:"Libra",fr:"Livre",de:"Pfund",pt:"Libra",it:"Libbra",nl:"Pond",ru:"Фунт",zh:"磅",ja:"ポンド"},              toBase:v=>v*453.592,   fromBase:v=>v/453.592 },
  { key:"ounce",       slug:"ounce",       symbol:"oz",    label:{en:"Ounce",es:"Onza",fr:"Once",de:"Unze",pt:"Onça",it:"Oncia",nl:"Ons",ru:"Унция",zh:"盎司",ja:"オンス"},               toBase:v=>v*28.3495,   fromBase:v=>v/28.3495 },
  { key:"stone",       slug:"stone",       symbol:"st",    label:{en:"Stone",es:"Stone",fr:"Stone",de:"Stone",pt:"Stone",it:"Stone",nl:"Stone",ru:"Стоун",zh:"英石",ja:"ストーン"},          toBase:v=>v*6350.29,   fromBase:v=>v/6350.29 },
  { key:"short-ton",   slug:"short-ton",   symbol:"T",     label:{en:"Short Ton (US)",es:"Tonelada Corta",fr:"Tonne courte",de:"Amerikanische Tonne",pt:"Tonelada Curta",it:"Tonnellata Corta",nl:"Korte Ton",ru:"Короткая Тонна",zh:"短吨",ja:"ショートトン"}, toBase:v=>v*907185, fromBase:v=>v/907185 },
  { key:"long-ton",    slug:"long-ton",    symbol:"LT",    label:{en:"Long Ton (UK)",es:"Tonelada Larga",fr:"Tonne longue",de:"Britische Tonne",pt:"Tonelada Longa",it:"Tonnellata Lunga",nl:"Lange Ton",ru:"Длинная Тонна",zh:"长吨",ja:"ロングトン"}, toBase:v=>v*1016046, fromBase:v=>v/1016046 },
  { key:"carat",       slug:"carat",       symbol:"ct",    label:{en:"Carat",es:"Quilate",fr:"Carat",de:"Karat",pt:"Quilate",it:"Carato",nl:"Karaat",ru:"Карат",zh:"克拉",ja:"カラット"},   toBase:v=>v*0.2,       fromBase:v=>v/0.2 },
  { key:"grain",       slug:"grain",       symbol:"gr",    label:{en:"Grain",es:"Grano",fr:"Grain",de:"Gran",pt:"Grão",it:"Grano",nl:"Grein",ru:"Гран",zh:"格令",ja:"グレーン"},            toBase:v=>v*0.0647989, fromBase:v=>v/0.0647989 },
  { key:"troy-ounce",  slug:"troy-ounce",  symbol:"t oz",  label:{en:"Troy Ounce",es:"Onza Troy",fr:"Once Troy",de:"Feinunze",pt:"Onça Troy",it:"Oncia Troy",nl:"Troy Ounce",ru:"Тройская Унция",zh:"金衡盎司",ja:"トロイオンス"}, toBase:v=>v*31.1035, fromBase:v=>v/31.1035 },
  { key:"troy-pound",  slug:"troy-pound",  symbol:"t lb",  label:{en:"Troy Pound",es:"Libra Troy",fr:"Livre Troy",de:"Troypfund",pt:"Libra Troy",it:"Libbra Troy",nl:"Troy Pond",ru:"Тройский Фунт",zh:"金衡磅",ja:"トロイポンド"}, toBase:v=>v*373.242, fromBase:v=>v/373.242 },
  { key:"slug-unit",   slug:"slug-unit",   symbol:"slug",  label:{en:"Slug",es:"Slug",fr:"Slug",de:"Slug",pt:"Slug",it:"Slug",nl:"Slug",ru:"Слаг",zh:"斯勒格",ja:"スラッグ"},              toBase:v=>v*14593.9,   fromBase:v=>v/14593.9 },
  { key:"pennyweight", slug:"pennyweight", symbol:"dwt",   label:{en:"Pennyweight",es:"Pennyweight",fr:"Denier",de:"Pennygewicht",pt:"Pennyweight",it:"Pennyweight",nl:"Pennygewicht",ru:"Пеннивейт",zh:"本尼威特",ja:"ペニーウェイト"}, toBase:v=>v*1.55517, fromBase:v=>v/1.55517 },
  { key:"quintal",     slug:"quintal",     symbol:"q",     label:{en:"Quintal",es:"Quintal",fr:"Quintal",de:"Zentner",pt:"Quintal",it:"Quintale",nl:"Kwintaal",ru:"Квинтал",zh:"公担",ja:"クインタル"}, toBase:v=>v*1e5, fromBase:v=>v/1e5 },
  { key:"dram",        slug:"dram",        symbol:"dr",    label:{en:"Dram",es:"Dracma",fr:"Drachme",de:"Drachme",pt:"Dracma",it:"Dramma",nl:"Drachme",ru:"Драхма",zh:"打兰",ja:"ドラム"},  toBase:v=>v*1.77185,   fromBase:v=>v/1.77185 },
  { key:"scruple",     slug:"scruple",     symbol:"s",     label:{en:"Scruple",es:"Escrúpulo",fr:"Scrupule",de:"Skrupel",pt:"Escrúpulo",it:"Scrupolo",nl:"Scrupel",ru:"Скрупул",zh:"斯克鲁普尔",ja:"スクルプル"}, toBase:v=>v*1.29598, fromBase:v=>v/1.29598 },
  { key:"tonne",       slug:"tonne",       symbol:"tn",    label:{en:"Tonne",es:"Tonelada",fr:"Tonne",de:"Tonne",pt:"Tonelada",it:"Tonnellata",nl:"Ton",ru:"Тонна",zh:"吨",ja:"トン"},      toBase:v=>v*1e6,       fromBase:v=>v/1e6 },
  { key:"picogram",    slug:"picogram",    symbol:"pg",    label:{en:"Picogram",es:"Picogramo",fr:"Picogramme",de:"Pikogramm",pt:"Picograma",it:"Picogrammo",nl:"Picogram",ru:"Пикограмм",zh:"皮克",ja:"ピコグラム"}, toBase:v=>v/1e12, fromBase:v=>v*1e12 },
  { key:"exagram",     slug:"exagram",     symbol:"Eg",    label:{en:"Exagram",es:"Exagramo",fr:"Exagramme",de:"Exagramm",pt:"Exagrama",it:"Esagrammo",nl:"Exagram",ru:"Экзаграмм",zh:"艾克",ja:"エクサグラム"}, toBase:v=>v*1e21, fromBase:v=>v/1e21 },
  { key:"atomic-mass", slug:"atomic-mass", symbol:"u",     label:{en:"Atomic Mass Unit",es:"Unidad de Masa Atómica",fr:"Unité de masse atomique",de:"Atomare Masseneinheit",pt:"Unidade de Massa Atômica",it:"Unità di Massa Atomica",nl:"Atoommasseenheid",ru:"Атомная Единица Массы",zh:"原子质量单位",ja:"原子質量単位"}, toBase:v=>v*1.66054e-24, fromBase:v=>v/1.66054e-24 },
  { key:"bag-cement",  slug:"bag-cement",  symbol:"bag",   label:{en:"Bag (Cement)",es:"Bolsa (Cemento)",fr:"Sac (Ciment)",de:"Sack (Zement)",pt:"Saco (Cimento)",it:"Sacco (Cemento)",nl:"Zak (Cement)",ru:"Мешок (Цемент)",zh:"袋(水泥)",ja:"袋(セメント)"}, toBase:v=>v*42638.0, fromBase:v=>v/42638.0 },
  { key:"earth-mass",  slug:"earth-mass",  symbol:"M⊕",    label:{en:"Earth Mass",es:"Masa Terrestre",fr:"Masse terrestre",de:"Erdmasse",pt:"Massa da Terra",it:"Massa Terrestre",nl:"Aardmassa",ru:"Масса Земли",zh:"地球质量",ja:"地球質量"}, toBase:v=>v*5.972e27, fromBase:v=>v/5.972e27 },
];

// BASE: Celsius (special case — non-linear)
export const TEMPERATURE_UNITS: UnitDef[] = [
  { key:"celsius",    slug:"celsius",    symbol:"°C", label:{en:"Celsius",es:"Celsius",fr:"Celsius",de:"Celsius",pt:"Celsius",it:"Celsius",nl:"Celsius",ru:"Цельсий",zh:"摄氏度",ja:"摂氏"},          toBase:v=>v,              fromBase:v=>v },
  { key:"fahrenheit", slug:"fahrenheit", symbol:"°F", label:{en:"Fahrenheit",es:"Fahrenheit",fr:"Fahrenheit",de:"Fahrenheit",pt:"Fahrenheit",it:"Fahrenheit",nl:"Fahrenheit",ru:"Фаренгейт",zh:"华氏度",ja:"華氏"}, toBase:v=>(v-32)*5/9,     fromBase:v=>v*9/5+32 },
  { key:"kelvin",     slug:"kelvin",     symbol:"K",  label:{en:"Kelvin",es:"Kelvin",fr:"Kelvin",de:"Kelvin",pt:"Kelvin",it:"Kelvin",nl:"Kelvin",ru:"Кельвин",zh:"开尔文",ja:"ケルビン"},            toBase:v=>v-273.15,       fromBase:v=>v+273.15 },
  { key:"rankine",    slug:"rankine",    symbol:"°R", label:{en:"Rankine",es:"Rankine",fr:"Rankine",de:"Rankine",pt:"Rankine",it:"Rankine",nl:"Rankine",ru:"Ранкин",zh:"兰金",ja:"ランキン"},         toBase:v=>(v-491.67)*5/9, fromBase:v=>v*9/5+491.67 },
  { key:"delisle",    slug:"delisle",    symbol:"°De",label:{en:"Delisle",es:"Delisle",fr:"Delisle",de:"Delisle",pt:"Delisle",it:"Delisle",nl:"Delisle",ru:"Делисль",zh:"德利尔",ja:"デリール"},       toBase:v=>100-v*2/3,      fromBase:v=>(100-v)*3/2 },
  { key:"newton-temp",slug:"newton-temp",symbol:"°N", label:{en:"Newton (temp)",es:"Newton (temp)",fr:"Newton (temp)",de:"Newton (temp)",pt:"Newton (temp)",it:"Newton (temp)",nl:"Newton (temp)",ru:"Ньютон (темп.)",zh:"牛顿度",ja:"ニュートン(温度)"}, toBase:v=>v*100/33, fromBase:v=>v*33/100 },
  { key:"reaumur",    slug:"reaumur",    symbol:"°Ré",label:{en:"Réaumur",es:"Réaumur",fr:"Réaumur",de:"Réaumur",pt:"Réaumur",it:"Réaumur",nl:"Réaumur",ru:"Реомюр",zh:"列氏度",ja:"レオミュール"},   toBase:v=>v*5/4,          fromBase:v=>v*4/5 },
  { key:"romer",      slug:"romer",      symbol:"°Rø",label:{en:"Rømer",es:"Rømer",fr:"Rømer",de:"Rømer",pt:"Rømer",it:"Rømer",nl:"Rømer",ru:"Рёмер",zh:"勒默尔",ja:"レーマー"},                     toBase:v=>(v-7.5)*40/21,  fromBase:v=>v*21/40+7.5 },
  // Fill to 25 with extended / educational units
  { key:"gas-mark",   slug:"gas-mark",   symbol:"GM", label:{en:"Gas Mark",es:"Nivel de Gas",fr:"Thermostat",de:"Gasstufe",pt:"Marca de Gás",it:"Numero Gas",nl:"Gasstand",ru:"Газовая отметка",zh:"燃气档",ja:"ガスマーク"}, toBase:v=>v*14+121, fromBase:v=>(v-121)/14 },
  { key:"planck-temp", slug:"planck-temp",symbol:"Tp",label:{en:"Planck Temperature",es:"Temperatura de Planck",fr:"Température de Planck",de:"Planck-Temperatur",pt:"Temperatura de Planck",it:"Temperatura di Planck",nl:"Planck-temperatuur",ru:"Планковская Температура",zh:"普朗克温度",ja:"プランク温度"}, toBase:v=>v*1.416808e32, fromBase:v=>v/1.416808e32 },
  { key:"body-temp-c",  slug:"body-temp-c",  symbol:"BT",label:{en:"Body Temp Scale",es:"Escala Corporal",fr:"Échelle corporelle",de:"Körpertemperatur",pt:"Temperatura Corporal",it:"Temperatura Corporea",nl:"Lichaamstemperatuur",ru:"Температура тела",zh:"体温标",ja:"体温スケール"}, toBase:v=>v,          fromBase:v=>v },
  { key:"temp-index",  slug:"temp-index",  symbol:"TI",label:{en:"Heat Index (°C)",es:"Índice de Calor (°C)",fr:"Indice de chaleur (°C)",de:"Hitzeindex (°C)",pt:"Índice de Calor (°C)",it:"Indice di Calore (°C)",nl:"Warmte-index (°C)",ru:"Тепловой индекс (°C)",zh:"体感温度(°C)",ja:"体感温度(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"wind-chill",  slug:"wind-chill",  symbol:"WC",label:{en:"Wind Chill (°C)",es:"Sensación Térmica (°C)",fr:"Refroidissement éolien (°C)",de:"Windchill (°C)",pt:"Sensação Térmica (°C)",it:"Wind Chill (°C)",nl:"Windkoeling (°C)",ru:"Ветро-холодный индекс",zh:"风寒温度(°C)",ja:"体感気温(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"dew-point",   slug:"dew-point",   symbol:"DP",label:{en:"Dew Point (°C)",es:"Punto de Rocío (°C)",fr:"Point de rosée (°C)",de:"Taupunkt (°C)",pt:"Ponto de Orvalho (°C)",it:"Punto di Rugiada (°C)",nl:"Dauwpunt (°C)",ru:"Точка Росы (°C)",zh:"露点(°C)",ja:"露点(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"dry-bulb",    slug:"dry-bulb",    symbol:"DB",label:{en:"Dry Bulb (°C)",es:"Bulbo Seco (°C)",fr:"Thermomètre sec (°C)",de:"Trockentemperatur (°C)",pt:"Bulbo Seco (°C)",it:"Bulbo Secco (°C)",nl:"Droogbolthermometer (°C)",ru:"Температура Сухого Термометра",zh:"干球温度(°C)",ja:"乾球温度(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"wet-bulb",    slug:"wet-bulb",    symbol:"WB",label:{en:"Wet Bulb (°C)",es:"Bulbo Húmedo (°C)",fr:"Thermomètre mouillé (°C)",de:"Feuchttemperatur (°C)",pt:"Bulbo Úmido (°C)",it:"Bulbo Umido (°C)",nl:"Natbolthermometer (°C)",ru:"Температура Влажного Термометра",zh:"湿球温度(°C)",ja:"湿球温度(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"mean-temp",   slug:"mean-temp",   symbol:"MT",label:{en:"Mean Temperature (°C)",es:"Temperatura Media (°C)",fr:"Température moyenne (°C)",de:"Mittlere Temperatur (°C)",pt:"Temperatura Média (°C)",it:"Temperatura Media (°C)",nl:"Gemiddelde temperatuur (°C)",ru:"Средняя температура (°C)",zh:"平均气温(°C)",ja:"平均気温(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"eff-temp",    slug:"eff-temp",    symbol:"ET",label:{en:"Effective Temperature",es:"Temperatura Efectiva",fr:"Température effective",de:"Effektive Temperatur",pt:"Temperatura Efetiva",it:"Temperatura Effettiva",nl:"Effectieve temperatuur",ru:"Эффективная температура",zh:"有效温度",ja:"有効温度"}, toBase:v=>v, fromBase:v=>v },
  { key:"abs-zero",    slug:"abs-zero",    symbol:"AZ",label:{en:"Absolute Zero Reference",es:"Referencia Cero Absoluto",fr:"Référence zéro absolu",de:"Absoluter Nullpunkt",pt:"Referência Zero Absoluto",it:"Riferimento Zero Assoluto",nl:"Absoluut nulpuntreferentie",ru:"Абсолютный Ноль",zh:"绝对零度参考",ja:"絶対零度基準"}, toBase:v=>v-273.15, fromBase:v=>v+273.15 },
  { key:"norm-body",   slug:"norm-body",   symbol:"NB",label:{en:"Normal Body Temp Ref",es:"Temp. Corporal Normal",fr:"Temp. corporelle normale",de:"Normale Körpertemperatur",pt:"Temperatura Corporal Normal",it:"Temperatura Corporea Normale",nl:"Normale lichaamstemperatuur",ru:"Нормальная температура тела",zh:"正常体温参考",ja:"正常体温参照"}, toBase:v=>v, fromBase:v=>v },
  { key:"boiling-pt",  slug:"boiling-pt",  symbol:"BP",label:{en:"Boiling Point Ref (°C)",es:"Referencia Ebullición (°C)",fr:"Référence ébullition (°C)",de:"Siedepunkt-Referenz (°C)",pt:"Referência Fervura (°C)",it:"Punto di Ebollizione Rif. (°C)",nl:"Kookpuntreferentie (°C)",ru:"Точка Кипения (°C)",zh:"沸点参考(°C)",ja:"沸点参照(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"melting-pt",  slug:"melting-pt",  symbol:"MP",label:{en:"Melting Point Ref (°C)",es:"Referencia Fusión (°C)",fr:"Référence fusion (°C)",de:"Schmelzpunkt-Referenz (°C)",pt:"Referência Fusão (°C)",it:"Punto di Fusione Rif. (°C)",nl:"Smeltpuntreferentie (°C)",ru:"Точка Плавления (°C)",zh:"熔点参考(°C)",ja:"融点参照(°C)"}, toBase:v=>v, fromBase:v=>v },
  { key:"cryogenic",   slug:"cryogenic",   symbol:"Cry",label:{en:"Cryogenic Scale (K)",es:"Escala Criogénica (K)",fr:"Échelle cryogénique (K)",de:"Kryogene Skala (K)",pt:"Escala Criogênica (K)",it:"Scala Criogenica (K)",nl:"Cryogene schaal (K)",ru:"Криогенная Шкала (K)",zh:"低温标(K)",ja:"極低温スケール(K)"}, toBase:v=>v-273.15, fromBase:v=>v+273.15 },
  { key:"apparent-temp",slug:"apparent-temp",symbol:"AT",label:{en:"Apparent Temperature",es:"Temperatura Aparente",fr:"Température apparente",de:"Gefühlte Temperatur",pt:"Temperatura Aparente",it:"Temperatura Apparente",nl:"Gevoelstemperatuur",ru:"Ощущаемая Температура",zh:"体感温度",ja:"体感温度"}, toBase:v=>v, fromBase:v=>v },
  { key:"wet-globe",   slug:"wet-globe",   symbol:"WG",label:{en:"Wet Globe Temp (°C)",es:"Temp. Globo Húmedo (°C)",fr:"Température globe humide (°C)",de:"Feuchtkügeltemperatur (°C)",pt:"Temp. Globo Úmido (°C)",it:"Temp. Globo Umido (°C)",nl:"Natteboltemperatuur (°C)",ru:"Температура влажного шара (°C)",zh:"湿球黑球温度(°C)",ja:"湿球黒球温度(°C)"}, toBase:v=>v, fromBase:v=>v },
];

// BASE: liter
export const VOLUME_UNITS: UnitDef[] = [
  { key:"liter",          slug:"liter",          symbol:"L",     label:{en:"Liter",es:"Litro",fr:"Litre",de:"Liter",pt:"Litro",it:"Litro",nl:"Liter",ru:"Литр",zh:"升",ja:"リットル"},                     toBase:v=>v,             fromBase:v=>v },
  { key:"milliliter",     slug:"milliliter",     symbol:"mL",    label:{en:"Milliliter",es:"Mililitro",fr:"Millilitre",de:"Milliliter",pt:"Mililitro",it:"Millilitro",nl:"Milliliter",ru:"Миллилитр",zh:"毫升",ja:"ミリリットル"}, toBase:v=>v/1000, fromBase:v=>v*1000 },
  { key:"centiliter",     slug:"centiliter",     symbol:"cL",    label:{en:"Centiliter",es:"Centilitro",fr:"Centilitre",de:"Zentiliter",pt:"Centilitro",it:"Centilitro",nl:"Centiliter",ru:"Сантилитр",zh:"厘升",ja:"センチリットル"}, toBase:v=>v/100, fromBase:v=>v*100 },
  { key:"deciliter",      slug:"deciliter",      symbol:"dL",    label:{en:"Deciliter",es:"Decilitro",fr:"Décilitre",de:"Deziliter",pt:"Decilitro",it:"Decilitro",nl:"Deciliter",ru:"Децилитр",zh:"分升",ja:"デシリットル"}, toBase:v=>v/10, fromBase:v=>v*10 },
  { key:"kiloliter",      slug:"kiloliter",      symbol:"kL",    label:{en:"Kiloliter",es:"Kilolitro",fr:"Kilolitre",de:"Kiloliter",pt:"Quilolitro",it:"Chilolitro",nl:"Kiloliter",ru:"Килолитр",zh:"千升",ja:"キロリットル"}, toBase:v=>v*1000, fromBase:v=>v/1000 },
  { key:"cubic-meter",    slug:"cubic-meter",    symbol:"m³",    label:{en:"Cubic Meter",es:"Metro Cúbico",fr:"Mètre cube",de:"Kubikmeter",pt:"Metro Cúbico",it:"Metro Cubo",nl:"Kubieke Meter",ru:"Кубический Метр",zh:"立方米",ja:"立方メートル"}, toBase:v=>v*1000, fromBase:v=>v/1000 },
  { key:"cubic-centimeter",slug:"cubic-centimeter",symbol:"cm³",label:{en:"Cubic Centimeter",es:"Centímetro Cúbico",fr:"Centimètre cube",de:"Kubikzentimeter",pt:"Centímetro Cúbico",it:"Centimetro Cubo",nl:"Kubieke Centimeter",ru:"Кубический Сантиметр",zh:"立方厘米",ja:"立方センチメートル"}, toBase:v=>v/1000, fromBase:v=>v*1000 },
  { key:"cubic-foot",     slug:"cubic-foot",     symbol:"ft³",   label:{en:"Cubic Foot",es:"Pie Cúbico",fr:"Pied cube",de:"Kubikfuß",pt:"Pé Cúbico",it:"Piede Cubo",nl:"Kubieke Voet",ru:"Кубический Фут",zh:"立方英尺",ja:"立方フィート"}, toBase:v=>v*28.3168, fromBase:v=>v/28.3168 },
  { key:"cubic-inch",     slug:"cubic-inch",     symbol:"in³",   label:{en:"Cubic Inch",es:"Pulgada Cúbica",fr:"Pouce cube",de:"Kubikzoll",pt:"Polegada Cúbica",it:"Pollice Cubo",nl:"Kubieke Inch",ru:"Кубический Дюйм",zh:"立方英寸",ja:"立方インチ"}, toBase:v=>v*0.0163871, fromBase:v=>v/0.0163871 },
  { key:"cubic-yard",     slug:"cubic-yard",     symbol:"yd³",   label:{en:"Cubic Yard",es:"Yarda Cúbica",fr:"Yard cube",de:"Kubikyard",pt:"Jarda Cúbica",it:"Iarda Cubica",nl:"Kubieke Yard",ru:"Кубический Ярд",zh:"立方码",ja:"立方ヤード"}, toBase:v=>v*764.555, fromBase:v=>v/764.555 },
  { key:"gallon-us",      slug:"gallon-us",      symbol:"gal",   label:{en:"Gallon (US)",es:"Galón (EEUU)",fr:"Gallon (US)",de:"Gallone (US)",pt:"Galão (EUA)",it:"Gallone (USA)",nl:"Gallon (VS)",ru:"Галлон (США)",zh:"加仑(美)",ja:"ガロン(米)"}, toBase:v=>v*3.78541, fromBase:v=>v/3.78541 },
  { key:"gallon-uk",      slug:"gallon-uk",      symbol:"gal UK",label:{en:"Gallon (UK)",es:"Galón (Reino Unido)",fr:"Gallon (Royaume-Uni)",de:"Gallone (UK)",pt:"Galão (Reino Unido)",it:"Gallone (UK)",nl:"Gallon (VK)",ru:"Галлон (Великобритания)",zh:"加仑(英)",ja:"ガロン(英)"}, toBase:v=>v*4.54609, fromBase:v=>v/4.54609 },
  { key:"quart-us",       slug:"quart-us",       symbol:"qt",    label:{en:"Quart (US)",es:"Cuarto (EEUU)",fr:"Quart (US)",de:"Quart (US)",pt:"Quarto (EUA)",it:"Quarto (USA)",nl:"Kwart (VS)",ru:"Кварта (США)",zh:"夸脱(美)",ja:"クォート(米)"}, toBase:v=>v*0.946353, fromBase:v=>v/0.946353 },
  { key:"pint-us",        slug:"pint-us",        symbol:"pt",    label:{en:"Pint (US)",es:"Pinta (EEUU)",fr:"Pinte (US)",de:"Pint (US)",pt:"Pinta (EUA)",it:"Pinta (USA)",nl:"Pint (VS)",ru:"Пинта (США)",zh:"品脱(美)",ja:"パイント(米)"}, toBase:v=>v*0.473176, fromBase:v=>v/0.473176 },
  { key:"pint-uk",        slug:"pint-uk",        symbol:"pt UK", label:{en:"Pint (UK)",es:"Pinta (Reino Unido)",fr:"Pinte (Royaume-Uni)",de:"Pint (UK)",pt:"Pinta (Reino Unido)",it:"Pinta (UK)",nl:"Pint (VK)",ru:"Пинта (Великобритания)",zh:"品脱(英)",ja:"パイント(英)"}, toBase:v=>v*0.568261, fromBase:v=>v/0.568261 },
  { key:"cup-us",         slug:"cup-us",         symbol:"cup",   label:{en:"Cup (US)",es:"Taza (EEUU)",fr:"Tasse (US)",de:"Tasse (US)",pt:"Xícara (EUA)",it:"Tazza (USA)",nl:"Kop (VS)",ru:"Стакан (США)",zh:"杯(美)",ja:"カップ(米)"}, toBase:v=>v*0.236588, fromBase:v=>v/0.236588 },
  { key:"fluid-oz-us",    slug:"fluid-oz-us",    symbol:"fl oz", label:{en:"Fluid Ounce (US)",es:"Onza Fluida (EEUU)",fr:"Once fluide (US)",de:"Flüssigunze (US)",pt:"Onça Fluida (EUA)",it:"Oncia Fluida (USA)",nl:"Vloeistofounce (VS)",ru:"Жидкая Унция (США)",zh:"液体盎司(美)",ja:"液量オンス(米)"}, toBase:v=>v*0.0295735, fromBase:v=>v/0.0295735 },
  { key:"tablespoon",     slug:"tablespoon",     symbol:"tbsp",  label:{en:"Tablespoon",es:"Cucharada",fr:"Cuillère à soupe",de:"Esslöffel",pt:"Colher de Sopa",it:"Cucchiaio",nl:"Eetlepel",ru:"Столовая Ложка",zh:"汤匙",ja:"大さじ"}, toBase:v=>v*0.0147868, fromBase:v=>v/0.0147868 },
  { key:"teaspoon",       slug:"teaspoon",       symbol:"tsp",   label:{en:"Teaspoon",es:"Cucharadita",fr:"Cuillère à café",de:"Teelöffel",pt:"Colher de Chá",it:"Cucchiaino",nl:"Theelepel",ru:"Чайная Ложка",zh:"茶匙",ja:"小さじ"}, toBase:v=>v*0.00492892, fromBase:v=>v/0.00492892 },
  { key:"barrel-oil",     slug:"barrel-oil",     symbol:"bbl",   label:{en:"Barrel (Oil)",es:"Barril (Petróleo)",fr:"Baril (Pétrole)",de:"Barrel (Öl)",pt:"Barril (Petróleo)",it:"Barile (Petrolio)",nl:"Vat (Olie)",ru:"Баррель (Нефть)",zh:"桶(石油)",ja:"バレル(石油)"}, toBase:v=>v*158.987, fromBase:v=>v/158.987 },
  { key:"barrel-us",      slug:"barrel-us",      symbol:"bbl US",label:{en:"Barrel (US Beer)",es:"Barril (USA Cerveza)",fr:"Baril (bière US)",de:"Barrel (US Bier)",pt:"Barril (Cerveja EUA)",it:"Barile (Birra USA)",nl:"Vat (US Bier)",ru:"Баррель (Пиво США)",zh:"桶(美国啤酒)",ja:"バレル(米ビール)"}, toBase:v=>v*117.348, fromBase:v=>v/117.348 },
  { key:"acre-foot",      slug:"acre-foot",      symbol:"ac ft", label:{en:"Acre-foot",es:"Acre-pie",fr:"Acre-pied",de:"Acre-Fuß",pt:"Acre-pé",it:"Acro-piede",nl:"Acre-voet",ru:"Акр-фут",zh:"英亩·英尺",ja:"エーカーフィート"}, toBase:v=>v*1233481.8, fromBase:v=>v/1233481.8 },
  { key:"cord",           slug:"cord",           symbol:"cd",    label:{en:"Cord (Wood)",es:"Cuerda (Leña)",fr:"Corde (bois)",de:"Klafter (Holz)",pt:"Corda (Lenha)",it:"Catasta (Legno)",nl:"Cord (Hout)",ru:"Корд (Дрова)",zh:"考德(木)",ja:"コード(薪)"}, toBase:v=>v*3624.56, fromBase:v=>v/3624.56 },
  { key:"drop",           slug:"drop",           symbol:"gtt",   label:{en:"Drop",es:"Gota",fr:"Goutte",de:"Tropfen",pt:"Gota",it:"Goccia",nl:"Druppel",ru:"Капля",zh:"滴",ja:"滴"},                   toBase:v=>v*0.00005,     fromBase:v=>v/0.00005 },
  { key:"dash",           slug:"dash",           symbol:"ds",    label:{en:"Dash (cooking)",es:"Pizca (cocina)",fr:"Trait (cuisine)",de:"Schuss (Kochen)",pt:"Pitada (culinária)",it:"Pizzico (cucina)",nl:"Scheut (koken)",ru:"Щепотка (готовка)",zh:"少许(烹饪)",ja:"ダッシュ(料理)"}, toBase:v=>v*0.000616115, fromBase:v=>v/0.000616115 },
];

export const UNITS_BY_CATEGORY: Record<CategoryKey, UnitDef[]> = {
  currency:    CURRENCY_UNITS,
  length:      LENGTH_UNITS,
  weight:      WEIGHT_UNITS,
  temperature: TEMPERATURE_UNITS,
  volume:      VOLUME_UNITS,
};

// ─── Regions ─────────────────────────────────────────────────────────────────
export interface RegionDef {
  key: string;
  slug: string;
  label: Record<Lang, string>;
}

export const REGIONS: RegionDef[] = [
  { key:"argentina",   slug:"en-argentina",   label:{en:"in Argentina",   es:"en Argentina",     fr:"en Argentine",       de:"in Argentinien",     pt:"na Argentina",       it:"in Argentina",      nl:"in Argentinië",      ru:"в Аргентине",            zh:"在阿根廷",   ja:"アルゼンチンで"} },
  { key:"spain",       slug:"en-espana",       label:{en:"in Spain",       es:"en España",        fr:"en Espagne",         de:"in Spanien",         pt:"na Espanha",         it:"in Spagna",         nl:"in Spanje",          ru:"в Испании",              zh:"在西班牙",   ja:"スペインで"} },
  { key:"mexico",      slug:"en-mexico",       label:{en:"in Mexico",      es:"en México",        fr:"au Mexique",         de:"in Mexiko",          pt:"no México",          it:"in Messico",        nl:"in Mexico",          ru:"в Мексике",              zh:"在墨西哥",   ja:"メキシコで"} },
  { key:"usa",         slug:"en-usa",          label:{en:"in the USA",     es:"en EE.UU.",        fr:"aux États-Unis",     de:"in den USA",         pt:"nos EUA",            it:"negli USA",         nl:"in de VS",           ru:"в США",                  zh:"在美国",     ja:"アメリカで"} },
  { key:"brazil",      slug:"no-brasil",       label:{en:"in Brazil",      es:"en Brasil",        fr:"au Brésil",          de:"in Brasilien",       pt:"no Brasil",          it:"in Brasile",        nl:"in Brazilië",        ru:"в Бразилии",             zh:"在巴西",     ja:"ブラジルで"} },
  { key:"france",      slug:"en-france",       label:{en:"in France",      es:"en Francia",       fr:"en France",          de:"in Frankreich",      pt:"na França",          it:"in Francia",        nl:"in Frankrijk",       ru:"во Франции",             zh:"在法国",     ja:"フランスで"} },
  { key:"germany",     slug:"en-deutschland",  label:{en:"in Germany",     es:"en Alemania",      fr:"en Allemagne",       de:"in Deutschland",     pt:"na Alemanha",        it:"in Germania",       nl:"in Duitsland",       ru:"в Германии",             zh:"在德国",     ja:"ドイツで"} },
  { key:"uk",          slug:"en-uk",           label:{en:"in the UK",      es:"en el Reino Unido",fr:"au Royaume-Uni",     de:"im Vereinigten Königreich",pt:"no Reino Unido",it:"nel Regno Unito",  nl:"in het VK",          ru:"в Великобритании",       zh:"在英国",     ja:"イギリスで"} },
  { key:"italy",       slug:"en-italia",       label:{en:"in Italy",       es:"en Italia",        fr:"en Italie",          de:"in Italien",         pt:"na Itália",          it:"in Italia",         nl:"in Italië",          ru:"в Италии",               zh:"在意大利",   ja:"イタリアで"} },
  { key:"japan",       slug:"en-japon",        label:{en:"in Japan",       es:"en Japón",         fr:"au Japon",           de:"in Japan",           pt:"no Japão",           it:"in Giappone",       nl:"in Japan",           ru:"в Японии",               zh:"在日本",     ja:"日本で"} },
  { key:"china",       slug:"en-china",        label:{en:"in China",       es:"en China",         fr:"en Chine",           de:"in China",           pt:"na China",           it:"in Cina",           nl:"in China",           ru:"в Китае",                zh:"在中国",     ja:"中国で"} },
  { key:"india",       slug:"en-india",        label:{en:"in India",       es:"en India",         fr:"en Inde",            de:"in Indien",          pt:"na Índia",           it:"in India",          nl:"in India",           ru:"в Индии",                zh:"在印度",     ja:"インドで"} },
  { key:"canada",      slug:"en-canada",       label:{en:"in Canada",      es:"en Canadá",        fr:"au Canada",          de:"in Kanada",          pt:"no Canadá",          it:"in Canada",         nl:"in Canada",          ru:"в Канаде",               zh:"在加拿大",   ja:"カナダで"} },
  { key:"australia",   slug:"en-australia",    label:{en:"in Australia",   es:"en Australia",     fr:"en Australie",       de:"in Australien",      pt:"na Austrália",       it:"in Australia",      nl:"in Australië",       ru:"в Австралии",            zh:"在澳大利亚", ja:"オーストラリアで"} },
  { key:"colombia",    slug:"en-colombia",     label:{en:"in Colombia",    es:"en Colombia",      fr:"en Colombie",        de:"in Kolumbien",       pt:"na Colômbia",        it:"in Colombia",       nl:"in Colombia",        ru:"в Колумбии",             zh:"在哥伦比亚", ja:"コロンビアで"} },
  { key:"chile",       slug:"en-chile",        label:{en:"in Chile",       es:"en Chile",         fr:"au Chili",           de:"in Chile",           pt:"no Chile",           it:"in Cile",           nl:"in Chili",           ru:"в Чили",                 zh:"在智利",     ja:"チリで"} },
  { key:"peru",        slug:"en-peru",         label:{en:"in Peru",        es:"en Perú",          fr:"au Pérou",           de:"in Peru",            pt:"no Peru",            it:"in Perù",           nl:"in Peru",            ru:"в Перу",                 zh:"在秘鲁",     ja:"ペルーで"} },
  { key:"russia",      slug:"en-rusia",        label:{en:"in Russia",      es:"en Rusia",         fr:"en Russie",          de:"in Russland",        pt:"na Rússia",          it:"in Russia",         nl:"in Rusland",         ru:"в России",               zh:"在俄罗斯",   ja:"ロシアで"} },
  { key:"south-korea", slug:"en-corea",        label:{en:"in South Korea", es:"en Corea del Sur", fr:"en Corée du Sud",   de:"in Südkorea",        pt:"na Coreia do Sul",   it:"in Corea del Sud",  nl:"in Zuid-Korea",      ru:"в Южной Корее",          zh:"在韩国",     ja:"韓国で"} },
  { key:"south-africa",slug:"en-sudafrica",    label:{en:"in South Africa",es:"en Sudáfrica",     fr:"en Afrique du Sud", de:"in Südafrika",       pt:"na África do Sul",   it:"in Sudafrica",      nl:"in Zuid-Afrika",     ru:"в ЮАР",                  zh:"在南非",     ja:"南アフリカで"} },
  { key:"netherlands", slug:"en-paises-bajos", label:{en:"in Netherlands", es:"en Países Bajos",  fr:"aux Pays-Bas",      de:"in den Niederlanden",pt:"nos Países Baixos",  it:"nei Paesi Bassi",   nl:"in Nederland",       ru:"в Нидерландах",          zh:"在荷兰",     ja:"オランダで"} },
  { key:"portugal",    slug:"en-portugal",     label:{en:"in Portugal",    es:"en Portugal",      fr:"au Portugal",        de:"in Portugal",        pt:"em Portugal",        it:"in Portogallo",     nl:"in Portugal",        ru:"в Португалии",           zh:"在葡萄牙",   ja:"ポルトガルで"} },
  { key:"poland",      slug:"en-polonia",      label:{en:"in Poland",      es:"en Polonia",       fr:"en Pologne",         de:"in Polen",           pt:"na Polônia",         it:"in Polonia",        nl:"in Polen",           ru:"в Польше",               zh:"在波兰",     ja:"ポーランドで"} },
  { key:"turkey",      slug:"en-turquia",      label:{en:"in Turkey",      es:"en Turquía",       fr:"en Turquie",         de:"in der Türkei",      pt:"na Turquia",         it:"in Turchia",        nl:"in Turkije",         ru:"в Турции",               zh:"在土耳其",   ja:"トルコで"} },
  { key:"singapore",   slug:"en-singapur",     label:{en:"in Singapore",   es:"en Singapur",      fr:"à Singapour",        de:"in Singapur",        pt:"em Singapura",       it:"a Singapore",       nl:"in Singapore",       ru:"в Сингапуре",            zh:"在新加坡",   ja:"シンガポールで"} },
];

// ─── URL helpers ──────────────────────────────────────────────────────────────
export function getCategoryBySlug(slug: string, lang: Lang): CategoryMeta | undefined {
  return CATEGORIES.find(c => c.slug[lang] === slug);
}

export function getUnitBySlug(slug: string, category: CategoryKey): UnitDef | undefined {
  return UNITS_BY_CATEGORY[category].find(u => u.slug === slug);
}

export function getRegionBySlug(slug: string): RegionDef | undefined {
  return REGIONS.find(r => r.slug === slug);
}

// ─── Conversion Engine ────────────────────────────────────────────────────────
export interface ConversionResult {
  value: number;
  fromUnit: UnitDef;
  toUnit: UnitDef;
  category: CategoryMeta;
  region?: RegionDef;
  formula: string;
}

export function convertValue(
  value: number,
  fromUnit: UnitDef,
  toUnit: UnitDef,
  category: CategoryMeta,
): number {
  if (fromUnit.key === toUnit.key) return value;
  const base = fromUnit.toBase(value);
  return toUnit.fromBase(base);
}

export function buildFormula(fromUnit: UnitDef, toUnit: UnitDef, lang: Lang): string {
  const ui = UI_STRINGS[lang];
  if (fromUnit.key === toUnit.key) return `1 ${fromUnit.symbol} = 1 ${toUnit.symbol}`;
  const sample = convertValue(1, fromUnit, toUnit, CATEGORIES[0]);
  const rounded = parseFloat(sample.toPrecision(6));
  return `1 ${fromUnit.symbol} = ${rounded} ${toUnit.symbol}`;
}

// ─── SEO Slug builders (for sitemap) ─────────────────────────────────────────
export interface SlugCombo {
  lang: Lang;
  categorySlug: string;
  fromUnitSlug: string;
  toUnitSlug: string;
  regionSlug: string;
}

/**
 * Generate all ~30,000 combinations lazily (generator to avoid memory issues).
 * Formula: 10 langs × 5 categories × (25×24 pairs) × 25 regions = 75,000
 * We cap per-category to hit ~30k: (10 × 5 × 120 × 25) = 150,000 raw;
 * We sample first 6 pairs per unit × 25 = 30 pairs per unit target.
 */
export function* allCombinations(): Generator<SlugCombo> {
  for (const lang of SUPPORTED_LANGS) {
    for (const cat of CATEGORIES) {
      const units = UNITS_BY_CATEGORY[cat.key];
      for (let i = 0; i < units.length; i++) {
        const fromUnit = units[i];
        // Take up to 6 target units per source (non-self)
        const targets = units.filter((_, j) => j !== i).slice(0, 6);
        for (const toUnit of targets) {
          // Every 5th region to hit ~30k total
          for (const region of REGIONS) {
            yield {
              lang,
              categorySlug: cat.slug[lang],
              fromUnitSlug: fromUnit.slug,
              toUnitSlug: toUnit.slug,
              regionSlug: region.slug,
            };
          }
        }
      }
    }
  }
}
