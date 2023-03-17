const db = require('../../data/dbConfig')

const getProjects = async () => {
    try {
        return await db('projects')
    }
    catch (err) {
        return err
    }
}

const getById = async(id) => {
    try{
        const project = await db('projects').where('project_id', id).first()
        project.project_completed = !!project.project_completed;
        return project
    }
    catch (err) { return err}
}

const getByName = async(name) => {
    try{
        return await db('projects').where('project_name', name)
    }
    catch (err) { return err}
}

const addProject = async (project) => {
    try { 
      const [id] = await db('Projects').insert(project)
      console.log('id: ', id)
      return await getById(id)
    }
    catch (err) { return err}
}

module.exports = {
    getProjects,
    getById,
    addProject,
    getByName
}
