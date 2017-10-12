//Remember that imgURL must be used from the /components folder

const Data = {
    client: {
        "0":{
            title: 'SaberBallBlog',
            description: 'Designed a new custom blog website that uses Wordpress purely to manage content. Launching Oct. 27 2017!',
            imgURL: `SaberBallBlog-current-10112017`,
            otherImgs: ['SaberBallBlog-prev'],
            gitURL: 'https://github.com/dsschapira/saber-ball-blog',
            blurb:  '<p>SaberBallBlog features posts and discussions about Baseball specifically through the analytical lens of sabermetrics.</p>'+
            '<p>The site suffered from slow loading and it was easy to get lost within the site.</p>'+
            '<p>By focusing on the categories directly on the home page, and removing much of the clutter, the site is more intuitive.</p>'+
            '<h5>Improved Features:</h5><ul><li>Faster loading between pages</li><li>More intuitive layout</li></ul>'+
            '<h5>Features currently being implemented:</h5><ul><li>Featured images on home page display</li><li>Google Ads (with improved ad placement)</li></ul>'+
            '<p><em>Technical Details: </em></p>'+ 
            '<p>This site was built using React, React Router v4, Flux (implemented with Alt), Worpress APIs, and Bootstrap</p>'
        }
    },
    personal: {
        "0":{
            title: 'Simon',
            description: 'Simon memory game',
            imgURL: `Simon`,
            projURL: 'https://codepen.io/dsschapira/full/PJGdJo/',
            gitURL: 'https://github.com/dsschapira/Simon-Game',
            blurb:  '<p>Simon is a memory game where the objective is to remember a pattern of button presses with a corresponding sound.</p>'+
            '<p>This project was created mostly as learning experience to get a better understanding of using JavaScript in a synchronous pattern.  '+
            'This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>Made with plain HTML, CSS, and JavaScript. No bootstrap, bootstrap-like frameworks, JQuery, or other libraries/frameworks were used.</p>'
        },
        "1":{
            title: 'TicTacToe',
            description: 'TicTacToe game vs. computer',
            imgURL: `tic-tac-toe`,
            projURL: 'https://codepen.io/dsschapira/full/dVYmWL/',
            blurb:  '<p>Tic Tac Toe is a strategy game.  In this version, it is played exclusively against the comupter.</p>'+
            '<p>At best, you can tie the computer.  Points are scored based on how long you can keep from losing and how many times you block the computer from winning.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Detals: </em></p>'+
            '<p>Made using Bootstrap and JQuery.</p>'
        },
        "2":{
            title: 'Calculator',
            description: 'A JavaScript calculator',
            imgURL: `Calculator`,
            projURL: 'https://codepen.io/dsschapira/full/EvVMaK/',
            blurb: '<p>A classic programming challenge - the calculator!</p>'+
            '<p>In this version, the ongoing caluclation is displayed as well as the current total.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>Made using Bootstrap and JQuery.</p>'
        },
        "3":{
            title: 'Wikipedia Viewer',
            description: 'Search wikipedia using APIs!',
            imgURL: `Wikipedia`,
            projURL: 'https://codepen.io/dsschapira/full/vZVMpZ/',
            blurb: '<p>Ever want to draw wikipedia information into a webpage?</p>'+
            '<p>In this pen, the Wikipedia API is used to pull in search results.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>Made using Wikipedia APIs, Bootstrap, and JQuery.</p>'
        },
        "4":{
            title: 'Twitch Streams',
            description: 'View current status of twitch channels',
            imgURL: `Twitch-viewer`,
            projURL: 'https://codepen.io/dsschapira/full/NvWEKq/',
            blurb:  '<p>Ever want to draw Twitch.tv information into a webpage?</p>'+
            '<p>In this pen, the Twitch API is used to pull in channel information.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>Made using Twitch APIs, Bootstrap, and JQuery.</p>'
        },
        "5":{
            title: 'Pomodoro Clock',
            description: 'Custom pomodoro timer clock',
            imgURL: `Pomodoro`,
            projURL: 'https://codepen.io/dsschapira/full/ZJMKrw/',
            blurb:  '<p>Pomodoro Clocks/Timers are used to break-up working sessions to increase overall productivity.</p>'+
            '<p>This project was used mostly as a learning experince when figuring out how to setup time-based actions on a webpage.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>Made using Bootstrap and JQuery.</p>'
        },
        "6":{
            title: 'Local Weather App',
            description: 'Local weather app using DarkSky APIs',
            imgURL: `WeatherApp`,
            projURL: 'https://codepen.io/dsschapira/full/gRdYLV/',
            blurb: '<p>This app uses geolocation and the Dark Sky API to find your local weather</p>'+
            '<p>I am constantly updating this app. The background image links are often breaking because non-pro Codepen accounts do not have access to local image hosting.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>This was built using Bootstrap and JQuery.</p>'
        },
        "7":{
            title: 'Random Quote Generator',
            description: 'Generates a random design quote',
            imgURL: `Random-quote`,
            projURL: 'https://codepen.io/dsschapira/full/EXwmym/',
            blurb:  '<p>Design is always important - incredible technical advancements would mean nothing if they were not intuitive or easy to learn.</p>'+
            '<p>This pen will generate random quotes (pulled from the QuotesOnDesign API) related to design and design principles.</p>'+
            '<p>This project was an early learning experience to understand basic API use.</p>'+
            '<p>This was also part of the FreeCodeCamp.com Front End Certificate requirements (earned on Sept 28, 2017).</p>'+
            '<p><em>Technical Details: </em></p>'+
            '<p>This was built using Bootstrap and JQuery.</p>'
        }
    }
};

export default Data;