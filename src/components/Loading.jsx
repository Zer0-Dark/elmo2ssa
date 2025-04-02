import { motion } from "framer-motion";
import logo from "../assets/8.png";
function Loading() {



    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0.5 }} transition={{ duration: 0 }} className="fixed  top-0 bottom-0 z-30 w-full h-full bg-mainTheme text-white text-5xl flex justify-center items-center">
            <div className="flex align-middle justify-center flex-col font-secondryFont font-semibold text-center gap-5">

                {/* <svg className="fixed origin-top w-32 desktop:left-32 left-10 top-0 animate-rotate " fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.586 396.586"
                    stroke="#fff">
                    <path
                        d="M281.603 179.637a1.5 1.5 0 001.5-1.5v-4.601h4.451a1.5 1.5 0 001.5-1.5v-9.699a1.5 1.5 0 00-1.5-1.5h-24.146c-3.842-27.97-40.149-45.072-56.818-51.509.26-.794.404-1.637.404-2.515 0-3.405-2.109-6.332-5.133-7.646 1.078-.939 1.76-2.294 1.76-3.806 0-1.994-1.182-3.722-2.906-4.57l-.781-6.204a7.497 7.497 0 005.861-7.315v-.5a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.5a7.498 7.498 0 005.861 7.315l-.781 6.204c-1.725.849-2.906 2.576-2.906 4.57 0 1.512.682 2.866 1.758 3.806-3.021 1.313-5.131 4.24-5.131 7.646 0 .877.144 1.721.404 2.515-16.67 6.437-52.977 23.539-56.818 51.509h-24.148a1.5 1.5 0 00-1.5 1.5v9.699a1.5 1.5 0 001.5 1.5h4.451v4.601a1.5 1.5 0 001.5 1.5h3.271v162.282h-3.271a1.5 1.5 0 00-1.5 1.5v4.598h-4.451a1.5 1.5 0 00-1.5 1.5v9.702a1.5 1.5 0 001.5 1.5h32.018c17.57 23.99 57.244 35.867 57.244 35.867s39.674-11.877 57.244-35.867h32.016a1.5 1.5 0 001.5-1.5v-9.702a1.5 1.5 0 00-1.5-1.5h-4.451v-4.598a1.5 1.5 0 00-1.5-1.5h-3.27V179.637h3.268zm-120.26 152.014h-26.795V228.584c0-24.726 13.396-40.929 13.396-40.929s13.398 16.203 13.398 40.929v103.067zm60.301 0h-46.701V228.584c0-24.726 23.352-40.929 23.352-40.929s23.35 16.203 23.35 40.929v103.067zm40.396 0h-26.795V228.584c0-24.726 13.396-40.929 13.396-40.929s13.398 16.203 13.398 40.929v103.067zM198.294 39.054a7.5 7.5 0 007.5-7.5v-.963a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.963a7.5 7.5 0 007.5 7.5zM198.294 15.962c4.143 0 7.5-3.357 7.5-7.5V7.5a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.962a7.5 7.5 0 007.5 7.5zM198.294 62.145a7.5 7.5 0 007.5-7.5v-.962a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.962a7.5 7.5 0 007.5 7.5z" />
                </svg>
                <svg className="fixed w-32 desktop:right-32 right-10 top-0 origin-top animate-rotate-reverse " fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 396.586 396.586"
                    stroke="#fff">
                    <path
                        d="M281.603 179.637a1.5 1.5 0 001.5-1.5v-4.601h4.451a1.5 1.5 0 001.5-1.5v-9.699a1.5 1.5 0 00-1.5-1.5h-24.146c-3.842-27.97-40.149-45.072-56.818-51.509.26-.794.404-1.637.404-2.515 0-3.405-2.109-6.332-5.133-7.646 1.078-.939 1.76-2.294 1.76-3.806 0-1.994-1.182-3.722-2.906-4.57l-.781-6.204a7.497 7.497 0 005.861-7.315v-.5a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.5a7.498 7.498 0 005.861 7.315l-.781 6.204c-1.725.849-2.906 2.576-2.906 4.57 0 1.512.682 2.866 1.758 3.806-3.021 1.313-5.131 4.24-5.131 7.646 0 .877.144 1.721.404 2.515-16.67 6.437-52.977 23.539-56.818 51.509h-24.148a1.5 1.5 0 00-1.5 1.5v9.699a1.5 1.5 0 001.5 1.5h4.451v4.601a1.5 1.5 0 001.5 1.5h3.271v162.282h-3.271a1.5 1.5 0 00-1.5 1.5v4.598h-4.451a1.5 1.5 0 00-1.5 1.5v9.702a1.5 1.5 0 001.5 1.5h32.018c17.57 23.99 57.244 35.867 57.244 35.867s39.674-11.877 57.244-35.867h32.016a1.5 1.5 0 001.5-1.5v-9.702a1.5 1.5 0 00-1.5-1.5h-4.451v-4.598a1.5 1.5 0 00-1.5-1.5h-3.27V179.637h3.268zm-120.26 152.014h-26.795V228.584c0-24.726 13.396-40.929 13.396-40.929s13.398 16.203 13.398 40.929v103.067zm60.301 0h-46.701V228.584c0-24.726 23.352-40.929 23.352-40.929s23.35 16.203 23.35 40.929v103.067zm40.396 0h-26.795V228.584c0-24.726 13.396-40.929 13.396-40.929s13.398 16.203 13.398 40.929v103.067zM198.294 39.054a7.5 7.5 0 007.5-7.5v-.963a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.963a7.5 7.5 0 007.5 7.5zM198.294 15.962c4.143 0 7.5-3.357 7.5-7.5V7.5a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.962a7.5 7.5 0 007.5 7.5zM198.294 62.145a7.5 7.5 0 007.5-7.5v-.962a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v.962a7.5 7.5 0 007.5 7.5z" />
                </svg>
                <h2 className=" animate-pulse" lang="ar" dir="rtl">كل عام وانتم بخير </h2>
                <h2 className=" animate-pulse" lang="ar" dir="rtl">رمضان كريم</h2> */}

                <img className="w-64" alt="logo" src={logo} ></img>
                <h2 className=" animate-pulse" lang="ar" dir="rtl">جاري التحميل</h2>
            </div>
        </motion.div>
    )
}

export default Loading;