<template>
  <div id="app">
    <nav id="nav">
      <ul class="nav-bar">
        <li><a href="#plants"  color="primary">My Plants</a></li>
        <li><a href="#add"  color="primary">Add Plants</a></li>
        <li><a href="#tasks"  color="primary">My Tasks</a></li>
      </ul>
      <!-- header -->
      <header>
        <HelloWorld/>
      </header>
    </nav>
    <div class="shape-bg"></div>
    <div class="shape-img-bg"></div>
    <div class="shape3"></div>
    <div class="shape"></div>
    <plant-list/>
    <to-do-list/>
    <footer>
      <a href="#nav" class="m-3 h3">
        <h3>Your Garden</h3>
      </a>
      <p class="text-white">&copy; 
        Este trabajo fue hecho por Micaela Giuggiari y Rocio Diaz Ramos,
        para la materia Aplicaciones para Dispositivos Mobiles.
      </p>
    </footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PlantList from "./components/PlantList";
import ToDoList from "./components/ToDoList";
export default {
  name: "app",
  components: {
    HelloWorld,
    PlantList,
    ToDoList
  },
};
</script>

<style lang="scss">
/*default*/
@font-face {
  font-family: "Great Warrior-Personal use";
  src: url("./fonts/GreatWarriorPersonaluse.woff2") format("woff2"),
    url("./fonts/GreatWarriorPersonaluse.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Caviar Dreams";
  src: url("./fonts/CaviarDreams-Bold.woff2") format("woff2"),
    url("./fonts/CaviarDreams-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
#app {
  font-family: "Caviar Dreams", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: linear-gradient(
    0deg,
    rgba(4, 46, 46, 1) 0%,
    rgba(2, 79, 78, 1) 8%,
    rgba(212, 212, 212, 1) 68%
  );
  overflow-x: hidden;
}
/*navigation*/
.nav-bar a{
  text-decoration: none;
  color:orange;
  font-family: 'Great Warrior-Personal use', 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
}
.nav-bar{
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 2rem;
  align-items: center;
  margin-bottom: 0;
  background: #ffffff42;
}
.nav-bar ul li a{
  text-decoration: none;
  transition: all 0.5s;
  font-size: 1.5rem;
}
.nav-bar a:hover{
  text-decoration: none;
  color: #024F4E;
  transition: all 0.5s;
  font-size: 1.5rem;
}
// shapes
.shape-bg{
  background: #4eaeab86;
  top: 15%;
  height: 400px;
  left: -10%;
  transform: rotate(-90deg);
  opacity: 5;
  border-radius: 0rem 150rem 0rem 150rem;
  position: absolute;
  width: 400px;
  overflow: hidden;
}
.shape{
  background-color: #032033c7;
  position: absolute;
  top: 10%;
  left: 80%;
  border-radius: 0rem 50rem 0rem 50rem;
  height: 436px;
  width: 440px;
}
.shape2{
  background-color: #4eaeab86;
  z-index: -1;
  position: absolute;
  top: -10%;
  left: 60%;
  border-radius: 100rem 0 100rem 0rem;
  height: 500px;
  width: 400px;
}
.shape3{
  background-color: #4eaeab86;
  position: absolute;
  top: 8%;
  left: 86%;
  transform: rotate(182deg);
  border-radius: 100rem 0 100rem 0rem;
  height: 500px;
  width: 400px;
}
.shape-img-bg {
  background: #49b67e;
  top: 35%;
  height: 206px;
  left: -5%;
  opacity: 0.75;
  border-radius: 0rem 150rem 0rem 150rem;
  transform: rotate(-10deg);
  position: absolute;
  width: 364px;
  overflow: hidden;
}


/* add plants */
#add h2 {
  color: black;
}
.form-plants {
  background: var(--main-color);
  color: var(--white);
  -webkit-box-shadow: -4px 16px 25px 1px rgba(239, 168, 41, 0.4);
  box-shadow: -4px 16px 25px 1px rgba(239, 168, 41, 0.4);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 80%;
  margin: 0 auto;
  border-radius: 2rem;
}
.form-plants input,
select {
  padding: 1rem;
}

// footer
footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #011a19;
}
footer a{
  text-decoration: none;
  color: #FFC804;
  font-family: 'Great Warrior-Personal use', 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  letter-spacing: .5px;
}
footer a:hover{
  color: #49b67e;
}
footer a h3{
  padding-bottom: 0.5em;
  padding-top: .5em;
}
footer p{
  color: #fff;
  padding-bottom: 1em;
  letter-spacing: .5px;
}
@media screen and (max-width: 1500px) {
  .shape-bg, .shape, .shape2, .shape3, .shape-img-bg {
    display: none;
  }
}
/* media querys*/
@media screen and (max-width: 768px) {
  
  nav {
    background: rgb(5, 35, 35);
    background: radial-gradient(
      circle,
      rgba(5, 35, 35, 1) 3%,
      rgba(4, 46, 46, 1) 28%,
      rgba(2, 79, 78, 1) 68%,
      rgb(255, 139, 7) 100%
    );
    color: var(--white);
    text-align: center;
  }
  .nav-bar{background: none;}
  .line {
    height: 1.5px;
    width: 500px;
    background: #fff;
  }
  .todo-wrapper,
  .form-plants {
    text-align: center;
    width: 90%;
  }
}
</style>