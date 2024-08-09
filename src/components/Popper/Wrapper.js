import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import React from "react";
const cx = classNames.bind(styles);

const Wrapper = ({ children, className  }) => {

    return <div className={cx('wrapper',className)}>{children}</div>;
}

export default Wrapper;