#Developers

Francesco Zingaro
Patrizia Santagata



#Code Challenge

Build a UI to search the Movie DB
The user should be able to enter some text into a search field, see and
browse the results from the Movie DB.
Suggested reading:
https://themoviedb.org/
http://docs.themoviedb.apiary.io/
https://github.com/cavestri/themoviedb-javascript-library/

#Additional Notes

The solution has to be provided as a Git repository including all the implementation
commits history. Please follow the frequent commit practice while working on the task
so that your local Git repository indicates reasonable milestones of your implementation.
You are more than welcome to share your Git repository on a free service such as
GitHub or BitBucket
The repository should contain:
1. Source code with no binaries.
a. It should be buildable/viewable
b. In case you need to use external libraries, please add them
2. Any installation and deployment instructions for apps and components
Coding and development standards
You are expected to apply industry best practices and techniques such as:
1. Unit testing
2. Inversion of control and dependency injection
3. Source code documentation

# Movie DB

An angular 4 app to made to search across all the movies from the world and add as favourite(using local storage). 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
