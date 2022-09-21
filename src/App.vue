<template>
  <div>
    <img id="kakaoLoginBtn" src="./assets/login/kakao-login-btn.png" width="150"/><br />
    <img id="naverLoginBtn" src="./assets/login/naver-login-btn.png" width="150"/><br />
    <img id="googleLoginBtn" src="./assets/login/google-login-btn.png" width="150"/><br />

    <!-- <button v-on:click="kakaoLoginBtn">
      <img src="./assets/login/kakao-login-btn.png" width="150" @click="kakaoLoginBtn"/>
    </button>

    <button v-on:click="kakaoLoginBtn">
      <img src="./assets/login/naver-login-btn.png" width="150" />
    </button>

    <button v-on:click="kakaoLoginBtn">
      <img src="./assets/login/google-login-btn.png" width="150" />
    </button> -->
  </div>
</template>

<script>
const KAKAO_REST_API_KEY = "aedbaa63a901249eb9a7aeeec2b36418";
const KAKAO_REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
const getKakao = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = "fnKLjKFVb2cTa0SzBrYx";
const NAVER_CLIENT_SECRET = "ZooB0MVs14";
const NAVER_CALLBACK_URL = "http://localhost:3000/auth/naver/callback";
const getNaver = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_CLIENT_SECRET}&redirect_uri=${NAVER_CALLBACK_URL}`;

const GOOGLE_CLIENT_ID = "AIzaSyDzRprn6oZ5_4QY3IBRQGCq3NK1eZDzHvg";
const GOOGLE_REDIRECT_URI = "http://localhost:3000/auth/google/callback";
const getGoogle = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_REDIRECT_URI}&client_id=${GOOGLE_CLIENT_ID}`;


export default {
  name: "App",
  mounted() {
    const kakaoLoginBtn = document.querySelector("#kakaoLoginBtn");
    function kakaoLogin() {
      window.location.assign(getKakao);
    }
    kakaoLoginBtn.onclick = kakaoLogin;
    
    const naverLoginBtn = document.querySelector("#naverLoginBtn");
    function naverLogin() {
      window.location.assign(getNaver);
    }
    naverLoginBtn.onclick = naverLogin;

    const googleLoginBtn = document.querySelector("#googleLoginBtn");
    function googleLogin() {
      alert(GOOGLE_REDIRECT_URI);
      window.location.assign(getGoogle);
    }
    googleLoginBtn.onclick = googleLogin;
  },
  methods: {
    kakaoLoginBtn() {
      const params = {
        redirectUri: "http://localhost:8080/auth",
      };
      window.Kakao.Auth.authorize(params);
    },
  }
}
</script>

<style scoped>
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

div {
  text-align: center;
  transform: translateY(50%);
}

button {
  background-color: white;
  border-width: 0px;
}
</style>