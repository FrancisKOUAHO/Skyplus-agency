<template>
  <div style="overflow-y: hidden;">
    <form @submit.prevent="loginUser">
      <div class="login">
        <div class="card">
          <h1 class="card__title">Connexion</h1>
          <div class="form-row">
            <input
                class="form-row__input"
                type="text"
                v-model="login.email"
                placeholder="Adresse mail"
                required
            />
          </div>
          <div class="form-row">
            <input
                class="form-row__input"
                type="password"
                v-model="login.password"
                placeholder="Mot de passe"
                required
            />
          </div>
          <!--        <div class="text-red-600 my-2"> data.message</div>-->
          <div class="form-row">
            <button class="button" type="submit" :disabled="loading">
              <span v-if="loading" style="color: white">Connexion en cours...</span>
              <span v-else>Connexion</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import swal from "sweetalert";
import axios from 'axios';


export default defineComponent({
  name: "Login",
  data() {
    return {
      success: false,
      error: false,
      loading: false,
      login: {
        email: "",
        password: "",
      }
    };
  },
  setup() {
    let body = document.querySelector('body');
    body?.setAttribute('class', 'body-color8 creationHeight')
    let navBar = document.querySelector('nav');
    let footer = document.querySelector('footer');
    navBar.style.display = 'none';
    footer.style.display = 'none';
  },
  methods: {
    async loginUser() {
      try {
        this.loading = true
        let response = await axios.post("https://agencyskyplus.herokuapp.com/user/login", this.login);
        this.reset();
        this.success = true;
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Connexion réussie", "Error");
          await this.$router.push({name: 'Dashboard'});
        }
      } catch (err) {
        this.error = true;
        swal("Error", "Quelque chose a mal tourné", "error");
      }
    },
    reset() {
      this.success = false;
      this.error = false;
      for (let field in this.login) {
        this.login[field] = null;
      }
    }
  }
})
</script>

<style scoped>
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}

.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}

.form-row__input::placeholder {
  color: #aaaaaa;
}

img {
  max-width: 100%;
  border-radius: 8px;
}

.card {
  max-width: 100%;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
}

.card__title {
  text-align: center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color: #666;
  font-weight: 500;
}

.button {
  background: #2196F3;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: .4s background-color;
}

.card__action {
  color: #2196F3;
  text-decoration: underline;
}

.card__action:hover {
  cursor: pointer;
}

.button:hover {
  cursor: pointer;
  background: #1976D2;
}

.button--disabled {
  background: #cecece;
  color: #ececec
}

.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 32px;
}
</style>
