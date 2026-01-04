// Categories: residential | retail | cafe | technical
window.PORTFOLIO_PROJECTS = [
  {
    id: "annex-room",
    category: "residential",
    titleKey: "p_annex_title",
    metaKey: "p_annex_meta",
    tags: ["Before/After", "Fit-Out", "Lighting", "Finishes"],
    thumb: "assets/images/residential/annex-room/02-after.jpg",
    overviewKey: "p_annex_overview",
    scopeKeys: ["p_annex_s1","p_annex_s2","p_annex_s3","p_annex_s4","p_annex_s5","p_annex_s6"],
    highlightKeys: ["p_annex_h1","p_annex_h2","p_annex_h3"],
    beforeAfter: {
      before: "assets/images/residential/annex-room/01-before.jpg",
      after:  "assets/images/residential/annex-room/02-after.jpg"
    },
    gallery: [
      "assets/images/residential/annex-room/01-before.jpg",
      "assets/images/residential/annex-room/03-before.jpg",
      "assets/images/residential/annex-room/02-after.jpg",
      "assets/images/residential/annex-room/04-after.jpg",
      "assets/images/residential/annex-room/05-after.jpg",
      "assets/images/residential/annex-room/06-after.jpg"
    ]
  },

  {
    id: "villa-01",
    category: "residential",
    titleKey: "p_villa_title",
    metaKey: "p_villa_meta",
    tags: ["Luxury Villa", "Before/After", "Turnkey", "Premium Finishes"],
    thumb: "assets/images/residential/villa-01/after-08.jpg",
    overviewKey: "p_villa_overview",
    scopeKeys: ["p_villa_s1","p_villa_s2","p_villa_s3","p_villa_s4","p_villa_s5"],
    highlightKeys: ["p_villa_h1","p_villa_h2","p_villa_h3"],
    beforeAfter: {
      before: "assets/images/residential/villa-01/before-1.jpg",
      after:  "assets/images/residential/villa-01/after-01.jpg"
    },
    gallery: [
      "assets/images/residential/villa-01/before-1.jpg",
      "assets/images/residential/villa-01/before-2.jpg",
      "assets/images/residential/villa-01/after-01.jpg",
      "assets/images/residential/villa-01/after-02.jpg",
      "assets/images/residential/villa-01/after-03.jpg",
      "assets/images/residential/villa-01/after-04.jpg",
      "assets/images/residential/villa-01/after-05.jpg",
      "assets/images/residential/villa-01/after-06.jpg",
      "assets/images/residential/villa-01/after-07.jpg",
      "assets/images/residential/villa-01/after-08.jpg",
      "assets/images/residential/villa-01/after-09.jpg"
    ]
  },

  {
    id: "jco-chain",
    category: "retail",
    type: "group",
    titleKey: "p_jco_chain_title",
    metaKey: "p_jco_chain_meta",
    tags: ["Retail Chain", "Multi-Branch", "Fit-Out", "Rollout"],
    thumb: "assets/images/retail-jco/branch-01/005.jpg",
    overviewKey: "p_jco_chain_overview",
    scopeKeys: ["p_jco_s1","p_jco_s2","p_jco_s3","p_jco_s4"],
    highlightKeys: ["p_jco_h1","p_jco_h2","p_jco_h3"],
    branches: [
      {
        id: "branch-01",
        nameKey: "jco_b1",
        gallery: [
          "assets/images/retail-jco/branch-01/001.jpg",
          "assets/images/retail-jco/branch-01/002.jpg",
          "assets/images/retail-jco/branch-01/003.jpg",
          "assets/images/retail-jco/branch-01/004.jpg",
          "assets/images/retail-jco/branch-01/005.jpg",
          "assets/images/retail-jco/branch-01/006.jpg",
          "assets/images/retail-jco/branch-01/007.jpg",
          "assets/images/retail-jco/branch-01/008.jpg",
          "assets/images/retail-jco/branch-01/009.jpg",
          "assets/images/retail-jco/branch-01/010.jpg",
          "assets/images/retail-jco/branch-01/011.jpg",
          "assets/images/retail-jco/branch-01/012.jpg"
        ]
      },
      {
        id: "branch-02",
        nameKey: "jco_b2",
        gallery: [
          "assets/images/retail-jco/branch-02/001.jpg",
          "assets/images/retail-jco/branch-02/002.jpg",
          "assets/images/retail-jco/branch-02/003.jpg",
          "assets/images/retail-jco/branch-02/004.jpg",
          "assets/images/retail-jco/branch-02/005.jpg",
          "assets/images/retail-jco/branch-02/006.jpg",
          "assets/images/retail-jco/branch-02/007.jpg",
          "assets/images/retail-jco/branch-02/008.jpg"
        ]
      },
      {
        id: "branch-03",
        nameKey: "jco_b3",
        gallery: [
          "assets/images/retail-jco/branch-03/001.jpg",
          "assets/images/retail-jco/branch-03/002.jpg",
          "assets/images/retail-jco/branch-03/003.jpg",
          "assets/images/retail-jco/branch-03/004.jpg",
          "assets/images/retail-jco/branch-03/005.jpg",
          "assets/images/retail-jco/branch-03/006.jpg"
        ]
      }
    ]
  },

  {
    id: "cafe-01",
    category: "cafe",
    titleKey: "p_cafe_title",
    metaKey: "p_cafe_meta",
    tags: ["Hospitality", "Fit-Out", "Lighting"],
    thumb: "assets/images/cafes/cafe-01/after-01.jpg",
    overviewKey: "p_cafe_overview",
    scopeKeys: ["p_cafe_s1","p_cafe_s2","p_cafe_s3","p_cafe_s4"],
    highlightKeys: ["p_cafe_h1","p_cafe_h2","p_cafe_h3"],
    gallery: [
      "assets/images/cafes/cafe-01/after-01.jpg",
      "assets/images/cafes/cafe-01/after-02.jpg",
      "assets/images/cafes/cafe-01/after-03.jpg"
    ]
  },

  {
    id: "protected-houses",
    category: "technical",
    titleKey: "p_ph_title",
    metaKey: "p_ph_meta",
    tags: ["Technical", "Specialized", "Site Works"],
    thumb: "assets/images/protected-houses/project-01/before-01.jpg",
    overviewKey: "p_ph_overview",
    scopeKeys: ["p_ph_s1","p_ph_s2","p_ph_s3","p_ph_s4"],
    highlightKeys: ["p_ph_h1","p_ph_h2","p_ph_h3"],
    gallery: [
      "assets/images/protected-houses/project-01/before-01.jpg",
      "assets/images/protected-houses/project-01/before-02.jpg",
      "assets/images/protected-houses/project-01/before-03.jpg",
      "assets/images/protected-houses/project-01/before-04.jpg",
      "assets/images/protected-houses/project-01/before-05.jpg",
      "assets/images/protected-houses/project-01/before-06.jpg",
      "assets/images/protected-houses/project-01/before-07.jpg"
    ]
  }
];

// Featured projects shown on Home
window.FEATURED_PROJECT_IDS = ["villa-01", "annex-room", "jco-chain"];
