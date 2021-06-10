const fs = require('fs');

//WRITE FILE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err,data)=>{
    if(err)throw err;
    else
    console.log("Success");
});

//READ FILE
fs.readFile('pw.txt','utf8',(err,data)=>{
    if(err) throw err;
    else
    console.log(data);
});

//WRITE FILE
fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err,data)=>{
    if(err)throw err;
    else
    console.log("Success");
});
// //REMOVE FILE
fs.unlink('employees.json',(err)=>{
    console.log("File deleted");
});