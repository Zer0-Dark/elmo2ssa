import SectionTitle from "./SectionTitle"
import { db } from '../firebase-config.js'
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function WhoAreWeSection() {

    const [para, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const paraCollectionRef = collection(db, "whoWeAreParagraph");

    useEffect(() => {
        const getParaList = async () => {
            try {
                const data = await getDocs(paraCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setInfo(filterdData);
                setLoading(false);

            } catch (error) {
                console.log(error);
            }
        }

        getParaList();
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">

                {
                    loading &&
                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 bottom-0 z-30 w-full h-full bg-mainTheme text-white text-5xl flex justify-center items-center">
                        <h1 className="font-mainFont" lang="ar" dir="rtl">يتم التحميل ......</h1>
                    </motion.div>
                }
            </AnimatePresence>
            <div id="whoAreWe" className="py-14 flex justify-center flex-col items-center" >
                <SectionTitle title="من نحن ؟" />
                <div className="mt-6 desktop:max-w-[780px] max-w-[80%] text-center desktop:text-xl text-sm font-sans">
                    <p className=" leading-relaxed font-semibold font-secondryFont" dir="rtl" lang="ar">
                        {para[0]?.paragraph}
                    </p>
                </div>
                <div className="h-0.5 w-[300px] mt-6 bg-secondryColor rounded-md"></div>
            </div>
        </>
    )
}

export default WhoAreWeSection