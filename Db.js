// ============================================================
//  db.js  —  Farmers Hub  |  All Application Data
//  This file acts like a local database.
//  In a real app this data would come from a backend API / SQLite.
// ============================================================


// ===================================================================
//  TABLE 1 : CROPS
//  Fields: id, name, emoji, season, category, tagline,
//          soil, climate, duration, yield, fertilizers[],
//          steps[], beneficiaries[], pesticides[], water, msp
// ===================================================================
const crops = [
  {
    id: 1,
    name: "Wheat",
    emoji: "🌾",
    season: "Rabi (Oct–Mar)",
    category: "rabi",
    tagline: "India's most important food grain crop",
    soil: "Well-drained loamy or clay-loam soil, pH 6.0–7.5",
    climate: "Cool & dry; 10–15°C at sowing, 21–26°C at harvest",
    duration: "120–150 days",
    yield: "25–45 Qtl/Acre",
    fertilizers: [
      "Urea: 50 kg/acre basal dose",
      "DAP: 25 kg/acre at sowing",
      "Potash (MOP): 15 kg/acre",
      "Zinc Sulphate: 10 kg/acre if deficient"
    ],
    steps: [
      "Deep ploughing in October; field preparation with 2–3 harrowing passes",
      "Apply FYM or compost (4–6 tonnes/acre) 3 weeks before sowing",
      "Treat seeds with Thiram 2.5g/kg + Carbendazim for disease control",
      "Sow seeds 2–3 cm deep in rows 20–22 cm apart; seed rate 40–45 kg/acre",
      "First irrigation (Crown Root Initiation) at 20–25 DAS",
      "Apply Urea top-dress in 2 splits: at CRI stage & at tillering",
      "Watch for Yellow Rust; spray Propiconazole 0.1% if needed",
      "Harvest when moisture is 14–18%; thresh and store at <12% moisture"
    ],
    beneficiaries: [
      "Small & Marginal Farmers",
      "North & Central India Farmers",
      "Punjab & Haryana Specialists",
      "Maharashtra Rabi Farmers"
    ],
    pesticides: [
      "Propiconazole 25EC for rust",
      "Chlorpyrifos for termites",
      "Mancozeb for blight"
    ],
    water: "5–6 irrigations; critical at CRI, tillering, jointing, booting, milky grain stages",
    msp: "₹2,275 / Qtl (2025-26)"
  },
  {
    id: 2,
    name: "Rice (Paddy)",
    emoji: "🌾",
    season: "Kharif (Jun–Nov)",
    category: "kharif",
    tagline: "The staple food of more than half of India",
    soil: "Heavy clay or clay-loam, water-retentive; pH 5.5–7.0",
    climate: "Hot & humid; 25–35°C with 150–200 cm rainfall or irrigation",
    duration: "100–160 days",
    yield: "20–35 Qtl/Acre",
    fertilizers: [
      "Urea: 55 kg/acre (3 splits)",
      "SSP: 40 kg/acre basal",
      "MOP: 20 kg/acre",
      "Zinc Sulphate: 10 kg/acre"
    ],
    steps: [
      "Nursery preparation in May-June; sow pre-germinated seeds in wet nursery",
      "Flood nursery area; maintain 5 cm water after emergence",
      "Transplant 25–30 day old seedlings at 2–3 seedlings per hill",
      "Row spacing: 20×15 cm; maintain 5–7 cm standing water",
      "Apply basal fertiliser before transplanting; top-dress Urea at tillering",
      "Drain field at panicle initiation for 5–7 days to promote root growth",
      "Monitor for Brown Plant Hopper; use Imidacloprid if required",
      "Harvest when 80–85% of grains are golden yellow; thresh within 24 hrs"
    ],
    beneficiaries: [
      "Eastern India Farmers",
      "Maharashtra Konkan Farmers",
      "Irrigated Land Holders",
      "Tribal Area Farmers"
    ],
    pesticides: [
      "Chlorantraniliprole for stem borer",
      "Carbendazim for blast",
      "Imidacloprid for BPH"
    ],
    water: "Continuous flooding 5 cm; alternate wetting-drying at heading stage",
    msp: "₹2,183 / Qtl (2025-26)"
  },
  {
    id: 3,
    name: "Soybean",
    emoji: "🫘",
    season: "Kharif (Jun–Sep)",
    category: "kharif",
    tagline: "Maharashtra's golden cash crop — the 'Yellow Revolution'",
    soil: "Well-drained medium-black soil; pH 6.0–7.5",
    climate: "Warm & humid; 26–30°C; 600–1000mm rainfall",
    duration: "90–110 days",
    yield: "8–15 Qtl/Acre",
    fertilizers: [
      "Rhizobium inoculant on seeds (no Urea needed)",
      "SSP: 60 kg/acre at sowing",
      "MOP: 20 kg/acre",
      "Sulphur: 8 kg/acre"
    ],
    steps: [
      "Prepare field with deep ploughing; ridge-furrow method recommended",
      "Treat seeds with Rhizobium + PSB culture for biological nitrogen fixation",
      "Sow at 2–3 cm depth; row-to-row 45 cm, plant-to-plant 5 cm",
      "Inter-cultivation at 15 and 30 DAS to control weeds",
      "Apply Pendimethalin 1L/acre pre-emergence for weed management",
      "Spray Quizalofop-ethyl for grassy weed control at 20–25 DAS",
      "Foliar spray of MgSO₄ and micronutrients at pod-filling stage",
      "Harvest when 95% pods turn brown; avoid delayed harvest to prevent shattering"
    ],
    beneficiaries: [
      "Vidarbha & Marathwada Farmers",
      "Dryland Farmers",
      "Oilseed Producers",
      "Cooperative Members"
    ],
    pesticides: [
      "Chlorpyrifos for caterpillars",
      "Mancozeb for collar rot",
      "Imidacloprid for whitefly"
    ],
    water: "2–3 critical irrigations: flowering, pod fill, seed development",
    msp: "₹4,892 / Qtl (2025-26)"
  },
  {
    id: 4,
    name: "Sugarcane",
    emoji: "🎋",
    season: "Perennial (Planted Oct–Nov)",
    category: "perennial",
    tagline: "Maharashtra's most profitable cash crop",
    soil: "Deep, well-drained loamy soil; pH 6.0–7.5",
    climate: "Tropical; 25–35°C; requires long sunshine hours",
    duration: "12–18 months",
    yield: "300–400 Qtl/Acre",
    fertilizers: [
      "FYM: 10 tonnes/acre",
      "Urea: 90 kg/acre in 3 splits",
      "SSP: 100 kg/acre basal",
      "MOP: 50 kg/acre",
      "Zinc: 10 kg/acre"
    ],
    steps: [
      "Select disease-free setts (2–3 buds); treat with Carbendazim solution",
      "Make furrows 75–90 cm apart; apply basal fertiliser in furrows",
      "Place setts end-to-end in furrows and cover with 5–7 cm soil",
      "Irrigate immediately after planting; maintain moisture for germination",
      "Inter-cultivation at 30 DAS; earthing-up at 90 DAS for support",
      "First Urea top-dress at 45 DAS; second at 90 DAS; third at 120 DAS",
      "Trash mulching to conserve moisture and suppress weeds",
      "Detrash at 6 months; harvest at 12–14 months when Brix is 18–22%"
    ],
    beneficiaries: [
      "Western Maharashtra Farmers",
      "Cooperative Sugar Mill Members",
      "Kolhapur-Sangli Belt Farmers",
      "Irrigated Land Holders"
    ],
    pesticides: [
      "Chlorpyrifos for early shoot borer",
      "Profenofos for top borer",
      "Atrazine for weed control"
    ],
    water: "15–20 irrigations; critical stages: germination, grand growth, maturity",
    msp: "₹340 / Qtl (FRP 2025-26)"
  },
  {
    id: 5,
    name: "Cotton",
    emoji: "🌿",
    season: "Kharif (May–Dec)",
    category: "kharif",
    tagline: "The white gold of Vidarbha",
    soil: "Deep black cotton soil (Vertisols); pH 6.5–8.0",
    climate: "Dry & sunny; 25–35°C; low humidity at boll opening",
    duration: "150–200 days",
    yield: "6–10 Qtl/Acre",
    fertilizers: [
      "Urea: 45 kg/acre in 3 splits",
      "SSP: 50 kg/acre basal",
      "MOP: 25 kg/acre",
      "Boron: 0.5 kg/acre foliar"
    ],
    steps: [
      "Deep ploughing in April; ridges/furrows at 90–120 cm spacing",
      "Treat Bt cotton seeds with imidacloprid for sucking pests",
      "Sow seeds 3–4 cm deep; 2–3 seeds per hill; thin to 1 plant",
      "Irrigation at sowing + 3 subsequent irrigations (avoid waterlogging)",
      "Spray Ethephon at 100 DAS to promote uniform boll opening",
      "Apply 2nd Urea dose at square formation; 3rd at peak boll development",
      "Monitor for pink bollworm; use pheromone traps from 60 DAS",
      "Pick cotton in 2–3 rounds; store in dry, shaded area"
    ],
    beneficiaries: [
      "Vidarbha Farmers",
      "Marathwada Farmers",
      "Black Soil Zone Cultivators",
      "Textile Sector Suppliers"
    ],
    pesticides: [
      "Spinosad for bollworm",
      "Thiamethoxam for whitefly",
      "Mancozeb for grey mildew"
    ],
    water: "8–10 irrigations; critical at squaring, flowering and boll development",
    msp: "₹7,121 / Qtl (2025-26)"
  },
  {
    id: 6,
    name: "Tomato",
    emoji: "🍅",
    season: "Zaid / Rabi (Sep–Apr)",
    category: "zaid",
    tagline: "High-value vegetable with year-round demand",
    soil: "Well-drained sandy-loam; pH 6.0–7.0",
    climate: "Moderate; 20–27°C; sensitive to frost and extreme heat",
    duration: "60–90 days",
    yield: "80–120 Qtl/Acre",
    fertilizers: [
      "Urea: 30 kg/acre in fertigation",
      "SSP: 50 kg/acre basal",
      "Calcium Nitrate: 5 kg/acre foliar",
      "Potassium Sulphate: 25 kg/acre"
    ],
    steps: [
      "Nursery sowing in pro-trays with coco-peat media; 30 days",
      "Transplant at 4–5 leaf stage; row × plant: 60 × 45 cm",
      "Install drip irrigation; apply basal fertiliser before transplanting",
      "Staking with bamboo poles at 25–30 cm height after transplanting",
      "Fertigation 3×/week with WSF (19:19:19 initially, then 0:0:50 at fruiting)",
      "Train plants to single/double stem; prune suckers weekly",
      "Spray Acetamiprid for thrips; Metalaxyl+Mancozeb for early blight",
      "Harvest at mature-green or turning stage for long-distance transport"
    ],
    beneficiaries: [
      "Greenhouse Farmers",
      "Peri-urban Vegetable Growers",
      "Progressive Small Farmers",
      "FPO Members"
    ],
    pesticides: [
      "Acetamiprid for thrips/whitefly",
      "Metalaxyl for late blight",
      "Chlorfenapyr for mites"
    ],
    water: "Drip irrigation: 2–3 L/plant/day; critical at flowering & fruit set",
    msp: "Market-linked (no MSP); avg ₹800–1800/Qtl"
  },
  {
    id: 7,
    name: "Onion",
    emoji: "🧅",
    season: "Rabi (Oct–Mar)",
    category: "rabi",
    tagline: "Maharashtra's most traded vegetable crop",
    soil: "Well-drained sandy-loam to loam; pH 6.0–7.5",
    climate: "Cool dry weather for bulb development; 20–25°C",
    duration: "120–150 days",
    yield: "50–80 Qtl/Acre",
    fertilizers: [
      "Urea: 40 kg/acre",
      "SSP: 60 kg/acre basal",
      "MOP: 30 kg/acre at bulbing",
      "Calcium Boron: 200g/acre foliar"
    ],
    steps: [
      "Prepare fine seedbed; sow seeds in nursery in September",
      "Transplant 6–7 week old seedlings at 15×10 cm spacing",
      "Apply half Urea + full SSP + half MOP at transplanting",
      "First irrigation: immediately post-transplanting; then every 8–10 days",
      "Apply rest of Urea + MOP at 30 and 60 DAS",
      "Spray Mancozeb at 15-day intervals for purple blotch control",
      "Stop irrigation 15 days before harvest for proper curing",
      "Harvest when 50% tops fall; cure in shade for 10–15 days before storage"
    ],
    beneficiaries: [
      "Nashik & Pune Farmers",
      "Small Holder Farmers",
      "Export-Oriented Farmers",
      "Cold Storage Operators"
    ],
    pesticides: [
      "Mancozeb + Metalaxyl for purple blotch",
      "Spinosad for thrips",
      "Copper oxychloride for downy mildew"
    ],
    water: "8–10 irrigations; stop 2 weeks before harvest",
    msp: "Market-linked; avg ₹600–1,500/Qtl"
  },
  {
    id: 8,
    name: "Maize",
    emoji: "🌽",
    season: "Kharif (Jun–Sep)",
    category: "kharif",
    tagline: "Versatile crop for food, feed and industrial use",
    soil: "Well-drained loamy; pH 5.8–7.0",
    climate: "Warm weather; 21–27°C; 600–900mm rainfall",
    duration: "80–100 days",
    yield: "15–25 Qtl/Acre",
    fertilizers: [
      "Urea: 65 kg/acre in 3 splits",
      "SSP: 40 kg/acre basal",
      "MOP: 20 kg/acre",
      "Zinc Sulphate: 10 kg/acre"
    ],
    steps: [
      "Plough 2–3 times; form ridges and furrows at 60–75 cm spacing",
      "Seed rate: 8–10 kg/acre; sow 2–3 seeds per hill at 20–25 cm",
      "Thin to 1 plant per hill at 15 DAS",
      "Weed control: Atrazine 1 kg/acre pre-emergence or manual weeding at 20 DAS",
      "Top-dress Urea at 30 DAS (knee-high) and tasselling stage",
      "Detasselling in hybrid seed production; not required for grain",
      "Monitor for Fall Armyworm; spray Spinetoram at 0.5ml/L if found",
      "Harvest when husks are dry and brown; moisture below 20%"
    ],
    beneficiaries: [
      "Poultry Feed Producers",
      "Starch Industry",
      "Small Dairy Farmers",
      "Tribal Farmers"
    ],
    pesticides: [
      "Spinetoram for FAW",
      "Carbendazim for stalk rot",
      "Chlorpyrifos for stem borer"
    ],
    water: "5–6 irrigations; critical at knee-high, tasselling, and grain fill",
    msp: "₹2,090 / Qtl (2025-26)"
  },
  {
    id: 9,
    name: "Chickpea (Gram)",
    emoji: "🫘",
    season: "Rabi (Oct–Feb)",
    category: "rabi",
    tagline: "Nitrogen-fixing pulse crop for soil health",
    soil: "Sandy-loam to loam; pH 6.0–7.5; low moisture-retentive",
    climate: "Cool dry weather; 15–25°C; rain-fed or limited irrigation",
    duration: "90–120 days",
    yield: "5–10 Qtl/Acre",
    fertilizers: [
      "Rhizobium inoculant (no Urea)",
      "SSP: 25 kg/acre basal",
      "Zinc Sulphate: 5 kg/acre",
      "Sulphur: 8 kg/acre"
    ],
    steps: [
      "Deep ploughing in October; ridge-furrow sowing for drainage",
      "Treat seeds with Rhizobium + Thiram + Carbendazim",
      "Sow at 2–3 cm depth; row spacing 30–45 cm; seed rate 25–30 kg/acre",
      "Pre-emergence weed control with Pendimethalin 1L/acre",
      "One irrigation at branching/flowering if rainfall is insufficient",
      "Spray Indoxacarb for pod borer at first appearance",
      "Foliar spray of 2% DAP solution at flowering for better pod set",
      "Harvest when lower pods dry out; thresh gently to avoid seed damage"
    ],
    beneficiaries: [
      "Dryland Farmers",
      "Madhya Pradesh & Maharashtra Farmers",
      "Mixed Farming Systems",
      "Organic Farmers"
    ],
    pesticides: [
      "Indoxacarb for pod borer",
      "Trichoderma for wilt",
      "Propiconazole for blight"
    ],
    water: "1–2 irrigations only; excess water causes wilt",
    msp: "₹5,440 / Qtl (2025-26)"
  },
  {
    id: 10,
    name: "Banana",
    emoji: "🍌",
    season: "Perennial (Year-round)",
    category: "perennial",
    tagline: "High-value tropical crop with excellent returns",
    soil: "Well-drained loamy; pH 6.0–7.5; high organic matter",
    climate: "Tropical/sub-tropical; 26–30°C; 1200–2200mm water",
    duration: "11–15 months",
    yield: "200–300 Qtl/Acre",
    fertilizers: [
      "Urea: 75 kg/plant/year split monthly",
      "SSP: 100 g/plant basal",
      "MOP: 350 g/plant/year",
      "FYM: 10 kg/plant/year"
    ],
    steps: [
      "Select disease-free TC (tissue culture) plants from certified nursery",
      "Plant at 1.8×1.5 m spacing; dig 50×50×50 cm pits",
      "Fill pit with FYM + topsoil + 100g SSP mix",
      "Drip irrigation from day 1; fertigation via drip from 30 DAP",
      "Earthing-up at 4 and 8 months for support; prop plants at bunch stage",
      "Remove male bud at 7–8 days after last hand to improve bunch weight",
      "Cover bunch with perforated plastic sleeve for protection from thrips",
      "Harvest when angular fingers become rounded; 40–45°C days after shooting"
    ],
    beneficiaries: [
      "Jalgaon & Nandurbar Farmers",
      "Irrigated Farm Owners",
      "Drip-Irrigation Users",
      "Export Market Suppliers"
    ],
    pesticides: [
      "Mancozeb for Sigatoka",
      "Carbendazim for crown rot",
      "Chlorpyrifos for corm weevil"
    ],
    water: "Drip: 50–80 L/plant/day; critical throughout growth",
    msp: "Market-linked; avg ₹1,200–2,500/Qtl"
  },
  {
    id: 11,
    name: "Mustard",
    emoji: "🌼",
    season: "Rabi (Oct–Feb)",
    category: "rabi",
    tagline: "India's top oilseed crop in Rabi season",
    soil: "Sandy-loam to loam; pH 6.0–7.5",
    climate: "Cool dry conditions; 10–25°C; tolerates frost",
    duration: "90–120 days",
    yield: "6–12 Qtl/Acre",
    fertilizers: [
      "Urea: 35 kg/acre in 2 splits",
      "SSP: 30 kg/acre basal",
      "Sulphur: 15 kg/acre",
      "Boron: 200g/acre"
    ],
    steps: [
      "Field preparation after Kharif harvest; 2 ploughings",
      "Broadcast or line sow at 1–1.5 cm depth; seed rate 1.5–2 kg/acre",
      "First irrigation at 25–30 DAS (branching stage)",
      "Apply Urea top-dress at branching and flowering",
      "Spray Dimethyl 30EC for aphid control if needed",
      "Spray 0.5% Borax solution at flowering for seed set",
      "Harvest when 75% pods turn yellow-brown",
      "Thresh on tarpaulin; winnow to clean seeds"
    ],
    beneficiaries: [
      "Rajasthan & MP Farmers",
      "Maharashtra Rabi Growers",
      "Edible Oil Producers",
      "Intercropping Farmers"
    ],
    pesticides: [
      "Dimethyl for aphids",
      "Chlorpyrifos for painted bug",
      "Carbendazim for white rust"
    ],
    water: "2–3 irrigations; critical at branching and pod formation",
    msp: "₹5,950 / Qtl (2025-26)"
  },
  {
    id: 12,
    name: "Grape",
    emoji: "🍇",
    season: "Perennial (Pruning: Oct/Jan)",
    category: "perennial",
    tagline: "Nashik's pride — India's wine and export grape hub",
    soil: "Sandy-loam to light loam; pH 6.5–7.5; good drainage",
    climate: "Dry sunny weather; 15–38°C; low humidity during harvest",
    duration: "Perennial; 2 crops/year",
    yield: "60–100 Qtl/Acre",
    fertilizers: [
      "Urea: 50 kg/acre per pruning cycle",
      "SSP: 60 kg/acre basal",
      "Potassium Nitrate foliar at fruit development",
      "Micronutrient mix spray every 3 weeks"
    ],
    steps: [
      "Plant rooted cuttings/grafts at 3×2 m spacing on flat or trained trellis",
      "Train vines to bower/telephone/kniffin system in first 2 years",
      "Back pruning in October (Kanda chhataai) for main crop",
      "Apply pre-bloom spray with GA₃ for berry sizing (for Thompson Seedless)",
      "Thin bunches to 1–2 per shoot; berry thinning at pea-size stage",
      "Dip bunches in Ethephon solution for colour development (coloured varieties)",
      "Spray Mancozeb every 7–10 days for downy mildew in humid weather",
      "Harvest at 16–22% Brix; pack in ventilated boxes with bottom cushioning"
    ],
    beneficiaries: [
      "Nashik & Sangli Farmers",
      "Wine Grape Producers",
      "Export-Oriented Growers",
      "FPO & Cooperative Members"
    ],
    pesticides: [
      "Metalaxyl+Mancozeb for downy mildew",
      "Myclobutanil for powdery mildew",
      "Spirotetramat for mealybug"
    ],
    water: "Drip irrigation: 60–80 L/vine/day; regulated deficit at berry colour",
    msp: "Market-linked; export quality ₹30–80/kg"
  }
];


