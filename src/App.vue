<template>
  <div id="app">
    <nav id="nav">
      <!-- header -->
      <header>
        <HelloWorld/>
      </header>
    </nav>
    <plant-list/>
    <to-do-list/>
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
.control-buttons {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
}
.button-secondary {
  display: inline-block;
  position: relative;
  border: 0;
  margin: -10px 10px;
}
.button-secondary:after {
  position: absolute;
  content: "";
  width: 0;
  height: 1.5px;
  background-color: var(--sec-color);
  bottom: 0px;
  left: 0;
  transition: all ease-in 0.25s;
}
.button-secondary:hover:after {
  width: 100%;
}
ul.todo-list {
  padding: 0;
  margin-bottom: 30px;
}
ul.todo-list li {
  position: relative;
  list-style-type: none;
  display: block;
  margin: 10px 0;
  border: none;
  cursor: default;
  border-bottom: 1px solid #fff;
  border-radius: 0.25rem;
  padding: 12px 38px 12px 49px;
  overflow: hidden;
}
ul.todo-list li:hover {
  border-top: 1px solid #fff;
  background-color: #ff6b019f;
}
ul.todo-list.archived li {
  background-color: #ff56016c;
}
.todo-text {
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
}
ul.todo-list li .delete {
  position: absolute;
  height: 100%;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  width: 0;
  background-color: var(--main-color);
  color: #fff;
  transition: all ease-in 0.25s;
}
ul.todo-list li .delete:after {
  position: absolute;
  content: "x";
  width: 10px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  transition: all ease-in 0.25s;
}
ul.todo-list li:hover .delete {
  width: 44px;
  border-radius: 2rem 0 0rem 2rem;
  opacity: 1;
}
ul.todo-list li:hover .delete:after {
  transform: translate(-50%, -50%) scale(1);
}
.todo-checkbox {
  position: absolute;
  display: none;
}
.todo-checkbox + label {
  position: absolute;
  cursor: pointer;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  border-radius: 2rem;
  background-color: #fff;
}
.todo-checkbox:checked + label:after {
  position: absolute;
  content: "";
  top: 30%;
  left: 50%;
  height: 3px;
  width: 6px;
  border: solid #052323;
  border-width: 0 0 2px 2px;
  transform-origin: center center;
  transform: rotate(-45deg) translate(-50%, -50%);
}
.todo-checkbox:checked + label:after {
  display: block;
}
.todo-checkbox:checked ~ .todo-text {
  color: var(--dark-color);
  text-decoration: line-through;
}
.todo-item-enter-active,
.todo-item-leave-active {
  transition: opacity ease 0.25s, transform ease-in-out 0.3s;
  transform-origin: left center;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
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
  .shape,
  .shape-img-bg,
  .shape-bg,
  .shape2,
  .shape3,
  .shape-orange,
  .shape-left,
  .shape-accent {
    display: none;
  }
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
