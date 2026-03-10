const express = require("express");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs")

let history = [];

app.get("/", (request, response) => {
    let data = {
        history: history
    };
    response.render("home.ejs", data);
})

app.get('/newpillow', (request, response) => {

    let name = request.query.guestName;
    let pillow = request.query.ONE + request.query.TWO + request.query.THREE;

    let data = {
        guestName: name,
        pillow: pillow,
        pillowImage: ""
    };

    if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow1.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow2.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow3.PNG";
    }

    else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow4.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow5.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow6.PNG";
    }

    else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow7.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow8.PNG";
    } else if (request.query.ONE == "oneA" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow9.PNG";
    }

    else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow10.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow11.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow12.PNG";
    }

    else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow13.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow14.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow15.PNG";
    }

    else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow16.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow17.PNG";
    } else if (request.query.ONE == "oneB" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow18.PNG";
    }

    else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow19.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow20.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoA" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow21.PNG";
    }

    else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow22.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow23.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoB" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow24.PNG";
    }

    else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeA") {
        data.pillowImage = "pillow25.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeB") {
        data.pillowImage = "pillow26.PNG";
    } else if (request.query.ONE == "oneC" && request.query.TWO == "twoC" && request.query.THREE == "threeC") {
        data.pillowImage = "pillow27.PNG";
    }

    history.push(data);

    
    response.render("newpillow.ejs", data);

});

app.get('/guestbook', (request, response) => {
    //allows our server to send and redner our ejs as html 
    let dataToBeSent = {
        serverData: "hello",
        
    }
    //1st param: name of the ejs file
    //2nd param: obsject to be sent to the client
    response.render('guestbook.ejs', dataToBeSent)
})

app.get('/sleepingspace', (request, response) => {
    let data = {
        history: history
    };
    response.render("sleepingspace.ejs", data);// imissed sending the data here so history wasnt showing up 
});


app.listen(8080, () => {
    //when we use our console.log inside of a server file, it will show up in the terminal NOt the browser complete
    console.log('server has started!');
});


// DELETED CODE
// let guestNames = [];
// let pillowHistory = [];
// app.get("/pillowmaker", (request, response) => {
//     data = {};
//     response.render("pillowmaker.ejs");
// })

// app.get('/guestbook', (request, response) => {
//     //allows our server to send and redner our ejs as html 
//     let dataToBeSent = {
//         serverData: "hello",
//         firstGuest: guestNames[0],
//     }
//     //1st param: name of the ejs file
//     //2nd param: obsject to be sent to the client
//     response.render('guestbook.ejs', dataToBeSent)
// })

// app.get('/sign', (request, response) => {
//     let name = request.query.guestName
//     //storing the names on my erver side
//     guestNames.push(name);
//     console.log(guestNames)
//     response.send('thanks,' + name);})

  //storing the names on my erver side
    // guestNames.push(name);
    // console.log(guestNames)
    // history.push(data.guestName);
    // console.log(history);

    // console.log(history);
    // console.log("name:", data.guestName);
    // console.log("img:", data.pillowImage);

//storing the names on my erver side

    // guestName: guestNames[guestNames.length - 1]

    // firstChoice: choiceOne[0],

    // choiceOne.push(choice);
// console.log(choiceOne)
// response.send('you chose:' + choice);}

//response.render('newpillow.ejs', pillowImage)
// })
