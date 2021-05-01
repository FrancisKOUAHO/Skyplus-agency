<template>
  <form>
    <div class="body-color">
      <div class="card">
        <h1 class="card__title">Connexion</h1>
        <div class="form-row">
          <input
              class="form-row__input"
              type="text"
              placeholder="Adresse mail"
              required
          />
        </div>
        <div class="form-row">
          <input
              class="form-row__input"
              type="password"
              placeholder="Mot de passe"
              required
          />
        </div>
        <div class="text-red-600 my-2">message error</div>
        <div class="form-row">
          <button class="button">
            <span>Connexion</span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
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

.body-color {
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
}

</style>
