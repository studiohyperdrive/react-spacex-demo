import { EntryView, HomeView } from './views';

export const HOME_ROUTE_PATHS = {
	entry: '/',
	home: '/home',
};

export const HOME_ROUTES = [
	{ path: HOME_ROUTE_PATHS.entry, component: EntryView, exact: true },
	{ path: HOME_ROUTE_PATHS.home, component: HomeView },
];
