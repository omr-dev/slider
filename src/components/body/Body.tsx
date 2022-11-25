import styles from './body.module.css';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';


const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            <button className={styles.btn}><FiChevronLeft/></button>
            <div className={styles.slideContainer}>
                <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="john doe" className={styles.image}/>
                <h2 className={styles.name}>john doe</h2>
                <h3 className={styles.jobTitle}>Regular Guy</h3>
                <p className={styles.review}>Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.</p>
                <div className={styles.icon}>

                    <FaQuoteRight/>
                </div>
            </div>
            <button className={styles.btn}><FiChevronRight/></button>
        </div>
    );
};

export default Body;
