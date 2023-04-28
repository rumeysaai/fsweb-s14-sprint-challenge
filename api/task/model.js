// bu`Task` modeli buraya
const db = require('../../data/dbConfig');

async function getTasks(){
    const tasks = await db('Tasks as t')
            .leftJoin('Projects as p', 't.project_id', 'p.project_id');
    
    return tasks;
}

async function createTask(task){

    const [task_id] = await db('Tasks').insert(task);

    const newTask = await db('Tasks').where('task_id', task_id).first();

    return newTask;

}

module.exports={
    getTasks,
    createTask,
}