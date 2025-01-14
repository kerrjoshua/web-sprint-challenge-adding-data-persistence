const db = require('../../data/dbConfig')

const getResources = async () => {
    try {
        return await db('resources')

    } catch (err) {
        return err
    }
}

const getByName = async(name) => {
    try{
        return await db('resources').where('resource_name', name).first()
    }
    catch (err) { return err}
}

const getById = async(id) => {
    try{
        return await db('resources').where('resource_id', id).first()
    }
    catch (err) { return err}
}

const addResource = async (resource) => {
    try{
        const [resource_id] = await db('resources').insert(resource)
        return getById(resource_id)
    }
    catch (err) {
        return err
    }
}

module.exports = {
    getResources,
    addResource,
    getByName

}