const Apply = require("../models/apply.models");





exports.findInitialQualification=(res)=>{
 Apply.findAll({
                   where: { status: "1" }
               })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}
exports.findFirstInterview=(res)=>{
 Apply.findAll({
                   where: { status: "2" }
               })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}

exports.findSecondInterview=(res)=>{
 Apply.findAll({
                   where: { status: "3" }
               })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}

exports.findContractSigned=(res)=>{
 Apply.findAll({
                   where: { status: "5" }
               })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}

exports.findContractProposal=(res)=>{
 Apply.findAll({
                   where: { status: "4" }
               })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}
exports.findAllApplys = (res) => {

    Apply.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Applys."
            });
        });
}

exports.createApply = (apply,res) => {
    // Save Apply in the database
    Apply.create(apply)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Apply."
            });
        });
}

exports.findApplyById = (id, res) => {
    Apply.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Apply with id=" + id
            });
        });
}

exports.deleteApplyById = (id, res) => {
    Apply.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Apply was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Apply with id=${id}. Maybe Apply was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Apply with id=" + id
            });
        });
}

exports.updateApply = (id, req, res) => {
    Apply.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Apply was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Apply with id=${id}. Maybe Apply was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Apply with id=" + id
            });
        });
}

exports.deleteAllApplys = (res) => {
    Apply.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Apply were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}