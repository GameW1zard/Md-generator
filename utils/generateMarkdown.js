// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs')
function renderLicenseBadge(license) {}
var licenseLink = "null"
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function makeMD(data) {
  var licenseLink ='null'
  switch (data.license) {
    case "none/other":
    licenseLink = "";
    break;

    case "Apache 2.0 License":
    licenseLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;

    case "Boost Software License 1.0":
    licenseLink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    break;

    case "BSD 3-Clause License":
    licenseLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;

    case "BSD 2-Clause License":
    licenseLink = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    break;

    case "CC0":
    licenseLink = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
    
    case "Attribution 4.0 International":
    licenseLink = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
    break;
    
    case "Attribution-ShareAlike 4.0 International":
    licenseLink = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
    break;
    
    case "Attribution-NonCommercial 4.0 International":
    licenseLink = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
    break;
    
    case "Attribution-NoDerivates 4.0 International":
    licenseLink = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
    break;
    
    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
    licenseLink = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
    break;
    
    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
    licenseLink = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
    break;
    
    case "Eclipse Public License 1.0":
    licenseLink = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    break;
    
    case "GNU GPL v3":
    licenseLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    
    case "GNU GPL v2":
    licenseLink = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
    
    case "GNU AGPL v3":
    licenseLink = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    break;
     
    case "GNU LGPL v3":
    licenseLink = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    break;
     
    case "GNU FDL v1.3":
    licenseLink = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
    break;
     
    case "The Hippocratic License 2.1":
    licenseLink = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
    break;
     
    case "The Hippocratic License 3.0":
    licenseLink = "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
    break;
     
    case "IBM Public License Version 1.0":
    licenseLink = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    break;
     
    case "ISC License (ISC)":
    licenseLink = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    break;
     
    case "The MIT License":
    licenseLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
     
    case "Mozilla Public License 2.0":
    licenseLink = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
     
    case "Attribution License (BY)":
    licenseLink = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
    break;
     
    case "Open Database License (ODbL)":
    licenseLink = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
    break;
     
    case "Public Domain Dedication and License (PDDL)":
    licenseLink = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
    break;
     
    case "The Perl License":
    licenseLink = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
     
    case "The Artistic License 2.0":
    licenseLink = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
     
    case "SIL Open Font License 1.1":
    licenseLink = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
    break;
     
    case "The Unlicense":
    licenseLink = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    break;
       
    case "The Do What the Fuck You Want to Public License":
    licenseLink = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    break;
       
    case "The zlib/libpng License":
    licenseLink = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    break;
    
  }

  fs.writeFile(
    `./Output/ ${data.title} .md`,
      `# ${data.title} ${licenseLink}
      \n \n ## Table of contents \n [Description](##Description) \n [Installation](##Installation) \n [Usage](##Usage) \n [Contribution](##Contribution) \n [Testing instructions](##Testing_Instructions) \n [Licence](##License) \n [Contact information](##Contact_information)]
      \n \n ## Description \n ${data.description}
      \n \n ## Installation \n ${data.installation}
      \n \n ## Usage \n ${data.usage}
      \n \n ## Contribution \n ${data.contribution}
      \n \n ## Testing_instructions \n ${data.testingInstructions}
      \n \n ## License \n ${data.license}
      \n \n ## Contact_information \n [${data.githubusername}](https://github.com/${data.githubusername}) \n ${data.email}
      \n \n Made using W1zards MD Generator`,
       
    (err) => err ? console.error(err) : console.log("Write success!"))
}
const testfunc = function (string) {console.log(string)}
exports.testfunc = testfunc;
exports.renderLicenseBadge = renderLicenseBadge;
exports.renderLicenseLink = renderLicenseLink;
exports.renderLicenseSection = renderLicenseSection;
exports.makeMD = makeMD;