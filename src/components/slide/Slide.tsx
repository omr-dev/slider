import styles from './slide.module.css';
import {FaQuoteRight} from 'react-icons/fa';
import {Person} from '../../data';
type PropsSlide={
    pos:string;
    person:Person;
}
const Slide = ({pos,person}:PropsSlide) => {
    const {image,title,name,quote}=person;


    return (

        <div className={styles.container + " " + styles[pos]}>
            <div className={styles.slideContainer}>
                <img src={image} alt={name} className={styles.image}/>
                <h2 className={styles.name}>{name}</h2>
                <h3 className={styles.jobTitle}>{title}</h3>
                <p className={styles.review}>{quote}</p>
                <div className={styles.icon}>

                    <FaQuoteRight/>
                </div>
            </div>
        </div>
    );
};

export default Slide;
