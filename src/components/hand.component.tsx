import React from "react"
import { HandType } from "../enums/hand.enum"

const Hand = ({
	isChoosing = false,
	className,
	color,
	icon,
	onClick,
	type,
}: {
	type?: HandType
	icon?: any
	color?: string
	className?: string
	style?: any
	onClick?: any
	isChoosing?: boolean
}) => {
	const [position, setPosition] = React.useState({})

	React.useEffect(() => {
		switch (type) {
			case HandType.scissors: {
				setPosition({
					left: "-100px",
					top: "-100px",
				})
				break
			}
			case HandType.paper: {
				setPosition({
					right: "-100px",
					top: "-100px",
				})
				break
			}
			case HandType.rock: {
				setPosition({
					bottom: "-100px",
				})
				break
			}
		}
	}, [type])

	return (
		<div
			onClick={onClick}
			className={`hand-container h-40 w-40 rounded-full m-4 flex items-center  justify-center cursor-pointer absolute
				${color} ${className}`}
			style={position}
		>
			{!isChoosing ? (
				<div className="image-wrapper rounded-full flex items-center justify-center">
					<img src={icon} alt="" className="rounded-full" />
				</div>
			) : null}
		</div>
	)
}

export default Hand
