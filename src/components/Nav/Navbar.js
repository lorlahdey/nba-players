import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";

const Navbar = () =>{
    const NavData = [
        {
            title: "Home",
            path: RouteLinks.home,
        },
        {
            title: "About Us",
            path: "#",
        },
        {
            title: "Help",
            path: "#",
        },
        {
            title: "Login",
            path: RouteLinks.login,
        },
    ];


    return (
        <header className="default-layout">
            <nav className="navbar navbar-expand-lg default-layout__inner ">
                <div className="container">
                    <Link to={RouteLinks.home} className="navbar-brand">
                        <img
                            src="images/svg/logo.svg"
                            className="navbar-logo"
                            alt="logo"
                        />
                    </Link>
                    <i
                        className="navbar-toggler bi bi-list"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ></i>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav d-flex justify-content-end mt-2 mb-lg-0">
                            {NavData.map( ( item, index ) =>
                            {
                                return (
                                    <li className="navigation__list-item m-2 " key={index}>
                                        <Link to={item.path} className="navigation__link  m-2">
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            } )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
