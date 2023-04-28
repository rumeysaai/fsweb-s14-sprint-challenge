// `/api/resources` router buraya
const router = require('express').Router();
const Resources = require('./model');

router.get('/', async (req, res, next)=>{
    try {
        
        const resources = await Resources.getResources();
        res.status(200).json(resources);

    } catch (error) {
        next(error)
    }
});
router.post('/', async (req, res, next)=>{
    try {
        
        const postedResource = await Resources.createResource(req.body);
        res.status(200).json(postedResource);

    } catch (error) {
        next(error);
    }
});

module.exports = router;