import {Outlet} from 'react-router'
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;