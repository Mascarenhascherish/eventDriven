const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('userLogin',(username)=>{
    console.log(`User Logged in:${username}`);
});

myEmitter.on('fileUploaded',(filename)=>{
    console.log(`File Uploaded:${filename}`);
});

function simulatesUserActions(){
    const usernames=['Alia','Bob','Charlie'];
    const randomUsername=usernames[Math.floor(Math.random()*usernames.length)];

myEmitter.emit('userLogin',randomUsername);

const filenames=['file.txt','image.png','document.pdf'];

const randomFile=filenames[Math.floor(Math.random()*filenames.length)];

    myEmitter.emit('fileUploaded',randomFile);
}

simulatesUserActions();



