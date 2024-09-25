/* eslint-disable react/prop-types */

import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/8.png"
import { HashLink } from 'react-router-hash-link';

function Nav(props) {
    const location = useLocation();

    return (
        <div className="bg-mainTheme w-full flex justify-between text-white desktop:text-2xl text-sm py-3 desktop:px-12 px-5 items-center font-mainFont">
            {
                !props.login &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <NavLink to={"/login"}>تسجيل الدخول</NavLink>
                </div>
            }

            {
                (props.login && location.pathname !== "/dashboard") &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <NavLink to={"/dashboard"}>لوحة المعلومات</NavLink>
                </div>
            }

            {
                (props.login && location.pathname === "/dashboard") &&
                <div className=" cursor-pointer hover:text-secondryColor">
                    <NavLink to={"/"}>الصفحة الرئيسية</NavLink>
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

        </div>
    )
}

export default Nav