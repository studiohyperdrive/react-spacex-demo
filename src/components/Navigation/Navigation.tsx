import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '../Logo';

import { NavigationProps } from './Navigation.types';

const Navigation: React.FC<NavigationProps> = ({ items = [] }) => {
	return (
		<nav>
			<div className="c-navigation__logo">
				<Logo />
			</div>
			<div className="c-navigation__items">
				{items.map(({ label, ...linkProps }, index) => (
					<NavLink key={`label-${index}`} {...linkProps}>
						{label}
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
