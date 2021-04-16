import React, { useEffect, useState } from 'react';

import { Button } from '../../../shared/components';
import { IShip, spaceXService } from '../../../shared/services/spaceX';

const PlayView: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [index, setIndex] = useState(1);
	const [ships, setShips] = useState<IShip[]>([]);
	const [shipX, setShipX] = useState<IShip>();
	const [shipY, setShipY] = useState<IShip>();

	useEffect(() => {
		setLoading(true);

		spaceXService
			.getAllShips()
			.then((response) => {
				if (response) {
					const allShips = response.map(({ name, launches, image }) => ({
						name,
						image,
						launches: launches.length,
					}));

					setShips(randomizeShips(allShips));
					setShipX(allShips[0]);
					setShipY(allShips[1]);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		setShipX(ships[0]);
		setShipY(ships[1]);
	}, [ships]);

	const randomizeShips = (ships: IShip[]): IShip[] => {
		return ships.sort(() => 0.5 - Math.random());
	};

	const rightAnswer = (): void => {
		setScore(score + 1);
		setShipX(shipY);

		if (index + 1 === ships.length) {
			setIndex(0);
			setShipY(ships[0]);
			setShips(randomizeShips(ships));
			return;
		}

		setShipY(ships[index + 1]);
		setIndex(index + 1);
	};

	const reset = (): void => {
		if (score > highScore) {
			setHighScore(score);
		}

		const sortedShips = randomizeShips(ships);
		setShipX(sortedShips[0]);
		setShipY(sortedShips[1]);
		setShips(sortedShips);
		setScore(0);
		setIndex(1);
	};

	const checkHigher = (): void => {
		if (
			shipX &&
			shipY &&
			(shipX?.launches > shipY?.launches || shipX?.launches === shipY?.launches)
		) {
			rightAnswer();
			return;
		}

		reset();
	};

	const checkLower = (): void => {
		if (
			shipX &&
			shipY &&
			(shipY?.launches > shipX?.launches || shipX?.launches === shipY?.launches)
		) {
			rightAnswer();
			return;
		}

		reset();
	};

	return (
		<div className="v-starlink-overview">
			<h1>The Higher Lower ship launches game</h1>
			{loading ? (
				<p>Loading ships...</p>
			) : !loading && ships.length ? (
				<div>
					<div>{highScore}</div>
					<div>{score}</div>
					<div>
						<h2>{shipX?.name}</h2>
						<p>has</p>
						<p>{shipX?.launches}</p>
						<p>launches</p>
					</div>
					<div>
						<h2>{shipY?.name}</h2>
						<Button onClick={() => checkHigher()}>Higher</Button>
						<Button onClick={() => checkLower()}>Lower</Button>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PlayView;
