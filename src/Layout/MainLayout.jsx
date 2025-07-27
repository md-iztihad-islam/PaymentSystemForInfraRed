import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function MainLayout(){
    return(
        <div className="flex flex-col justify-between min-h-screen">
            <Header />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;