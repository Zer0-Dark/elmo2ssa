import ramdan from "../assets/ramdan2.svg"

function RamdanCard() {
    return (
        <div className=" fixed bottom-2 right-2 pb-4   bg-mainBg border-2 border-black rounded-md z-50  flex justify-center items-center flex-col">
            <img className="w-44" src={ramdan} alt=">رمضان كريم"></img>
            <h2 className="-mt-4 text-xl font-mainFont ">كل عام و انتم بخير</h2>
        </div>
    )
}

export default RamdanCard;