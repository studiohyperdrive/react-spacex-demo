import classNames from 'classnames/bind';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { spaceXService, StarlinkGetResponse } from '../../../shared/services/spaceX';

import styles from './StarlinkDetailView.module.scss';

const cx = classNames.bind(styles);

const StarlinkDetailView: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [starlink, setStarlink] = useState<StarlinkGetResponse>();

	const { starlinkId } = useParams<{ starlinkId: string }>();

	useEffect(() => {
		if (!starlinkId) {
			return;
		}

		setLoading(true);

		spaceXService
			.getStarlink(starlinkId)
			.then((response) => {
				setStarlink(response);
			})
			.finally(() => setLoading(false));
	}, [starlinkId]);

	return (
		<div className={cx('v-starlink-detail', 'u-container')}>
			{loading ? (
				<p>Loading starlink...</p>
			) : !loading && starlink?.spaceTrack ? (
				<>
					<h1>{starlink.spaceTrack.OBJECT_NAME}</h1>
					<div className={cx('v-starlink-detail__data')}>
						<dl>
							{Object.keys(starlink.spaceTrack).map((key, index) => (
								<Fragment key={`starlink-data-${index}`}>
									<dt>{key}</dt>
									<dd>{String(starlink.spaceTrack[key])}</dd>
								</Fragment>
							))}
						</dl>
					</div>
				</>
			) : null}
		</div>
	);
};

export default StarlinkDetailView;
