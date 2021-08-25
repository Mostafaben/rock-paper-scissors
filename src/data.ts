import { HandType } from "./enums/hand.enum"
import { paperImg, rockImg, scissorsImg } from "./resources/images.resource"

const DATA: { type: HandType; beats: HandType; color: string; icon: any }[] = [
	{
		icon: scissorsImg,
		type: HandType.scissors,
		beats: HandType.paper,
		color: "bg-scissors",
	},
	{
		icon: rockImg,
		type: HandType.rock,
		beats: HandType.scissors,
		color: "bg-rock",
	},
	{
		icon: paperImg,
		type: HandType.paper,
		beats: HandType.rock,
		color: "bg-paper",
	},
]

export default DATA
