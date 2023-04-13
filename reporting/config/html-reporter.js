const reporter = require('cucumber-html-reporter');
const nodemailer = require('nodemailer');


/*
** Génération du rapport
*/

const options = {
  theme: 'hierarchy',
  jsonDir: 'reporting/rapports',
  output: 'reporting/rapports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  screenshotsDirectory: 'reporting/rapports/screenshots/',
  brandTitle: 'Rapport d\'exécution',
  metadata: {}
};


reporter.generate(options);



/*
** Envoi du rapport par mail
*/

// Date du jour
var dateDuJour = new Date();
dateDuJour = dateDuJour.toISOString().split('T')[0];

// Destinataires
var destinataires = ['remi.leclercq@laposte.fr']

const transporter = nodemailer.createTransport({
    host: 'smtps.com1.intra.laposte.fr',
    port: 587,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
});

var mailOptions = {
  from: '',
  to: destinataires,
  subject: '[WebdriverIO] Rapport du ' + dateDuJour,
  text: 'Rapport du WebdriverIO du jour ' + dateDuJour,
  attachments : [
    {
      filename: 'cucumber_report.html',
      path: 'reporting/rapports/cucumber_report.html'
    }
  ]
};


/*transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé : ' + info.response);
  }
});*/

