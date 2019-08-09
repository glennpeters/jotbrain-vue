<template>
  <div class="todo-list">
    <h1>ToDo List</h1>

    <div class="controls">
      <button v-on:click="addToDo">Add New Item</button>
      <button class="warning" v-on:click="clearAll">Clear All</button>
    </div>

    <div v-if="listValid">
      <transition-group tag="div" name="slide-fade">
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
      </transition-group>
    </div>
    <div v-if="!listValid">
      <p>No list items yet.</p>
    </div>

  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'

// import _ from 'lodash';

export default {
  name: 'ToDo',
  components: {
    'todo-item': ToDoItem
  },
  computed: {
    listValid: function () {
      return (Array.isArray(this.todos) && this.todos.length)
    }
  },
  methods: {
    createToDo: function () {
      // local constructor
    },
    clearAll: function () {
      console.log('clearAll')

      if (confirm('Are you sure you want to clear all items?')) {
        this.todos = []
      }
    },
    addToDo: function () {
      let date = new Date()
      let dateString = date.toISOString()
      let newID = Date.now() // Ideally, we'd be generating a guid properly

      console.log('Adding ToDo item')

      this.todos.unshift(
        {
          id: newID,
          note: '',
          priority: 2,
          created: dateString,
          due: '2019-08-09'
        }
      )
    },
    saveData: function () {
      // NOTE: Ideally only save when validated (i.e. no blank text)

      localStorage.setItem('todos', this.todos)
    },
    loadData: function () {
      this.todos = [
        {
          id: 76375213,
          note: 'Add New Item',
          priority: 1,
          created: '2019-08-08',
          due: '2019-08-09'
        },
        {
          id: 1625499,
          note: 'localStorage',
          priority: 2,
          created: '2019-08-08',
          due: '2019-08-09'
        },
        {
          id: 727623,
          note: 'Check for valid ToDo on save',
          priority: 3,
          created: '2019-08-08',
          due: '2019-08-09'
        },
        {
          id: 723767236,
          note: 'Create item class and constructor',
          priority: 2,
          created: '2019-08-08',
          due: '2019-08-09'
        },
        {
          id: 3746374,
          note: 'Get milk',
          priority: 23,
          created: '2019-08-08',
          due: '2019-08-09'
        },
        {
          id: 832748,
          note: 'Practice Go',
          priority: 27,
          created: '2019-08-08',
          due: '2019-08-13'
        },
        {
          id: 1763746,
          note: 'Sleep',
          priority: 39,
          created: '2019-08-08',
          due: '2021-08-27'
        }
      ]
    }
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      todos: []
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      this.loadData()

      console.log('ToDo mounted', this.todos)
    })
  }
  // watch: {
  //   name(newName) {
  //     localStorage.name = newName;
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.controls {
  padding: 0.4rem;
}

button {
  background: #03376b;
  color: #ccc;
  font-size: 0.8rem;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
}

button.warning {
  background-color: #ac0202;
}

button.rounded {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

</style>
