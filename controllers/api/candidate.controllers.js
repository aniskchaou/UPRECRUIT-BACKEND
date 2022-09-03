
const {findAllCandidates, createCandidate, findCandidateById, deleteCandidateById, updateCandidate, deleteAllCandidates } = require("../../services/candidate.services");

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
    createCandidate(user)
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    findAllCandidates(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findCandidateById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateCandidate(id, req)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCandidateById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllCandidates(res)
};