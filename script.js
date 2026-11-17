
"use strict";

// =====================================================
// §16. ЛОГАРИФМДІК ФУНКЦИЯНЫҢ ГРАФИГІ ЖӘНЕ ҚАСИЕТТЕРІ
// MATH LAB PRO
// =====================================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Логарифмдік функцияның графигі және қасиеттері",
  goal: "Логарифмдік функцияның анықталу облысын, мәндер жиынын, өсу және кему қасиеттерін, графигінің негізгі нүктелерін, асимптотасын және көрсеткіштік функциямен байланысын меңгеру."
};

// =====================================================
// 1. ТЕОРИЯ — 5 ТҮСІНДІРМЕ
// =====================================================

const theory = [
  {
    title: "Логарифмдік функция дегеніміз не?",

    definition:
      "Логарифмдік функция — айнымалысы логарифмнің аргументінде орналасқан функция. Оның жалпы түрі y = logₐx. Мұндағы a — оң және бірге тең емес тұрақты сан, ал x міндетті түрде нөлден үлкен болады.",

    explain:
      "Логарифмдік функцияны дәрежелеуге кері амал арқылы түсінуге болады. Мысалы, екі санының үшінші дәрежесі сегізге тең. Сондықтан сегіздің екі негізіндегі логарифмі үш болады. Функцияның графигін салу үшін x айнымалысына оң мәндер береміз және әр мән үшін логарифмді есептейміз. Мысалы, x бір, екі және төрт болғанда функцияның мәндері нөл, бір және екі болады. Осы нәтижелерді координаталық жазықтыққа орналастырып, нүктелерді тегіс қисықпен қосамыз.",

    rule:
      "Логарифмдік функцияның аргументі тек оң сан болады. График (1;0) нүктесі арқылы өтеді және y осіне тимейді.",

    formula:
      M`y=\log_a x,\qquad a>0,\quad a\ne1,\quad x>0`,

    steps: [
      M`y=\log_2 x`,
      M`x=1\Rightarrow y=0`,
      M`x=2\Rightarrow y=1`,
      M`x=4\Rightarrow y=2`,
      M`(1;0),\quad(2;1),\quad(4;2)`
    ],

    warning:
      "Нөлдің және теріс сандардың нақты логарифмі анықталмайды.",

    graph: 2
  },

  {
    title: "Анықталу облысы және мәндер жиыны",

    definition:
      "Анықталу облысы — функция есептелетін x мәндерінің жиыны. Мәндер жиыны — функция қабылдайтын барлық y мәндерінің жиыны. Негізгі логарифмдік функция оң аргументтерде анықталады және барлық нақты мәндерді қабылдай алады.",

    explain:
      "Логарифмнің аргументі міндетті түрде оң болуы керек. Мысалы, логарифм ішінде x минус екі тұрса, x саны екіден үлкен болуы тиіс. Бұл анықталу облысын табуға мүмкіндік береді. Ал логарифмдік функцияның нәтижесі кез келген нақты сан бола алады: теріс сан, нөл немесе оң сан. Мәселен, екі негізіндегі бір төрттің логарифмі минус екіге, бірдің логарифмі нөлге, төрттің логарифмі екіге тең.",

    rule:
      "Анықталу облысын табу үшін логарифм аргументін нөлден үлкен деп аламыз. Негізгі функцияның мәндер жиыны — барлық нақты сандар.",

    formula:
      M`D(y)=(0;+\infty),\qquad E(y)=\mathbb{R}`,

    steps: [
      M`y=\log_3(x-2)`,
      M`x-2>0`,
      M`x>2`,
      M`D(y)=(2;+\infty)`
    ],

    warning:
      "Анықталу облысы x айнымалысына, мәндер жиыны y айнымалысына қатысты.",

    graph: 3
  },

  {
    title: "Негізі бірден үлкен функция",

    definition:
      "Егер логарифмдік функцияның негізі бірден үлкен болса, функция барлық анықталу облысында қатаң өседі. Аргумент өскен сайын логарифмнің мәні де артады.",

    explain:
      "Екі негізіндегі логарифмдік функцияны қарастырайық. Екінің логарифмі бірге, төрттің логарифмі екіге, сегіздің логарифмі үшке тең болады. Аргумент артқан сайын функция мәнінің де өсетінін көреміз. Сондықтан график солдан оңға қарай жоғары көтеріледі. Негізі үш немесе бес болса да осы қасиет сақталады. Мұндай функция өспелі деп аталады.",

    rule:
      "Негізі бірден үлкен логарифмдік функцияда үлкен аргументке үлкен логарифм мәні сәйкес келеді.",

    formula:
      M`a>1,\quad x_1<x_2\Rightarrow\log_a x_1<\log_a x_2`,

    steps: [
      M`\log_2 2=1`,
      M`\log_2 4=2`,
      M`\log_2 8=3`,
      M`1<2<3`
    ],

    warning:
      "Өспелі функцияны кемімелі функциямен шатастырмаңдар. Өсу қасиеті негізге тәуелді.",

    graph: 2
  },

  {
    title: "Негізі нөл мен бір арасындағы функция",

    definition:
      "Егер логарифмдік функцияның негізі нөлден үлкен, бірақ бірден кіші болса, функция қатаң кемиді. Аргумент артқан сайын оның логарифмдік мәні азаяды.",

    explain:
      "Негізі нөл бүтін оннан бес, яғни бір екінші болатын логарифмдік функцияны қарастырайық. Бірдің логарифмі нөлге тең, екінің логарифмі минус бірге, төрттің логарифмі минус екіге тең. Аргумент өскенімен нәтиже азаяды. Демек, график солдан оңға қарай төмен түседі. Мұндай негіздегі логарифмдік функцияның графигі де (1;0) нүктесінен өтеді, бірақ өспелі графикке қарама-қарсы бағытталады.",

    rule:
      "Негізі нөл мен бір арасында болса, функция кемімелі болады. Үлкен аргументке кіші логарифм мәні сәйкес келеді.",

    formula:
      M`0<a<1,\quad x_1<x_2\Rightarrow\log_a x_1>\log_a x_2`,

    steps: [
      M`\log_{0.5}1=0`,
      M`\log_{0.5}2=-1`,
      M`\log_{0.5}4=-2`,
      M`0>-1>-2`
    ],

    warning:
      "Негізі 0,5 болғанда логарифмдік функция кемиді. 0,5 санын бөлшек түрінде жазу міндетті емес.",

    graph: 0.5
  },

  {
    title: "Көрсеткіштік функциямен байланысы",

    definition:
      "Логарифмдік және көрсеткіштік функциялар өзара кері функциялар болады. Олардың графиктері y=x түзуіне қатысты симметриялы орналасады.",

    explain:
      "Мысалы, екі санының үшінші дәрежесі сегізге тең. Көрсеткіштік функция графигінде (3;8) нүктесі орналасады. Логарифмдік функцияда сегіздің екі негізіндегі логарифмі үшке тең болғандықтан, (8;3) нүктесі пайда болады. Осылайша екі функцияның сәйкес нүктелерінің координаталары орын ауыстырады. Екі графикті бір координаталық жазықтықта салу арқылы олардың өзара кері байланысын көруге болады.",

    rule:
      "Логарифмдік функцияның тік асимптотасы x=0 болады. Көрсеткіштік және логарифмдік графиктер y=x түзуіне қатысты симметриялы.",

    formula:
      M`y=2^x\quad\Longleftrightarrow\quad y=\log_2 x`,

    steps: [
      M`2^3=8`,
      M`\log_2 8=3`,
      M`(3;8)\longleftrightarrow(8;3)`
    ],

    warning:
      "Кері функциялардың графиктері бірдей емес. Олар y=x түзуіне қатысты симметриялы.",

    graph: "inverse"
  }
];

