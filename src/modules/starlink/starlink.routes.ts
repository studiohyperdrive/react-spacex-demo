import { StarlinkDetailView, StarlinkOverview } from './views';

export const STARLINK_ROUTE_PATHS = {
	overview: '/starlink',
	detail: '/starlink/:starlinkId',
};

export const STARLINK_ROUTES = [
	{ path: STARLINK_ROUTE_PATHS.overview, component: StarlinkOverview, exact: true },
	{ path: STARLINK_ROUTE_PATHS.detail, component: StarlinkDetailView },
];
