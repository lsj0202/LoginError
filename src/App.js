import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./Home";
import Login from "./Login";

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login/oauth2/code/google"
                        element={<Login />}
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
