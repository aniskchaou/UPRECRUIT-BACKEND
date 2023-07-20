var express = require('express');
var routerr = express.Router();
var languageController = require('../controllers/api/language.controllers')
var educationController = require('../controllers/api/education.controllers')
var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')
var applyController = require('../controllers/api/apply.controllers')
var taskController = require('../controllers/api/task.controllers')
var staffController = require('../controllers/api/staff.controllers')
var locationController = require('../controllers/api/location.controllers')
var interviewController = require('../controllers/api/interview.controllers')
var jobController = require('../controllers/api/job.controllers')
var candidateController = require('../controllers/api/candidate.controllers')
var categoryController = require('../controllers/api/category.controllers')
var skillController = require('../controllers/api/skill.controllers')
var companyController = require('../controllers/api/company.controllers')
var degreeController = require('../controllers/api/degree.controllers')
var experienceController = require('../controllers/api/experience.controllers')
var contractController = require('../controllers/api/contract.type.controllers')
var renewController = require('../controllers/api/renew.contract.controllers')
var refusalController = require('../controllers/api/refusal.feedback.controllers')
var acceptanceController = require('../controllers/api/acceptance.feedback.controllers')
var taskController = require('../controllers/api/task.controllers')
var frontOfficeController = require('../controllers/api/frontOffice.controllers')
var contractTypeController = require('../controllers/api/contract.type.controllers')
var settingsController = require('../controllers/api/settings.controllers')





routerr.get("/api/syssettings", settingsController.findSystemSettings);
routerr.put("/api/edit/systemsettings/:id", settingsController.updateSystemSettings);
routerr.get("/api/restore/syssettings/:id", settingsController.restoreSystemSettings);
routerr.get("/api/dashboardsettings", settingsController.findDashboardSettings);
routerr.put("/api/edit/dashboardsettings/:id", settingsController.updateDashboardSettings);
routerr.get("/api/restore/dashboard/:id", settingsController.restoreDashboardSettings);
routerr.get("/api/emailtemplatesettings", settingsController.findEmailTemplateSettings);
routerr.get("/api/emailsettings", settingsController.findEmailSettings);
routerr.put("/api/edit/emailsettings/:id", settingsController.updateEmailSettings);
routerr.get("/api/footersettings", settingsController.findFooterSettings);
routerr.put("/api/edit/footersettings/:id", settingsController.updateFooterSettings);
routerr.get("/api/restore/footer/:id", settingsController.restoreFooterSettings);
routerr.get("/api/headersettings", settingsController.findHeaderSettings);
routerr.put("/api/edit/headersettings/:id", settingsController.updateHeaderSettings);
routerr.get("/api/restore/header/:id", settingsController.restoreHeaderSettings);
routerr.get("/api/localisationsettings", settingsController.findLocalisationSettings);
routerr.put("/api/edit/localisationsettings/:id", settingsController.updateLocalisationSettings);
routerr.get("/api/notificationsettings", settingsController.findNotificationSettings);
routerr.put("/api/edit/notificationsettings/:id", settingsController.updateNotificationsSettings);
routerr.get("/api/restore/localisationsettings/:id", settingsController.restoreLocalisationSettings);




//website
routerr.get('/', indexController.getHome)
routerr.get('/companies', indexController.getCompanies)
routerr.get('/jobs', indexController.getJobs)
routerr.get('/login', indexController.getLogin)
routerr.get('/register', indexController.getRegister)
routerr.get('/viewjob/:id', indexController.getJobDetail)
routerr.post('/auth', indexController.getAuth)
routerr.get('/sendcandidature/:idJob/:idUser', indexController.sendCandidature)
routerr.get('/newcandidature/:idJob', indexController.newCandidature)
routerr.post('/finishcandidature', indexController.finishCandidature)
routerr.get('/admin', indexController.adminPanel)
routerr.post("/api/user/login", userController.login);

