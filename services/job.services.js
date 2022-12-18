const Job = require("../models/job.offer.models");


exports.findAllJobs = (res) => {

    Job.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Jobs."
            });
        });
}
exports.findJob = (job, res) => {


    const jobs = Job.findAll({
        where: {
            post: job.post,
            jobType: job.jobType,
            experienceLevel: job.experienceLevel
        }
    })



    /* .then(data => {
         res.send(data);
         res.render("elements/services", { viewTitle: 'Services',jobs })
     })
     .catch(err => {
         res.status(500).send({
             message:
                 err.message || "Some error occurred while retrieving Jobs."
         });
     });*/


    Promise
        .all([jobs])
        .then(responses => {
            res.render("elements/search", {
                viewTitle: 'Jobs', jobs: responses[0].dataValues

            });

        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Jobs."
            });
        });

}
exports.createJob = (job, res) => {
    // Save Job in the database
    Job.create(job)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Job."
            });
        });
}

exports.findJobById = (id, res) => {
    Job.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Job with id=" + id
            });
        });
}

exports.deleteJobById = (id, res) => {
    Job.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Job was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Job with id=${id}. Maybe Job was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Job with id=" + id
            });
        });
}

exports.updateJob = (id, req, res) => {
    Job.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Job was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Job with id=${id}. Maybe Job was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Job with id=" + id
            });
        });
}

exports.deleteAllJobs = (res) => {
    Job.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Job were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
}