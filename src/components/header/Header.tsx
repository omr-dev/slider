import styles from './header.module.css';
const Header = () => {
    return (
        <div>
            <h1 className={styles.title}><span className={styles.slash} >/</span>Reviews</h1>
        </div>
    );
};

export default Header;
