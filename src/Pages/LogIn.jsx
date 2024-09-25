/* eslint-disable react/prop-types */
import { useState } from "react"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase-config";
import logo from "../assets/logo-Black.png"
import { useNavigate } from "react-router-dom";

function LogIn(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            props.onLogin();
            navigate("/dashboard")

        }
    })
    async function login() {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log(user)


        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>

            {
                !props.login &&
                <div className="h-screen w-full flex flex-col bg-mainBg pt-10 items-center">
                    <img alt="Logo" src={logo} className="desktop:w-1/6 w-1/3 desktop:mb-6 mb-4"></img>
                    <h1 className="mb-6 desktop:text-5xl text-3xl font-mainFont">تسجيل الدخول</h1>
                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" className="desktop:w-1/3  p-4 mb-4 rounded-md border-2 border-mainTheme text-2xl font-mainFont" dir="rtl" placeholder="الايميل"></input>
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" className="desktop:w-1/3 p-4 rounded-md border-2 border-mainTheme text-2xl font-mainFont " dir="rtl" placeholder="الباسورد"></input>
                    <button onClick={login} className="desktop:w-1/5  bg-secondryBg font-mainFont text-2xl p-4 mt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg">تسجيل الدخول</button>

                </div>
            }


        </>
    )
}

export default LogIn