// ===================================================================
//  TABLE 2 : MARKET PRICES
//  Fields: crop, mandi, min, max, modal, trend, filter
// ===================================================================
const marketData = [
  { crop: "Wheat",   mandi: "Pune APMC",          min: 2100, max: 2250, modal: 2180, trend: "up",     filter: "wheat"   },
  { crop: "Wheat",   mandi: "Nashik Mandi",        min: 2050, max: 2200, modal: 2150, trend: "stable", filter: "wheat"   },
  { crop: "Rice",    mandi: "Kolhapur APMC",       min: 1900, max: 2300, modal: 2100, trend: "up",     filter: "rice"    },
  { crop: "Soybean", mandi: "Latur Mandi",         min: 4700, max: 5100, modal: 4900, trend: "up",     filter: "soybean" },
  { crop: "Soybean", mandi: "Aurangabad APMC",     min: 4650, max: 5000, modal: 4850, trend: "stable", filter: "soybean" },
  { crop: "Cotton",  mandi: "Amravati Mandi",      min: 6800, max: 7200, modal: 7050, trend: "up",     filter: "cotton"  },
  { crop: "Onion",   mandi: "Lasalgaon (Nashik)",  min: 700,  max: 1400, modal: 1050, trend: "down",   filter: "onion"   },
  { crop: "Onion",   mandi: "Pimpalgaon",          min: 650,  max: 1300, modal: 980,  trend: "down",   filter: "onion"   },
  { crop: "Tomato",  mandi: "Narayangaon",         min: 600,  max: 1800, modal: 1100, trend: "up",     filter: "tomato"  },
];


