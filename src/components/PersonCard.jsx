import man from "../assets/emptyPerson.png"

function PersonCard(props) {
    return (
        <div className={`flex desktop:flex-row flex-col p-10
                ${props.main ? "desktop:w-[1032px]  w-[90%] max-w-[90%] desktop:items-center desktop:justify-center items-center justify-center"
                : "desktop:w-[500px] w-[45%] desktop:justify-between desktop:items-center items-center  "} 
                desktop:h-[200px] h-fit  bg-secondryBg shadow-md drop-shadow-lg rounded-2xl  `}>

            <div className={`flex desktop:flex-col desktop:min-h-max min-h-36  flex-col items-center justify-center desktop:text-xl text-base text-center ${props.main ? "desktop:mr-8" : ""}`} >
                <h2 dir="rtl" lang="ar" className=" font-secondryFont font-bold desktop:text-2xl text-base">{props.name}</h2>
                <h2 dir="rtl" lang="ar" className=" font-secondryFont text-secondryColor mb-2 font-bold text-sm desktop:text-base">{props.jobTitle}</h2>
                <p dir="rtl" lang="ar" className={`desktop:text-base ${props.main ? "w-[300px]" : ""} text-xs desktop:font-normal font-semibold`}>{props.about}</p>
            </div>
            <img src={props.img ? props.img : man} alt="man" className="rounded-full desktop:max-h-[150px] desktop:max-w-fit max-w-[100px]  border-4 border-mainTheme desktop:order-1 order-first"></img>
        </div>
    )
}

export default PersonCard