import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicRoute, AuthRoute } from "./PublicRoute";
const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                {PublicRoute.map( ( PublicRoute, index ) => {
                    return (
                        <Route
                            exact={PublicRoute.exact}
                            key={index}
                            path={PublicRoute.path}
                            element={PublicRoute.component}
                        />
                    );
                } )}
                {AuthRoute.map( ( AuthRoute, index ) =>{
                    return (
                        <Route
                            key={index}
                            path={AuthRoute.path}
                            element={AuthRoute.component}
                        />
                    );
                } )}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
