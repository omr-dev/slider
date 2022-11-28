import styles from './body.module.css';

import Slide from '../slide/Slide';
import {useEffect, useState} from 'react';
import getPeople, {Person} from '../../data.js';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';



const Body = () => {
    const [positions,setPositions]=useState({pre:1,active:2,next:3});
    const people=getPeople();

    useEffect(() => {
        const interval = setInterval(() => {
            loadNextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [positions]);

    const loadNextSlide = () => {
        const currentPositions={...positions}
        const newPositions={
            pre:currentPositions.active,
            active:currentPositions.next,
            next:currentPositions.next===people.length?1:currentPositions.next+1
        }

   setPositions(newPositions);
    };
    const loadPreSlide = () => {
        const currentPositions={...positions}
        const newPositions={
            pre:currentPositions.pre===1?people.length:currentPositions.pre-1,
            active:currentPositions.pre,
            next:currentPositions.active
        }

        setPositions(newPositions);
    };
    return (
        <>
            <div className={styles.bodyContainer}>
                <button className={styles.btn+" "+styles.btnLeft} onClick={loadPreSlide}><FiChevronLeft/></button>
                <div className={styles.slideContainer}>

                    {people.map((person:Person, index:number) => {
                        let pos;

                        if (positions.pre===person.id) {
                            pos = "pre";

                        } else if (positions.active===person.id) {
                            pos = "active";
                        } else if (positions.next===person.id) {
                            pos = "next";
                        } else {
                            pos = "stack";
                        }


                        return    <Slide person={person} pos={pos} key={index} />;
                    })}



                </div>
                <button className={styles.btn+" "+styles.btnRight} onClick={loadNextSlide}><FiChevronRight/></button>





            </div>
        </>

    );
};

export default Body;
