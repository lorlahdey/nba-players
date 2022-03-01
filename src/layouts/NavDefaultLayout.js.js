import Navbar from "../components/Nav/Navbar";

const NavDefaultLayout = ( { children } ) =>{
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default NavDefaultLayout;
