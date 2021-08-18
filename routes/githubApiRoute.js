const express =  require('express');
const { Module } = require('module');
const githubApiController = require('../controllers/githubApiController');
const router = express.Router();

router.get('/AllListRepos',githubApiController.getAllRepos);


module.exports = router;