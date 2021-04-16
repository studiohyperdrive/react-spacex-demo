import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HOME_ROUTE_PATHS, HOME_ROUTES } from '../modules/home/home.routes';
import { STARLINK_ROUTE_PATHS, STARLINK_ROUTES } from '../modules/starlink/starlink.routes';

export const ROUTE_PATHS = {
	...HOME_ROUTE_PATHS,
	starlink: STARLINK_ROUTE_PATHS,
};

export const ROUTES = [...HOME_ROUTES, ...STARLINK_ROUTES];

export const AppRouterSwitch: React.FC = () => {
	return (
		<Switch>
			{ROUTES.map((route) => (
				<Route key={route.path} {...route} />
			))}
		</Switch>
	);
};
