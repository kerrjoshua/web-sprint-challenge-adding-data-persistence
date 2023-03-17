
const projects = [
    {
        project_name: 'Build a shelf',
        project_description: 'Make a piece of furniture for storing books or other knick knacks.'
    },
    { project_name: 'Pitch a tent' },
    { project_name: 'Make a slideshow presentation' }
]

const resources = [
    // connected to the bookshelf project
    { resource_name: 'Tool Kit', 
        resource_description: 'a simple set of tools including a hammer, nails, screwdriver, etc' },
    { resource_name: 'Lumber' },
    { resource_name: 'Power Saw' },
    { resource_name: 'Fasteners' },
    // project - pitch a tent
    { resource_name: 'Tent canvas' },
    { resource_name: 'Tent poles' },

    // project - make a slideshow presentation
    { resource_name: 'Computer' },
    { resource_name: 'Slideshow Software' },
    { resource_name: 'Content' },
]

const tasks = [
    // bookshelf project
    { task_description: 'cut lumber', task_notes: 'optional...', project_id: 1 },
    { task_description: 'prepare guide holes', task_notes: 'optional...', project_id: 1 },
    { task_description: 'assemble shelf', task_notes: 'optional...', project_id: 1 },
    // tent project
    { task_description: 'spread out tent canvas', task_notes: 'optional...', project_id: 2 },
    { task_description: 'raise tent', task_notes: 'optional...', project_id: 2 },
    // slideshow project
    { task_description: 'set theme and outline', task_notes: 'optional...', project_id: 3 },
    { task_description: 'insert content', task_notes: 'optional...', project_id: 3 },
]

const task_resources = [
    // bookshelf
    { task_id: 1, resource_id: 2 },
    { task_id: 1, resource_id: 3 },
    { task_id: 2, resource_id: 2 },
    { task_id: 2, resource_id: 1 },
    { task_id: 3, resource_id: 2 },
    { task_id: 3, resource_id: 1 },
    { task_id: 3, resource_id: 4 },
    // tent
    { task_id: 4, resource_id: 5 },
    { task_id: 5, resource_id: 5 },
    { task_id: 5, resource_id: 6 },
    // slideshow
    
    { task_id: 6, resource_id: 7 },
    { task_id: 6, resource_id: 8 },
    { task_id: 7, resource_id: 9 },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('task_resources').insert(task_resources)
}