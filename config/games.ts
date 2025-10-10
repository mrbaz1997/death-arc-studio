export interface Game {
  title: string
  description: string
  image: string
  status: "Released" | "In Development" | "Coming Soon"
  link?: string
}

export const games: Game[] = [
  {
    title: "Spacy",
    description: "Shoot'em-Up Arcade Game.",
    image: "spacy.png",
    status: "Coming Soon",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Spacy.mp4",
  },
  {
    title: "Tic Tac Toe 2",
    description: "3D tic tac toe board game with gobblet gabbler's rules.",
    image: "https://play-lh.googleusercontent.com/MSyeIOAqsTMm-DZx4nzj7nJPHjPQcVtdazqLyjxUy1uFq4Ap1KgDVQIBa7JqCilhcw3B=w480-h960-rw",
    status: "Released",
    link: "https://play.google.com/store/apps/details?id=com.DeathArc.TicTacToe2",
  },
  {
    title: "Lastbit",
    description: "Ultimate survival challenge strategy game.",
    image: "lastbit.png",
    status: "Released",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/LastOne.mp4",
  },
  {
    title: "Snake Tower",
    description: "Swipe, grow, and blast enemies in this epic snake-shooter roguelike!",
    image: "snaketower.png",
    status: "Coming Soon",
    link: "http://drive.google.com/uc?export=download&id=1ULLDz_KvFV_tap7uxhdSFiZNlEfE4__1",
  },
  {
    title: "Rushtaurant",
    description: "A Merging Restaurant game.",
    image: "rushraurant.png",
    status: "Coming Soon",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Rushtaurant.mp4",
  },
  {
    title: "Spinning Tank",
    description: "A fast-paced one-tap arcade game where your player loops endlessly around the track, and a single tap reverses your direction to dodge monsters and survive.",
    image: "spinningTank.png",
    status: "Coming Soon",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Spinning Tank.mp4",
  },
  {
    title: "BlackSmith",
    description:
      "A mid-core Tower defense game (includes rougelike, backpack and merging elements), a Blacksmith that should make weapons as much as he can for defense.",
    image: "blacksmith",
    status: "Coming Soon",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/Blacksmith.mp4",
  },
  {
    title: "The Rolling Ball",
    description: "A 3d swiping Ball game, with good level design and physic challenges.",
    image: "therollingball.png",
    status: "Coming Soon",
    link: "https://pub-0f41f92617a344ca9cd73e0c61a67b6c.r2.dev/Videos/BallRecord.mp4",
  },
]
