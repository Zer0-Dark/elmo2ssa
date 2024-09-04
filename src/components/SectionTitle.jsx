/* eslint-disable react/prop-types */


function SectionTitle({ title, left }) {
    console.log(left);
    return (
        <div className=" relative">
            <div
                style={{ left: `-${left}%` }}
                className={`absolute   top-[25%] w-96 h-8 bg-secondryBg`} ></div>
            <h1 className="text-6xl font-mainFont z-20 relative ">{title}</h1>
        </div>
    )
}

export default SectionTitle;