import PersonCard from "./PersonCard"


function PplSection() {
    return (
        <div className=" flex flex-row-reverse flex-wrap items-center w-full pb-12 desktop:gap-8 gap-4 justify-center">
            <h1 className=" desktop:w-[1032px] max-w-[90%] w-[90%] text-3xl   font-bold h-fit py-8 text-center font-secondryFont  bg-secondryBg shadow-md drop-shadow-md rounded-md text-mainTheme">الاعضاء المؤسسين</h1>
            <div className="w-full flex justify-center">
                <PersonCard main={true} />
            </div>
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />

        </div>
    )
}

export default PplSection