<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>
      <h1>
        JotBrain
      </h1>
    </header>
    <div id="main">
      <article>
        <router-view/>
      </article>
      <nav>
        <ul>
          <!-- <li><router-link to="/">Home</router-link></li> -->
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/todo">ToDo</router-link></li>
        </ul>
      </nav>
      <!-- <aside>Aside</aside> -->
    </div>
    <footer>Footer</footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}

* {
  box-sizing: border-box;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}
#main {
  display: flex;
  flex: 1;
}
#main > article {
  flex: 1;
}
#main > nav,
#main > aside {
  flex: 0 0 20vw;
  background: beige;
}

#main > nav {
  order: -1;
  background-color: black;
}
#main > nav ul {
  list-style-type: none;
  padding: 0;
}

#main > nav li {
  display: block;
  margin: 0 1.2rem;
  line-height: 1.8;
}
#main > nav a {
  font-size: 1.2rem;
  color: antiquewhite;
  text-decoration: none;
}
#main > nav a:hover {
  color: #fff;
  text-decoration: none;
}

header > h1 {
  color: #fff;
  text-align: left;
  margin: 0;
  padding: 0;
}

header, footer {
  background: #234;
  height: 12vh;
}
header, footer, article, nav, aside {
  padding: 1em;
}

</style>
