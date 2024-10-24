
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../firebase-config.js'
import { toast } from "react-hot-toast";
import SectionTitle from "./SectionTitle.jsx";
import DashboardButton from "./DashboardButton.jsx";

function WhoWeAreDashboard() {

    const [para, setInfo] = useState([]);
    const [updatedPara, setUpdatedPara] = useState('');


    const paraCollectionRef = collection(db, "whoWeAreParagraph");

    const updateWhoAreWeParagaph = async (id) => {
        const paraDoc = doc(db, "whoWeAreParagraph", id);
        await updateDoc(paraDoc, { paragraph: updatedPara });
        toast.success("تم تغيير الفقرة بنجاح");

    }


    useEffect(() => {
        const getParaList = async () => {
            try {
                const data = await getDocs(paraCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setInfo(filterdData[0]);
                setUpdatedPara(filterdData[0].paragraph);
            } catch (error) {
                console.log(error);
            }
        }


        getParaList();
    }, [])

    function clickTheButton() {
        updateWhoAreWeParagaph(para.id)
    }
    return (
        <>
            <SectionTitle title={"فقرة من نحن"} ></SectionTitle>
            <textarea onChange={(e) => { setUpdatedPara(e.target.value) }} value={updatedPara} type="text" className=" desktop:w-2/3 w-[90%] p-6 desktop:min-h-48 min-h-56 mt-7  desktop:text-2xl text-xl " dir="rtl" lang="ar"></textarea>
            <DashboardButton text="تغيير" fun={clickTheButton} />


        </>

    )
}

export default WhoWeAreDashboard;