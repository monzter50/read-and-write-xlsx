let fs = require('fs')
let XLSX = require('xlsx');
let BD = XLSX.readFile('bd.xlsx');
let name_sheet = BD.SheetNames;
const jsonBD = XLSX.utils.sheet_to_json(BD.Sheets[name_sheet[0]]);
console.log("json",jsonBD)
let worksheet = []
for(let i = 0; i < jsonBD.length;i++){
  if(jsonBD[i].age === 21){
    worksheet = [...worksheet,jsonBD[i]]
   
  }
  
}
console.log("worksheet",worksheet)

let cell =XLSX.utils.json_to_sheet(worksheet)
var output_file_name = "out.csv";
// console.log("worksheet",cell)

var stream = XLSX.stream.to_csv(cell);
stream.pipe(fs.createWriteStream(output_file_name));