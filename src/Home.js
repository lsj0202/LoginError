const Home = () => {
  const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=977860049416-faqog6g742c0qqs4epucuu5biobgr3ph.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login/oauth2/code/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;

  return (
    <div>
      <a href={authUrl}>Google 로그인</a>
    </div>
  );
};

export default Home;
