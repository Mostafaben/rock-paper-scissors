import React from "react"
import "./App.scss"
import Hand from "./components/hand.component"
import DATA from "./data"
import { HandType } from "./enums/hand.enum"
import { triangleImg } from "./resources/images.resource"

const App = () => {
	const [playerChoice, setPlayerChoice] = React.useState<number | null>(null)
	const [score, setScore] = React.useState<number>(0)
	const [pcChoice, setPcChoice] = React.useState<{
		type: HandType
		beats: HandType
		color: string
		icon: any
	} | null>(null)

	React.useEffect(() => {
		if (playerChoice == null || DATA[playerChoice].type === pcChoice?.type) return
		if (DATA[playerChoice].beats === pcChoice?.type) {
			setScore(score + 1)
		} else {
			setScore(score - 1)
		}
	}, [pcChoice])

	const selectHand = (index: number) => {
		if (playerChoice != null) return
		setPlayerChoice(index)
		const randomChoice = Math.floor(Math.random() * 3)
		setTimeout(() => {
			setPcChoice(DATA[randomChoice])
		}, 2000)
	}

	const playAgain = () => {
		setPlayerChoice(null)
		setPcChoice(null)
	}

	return (
		<div className="md:container mx-auto py-20 px-2 h-screen w-full flex flex-col">
			<div className="border-2 p-4 rounded-md flex flex-row justify-between text-white header-outline">
				<div>
					<h2 className="text-4xl font-bold">ROCK</h2>
					<h2 className="text-4xl font-bold">PAPER</h2>
					<h2 className="text-4xl font-bold">SCISSORS</h2>
				</div>
				<div className="bg-white p-2 rounded-md flex flex-col justify-center items-center w-40">
					<p className="score-text-color font-bold text-xl">score</p>
					<h2 className="font-bold text-5xl text-dark mt-1">{score}</h2>
				</div>
			</div>

			<div
				className={
					"hands-container flex flex-row justify-center items-center mt-48 relative w-60 mx-auto " +
					(playerChoice != null ? "player-picked" : "")
				}
			>
				{playerChoice == null ? <img src={triangleImg} alt="" /> : null}
				{DATA.map((hand, index) =>
					playerChoice == null || playerChoice === index ? (
						<Hand
							type={hand.type}
							icon={hand.icon}
							key={index}
							color={hand.color}
							className={playerChoice != null ? "chosen-hand" : ""}
							onClick={() => selectHand(index)}
						/>
					) : null
				)}
				{playerChoice !== null ? (
					<Hand
						type={pcChoice?.type}
						icon={pcChoice?.icon}
						key={3}
						isChoosing={pcChoice == null}
						color={pcChoice?.color}
						className={"chosen-hand"}
					/>
				) : null}
			</div>

			{pcChoice != null ? (
				<button
					className="bg-white px-4 py-3 font-bold text-2xl rounded-md text-dark m-auto mx-auto focus:ring-gray-200"
					onClick={playAgain}
				>
					Play Again
				</button>
			) : null}
		</div>
	)
}

export default App
