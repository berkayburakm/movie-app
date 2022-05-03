import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./stores/rootReducer";
import Home from "./pages";
import MovieDetail from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";
import Header from "./components/Header";

const App = () => {
    const middleware = [thunk];
    const store = createStore(
        reducers,
        {},
        composeWithDevTools(applyMiddleware(...middleware))
    );
    return (
        <div>
            <Router>
                <Header />
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/movie/:id"
                            element={<MovieDetail type="movie" />}
                        />
                        <Route
                            path="/tv/:id"
                            element={<MovieDetail type="tv" />}
                        />
                        <Route path="/person/:id" element={<PersonDetail />} />
                    </Routes>
                </Provider>
            </Router>
        </div>
    );
};

export default App;
