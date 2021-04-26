import classNames from 'classnames/bind';
import React from 'react';

import styles from './HomeView.module.scss';

const cx = classNames.bind(styles);

const HomeView: React.FC = () => {
	return (
		<div className="u-container">
			<h1>Welcome to SpaceX</h1>

			<div className={cx('v-home__welcome')}>
				<h2>Hi Folks!</h2>
				<p>
					Via dit project proberen we om enkele basis-principes te tonen die wij
					belangrijk vinden in React applicaties.
				</p>
				<p>
					We delen ook graag de{' '}
					<a
						href="https://media.studiohyperdrive.be/presentations/presentatie-react.pdf"
						target="_blank"
						rel="noreferrer"
					>
						bijhorende presentatie
					</a>{' '}
					en de{' '}
					<a
						href="https://github.com/studiohyperdrive/react-spacex-demo"
						target="_blank"
						rel="noreferrer"
					>
						broncode op Github
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default HomeView;
