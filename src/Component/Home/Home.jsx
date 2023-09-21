import Header from "../Shared/Header/Header";
import Footer from '../Shared/Footer/Footer'
import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div className="">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;