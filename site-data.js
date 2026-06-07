(() => {
  const STORAGE_KEY = "matsuya_site_content_v5";

  const defaultData = {
    header: {
      logo: "assets/logo.png",
      tagline: "店舗デザイン・企画・施工・特注家具製作"
    },
    hero: {
      eyebrow: "",
      statement: "",
      title: "Store design & Interior work",
      copy: "福岡の店舗設計、内装工事なら株式会社松屋製作所",
      mainCopy: "70年の実績が紡ぐ、理想の空間。\n次の100年も、愛され続ける店舗を共に。",
      subCopy: "昭和・平成・令和と、数多くの店舗空間を手掛けてきた松屋製作所。\n熟練の技術力と時代のニーズを捉える柔軟な提案力で、\n御社のこだわりをカタチにし、ビジネスの成功を支える空間づくりをお約束します。",
      image: "assets/hero-70th.png",
      slides: [
        "assets/hero-watch-store.jpg",
        "assets/hero-sweets.jpg",
        "assets/hero-office.jpg",
        "assets/hero-japanese-sweets.jpg",
        "assets/hero-exercise.jpg"
      ]
    },
    meta: [
      { label: "PLANNING", text: "商業施設・環境企画" },
      { label: "DESIGN / BUILD", text: "デザイン設計施工" },
      { label: "FURNITURE", text: "店舗什器・特注家具製作" }
    ],
    workIntro: {
      label: "WORK",
      title: "施工事例",
      lead: "飲食、オフィス、コスメティック、宿泊施設など、空間の目的に合わせて設計から施工まで丁寧に伴走します。"
    },
    works: [
      {
        id: "potama",
        title: "ポーたま ももち浜店",
        category: "飲食",
        summary: "素材感と清潔感を両立した、記憶に残る店舗空間。",
        image: "assets/work-potama.jpg",
        featured: true,
        gallery: [
          "assets/portfolio/potama-1.jpg",
          "assets/portfolio/potama-2.jpg",
          "assets/portfolio/potama-3.jpg",
          "assets/portfolio/potama-4.jpg"
        ]
      },
      {
        id: "tentai",
        title: "テンタイ 福岡オフィス",
        category: "オフィス",
        summary: "働く人と来客を迎える、柔らかなオフィスデザイン。",
        image: "assets/work-office.jpg",
        featured: false,
        gallery: [
          "assets/portfolio/tentai-1.jpg",
          "assets/portfolio/tentai-2.jpg",
          "assets/portfolio/tentai-3.jpg",
          "assets/portfolio/tentai-4.jpg"
        ]
      },
      {
        id: "daiwa",
        title: "ダイワ化粧品店",
        category: "コスメティック",
        summary: "商品と接客が自然に映える、明るい売場づくり。",
        image: "assets/work-cosmetics.jpg",
        featured: false,
        gallery: [
          "assets/portfolio/daiwa-1.jpg",
          "assets/portfolio/daiwa-2.jpg",
          "assets/portfolio/daiwa-3.jpg",
          "assets/portfolio/daiwa-4.jpg"
        ]
      },
      {
        id: "hotel",
        title: "Tabist 山鹿温泉 湯宿 湶",
        category: "宿泊施設",
        summary: "落ち着きと使いやすさを備えた、滞在のための空間。",
        image: "assets/work-hotel.jpg",
        featured: false,
        gallery: [
          "assets/portfolio/hotel-1.jpg",
          "assets/portfolio/hotel-2.jpg",
          "assets/portfolio/hotel-3.jpg",
          "assets/portfolio/hotel-4.jpg",
          "assets/portfolio/hotel-5.jpg"
        ]
      },
      {
        id: "liquor",
        title: "酒まつり 守恒店",
        category: "リカー",
        summary: "日常の買い物を支える、見やすく入りやすい店舗へ。",
        image: "assets/work-liquor.jpg",
        featured: false,
        gallery: [
          "assets/portfolio/liquor-1.jpg",
          "assets/portfolio/liquor-2.jpg",
          "assets/portfolio/liquor-3.jpg",
          "assets/portfolio/liquor-4.jpg",
          "assets/portfolio/liquor-5.jpg"
        ]
      },
      {
        id: "soba",
        title: "信濃庵",
        category: "飲食",
        summary: "手仕事の温度が伝わる、落ち着いた飲食空間。",
        image: "assets/work-soba.jpg",
        featured: false,
        gallery: [
          "assets/portfolio/soba-1.jpg",
          "assets/portfolio/soba-2.jpg",
          "assets/portfolio/soba-3.jpg",
          "assets/portfolio/soba-4.jpg"
        ]
      }
    ],
    about: {
      label: "ABOUT US",
      title: "企画から施工、什器製作まで。空間づくりを一貫して支えます。",
      lead: "店舗や商業施設の印象は、使いやすさ、導線、素材、照明、細部の納まりで決まります。松屋製作所は、現場を知る設計施工会社として、事業のこれからに寄り添います。",
      image: "assets/about-bg.jpg",
      services: [
        "商業施設・環境企画",
        "デザイン設計施工",
        "インテリアの企画施工",
        "店舗什器製作",
        "住宅関連のリフォーム設計施工"
      ]
    },
    newsIntro: {
      label: "NEWS",
      title: "お知らせ",
      lead: "施工事例の追加、採用情報、営業に関するお知らせを掲載しています。"
    },
    news: [
      {
        id: "news-20230817",
        date: "2023.08.17",
        tag: "お知らせ",
        title: "社員募集！",
        href: "news-detail.html?news=news-20230817",
        body: "松屋製作所では、店舗づくりや内装施工に一緒に取り組むスタッフを募集しています。ものづくりが好きな方、現場で技術を身につけたい方はぜひお問い合わせください。"
      },
      {
        id: "news-20221215",
        date: "2022.12.15",
        tag: "お知らせ",
        title: "新しいWORKを追加しました。",
        href: "news-detail.html?news=news-20221215",
        body: "施工事例ページに新しい実績を追加しました。店舗ごとの写真や空間づくりのポイントをご覧いただけます。"
      },
      {
        id: "news-20211108",
        date: "2021.11.08",
        tag: "お知らせ",
        title: "NEW OPEN!",
        href: "news-detail.html?news=news-20211108",
        body: "松屋製作所が施工に携わった店舗が新しくオープンしました。現場の写真や詳しい情報は施工事例ページでも順次ご紹介していきます。"
      }
    ],
    contact: {
      label: "CONTACT",
      title: "店舗設計・内装工事のご相談はこちら",
      address: "本社オフィス 〒811-2233 福岡県糟屋郡志免町別府北1丁目14番14号",
      email: "info@matsuya1953.co.jp"
    },
    footer: {
      company: "株式会社松屋製作所",
      description: "店舗デザイン・企画・施工・特注家具製作",
      office: "本社オフィス\n福岡県糟屋郡志免町\n別府北1丁目14番14号\n(092) 611-1720",
      hours: "月曜日ー土曜日\n9:00am - 5:30pm\n日曜日 Closed"
    }
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function mergeDefaults(base, saved) {
    if (!saved || typeof saved !== "object") return clone(base);
    const merged = Array.isArray(base) ? clone(saved) : { ...base };
    Object.keys(saved).forEach((key) => {
      if (Array.isArray(saved[key])) {
        merged[key] = clone(saved[key]);
      } else if (saved[key] && typeof saved[key] === "object" && base[key]) {
        merged[key] = mergeDefaults(base[key], saved[key]);
      } else {
        merged[key] = saved[key];
      }
    });
    return merged;
  }

  function loadSiteData() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return mergeDefaults(defaultData, saved);
    } catch {
      return clone(defaultData);
    }
  }

  function saveSiteData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function resetSiteData() {
    localStorage.removeItem(STORAGE_KEY);
  }

  window.MatsuyaContent = {
    STORAGE_KEY,
    defaultData,
    loadSiteData,
    saveSiteData,
    resetSiteData
  };
})();
