import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '../../../../router';
import { Button, Logo } from '../../../shared/components';

const EntryView: React.FC = () => {
	return (
		<div className="v-entry">
			<div className="v-entry__Logo">
				<Logo />
			</div>
			<Link to={ROUTE_PATHS.home}>
				<Button>Enter</Button>
			</Link>
		</div>
	);
};

export default EntryView;
