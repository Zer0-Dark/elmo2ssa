import template from "../assets/قالب.png"

function Activity() {
    return (
        <div className="min-w-[1000px] min-h-[400px] flex bg-secondryBg rounded-md border-4 border-mainTheme p-8 mb-24">
            <div className="w-1/2">
                <img src={template} alt="active"></img>
            </div>

            <div className="w-1/2 flex items-center text-center  flex-col py-12 px-8">
                <h1 className="text-3xl text-secondryColor font-mainFont mb-4 ">نشاط 1</h1>
                <p className="text-xl text-black font-secondryFont" dir="rtl" lang="ar">شيشسيشسيسشيشسيشسيشسيشسي شسيشسمنكينكجشسمينبيشسنتمكب سيشنكبتنمكسشيبتنمكس يشتنمكبتنمكسسشيمكبتنبسي تنمكشسيبتمكشنشسيبمكتن سشيبتنم كلهقبتضصثقهخحجل يشس تةشسيكمتيبنشسك يشسيشس شي س منشسيبتتنمكيبسشسيبك يشس</p>
            </div> 


        </div>
    )
}

export default Activity