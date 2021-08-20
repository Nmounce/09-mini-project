// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([{
            name: 'name',
            question: 'What is your name?',
            type: 'input',
        },
        {
            name: 'location',
            question: 'What city do you live in?',
            type: 'input',
        },
        {
            name: 'bio',
            question: 'Write a brief biography (1-2 sentences);',
            type: 'input',
        },
        {
            name: 'linked',
            question: 'What is your LinkedIn URL?',
            type: 'input',
        },
        {
            name: 'github',
            question: 'What is your GitHub URL?',
            type: 'input',
        },
    ]).then((data) => {
        console.log(data)
        fs.writeFile("iindex.html", JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    const container = document.querySelector("#project-cards");
    cardDisplay.forEach((result) => {
    const cards= document.createElement("div");
    cards.classList = "all-projects";
    const content = `
        <div class="all-cards">
          <img class="card">${result.image}</img>
          <div class="text-block">
            <a href="${result.location}">
              <h5 class="title">${result.title}</h5>
              <p class="desc">${result.description}</p>
            </a>
          </div>
        </div>`;