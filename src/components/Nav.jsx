import logo from "../assets/8.png"

function Nav() {
    return (
        <div className="bg-mainTheme w-full flex justify-between text-white desktop:text-2xl text-sm py-2 desktop:px-12 px-5 items-center font-mainFont">
            <div className=" cursor-pointer hover:text-secondryColor">
                <h1>تسجيل الدخول</h1>
            </div>

            <div className="flex desktop:space-x-5 space-x-2 items-center  cursor-pointer " >
                <h1>مؤسسة محمود فهمي درويش</h1>
                <img src={logo} alt="logo" className="desktop:w-14 w-8" />
            </div>

        </div>
    )
}

export default Nav