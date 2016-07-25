var express = require('express');
var router = express.Router();
var CustomersController = require('../controllers/CustomersController.js');

/*
 * GET
 */
router.get('/', function(req, res) {
    CustomersController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    CustomersController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    CustomersController.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    CustomersController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    CustomersController.remove(req, res);
});

module.exports = router;