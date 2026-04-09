// Hey Sam! If you are grading, please use bot.js instead of this file. This was just testing with server.js but it wouldnt work.

//imports the dotenv libraray
//and allows us to access variables inside .env file
//by using process.env.VARIABLE_NAME
require('dotenv').config();

//importing the masto api that we will use
const m = require('masto')
const jsdom = require('jsdom');


//set up ability to use the masto library
//this is very similr to making app
//cont app=express()
const masto = m.createRestAPIClient({
    url: 'https://networked-media.itp.io',
    accessToken: process.env.TOKEN
})

const stream = m.createStreamingAPIClient({
    accessToken: process.env.TOKEN,
    streamingApiUrl: 'wss://networked-media.itp.io',
});

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
//number of milliseconds- one time very 4 hours
setInterval(makeStatus, 14400000)

//

const reply = async () => {
    // waiting for account to receive notifications
    const notifications = await stream.user.notification.subscribe();

    for await (let notif of notifications) {
        // console.log(notif.payload);
        // notif.payload.status.content
        let type = notif.payload.type;
        // only filtering for mention notifications
        if (type == 'mention') {
            // allows us to parse the html content as if we were using front-end js
            const input = new jsdom.JSDOM(notif.payload.status.content);
            const text = input.window.document.querySelector('p').textContent;
            console.log(notif.payload.status.content);
            console.log('parsed text: ');
            console.log(text);

            // make a request to store info to my server
            // http://www.omdbapi.com/?apikey=[yourkey]&s=[movie search]
            await fetch('http://localhost:6001/api/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: text }),
            });
        }
    }
};

reply();