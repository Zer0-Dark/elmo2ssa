
import Hero from "../components/Hero"
import WhoAreWeSection from "../components/WhoAreWeSection"
import PplSection from "../components/PplSection"
import OuarActivities from "../components/OuarActivities"
import { useState } from "react"
import IncomingActivitys from "../components/IncomingActivitys"


function Home() {

    return (
        <div className="main-container bg-mainBg min-h-screen min-w-screen">
            {/* <Nav /> */}
            < Hero />
            <WhoAreWeSection />
            <PplSection />
            <OuarActivities />
            <IncomingActivitys />
            {/* <Footer /> */}

        </div>
    )
}

export default Home