import man from "../assets/man.png"

function PersonCard() {
    return (
        <div className="flex p-4 w-[500px] h-[200px] bg-secondryBg shadow-md drop-shadow-md justify-between rounded-md ">

            <div className="flex flex-col text-xl text-center mr-4">
                <h1 dir="rtl" lang="ar" className=" font-secondryFont font-bold text-2xl">محمد عصام حسن</h1>
                <h1 dir="rtl" lang="ar" className=" font-secondryFont text-secondryColor mb-2">المحاسب الضريبي</h1>
                <p dir="rtl" lang="ar">ابليس شسبيسي شس شسيي شسش  يشس يشسي شس يشسي شسيشيس</p>
            </div>
            <img src={man} alt="man" className="rounded-full max-h-[150px] border-4 border-black"></img>
        </div>
    )
}

export default PersonCard