
<template>
  <div class="hello">
    <h1>About</h1>

    <div class="notes">
      <h2>Notes</h2>

      <ul>
        <li>
          There are security warnings with package dependencies,
          I'm not fixing these currently due to time constraints
        </li>
        <li>
          Spent a lot of time "fixing" ESLint issues (like semicolons)
          that could have been avoided
          with better configuration
        </li>
      </ul>
    </div>

    <div class="links">
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a
            href="https://vuejs.org"
            target="_blank"
          >
            Core Docs
          </a>
        </li>
        <li>
          <a
            href="https://forum.vuejs.org"
            target="_blank"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="https://chat.vuejs.org"
            target="_blank"
          >
            Community Chat
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/vuejs"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <br>
        <li>
          <a
            href="http://vuejs-templates.github.io/webpack/"
            target="_blank"
          >
            Docs for This Template
          </a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a
            href="http://router.vuejs.org/"
            target="_blank"
          >
            vue-router
          </a>
        </li>
        <li>
          <a
            href="http://vuex.vuejs.org/"
            target="_blank"
          >
            vuex
          </a>
        </li>
        <li>
          <a
            href="http://vue-loader.vuejs.org/"
            target="_blank"
          >
            vue-loader
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
          >
            awesome-vue
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.notes {
  display: inline-block;
  max-width: 30rem;
}

.notes ul {
  text-align: left;
}

.links ul {
  list-style-type: none;
  padding: 0;
}
.links li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
