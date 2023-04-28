// `Proje` modeli buraya
const db = require('../../data/dbConfig');

 function getProjects(){
    return db('Projects');
};

async function createProject(project){

    const [project_id] = await db('Projects').insert(project);

    const newProject = await db('Projects')
        .where('project_id', project_id).first();

    return newProject;
};

module.exports={
    getProjects,
    createProject,
};