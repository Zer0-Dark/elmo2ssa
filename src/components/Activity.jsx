// import template from "../assets/قالب.png"
import { motion } from "framer-motion"

function Activity(props) {
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

        <motion.div className="min-w-[50%] overflow-hidden group border-4 rounded-lg border-mainTheme relative  ">
            <motion.img transition={{ type: "tween" }} initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} src={props.photo} className=" w-full max-h-[90vh] " alt="active"></motion.img>
            <div className=" w-full absolute bottom-[8px] left-0 text-white text-4xl text-center h-[30%] ">
                <h1 className=" group-hover:bg-secondryBg group-hover:text-mainTheme  p-4 duration-500 transition-all font-bold ">{props.title}</h1>
                <h1 className=" text-2xl  duration-100 transition-all px-4 py-2 ">{props.description}</h1>

            </div>

        </motion.div>
    )
}

export default Activity