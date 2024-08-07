// noinspection JSValidateTypes

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import React, {useEffect} from 'react';
import imges from "../../../../assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);

const Header = () => {
    // eslint-disable-next-line no-unused-vars
    const [searchResult, setSearchResults] = React.useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0)
    }, []);

    return (<>
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx("logo")}>
                    <img src={imges.logo} alt="Tiktok"/>
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx("actions")}></div>
            </div>
        </header>
        </>)


}

export default Header