// =====================================================
// 2. КОНСПЕКТ — 10 БӨЛІМ, 20 ӨЗІНДІК ЕСЕП
// =====================================================

const notes = [
  {
    title: "Логарифмдік функцияның анықтамасы",

    text:
      "Логарифмдік функцияның жалпы түрі y=logₐx. Мұнда a оң және бірге тең емес тұрақты негіз, x нөлден үлкен айнымалы. Функцияның мәні негіздің қандай дәрежесі аргументке тең екенін көрсетеді.",

    formula:
      M`y=\log_a x,\qquad a>0,\quad a\ne1`,

    example: [
      M`y=\log_2 8`,
      M`2^3=8`,
      M`y=3`
    ],

    self: [
      {
        q: M`\log_3 81`,
        steps: [M`3^4=81`],
        answer: M`4`
      },
      {
        q: M`\log_5 125`,
        steps: [M`5^3=125`],
        answer: M`3`
      }
    ]
  },

  {
    title: "Анықталу облысы",

    text:
      "Логарифмнің аргументі нөлден үлкен болуы қажет. Сондықтан аргументінде айнымалысы бар өрнектер үшін сол өрнекті нөлден үлкен деп алып, теңсіздік шешеміз. Шыққан аралық анықталу облысын береді.",

    formula:
      M`\log_a f(x):\qquad f(x)>0`,

    example: [
      M`y=\log_2(x-4)`,
      M`x-4>0`,
      M`x>4`
    ],

    self: [
      {
        q: M`y=\log_3(x+2)`,
        steps: [M`x+2>0`],
        answer: M`x>-2`
      },
      {
        q: M`y=\log_2(2x-6)`,
        steps: [M`2x-6>0`, M`2x>6`],
        answer: M`x>3`
      }
    ]
  },

  {
    title: "Мәндер жиыны",

    text:
      "Негізгі логарифмдік функцияның мәндер жиыны барлық нақты сандардан тұрады. Логарифм нөл, оң және теріс нәтижелер бере алады. Негіздің бірден үлкен немесе кіші болуы мәндер жиынын өзгертпейді.",

    formula:
      M`E(y)=(-\infty;+\infty)`,

    example: [
      M`\log_2\frac14=-2`,
      M`\log_2 1=0`,
      M`\log_2 4=2`
    ],

    self: [
      {
        q: M`\log_2\frac18`,
        steps: [M`2^{-3}=\frac18`],
        answer: M`-3`
      },
      {
        q: M`\log_3 1`,
        steps: [M`3^0=1`],
        answer: M`0`
      }
    ]
  },

  {
    title: "Графиктің негізгі нүктелері",

    text:
      "Логарифмдік функция графигі (1;0) нүктесі арқылы өтеді. Сондай-ақ (a;1) және (1/a;−1) нүктелері де графикке жатады. Нүктелердің координаталарын анықтап, олардың көмегімен қисықты салуға болады.",

    formula:
      M`\log_a1=0,\qquad\log_a a=1`,

    example: [
      M`y=\log_2 x`,
      M`(1;0),\quad(2;1),\quad(4;2)`
    ],

    self: [
      {
        q: M`\log_4 4`,
        steps: [M`4^1=4`],
        answer: M`1`
      },
      {
        q: M`\log_5 1`,
        steps: [M`5^0=1`],
        answer: M`0`
      }
    ]
  },

  {
    title: "Өспелі функция",

    text:
      "Негізі бірден үлкен болса, логарифмдік функция өспелі болады. Аргумент үлкейсе, функцияның мәні де артады. График координаталық жазықтықта солдан оңға қарай жоғары бағытталады.",

    formula:
      M`a>1,\quad x_1<x_2\Rightarrow f(x_1)<f(x_2)`,

    example: [
      M`\log_2 2=1`,
      M`\log_2 8=3`,
      M`1<3`
    ],

    self: [
      {
        q: M`\log_2 16-\log_2 4`,
        steps: [M`=4-2`],
        answer: M`2`
      },
      {
        q: M`\log_3 81-\log_3 9`,
        steps: [M`=4-2`],
        answer: M`2`
      }
    ]
  },

  {
    title: "Кемімелі функция",

    text:
      "Негізі нөл мен бір арасында болса, логарифмдік функция кемімелі болады. Аргумент артқан кезде функция мәні азаяды. Мысалы, негізі 0,5 функциясы бірден үлкен аргументтер үшін теріс мән қабылдайды.",

    formula:
      M`0<a<1,\quad x_1<x_2\Rightarrow f(x_1)>f(x_2)`,

    example: [
      M`\log_{0.5}1=0`,
      M`\log_{0.5}2=-1`,
      M`\log_{0.5}4=-2`
    ],

    self: [
      {
        q: M`\log_{0.5}8`,
        steps: [M`(0.5)^{-3}=8`],
        answer: M`-3`
      },
      {
        q: M`\log_{\frac13}9`,
        steps: [M`3^{-2}=\frac19`, M`(\frac13)^{-2}=9`],
        answer: M`-2`
      }
    ]
  },

  {
    title: "Осьтер және асимптота",

    text:
      "Логарифмдік функция графигі x осін (1;0) нүктесінде қиып өтеді. Ол y осін қимайды, өйткені аргумент нөл бола алмайды. x=0 түзуі графиктің тік асимптотасы деп аталады.",

    formula:
      M`\log_a1=0,\qquad x=0`,

    example: [
      M`y=\log_3x`,
      M`x=1\Rightarrow y=0`,
      M`(1;0)`
    ],

    self: [
      {
        q: M`\log_7 1`,
        steps: [M`7^0=1`],
        answer: M`0`
      },
      {
        q: M`\log_{0.5}1`,
        steps: [M`(0.5)^0=1`],
        answer: M`0`
      }
    ]
  },

  {
    title: "Көрсеткіштік функциямен кері байланыс",

    text:
      "Логарифмдік функция мен көрсеткіштік функция өзара кері болады. Олардың графиктері y=x түзуіне қатысты симметриялы орналасады. Кері функциядағы сәйкес нүктелердің координаталары орын ауыстырады.",

    formula:
      M`a^u=v\iff\log_a v=u`,

    example: [
      M`2^4=16`,
      M`\log_2 16=4`,
      M`(4;16)\longleftrightarrow(16;4)`
    ],

    self: [
      {
        q: M`\log_2 32`,
        steps: [M`2^5=32`],
        answer: M`5`
      },
      {
        q: M`\log_3 243`,
        steps: [M`3^5=243`],
        answer: M`5`
      }
    ]
  },

  {
    title: "Графикті жылжыту",

    text:
      "y=logₐ(x−h)+k функциясы негізгі графиктің жылжуы арқылы алынады. h оң болса, график h бірлікке оңға жылжиды. k оң болса, график k бірлікке жоғары жылжиды. Аргумент өзгергенде анықталу облысы мен тік асимптота да өзгереді.",

    formula:
      M`y=\log_a(x-h)+k`,

    example: [
      M`y=\log_2(x-3)`,
      M`x-3>0`,
      M`x>3`
    ],

    self: [
      {
        q: M`y=\log_2(x-5)`,
        steps: [M`x-5>0`],
        answer: M`x>5`
      },
      {
        q: M`y=\log_3(x+4)`,
        steps: [M`x+4>0`],
        answer: M`x>-4`
      }
    ]
  },

  {
    title: "Функция қасиеттерін қорытындылау",

    text:
      "Логарифмдік функцияның анықталу облысы оң сандар, мәндер жиыны барлық нақты сандар болады. График (1;0) нүктесі арқылы өтеді. Негізі бірден үлкен болса өседі, ал нөл мен бір арасында болса кемиді.",

    formula:
      M`y=\log_a x,\quad D=(0;+\infty),\quad E=\mathbb R`,

    example: [
      M`y=\log_2x`,
      M`x=8\Rightarrow y=3`,
      M`x=\frac18\Rightarrow y=-3`
    ],

    self: [
      {
        q: M`\log_2 64`,
        steps: [M`2^6=64`],
        answer: M`6`
      },
      {
        q: M`\log_{0.5}16`,
        steps: [M`(0.5)^{-4}=16`],
        answer: M`-4`
      }
    ]
  }
];

