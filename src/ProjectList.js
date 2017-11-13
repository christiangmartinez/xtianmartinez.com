import React from 'react'

const projectList = {
  projects: [{
    id: 1,
    coverImg:'https://i.imgur.com/JqZ0MIl.jpg',
    title: 'Flaming Space Rocks Tracker',
    type: 'Angular 2/Materialize',
    url: 'space_rocks',
    description: "Flaming Space Rocks Tracker was a group project done in my Javascript course when I was a student at Epicodus. It’s an educational web app that teaches the user about asteroids and comets with an interactive timeline and displays real-time info of asteroids passing earth using NASA's Near Earth Objects API. ",
    featureImg0: 'https://i.imgur.com/rI2aG68.png',
    featureDescription0: "Homepage displays list NASA on celestial objects near earth for the current day. Cards show up-to-date info for each individual object.",
    featureImg1: 'https://i.imgur.com/gXE3maL.png',
    featureDescription1: "Cards with asteroid info are color-coded. Passing objects that are potentially hazardous are dipslayed on a yellow card.",
    featureImg2: 'https://i.imgur.com/Oyt8G5x.png',
    featureDescription2: 'An interactive timeline teaches the user about the history of comets and asteroids.',
    website: 'https://asteroid-data.firebaseapp.com/'
  },{
    id: 2,
    coverImg:'https://i.imgur.com/Eoce0t8.jpg',
    title: 'Mappy',
    type: 'Native Android',
    url: 'mappy',
    description: "The concept behind Mappy was to make a social app based on location, allowing the user to see what activity is going on in their city with a quick glance at a map.",
    featureImg0:'https://i.imgur.com/32qk9Vk.png',
    featureDescription0: "Mappy uses the Google Maps API to get the user's location and drop a pin with a corresponding comment.",
    featureImg1: 'https://i.imgur.com/G61hms1.png',
    featureDescription1: "Create user accounts and secure login with Firebase.",
    featureImg2: 'https://i.imgur.com/3rdcLHC.png',
    featureDescription2: 'Comments, latitude, and longitude, are saved in Firebase.',
    website: 'https://github.com/christiangmartinez/chismaps'
  },{
    id: 3,
    coverImg:'https://i.imgur.com/KbECryF.png',
    title: 'Overwatch Roster',
    type: 'Angular 2/Foundation',
    url: 'overwatch_roster',
    description: 'Overwatch Roster allows the user to catalogue characters from the game Overwatch, add and edit entries, and filter characters by type.',
    featureImg0:'https://i.imgur.com/XweUFxK.png',
    featureDescription0: 'Homepage displays current list of characters from Firebase. User can filter list by character roles.',
    featureImg1: 'https://i.imgur.com/KbECryF.png',
    featureDescription1: "Dynamically routed detail pages for each character.",
    featureImg2: 'https://i.imgur.com/ai5d1SJ.png',
    featureDescription2: 'Characters can be added, updated, and deleted with changes reflected in real-time in Firebase.',
    website: 'https://github.com/christiangmartinez/overwatch-roster'
  }],
  all: function() { return this.projects},
  get: function(url) {
    const isProject = p => p.url === url
    return this.projects.find(isProject)
  }
}

export default projectList
