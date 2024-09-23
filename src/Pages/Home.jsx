
import Hero from "../components/Hero"
import WhoAreWeSection from "../components/WhoAreWeSection"
import PplSection from "../components/PplSection"
import OuarActivities from "../components/OuarActivities"


function Home() {
    return (
        <div className="main-container bg-mainBg min-h-screen min-w-screen">
            {/* <Nav /> */}
            <Hero />
            <WhoAreWeSection />
            <PplSection />
            <OuarActivities />
            {/* <Footer /> */}
        </div>
    )
}

export default Home