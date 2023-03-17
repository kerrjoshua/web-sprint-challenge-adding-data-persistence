
const checkProj = (req, res, next) => {
    const { project_name } = req.body;
    if (!project_name) {
        next({
            status: 400,
            message: 'Projects must have a name'
        })
    } else {
        next()
    }
}

module.exports = {
    checkProj
}