/* eslint-disable react/prop-types */

import { signOut } from "firebase/auth"
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { db } from '../firebase-config.js'
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import FooterDashboard from "../components/FooterDashboard.jsx";
import WhoWeAreDashboard from "../components/whoWeAreDashboard.jsx";
import ActivitysDashboard from "../components/ActivitysDashboard.jsx";

function DashBoard(props) {

    const [people, setPeople] = useState([]);

    const navigate = useNavigate();




    const peopleCollectionRef = collection(db, "people");






    useEffect(() => {
        const getPeopleList = async () => {
            try {
                const data = await getDocs(peopleCollectionRef);
                const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setPeople(filterdData);
            } catch (error) {
                console.log(error);
            }
        }

        getPeopleList();
    }, [])



    async function loguout() {
        await signOut(auth);
        props.logout();
        navigate("/login");
    }
    return (
        <>
            <div>
                <Toaster />
            </div>

            <div className="flex flex-col justify-center items-center font-mainFont bg-mainBg">
                <button onClick={loguout} className="desktop:w-1/5  bg-secondryBg font-mainFont text-2xl p-4 pt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg"> تسجيل الخروج</button>

                <h1 className=' text-7xl text-mainTheme text-center pt-12'>لوحة التحكم</h1>
                <WhoWeAreDashboard />
                <ActivitysDashboard />
                <FooterDashboard />
            </div>


        </>
    )
}

export default DashBoard;