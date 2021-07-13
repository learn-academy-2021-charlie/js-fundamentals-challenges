# Javascript Fundamentals Challenges

This repository holds the vanilla JavaScript Fundamentals pair programming challenges for the Charlie 2021 cohort.

## GitHub Process
- Anything wrapped in `< >` is an indication that this will be named uniquely, the `< >` are NOT actually added to the command
- `$` is an indication of a command line prompt, the `$` is not included
- Anything in `( )` is informational and not included in the command


### Naming Conventions
- File name: `topic-student1-student2.js` (ex. arrays-austin-sarah.js)
- Branch name: `topic-initial1-initial2` (ex. arrays-a-s)


### Informational Commands
Use this informational command to tell you what files have been modified and what phase of the git process you are on:  
- `$ git status`  
Use this informational command to see what branch you are currently on:  
- `$ git branch`


### Cloning a Repository
Use this command if you don't have the repository (folder) on your local machine:   
- `$ git clone <repo-url> (pasted from clipboard on GitHub)`


### Updating an Existing Repository
Use this command if you DO have the repository on your local machine but DON'T have the latest version of the code from GitHub:  
- `$ git pull origin <branch-name>`


### Create a Branch
Use this command if you need to create a branch that does not currently exist:  
- `$ git checkout -b <topic-initial1-initial2>` (ex. arrays-a-s)


### Moving to an Existing Local Branch
Use this informational command to see what branches exist on your local machine:  
- `$ git branch`

Use this command to move to a branch that exist on your local machine:  
- `$ git checkout <branch-name>`  


### Moving to an Existing GitHub Branch
Use these commands if the repo you are working on has a branch but it is NOT on your local machine:  
- `$ git fetch`
- `$ git checkout <branch-name>`


### Adding Local Code to GitHub
Use these commands to add the code you have on your local machine to GitHub:  
- `$ git status` (informational command, ensure you are on the correct branch and in the correct directory)
- `$ git add .`
- `$ git commit -m "meaningful message here"`
- `$ git push origin <branch-name>`
