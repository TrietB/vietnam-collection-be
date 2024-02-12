const fs = require("fs");

var obj = JSON.parse(fs.readFileSync("data.json", "utf8"));

// let loop = obj.forEach((element) => {
//   if (element.Description) {
//     // console.log(element.Description.split("-"));
//   } else {
//     // console.log("err");
//   }
// });
