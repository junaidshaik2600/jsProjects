import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
//
inquirer
  .prompt([
    {
      message: "Type in Your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log("I am here" + url);
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("QRImage.png"));
    let svg_string = qr.imageSync(url);
    console.log(svg_string);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error);
      // Something else went wrong
    }
  });
