// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>09-Mini-Project</title>
    </head>
    <body>
        <div class="container"></div>
            <h1 id="name">My Name is ${data.name}</h1>
            <div class="about">
                <h2>I live in
                    <p id="location">${data.location}</p>
                </h2>
                <h2>Here's a little bit about me...
                    <p id="bio">${data.bio}</p>
                </h2>
            <div class="contact">
                <h2> View my LinkedIn profile: 
                    <p id="linked">${data.linked}</p>
                </h2>
                <h2> View my GitHub profile:
                    <p id="bio">${data.github}</p>
                </h2>
    </body>
    </html>
`
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
        console.log(htmlTemplate(data))
        fs.writeFile("index.html", htmlTemplate(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

