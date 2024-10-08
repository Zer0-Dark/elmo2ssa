import logo from "../assets/8.png"
import { useState, useEffect } from "react";
import { db } from '../firebase-config.js'
import { getDocs, collection, } from "firebase/firestore";


function Footer() {
    const [contactInfo, setContactInfo] = useState([])
    const contactCollectionRef = collection(db, "contact");


    const getContactList = async () => {
        try {
            const data = await getDocs(contactCollectionRef);
            const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setContactInfo(filterdData);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {


        getContactList();
    }, []);


    return (
        <div id="contact" className=" bg-mainTheme">

            <div className="  flex flex-col-reverse desktop:p-8 px-3 gap-2 desktop:space-y-0 space-y-10 desktop:flex-row justify-center items-center   ">

                <div className="desktop:w-1/3 desktop:inline-block desktop:my-0 my-8 " >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d213.27066381147307!2d29.933711100014133!3d31.211568336631213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c54fd4daf0e9%3A0xc09356454de29114!2zR3JvdXBuYSBTdG9yZSBBbGV4YW5kcmlhINis2LHZiNio2YbYpyDYs9iq2YjYsSDYp9mE2KfYs9mD2YbYr9ix2YrZhw!5e0!3m2!1sen!2seg!4v1725456479940!5m2!1sen!2seg" allowFullScreen="" loading="lazy" className=" border-none w-[100%] desktop:h-[420px] h-1/2 " ></iframe>
                </div>

                <div className="desktop:w-1/3 desktop:max-w-1/3 text-white font-secondryFont space-y-1 desktop:space-y-5 desktop:text-base ">
                    <h1 dir="rtl" lang="ar" className="font-mainFont text-xl text-center desktop:text-right  desktop:text-xl ">عناوين التواصل</h1>
                    <h2 dir="rtl" lang="ar" ><span className="font-bold text-secondryBg">العنوان : </span>{contactInfo[0]?.address}</h2>
                    <h2 dir="rtl" lang="ar"><span className="font-bold text-secondryBg">البريد الالكتروني : </span>{contactInfo[0]?.email}</h2>
                    <h2 dir="rtl" lang="ar"><span className="font-bold text-secondryBg">رقم الهاتف :  </span >{contactInfo[0]?.phone}</h2>
                    <h2 dir="rtl" lang="ar"><span className="font-bold text-secondryBg"> رقم حساب التبرعات (بنك مصر) : </span>{contactInfo[0]?.bank}</h2>
                </div>


                <div className="desktop:w-1/3 flex flex-col desktop:items-end items-center">
                    <img src={logo} alt="logo" className="desktop:max-w-32 desktop:mr-10 mb-2 max-w-32"></img>
                    <h1 dir="rtl" lang="ar" className=" text-white font-mainFont text-xl ">مؤسسة محمود فهمي درويش</h1>
                </div>
            </div>


            <div>
                <div></div>
                <div className="flex justify-between text-white  font-mainFont px-8 py-4  border-t-2 border-white desktop:text-base text-xs">
                    <h1 dir="rtl" lang="ar">صنع بواسطه 00</h1>
                    <h1 dir="rtl" lang="ar">موسسة خيرية مشهرة برقم 4147 سنة 2020 بالاسكندرية</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer