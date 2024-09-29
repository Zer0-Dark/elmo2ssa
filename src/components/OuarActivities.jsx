import SectionTitle from "./SectionTitle"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Activity from "./Activity";
import { db } from '../firebase-config.js'
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";

function OuarActivities() {
    const [windowWidthSize, setWindowWidthSize] = useState(0);

    const [activity, setActivity] = useState([]);


    const activitysCollectionRef = collection(db, "Activitys");

    useEffect(() => {
        const getActivityList = async () => {
            try {
                const data = await getDocs(activitysCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setActivity(filterdData);
                console.log(filterdData);
            } catch (error) {
                console.log(error);
            }
        }

        getActivityList();
    }, [])



    useEffect(() => {
        const handleResize = () => {
            setWindowWidthSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const containerRef = useRef();
    function inc() {
        console.log(windowWidthSize);
        containerRef.current.scrollLeft += (windowWidthSize - (windowWidthSize * 60 / 100));
    }
    function dec() {
        console.log(windowWidthSize);
        containerRef.current.scrollLeft -= (windowWidthSize - (windowWidthSize * 60 / 100));

    }
    console.log("this is a test");
    return (
        <div id="activity" className="py-14 flex justify-center flex-col items-center relative">
            <SectionTitle title="نشاطاتنا" />
            <div className="w-[100%] overflow-hidden relative">
                <div
                    ref={containerRef}
                    className={`flex sticky  top-0 left-0 items-center px-6  transition overflow-x-hidden scroll-smooth gap-5  mt-10 w-[100%] h-[100%] `}>


                    {

                        activity.map((act, index) => <Activity key={act.id} title={act.title} description={act.desc} photo={act.photoUrl} num={index + 1} />)

                    }



                </div>

                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1 }}
                    onClick={dec}
                    className=" cursor-pointer absolute top-[50%] left-1 desktop:left-8 text-mainTheme bg-white w-14 h-14 text-2xl flex justify-center items-center rounded-full border-4 border-mainTheme -translate-y-[50%]">
                    <FontAwesomeIcon icon={faArrowLeft} />


                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1 }}
                    onClick={inc}
                    className=" cursor-pointer absolute top-[50%] right-1 desktop:right-8  text-mainTheme bg-white w-14 h-14 text-2xl flex justify-center items-center rounded-full border-4 border-mainTheme -translate-y-[50%]">

                    <FontAwesomeIcon icon={faArrowRight} />


                </motion.div>

            </div>
        </div>
    )
}

export default OuarActivities