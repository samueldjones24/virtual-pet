# Virtual Pet

Real pets are great, but they do have drawbacks. They smell. Your mum might be allergic to them. Maybe you just aren't allowed one in your flat.

To solve these problems, we're going to make our own <strong>JavaScript Virtual Pet</strong>.

## Getting Started

Create new repository in GitHub entitled <strong>virtual-pet</strong>.<br/>
Create new directory ```mkdir``` on your machine, also entitled <strong>virtual-pet</strong>.<br/>
Move into this new directory and tnitialise a new NPM project ```npm init```.<br/>
Install our testing framework, Jest, as a development dependency ```npm install -D jest```.<br/>
Alter the ```package.json``` file so that the test value is "jest".<br/>
Get the SSH link for your repo, and link it to your local repository using ```git remote add origin {the ssh link you just copied}```.<br/>
Lastly, create a ```.gitignore``` file and add the line <i>node_modules</i> to it as we do not want this directory uploaded to GitHub.<br/>
<br/>
Now, you're good to go! 

## Walkthrough

In this project, we will be following the [Constructor / Prototype](https://hackmd.io/s/SkKc3RFHV) approach where we will create a set of values for the pet (name, age, etc.) within the constructor and methods (growUp, walk, etc.) within the prototype. In order to make our code bulletproof, we will continuously test our features and refactor wherever possible. 

## Built With

* [Visual Studio Code](https://code.visualstudio.com/docs/) - Text Editor
* [Jest](https://jestjs.io/docs/en/getting-started) - Testing Framework

## Acknowledgments

* @MCRCodes
