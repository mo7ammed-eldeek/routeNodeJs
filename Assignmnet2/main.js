// @ts-nocheck
// 1. Write a function that logs the current file path and directory. (0.5 Grade) 

const { writeFileSync } = require('node:fs');

function printCurrentFd() {
    const path = require('node:path');
    let dir = __dirname;
    let file = __filename;
    let message = `File: “${file}”\n, Dir: “${dir}”`
    console.log(message);
    
}

printCurrentFd();

// 2. Write a function that takes a file path and returns its file name. (0.5 Grade) 


/**
 * @param {string} filePath
 */
function getFileName(filePath) {
    filePath = String(filePath)
    let fName = require('path').basename(filePath);
    return fName;
}

console.log(getFileName("/user/files/report.pdf"));
/*
3. Write a function that builds a path from an object (0.5 Grade) 
• Input Example: { dir: "/folder", name: "app", ext: ".js"} 
• Output Example: “/folder/app.js” 
*/



function buildPath(object) {
    const path = require('path');
    let dir = object.dir;
    let name = object.name;
    let ext = object.ext;
    const newPath = path.join(
        String(dir),String(name)+String(ext)
    );
    return newPath;
};

let inputObject  = { dir: "/folder", name: "app", ext: ".js"} ; 
console.log(buildPath(inputObject));


// 4. Write a function that returns the file extension from a given file path. (0.5 Grade) 

function fileExt(paths) {
    let path = require('node:path');
    return path.extname(paths);
    
}


console.log(fileExt("/docs/readme.md"));

// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade) 
function parsePath(paths) {
    const path = require("path");
    let d = path.parse(paths);
    // console.log(d);
    data = {};
    let name = d.name;
    let ext = d.ext;
    const message = `Name: ${name},Ext: ${ext}`
    console.log(message);
    
}

parsePath("/docs/readme.md");


// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
function isAbsolute(paths) {
   // check if it relative
    const path = require("path") ;
    path.isAbsolute(paths) ? console.log(true) : console.log(false);
    
    
}
isAbsolute("/home/user/file.txt  ")
isAbsolute("Assignmnet2\main.js ")















// 11. Write a function that creates a folder synchronously. (0.5 Grade) 
// • Output Example: “Success”

function creatFolder(folderName) {
    const fs = require('fs');
    fs.mkdirSync(folderName,{recursive:true});
}   

creatFolder('ahmed/ahmed/a');

// 13. Emit a custom "login" event with a username parameter. (0.5 Grade) 
// • Input Example: "Ahmed" 
// • Output Example: “User logged in: Ahmed” 



function customEmmit(event,username) {
    event = String(event);
    const events = require('events');
    // todo
    const EventEmitters  = new events.EventEmitter();
    EventEmitters.on(event,(username)=>{
        console.log(`User logged in: ${username}`);
        
    });
    EventEmitters.emit(event)
}

customEmmit("login",'Ahmed');


function readSync(path) {

    const fs = require('fs');
    let dataa= fs.readFileSync(path,'utf-8');    
    console.log(dataa);
}   

readSync('./file.txt');


// 15. Write asynchronously to a file. (0.5 Grade) 
// • Input: path: "./async.txt", content: "Async save"

function writeAsync(filepath,content) {
    filepath = String(filepath);

    const fs = require('fs');
    fs.writeFile(filepath,content,(err)=>{
      err &&console.log(err) 
    });
    
}

writeAsync("./async.txt","Async save");



// 16. Check if a directory exists. (0.5 Grade) 
// • Input Example: "./notes.txt" 
// • Output Example: true

function existpath(path) {
    path = String(path);
    const fs = require('fs');
     fs.exists(path,(exists)=>{
        console.log(exists);
        
    });
}
existpath("./notes.txt") //false
existpath("./async.txt") //true

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade) 
// • Output Example: {Platform: “win32”, Arch: “x64”} 

function sysInfo() {
    const os = require('os');
    console.log(`Platform: ${os.platform()}, Arch: ${os.arch()}`);
    
}

sysInfo();

// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade) 
// • Input Example: "./big.txt" 
// • Output Example: log each chunk

