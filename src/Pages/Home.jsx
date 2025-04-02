
import Hero from "../components/Hero"
import WhoAreWeSection from "../components/WhoAreWeSection"
import PplSection from "../components/PplSection"
import OurActivities from "../components/OurActivities"
import IncomingActivitys from "../components/IncomingActivitys"
// import RamdanCard from "../components/RamdanCard"


function Home() {

    return (
        <div className="main-container bg-mainBg min-h-screen min-w-screen">
            {/* <RamdanCard /> */}
            < Hero />
            <WhoAreWeSection />
            <PplSection />
            <OurActivities />
            <IncomingActivitys />


        </div>
    )
}

export default Home