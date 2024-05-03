interface BannerMovie {
  backgtoundImageUrl: string;
  title: string;
  description: string;
  rating: number;
  audience: string;
  duration: string;
  genres: string;
  tags: string;
}

export const BannerData: BannerMovie[] = [
  {
    backgtoundImageUrl: "slider/slider1.jpg",
    title: "avengers",
    description: `When Tony Stark and Bruce Banner try to jump-start a dormant
        peacekeeping program called Ultron, things go horribly wrong
        and it's up to Earth's nightest heroes to stop the
        villainous Ultron from enacting his terrible plan.`,
    audience: "+16",
    duration: "2h15m",
    genres: "Action , Fiction",
    rating: 7.3,
    tags: "Action",
  },
  {
    backgtoundImageUrl: "slider/slider2.jpg",
    title: "frozen",
    description: `When the newly crowned Queen Elsa accidentally uses her
        power to turn things into ice to curse her home in infinte
        winter, her sister Anna teams up with a mountain man, his
        playful reindeer, and a snowman to change the weather
        condition`,
    audience: "+13",
    duration: "1h42m",
    genres: "Animation",
    rating: 7.4,
    tags: "Animation , Comedy",
  },
  {
    backgtoundImageUrl: "slider/slider3.jpg",
    title: "the conjuring",
    description: `Paranomal investigators Ed and Lorraine Warren work to help
        a family terrorized by a dark presence in their farmhouse.`,
    audience: "+16",
    duration: "1h52m",
    genres: "Horror , Thriller",
    rating: 7,
    tags: "Horror , Mystery",
  },
];

interface RowMovies {
  backgtoundImageUrl: string;
  title: string;
  audience: string;
  duration: string;
}

export const YourPicksData: RowMovies[] = [
  {
    backgtoundImageUrl: "favorite/f1.jpg",
    title: "insidious",
    audience: "+16",
    duration: "1h43min",
  },
  {
    backgtoundImageUrl: "favorite/f2.jpg",
    title: "war",
    audience: "+12",
    duration: "2h34min",
  },
  {
    backgtoundImageUrl: "favorite/f3.jpg",
    title: "five feet apart",
    audience: "+18",
    duration: "2h57min",
  },
  {
    backgtoundImageUrl: "favorite/f4.jpg",
    title: "chhichore",
    audience: "+10",
    duration: "2h23min",
  },
  {
    backgtoundImageUrl: "favorite/f5.jpg",
    title: "doctor strange",
    audience: "+12",
    duration: "1h55min",
  },
];

export const PopularData: RowMovies[] = [
  {
    backgtoundImageUrl: "popular/u1.jpg",
    title: "mulan",
    audience: "+10",
    duration: "2h",
  },
  {
    backgtoundImageUrl: "popular/u2.jpg",
    title: "laxmii",
    audience: "+18",
    duration: "2h21min",
  },
  {
    backgtoundImageUrl: "popular/u3.jpg",
    title: "captain america",
    audience: "+12",
    duration: "2h4min",
  },
  {
    backgtoundImageUrl: "popular/u4.jpg",
    title: "life of pie",
    audience: "+11",
    duration: "2h7min",
  },
  {
    backgtoundImageUrl: "popular/u5.jpg",
    title: "missio mangal",
    audience: "+12",
    duration: "1h10min",
  },
];

export const SportsData: RowMovies[] = [
  {
    backgtoundImageUrl: "suggested/01.jpg",
    title: "basket ball",
    audience: "nba",
    duration: "sports",
  },
  {
    backgtoundImageUrl: "suggested/02.jpg",
    title: "volley ball",
    audience: "pro",
    duration: "sports",
  },
  {
    backgtoundImageUrl: "suggested/03.jpg",
    title: "baseket ball",
    audience: "lsu",
    duration: "sports",
  },
  {
    backgtoundImageUrl: "suggested/04.jpg",
    title: "cricket",
    audience: "ts-20",
    duration: "sports",
  },
  {
    backgtoundImageUrl: "suggested/05.jpg",
    title: "golf",
    audience: "pga",
    duration: "sports",
  },
];

