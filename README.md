# Functions, Scope & Program Flow Debrief

## Instructions

* Start by linking your js file to your html file

1. Open in browser/live server so you can see your changes in real time and notice how the code morphs the `live browser page`

1. GenBuzz
   * Using the Instructions below, write a function that prints numbers from 1 to an upper limit. That upper limit should be passed into your function as an argument.
    *   Ex. genBuzz(15) should print the genBuzz pattern described below from 1 to the upper limit of 15.
   * Instructions: For numbers from 1 to an upper limit (inclusive), print 'Gen' to the console if the number is a multiple of 3, print 'Buzz' if it is a multiple 5, print 'GenBuzz' if it a multiple of both 3 and 5. Otherwise, print the number to the console. Be sure to check that number your `upperLimit` is of type `number`.

2. E-Commerce Item list
    * Use the requiremets below to create a function that takes in an item and prints the price to the console.
    * Use a switch statement to print the price of the each item in the store to the console.
    * Ex. `itemList('shoes')` should print `Shoes are $50` to the console

    Items:
     * Shoes- $50
     * Jeans- $25
     * Hat- $12
     * Socks- $2
     * If the function input is not an item in the store, then print 'Invalid Item' to the console.

3. This link contains instructions for completing #3: <https://docs.google.com/document/d/1lp3TI6wICWtmrNadPkDVI7gmBPo5ZBBEv0ZlP21ds7A/edit?usp=sharing>

<!-- 4. Print a random integer
    *Print a random integer (whole number) between 50(inclusive) and 100(exclusive) to the console -->


## Part 1 - Fork and Clone the project

* Begin by _forking_ this project into a personal repository.
   * To do this, click the `Fork` button located at the top right of this page.
* Navigate to your github profile to find the _newly forked repository_.
* Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
* Open the newly cloned project in a code editor (ex. Visual Studio Code).

### Part 2 - Edit the _cloned_ project

* from a text editor (i.e. - Visual Studio Code, Notepad ++, etc...), select:
  * `File` > `Add Folder to WorkSpace`
    * Select the directory you use to store your projects (ex. `dev` directory)
    * From the text editor,in the directory you use to store your projects (ex. `dev` directory), locate the newly cloned project folder.
    * Expand the project from the _project explorer (may just be called `explorer`)_
    * Modify the `app.js`file to complete the assignment.


### Part 3 - _Pushing_ your changes to GitHub

* From a _terminal_ navigate to the root directory of the _cloned_ project.
* From the root directory of the project, execute the following commands:
    * `git add .`
        * Add all files in current directory to the staging area
    * `git commit -m 'I have made an edit to a file!'`
        * Save all staged changes to local repository
    * `git push -u origin main`
        * Push changes from local repository to remote repository

### Part 4 - Submitting assignment

* From the browser, navigate to the _forked_ project from **your** Github account.
* Click the `Pull Requests` tab.
* Select `New Pull Request`

### Resources

- <https://docs.google.com/document/d/1XtPcr32J-wImjtBidKNFIvDIoKR3yPvWO5TRjS5owb4/edit?usp=sharing>
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript>
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#what_is_a_variable>
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#variable_types>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math>
