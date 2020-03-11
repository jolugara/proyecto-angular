'use strict'

var express = require('express');
var ProyectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.post('/test', ProyectController.test);
router.post('/save-project', ProyectController.saveProyect);
router.get('/project/:id?', ProyectController.getProject);
router.get('/projects', ProyectController.getProjects);
router.put('/project/:id', ProyectController.updateProject);
router.delete('/project/:id', ProyectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware, ProyectController.uploadImage);
router.get('/get-image/:image', ProyectController.getImageFile);


module.exports = router;