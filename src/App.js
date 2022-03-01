import React from "react";
import AppRoutes from "./routes/AppRoutes";
// Redux
import { Provider } from "react-redux";
import store from "./store";


function App()
{
    return (
        <Provider store={store}>
            <div className="App">
                <AppRoutes />
            </div>
        </Provider>
    );
}

export default App;
