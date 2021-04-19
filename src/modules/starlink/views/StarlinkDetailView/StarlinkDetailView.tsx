import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { spaceXService, StarlinkGetResponse } from '../../../shared/services/spaceX';

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
		<div className="v-starlink-detail u-container">
			{loading ? (
				<p>Loading starlink...</p>
			) : !loading && starlink ? (
				<>
					<h1>{starlink.spaceTrack.OBJECT_NAME}</h1>
				</>
			) : null}
		</div>
	);
};

export default StarlinkDetailView;
