import SectionTitle from "./SectionTitle"
import { db } from '../firebase-config.js'
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./Loading.jsx";

function WhoAreWeSection() {

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const paraCollectionRef = collection(db, "whoWeAreParagraph");

    useEffect(() => {
        const getParaList = async () => {
            try {
                const data = await getDocs(paraCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setInfo(filterdData);
                setTimeout(() => {
                    setLoading(false); // Set loading to false after 500ms
                }, 100);

            } catch (error) {
                console.log(error);
            }
        }

        getParaList();
    },)

    return (
        <>
            <AnimatePresence mode="wait">

                {
                    loading &&
                    <Loading />
                }
            </AnimatePresence>
            <div id="whoAreWe" className="py-14 flex justify-center flex-col items-center" >
                <SectionTitle title="من نحن ؟" />
                <div className="mt-6 desktop:max-w-[1200px] max-w-[80%] text-center desktop:text-xl text-xs font-sans">
                    <h1 className="  font-semibold font-secondryFont" dir="rtl" lang="ar">
                        {info[0]?.paragraph}
                    </h1>
                </div>
                <div className="h-0.5 w-[300px] mt-6 bg-secondryColor rounded-md"></div>
            </div>
        </>
    )
}

export default WhoAreWeSection