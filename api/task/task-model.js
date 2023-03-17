const db = require('../../data/dbConfig')

const getTasks = async () => {
    const tasks = await db('tasks as t' )
        .select(
            't.*',
            'p.project_name',
            'p.project_description')
        .join('projects as p', 'p.project_id', 't.project_id')

        // const result = await db('schemes as sc')
        // .select('st.step_id', 
        //   'st.step_number', 
        //   'st.instructions', 
        //   'sc.scheme_name' )
        // .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
        // .orderBy('st.step_number')
        // .where('sc.scheme_id', scheme_id)

    const fixedTasks = tasks.map(task => {
            task.task_completed = !!task.task_completed
            return task
        })
    return fixedTasks;
}

const getById = async (id) => {
    try {
        const task = await db('tasks as t' )
        .select(
            't.*',
            'p.project_name',
            'p.project_description')
        .join('projects as p', 'p.project_id', 't.project_id')
        .where('task_id', id).first()

        task.task_completed = !!task.task_completed;
        return task
    }
    catch (err) { return err }
}

const addTask = async (task) => {
    try {
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