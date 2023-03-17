const Project = require('../project/project-model')


exports.checkTask = async function (req, res, next) {
    const { task_description, project_id } = req.body

    const myProj = await Project.getById(project_id)

    console.log(`Project.getById(project_id): ${myProj}`)
    if (!task_description ||
        typeof task_description !== 'string' ||
        !task_description.trim()) {
        next({ status: 400, message: 'Tasks need a description' })
    }
    else if (
        !project_id ||
        typeof project_id !== 'number' ||
        project_id < 1 ||
        myProj === undefined
    ) {
        next({status:400, message: 'Tasks need a valid project_id'})
    }
    else {
        console.log()
        next()
    }
}