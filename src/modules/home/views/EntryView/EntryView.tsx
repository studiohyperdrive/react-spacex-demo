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
			<Link to={ROUTE_PATHS.home}>
				<Button>Enter</Button>
			</Link>
		</div>
	);
};

export default EntryView;
