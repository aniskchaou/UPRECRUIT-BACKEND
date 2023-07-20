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

var SystemSettings = require("../models/settings/system.settings.models.js")
var DashboardSettings = require("../models/settings/dashboard.settings.models.js")
var EmailSettings = require("../models/settings/email.settings.models.js")
var EmailTemplateSettings = require("../models/settings/email.template.settings.models.js")
var FooterSettings = require("../models/settings/footer.settings.models.js")
var HeaderSettings = require("../models/settings/header.settings.models.js")
var LocalisationSettings = require("../models/settings/localisation.settings.models.js")
var NotificationSettings = require("../models/settings/notification.settings.models.js");
const University = require("../models/university.models.js");
const Language = require("../models/language.models.js");

const Degree = require("../models/degree.models.js");
const Experience = require("../models/experience.models.js");
const Education = require("../models/education.models.js");
const Contract = require("../models/contract.models.js");
//const Candidate = require("../models/candidate.models.js");

sequelize.sync()
    .then(function () {

        DashboardSettings.create(seeds.getDashboardSettings())
        EmailSettings.create(seeds.getEmailSettings())
        FooterSettings.create(seeds.getFooterSettings())
        HeaderSettings.create(seeds.getHeaderSettings())
        LocalisationSettings.create(seeds.getLocalisationSettings())
        NotificationSettings.create(seeds.getNotificationSettings())
        SystemSettings.create(seeds.getSytemSettings())

        User.create(seeds.userSeed);

        Candidate.bulkCreate(seeds.candidateSeed);
        Category.bulkCreate(seeds.jobCategorySeeds);

        Job.bulkCreate(seeds.jobOfferSeed);
        Location.bulkCreate(seeds.locationSeeds)
        Staff.create(seeds.staffSeeds)
        Task.create(seeds.taskSeed)
        Company.create(seeds.companySeed)
        //User.create()
        Skill.bulkCreate(seeds.skillsSeeds)
        Apply.create(seeds.applyJob);
        Interview.create(seeds.interviewSeed)
        University.bulkCreate(seeds.universitySeeds)
        Language.bulkCreate(seeds.languageSeeds)
        Degree.create(seeds.degreeSeeds)
        Experience.create(seeds.expenseSeed)
        Education.create(seeds.educationSeeds)
        Staff.create(seeds.staffSeeds)
        Contract.create(seeds.contractSeeds)
        Candidate.create(seeds.candidateSeed)


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

