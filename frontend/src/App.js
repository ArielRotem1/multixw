import { createContext, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home/Home"
import { Profile } from "./pages/Profile/Profile"
import { SignUp } from "./pages/SignUp/SignUp"
import { SignIn } from "./pages/SignIn/SignIn"
import { SinglePlayer } from "./pages/SinglePlayer/SinglePlayer"
import { MultiPlayer } from "./pages/MultiPlayer/MultiPlayer"
import { Navbar } from "./components/Navbar";
import { getCookie } from "./utils/CookiesUtil";

export const AppContext = createContext();


function App() {

    const [debug, setDebug] = useState('');

    const currDebug = new URLSearchParams(useLocation().search).get("debug");
    if(currDebug && currDebug !== "" && currDebug !== debug) setDebug(currDebug);

    const isLogin = getCookie("accessToken") !== undefined;

    return (
        <>
            <AppContext.Provider value={{ isLogin, debug }}>
                <Navbar />
                <Container className="mb-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/profile" element={<Profile />} /> */}
                        {/* <Route path="/signup" element={<SignUp />} /> */}
                        {/* <Route path="/signin" element={<SignIn />} /> */}
                        <Route path="/single-player" element={<SinglePlayer />} />
                        <Route path="/multiplayer" element={<MultiPlayer />} />

                    </Routes>
                </Container>
            </AppContext.Provider>
        </>
    );
}

export default App;
