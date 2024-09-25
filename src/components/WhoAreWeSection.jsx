import SectionTitle from "./SectionTitle"
import { db } from '../firebase-config.js'
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function WhoAreWeSection() {

    const [para, setInfo] = useState([]);

    const paraCollectionRef = collection(db, "whoWeAreParagraph");

    useEffect(() => {
        const getParaList = async () => {
            try {
                const data = await getDocs(paraCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setInfo(filterdData);
            } catch (error) {
                console.log(error);
            }
        }

        getParaList();
    }, [paraCollectionRef])

    return (
        <div id="whoAreWe" className="py-14 flex justify-center flex-col items-center">
            <SectionTitle title="من نحن ؟" />
            <div className="mt-6 desktop:max-w-[780px] max-w-[80%] text-center desktop:text-xl text-sm font-sans">
                <p className=" font-secondryFont leading-relaxed font-semibold" dir="rtl" lang="ar">
                    {para[0]?.paragraph}
                </p>
            </div>
            <div className="h-0.5 w-[300px] mt-6 bg-secondryColor rounded-md"></div>
        </div>
    )
}

export default WhoAreWeSection