import SectionTitle from "./SectionTitle"
import { motion } from "framer-motion"
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Activity from "./Activity";
function OuarActivities() {

    const containerRef = useRef();
    function inc() {
        containerRef.current.scrollLeft += 800;
    }
    function dec() {
        containerRef.current.scrollLeft -= 800;

    }
    return (
        <div className="py-14 flex justify-center flex-col items-center relative">
            <SectionTitle left="60" title="نشاطاتنا" />
            <div className="w-[100%] overflow-hidden relative">
                <div
                    ref={containerRef}
                    className={`flex sticky  top-0 left-0 items-center px-6  transition overflow-x-hidden scroll-smooth gap-5  mt-10 `}>

                    <Activity />
                    <Activity />
                    <Activity />



                </div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1 }}
                    onClick={dec}
                    className=" cursor-pointer absolute top-[50%] left-14 text-mainTheme bg-white w-14 h-14 text-2xl flex justify-center items-center rounded-full border-4 border-mainTheme -translate-y-[50%]">
                    <FontAwesomeIcon icon={faArrowLeft} />


                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1 }}
                    onClick={inc}
                    className=" cursor-pointer absolute top-[50%] right-14  text-mainTheme bg-white w-14 h-14 text-2xl flex justify-center items-center rounded-full border-4 border-mainTheme -translate-y-[50%]">

                    <FontAwesomeIcon icon={faArrowRight} />


                </motion.div>

            </div>
        </div>
    )
}

export default OuarActivities