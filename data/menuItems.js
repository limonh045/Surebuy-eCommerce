export const menuItems = [
  {
    name: "Offers",
    to: "/offer",
    extraStyle: true,
    catagory: "offer",
    
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "Winter Collection",
    to: "/winter-collection",
    catagory: "winter-collection",
    icon: "/menuicon/winter.png",
    banars: [
      "/_nuxt/assets/banner/flash-sales.png",
      "/_nuxt/assets/banner/flash-sales2.png",
      ]
  },
  {
    name: "COVID-19 Protection",
    to: "/covid-19",
    catagory: "covid19",
    icon: "/menuicon/covid.png",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "New Arrival",
    to: "/new-arrival",
    catagory: "new-arrival",
    icon: "/menuicon/newarrival.png",
    banars: [
      "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
      "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
    ]
  },
  {
    name: "Flash Sales",
    to: "/flash-sales",
    catagory: "flash-sales",
    icon: "/menuicon/flashsales.png",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "Popular",
    to: "/Popular",
    catagory: "popular",
    icon: "/menuicon/winter.png",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "Baby Care",
    to: "/babycare",
    icon: "/menuicon/baby.PNG",
    expand: false,
    banars: [
      "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
      "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
    ],
    submenu: [
      {
        name: "Newborn Essentials",
        to: "/newborn-essentials",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/newborn-essentials?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59657&q=best&v=1&m=250&webp=1",
        catagory: "newborn-essentials",
        banars: [
          "/_nuxt/assets/banner/baby-care.png",
          "/_nuxt/assets/banner/baby-care2.png",
          ]
      },
      {
        name: "Diapers & Wipers",
        catagory: "diapers-wipers",
        to: "/diaperswipers",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/diapers-wipes?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28461&q=good&v=1&m=250&webp=1",
          banars: [
            "/_nuxt/assets/banner/baby-care.png",
            "/_nuxt/assets/banner/baby-care2.png",
            ],
        expand: false,
        submenu: [
          {
            name: "wipers",
            to: "/wipers",
            catagory: "wipers",
            catagorIcon:
              "https://cdn.chaldal.net/_mpimage/wipes?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29080&q=low&v=1&m=250&webp=1",
            banars: [
              "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
              "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
            ]
          },
          {
            name: "diapers",
            to: "/diapers",
            catagory: "diapers",
            catagorIcon:
              "https://cdn.chaldal.net/_mpimage/diapers?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29079&q=best&v=1&m=250&webp=1",
              banars: [
                "/_nuxt/assets/banner/baby-care.png",
                "/_nuxt/assets/banner/baby-care2.png",
                ]
          }
        ]
      },
      {
        name: "Feeders",
        to: "feeders",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/feeders?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29082&q=low&v=1&m=250&webp=1",
        catagory: "feeders"
      },
      {
        name: "Fooding",
        to: "fooding",
        catagory: "fooding",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/fooding?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D27510&q=best&v=1&m=250&webp=1"
      },
      {
        name: "bath & skincare",
        to: "bath-skincate",
        catagory: "bath-skincare",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/bath-skincare?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D27525&q=low&v=1&m=250&webp=1"
      }
    ]
  },
  {
    name: "Pet care",
    to: "/petcare",
    icon: "/menuicon/pet-care_New1.PNG",
    expand: false,
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      ],
    submenu: [
      {
        name: "kitten food",
        to: "/kittenfod",
        catagory: "kitten",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/dog-food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28784&q=low&v=1&m=250&webp=1",
        banars: [
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
        ]
      },
      {
        name: "cat food",
        to: "/cat-food",
        catagory: "cat-food",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/kitten-food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D31731&q=best&v=1&m=250&webp=1",
          banars: [
            "/_nuxt/assets/banner/baby-care.png",
            "/_nuxt/assets/banner/baby-care2.png",
            ]
      },
      {
        name: "dog food",
        to: "/dogfood",
        catagory: "dog-food",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/cat-food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28718&q=low&v=1&m=250&webp=1",
        banars: [
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
        ]
      },
      {
        name: "other pet foods",
        to: "otherpet",
        catagory: "otherpet",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/other-pet-foods?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28785&q=low&v=1&m=250&webp=1",
          banars: [
            "/_nuxt/assets/banner/baby-care.png",
            "/_nuxt/assets/banner/baby-care2.png",
            ]
      },
      {
        name: "pet accessories",
        to: "petaccessories",
        catagory: "pet",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/pet-accessories?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28783&q=low&v=1&m=250&webp=1",
        banars: [
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
        ]
      }
    ]
  },
  {
    name: "Food",
    to: "food",
    catagory: "food",
    icon: "/menuicon/winter.png",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "Home & cleaning",
    to: "home-cleaning",
    catagory: "home-cleaning",
    icon: "/menuicon/homeclean.PNG"
  },
  {
    name: "Office Products",
    to: "/officeproduct",
    icon: "/menuicon/officepod.PNG",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ],
    expand: false,
    submenu: [
      {
        name: "Batteries",
        to: "/batteries",
        catagory: "batteries",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/batteries?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28700&q=low&v=1&m=250&webp=1",
        banars: [
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67496&q=best&v=1&w=700&webp=1",
          "https://cdn.chaldal.net/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69332&q=best&v=1&w=700&webp=1"
        ]
      },
      {
        name: "writhing & drawing",
        to: "writhingdrawing",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/writing-drawing?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28701&q=low&v=1&m=250&webp=1"
      },
      {
        name: "printing",
        to: "printing",
        catagorIcon:
          "https://cdn.chaldal.net/_mpimage/printing?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D29194&q=low&v=1&m=250&webp=1"
      }
    ]
  },
  {
    name: "Beauty & Health",
    to: "beauty-health",
    catagory: "beauty-health",
    icon: "/menuicon/beauty-collapse.PNG"
  },
  {
    name: "Home Appliance",
    to: "home-appliance",
    catagory: "home-appliance",
    icon: "/menuicon/homeappliance.PNG",
    banars: [
      "/_nuxt/assets/banner/baby-care.png",
      "/_nuxt/assets/banner/baby-care2.png",
      ]
  },
  {
    name: "vehicle Essentials",
    to: "vehicle-essentials",
    catagory: "vehicle-essentials",
    icon: "/menuicon/vehicle.PNG"
  }
];
