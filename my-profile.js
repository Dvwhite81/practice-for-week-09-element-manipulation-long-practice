console.log("This is my profile page!");

window.onload = () => {
    addH1();
    addUList(aboutItems);
}

// Add heading element
const addH1 = () => {
    const newH1 = document.createElement("h1");
    newH1.setAttribute("id", "name-h1");
    newH1.setAttribute("class", "name");
    newH1.innerText = "Dan White";
    document.body.appendChild(newH1);
}

// About me strings for list
const aboutItems = [
    "I am almost constantly listening to or playing music",
    "I also enjoy video games, especially SoulsBourne games",
    "I have two dogs and one cat, named Benny, Nibbles, and Willy",
    "I have a seven-year-old daughter getting ready to start second grade"
];

// Turn about me string into list item
const addListItem = (item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "detail");
    listItem.innerText = item;
    return listItem;
}

// Create list of about me items
const addUList = (items) => {
    const uList = document.createElement("ul");
    uList.setAttribute("id", "about-ul");
    uList.setAttribute("class", "my-details");

    for (let i = 0; i < items.length; i++) {
        uList.append(addListItem(items[i]));
    }

    uList.append(createClock());

    document.body.append(uList);
}

// Create a clock
const createClock = () => {
    const clockListItem = document.createElement("li");
    clockListItem.setAttribute("class", "detail");
    const clockDiv = document.createElement("div");

    const topP = document.createElement("p");
    topP.setAttribute("class", "clock-p");
    topP.setAttribute("id", "topP");
    topP.innerText = "I live in Columbus, Ohio, and it's currently ";

    const bottomP = document.createElement("p");
    bottomP.setAttribute("class", "clock-p");
    bottomP.setAttribute("id", "bottomP");
    bottomP.innerText = "here."

    const clock = document.createElement("div");
    clock.setAttribute("id", "clock");

    const startClock = () => {
        let time = new Date().toLocaleTimeString();
        clock.innerText = time;
    }
    setInterval(startClock, 1000);

    clockDiv.append(topP, clock, bottomP);
    clockListItem.append(clockDiv);
    return clockListItem;
}
