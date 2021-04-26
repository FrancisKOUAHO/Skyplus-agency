<template>
  <section>
    <ul>
      <li><a href="https://www.facebook.com/search/top?q=skyplusagency"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      </li>
      <li><a href="https://www.instagram.com/skyplusagency/?hl=fr"><i class="fa fa-instagram"
                                                                      aria-hidden="true"></i></a></li>
      <li><a href="mailto:contact@example.com"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
      <li><a href="tel:+33500000000"><i class="fa fa-mobile" aria-hidden="true"></i></a></li>

    </ul>
  </section>

</template>

<script>
export default {
  name: "ReseauSociaux"
}
</script>

<style scoped>

section {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  position: relative;
  display: flex;
  z-index: 2;
}

ul li {
  position: relative;
  list-style: none;
  margin: 10px;
}

ul li a {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 2em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  overflow: hidden;
}

ul li a:hover {
  transform: translateY(-20px);
}

ul li a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: skewX(45deg) translateX(150px);
  transition: 0.5s;
}

ul li a:hover::before {
  transform: skewX(45deg) translateX(-150px);
}

</style>
