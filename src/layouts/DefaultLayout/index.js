import classNames from "classnames/bind";
import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import React from 'react';
import PropTypes from "prop-types";
import Sidebar from "../../components/Sidebar";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
    return(
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default DefaultLayout