// =====================================================
// 3. ТӨРТ ДЕҢГЕЙ — 20 ЕСЕП
// =====================================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      {
        q: M`\log_2 2`,
        value: 1,
        steps: [M`2^1=2`, M`1`]
      },
      {
        q: M`\log_2 8`,
        value: 3,
        steps: [M`2^3=8`, M`3`]
      },
      {
        q: M`\log_3 9`,
        value: 2,
        steps: [M`3^2=9`, M`2`]
      },
      {
        q: M`\log_5 1`,
        value: 0,
        steps: [M`5^0=1`, M`0`]
      },
      {
        q: M`\log_4 64`,
        value: 3,
        steps: [M`4^3=64`, M`3`]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      {
        q: M`\log_{0.5}8`,
        value: -3,
        steps: [M`(0.5)^{-3}=8`, M`-3`]
      },
      {
        q: M`\log_2\frac1{16}`,
        value: -4,
        steps: [M`2^{-4}=\frac1{16}`, M`-4`]
      },
      {
        q: M`\log_3 81`,
        value: 4,
        steps: [M`3^4=81`, M`4`]
      },
      {
        q: M`\log_{\frac13}27`,
        value: -3,
        steps: [M`(\frac13)^{-3}=27`, M`-3`]
      },
      {
        q: M`\log_9 3`,
        value: 0.5,
        steps: [
          M`9^{\frac12}=3`,
          M`\frac12`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      {
        q: M`\log_2 16-\log_2 4`,
        value: 2,
        steps: [M`4-2`, M`2`]
      },
      {
        q: M`\log_{0.5}16`,
        value: -4,
        steps: [M`(0.5)^{-4}=16`, M`-4`]
      },
      {
        q: M`\log_3 243-\log_3 9`,
        value: 3,
        steps: [M`5-2`, M`3`]
      },
      {
        q: M`\log_2 32+\log_2\frac18`,
        value: 2,
        steps: [M`5+(-3)`, M`2`]
      },
      {
        q: M`\log_4 32`,
        value: 2.5,
        steps: [
          M`4^x=32`,
          M`2^{2x}=2^5`,
          M`2x=5`,
          M`x=\frac52`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      {
        q: M`\log_2(4^3)-\log_2 8`,
        value: 3,
        steps: [M`3\cdot2-3`, M`3`]
      },
      {
        q: M`\log_{0.5}32+\log_2 8`,
        value: -2,
        steps: [M`-5+3`, M`-2`]
      },
      {
        q: M`\log_3 729-\log_3 27`,
        value: 3,
        steps: [M`6-3`, M`3`]
      },
      {
        q: M`\log_4 2+\log_4 8`,
        value: 2,
        steps: [M`\log_4 16`, M`2`]
      },
      {
        q: M`\log_2\frac1{32}+\log_{0.5}4`,
        value: -7,
        steps: [M`-5-2`, M`-7`]
      }
    ]
  }
];

// =====================================================
// 4. ТОПТЫҚ ОЙЫН — 15 СҰРАҚ
// =====================================================

const quiz = [
  {
    q: "Логарифмдік функцияның жалпы түрі?",
    options: [
      "y = ax + b",
      "y = logₐx",
      "y = x²",
      "y = aˣ"
    ],
    correct: 1
  },
  {
    q: "Логарифмдік функцияның анықталу облысы?",
    options: [
      "Барлық нақты сандар",
      "Теріс сандар",
      "Оң нақты сандар",
      "Тек бүтін сандар"
    ],
    correct: 2
  },
  {
    q: "Логарифмдік функцияның мәндер жиыны?",
    options: [
      "Барлық нақты сандар",
      "Тек оң сандар",
      "Тек теріс сандар",
      "Тек нөл"
    ],
    correct: 0
  },
  {
    q: "y = log₂x функциясы қандай?",
    options: [
      "Кемімелі",
      "Тұрақты",
      "Жұп",
      "Өспелі"
    ],
    correct: 3
  },
  {
    q: "y = log₀․₅x функциясы қандай?",
    options: [
      "Өспелі",
      "Кемімелі",
      "Тұрақты",
      "Сызықтық"
    ],
    correct: 1
  },
  {
    q: "Логарифмдік функция графигі қай нүктеден өтеді?",
    options: [
      "(0;0)",
      "(0;1)",
      "(1;0)",
      "(1;1)"
    ],
    correct: 2
  },
  {
    q: "Негізгі логарифмдік функцияның тік асимптотасы?",
    options: [
      "x = 0",
      "y = 0",
      "x = 1",
      "y = 1"
    ],
    correct: 0
  },
  {
    q: "log₂8 нешеге тең?",
    options: ["2", "4", "8", "3"],
    correct: 3
  },
  {
    q: "y = log₂(x−3) функциясының анықталу облысы?",
    options: [
      "x < 3",
      "x > 3",
      "x = 3",
      "Барлық x"
    ],
    correct: 1
  },
  {
    q: "Кері функциялардың графиктері қай түзуге симметриялы?",
    options: [
      "x = 0",
      "y = 0",
      "y = x",
      "x = 1"
    ],
    correct: 2
  },
  {
    q: "log₃1 нешеге тең?",
    options: ["0", "1", "3", "−1"],
    correct: 0
  },
  {
    q: "log₂16 нешеге тең?",
    options: ["2", "8", "16", "4"],
    correct: 3
  },
  {
    q: "Негізі бірден үлкен логарифмдік функция?",
    options: [
      "Кемімелі",
      "Өспелі",
      "Тұрақты",
      "Анықталмаған"
    ],
    correct: 1
  },
  {
    q: "y = log₂x + 3 графигі қалай өзгереді?",
    options: [
      "3 бірлік оңға",
      "3 бірлік солға",
      "3 бірлік жоғары",
      "3 бірлік төмен"
    ],
    correct: 2
  },
  {
    q: "y = log₂(x−2) графигінің тік асимптотасы?",
    options: [
      "x = 2",
      "x = 0",
      "y = 2",
      "y = 0"
    ],
    correct: 0
  }
];

// =====================================================
// 5. ҮЙ ТАПСЫРМАСЫ
// =====================================================

const homework = [
  {
    title: "1. Функция графиктерін салыстыру",

    text:
      "Дәптерге екі логарифмдік функцияның графигін салыңдар. Әр график үшін кемінде бес нүкте табыңдар. Бірінші графиктің неге өсетінін, ал екіншісінің неге кемитінін түсіндіріңдер.",

    formulas: [
      M`y=\log_2 x`,
      M`y=\log_{0.5}x`
    ]
  },

  {
    title: "2. Анықталу облысын есептеу",

    text:
      "Әр функцияның аргументін нөлден үлкен деп алып, анықталу облысын табыңдар. Жауапты аралық түрінде жазыңдар және сан осінде көрсетіңдер.",

    formulas: [
      M`y=\log_2(x-5)`,
      M`y=\log_3(2x+8)`,
      M`y=\log_{0.5}(7-x)`
    ]
  },

  {
    title: "3. Теориялық тапсырма",

    text:
      "Логарифмдік функцияның графигі және қасиеттері тақырыбында 8–10 сөйлем жазыңдар. Анықталу облысын, мәндер жиынын, графиктің осьтермен байланысын және өсу-кему қасиеттерін түсіндіріңдер. Келесі сабақта ауызша қорғаңдар.",

    formulas: [
      M`D(y)=(0;+\infty)`,
      M`E(y)=\mathbb R`
    ]
  }
];

// =====================================================
// 6. СЛАЙДТАРДЫ ҚҰРУ
// =====================================================

const slides = [
  { type: "intro", title: "Кіріспе" }
];

theory.forEach((item, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((item, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((item, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((item, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ, ${i + 1}-сұрақ`
  });
});

slides.push(
  { type: "homework", title: "Үй жұмысы" },
  { type: "finish", title: "Қорытынды" }
);

// Нәтижесі: 1 + 5 + 10 + 4 + 15 + 2 = 37

// =====================================================
// 7. АЙНЫМАЛЫЛАР
// =====================================================

let page = 0;

let individualScore = 0;
let teamScores = [0, 0, 0];

const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 80 * 60;

let secondsLeft = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

let selectedGraphBase = 2;

// =====================================================
// 8. HTML МӘТІНІН ҚАУІПСІЗ КӨРСЕТУ
// =====================================================

function safe(value) {
  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]
  );
}

// =====================================================
// 9. МАТЕМАТИКАЛЫҚ ФОРМУЛАЛАР
// =====================================================

// Формуланы тікелей innerHTML ішіне салмаймыз.
// Ол алдымен қауіпсіз түрде кодталады.
//
// Бұл тәсіл < және > таңбаларын сақтайды.
//
// \boxed қолданылмайды.
// Қазақша түсіндірме формуладан бөлек беріледі.

function math(tex) {
  const encoded = encodeURIComponent(String(tex));

  return `
    <div
      class="math"
      data-tex="${encoded}">
    </div>
  `;
}

// =====================================================
// 10. MATHJAX ФОРМУЛАЛАРЫН КӨРСЕТУ
// =====================================================

let formulaVersion = 0;
let formulaQueue = Promise.resolve();

function drawFormulas() {
  const version = ++formulaVersion;

  const elements = Array.from(
    $("content").querySelectorAll(".math[data-tex]")
  );

  // MathJax интернеттен жүктелмей қалса,
  // формуланың бастапқы мәтіні жоғалмайды.

  for (const element of elements) {
    const tex = decodeURIComponent(
      element.dataset.tex
    );

    element.textContent = tex;
    element.classList.add("fallback");
  }

  formulaQueue = formulaQueue
    .then(async () => {
      if (!window.MathJax) {
        return;
      }

      await MathJax.startup.promise;

      if (
        typeof MathJax.tex2svgPromise !== "function"
      ) {
        return;
      }

      for (const element of elements) {
        if (version !== formulaVersion) return;
        if (!element.isConnected) continue;

        const encoded = element.dataset.tex;

        if (!encoded) continue;

        const tex = decodeURIComponent(encoded);

        try {
          const result = await MathJax.tex2svgPromise(
            tex,
            { display: true }
          );

          if (version !== formulaVersion) return;
          if (!element.isConnected) continue;

          element.replaceChildren(result);

          element.classList.remove("fallback");
          element.removeAttribute("data-tex");

        } catch (error) {
          element.textContent = tex;
          element.classList.add("fallback");

          console.warn(
            "Формуланы көрсету қатесі:",
            tex,
            error
          );
        }
      }
    })
    .catch(error => {
      console.warn("MathJax қатесі:", error);
    });
}

// =====================================================
// 11. SVG ГРАФИКТЕРІ
// =====================================================

function graphHTML(base, id = "main") {
  const type = String(base);

  const description = type === "inverse"
    ? "Көрсеткіштік және логарифмдік функциялардың графиктері"
    : `Логарифмдік функция: негізі ${type}`;

  return `
    <div
      class="graph-wrap"
      data-graph="${safe(type)}"
      id="graph_${safe(id)}">

      <svg
        class="graph-svg"
        viewBox="0 0 800 430"
        role="img"
        aria-label="${safe(description)}">
      </svg>

      <p class="graph-caption">
        ${safe(description)}
      </p>

    </div>
  `;
}

// =====================================================
// 12. ГРАФИКТЕРДІ НАҚТЫ САЛУ
// =====================================================

function drawGraphs() {
  const NS = "http://www.w3.org/2000/svg";

  document.querySelectorAll(
    "#content [data-graph]"
  ).forEach(wrapper => {
    const svg = wrapper.querySelector("svg");

    if (!svg) return;

    svg.replaceChildren();

    const value = wrapper.dataset.graph;

    const xmin = -3;
    const xmax = 10;

    const ymin = -4;
    const ymax = 8;

    const left = 55;
    const right = 765;

    const top = 18;
    const bottom = 394;

    const X = x =>
      left + (x - xmin) /
      (xmax - xmin) * (right - left);

    const Y = y =>
      bottom - (y - ymin) /
      (ymax - ymin) * (bottom - top);

    function add(tag, attrs = {}, text = "") {
      const el = document.createElementNS(NS, tag);

      Object.entries(attrs).forEach(([key, val]) => {
        el.setAttribute(key, val);
      });

      if (text !== "") {
        el.textContent = text;
      }

      svg.appendChild(el);

      return el;
    }

    // Көрінетін аймақты шектеу
    const defs = document.createElementNS(NS, "defs");
    const clip = document.createElementNS(
      NS,
      "clipPath"
    );

    const clipId = "clip_" + wrapper.id;

    clip.setAttribute("id", clipId);

    const rectangle = document.createElementNS(
      NS,
      "rect"
    );

    rectangle.setAttribute("x", left);
    rectangle.setAttribute("y", top);
    rectangle.setAttribute("width", right - left);
    rectangle.setAttribute("height", bottom - top);

    clip.appendChild(rectangle);
    defs.appendChild(clip);
    svg.appendChild(defs);

    // Тор сызықтары
    for (let x = -3; x <= 10; x++) {
      add("line", {
        x1: X(x),
        y1: top,
        x2: X(x),
        y2: bottom,
        stroke: "#34546c",
        "stroke-width": 0.8
      });

      if (x % 2 === 0 && x !== 0) {
        add("text", {
          x: X(x),
          y: Y(0) + 21,
          fill: "#b9d0e0",
          "font-size": 13,
          "text-anchor": "middle"
        }, String(x));
      }
    }

    for (let y = -4; y <= 8; y++) {
      add("line", {
        x1: left,
        y1: Y(y),
        x2: right,
        y2: Y(y),
        stroke: "#34546c",
        "stroke-width": 0.8
      });

      if (y % 2 === 0 && y !== 0) {
        add("text", {
          x: X(0) - 13,
          y: Y(y) + 5,
          fill: "#b9d0e0",
          "font-size": 13,
          "text-anchor": "end"
        }, String(y));
      }
    }

    // Осьтер
    add("line", {
      x1: X(0),
      y1: top,
      x2: X(0),
      y2: bottom,
      stroke: "#ffffff",
      "stroke-width": 2
    });

    add("line", {
      x1: left,
      y1: Y(0),
      x2: right,
      y2: Y(0),
      stroke: "#ffffff",
      "stroke-width": 2
    });

    add("text", {
      x: right - 12,
      y: Y(0) - 10,
      fill: "white",
      "font-size": 17
    }, "x");

    add("text", {
      x: X(0) + 12,
      y: top + 17,
      fill: "white",
      "font-size": 17
    }, "y");

    // Қисық салу
    function curve(fn, start, end, color) {
      let d = "";

      const parts = 600;

      for (let i = 0; i <= parts; i++) {
        const x = start + (end - start) *
          i / parts;

        const y = fn(x);

        if (!Number.isFinite(y)) continue;

        d += (d ? " L " : "M ") +
          X(x).toFixed(2) + " " +
          Y(y).toFixed(2);
      }

      add("path", {
        d,
        fill: "none",
        stroke: color,
        "stroke-width": 3.5,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "clip-path": `url(#${clipId})`
      });
    }

    // Нүкте салу
    function dot(x, y, label, color) {
      add("circle", {
        cx: X(x),
        cy: Y(y),
        r: 5,
        fill: color,
        stroke: "white",
        "stroke-width": 1
      });

      add("text", {
        x: X(x) + 10,
        y: Y(y) - 10,
        fill: "white",
        "font-size": 15
      }, label);
    }

    if (value === "inverse") {
      // y = 2^x
      curve(
        x => Math.pow(2, x),
        -3,
        3.4,
        "#ffd17d"
      );

      // y = log₂x
      curve(
        x => Math.log2(x),
        0.008,
        10,
        "#7beaf4"
      );

      // y = x
      curve(
        x => x,
        -3,
        8,
        "#c6b0ff"
      );

      dot(1, 0, "(1;0)", "#7beaf4");
      dot(0, 1, "(0;1)", "#ffd17d");

      add("text", {
        x: 580,
        y: 33,
        fill: "#ffd17d",
        "font-size": 18
      }, "y = 2^x");

      add("text", {
        x: 580,
        y: 58,
        fill: "#7beaf4",
        "font-size": 18
      }, "y = log₂x");

      add("text", {
        x: 580,
        y: 83,
        fill: "#c6b0ff",
        "font-size": 18
      }, "y = x");

    } else {
      const base = Number(value);

      if (!(base > 0) || base === 1) return;

      curve(
        x => Math.log(x) / Math.log(base),
        0.008,
        10,
        "#7beaf4"
      );

      dot(1, 0, "(1;0)", "#ffd17d");

      if (base < 9) {
        dot(
          base,
          1,
          `(${base};1)`,
          "#7beaf4"
        );
      }
    }
  });
}

// =====================================================
// 13. БЕТТЕГІ КАРТОЧКАЛАР
// =====================================================

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(items) {
  return items.map((item, index) => `
    <div class="step">
      <strong>${index + 1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

// =====================================================
// 14. КОНСПЕКТТЕГІ ӨЗІНДІК ЕСЕПТЕР
// =====================================================

function selfHTML(tasks, noteIndex) {
  return tasks.map((task, index) => {
    const id = `self_${noteIndex}_${index}`;

    return `
      <section class="self-task">

        <h3>✏️ ${index + 1}-өзіндік есеп</h3>

        ${math(task.q)}

        <p>
          Есепті алдымен дәптерге шығарыңдар.
          Шешімін өздерің тексеріңдер.
        </p>

        <button
          class="action"
          data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div id="${id}" class="solution" hidden>
          ${stepsHTML(task.steps)}

          <h3>Дұрыс жауап</h3>
          ${math(task.answer)}
        </div>

      </section>
    `;
  }).join("");
}

// =====================================================
// 15. КІРІСПЕ
// =====================================================

function introHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §16. ${safe(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("gold", "Негізгі функция",
        math(M`y=\log_a x`)
      )}

      ${card("purple", "Интерактивті график", `
        <p>
          Логарифмдік функцияның негізін
          өзгертіп, графиктерін салыстырыңдар.
        </p>

        <div class="graph-controls">
          <button data-graph-base="2">a = 2</button>
          <button data-graph-base="3">a = 3</button>
          <button data-graph-base="0.5">a = 0,5</button>
        </div>

        ${graphHTML(selectedGraphBase, "main")}
      `)}

      ${card("green", "Сабақтың құрылымы", `
        <p>5 толық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгейдегі 20 есеп</p>
        <p>3 топқа 15 ойын сұрағы</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("blue", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірме — 20 минут</p>
        <p>Конспект — 15 минут</p>
        <p>Деңгейлік есептер — 20 минут</p>
        <p>Топтық ойын — 15 минут</p>
        <p>Үй жұмысы, қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// =====================================================
// 16. ТЕОРИЯ БЕТТЕРІ
// =====================================================

function theoryHTML(index) {
  const item = theory[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${index + 1} / 5
      </div>

      <h2>${safe(item.title)}</h2>

      ${card("blue", "Анықтама", `
        <p>${safe(item.definition)}</p>
      `)}

      ${card("purple", "Толық түсіндірме", `
        <p>${safe(item.explain)}</p>
      `)}

      ${card("green", "Негізгі ереже", `
        <p>${safe(item.rule)}</p>
      `)}

      ${card("gold", "Формула",
        math(item.formula)
      )}

      ${card("purple", "Функция графигі",
        graphHTML(item.graph, `theory_${index}`)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(item.steps)
      )}

      ${card("red", "Маңызды ескерту", `
        <p>${safe(item.warning)}</p>
      `)}

    </div>
  `;
}

// =====================================================
// 17. КОНСПЕКТ БЕТТЕРІ
// =====================================================

function noteHTML(index) {
  const item = notes[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${index + 1} / 10
      </div>

      <h2>${safe(item.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${safe(item.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(item.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(item.example)
      )}

      <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>

      <h2>Екі есеп</h2>

      ${selfHTML(item.self, index)}

    </div>
  `;
}

// =====================================================
// 18. ДЕҢГЕЙЛІК ТАПСЫРМАЛАР
// =====================================================

function levelHTML(index) {
  const level = levels[index];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙ ${index + 1} / 4
      </div>

      <h2>📐 ${safe(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Есепті дәптерге шығарыңдар.
        Соңғы сандық жауапты енгізіңдер.
        Бөлшекті 1/2 деп жазуға болады.
      </p>

      <div class="level-grid">

        ${level.tasks.map((task, i) => {
          const key = `${index}_${i}`;
          const done = completed.has(key);

          return `
            <section class="level-task">

              <h3>${i + 1}-есеп</h3>

              ${math(task.q)}

              <div class="answer-row">

                <input
                  type="text"
                  inputmode="decimal"
                  id="answer_${key}"
                  placeholder="Жауап"
                  ${done ? "disabled" : ""}
                >

                <button
                  data-check="${key}"
                  ${done ? "disabled" : ""}>
                  ${done ? "✓ Дұрыс" : "Тексеру"}
                </button>

              </div>

              <p
                id="feedback_${key}"
                class="feedback ${done ? "correct" : ""}">

                ${done
                  ? `✓ +${level.points} ұпай`
                  : "Жауапты енгізіңдер."}

              </p>

              <button
                class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div
                class="solution"
                id="solution_${key}"
                hidden>

                ${stepsHTML(task.steps)}

                <h3>Дұрыс жауап</h3>

                ${math(String(task.value))}

              </div>

            </section>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

// =====================================================
// 19. 3 ТОПҚА АРНАЛҒАН ОЙЫН
// =====================================================

function gameHTML(index) {
  const item = quiz[index];

  const activeTeam = index % 3;
  const chosen = gameAnswers.get(index);

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН ${index + 1} / 15
      </div>

      <h2>
        🏆 ${activeTeam + 1}-топ жауап береді
      </h2>

      <div class="scores">

        ${teamScores.map((score, i) => `
          <div class="team
            ${i === activeTeam ? "current" : ""}">

            ${i + 1}-топ

            <strong>${score}</strong>

          </div>
        `).join("")}

      </div>

      ${card("gold", `${index + 1}-сұрақ`, `

        <p>${safe(item.q)}</p>

        <div class="answers">

          ${item.options.map((option, i) => {
            let cls = "";

            if (chosen !== undefined) {
              if (i === item.correct) {
                cls = "correct";
              } else if (i === chosen) {
                cls = "wrong";
              }
            }

            return `
              <button
                data-choice="${i}"
                class="${cls}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[i]}. ${safe(option)}

              </button>
            `;
          }).join("")}

        </div>

        <p>
          ${chosen === undefined
            ? "Төрт жауаптың біреуін таңдаңдар."
            : chosen === item.correct
              ? "✓ Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " +
                safe(item.options[item.correct])}
        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
        <p>Әр дұрыс жауапқа 10 ұпай беріледі.</p>
        <p>Жауаптан соң «Келесі» батырмасын басыңдар.</p>
      `)}

    </div>
  `;
}

// =====================================================
// 20. ҮЙ ЖҰМЫСЫ
// =====================================================

function homeworkHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        ҮЙ ТАПСЫРМАСЫ
      </div>

      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item, index) => card(
        ["blue", "gold", "green"][index],
        item.title,

        `<p>${safe(item.text)}</p>` +
        item.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// =====================================================
// 21. ҚОРЫТЫНДЫ
// =====================================================

function finishHTML() {
  const maxScore = Math.max(...teamScores);

  const winners = teamScores
    .map((score, index) =>
      score === maxScore ? `${index + 1}-топ` : null
    )
    .filter(Boolean);

  const finished = gameAnswers.size === quiz.length;

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">

        ${teamScores.map((score, index) => `
          <div class="team">
            ${index + 1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}

      </div>

      ${card("green", "Топтық ойын нәтижесі", `
        <p>
          Жауап берілген сұрақтар:
          ${gameAnswers.size} / 15
        </p>

        <p>
          ${finished
            ? winners.join(", ") +
              (winners.length === 1
                ? " — жеңімпаз!"
                : " — тең ұпай жинады!")
            : "Ойын әлі толық аяқталмаған."}
        </p>
      `)}

      ${card("blue", "Деңгейлік тапсырмалар", `
        <p>
          Дұрыс орындалған есептер:
          ${completed.size} / 20
        </p>

        <p>Жеке ұпай: ${individualScore}</p>
      `)}

      ${card("gold", "Бүгін не үйрендік?", `
        <p>Логарифмдік функцияны түсіндік.</p>
        <p>Графиктерін салуды үйрендік.</p>
        <p>Өсу және кему қасиеттерін ажыраттық.</p>
        <p>Анықталу облысы мен мәндер жиынын таптық.</p>
        <p>Кері функцияларды салыстырдық.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// =====================================================
// 22. ҰПАЙДЫ ЖАҢАРТУ
// =====================================================

function updateScore() {
  const teamTotal = teamScores.reduce(
    (sum, value) => sum + value,
    0
  );

  $("totalScore").textContent =
    individualScore + teamTotal;
}

// =====================================================
// 23. БЕТТІ КӨРСЕТУ
// =====================================================

function render() {
  const slide = slides[page];

  formulaVersion++;

  const views = {
    intro: () => introHTML(),
    theory: () => theoryHTML(slide.index),
    note: () => noteHTML(slide.index),
    level: () => levelHTML(slide.index),
    game: () => gameHTML(slide.index),
    homework: () => homeworkHTML(),
    finish: () => finishHTML()
  };

  const content = $("content");

  content.innerHTML = views[slide.type]();
  content.scrollTop = 0;

  $("pageCounter").textContent =
    `${page + 1} / ${slides.length}`;

  $("pageTitle").textContent = slide.title;

  $("pageProgress").style.width =
    `${(page + 1) / slides.length * 100}%`;

  $("prevPage").disabled = page === 0;

  $("nextPage").disabled =
    page === slides.length - 1;

  document.querySelectorAll(
    "[data-section]"
  ).forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.section === slide.type
    );
  });

  document.querySelectorAll(
    "[data-graph-base]"
  ).forEach(button => {
    button.classList.toggle(
      "selected",
      Number(button.dataset.graphBase) ===
        selectedGraphBase
    );
  });

  updateScore();

  drawGraphs();
  drawFormulas();
}

// =====================================================
// 24. КЕЛЕСІ ЖӘНЕ АРТҚА
// =====================================================

$("nextPage").addEventListener("click", () => {
  if (page < slides.length - 1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click", () => {
  if (page > 0) {
    page--;
    render();
  }
});

// =====================================================
// 25. БӨЛІМДЕРГЕ ӨТУ
// =====================================================

document.querySelectorAll(
  "[data-section]"
).forEach(button => {
  button.addEventListener("click", () => {
    const index = slides.findIndex(
      slide => slide.type === button.dataset.section
    );

    if (index >= 0) {
      page = index;
      render();
    }
  });
});

// =====================================================
// 26. СЛАЙДТАҒЫ БАТЫРМАЛАР
// =====================================================

$("content").addEventListener("click", event => {
  const graphButton = event.target.closest(
    "[data-graph-base]"
  );

  if (graphButton) {
    selectedGraphBase = Number(
      graphButton.dataset.graphBase
    );

    // График қана жаңартылады.
    // Беттің жоғарысына секірмейді.
    const wrapper = $("graph_main");

    if (wrapper) {
      wrapper.dataset.graph =
        String(selectedGraphBase);

      const caption = wrapper.querySelector(
        ".graph-caption"
      );

      if (caption) {
        caption.textContent =
          `Логарифмдік функция: негізі ${selectedGraphBase}`;
      }

      drawGraphs();
    }

    document.querySelectorAll(
      "[data-graph-base]"
    ).forEach(button => {
      button.classList.toggle(
        "selected",
        Number(button.dataset.graphBase) ===
          selectedGraphBase
      );
    });

    return;
  }

  const toggle = event.target.closest(
    "[data-toggle]"
  );

  if (toggle) {
    const target = $(toggle.dataset.toggle);

    if (target) {
      target.hidden = !target.hidden;
    }

    return;
  }

  const check = event.target.closest(
    "[data-check]"
  );

  if (check) {
    checkLevel(check.dataset.check);
    return;
  }

  const choice = event.target.closest(
    "[data-choice]"
  );

  if (choice) {
    chooseAnswer(Number(choice.dataset.choice));
  }
});

// =====================================================
// 27. ДЕҢГЕЙЛІК ЖАУАПТАРДЫ ТЕКСЕРУ
// =====================================================

function checkLevel(key) {
  if (completed.has(key)) return;

  const [levelIndex, taskIndex] =
    key.split("_").map(Number);

  const level = levels[levelIndex];
  const task = level.tasks[taskIndex];

  const input = $("answer_" + key);
  const feedback = $("feedback_" + key);

  const raw = input.value.trim();

  if (!raw) {
    feedback.textContent =
      "Алдымен жауапты енгізіңдер.";
    return;
  }

  let answer;

  try {
    answer = calculate(raw);
  } catch (error) {
    feedback.textContent =
      "Сан немесе бөлшек түрінде дұрыс жазыңдар.";
    return;
  }

  const tolerance =
    1e-7 * Math.max(1, Math.abs(task.value));

  if (Math.abs(answer - task.value) <= tolerance) {
    completed.add(key);

    individualScore += level.points;

    input.disabled = true;

    const button = document.querySelector(
      `[data-check="${key}"]`
    );

    if (button) {
      button.disabled = true;
      button.textContent = "✓ Дұрыс";
    }

    feedback.textContent =
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("correct");

    updateScore();

  } else {
    feedback.textContent =
      "Қате. Есепті қайта тексеріңдер.";
  }
}

// =====================================================
// 28. КОМАНДАЛЫҚ ОЙЫН
// =====================================================

function chooseAnswer(choice) {
  const slide = slides[page];

  if (slide.type !== "game") return;

  const index = slide.index;

  if (gameAnswers.has(index)) return;

  gameAnswers.set(index, choice);

  if (choice === quiz[index].correct) {
    teamScores[index % 3] += 10;
  }

  render();
}

$("resetGame").addEventListener("click", () => {
  gameAnswers.clear();
  teamScores = [0, 0, 0];

  render();
});

// =====================================================
// 29. ТОЛЫҚ ЭКРАН
// =====================================================

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn("Толық экран қатесі:", error);
    }
  }
);

// =====================================================
// 30. 80 МИНУТТЫҚ ТАЙМЕР
// =====================================================

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(secondsLeft);

  $("elapsed").textContent =
    formatTime(TOTAL_SECONDS - secondsLeft);

  $("timeProgress").style.width =
    `${(TOTAL_SECONDS - secondsLeft) /
       TOTAL_SECONDS * 100}%`;
}

function pauseTimer() {
  if (timerID !== null) {
    clearInterval(timerID);
    timerID = null;
  }
}

function startTimer() {
  if (timerID !== null || secondsLeft <= 0) {
    return;
  }

  deadline = Date.now() + secondsLeft * 1000;

  timerID = setInterval(() => {
    secondsLeft = Math.max(
      0,
      Math.ceil(
        (deadline - Date.now()) / 1000
      )
    );

    updateTimer();

    if (secondsLeft === 0) {
      pauseTimer();
    }
  }, 250);
}

function resetTimer() {
  pauseTimer();
  secondsLeft = TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click", startTimer);
$("timerPause").addEventListener("click", pauseTimer);
$("timerReset").addEventListener("click", resetTimer);

// =====================================================
// 31. АЛМАТЫНЫҢ НАҚТЫ УАҚЫТЫ
// =====================================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();

setInterval(updateClock, 1000);

// =====================================================
// 32. КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// =====================================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tg", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// =====================================================
// 33. КАЛЬКУЛЯТОРДЫ ҚҰРУ
// =====================================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  grid.replaceChildren();

  calcKeys[type].forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") {
      button.classList.add("clear");
    }

    if (key === "=") {
      button.classList.add("equal");
    }

    if ([
      "sin", "cos", "tg",
      "ctg", "log", "ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if ([
      "+", "−", "×", "÷",
      "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalculator(type, key);
    });

    grid.appendChild(button);
  });
}

// =====================================================
// 34. КАЛЬКУЛЯТОРДЫ БАСҚАРУ
// =====================================================

function pressCalculator(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";

  } else if (key === "⌫") {
    value = value === "Қате"
      ? ""
      : value.slice(0, -1);

  } else if (key === "=") {
    try {
      const result = calculate(value);

      value = String(
        Number(result.toPrecision(12))
      );
    } catch (error) {
      value = "Қате";
    }

  } else {
    if (value === "Қате") {
      value = "";
    }

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// =====================================================
// 35. МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ
// eval() ҚОЛДАНЫЛМАЙДЫ
// =====================================================

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/−/g, "-")
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

  let pos = 0;

  const rad = x => x * Math.PI / 180;

  const functions = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw Error("Тангенс анықталмаған");
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw Error("Котангенс анықталмаған");
      }

      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
    log: Math.log10,
    ln: Math.log
  };

  function take(char) {
    if (source[pos] === char) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if (take("(")) {
      const value = expression();

      if (!take(")")) {
        throw Error("Жақша жабылмаған");
      }

      return value;
    }

    const rest = source.slice(pos);

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (number) {
      pos += number[0].length;

      return Number(number[0]);
    }

    for (const name of Object.keys(functions)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        const result = functions[name](argument);

        if (!Number.isFinite(result)) {
          throw Error("Функция анықталмаған");
        }

        return result;
      }
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате математикалық өрнек");
  }

  function postfix() {
    let value = atom();

    while (take("%")) {
      value /= 100;
    }

    return value;
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();

      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлуге болмайды");
        }

        value /= divisor;

      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();

      } else if (take("-")) {
        value -= term();

      } else {
        break;
      }
    }

    return value;
  }

  if (!source) {
    throw Error("Бос өрнек");
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12 ? 0 : result;
}

// =====================================================
// 36. КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// =====================================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const opening =
    !element.classList.contains("visible");

  element.classList.toggle("visible", opening);

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener("click", () => {
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click", () => {
  toggleCalculator("science");
});

document.querySelectorAll(
  "[data-close]"
).forEach(button => {
  button.addEventListener("click", () => {
    $("calc-" + button.dataset.close)
      .classList.remove("visible");
  });
});

// =====================================================
// 37. КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// =====================================================

function makeDraggable(element) {
  const handle = element.querySelector(".calc-head");

  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag || event.pointerId !== drag.id) {
      return;
    }

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(
        0,
        Math.min(maxX, drag.left + dx)
      ) + "px";

    element.style.top =
      Math.max(
        0,
        Math.min(maxY, drag.top + dy)
      ) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// =====================================================
// 38. ҚҰРЫЛЫМДЫ ТЕКСЕРУ
// =====================================================

function runChecks() {
  console.assert(
    theory.length === 5,
    "5 түсіндірме болуы керек"
  );

  console.assert(
    notes.length === 10,
    "10 конспект болуы керек"
  );

  console.assert(
    notes.every(n => n.self.length === 2),
    "Әр конспектте 2 есеп болуы керек"
  );

  console.assert(
    levels.length === 4 &&
    levels.every(l => l.tasks.length === 5),
    "4 деңгейде 20 есеп болуы керек"
  );

  console.assert(
    quiz.length === 15,
    "15 ойын сұрағы болуы керек"
  );

  console.assert(
    slides.length === 37,
    "37 слайд болуы керек"
  );

  const formulas = [
    ...theory.flatMap(t => [
      t.formula,
      ...t.steps
    ]),

    ...notes.flatMap(n => [
      n.formula,
      ...n.example,
      ...n.self.flatMap(s => [
        s.q,
        ...s.steps,
        s.answer
      ])
    ]),

    ...levels.flatMap(l =>
      l.tasks.flatMap(t => [
        t.q,
        ...t.steps
      ])
    ),

    ...homework.flatMap(h => h.formulas)
  ];

  console.assert(
    formulas.every(tex => !tex.includes("\\boxed")),
    "Формулада бос төртбұрыш командасы табылды"
  );

  console.assert(
    calculate("2^5") === 32,
    "Дәрежені есептеу қатесі"
  );

  console.assert(
    calculate("log(100)") === 2,
    "Логарифм қатесі"
  );

  console.assert(
    calculate("ln(e)") === 1,
    "Натурал логарифм қатесі"
  );

  console.assert(
    calculate("1/2") === 0.5,
    "Бөлшек қатесі"
  );

  console.assert(
    Math.abs(
      Math.log(8) / Math.log(0.5) + 3
    ) < 1e-10,
    "Негізі 0.5 логарифм қатесі"
  );

  console.log("§16: бастапқы тексерулер аяқталды.");
}

// =====================================================
// 39. САЙТТЫ ІСКЕ ҚОСУ
// =====================================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
