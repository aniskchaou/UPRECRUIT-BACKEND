var User = require("../models/user.models.js")
var sequelize = require("../db/init.sequelize")
var Sequelize = require('sequelize');
var seeds = require("./seeds.sequelize");
const Apply = require("../models/apply.models.js");
const Candidate = require("../models/candidate.models.js");
const Category = require("../models/category.models.js");
const Interview = require("../models/interview.models.js");
const Job = require("../models/job.offer.models.js");
const Location = require("../models/location.models.js");
const Staff = require("../models/staff.models.js");
const Task = require("../models/task.models.js");
const Company = require("../models/company.models.js");
const Skill = require("../models/skill.models.js");
const HeaderPage = require("../models/header.page.models.js");
const RenewContract = require("../models/renew.contract.models.js");
const AcceptanceFeedBack = require("../models/acceptance.feedback.models.js");
const RefusalFeedBack = require("../models/refusal.feedback.models.js");
const FooterPage = require("../models/footer.page.models.js");
const SummaryPage = require("../models/summary.page.models.js");
const NewsLetterPage = require("../models/newsletter.page.models.js");
sequelize.sync().then(function () {
    User.create(seeds.userSeed);
    Apply.create();
    Candidate.create();
    Category.create();
    Interview.create()
    Job.create();
    Location.create()
    Staff.create()
    Task.create()
    Company.create()
    User.create()
    Skill.create()
    RenewContract.create()
    AcceptanceFeedBack.create()
    RefusalFeedBack.create()
    HeaderPage.create({ title: 'hello' })
    FooterPage.create({
        title1: 'Sequelize.STRING',
        title2: 'Sequelize.STRING',
        title3: 'Sequelize.STRING',
        title4: 'Sequelize.STRING'
    })
    SummaryPage.create({
        jobsPosted: 'Sequelize.STRING',
        allCompanies: 'Sequelize.STRING',
        totalMembers: 'Sequelize.STRING',
        happyMembers: 'Sequelize.STRING'
    })
    NewsLetterPage.create({
        title: 'Sequelize.STRING',
        subTitle: 'Sequelize.STRING'

    })
}).then(function (res) {
    console.log(res);
});

