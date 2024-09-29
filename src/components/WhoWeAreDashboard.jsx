
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from '../firebase-config.js'
import { toast } from "react-hot-toast";

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
    return (
        <>
            <h2 className="text-5xl py-7 ">فقرة من نحن</h2>
            <textarea onChange={(e) => { setUpdatedPara(e.target.value) }} value={updatedPara} type="text" className=" w-2/3 p-6 min-h-48  text-2xl " dir="rtl" lang="ar"></textarea>
            <button onClick={() => { updateWhoAreWeParagaph(para.id) }} className="desktop:w-1/5  bg-secondryBg font-mainFont text-2xl p-4 mt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg">تغيير</button>



        </>
    )
}

export default WhoWeAreDashboard;