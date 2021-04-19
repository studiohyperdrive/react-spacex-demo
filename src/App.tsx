import React, { useMemo } from 'react';
import { matchPath, BrowserRouter as Router, useLocation } from 'react-router-dom';

import { NAVIGATION_ITEMS } from './App.const';
import { Navigation, StarBackground } from './modules/shared/components';
import { AppRouterSwitch, ROUTE_PATHS } from './router';

import './styles/main.scss';

const App: React.FC = () => {
	const location = useLocation();
	// Don't show navigation on entry view
	const showNavigation = useMemo(() => {
		const entryRouteMatch = matchPath(location.pathname, {
			path: ROUTE_PATHS.entry,
			exact: true,
		});
		return !entryRouteMatch;
	}, [location.pathname]);

	return (
		<div className="c-app">
			{showNavigation && <Navigation logoUrl={ROUTE_PATHS.home} items={NAVIGATION_ITEMS} />}
			<AppRouterSwitch />
			<StarBackground />
		</div>
	);
};

const Root: React.FC = () => {
	return (
		<Router>
			<App />
		</Router>
	);
};

export default Root;
