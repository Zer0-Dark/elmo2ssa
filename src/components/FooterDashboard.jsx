import SectionTitle from "./SectionTitle"
import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function FooterDashboard() {
    const navigate = useNavigate();
    const [contactInfo, setContactInfo] = useState([])
    const contactCollectionRef = collection(db, "contact");


    const getContactList = async () => {
        try {
            const data = await getDocs(contactCollectionRef);
            const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setContactInfo(filterdData[0]);
            console.log("this iscontact info", contactInfo);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {


        getContactList();
    }, []);

    const updateContactInfo = async (id) => {
        try {
            const contactDoc = doc(db, "contact", id);
            await updateDoc(contactDoc, contactInfo);
            toast.success("تم تغيير الفقرة بنجاح");
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="w-full flex flex-col justify-center items-center mb-12">
            <SectionTitle title="تواصل معنا"></SectionTitle>
            <div className="bg-secondryBg desktop:p-8 p-4 desktop:w-[45%] w-[90%] flex flex-col justify-end items-center space-y-4 mb-6 mt-10 ">
                <h3 className="text-2xl ">العنوان</h3>
                <textarea value={contactInfo.address} onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })} lang="ar" dir="rtl" type="text" className="px-2 py-2 text-xl w-full"></textarea>
                <h3 className="text-2xl ">البريد الالكتروني</h3>
                <input value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} lang="ar" dir="rtl" type="text" className="px-2 py-2 text-xl w-full"></input>
                <h3 className="text-2xl ">رقم الهاتف</h3>
                <input value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} lang="ar" dir="rtl" type="text" className="px-2 py-2 text-xl w-full"></input>
                <h3 className="text-2xl">رقم حساب التبرعات</h3>
                <input value={contactInfo.bank} onChange={(e) => setContactInfo({ ...contactInfo, bank: e.target.value })} lang="ar" dir="rtl" type="text" className="px-2 py-2 text-xl w-full"></input>
            </div>
            <button onClick={() => updateContactInfo(contactInfo.id)} className="bg-secondryBg text-2xl border-2 border-mainTheme px-8 py-2 rounded-md desktop:w-fit w-1/2">تغيير</button>
        </div>
    )
}

export default FooterDashboard