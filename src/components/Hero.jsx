import heroPhoto from "../assets/2لافتة المؤسسة الجديدة.jpg"

function Hero() {
    return (
        <div className=" desktop:border-b-4 border-b-2 border-mainTheme">
            <img src={heroPhoto} className="w-full max-h-screen">
            </img>
        </div>
    )
}

export default Hero