# Intro to Angular.js
-----
A simple Angular.js application meant to demonstrate the fundamentals of the framework.

## A Bit About Angular.js
----
Angular.js is an open source MVC framework for web applications. Currently, Angular is at version 1.5.7 (the version used in this project).

#### How is Angular.js structured?
Angular is built around two very important principles, Modules and Dependency Injection.
##### Modules
Modules are a way to keep each part of your application segmented from any other. Modules will usually contain the elements that are only necessary for that module. This enforces a feature based application strucuture, where each feature becomes its own module.

// Insert Module example image here and explain

##### Dependency Injection
Modules may have some functionality that is more abstract than their own use case. For these instances, we can use Angular's built in Dependency Injection framework. Angular registers all modules within a project, and allows them to be re-used within other modules.

// Insert Dependency Injection example image here and explain

These concepts may seem confusing at first, but as we get into the actual elements that make up Angular, it should be made clear how everything fits together. Before we get into those elements though, lets talk setup.

## Setup
-----
##### Linux / macOS
// Insert setup details here
##### Windows (With Visual Studio)
// Figure out how to do this

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

// Insert ng-repeat example from project and explanation here.

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
Manage the life-cycle of other components (for example, to create service instances).
```

// Insert controller examples from project here and explain

[Controllers page in Angular docs](https://docs.angularjs.org/guide/controller)

##### Services
Services are the main elements of Angular that are meant to represent the back-end of the project. They should be used to share and manage data and states between controllers, as well as retrieving and storing data from both remote and local sources (e.g. API calls, reading from local JSON file, etc.). These elements rely on dependency injection

NOTE: Services are singletons in Angular, meaning they are simply a single instance of their service passed around from use to use.

// Insert service example and explanation here

[Services page in Angular docs](https://docs.angularjs.org/guide/services)

##### Others
There are many other elements to angular that, for the sake of simplicity, I will not get into. I tried to get what I felt were the most fundamental elements of Angular within this project to minimize confusion. These other elements deserve just as much attention, and I highly recommend heading over to the [Angular docs](https://docs.angularjs.org/guide) for more information on these other elements. 

## Further Reading

[John Papa's Angular 1.x Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) - A great guide for writing readable and testable Angular code, as well as establishing a good looking style guide.

[John Papa's ngDemos](https://github.com/johnpapa/ng-demos/tree/master/quickstart) - Github repository for demonstrating John Papa's style guide with a small and simple angular application.

[The Angular Docs](https://docs.angularjs.org/guide) - The main documentation for Angular, made by Google.

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - You Don't Know JS is a fantastic book series based on learning the fundamentals, and eventually more advanced topics, of JavaScript. While not strictly about Angular, these books will help build a better understanding of the language that Angular is built upon.

[RxJS Github Repo](https://github.com/Reactive-Extensions/RxJS) - Reactive Extensions are a great library that is built into Angular. While no examples exist within this project, I recommend reading up on RxJS, as it can make data composition and flow much simpler.
