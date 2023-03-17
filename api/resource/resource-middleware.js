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
    console.log('resourceNameUnique')
    next()
}

module.exports = {
    checkResource,
    resourceNameUnique
}