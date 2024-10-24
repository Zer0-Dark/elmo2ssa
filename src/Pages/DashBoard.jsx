



// import { db } from '../firebase-config.js'
// import { getDocs, collection } from "firebase/firestore";
// import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import FooterDashboard from "../components/FooterDashboard.jsx";
import WhoWeAreDashboard from "../components/WhoWeAreDashboard.jsx";
import ActivitysDashboard from "../components/ActivitysDashboard.jsx";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function DashBoard() {




    return (
        <>
            <div>
                <Toaster />
            </div>

            <div className="flex flex-col justify-center items-center font-mainFont bg-mainBg">
                <h1 className=' desktop:text-7xl text-6xl text-mainTheme text-center pt-12 desktop:mb-12 mb-8'>لوحة التحكم <FontAwesomeIcon icon={faHouse} /></h1>
                <WhoWeAreDashboard />
                <ActivitysDashboard />
                <FooterDashboard />
            </div>


        </>
    )
}

export default DashBoard;