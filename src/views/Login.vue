<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
    <input
      v-model="userData.username"
      type="text"
      placeholder="Kullanıcı Adı"
      class="input mb-3"
    />
    <input
      v-model="userData.password"
      type="password"
      placeholder="Şifre"
      class="input mb-3"
    />
    <button @click="onSubmit" class="default-button">Giriş Yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link
        :to="{ name: 'RegisterPage' }"
        class="text-red-900 hover:text-black"
      >
        Üye olmak istiyorum
      </router-link>
    </span>
  </div>
</template>
<script>
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods : {
    onSubmit(){
      // GET /posts?title=json-server&author=typicode
      const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
      .get(`/users?username=${this.userData.username}&password=${password}`)
      .then(login_response => {
        console.log(login_response);
      })
      .catch(e => console.log(e))
      // .finally(() => this.loader = false) //bu istek bittiğinde bir şey çalıştıracaksan
    }
  }
};
</script>
