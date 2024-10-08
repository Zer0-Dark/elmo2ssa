

function ActivityDashboard(props) {
    return (
        <div className="bg-secondryColor p-4 space-y-2 flex flex-col justify-center items-center desktop:w-[45%] w-full rounded-md ">
            <h3 className="text-2xl " dir="rtl" lang="ar">العنوان</h3>
            <input disabled lang="ar" value={props.title} dir="rtl" type="text" className="px-2 py-2 w-full rounded-sm"></input>
            <h3 className="text-2xl" dir="rtl" lang="ar">لينك الصوره</h3>
            <input disabled lang="ar" value={props.photo} dir="rtl" type="text" className="px-2 py-2 rounded-sm w-full"></input>
            <h3 className="text-2xl" dir="rtl" lang="ar">الوصف</h3>
            <textarea disabled value={props.description} lang="ar" dir="rtl" type="text" className="px-2 py-2 rounded-sm w-full" ></textarea>
            <h4 className="text-center mt-4">{props.num}</h4>
            <button onClick={props.del} className="bg-mainBg text-xl px-8 py-2 rounded-md" >حذف</button>

        </div>
    )
}

export default ActivityDashboard