export const RecommendData: RowMovies[] = [
  {
    backgtoundImageUrl: "tvthrillers/01.jpg",
    title: "the martin",
    audience: "+15",
    duration: "2h45min",
  },
  {
    backgtoundImageUrl: "tvthrillers/02.jpg",
    title: "unhinged",
    audience: "+7",
    duration: "2h12min",
  },
  {
    backgtoundImageUrl: "tvthrillers/03.jpg",
    title: "kingsman",
    audience: "+18",
    duration: "3h",
  },
  {
    backgtoundImageUrl: "tvthrillers/04.jpg",
    title: "casino royale",
    audience: "+18",
    duration: "1h55min",
  },
  {
    backgtoundImageUrl: "tvthrillers/05.jpg",
    title: "mission impossible",
    audience: "+17",
    duration: "1h35min",
  },
];

interface TopMovie {
  backgtoundImageUrl: string;
  title: string;
  audience: string;
  seasons: string;
}

export const TopMovieData: TopMovie[] = [
  {
    backgtoundImageUrl: "top-10/01.jpg",
    title: "harry potter",
    audience: "+10",
    seasons: "8 seasons",
  },
  {
    backgtoundImageUrl: "top-10/02.jpg",
    title: `the queen's gambit`,
    audience: "+18",
    seasons: "1 season",
  },
  {
    backgtoundImageUrl: "top-10/03.jpg",
    title: "scam 1992",
    audience: "+12",
    seasons: "1 season",
  },
  {
    backgtoundImageUrl: "top-10/04.jpg",
    title: "stranger things",
    audience: "+16",
    seasons: "3 seasons",
  },
  {
    backgtoundImageUrl: "top-10/05.jpg",
    title: `bojack horseman`,
    audience: "+15",
    seasons: "6 seasons",
  },
  {
    backgtoundImageUrl: "top-10/06.jpg",
    title: "peaky blinders",
    audience: "+20",
    seasons: "5 seasons",
  },
];

interface MovieEpisode {
  id: string;
  backgtoundImageUrl: string;
  duration: string;
}

interface TrendingMovie {
  id: string;
  backgtoundImageUrl: string;
  title: string;
  description: string;
  audience: string;
  ranking: number;
  postDate: Date;
  seasons: number;
  episodes: MovieEpisode[];
}

