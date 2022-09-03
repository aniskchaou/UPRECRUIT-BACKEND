const Candidate = require("../models/candidate.models");


exports.findAllCandidates = (res) => {

    Candidate.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Candidates."
            });
        });
}

exports.createCandidate = (Candidate) => {
    // Save Candidate in the database
    Candidate.create(Candidate)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Candidate."
            });
        });
}

exports.findCandidateById = (id, res) => {
    Candidate.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Candidate with id=" + id
            });
        });
}

exports.deleteCandidateById = (id, res) => {
    Candidate.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Candidate was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Candidate with id=${id}. Maybe Candidate was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Candidate with id=" + id
            });
        });
}

exports.updateCandidate = (id, req, res) => {
    Candidate.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Candidate was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Candidate with id=${id}. Maybe Candidate was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Candidate with id=" + id
            });
        });
}

exports.deleteAllCandidates = (res) => {
    Candidate.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Candidate were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}