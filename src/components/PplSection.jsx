import PersonCard from "./PersonCard"


function PplSection() {
    return (
        <div className=" flex flex-row-reverse flex-wrap items-center w-full pb-12 desktop:gap-8 gap-4 justify-center">
            <div className="w-full flex justify-center">
                <PersonCard />

            </div>
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />

        </div>
    )
}

export default PplSection