export const TrendingData: TrendingMovie[] = [
  {
    id: "1",
    backgtoundImageUrl: "trending/01.jpg",
    title: "the crown",
    description: "the movie the uk kingdom and crown",
    audience: "+15",
    ranking: 3,
    postDate: new Date(),
    seasons: 5,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/ce1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/ce2.jpg",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/ce3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/ce4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/ce5.jpg",
        duration: "30m",
      },
    ],
  },
  {
    id: "2",
    backgtoundImageUrl: "trending/02.jpg",
    title: "big bang theory",
    description:
      "A woman who moves into an appartment across the hall from two brilliant but social awkward physicists shows then how little they know about life outside of the laboratory.",
    audience: "+15",
    ranking: 10,
    postDate: new Date(),
    seasons: 2,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/bbt1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/bbt2.jpg",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/bbt3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/bbt4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/bbt5.jpg",
        duration: "30m",
      },
    ],
  },
  {
    id: "3",
    backgtoundImageUrl: "trending/03.jpg",
    title: "peacky blinders",
    description:
      "A gangster family epic set in 1990s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    audience: "+11",
    ranking: 1,
    postDate: new Date(),
    seasons: 3,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/pb1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/pb2.jpg",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/pb3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/pb4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/pb5.jpg",
        duration: "30m",
      },
    ],
  },
  {
    id: "4",
    backgtoundImageUrl: "trending/04.jpg",
    title: "narcos",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    audience: "+18",
    ranking: 5,
    postDate: new Date(),
    seasons: 3,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/n1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/n2.png",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/n3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/n4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/n5.jpg",
        duration: "30m",
      },
    ],
  },
  {
    id: "5",
    backgtoundImageUrl: "trending/05.jpg",
    title: "friends",
    description:
      "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    audience: "+7",
    ranking: 6,
    postDate: new Date(),
    seasons: 10,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/fe1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/fe2.jpg",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/fe3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/fe4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/fe5.jpg",
        duration: "30m",
      },
    ],
  },
  {
    id: "6",
    backgtoundImageUrl: "trending/06.jpg",
    title: "mirzapur",
    description:
      "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
    audience: "+18",
    ranking: 2,
    postDate: new Date(),
    seasons: 2,
    episodes: [
      {
        id: "10",
        backgtoundImageUrl: "episodes/m1.jpg",
        duration: "30m",
      },
      {
        id: "11",
        backgtoundImageUrl: "episodes/m2.jpg",
        duration: "30m",
      },
      {
        id: "12",
        backgtoundImageUrl: "episodes/m3.jpg",
        duration: "30m",
      },
      {
        id: "13",
        backgtoundImageUrl: "episodes/m4.jpg",
        duration: "30m",
      },
      {
        id: "14",
        backgtoundImageUrl: "episodes/m5.jpg",
        duration: "30m",
      },
    ],
  },
];

interface Question {
  title: string;
  body: string;
}

export const QuestionsData: Question[] = [
  {
    title: "What is Netflex?",
    body: `Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as
          you want, whenever you want without a single commercial – all for
          one low monthly price. There's always something new to discover
          and new TV shows and movies are added every week!`,
  },
  {
    title: "How much does Netflex cost?",
    body: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming 
      device, all for one fixed monthly fee. Plans range from DOLLAR 35 to DOLLAR 95 a month. 
      No extra costs, no contracts.`,
  },
  {
    title: "Where can I Watch?",
    body: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on 
      the web at netflix.com from your personal computer or on any internet-connected device that 
      offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch 
      while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    title: "How do i cancel?",
    body: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account 
      online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    title: "What can I watch on Netflix",
    body: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix
        originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    title: "is Netflix good for kids?",
    body: `
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t 
        want kids to see. `,
  },
];

export const RegisterData = {
  content: {
    title: "Unlimited Movies, TV Shows, And More",
    subTitle: "Watch Anywhere. Cancel Anytime.",
    description:
      "Ready To Watch? Enter Your Email To Create Or Restart Your Membership.",
  },
  tv: {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    videoPath: "auth/video-tv.m4v",
    imagePath: "auth/tv.png",
  },
  mobile: {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    imagePath: "auth/mobile.jpg",
    card: {
      imagePath: "auth/stranger-things.png",
      title: "stranger things",
      animeIconPath: "auth/download-icon.gif",
    },
  },
  device: {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    videoPath: "auth/video-devices.m4v",
    imagePath: "auth/device-pile.png",
  },
  kids: {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    imagePath: "auth/kids.png",
  },
};

interface Plan {
  title: string;
  subTitle: string;
  price: number;
  qaulity: string;
  resoluation: string;
  isPopular: boolean;
}

export const PlansData: Plan[] = [
  {
    title: "premium",
    subTitle: "4K + HDR",
    price: 30,
    qaulity: "best",
    resoluation: "4K (Ultra HD) + HDR",
    isPopular: true,
  },
  {
    title: "standard",
    subTitle: "1080p",
    price: 21,
    qaulity: "great",
    resoluation: "1080p (Full HD)",
    isPopular: false,
  },
  {
    title: "basic",
    subTitle: "720p",
    price: 15,
    qaulity: "good",
    resoluation: "720p (HD)",
    isPopular: false,
  },
];
