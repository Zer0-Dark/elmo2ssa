import man from "../assets/man.png"

function PersonCard() {
    return (
        <div className="flex p-4 desktop:w-[500px] w-[90%] h-fit desktop:h-[200px] bg-secondryBg shadow-md drop-shadow-md justify-between rounded-md ">

            <div className="flex flex-col desktop:text-xl text-sm text-center mr-4">
                <h1 dir="rtl" lang="ar" className=" font-secondryFont font-bold desktop:text-2xl text-base">محمد عصام حسن</h1>
                <h1 dir="rtl" lang="ar" className=" font-secondryFont text-secondryColor mb-2 font-bold">المحاسب الضريبي</h1>
                <p dir="rtl" lang="ar" className="desktop:text-base text-xs desktop:font-normal font-semibold">ابليس شسبيسي شس شسيي شسش  يشس يشسي شس يشسي شسيشيس</p>
            </div>
            <img src={man} alt="man" className="rounded-full max-h-[150px] border-4 border-black"></img>
        </div>
    )
}

export default PersonCard