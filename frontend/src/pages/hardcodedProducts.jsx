const hardcodedProducts = [
    {
      _id: 1,
      productName: 'Dettol Original Germ Protection Bathing Soap Bar',
      productImage: 'https://m.media-amazon.com/images/I/41eRTgVBRiL._SX300_SY300_QL70_FMwebp_.jpg',
      description:"Daily Protection: Dettol Bathing soap bar provides protection from a range of germs.\n Germ Protection: Deeply cleanses and protects your skin from 100 illness-causing germs. \nHealthy Skin: Contains more than 80% naturally derived ingredients and glycerin to keep skin moisturized and healthy. \nDoctor Recommended: All Dettol products are recommended by Indian Medical Association (IMA)",
      price: {
        mrp: 140,
        cost: 127,
        discountPercent: '13',
      },
      category:"House hold",
      subcategory:"soaps"
    },
    {
        _id: 2,
        productName: 'GoSriKi Womens Cotton Blend Chikankari Embroidered Straight Kurti',
        productImage: 'https://m.media-amazon.com/images/I/51dZ19miAbL._SY741_.jpg',
        description:"Kurta Fabric: Cotton Blend || Kurta Color:-White \n Style: Straight || Length: Long Length || Sleeves: 3/4 \n This set includes: 1 Kurta || Work : Embroidery on Front & sleeves || Neck Style:- Round v Neck \n Occassion: Traditional wear, Casual Wear, party wear, evening wear, Please Click On Brand Name  GoSriKix For More Products. \n Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings",
        price: {
          mrp: 2599,
          cost: 489,
          discountPercent: '81',
        },
        category:"Women Cloths",
      subcategory:"Kurti"
      },
      {
        _id: 3,
        productName: 'DELL KM3322W Keyboard & Mouse Combo',
        productImage: 'https://rukminim2.flixcart.com/image/416/416/kzzw5u80/keyboard/multi-device-keyboard/o/2/d/km3322w-km3322w-keyboard-mouse-combo-anti-fade-spill-resistant-original-imagbvyatqteauf2.jpeg?q=70',
        description:"Power Features \n Battery Type:   AA \n Number Of Batteries:   1\n Dimensions:\n Width   449.2 mm\n Height:   25.3 mm\n   Depth:  123 mm\n Weight:   497.12 g",
        price: {
          mrp: 2499,
          cost: 1249,
          discountPercent: '50',
        },
        category:"Accessories",
      subcategory:"Wireless Keyboard Mouse"
      },

      {
        _id: 4,
        productName: 'Diverse Men Formal Shirt',
        productImage: 'https://m.media-amazon.com/images/I/710+M61cX4L._SY741_.jpg',
        description:"Material - Cotton \n Full sleeve, Collar style - Classic collar; Cuff style - Single cuff \n Pattern - Printed Men’s Formal Shirt\n Double yoke for extra durability & stiffness; Patch pocket at chest\n Made in India",
        price: {
          mrp: 1199,
          cost: 649,
          discountPercent: '46',
        },
        category:"Mens Cloths",
      subcategory:"Shirts"
      },
      {
        _id: 5,
        productName: 'Diesel Mega Chief Analog Grey Dial Mens Watch-DZ4500',
        productImage: 'https://m.media-amazon.com/images/I/91xkv3MQDuL._SX522_.jpg',
        description:"Dial Color: Grey, Case Shape: Round, Dial Glass Material: Mineral       \n Band Color: Black, Band Material: Nylon        \nWatch Movement Type: Quartz, Watch Display Type: Analog      \n  Case Material: Stainless Steel, Case Diameter: 51 millimeters, Stainless Steel Bezel   \n    Water Resistance Depth: 100 meters, Buckle Clasp  \n2 years warranty",
        price: {
          mrp: 18495,
          cost: 10747,
          discountPercent: '42',
        },
        category:"Mens Accessories",
      subcategory:"watches"
      },

      {
        _id: 6,
        productName: 'realme Buds T300 Truly Wireless in-Ear Earbuds with 30dB ANC',
        productImage: 'https://m.media-amazon.com/images/I/61ZEQXGTepL._SX522_.jpg',
        description:"30dB Active Noise Cancellation    \n    Upto 40 Hours Total Playback with Fast-charging support of 10 min charging for 7 hours playback  \n      50ms Ultra-low Latency  \n      IP55 Dust and Water Resistance | Bluetooth 5.3 | realme Link App Connectivity (only for Android)",
        price: {
          mrp: 3999,
          cost: 2299,
          discountPercent: '43',
        },
        category:"Accessories",
      subcategory:"AirPods"
      },
      {
        _id: 7,
        productName: 'Crosscut Furniture Metal Floor Lamp with 3 Shelves ',
        productImage: 'https://m.media-amazon.com/images/I/41XfaPxjBSL._SX342_SY445_QL70_FMwebp_.jpg',
        description:"Energy Efficient",
        price: {
          mrp: 4990,
          cost: 1799,
          discountPercent: '64',
        },
        category:"Households",
      subcategory:"Lamps"
      },
      {
        _id: 8,
        productName: 'PRIYANSHU WOOD CRAFT Sheesham Wood Sofa Set 3 Seater with 2 Drawer Wooden Sofa Set  ',
        productImage: 'https://m.media-amazon.com/images/I/31Yo0HoIREL._SX522_.jpg',
        description:"Product Dimensions:- Length (80 inch), Width (28.5 inch), Height (31 inch)\n Material: Sheesham Wood, Color: Walnut Finish, Style: Contemporary\nThis wooden 3 seater sofa set is a great addition to your living space which adds a touch of elegance to your modern decor theme.\nSeating Cushion:- 21x22 inches & Density 40 & Thickness 6 Inches. Back Rest Cushion:- 21x18 inches & Density 32 & Thickness 4 Inches./nAssembly Or Installation: Easy DIY (Do It Yourself) assembly. All tools and hardware provided in package.",
        price: {
          mrp: 35999,
          cost: 17596,
          discountPercent: '51',
        },
        category:"Furniture",
      subcategory:"Sofa"
      },
      {
        _id: 9,
        productName: 'Lymio Hoodies ',
        productImage: 'https://m.media-amazon.com/images/I/71x15gESB2L._SY879_.jpg',
        description:"Women Hoodies || sweatshirt for Unisex || Unisex Hoodie\nv\nWash care: machine wash cold, tumble dry low, do not bleach. Check our size chart to get your best fit\nFit Type: Regular Fit\nPrinted Hoodies",
        price: {
          mrp: 4999,
          cost: 599,
          discountPercent: '88',
        },
        category:"Womens Clothes",
      subcategory:"Hoodie"
      },
      
      {
        _id: 10,
        productName: 'HIT Flying Insect Killer ',
        productImage: 'https://m.media-amazon.com/images/I/611IGFmQ98L._SX522_.jpg',
        description:"Contains: 1 unit of HIT mosquito killer spray (200ml)\nINSTANT KILL: Instantly kills dangerous mosquitoes and other flying insects\nBETTER EFFICACY: 65% more effective than 2-in1 multi-insect killers for mosquitoes\nCOMPLETE PROTECTION: Complete family protection from diseases like Dengue, Chikungunya, Malaria etc\nWHERE TO USE: Use regularly in all corners like under the bed, under the sofa, behind the curtains & cupboards etc",
        price: {
          mrp: 115,
          cost: 115,
          discountPercent: '0',
        },
        category:"Households",
      subcategory:"Insect Killer"
      },
      {
        _id: 11,
        productName: 'NIVEA Nourishing Body Milk 600ml Body Lotion ',
        productImage: 'https://m.media-amazon.com/images/I/41YMxB8GbOL._SX679_.jpg',
        description:"Nivea body lotion, nourishing body milk, for very dry skin.\nLasting moisturisation : The deep moisture serum formula gives you moisturized skin for up to 48 hours\nReduces roughness of skin.; The nourishing almond oil repairs very dry skin.\nSkin compatibility dermatologically approved.\nTarget Gender: Unisex",
        price: {
          mrp: 625,
          cost: 343,
          discountPercent: '45',
        },
        category:"Households",
      subcategory:"Body Lotion"
      },
  ];


  export default hardcodedProducts;