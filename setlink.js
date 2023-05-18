// const fs = require("fs");
// const readline = require("readline");
const  fs  = require("fs");
const  readline  = require("readline");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);

  //
  fs.writeFile(
    "./profile/page/2801/77link.js",
    `const offerLink = "${value}";`,
    function (err) {
      console.log("Link set seccussful হয়ে গেছে 👈👇👉.");
      process.exit();
    }
  );
});
