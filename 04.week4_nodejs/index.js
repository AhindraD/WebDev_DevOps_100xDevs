const { Command } = require('commander');
const program = new Command();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const todoJSON = path.join(__dirname, 'todo.json');

program
    .name('todo-util')
    .description('CLI to create TODO lists')
    .version('0.8.0');

program.command('todo-create')
    .description('Creates a new TODO list with timestamp')
    .argument('<string>', 'name of the TODO list')
    .action((str) => {
        const currTask = {
            id: uuidv4(),
            name: str,
            timestamp: Date.now().toLocaleString()
        };
        if (fs.existsSync(todoJSON)) {
            console.log('TODO list already exists')
            console.log("reading the list...")
            let data = JSON.parse(fs.readFileSync(todoJSON));
            data.push(currTask);
            console.log("adding new task...")
            fs.writeFileSync(todoJSON, JSON.stringify(data));
        } else {
            console.log("adding new task...")
            fs.writeFileSync(todoJSON, JSON.stringify([currTask]));
        }
        console.log('Task added successfully');
    });

program.parse();