//summary
routerr.get('/api/summarypage', frontOfficeController.findSummary)
routerr.put('/api/summarypage/:id', frontOfficeController.updateSummary)
//footer
routerr.get('/api/footerpage', frontOfficeController.findFooter)
routerr.put('/api/footerpage/:id', frontOfficeController.updateFooter)
//header
routerr.get('/api/headerpage', frontOfficeController.findHeader)
routerr.put('/api/headerpage/:id', frontOfficeController.updateHeader)
//newsletter
routerr.get('/api/newsletterpage', frontOfficeController.findNewsLetter)
routerr.put('/api/newsletterpage/:id', frontOfficeController.updateNewsLetter)

//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);

//apply
routerr.post('/api/apply', applyController.create)
routerr.get('/api/apply', applyController.findAll)
routerr.get("/api/apply/:id", applyController.findOne);
routerr.put("/api/apply/:id", applyController.update);
routerr.delete("/api/apply/:id", applyController.delete);
routerr.delete("/api/apply", applyController.deleteAll);





routerr.get('/api/initialqualification', applyController.findInitialQualification)
routerr.get('/api/firstinterview', applyController.findFirstInterview)
routerr.get('/api/secondinterview', applyController.findSecondInterview)
routerr.get('/api/contractproposal', applyController.findContractProposal)
routerr.get('/api/contractsigned', applyController.findContractSigned)

//candidate
routerr.post('/api/candidate', candidateController.create)
routerr.get('/api/candidate', candidateController.findAll)
routerr.get("/api/candidate/:id", candidateController.findOne);
routerr.put("/api/candidate/:id", candidateController.update);
routerr.delete("/api/candidate/:id", candidateController.delete);
routerr.delete("/api/candidate", candidateController.deleteAll);


//category
routerr.post('/api/category', categoryController.create)
routerr.get('/api/category', categoryController.findAll)
routerr.get("/api/category/:id", categoryController.findOne);
routerr.put("/api/category/:id", categoryController.update);
routerr.delete("/api/category/:id", categoryController.delete);
routerr.delete("/api/category", categoryController.deleteAll);


//interview
routerr.post('/api/interview', interviewController.create)
routerr.get('/api/interview', interviewController.findAll)
routerr.get("/api/interview/:id", interviewController.findOne);
routerr.put("/api/interview/:id", interviewController.update);
routerr.delete("/api/interview/:id", interviewController.delete);
routerr.delete("/api/interview", interviewController.deleteAll);


//job
routerr.post('/api/job', jobController.create)
routerr.get('/api/job', jobController.findAll)
routerr.get("/api/job/:id", jobController.findOne);
routerr.put("/api/job/:id", jobController.update);
routerr.delete("/api/job/:id", jobController.delete);
routerr.delete("/api/job", jobController.deleteAll);
routerr.post('/searchjob', jobController.search)



//location
routerr.post('/api/location', locationController.create)
routerr.get('/api/location', locationController.findAll)
routerr.get("/api/location/:id", locationController.findOne);
routerr.put("/api/location/:id", locationController.update);
routerr.delete("/api/location/:id", locationController.delete);
routerr.delete("/api/location", locationController.deleteAll);

//staff
routerr.post('/api/staff', staffController.create)
routerr.get('/api/staff', staffController.findAll)
routerr.get("/api/staff/:id", staffController.findOne);
routerr.put("/api/staff/:id", staffController.update);
routerr.delete("/api/staff/:id", staffController.delete);
routerr.delete("/api/staff", staffController.deleteAll);

//task
routerr.post('/api/task', taskController.create)
routerr.get('/api/task', taskController.findAll)
routerr.get("/api/task/:id", taskController.findOne);
routerr.put("/api/task/:id", taskController.update);
routerr.delete("/api/task/:id", taskController.delete);
routerr.delete("/api/task", taskController.deleteAll);

//skill

routerr.post('/api/skill', skillController.create)
routerr.get('/api/skill', skillController.findAll)
routerr.get("/api/skill/:id", skillController.findOne);
routerr.put("/api/skill/:id", skillController.update);
routerr.delete("/api/skill/:id", skillController.delete);
routerr.delete("/api/skill", skillController.deleteAll);

routerr.post('/api/company/:fileName', companyController.create)
routerr.get('/api/company', companyController.findAll)
routerr.get("/api/company/:id", companyController.findOne);
routerr.put("/api/company/:id", companyController.update);
routerr.delete("/api/company/:id", companyController.delete);
routerr.delete("/api/company", companyController.deleteAll);
routerr.post('/api/company/image/uploadfile', companyController.addImage)

