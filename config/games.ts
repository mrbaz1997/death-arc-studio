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
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1dNGVhVdiElSQOfZurWf0MWk83bXCMJFY",
  },
  {
    title: "Tic Tac Toe 2",
    description: "3D tic tac toe board game with gobblet gabbler's rules.",
    image: "https://drive.google.com/uc?export=download&id=1jMeOWJYxdG4J87CTQt9_5wzI-czkH8lM",
    status: "Released",
    link: "https://play.google.com/store/apps/details?id=com.DeathArc.TicTacToe2",
  },
  {
    title: "Lastbit",
    description: "Ultimate survival challenge strategy game.",
    image: "",
    status: "Released",
    link: "https://drive.google.com/uc?export=download&id=13uws4zEOBi0EMp-09NCFZherTmvhar9n",
  },
  {
    title: "Snake Tower",
    description: "Swipe, grow, and blast enemies in this epic snake-shooter roguelike!",
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1ULLDz_KvFV_tap7uxhdSFiZNlEfE4__1",
  },
  {
    title: "Rushtaurant",
    description: "A Merging Restaurant game.",
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1EmqrAyTV9cmH_GJq4Ob6j9x4lpdocpQD",
  },
  {
    title: "Spinning Tank",
    description: "A fast-paced one-tap arcade game where your player loops endlessly around the track, and a single tap reverses your direction to dodge monsters and survive.",
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1VxHyN0AX5WocVupMeywvo6XU9MColkUF",
  },
  {
    title: "BlackSmith",
    description:
      "A mid-core Tower defense game (includes rougelike, backpack and merging elements), a Blacksmith that should make weapons as much as he can for defense.",
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1UsRfqaHcn7Xk-d0goOPEiFdwdEX-kLMD",
  },
  {
    title: "The Rolling Ball",
    description: "A 3d swiping Ball game, with good level design and physic challenges.",
    image: "",
    status: "Coming Soon",
    link: "https://drive.google.com/uc?export=download&id=1jkOkGQwJnyaeOin82zSXfOc3dmbnRQf7",
  },
]
