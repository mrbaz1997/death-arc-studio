export interface Game {
  title: string
  description: string
  image: string
  status: "Released" | "In Development" | "Coming Soon"
}

export const games: Game[] = [
  {
    title: "Spacy",
    description: "Shoot'em-Up Arcade Game.",
    image: "https://drive.google.com/file/d/1dNGVhVdiElSQOfZurWf0MWk83bXCMJFY/view?usp=drive_link",
    status: "Coming Soon",
  },
  {
    title: "Tic Tac Toe 2",
    description: "3D tic tac toe board game with gobblet gabbler's rules.",
    image: "https://drive.google.com/file/d/1jMeOWJYxdG4J87CTQt9_5wzI-czkH8lM/view?usp=sharing",
    status: "Released",
  },
  {
    title: "Lastbit",
    description: "Ultimate survival challenge strategy game.",
    image: "https://drive.google.com/file/d/13uws4zEOBi0EMp-09NCFZherTmvhar9n/view?usp=sharingg",
    status: "Released",
  },
  {
    title: "Snake Tower",
    description: "Swipe, grow, and blast enemies in this epic snake-shooter roguelike!",
    image: "https://drive.google.com/file/d/1ULLDz_KvFV_tap7uxhdSFiZNlEfE4__1/view?usp=sharing",
    status: "Coming Soon",
  },
  {
    title: "Rushtaurant",
    description: "A Merging Restaurant game.",
    image: "https://drive.google.com/file/d/1EmqrAyTV9cmH_GJq4Ob6j9x4lpdocpQD/view?usp=sharing",
    status: "Coming Soon",
  },
  {
    title: "Spinning Tank",
    description: "A fast-paced one-tap arcade game where your player loops endlessly around the track, and a single tap reverses your direction to dodge monsters and survive.",
    image: "https://drive.google.com/file/d/1VxHyN0AX5WocVupMeywvo6XU9MColkUF/view?usp=drivesdk",
    status: "Coming Soon",
  },
  {
    title: "BlackSmith",
    description: "A mid-core Tower defense game (includes rougelike, backpack and merging elements), a Blacksmith that should make weapons as much as he can for defense.",
    image: "https://drive.google.com/file/d/1UsRfqaHcn7Xk-d0goOPEiFdwdEX-kLMD/view?usp=sharing",
    status: "Coming Soon",
  },
  {
    title: "The Rolling Ball",
    description: "A 3d swiping Ball game, with good level design and physic challenges.",
    image: "https://drive.google.com/file/d/1jkOkGQwJnyaeOin82zSXfOc3dmbnRQf7/view?usp=sharing",
    status: "Coming Soon",
  },
]
