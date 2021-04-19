import classNames from 'classnames/bind';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Logo } from '../Logo';

import styles from './Navigation.module.scss';
import { NavigationProps } from './Navigation.types';

const cx = classNames.bind(styles);

const Navigation: React.FC<NavigationProps> = ({ logoUrl = '', items = [] }) => {
	return (
		<nav className={cx('c-navigation')}>
			<div className={cx('c-navigation__logo')}>
				<Link to={logoUrl}>
					<Logo />
				</Link>
			</div>
			<div className={cx('c-navigation__items')}>
				{items.map(({ label, ...linkProps }, index) => (
					<NavLink
						key={`label-${index}`}
						className={cx('c-navigation__link')}
						{...linkProps}
					>
						{label}
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
