//  `/api/projects` router buraya
const router = require('express').Router();
const Projects = require('./model');

router.get('/', async (req, res, next) => {

    try {
        
        const projects= await Projects.getProjects();
        res.status(200).json(projects);

    } catch (error) {
        next(error);
    }
});
router.post('/', async(req, res, next) => {

    try {

        const postedProject = await Projects.createProject(req.body);

        res.json(postedProject)
        
    } catch (error) {
        next(error)
    }
});

module.exports = router;