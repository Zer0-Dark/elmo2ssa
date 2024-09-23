import man from "../assets/man.png"

function PersonCard() {
    return (
        <div className="flex desktop:flex-row flex-col p-4 desktop:w-[500px] w-[45%] h-fit desktop:h-[200px] bg-secondryBg shadow-md drop-shadow-md justify-between rounded-md ">

            <div className="flex desktop:flex-col flex-col desktop:text-xl text-base text-center mr-4">
                <h1 dir="rtl" lang="ar" className=" font-secondryFont font-bold desktop:text-2xl text-base">محمد عصام حسن</h1>
                <h1 dir="rtl" lang="ar" className=" font-secondryFont text-secondryColor mb-2 font-bold text-sm desktop:text-base">المحاسب الضريبي</h1>
                <p dir="rtl" lang="ar" className="desktop:text-base text-xs desktop:font-normal font-semibold">ابليس شسبيسي شس شسيي شسش  يشس يشسي شس يشسي شسيشيس</p>
            </div>
            <img src={man} alt="man" className="rounded-full desktop:max-h-[150px]  border-4 border-black desktop:order-1 order-first"></img>
        </div>
    )
}

export default PersonCard