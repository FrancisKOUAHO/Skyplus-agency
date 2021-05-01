<template>
  <form>
    <div class="body-color">
      <div class="card">
        <h1 class="card__title">Connexion</h1>
        <div class="form-row">
          <input
              class="form-row__input"
              type="email"
              placeholder="Adresse mail"
              v-model="email"
              required
          />
        </div>
        <div class="form-row">
          <input
              class="form-row__input"
              type="password"
              placeholder="Mot de passe"
              v-model="password"
              required
          />
        </div>
        <div class="text-red-600 my-2">{{ error }}</div>
        <div class="form-row">
          <button class="button">
            <span>Connexion</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {defineComponent} from 'vue'
import axios from 'axios'


export default defineComponent({
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
          .then(res => {
            //if successfull
            if (res.status === 200) {
              localStorage.setItem('token', res.data.token);
              this.$router.push('/');
            }
          }, err => {
            console.log(err.response);
            this.error = err.response.data.error
          })
    }
  }
})
</script>

<style scoped>

</style>
