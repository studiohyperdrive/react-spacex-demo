import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Logo } from '../../components';
import { ROUTE_PATHS } from '../../router';

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