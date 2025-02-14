import ramdan from "../assets/ramdan2.svg"

function RamdanCard() {
    return (
        <div className=" fixed desktop:flex hidden  bottom-12 right-2 pb-4   bg-mainBg  rounded-md z-20   justify-center items-center flex-col">
            <img className="w-52" src={ramdan} alt=">رمضان كريم"></img>
            <h2 className="-mt-4 text-xl font-mainFont ">كل عام و انتم بخير</h2>
        </div>
    )
}

export default RamdanCard;