<template>
  <div class="todo-list">
    <h1>ToDo List</h1>

    <div class="controls">
      <button v-on:click="addToDo">Add New Item</button>
      <button class="warning" v-on:click="clearAll">Clear All</button>
    </div>

    <div v-if="listValid" class="todoList">
      <div class="todoHeader">
        <!-- <div class="task">Task</div>
        <div class="priority"><span class="down-caret"></span></div> -->
      </div>
      <transition-group tag="div" name="slide-fade">
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" @remove="deleteItem" @save="saveItem" />
      </transition-group>
    </div>
    <div v-if="!listValid">
      <p>No list items yet.</p>
    </div>

  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'

import _ from 'lodash'

export default {
  name: 'ToDo',
  components: {
    'todo-item': ToDoItem
  },
  computed: {
    listValid: function () {
      return (Array.isArray(this.todos) && this.todos.length)
    },
    currentList: function () {
      return this.todos
    }
  },
  methods: {
    createToDo: function () {
      // local constructor
    },
    // This version uses an ID passed back by the event.
    // We could also embed the ID with a curried function
    deleteItem: function (deleteID) {
      console.log('ToDo: deleteItem :: deleteID = ', deleteID)

      this.todos = _.filter(this.todos, function (todo) {
        return todo.id !== deleteID
      })

      // console.log('ToDo: deleteItem :: removed = ', removed)
      console.log('ToDo: deleteItem :: todos = ', this.todos)
    },
    clearAll: function () {
      console.log('clearAll')

      if (confirm('Are you sure you want to clear all items?')) {
        this.todos = []
        this.saveData(this.todos)
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
    saveItem: function (newItem) {
      let replaceIndex = _.findIndex(this.todos, function (o) { return o.id === newItem.id })

      console.log('saveItem :: todos = ', this.todos)
      console.log('saveItem :: replaceIndex = ', replaceIndex)
      console.log('saveItem :: newItem = ', newItem)

      try {
        this.todos[replaceIndex] = newItem

        this.saveData(this.todos)
      } catch (error) {
        console.log(error)
      }
    },
    saveData: function (todos) {
      // NOTE: Ideally only save when validated (i.e. no blank text)

      localStorage.setItem('todos', JSON.stringify(todos))

      console.log('saveData :: localStorage = ', localStorage)
    },
    loadData: function () {
      this.todos = JSON.parse(localStorage.getItem('todos'))
    },
    initData: function () {
      let todos = [
        // {
        //   id: 76375213,
        //   note: 'Add New Item',
        //   priority: 1,
        //   created: '2019-08-08',
        //   due: '2019-08-09'
        // },
        // {
        //   id: 1625499,
        //   note: 'localStorage',
        //   priority: 2,
        //   created: '2019-08-08',
        //   due: '2019-08-09'
        // },
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

      console.log('initData (disabled): ', todos)
      // this.saveData(todos)
    }
  },
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      todos: []
    }
  },
  created: function () {
    this.initData()
  },
  mounted: function () {
    // Code that will run only after the
    // entire view has been rendered
    this.$nextTick(function () {
      this.loadData()

      console.log('mounted :: ToDo todos (after loadData) = ', this.todos)
    })
  }
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

.todoHeader {
  margin: 1em 0 0;
}

.todoHeader .task {
  width: 30em;
  display: inline-block;
  padding: 0;
  margin: 0;
}

.todoHeader .priority {
  width: 2em;
  display: inline-block;
  padding: 0;
  margin: 0;
}

.down-caret {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #ffffff transparent transparent transparent;
  display: inline-block;
  margin-left: 6px;
  top: -3px;
  position: relative;
  transform: rotate(0deg);
  transition: all .25s ease-in;
}

.open-caret {
  transform: rotate(180deg);
  transition: all .25s ease-out;
}

</style>
