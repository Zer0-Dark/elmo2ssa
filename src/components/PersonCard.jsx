import man from "../assets/man.png"

function PersonCard(props) {
    return (
        <div className={`flex desktop:flex-row flex-col p-4 ${props.main ? "desktop:w-[1032px] w-[90%] max-w-[90%] desktop:items-center desktop:justify-center " : "desktop:w-[500px] w-[45%] desktop:justify-between desktop:items-center "} desktop:h-[200px] h-fit  bg-secondryBg shadow-md drop-shadow-md items-center desktop:items-start rounded-md `}>

            <div className="flex desktop:flex-col flex-col desktop:text-xl text-base text-center mr-4">
                <h1 dir="rtl" lang="ar" className=" font-secondryFont font-bold desktop:text-2xl text-base">محمد عصام حسن</h1>
                <h1 dir="rtl" lang="ar" className=" font-secondryFont text-secondryColor mb-2 font-bold text-sm desktop:text-base">المحاسب الضريبي</h1>
                <p dir="rtl" lang="ar" className={`desktop:text-base ${props.main ? "w-[300px]" : ""} text-xs desktop:font-normal font-semibold`}>ابليس شسبيسي شس شسيي شسش  يشس يشسي شس يشسي شسيشيس</p>
            </div>
            <img src={man} alt="man" className="rounded-full desktop:max-h-[150px] desktop:max-w-fit max-w-[100px]  border-4 border-black desktop:order-1 order-first"></img>
        </div>
    )
}

export default PersonCard