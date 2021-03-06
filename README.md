# Intro to Angular.js

A simple Angular.js application meant to demonstrate the fundamentals of the framework.

## Table of Contents

1. [About Angular](#about-angular)
2. [Setup](#setup)
3. [Angular's Main Elements](#angulars-main-elements)
4. [Angular In Detail](#angular-in-detail)
5. [Some Rules for Angular](#some-rules-for-angular)
6. [Further Reading](#further-reading)

## About Angular
##### What is Angular for?
Angular.js is an open source MVC framework for web applications. Currently, Angular is at version 1.5.7 (the version used in this project).

Angular is normally used for single page web applications, but can support multiple page applications if necessary. It can also be used in tandem with server-side languages to deliver content to the user in a way that is easy to digest.

##### Why should I use Angular?
Angular is how web applications should be made. It takes base JavaScript and many of its well known libraries, namely JQuery, to the next level. By giving the developer simple tools to organize their client-side JavaScript, Angular makes it very easy to create modular, testable, and maintainable code that is not mixed with any other language.

##### How is Angular.js structured?
Angular is built around two very important principles, Modularity and Dependency Injection.
###### Modularity
The Modularity Prinicple of Angular maintains that each element of your application should be contained in a module.
Modules are a way to keep each part of your application segmented from any other. Modules will usually contain the elements that are only necessary for that module, keeping dependencies in check. This enforces a feature based application structure, where each feature becomes its own module.

```
    angular.module('introApp', [
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'introApp.recordList',
        'introApp.recordView'
    ]);
```

This defines our module for the entire application (known as introApp). The module takes an array
of strings as an argument. Each string corresponds to the name of another module that our application module wishes
to use as a dependency. In other words, we are **injecting those dependencies**

###### Dependency Injection
Modules may have some functionality that other modules may want to use. For these instances, we can use Angular's built in Dependency Injection framework. Angular registers all modules within a project, and allows them to be used within other modules. Injecting a dependency will allow a module to use all public elements of said dependency.

The module above gave us a good example of just how dependencies are injected using Angular. We simply
pass any module names that we need as an argument into our new module. This allows for easy hot-swapping of dependencies,
which can make code-reuse much simpler, and make testing our code much much easier.

These concepts may seem confusing at first, but as we get into the actual elements that make up Angular, it should be made clear how everything fits together. Before we get into those elements though, let's talk setup.

## Setup
##### Linux / macOS
// Insert setup details here
##### Windows (With Visual Studio)

There are two ways to install Angular with Visual Studio.
###### Method 1 - Package Manager Console (Not Recommended):
Install Angular.js through the Package Manager Console with the following command:

`Install-Package angularjs`

It is not recommended to install Angular this way, as it defeats the modular nature of Angular.js itself.
Installing through the PMC adds all Angular modules at once, not just the ones you need.

###### Method 2 - Using NPM in Visual Studio (Recommended):
(A quick install guide is near the bottom of this section for reference)

Before we start, make sure to download [Powershell](https://www.microsoft.com/en-us/download/details.aspx?id=40855) It does some pretty awesome stuff, but will really help us when installing Node.

Node.js is simply a framework for allowing JavaScript to be 'compiled' and ran on a server-side environment. NPM is the package manager for Node that allows the installation of JavaScript libraries and packages.

To install Node, and NPM, visit the [Node.js Website](https://nodejs.org/en/). Make sure to install the latest version, and not LTS. Follow the prompts to install, then restart your computer. Check if Node was installed by entering `node -v` into the command line. Do the same for npm by running `npm -v`

Now to install Bower. Where Node and NPM are meant for server-side environments, Bower is the most used package manager for client-side JavaScript libraries, including Angular. To install Bower, enter the following command into powershell: `npm install -g bower`. Check to see if it installed correctly by running `bower -v`

Optional: Gulp is a build system for Node.js. It allows you to automate your workflow when working with Node and its various packages. It can also help with testing, browser linking, and quite a lot more. To install Gulp, run `npm install --global gulp`. Then, for each project you wish to install Gulp with, run this command in the projects directory: `npm install --save-dev gulp` This sets Gulp as a devDependency on the project.

Now we are ready to add Angular to our project. To do this, we will need to add a few files to our project. I have added generic file contents for these files in [This Gist](https://gist.github.com/Weava/8a63098446129e0b5e166a55e66646ab). These files perform the following functions:
 * `package.json` - Sets up dependencies for Node, to be installed using the `npm install` command.
 * `bower.json` - Similarly to `package.json`, sets up dependencies for bower to be installed using the `bower install` command.
 * `karma.conf.js` - Sets up the test running framework Karma.
 * `protractor.conf.js` - Sets up End to End testing framework Protractor.
 
How Karma and Protractor work are out of scope for this project, but I recommend checking them out.

Once you have these files setup, run `npm install` within the same directory, and the folders `node_modules` and `bower_components` should be generated with all dependencies you have declared within the `package.json` and `bower.json` files respectively.

Start your server by entering `npm start` and going over to localhost:8000. Your index page should appear.

Alternatively, running the server from Visual Studio should also work.

A quick recap on how to install Angular for Windows and Visual Studio:
 * Install Powershell from the [Powershell website](https://www.microsoft.com/en-us/download/details.aspx?id=40855).
 * Install Node.js from it's [website](https://nodejs.org/en/), then restart your computer.
 * Run `node -v` and `npm -v` to verify installation.
 * Install bower with `npm install -g bower`, run `bower -v` to verify installation.
 * If desired, install Gulp with `npm install --global gulp` then add to project `npm install --save-dev gulp`.
 * Add `package.json` and `bower.json` files to the project from [This Gist](https://gist.github.com/Weava/8a63098446129e0b5e166a55e66646ab).
 * Optionally add `karma.conf.js` and `protractor.conf.js` files to project from the Gist mentioned above.
 * Run `npm install` to install all components.
 * Start your server using `npm start`.
 
I understand that this process is much longer than just installing the NuGet package, but keeping any sort of .Net dependency out of your Angular project is important for testing and maintaining your code.

Now that we are setup with Angular, let's talk about its main elements.

## Angular's Main Elements
----
##### Directives
From the documentation:
````
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that
tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or
even to transform the DOM element and its children.
````
Directives are simply a way of modifying the HTML in a page. Whether it be creating an entire element, a modifying attribute to add to elements, or a number of other types of items. These directives may contain controllers, templates, and other pieces. We will talk about many of these pieces further down.

Angular has plenty of directives that come built in. [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick), [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat), and [ngShow](https://docs.angularjs.org/api/ng/directive/ngShow) just to name a few.

An example of ngRepeat is below:

`<md-list-item ng-repeat="record in vm.records">`

In the above example, we are pulling an array of records from the `vm.records` array in our controller
and telling ng-repeat to use this array. ng-repeat is a directive that takes an array and creates as many
views as there are array items. This can be good for, say, looping through and displaying
information for some of your favorite records.


[Directives page in Angular docs](https://docs.angularjs.org/guide/directive)

##### Components
Components are simply directives with a much simpler configuration. I won't go to much into them, but they should be used decisively, as they have incredibly limited functionality.

[Components page in Angular docs](https://docs.angularjs.org/guide/component)

##### Controllers
Controllers are exactly what they sound like. They are the 'C' in the 'MVC'. Controllers handle basic behaviors after the user has manipulated whatever buttons or text boxes they desire. The controller should NOT handle any sort of content retrieval, generation, or storing. It should only use dependencies to carry out these functions. The controller CAN do minor data manipulation in preparation for showing within the UI (i.e. preparing the view model) as well as view model updates before any back-end operations.

For a better breakdown of how controllers should be used, see this small list from the docs:
```
Use controllers to:

* Set up the initial state of the $scope object.
* Add behavior to the $scope object.

Do not use controllers to:

* Manipulate DOM — Controllers should contain only business logic. 
Putting any presentation logic into Controllers significantly affects its testability. 
Angular has databinding for most cases and directives to encapsulate manual DOM manipulation.
* Format input — Use angular form controls instead.
* Filter output — Use angular filters instead.
* Share code or state across controllers — Use angular services instead.
* Manage the life-cycle of other components (for example, to create service instances).
```
Here is one example of a controller:
```
    angular
        .module('introApp.recordList')
        .controller('RecordListController', RecordListController);


    function RecordListController(recordlistservice) {
        var vm = this;

        vm.records = recordlistservice.getRecordList().query();
        console.log(vm.records);
    }
```
This controller (taken from the project) is incredibly simple, and doesn't define any functions.
However, it does take in a service (We'll talk about those in a bit) and prepares our data to be
shown in our UI.

[Controllers page in Angular docs](https://docs.angularjs.org/guide/controller)

##### Services
Services are the main elements of Angular that are meant to represent the back-end of the project. They should be used to share and manage data and states between controllers, as well as retrieving and storing data from both remote and local sources (e.g. API calls, reading from local JSON file, etc.). These elements rely on dependency injection.

NOTE: Services are singletons in Angular, meaning they are simply a single instance of their service passed around from use to use.

```
    angular
       .module('introApp.recordList')
       .factory('recordlistservice', ['$resource', recordlistservice]);

    function recordlistservice($resource) {

        var service = {
                getRecordList: getRecordList
            };

        function getRecordList() {
            console.log('Getting record list');
            return $resource('records/records.json', {}, {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        }
    }
```
This is a small example of a controller that retrieves an array of objects from a local JSON file.
If you are wondering why it says `.factory` instead of `.service`, that is because services are actually
just factories that can determine what service you may need at runtime.

I won't explain how factories work in this tutorial, as it is out of scope, but I recommend
checking [the wikipedia page for the factory pattern](https://en.wikipedia.org/wiki/Factory_method_pattern) for more info.

[Services page in Angular docs](https://docs.angularjs.org/guide/services)

##### Others
There are many other elements to angular that, for the sake of simplicity, I will not get into. I tried to get what I felt were the most fundamental elements of Angular within this project to minimize confusion. These other elements deserve just as much attention, and I highly recommend heading over to the [Angular docs](https://docs.angularjs.org/guide) for more information.

## Angular In Detail
###### So how does an actual Angular project come together?

Now time to talk about this project, and it's structure. This application (known as introApp from now on) is
a simple list of records, with the ability to select a record and view more information about it.

Most Angular projects will use a feature based approach to creating modules, and use a folder structure that reflects this.
The folder structure might look something like this:
```
app/
    content/
        img/
        css/
    feature-one/
    feature-two/
    core/
    app.module.js
    index.html
```
within each feature directory, we will put the items that are necessary for that feature to work.
As a specific example, lets look at a feature folder in this project:
```
record-list/
    config.route.js
    record-list.controller.js
    record-list.html
    record-list.module.js
    record-list.service.js
```
As you can see, we have put the controller, template, module, and service for the `introApp.recordList` module
all in this folder.

NOTE: If you start to see a lot of files in one folder, go ahead and create sub-folders based on function (e.g. controllers, directives, etc.)

###### Application flow

Most Angular apps will have a similar application flow to the diagram below:

![Angular application flow chart](/screenshots/angularFlow.png)

This highly simplified version of application flow in Angular shows how each component relates to each other.
Our application follows this pattern, where each feature delivers its own template, controller, and service.
Not all features you develop will need all of these pieces, so use discretion when creating new features.

That flow chart only shows us how the application delivers its elements to the UI. Data will flow somewhat differently.
Whether you are pulling data locally (from a JSON file stored on the same server as the app) or getting
information from an API. Angular should pull this information using a service. Any sort of data retrieval or storage
from sources outside the application should occur here. Most other parts of an Angular application simply
shape the data for presentation to the user.

NOTE: Making data requests to extra-application sources from anywhere but service methods makes your code much harder to read, maintain, and test.

As an example of this data flow, our `record-list.service.js` file retrieves data from a JSON file.
Then `record-list.controller.js` takes that service as a dependency and uses it to prepare the data for the view.
We then show the data to the user in `record-list.html` using various directives, HTML, and CSS.

Not all Angular apps will follow these patterns, but these are the best practices for most situations,
and should be followed. Next, we will take a look at some rules that should be applied to help you write
clean Angular code, and avoid a few pitfalls along the way.

## Some Rules for Angular
###### Keep these in mind when developing your project

// Provide some key rules for Angular projects

## Further Reading
###### Resources for both Angular and JavaScript

[John Papa's Angular 1.x Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) - A great guide for writing readable and testable Angular code, as well as establishing a good looking style guide.

[John Papa's ngDemos](https://github.com/johnpapa/ng-demos/tree/master/quickstart) - Github repository for demonstrating John Papa's style guide with a small and simple angular application.

[The Angular Docs](https://docs.angularjs.org/guide) - The main documentation for Angular, made by Google.

[Intro to Angular Presentation](https://docs.google.com/presentation/d/1kuouVut3PnPFhlf9BdW-VAXyvinTnGaHmduussZcBUQ/edit?usp=sharing) - My Google Slides presentation for introducing Angular.js.

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - You Don't Know JS is a fantastic book series based on learning the fundamentals, and eventually, more advanced topics of JavaScript. While not strictly about Angular, these books will help develop a better understanding of the language that Angular is built upon.

[RxJS Github Repo](https://github.com/Reactive-Extensions/RxJS) - Reactive Extensions are a great library that is built into Angular. While no examples exist within this project, I recommend reading up on RxJS, as it can make data composition and flow much simpler. This is an advanced topic, so if you don't know a whole lot about Angular or JavaScript, I recommend building up those skills before learning Rx.

[RxJS Blog Post From Google](https://medium.com/google-developer-experts/angular-introduction-to-reactive-extensions-rxjs-a86a7430a61f#.xlnecvuou) - A great blog post from Google, explaining what RxJS is, and how to use it with Angular. If going through the RxJS repo didn't make a lot of sense, this might help.

[Dan Lew's Grokking RxJava](http://blog.danlew.net/2014/09/15/grokking-rxjava-part-1/) - While not based in JavaScript, this blog post explains how Rx works better than any other I've seen. If Rx still doesn't make sense, go through this.

[Getting Started with Angular.js and .Net MVC](http://www.codeproject.com/Articles/806029/Getting-started-with-AngularJS-and-ASP-NET-MVC-Par) - A good starter tutorial for working with Angular in a .Net MVC environment. This post does not demonstrate best practices for Angular (refer to John Papa's style guide for that) but does help with the .Net specifics.
