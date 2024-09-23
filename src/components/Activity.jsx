// import template from "../assets/قالب.png"
import template2 from "../assets/pexels-botanphotography-27035492.jpg"

function Activity() {
    return (
        <div className=" desktop:min-w-[70%] min-w-[90%]  h-[75vh] flex desktop:flex-row flex-col bg-secondryBg rounded-md border-2 border-mainTheme shadow-md p-8 mb-24">
            <div className="desktop:w-1/2 flex justify-center desktop:block h-1/2 desktop:h-full">
                <img src={template2} className="max-w-full max-h-full" alt="active"></img>
            </div>

            <div className="desktop:w-1/2 desktop:h-fit h-1/2 flex items-center text-center  flex-col desktop:py-12 py-6 desktop:px-8 px-4">
                <h1 className="desktop:text-4xl text-xl text-mainTheme font-mainFont desktop:mb-4 ">نشاط 1</h1>
                <p className="desktop:text-xl text-sm text-black font-secondryFont" dir="rtl" lang="ar">شيشسيشسيسشيشسيشسيشسيشسي شسيشسمنكينكجشسمينبيشسنتمكب سيشنكبتنمكسشيبتنمكس يشتنمكبتنمكسسشيمكبتنبسي تنمكشسيبتمكشنشسيبمكتن سشيبتنم كلهقبتضصثقهخحجل يشس تةشسيكمتيبنشسك يشسيشس شي س منشسيبتتنمكيبسشسيبك يشس</p>
            </div>


        </div>
    )
}

export default Activity