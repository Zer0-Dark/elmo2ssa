/* eslint-disable react/prop-types */


function SectionTitle({ title }) {
    return (
        <div className=" relative">
            <div

                className={`absolute desktop:-left-1/2 -left-2/4 top-[27%]    dekstop:top-[25%] desktop:w-96 w-56 desktop:h-8 h-4 bg-secondryBg`} ></div>
            <h1 className="desktop:text-6xl text-4xl font-mainFont z-20 relative text-center ">{title}</h1>
        </div>
    )
}

export default SectionTitle;