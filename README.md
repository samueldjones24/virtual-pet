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

In this project, we will be following the [Constructor / Prototype](https://hackmd.io/s/SkKc3RFHV) approach where we will create a set of values for the pet (name, age, etc.) within the <strong>constructor</strong> and methods (growUp, walk, etc.) within the <strong>prototype</strong>. In order to make our code bulletproof, we will continuously test our features and refactor wherever possible. 

Before creating our logic, we will need to first create our test unit for the pet constructor. The output from declaring a new pet will be an <strong>object</strong> data type, so let's test for that.

In a file named ``__test__/pet.test.js``, add the following code: 

```
describe('constructor', () => {

  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});
```
When we run ```npm test -- pet```, the above unit will be our test case. It will now be our job to create the logic that passes the test. 

Create a new file ``src/pet.js`` and then at the top of the test file that we just created, add the following code:

```
const Pet = require('../src/pet');
```

This new code has created a variable ``Pet``, which when combined with the ``new`` keyword, will be a constructor function that returns an object. Remember that a constructor function allows you to create a <i>type</i> of object that has a common set of methods. 

In pet.js, add the following code:

```
function Pet() {}

module.exports = Pet;
```

This code: (1) defines a function (2) exports that function from the file.

To be continued...


## Built With

* [Visual Studio Code](https://code.visualstudio.com/docs/) - Text Editor
* [Jest](https://jestjs.io/docs/en/getting-started) - Testing Framework

## Acknowledgments

* @MCRCodes
