
var sequelize = require("../db/init.sequelize.js");
var Sequelize = require('sequelize');

var JobOffer = sequelize.define('job_offer', {
    post: Sequelize.STRING,
    description: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    location: Sequelize.STRING,
    requirement: Sequelize.STRING,
    active: Sequelize.STRING,
    salaryFrom: Sequelize.STRING,
    salaryTo: Sequelize.STRING,
    hideSalary: Sequelize.STRING,
    jobType: Sequelize.STRING,
    position: Sequelize.STRING,
    gender: Sequelize.STRING,
    feature: Sequelize.STRING,
    degree: Sequelize.STRING,
    experienceLevel: Sequelize.STRING,
    deadline: Sequelize.STRING

});

module.exports = JobOffer;