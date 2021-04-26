import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '../../../../router';
import { Button, Logo } from '../../../shared/components';

import styles from './EntryView.module.scss';

const cx = classNames.bind(styles);

const EntryView: React.FC = () => {
	return (
		<div className={cx('v-entry', 'u-container')}>
			<div className={cx('v-entry__logo')}>
				<Logo />
			</div>
			<div className={cx('v-entry__welcome')}>
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
			<Link to={ROUTE_PATHS.home}>
				<Button>Enter</Button>
			</Link>
		</div>
	);
};

export default EntryView;
