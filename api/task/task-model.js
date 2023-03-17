const db = require('../../data/dbConfig')

const getTasks = async () => {
    const tasks = await db('tasks')
    const fixedTasks = tasks.map(task => {
        task.task_completed = !!task.task_completed
        return task
    })
    return fixedTasks;
}

const getById = async(id) => {
    try{
        const task = await db('Tasks').where('task_id', id).first()
        task.task_completed = !!task.task_completed;
        return task
    }
    catch (err) { return err}
}

const addTask = async (task) => {
    try{
        const [id] = await db('Tasks').insert(task)
    
        return await getById(id)
    }
    catch (err) {
        return err
    }
}


module.exports = {
    getTasks,
    addTask,
}