const db = require('../../data/dbConfig')

const getTasks = async () => {
    const tasks = await db('tasks')
    const fixedTasks = tasks.map(task => {
        task.task_completed = !!task.task_completed
        return task
    })
    return fixedTasks;
}

const addTask =  () => {
    return Promise.resolve('task added')
    
}


module.exports = {
    getTasks,
    addTask,
}