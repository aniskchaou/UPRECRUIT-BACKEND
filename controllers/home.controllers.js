
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


exports.getJobs= async function (req, res) {
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


