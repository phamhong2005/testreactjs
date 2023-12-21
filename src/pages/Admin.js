import Navbar from "../components/Navbar";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export default function Admin() {
    return (
        <>
            <Navbar/>
            <h1>Admin Page</h1>

        </>
    )
}