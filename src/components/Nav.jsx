

function Nav() {
    return (
        <div className="bg-mainTheme w-full flex justify-between text-white text-2xl py-2 px-12 items-center font-mainFont">
            <div className=" cursor-pointer hover:text-secondryColor">
                <h1>تسجيل الدخول</h1>
            </div>

            <div className="flex space-x-5 items-center  cursor-pointer " >
                <h1>مؤسسة محمود فهمي درويش</h1>
                <img src="/src/assets/8.png" alt="logo" className="w-14" />
            </div>

        </div>
    )
}

export default Nav