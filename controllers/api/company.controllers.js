
const { findAllCompanys, createCompany, findCompanyById, deleteCompanyById, updateCompany, deleteAllCompanys } = require("../../services/company.services");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a user

    const user = {
        name: req.body.name,
        email: req.body.email,
         category: req.body.category,
          telephone: req.body.telephone,
           address: req.body.address,
            website: req.body.website,
            size:req.body.size
    }
    createCompany(user,res)
};

exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;
    findAllCompanys(res)
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    findCompanyById(id, res)
};

exports.update = (req, res) => {
    const id = req.params.id;
    updateCompany(id,req, res)
};

exports.delete = (req, res) => {
    const id = req.params.id;
    deleteCompanyById(id, res)
};

exports.deleteAll = (req, res) => {
    deleteAllCompanys(res)
};