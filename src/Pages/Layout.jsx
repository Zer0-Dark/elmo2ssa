/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function Layout(props) {
    return (
        <div>
            <Nav login={props.login} logout={props.logout} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout