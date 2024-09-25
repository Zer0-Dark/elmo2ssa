/* eslint-disable react/prop-types */

import { signOut } from "firebase/auth"
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function DashBoard(props) {

    const navigate = useNavigate();
    async function loguout() {
        await signOut(auth);
        props.logout();
        navigate("/login");
    }
    return (
        <div>
            <h1 className=' text-4xl text-center'>Welcome to the dashBoaard</h1>
            {
                props.login &&
                <button onClick={loguout} className="desktop:w-1/5  bg-secondryBg font-mainFont text-2xl p-4 mt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg"> تسجيل الخروج</button>


            }
        </div>
    )
}

export default DashBoard;