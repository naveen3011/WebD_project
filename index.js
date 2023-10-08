import inquirer from 'inquirer';

import qr from 'qr-image';

import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "what is the url that you want to enter",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const name = answers.URL;

    // to creawte a qr code using the module
    var qr_svg = qr.image(name);
    qr_svg.pipe(fs.createWriteStream("qr_imafge.png"));

    // to write the link in a text file;

    fs.writeFile('Link.txt', name, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });