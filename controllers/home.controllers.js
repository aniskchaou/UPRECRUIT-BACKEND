const config = require("../config/connection.server");
const { loginUser } = require("../services/candidate.services");
const { createApply } = require("../services/apply.services");

exports.getHome = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/index", { viewTitle: 'UP Recruit' });
}

exports.getLogin = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/login", { viewTitle: 'Login' });
}

exports.getCompanies = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/companies", { viewTitle: 'Companies' });
}


exports.getJobs = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/jobs", { viewTitle: 'Jobs' });
}

exports.getElements = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/elements", { viewTitle: 'Elements' });
}

exports.getOpeningHours = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/openinghours", { viewTitle: 'Opening hours' });
}

exports.getPricing = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/pricing", { viewTitle: 'Pricing' });
}

exports.getServices = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/services", { viewTitle: 'Services' });
}


exports.getRegister = async function (req, res) {
  //res.redirect('/list')
  res.render("elements/register", { viewTitle: 'Register' });
}


exports.getJobDetail = async function (req, res) {
  //res.redirect('/list')
  // res.render("elements/viewjob", { viewTitle: 'Pricing' });
  console.log(req.params.id)
  console.log(config.user.id)
  res.render('elements/viewjob', { title: 'my other page', layout: 'otherLayout', idJob: req.params.id, idUser: config.user.id });
}

exports.getAuth = async function (req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const user = {
    email: req.body.email,
    password: req.body.password,

  }

  loginUser(user.email, user.password, res)
  //res.render("elements/profile", { viewTitle: 'Profile' });
}

exports.sendCandidature = async function (req, res) {
  const Apply = {
    condidate: req.params.idUser,
    jobOffer: req.params.idJob,
    dateApplication: '',
    status: '',
    appreciation: 'req.body.appreciation',
  }
  console.log(Apply)
  createApply(Apply, res)
}

