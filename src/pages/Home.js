import { Link } from "react-router-dom";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { RouteLinks } from "../routes/RouteLinks";

const Home = () =>{
    return (
        <NavDefaultLayout>
            <div className="home d-flex jusitify-content-center">
                <div className="home__auth-session d-flex flex-column align-items-center">
                    <p className="home__auth-session-text">
                        Dont have an account?
                        <Link to={RouteLinks.signup} className="home__create-link mr-2">
                            Create Account
                        </Link>
                    </p>
                    <Link to={RouteLinks.signup} className={`btn btn-large `}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </NavDefaultLayout>
    );
}

export default Home;