const Staff = require("../models/staff.models");


exports.findAllStaffs = (res) => {

    Staff.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Staffs."
            });
        });
}

exports.createStaff = (Staff) => {
    // Save Staff in the database
    Staff.create(Staff)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Staff."
            });
        });
}

exports.findStaffById = (id, res) => {
    Staff.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Staff with id=" + id
            });
        });
}

exports.deleteStaffById = (id, res) => {
    Staff.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Staff was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Staff with id=${id}. Maybe Staff was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Staff with id=" + id
            });
        });
}

exports.updateStaff = (id, req, res) => {
    Staff.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Staff was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Staff with id=${id}. Maybe Staff was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Staff with id=" + id
            });
        });
}

exports.deleteAllStaffs = (res) => {
    Staff.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Staff were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}