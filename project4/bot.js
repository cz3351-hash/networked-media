//imports the dotenv libraray
//and allows us to access variables inside .env file
//by using process.env.VARIABLE_NAME
require('dotenv').config();

//importing the masto api that we will use
const m = require('masto')

//set up ability to use the masto library
//this is very similr to making app
//cont app=express()
const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io',
    accessToken: process.env.TOKEN
})

let currentIndex = 0;

const makeStatus = async () => {
    //customize the text output to be random when we run the function
  let steps= [
"👣\n\n#stepcount",
"👣\n   .\n\n#stepcount",
"👣\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n\n#stepcount",
"👣\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n  .\n   .\n\n#stepcount"
];

    //this grabs a random index between 0-emoji.length
    //this number needs to be a whole number
    // let randomSelection=Math.floor(Math.random()*botmessage.length)
    
    let message = steps[currentIndex];

    currentIndex = currentIndex + 1;
if (currentIndex >= steps.length) {
    currentIndex = 0;
}

    const s = await masto.v1.statuses.create({
        status: message,
        visibility: 'public'//use 'public' when we want others to see.
    })
    console.log(s.url)
}

//will post one status one time
// makeStatus();

//
//number of milliseconds- one time very 10 seconds
setInterval(makeStatus, 14400000)