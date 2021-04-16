import React from 'react';

import { NAVIGATION_ITEMS } from './App.const';
import { Navigation } from './components';
import { AppRouter, ROUTE_PATHS } from './router';

import './styles/main.scss';

const App: React.FC = () => {
	return (
		<div className="c-app">
			<AppRouter>
				<Navigation logoUrl={ROUTE_PATHS.home} items={NAVIGATION_ITEMS} />
			</AppRouter>
		</div>
	);
};

export default App;