// ===================================================================
//  TABLE 3 : VERIFIED BUYERS
//  Fields: name, crop, price, location
// ===================================================================
const buyers = [
  { name: "Raj Agro Traders",      crop: "Wheat, Soybean",        price: "₹2,200/Qtl",  location: "Pune"      },
  { name: "Nashik Exports Pvt Ltd",crop: "Onion, Grape",          price: "₹1,100/Qtl",  location: "Nashik"    },
  { name: "Green Valley FPO",      crop: "Tomato, Vegetables",    price: "₹900–1,500/Qtl", location: "Aurangabad" },
  { name: "Cotton King Ltd",       crop: "Cotton",                price: "₹7,100/Qtl",  location: "Amravati"  },
  { name: "Sahyadri Farms",        crop: "Grapes, Pomegranate",   price: "₹35/kg+",     location: "Nashik"    },
  { name: "Mahasugar Co-op",       crop: "Sugarcane",             price: "₹342/Qtl",    location: "Kolhapur"  },
];


// ===================================================================
//  TABLE 4 : CONSULTATION Q&A
//  Fields: name, crop, district, text, answer (optional), status
//  status options: "answered" | "pending" | "new"
// ===================================================================
const questions = [
  {
    name: "Suresh Patil",
    crop: "Wheat",
    district: "Pune",
    text: "My wheat leaves are turning yellow from tips. What could be the problem?",
    answer: "Yellow tips usually indicate Nitrogen deficiency or Yellow Rust disease. Apply a top-dress of Urea (25 kg/acre) and if lesions are present, spray Propiconazole 0.1%. Check irrigation frequency as over-watering also causes yellowing.",
    status: "answered"
  },
  {
    name: "Ramabai Jadhav",
    crop: "Onion",
    district: "Nashik",
    text: "Purple spots are appearing on my onion leaves. How should I treat this?",
    answer: "This is Purple Blotch, caused by Alternaria porri. Spray Mancozeb 75WP at 2.5 g/L water every 10 days. Remove and destroy severely infected leaves. Avoid overhead irrigation.",
    status: "answered"
  },
  {
    name: "Vitthal Deshmukh",
    crop: "Soybean",
    district: "Latur",
    text: "Caterpillars are eating soybean pods. How to control them effectively?",
    answer: "These are likely Bihar hairy caterpillars or tobacco caterpillar. Spray Chlorpyrifos 20EC at 2 ml/L or Indoxacarb 15.8% at 1ml/L. Do this in the evening for best results.",
    status: "answered"
  },
  {
    name: "Meena Khandagale",
    crop: "Cotton",
    district: "Amravati",
    text: "When is the right time to harvest cotton for better price?",
    answer: null,
    status: "pending"
  },
  {
    name: "Balasaheb More",
    crop: "Tomato",
    district: "Kolhapur",
    text: "How many drip irrigations per day for tomato in hot summer?",
    answer: null,
    status: "pending"
  }
];