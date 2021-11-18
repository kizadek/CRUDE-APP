const router = require("express").Router()

const controllers = require("../controllers/Admin/CRUD");


/**
 *  @description Root Route
 *  @method GET /
 */


/**
 *  @description add users
 *  @method GET /add-user
 */

/**
 *  @description for update user
 *  @method GET /update-user
 */


// API

router
    .route('/api/v1/students')
        .post([],controllers.create)
        .get([],controllers.find);

router
    .route('/api/v1/students/:id')
        .put([],controllers.update)
        .delete([],controllers.delete)


module.exports = router;


