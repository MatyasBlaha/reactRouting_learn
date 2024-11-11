import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout(){
    return <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        // Footer goes here
    </>
}

export default RootLayout;