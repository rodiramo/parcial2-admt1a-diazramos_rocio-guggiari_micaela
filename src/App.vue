<template>
  <div id="app">
    <nav id="nav">
      <!-- header -->
      <header>
        <HelloWorld />
      </header>
    </nav>
    <plant-list />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import PlantList from "./components/PlantList";
export default {
  name: "app",
  components: {
   HelloWorld,
   PlantList,
  },
};
</script>

<style lang="scss">
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
  overflow-x: hidden;
  width: 80%;
  margin: 0 auto;
}
/*my plants*/
form label {
  display: block;
  text-align: center;
  font-size: 1.2em;
}
.button,
input,
textarea,
select {
  line-height: 2em;
  border-radius: 2rem;
  border: 0;
  display: inline-block;
  margin: 20px 0;
  padding: 0.2em 1em;
  font-size: 1em;
}
input[type="text"] {
  min-width: 80%;
  transition: all ease-in 0.25s;
}
input:focus {
  outline: none;
}
textarea:focus {
  outline: none;
}
input::placeholder {
  color: #024f4e;
  font-style: italic;
}
textarea::placeholder {
  color: #024f4e;
  font-style: italic;
}
.button {
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-style: solid;
}
.button-plant-add {
  float: right;
  background-color: #e55757;
  transition: all 200ms;
}
.button-plant-add:hover {
  color: #fff;
  background-color: #052323;
}
.button-add {
  border: 2px solid #fff;
  border-radius: 2rem;
  background-color: #e99b4d9f;
  color: #ffff;
  pointer-events: none;
  transition: all ease-in 0.25s;
  font-size: 2.2em;
  line-height: 0.5em;
  padding: 0.3em 0.3em;
  float: right;
}
.button-add.active {
  background: #b9d4d4;
  pointer-events: visible;
}
.button-add.active:hover {
  background: var(--sec-color);
}
.button-add:active {
  transform: scale(0.95);
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
/*footer*/
footer {
  background: var(--dark-color);
  color: var(--white);
  bottom: 0;
  right: 0;
  left: 0;
  position: relative;
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
  .line {
    height: 1.5px;
    width: 500px;
    background: #fff;
  }
  nav ul li a {
    color: var(--white) !important;
  }
  nav ul li a:hover {
    color: var(--accent-color) !important;
  }
  .todo-wrapper,
  .form-plants {
    text-align: center;
    width: 90%;
  }
}
</style>
