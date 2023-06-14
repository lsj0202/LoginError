import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=977860049416-faqog6g742c0qqs4epucuu5biobgr3ph.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    const params = window.location.search
    
    const code = params.substring(params.indexOf('?code=')+6, params.indexOf('&'))

    console.log(code);

    if (code) {
      const params = new URLSearchParams();
      params.append('code', code);

      const exchangeCodeForToken = async () => {
        try {
          const response = await axios.post(`http://woongbin-p-e.kr/login/oauth2/code/google?${params}`, {}, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          });

          const { access, refresh } = response.data.token;
          localStorage.setItem('accessToken', access);
          localStorage.setItem('refreshToken', refresh);

          console.log('Access token', access);
        } catch (error) {
          console.log('Google 로그인 오류:', error);
        }
      };

      exchangeCodeForToken();
    }
  }, []);

  return (
    <div>
      <a href={authUrl}>Google 로그인</a>
    </div>
  );
};

export default App;
