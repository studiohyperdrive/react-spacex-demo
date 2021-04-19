import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { spaceXService } from '../../../shared/services/spaceX';
import { STARLINK_ROUTE_PATHS } from '../../starlink.routes';

import styles from './StarlinkOverview.module.scss';

const cx = classNames.bind(styles);

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
		<div className={cx('v-starlink-overview', 'u-container')}>
			<h1>Starlink overview</h1>
			{loading ? (
				<p>Loading starlinks...</p>
			) : !loading && starlinks.length ? (
				<ul className={cx('v-starlink-overview__list')}>
					{starlinks.map((starlink) => {
						const itemTo = generatePath(STARLINK_ROUTE_PATHS.detail, {
							starlinkId: starlink.id,
						});

						return (
							<li key={starlink.id}>
								<Link to={itemTo}>
									{starlink.label}
									<span className="material-icons">chevron_right</span>
								</Link>
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};

export default StarlinkOverview;
