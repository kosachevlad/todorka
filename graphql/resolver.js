const todo = require('../models/todo')
const Todo = require('../models/todo')

const users = [
    {name: 'Igor', age: 30}
]

module.exports = {
    test() {
        return {
            count: Math.trunc(Math.random() * 10),
            users 
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++ ) {
            const random = Math.random() * (max- min) + min
            arr.push(random)
        }
        return arr
    },
    addTestUser({user: {name, age}}) {
        const user = {name, age}
        users.push( user )
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Fetch todos is not available')
        }
    },
    async createTodo({todo}) {
        try {
            return await Todo.create({
              title: todo.title,
              done: false
            })
          } catch (e) {
            throw new Error('Title id required')
          }
    }
}