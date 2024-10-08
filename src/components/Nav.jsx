/* eslint-disable react/prop-types */
import { signOut } from "firebase/auth"
import { auth } from "../firebase-config";
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/8.png"
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav(props) {
    const location = useLocation();
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();


    async function loguout() {
        setShowNav(false);
        await signOut(auth);
        props.logout();
        navigate("/login");
    }

    return (
        <div className="bg-mainTheme w-full flex justify-between text-white desktop:text-2xl  py-3 desktop:px-12 px-5 items-center font-mainFont relative">
            {
                !props.login &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <NavLink to={"/login"}><FontAwesomeIcon className="text-3xl" icon={faUserCircle} /></NavLink>
                </div>
            }

            {
                (props.login) &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <button onClick={() => setShowNav((prev) => !prev)}> <FontAwesomeIcon className="text-3xl" icon={faUserCircle} /></button>
                </div>
            }
            {
                showNav &&
                <div className=" absolute bottom-0 translate-y-full bg-secondryColor p-1 flex flex-col gap-1  ">
                    <NavLink onClick={() => setShowNav(false)} to={"/dashboard"} className="px-8 py-6 inline-block hover:bg-secondryBg hover:text-black cursor-pointer bg-mainTheme">لوحه المعلومات</NavLink>
                    <button onClick={loguout} className="px-8 py-6 inline-block hover:bg-secondryBg hover:text-black cursor-pointer bg-mainTheme">تسجيل الخروج</button>


                </div>
            }




            {/* {
                location.pathname === "/login" &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <NavLink to={"/"}>الصفحة الرئيسية</NavLink>
                </div>
            } */}
            {
                location.pathname === "/" &&
                <div className=" flex-row-reverse justify-between gap-20 desktop:flex hidden ">
                    <HashLink smooth className="hover:text-secondryColor" to="#whoAreWe">من نحن؟</HashLink>
                    <HashLink smooth className="hover:text-secondryColor" to="#activity">نشاطاتنا</HashLink>
                    <HashLink smooth className="hover:text-secondryColor" to="#contact">تواصل معنا</HashLink>

                </div>
            }



            <NavLink to={"/"} className="flex desktop:space-x-5 space-x-2 items-center  cursor-pointer " >
                <h1>مؤسسة محمود فهمي درويش</h1>
                <img src={logo} alt="logo" className="desktop:w-14 w-8" />
            </NavLink>

        </div >
    )
}

export default Nav