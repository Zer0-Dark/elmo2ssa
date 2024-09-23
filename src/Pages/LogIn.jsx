import logo from "../assets/logo-Black.png"

function LogIn() {
    return (
        <div className="h-screen w-full flex flex-col bg-mainBg pt-10 items-center">
            <img alt="Logo" src={logo} className="desktop:w-1/6 w-1/3 desktop:mb-6 mb-4"></img>
            <h1 className="mb-6 desktop:text-5xl text-3xl font-mainFont">تسجيل الدخول</h1>
            <input type="text" className="desktop:w-1/3  p-4 mb-4 rounded-md border-2 border-mainTheme text-2xl font-mainFont" dir="rtl" placeholder="الايميل"></input>
            <input type="password" className="desktop:w-1/3 p-4 rounded-md border-2 border-mainTheme text-2xl font-mainFont " dir="rtl" placeholder="الباسورد"></input>
            <button className="desktop:w-1/5  bg-secondryBg font-mainFont text-2xl p-4 mt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg">تسجيل الدخول</button>

        </div>
    )
}

export default LogIn