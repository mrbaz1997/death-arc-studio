export interface Game {
  id: string // unique ID for routing
  title: string
  description: string
  status: "Released" | "In Development" | "Coming Soon"
  link?: string // when empty, don't show 'Download Now' button in game page
  logo?: string
  fullDescription?: string
  gallery?: string[]
  videos?: string[]
}

export const games: Game[] = [
  {
    id: "spacy",
    title: "Spacy",
    description: "Shoot'em-Up Arcade Game.",
    status: "Coming Soon",
    link: "",
    logo: "spacy-logo.png",
    fullDescription:
      "Spacy is an intense shoot'em-up arcade game where players navigate through space, battling enemies and dodging obstacles. With fast-paced gameplay and retro-inspired aesthetics, it delivers the classic arcade experience with modern polish.",
    gallery: ["spacy.png"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Spacy.mp4"],
  },
  {
    id: "tic-tac-toe-2",
    title: "Tic Tac Toe 2",
    description: "3D tic tac toe board game with gobblet gabbler's rules.",
    status: "Released",
    link: "https://play.google.com/store/apps/details?id=com.DeathArc.TicTacToe2",
    logo: "https://play-lh.googleusercontent.com/MSyeIOAqsTMm-DZx4nzj7nJPHjPQcVtdazqLyjxUy1uFq4Ap1KgDVQIBa7JqCilhcw3B=w480-h960-rw",
    fullDescription:
      "Tic Tac Toe 2 elevates the classic board game to 3D with the strategic depth of Gobblet Gobbler rules. Challenge yourself against AI or play multiplayer matches with friends.",
    gallery: [
      "",
    ],
    videos: [],
  },
  {
    id: "lastbit",
    title: "Lastbit",
    description: "Ultimate survival challenge strategy game.",
    status: "Released",
    link: "",
    logo: "lastbit-logo.png",
    fullDescription:
      "Lastbit is a strategic survival game that pushes your decision-making skills to the limit. Manage resources, outmaneuver opponents, and be the last one standing.",
    gallery: ["lastbit.png"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/LastOne.mp4"],
  },
  {
    id: "snake-tower",
    title: "Snake Tower",
    description: "Swipe, grow, and blast enemies in this epic snake-shooter roguelike!",
    status: "Coming Soon",
    link: "https://play.google.com/store/apps/details?id=com.DeathArc.SnakeTower",
    logo: "snaketower-logo.png",
    fullDescription:
      "Snake Tower combines the addictive snake mechanic with roguelike progression and shooter action. Grow your snake, defeat enemies, and unlock powerful upgrades.",
    gallery: ["snaketower.png"],
    videos: [],
  },
  {
    id: "rushtaurant",
    title: "Rushtaurant",
    description: "A Merging Restaurant game.",
    status: "Coming Soon",
    link: "",
    logo: "rushtaurant-logo.png",
    fullDescription:
      "Rushtaurant is a fast-paced restaurant management game where you merge and upgrade kitchen equipment to serve customers faster. Build your culinary empire!",
    gallery: ["rushraurant.png"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Rushtaurant.mp4"],
  },
  {
    id: "spinning-tank",
    title: "Spinning Tank",
    description:
      "A fast-paced one-tap arcade game where your player loops endlessly around the track, and a single tap reverses your direction to dodge monsters and survive.",
    status: "Coming Soon",
    link: "",
    logo: "spinningtank-logo.png",
    fullDescription:
      "Spinning Tank is a thrilling one-tap arcade game. Control your tank as it loops around an endless track, reversing direction to dodge enemies and survive as long as possible.",
    gallery: ["spinningTank.png"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Spinning Tank.mp4"],
  },
  {
    id: "blacksmith",
    title: "BlackSmith",
    description:
      "A mid-core Tower defense game (includes rougelike, backpack and merging elements), a Blacksmith that should make weapons as much as he can for defense.",
    status: "Coming Soon",
    link: "",
    logo: "blacksmith-logo.png",
    fullDescription:
      "BlackSmith is an innovative tower defense game where you play as a blacksmith crafting weapons. Featuring roguelike progression, merge mechanics, and strategic tower placement.",
    gallery: ["blacksmith"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Blacksmith.mp4"],
  },
  {
    id: "the-rolling-ball",
    title: "The Rolling Ball",
    description: "A 3d swiping Ball game, with good level design and physic challenges.",
    status: "Coming Soon",
    link: "",
    logo: "rollingball-logo.png",
    fullDescription:
      "The Rolling Ball is a 3D physics-based game where you control a rolling ball through challenging levels. Master the physics, overcome obstacles, and reach the finish line.",
    gallery: ["therollingball.png"],
    videos: ["https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/BallRecord.mp4"],
  },
]
