import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import { Button } from '../../../shared/components';
import { IShip, spaceXService } from '../../../shared/services/spaceX';

import styles from './PlayView.module.scss';

const cx = classNames.bind(styles);

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
			(shipY?.launches > shipX?.launches || shipX?.launches === shipY?.launches)
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
			(shipX?.launches > shipY?.launches || shipX?.launches === shipY?.launches)
		) {
			rightAnswer();
			return;
		}

		reset();
	};

	return (
		<div className="u-container">
			<h1>The Higher Lower ship launches game</h1>
			{loading ? (
				<p>Loading ships...</p>
			) : !loading && ships.length ? (
				<div>
					<div>Highscore: {highScore}</div>
					<div className={cx('v-play__score')}>Current score: {score}</div>
					<div className={cx('v-play__ships')}>
						<div
							className={cx('v-play__ship', 'v-play__ship_x')}
							style={{
								backgroundImage: `linear-gradient(to bottom, rgba(12, 19, 93, 0.62), rgba(17, 19, 93, 0.83)), url(${shipX?.image})`,
							}}
						>
							<div>
								<h2>{shipX?.name}</h2>
								<p>has</p>
								<p className={cx('v-play__ship_x__amount')}>{shipX?.launches}</p>
								<p>{shipX?.launches === 1 ? 'launch' : 'launches'}</p>
							</div>
						</div>
						<div
							className={cx('v-play__ship', 'v-play__ship_y')}
							style={{
								backgroundImage: `linear-gradient(to bottom, rgba(12, 19, 93, 0.62), rgba(17, 19, 93, 0.83)), url(${shipY?.image})`,
							}}
						>
							<div>
								<h2>{shipY?.name}</h2>
								<p>has a</p>
								<div className={cx('v-play__ship_y__buttons')}>
									<Button onClick={() => checkHigher()}>Higher</Button>
									<Button onClick={() => checkLower()}>Lower</Button>
								</div>
								<p>amount of launches</p>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default PlayView;
