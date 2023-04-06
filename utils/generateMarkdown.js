// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs')
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function makeMD(data) {
  fs.writeFile(
    `./Output/ ${data.title} .md`,
     `# ${data.title}
      \n \n ## Description \n ${data.description}
      \n \n ## Installation \n ${data.installation}
      \n \n ## Usage \n ${data.usage}
      \n \n ## Contribution \n ${data.contribution}
      \n \n ## Testing instructions \n ${data.testingInstructions}
      \n \n ## Licence \n ${data.license}
      \n \n ## Contact information \n ${data.username} \n ${data.email}`,
       
    (err) => err ? console.error(err) : console.log("Write success!"))
}
const testfunc = function (string) {console.log(string)}
//module.exports = generateMarkdown;
exports.testfunc = testfunc;
exports.renderLicenseBadge = renderLicenseBadge;
exports.renderLicenseLink = renderLicenseLink;
exports.renderLicenseSection = renderLicenseSection;
exports.makeMD = makeMD;