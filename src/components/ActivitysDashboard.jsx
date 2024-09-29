
import { db } from '../firebase-config.js'
import { getDocs, collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ActivityDashboard from "../components/ActivityDashboard.jsx";

function ActivitysDashboard() {

    const [activity, setActivity] = useState([]);
    const [newActivity, setNewActivity] = useState({ title: "", photoUrl: "", desc: "" });


    const activitysCollectionRef = collection(db, "Activitys");



    const getActivityList = async () => {
        try {
            const data = await getDocs(activitysCollectionRef);
            const filterdData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setActivity(filterdData);
            console.log(filterdData);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {


        getActivityList();
    }, []);



    const addNewActivity = async () => {
        try {
            await addDoc(activitysCollectionRef, newActivity);
            toast.success("تمت الاضافة بنجاح");
            getActivityList();
        }
        catch (error) {
            console.log(error);
        }

    }

    const deleteActivity = async (id) => {
        const activityDoc = doc(db, "Activitys", id);
        await deleteDoc(activityDoc);
        toast.success("تم الحذف بنجاح");
        getActivityList();
    }





    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center mb-12">
                <h2 className="text-5xl py-7 bg-se ">النشاطات</h2>
                <div className="flex w-[90%] p-10 gap-7 flex-wrap justify-center bg-secondryBg rounded-sm">
                    {
                        activity.map((act, index) => <ActivityDashboard del={() => { deleteActivity(act.id) }} key={act.id} title={act.title} description={act.desc} photo={act.photoUrl} num={index + 1} />)
                    }

                </div>



            </div>
            <div className="w-full flex flex-col justify-center items-center mb-12">
                <div className="bg-secondryBg p-4 space-y-2 flex flex-col justify-center items-center w-[45%] rounded-md ">
                    <h3 className="text-2xl " dir="rtl" lang="ar">العنوان</h3>
                    <input value={newActivity.title} onChange={(e) => { setNewActivity({ ...newActivity, title: e.target.value }) }} lang="ar" dir="rtl" type="text" className="px-2 py-2 w-full rounded-sm"></input>
                    <h3 className="text-2xl" dir="rtl" lang="ar">لينك الصوره</h3>
                    <input value={newActivity.photoUrl} onChange={(e) => { setNewActivity({ ...newActivity, photoUrl: e.target.value }) }} lang="ar" dir="rtl" type="text" className="px-2 py-2 rounded-sm w-full"></input>
                    <h3 className="text-2xl" dir="rtl" lang="ar">الوصف</h3>
                    <textarea value={newActivity.desc} onChange={(e) => { setNewActivity({ ...newActivity, desc: e.target.value }) }} lang="ar" dir="rtl" type="text" className="px-2 py-2 rounded-sm w-full" ></textarea>
                </div>

                <button onClick={addNewActivity} className="mt-4 bg-secondryBg text-2xl px-8 py-2 rounded-md border-2 border-mainTheme">اضافة نشاط جديد</button>
            </div>
        </div>
    )
}

export default ActivitysDashboard