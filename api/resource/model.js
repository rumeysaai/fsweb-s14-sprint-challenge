// `Resource` modeli buraya
const db = require('../../data/dbConfig');

function getResources(){
    return db('Resources');
}

async function createResource(resource){

    const [resource_id] = await db('Resources').insert(resource);

    const newResource = await db('Resources').where('resource_id', resource_id).first();

    return newResource;

}

module.exports={
    getResources,
    createResource,
}