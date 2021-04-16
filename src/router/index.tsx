import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { EntryView, HomeView } from '../views';

export const ROUTE_PATHS = {
	entry: '/',
	home: '/home',
};

export const ROUTES = [
	{ path: ROUTE_PATHS.entry, component: EntryView, exact: true }, // We need to set exact to true, otherwise all routes will only match the first
	{ path: ROUTE_PATHS.home, component: HomeView },
];

export const AppRouter: React.FC = ({ children }) => {
	return (
		<Router>
			{children}
			<Switch>
				{ROUTES.map((route) => (
					<Route key={route.path} {...route} />
				))}
			</Switch>
		</Router>
	);
};