//education
routerr.post('/api/education', educationController.create)
routerr.get('/api/education', educationController.findAll)
routerr.get("/api/education/:id", educationController.findOne);
routerr.put("/api/education/:id", educationController.update);
routerr.delete("/api/education/:id", educationController.delete);
routerr.delete("/api/education", educationController.deleteAll);

//language
routerr.post('/api/language', languageController.create)
routerr.get('/api/language', languageController.findAll)
routerr.get("/api/language/:id", languageController.findOne);
routerr.put("/api/language/:id", languageController.update);
routerr.delete("/api/language/:id", languageController.delete);
routerr.delete("/api/language", languageController.deleteAll);

//degree
routerr.post('/api/degree', degreeController.create)
routerr.get('/api/degree', degreeController.findAll)
routerr.get("/api/degree/:id", degreeController.findOne);
routerr.put("/api/degree/:id", degreeController.update);
routerr.delete("/api/degree/:id", degreeController.delete);
routerr.delete("/api/degree", degreeController.deleteAll);

//experience
routerr.post('/api/experience', experienceController.create)
routerr.get('/api/experience', experienceController.findAll)
routerr.get("/api/experience/:id", experienceController.findOne);
routerr.put("/api/experience/:id", experienceController.update);
routerr.delete("/api/experience/:id", experienceController.delete);
routerr.delete("/api/experience", experienceController.deleteAll);

//skill
routerr.post('/api/skill', skillController.create)
routerr.get('/api/skill', skillController.findAll)
routerr.get("/api/skill/:id", skillController.findOne);
routerr.put("/api/skill/:id", skillController.update);
routerr.delete("/api/skill/:id", skillController.delete);
routerr.delete("/api/skill", skillController.deleteAll);

//contract
routerr.post('/api/contract', contractController.create)
routerr.get('/api/contract', contractController.findAll)
routerr.get("/api/contract/:id", contractController.findOne);
routerr.put("/api/contract/:id", contractController.update);
routerr.delete("/api/contract/:id", contractController.delete);
routerr.delete("/api/contract", contractController.deleteAll);

//type contract

//renew
routerr.post('/api/renew', renewController.create)
routerr.get('/api/renew', renewController.findAll)
routerr.get("/api/renew/:id", renewController.findOne);
routerr.put("/api/renew/:id", renewController.update);
routerr.delete("/api/renew/:id", renewController.delete);
routerr.delete("/api/renew", renewController.deleteAll);

//acceptance
routerr.post('/api/acceptance', acceptanceController.create)
routerr.get('/api/acceptance', acceptanceController.findAll)
routerr.get("/api/acceptance/:id", acceptanceController.findOne);
routerr.put("/api/acceptance/:id", acceptanceController.update);
routerr.delete("/api/acceptance/:id", acceptanceController.delete);
routerr.delete("/api/acceptance", acceptanceController.deleteAll);
//refusal
routerr.post('/api/refusal', refusalController.create)
routerr.get('/api/refusal', refusalController.findAll)
routerr.get("/api/refusal/:id", refusalController.findOne);
routerr.put("/api/refusal/:id", refusalController.update);
routerr.delete("/api/refusal/:id", refusalController.delete);
routerr.delete("/api/refusal", refusalController.deleteAll);


//task
routerr.post('/api/task', taskController.create)
routerr.get('/api/task', taskController.findAll)
routerr.get("/api/task/:id", taskController.findOne);
routerr.put("/api/task/:id", taskController.update);
routerr.delete("/api/task/:id", taskController.delete);
routerr.delete("/api/task", taskController.deleteAll);


//refusal
routerr.post('/api/contract-type', contractTypeController.create)
routerr.get('/api/contract-type', contractTypeController.findAll)
routerr.get("/api/contract-type/:id", contractTypeController.findOne);
routerr.put("/api/contract-type/:id", contractTypeController.update);
routerr.delete("/api/contract-type/:id", contractTypeController.delete);
routerr.delete("/api/contract-type", contractTypeController.deleteAll);
module.exports = routerr;