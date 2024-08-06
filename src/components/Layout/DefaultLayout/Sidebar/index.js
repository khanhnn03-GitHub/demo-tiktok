import classNames from "classnames/bind";
import style from './Sidebar.module.scss';
import React from 'react';
const cx = classNames.bind(style);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    )
}

export default Sidebar

