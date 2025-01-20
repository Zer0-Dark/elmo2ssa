

// eslint-disable-next-line react/prop-types
function DashboardButton({ fun, text }) {
    return (
        <>

            <button className="desktop:w-1/5 w-1/2  bg-secondryBg font-mainFont text-xl desktop:text-3xl p-4 mt-6 cursor-pointer hover:bg-white border-2 border-mainTheme rounded-lg" onClick={fun}>{text}</button>
        </>
    )
}

export default DashboardButton