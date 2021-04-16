import React, { useEffect, useState } from 'react';

import { spaceXService } from '../../services/spaceX';

const PlayView: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [ships, setShips] = useState<{ name: string; launches: number; image: string }[]>([]);
	const [shipX, setShipX] = useState<{ name: string; launches: number; image: string }>();
	const [shipY, setShipY] = useState<{ name: string; launches: number; image: string }>();

	useEffect(() => {
		setLoading(true);

		spaceXService
			.getAllShips()
			.then((response) => {
				if (response) {
					setShips(
						response
							.map(({ name, launches, image }) => ({
								name,
								image,
								launches: launches.length,
							}))
							// randomize ships
							.sort(() => 0.5 - Math.random())
					);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	useEffect(() => {
		setShipX(ships[0]);
		setShipY(ships[1]);
	}, [ships]);

	return (
		<div className="v-starlink-overview">
			<h1>The Higher Lower ship launches game</h1>
			{loading ? (
				<p>Loading ships...</p>
			) : !loading && ships.length ? (
				<div>
					<div>{shipX?.name}</div>
					<div>{shipY?.name}</div>
				</div>
			) : null}
		</div>
	);
};

export default PlayView;
