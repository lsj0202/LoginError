import axios from 'axios';
import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    const params = window.location.search;

    const code = params.substring(params.indexOf('?code=') + 6, params.indexOf('&'));

    console.log(code);

    if (code) {
      const params = new URLSearchParams();
      params.append('code', code);

      const exchangeCodeForToken = async () => {
        try {
          const res = await axios.get(
            `http://10.150.149.154:8080/login/oauth2/code/google?${params}`,
            {},
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }
          );

          console.log(res);
          //   const { access, refresh } = response.data.token;
          //   localStorage.setItem('accessToken', access);
          //   localStorage.setItem('refreshToken', refresh);

          //   console.log('Access token', access);
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