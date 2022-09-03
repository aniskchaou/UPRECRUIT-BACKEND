
const { findAllJobs, createJob, findJobById, deleteJobById, updateJob, deleteAllJobs } = require("../../services/job.services");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user
    const user = {
        username: req.body.username,
        birthday: req.body.birthday
    }
    createJob(user)
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    findAllJobs(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findJobById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateJob(id, req)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteJobById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllJobs(res)
};