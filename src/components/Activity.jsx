// import template from "../assets/قالب.png"
import { animate, AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

function Activity(props) {
    const [hoverd, setHoverd] = useState(false);

    return (
        // <div className=" desktop:min-w-[70%] min-w-[90%]  h-[75vh] flex desktop:flex-row flex-col bg-secondryBg rounded-md border-2 border-mainTheme shadow-md p-8 mb-24">
        //     <div className="desktop:w-1/2 flex justify-center desktop:block h-1/2 desktop:h-full">
        //         <img src={props.photo} className="max-w-full max-h-full" alt="active"></img>
        //     </div>

        //     <div className="desktop:w-1/2 desktop:h-fit h-1/2 flex items-center text-center  flex-col desktop:py-12 py-6 desktop:px-8 px-4">
        //         <h1 className="desktop:text-4xl text-xl text-mainTheme font-mainFont desktop:mb-4 ">{props.title}</h1>
        //         <p className="desktop:text-xl text-sm text-black font-secondryFont" dir="rtl" lang="ar">{props.description}</p>
        //     </div>


        // </div>

        <motion.div onHoverStart={() => setHoverd(true)} onHoverEnd={() => setHoverd(false)} className="desktop:min-w-[50%] min-w-[100%] overflow-hidden group border-4 rounded-lg border-mainTheme relative  ">
            <motion.img transition={{ type: "tween" }} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} src={props.photo} className=" w-full max-h-[90vh] " alt="active"></motion.img>
            <motion.div className=" w-full absolute bottom-12 left-0 text-white desktop:text-4xl text-2xl text-center h-[30%] ">
                <h1 className=" group-hover:bg-secondryBg group-hover:text-mainTheme  desktop:p-4 p-2 duration-500 transition-all font-bold ">{props.title}</h1>
                <AnimatePresence mode="wait">
                    {
                        hoverd &&
                        <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{}} exit={{ y: 100, opacity: 0 }} className=" desktop:text-2xl text-sm font-secondryFont   px-4 desktop:py-2 ">{props.description}</motion.h1>
                    }
                </AnimatePresence>


            </motion.div>

        </motion.div>
    )
}

export default Activity