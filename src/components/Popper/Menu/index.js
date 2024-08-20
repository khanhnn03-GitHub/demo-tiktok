import React from 'react';
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from "prop-types";

const defaultFn = () => {};
const cx = classNames.bind(styles);
const Menu = ({ children,items = [],hideOnClick = false,onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return(
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu