import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
    const [code, setCode] = useState("");
    const location = useLocation();

    console.log("sdfsf");
    console.log(location);
    useEffect(() => {
        const params = window.location.search;

        const code = params.substring(
            params.indexOf("?code=") + 6,
            params.indexOf("&")
        );

        console.log(code);

        if (code) {
            const exchangeCodeForToken = async () => {
                try {
                    const response = await axios.get(
                        `http://10.150.149.154:8080/login/oauth2/code/google?code=${code}`,
                        {
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded",
                            },
                        }
                    );

                    const { accessToken, refreshToken } = response.data;

                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("refreshToken", refreshToken);

                    console.log("Access Token:", accessToken);
                    console.log("Refresh Token:", refreshToken);
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            };

            exchangeCodeForToken();
        }
    }, []);

    return (
        <div>
            <span>로그인결과창</span>
            <a href="/">돌아가기</a>
        </div>
    );
};

export default Login;
