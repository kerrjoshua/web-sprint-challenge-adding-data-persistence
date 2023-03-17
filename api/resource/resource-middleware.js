const Resource =  require('./resource-model')

const checkResource = (req, res, next) => {
    const name = req.body.resource_name
    if (!name ||
        typeof name !== 'string' ||
        !name.trim()
    ) {
        next({
            status: 400,
            message: 'Resources must have a name'
        })
    } else {
        next()
    }
}

const resourceNameUnique = (req, res, next) => {
    Resource.getByName(req.body.resource_name)
        .then(exists => {
            if (!exists) {
                next()
            } else {
                next({
                    status:400,
                    message: `There is already a resource with the name ${req.body.resource_name}`
                })
            }
        })
        .catch(next)
}

module.exports = {
    checkResource,
    resourceNameUnique
}