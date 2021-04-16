import React from 'react';

import { AppRouter } from './router';

import './styles/main.scss';

const App: React.FC = () => {
	return (
		<div className="c-app">
			<AppRouter />
		</div>
	);
};

export default App;
