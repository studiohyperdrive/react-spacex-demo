import classNames from 'classnames/bind';
import React from 'react';

import styles from './StarBackground.module.scss';

const cx = classNames.bind(styles);

const StarBackground: React.FC = () => {
	return (
		<>
			<div className={cx('c-stars', 'c-stars--bg-1')} />
			<div className={cx('c-stars', 'c-stars--bg-2')} />
			<div className={cx('c-stars', 'c-stars--bg-3')} />
		</>
	);
};

export default StarBackground;
