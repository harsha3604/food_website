import { Product } from "../types/product";

export const products: Product[] = [
  //1
  {
    id: 1,
    name: "Custard Apple",
    unit: "lb",
    price: 14.49,
    image: "/images/custard-apple.jpg",
    soldOut: true,
    description: [
      {
        type: "paragraph",
        title: "",
        content: "",
      },
      {
        type: "list",
        title: "Benefits",
        items: [
          "Rich in nutrients: contains vitamin C, vitamin A, potassium, magnesium, dietary fibre and antioxidants.",
          "Some health benefits attributed to it: aiding digestion, boosting immunity, supporting heart health, etc.",
        ],
      },
    ],
  },
  //2
  {
    id: 2,
    name: "Guava (Ruby Red)",
    unit: "lb",
    price: 5,
    image: "/images/guava.jpg",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description",
        content:
          "Ruby Red Guava is a powerhouse of Vitamin C, fiber, and antioxidants. It helps boost immunity, improve digestion, and promote healthy skin. The natural lycopene content gives it its rich color and provides protective antioxidant benefits.",
      },
    ],
  },
  //3
  {
    id: 3,
    name: "Guava (Honey Crisp)",
    unit: "lb",
    price: 4,
    image: "/images/guava-honey.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description:",
        content:
          "Honey Crisp Guava is a premium tropical variety celebrated for its crunchy texture, honey-like sweetness, and refreshing aroma. With smooth, light green skin and a creamy white to pale pink interior, this guava stands out for its delicate balance of sweetness and crisp bite, making it one of the most loved fresh-eating guavas.",
      },
      {
        type: "paragraph",
        title: "Taste & Texture:",
        content:
          "True to its name, Honey Crisp Guava offers a crisp, apple-like crunch combined with a mild floral sweetness and a refreshing tropical scent. The flesh is firm yet juicy, making it perfect for snacking straight from the fruit bowl. Unlike softer varieties, this guava retains its firmness and freshness even when ripe, giving every bite a satisfying snap.",
      },
      {
        type: "list",
        title: "Nutritional Value",
        items: [
          "High in Vitamin C and fiber",
          "Low in calories and rich in antioxidants",
        ],
      },
    ],
  },
  //4
  {
    id: 4,
    name: "Jamun (Neeredu)",
    unit: "lb",
    price: 11,
    image: "/images/neeredu.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Neeredu, also known as Jamun or Indian Black Plum, is a deep purple, glossy fruit celebrated for its rich flavor, medicinal value, and cooling properties. Native to the Indian subcontinent, Neeredu is cherished for its sweet, tangy, and slightly astringent taste that leaves a refreshing feel on the palate.",
      },
      {
        type: "paragraph",
        title: "Taste & Appearance:",
        content:
          "The fruit has an oval shape with shiny, dark violet skin and juicy, purple-stained pulp inside. The flavor starts off slightly tangy and turns sweet as it ripens, creating a unique balance that’s both bold and refreshing. Each fruit contains a single seed and stains the tongue a beautiful purple — a sign of its natural richness!",
      },
      {
        type: "list",
        title: "Nutritional Value:",
        items: [
          "Neeredu is a powerhouse of nutrients — rich in iron, vitamin C, antioxidants, and natural sugars.",
          "Help control blood sugar levels",
          "Aid digestion and liver health",
          "Improve immunity and hydration, especially in summer",
          "Support skin health due to its detoxifying properties",
        ],
      },
    ],
  },
  //5
  {
    id: 5,
    name: "Dragon Fruit",
    unit: "lb",
    price: 4,
    image: "/images/dragon-fruit.jpg",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Dragon Fruit, also known as Pitaya, is a stunning tropical fruit known for its vibrant pink or yellow skin, scaly green tips, and delicately speckled flesh. Its exotic look and refreshing flavor make it one of the most eye-catching and healthful fruits grown in tropical regions.",
      },
      {
        type: "paragraph",
        title: "Taste & Appearance:",
        content:
          "Dragon Fruit has a mildly sweet, refreshing taste—a cross between kiwi and pear—with a soft, creamy texture dotted with tiny edible black seeds. Depending on the variety, the flesh can be white, red, or deep magenta, each with its own subtle flavor nuances.",
      },
      {
        type: "list",
        title: "Nutritional Value:",
        items: [
          "Excellent source of vitamin C, calcium, magnesium, and antioxidants",
          "High in dietary fiber and low in calories",
          "Supports digestion, immunity, and glowing skin",
          "Naturally hydrates and cools the body, perfect for summer refreshment",
        ],
      },
    ],
  },
  //6
  {
    id: 6,
    name: "Guava (Thai Variety)",
    unit: "lb",
    price: 4,
    image: "/images/guava-thai.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Thai Guava is a premium tropical fruit prized for its crisp texture, refreshing flavor, and subtle sweetness. Native to Thailand, this guava variety is known for its larger size, bright green skin, and firm white flesh, making it a favorite among fruit lovers who enjoy a crunchy, mildly sweet bite.",
      },
      {
        type: "paragraph",
        title: "Taste & Texture:",
        content:
          "Thai Guava offers a refreshing, clean flavor with a gentle sweetness and a hint of tang. Its crunchy, apple-like texture makes it ideal for eating fresh or slicing into salads. Unlike softer guavas, it stays firm even after ripening, giving every bite a satisfying crispness.",
      },
      {
        type: "list",
        title: "Nutritional Value:",
        items: [
          "High in Vitamin C, antioxidants, and fiber",
          "Supports immunity, digestion, and hydration",
          "Low in calories and great for healthy snacking",
          "Rich in natural minerals that promote skin and heart health",
        ],
      },
    ],
  },
  //7
  {
    id: 7,
    name: "Mango Leaves",
    unit: "lb",
    price: 5,
    image: "/images/mango-leaves.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Mango Leaves, known as Maamidaku in Telugu and Aam Patta in Hindi, come from the sacred mango tree (Mangifera indica), which holds a special place in Indian tradition. These bright green, glossy leaves are not only symbols of prosperity and freshness but are also deeply woven into the spiritual and cultural heritage of India.",
      },
      {
        type: "paragraph",
        title: "Cultural & Religious Significance:",
        content:
          "Mango leaves are considered highly auspicious and are used in almost every Hindu ritual and celebration. They symbolize good fortune, purity, and positive energy. Traditionally, they are used to make “Torans” (leaf garlands) hung at entrances during festivals like Ganesh Chaturthi, Ugadi, Deepavali, and Weddings, signifying welcome and protection for the home.",
      },
    ],
  },
  //8
  {
    id: 8,
    name: "Pasture Raised Eggs",
    unit: "dozen",
    price: 5.49,
    image: "/images/eggs.jpg",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Our Pasture-Raised Brown Eggs come from happy, free-roaming hens raised naturally on open green pastures. These hens spend their days pecking, scratching, and foraging under the sun — the way nature intended. The result is eggs that are richer in flavor, deeper in color, and higher in nutrition than ordinary store-bought ones.",
      },
      {
        type: "list",
        title: "Quality & Nutrition:",
        items: [
          "Golden yolks that are creamy, flavorful, and full of life",
          "Naturally rich in omega-3s, protein, and vitamins A, D, and E",
          "No antibiotics, no hormones — just pure, farm-fresh goodness",
          "Ethically produced with humane, pasture-based care",
        ],
      },
      {
        type: "paragraph",
        title: "Taste & Texture:",
        content:
          "Each egg delivers a clean, fresh taste with a vibrant yolk and firm white that cooks beautifully. Perfect for your morning breakfasts, baking, or hearty home meals, these eggs capture the essence of farm freshness in every bite.",
      },
    ],
  },
  //9
  {
    id: 9,
    name: "Longan (Chitti Munjalu)",
    unit: "lb",
    price: 5,
    image: "/images/longan.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Longan, often called the “Dragon’s Eye” fruit, is a sweet and juicy tropical delicacy known for its translucent flesh, delicate aroma, and refreshing flavor. Belonging to the same family as lychee, Longan is loved for its mild honey-like sweetness and smooth texture that melts in your mouth.",
      },
      {
        type: "paragraph",
        title: "Taste & Appearance:",
        content:
          "This small, round fruit has a light brown, thin shell that peels easily to reveal crystal-clear flesh surrounding a shiny black seed — giving it the look of a dragon’s eye. The taste is sweet, floral, and subtly musky, offering a perfect tropical balance of flavor and fragrance.",
      },
      {
        type: "list",
        title: "Nutritional Value:",
        items: [
          "Rich in Vitamin C, potassium, and antioxidants",
          "Boosts immunity, skin health, and energy",
          "Naturally supports relaxation and better sleep",
          "Low in calories and high in hydration, making it a refreshing summer fruit",
        ],
      },
    ],
  },
  //10
  {
    id: 10,
    name: "Bilva Leaf",
    unit: "lb",
    price: 0.49,
    image: "/images/bilva-leaf.webp",
    soldOut: true,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "The Bilva Leaf, also known as Bael Patra or Bel Leaf, holds great spiritual and medicinal significance in Indian tradition. Sacred to Lord Shiva, it is widely used in religious rituals, especially during Maha Shivaratri and Ganesh Chaturthi. Each Bilva leaf typically has three leaflets symbolizing purity, peace, and prosperity.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Beyond its spiritual importance, Bilva leaves are rich in natural antioxidants and bioactive compounds. They are valued in Ayurveda for their ability to purify the blood, cool the body, and support digestive health.",
      },
      {
        type: "list",
        title: "Health Benefits:",
        items: [
          "Helps in detoxification and cleansing of the body",
          "Promotes healthy digestion and metabolism",
          "Known to support blood sugar balance",
          "Possesses anti-inflammatory and antimicrobial properties",
        ],
      },
    ],
  },
  //11
  {
    id: 11,
    name: "Beetel Leaves",
    unit: "lb",
    price: 10,
    image: "/images/beetel-leaves.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Betel leaves, commonly known as Paan, are glossy, heart-shaped leaves from the Piper betle plant, native to South and Southeast Asia. Known for their rich green color and aromatic flavor, betel leaves hold a cherished place in Indian culture — used in traditional rituals, Ayurvedic medicine, and as a refreshing mouth freshener after meals.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "The leaves are smooth and shiny, with a mildly spicy, peppery taste and a pleasant aroma when chewed or crushed.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Betel leaves have been a part of Indian heritage for centuries. They are used in auspicious ceremonies, temple offerings, and social gatherings. In many traditions, offering paan signifies respect, purity, and prosperity. In Ayurveda, betel leaves are known for their antiseptic, digestive, and rejuvenating properties.",
      },
    ],
  },
  //12
  {
    id: 12,
    name: "Curry Leaves",
    unit: "lb",
    price: 3,
    image: "/images/curry-leaves.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Curry leaves, also known as Kadi Patta, are aromatic, glossy green leaves native to South Asia and widely used in Indian cooking. These small, vibrant leaves come from the Murraya koenigii tree and are known for their distinctive flavor that adds depth and freshness to curries, dals, chutneys, and tempering. When lightly fried in oil or ghee, they release a nutty, citrusy aroma that enhances any dish.",
      },
      {
        type: "paragraph",
        title: "Culinary & Cultural Importance:",
        content:
          "Curry leaves are a staple in Indian households, especially in South Indian cuisine, where they are used in seasoning dishes like sambar, rasam, and curries. Beyond their culinary role, they are also valued in Ayurveda for their healing properties and refreshing fragrance.",
      },
    ],
  },
  //13
  {
    id: 13,
    name: "Sapota",
    unit: "lb",
    price: 9,
    image: "/images/sapota.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Sapota, also known as Chikoo, is a delicious tropical fruit loved for its natural sweetness and smooth, grainy texture. With its caramel-like flavor and rich aroma, Sapota is a wholesome treat that nourishes the body while satisfying your sweet cravings. Grown with care at Sree Krithi Farms, each fruit is handpicked at peak ripeness to ensure farm-fresh taste and maximum nutrition.",
      },
      {
        type: "list",
        title: "Health benefits",
        items: [
          "Boosts energy naturally due to its high natural sugar content",
          "Supports digestion and gut health with rich dietary fiber",
          "Strengthens immunity and promotes glowing skin",
          "Good source of antioxidants that help fight free radicals",
        ],
      },
    ],
  },
  //14
  {
    id: 14,
    name: "Moringa Leaves",
    unit: "lb",
    price: 6,
    image: "/images/moringa.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Moringa leaves, often called Drumstick Tree Leaves or Murungai Keerai, come from the Moringa oleifera tree — known as the “Miracle Tree” for its incredible nutritional and medicinal value. The small, delicate green leaves have a mild earthy flavor and are widely used in soups, curries, herbal powders, and teas.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Fresh moringa leaves are nutrient-dense and provide an excellent source of plant-based protein, vitamins, and antioxidants — making them a true superfood for natural wellness.",
      },
      {
        type: "paragraph",
        title: "Cultural & Ayurvedic Importance:",
        content:
          "In traditional Indian households and Ayurveda, moringa is praised for its ability to boost energy, improve immunity, and purify the blood. The leaves are used both as a daily food ingredient and as a rejuvenating tonic. Known for balancing Vata and Kapha doshas, moringa supports vitality and overall health.",
      },
    ],
  },
  //15
  {
    id: 15,
    name: "Neem Sticks",
    unit: "pack",
    price: 12,
    image: "/images/neem-sticks.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Neem sticks, also known as Datun or Neem Chewing Sticks, are slender twigs obtained from the Neem tree (Azadirachta indica) — one of nature’s most powerful medicinal plants. Traditionally used in India for centuries as a natural toothbrush, these sticks are prized for their antibacterial, antifungal, and cleansing properties.",
      },
      {
        type: "list",
        title: "Health Benefits",
        items: [
          "Naturally cleans teeth and gums",
          "Prevents plaque and bad breath",
          "Fights oral bacteria and infections",
          "Strengthens gums and freshens mouth",
          "Promotes sustainable, eco-friendly dental care",
        ],
      },
      {
        type: "list",
        title: "Uses:",
        items: [
          "As a natural toothbrush (chewing stick)",
          "For Ayurvedic oral care routines",
          "In traditional detox and cleansing practices",
          "As an eco-friendly alternative to synthetic brushes",
        ],
      },
    ],
  },
  //16
  {
    id: 16,
    name: "Tamarind Fruits (Chintakayalu)",
    unit: "lb",
    price: 7,
    image: "/images/tamarind-fruits.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Chintakayalu, known as Tamarind Pods, are the tangy-sweet fruits of the Tamarindus indica tree — a tropical treasure cherished across Indian kitchens. Each brown, curved pod encases a sticky, fibrous pulp rich in natural tartness and aroma. The pulp is commonly used as a natural souring agent in curries, chutneys, rasam, and sauces, adding a signature flavor that balances spice and richness.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Freshly harvested tamarind pods from Sree Krithi Farms are naturally sun-dried and packed with care, preserving their authentic taste and nutritional goodness.",
      },
      {
        type: "paragraph",
        title: "Culinary & Cultural Importance:",
        content:
          "Tamarind is a cornerstone of South Indian cuisine and Ayurvedic tradition. Beyond its role in cooking, it’s also valued for its digestive and cooling properties. From traditional rasam to tangy rice and chutneys, chintakayalu bring that unmistakable, mouth-watering tang that completes every meal.",
      },
      {
        type: "list",
        title: "Health Benefits",
        items: [
          "Aids digestion and soothes the stomach",
          "Rich in antioxidants and vitamin C",
          "Helps regulate cholesterol levels",
          "Acts as a natural mild laxative",
          "Boosts flavor while promoting gut health",
        ],
      },
    ],
  },
  //17
  {
    id: 17,
    name: "Indian gooseberry - Amla",
    unit: "lb",
    price: 15,
    image: "/images/amla.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "From the lush farms of Sree Krithi Farms, we bring you the pure goodness of Indian Gooseberry (Amla) — a symbol of health, vitality, and natural rejuvenation.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Each vibrant green fruit is bursting with Vitamin C, antioxidants, and essential minerals, known to boost immunity, enhance skin glow, and support digestion. With its refreshing tang and time-tested Ayurvedic benefits, Amla is more than just a fruit — it’s a daily dose of wellness.",
      },
      {
        type: "paragraph",
        title: "",
        content:
          "Enjoy it fresh, in juices, or as traditional pickles — straight from our farm to your home, filled with freshness and purity.",
      },
    ],
  },
  //18
  {
    id: 18,
    name: "Green Coconuts Premium Variety",
    unit: "per piece",
    price: 3.49,
    image: "/images/coconuts.webp",
    soldOut: false,

    description: [
      {
        type: "paragraph",
        title: "",
        content:
          "Green Coconut, also known as Tender Coconut, is a refreshing tropical delight known for its naturally sweet water and soft, jelly-like meat. Harvested young, these coconuts are packed with essential electrolytes, making them one of the purest forms of natural hydration.",
      },
      {
        type: "paragraph",
        content:
          "The outer green shell protects the nutrient-rich water inside, keeping it cool and revitalizing even on the hottest days. Each sip delivers a burst of freshness along with minerals like potassium, magnesium, calcium, and natural sugars that restore energy instantly.",
      },
      {
        type: "paragraph",
        content:
          "Perfect for drinking, adding to smoothies, or enjoying the tender malai, Green Coconuts are a wholesome, hydrating treat straight from nature.",
      },
    ],
  },
  //19
  {
    id: 19,
    name: "Bamboo Tube",
    unit: "lb",
    price: 6,
    image: "/images/bamboo.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description",
        content:
          "At Sree Krithi Farms, our Bamboo Tubes celebrate nature’s simplicity and strength. Hand-cut from sustainable bamboo, these tubes are completely eco-friendly, biodegradable, and chemical-free, making them the perfect alternative to plastic and metal containers.",
      },
      {
        type: "paragraph",
        content:
          "Strong, stylish, and sustainable, Bamboo Tubes bring a touch of nature to everyday living while supporting eco-conscious choices and traditional practices.",
      },
      {
        type: "list",
        title: "Common Uses",
        items: [
          "Natural food containers for cooking, serving traditional dishes, steaming rice, or storing dry snacks",
          "Rustic drinkware for herbal teas, juices, or tender coconut water",
          "Decor and craft items such as plant holders, lamps, or home décor pieces",
          "Sustainable packaging for gifts or organic product presentation",
          "Traditional bamboo cooking that enhances flavor and preserves nutrients",
        ],
      },
      {
        type: "paragraph",
        content:
          "Pure, practical, and planet-friendly — Bamboo Tubes from Sree Krithi Farms offer a timeless blend of utility, sustainability, and natural beauty.",
      },
    ],
  },
  //20
  {
    id: 20,
    name: "Indian Regi (Jujube)",
    unit: "lb",
    price: 7,
    image: "/images/jujube.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description",
        content:
          "Indian Jujube, commonly known as Ber, is a traditional tropical fruit widely grown across India. It is small to medium-sized with a thin green to yellowish-brown skin and crisp, juicy flesh that offers a pleasant sweet-tangy flavor.",
      },
      {
        type: "paragraph",
        content:
          "Ber is highly nutritious and packed with vitamin C, antioxidants, dietary fiber, and essential minerals like potassium and iron. It helps improve immunity, digestion, and overall vitality. The fruit is low in calories and naturally refreshing, making it a healthy snack for all age groups.",
      },
      {
        type: "paragraph",
        content:
          "Indian Jujube is enjoyed fresh, dried, or used in pickles, chutneys, candies, and traditional medicines. In Ayurveda, Ber is valued for its cooling properties and its ability to support digestive and respiratory health.",
      },
      {
        type: "paragraph",
        content:
          "This hardy fruit grows well in dry and semi-arid regions, requiring minimal water, making it a sustainable and farmer-friendly crop.",
      },
    ],
  },
  //21
  {
    id: 21,
    name: "Red Gongura Bunch",
    unit: "bunch",
    price: 6,
    image: "/images/about-red-gongura.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description",
        content:
          "Red Gongura is a tangy leafy green cherished in South Indian cooking for its distinctive sour flavor and vibrant color.",
      },
      {
        type: "list",
        title: "Culinary Uses",
        items: [
          "Prepare gongura pickle",
          "Add to curries and dals for a tangy twist",
          "Blend into chutneys for a zesty finish",
        ],
      },
    ],
  },
  //22
  {
    id: 22,
    name: "Green Gongura Bunch",
    unit: "bunch",
    price: 6,
    image: "/images/about-green-gongura.webp",
    soldOut: false,
    description: [
      {
        type: "paragraph",
        title: "Description",
        content:
          "Green Gongura is a tart leafy green used across Indian cuisine, prized for its bright flavor and adaptability in traditional recipes.",
      },
      {
        type: "list",
        title: "Culinary Uses",
        items: [
          "Enhance curries and stews with natural tang",
          "Make spicy gongura chutney",
          "Use as a side or mix with rice dishes",
        ],
      },
    ],
  },
];
