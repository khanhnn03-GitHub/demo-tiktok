import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children }) => {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;