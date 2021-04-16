import React, { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { ROUTE_PATHS } from '../../router';
import { spaceXService } from '../../services/spaceX';

const StarlinkOverview: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [starlinks, setStarlinks] = useState<{ id: string; label: string }[]>([]);

	useEffect(() => {
		setLoading(true);

		spaceXService
			.getAllStarlinks()
			.then((response) => {
				if (response?.docs) {
					setStarlinks(
						response.docs.map(({ id, spaceTrack }) => ({
							id,
							label: spaceTrack.OBJECT_NAME,
						}))
					);
				}
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="v-starlink-overview">
			<h1>Starlink overview</h1>
			{loading ? (
				<p>Loading starlinks...</p>
			) : !loading && starlinks.length ? (
				<ul>
					{starlinks.map((starlink) => {
						const itemTo = generatePath(ROUTE_PATHS.starlink.detail, {
							starlinkId: starlink.id,
						});

						return (
							<li key={starlink.id}>
								<Link to={itemTo}>{starlink.label}</Link>
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};

export default StarlinkOverview;
