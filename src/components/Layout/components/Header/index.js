
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import React from 'react';
import imges from "../../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Header = () => {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
           <div className={cx("logo")}>
               <img src={imges.logo} alt="Tiktok"/>
           </div>

           <div className={cx("search")}>
               <input  placeholder="Search accounts and Videos" />
               <button className={cx("clear")}>
                   <FontAwesomeIcon icon={faCircleXmark} />
               </button>
               <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
               <button className={cx("search-btn")}>
                   <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
           </div>

           <div className={cx("actions")}></div>
        </div>
    </header>

}

export default Header

