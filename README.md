# InspectionApp

This project is the UI of [Inspection API](https://github.com/khangthinh2401/inspection-api) and was generated with Angular CLI version 14.1.1.

![Angular image](./tutorial-images/angular.jpg)

## What is Angular?

**Angular** is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.

**Angular** is a complete rewrite from the same team that built AngularJS (an older version of Angular).

As a platform, Angular includes:

- A component-based framework for building scales web apps.
- A collection of well-integrated libraries that cover a wide variety of features.
- A suit of developer tools to help us develop, build, test, and update our code.

## Components in Angular

Angular is a component-based web framework. So what really component is in Angular?

**Components** are the building blocks that compose an application. A component includes a TypeScript class with a `@component()` decorator, an HTML template, and styles.

This is what a minimal Angular component looks like:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "hello-world",
  template: "./hello.component.html",
  styleUrls: [],
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

The `@component()` decorator specifies the following Angular-specific information:

- A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector becomes instances of the the components.
- An HTML template that instructs Angular how to render the component.
- An optional set of CSS styles that define the appearance of the template's HTML elements.

## Templates in Angular

Every component has an HTML template that declares how that component renders. You can define this template either inline or by file path.

Angular extends HTML with addiotional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component's state changes.

Some remarkable application of this features are:

- **Inserting dynamic text** (by using double curly braces).
- **Property bindings** -> Set values for properties and attributes of HTML elements and pass values to your application's presentation logic (by using double square brackets).

## Dependency Injection

DI is a useful technique that has been clearly explained in my [Inspection API](https://github.com/khangthinh2401/inspection-api).

DI lets you declare the dependencies of your TypeScript classes without taking care of their instantiation. Instead, Angular handles the instantiation for you. So you can write more testable and flexible code.

Assume that we have a `logger.service.ts` file with **writeConsole** function that will write a message to console window, and we have another file called `hello.ts` that needs to use writeConsole function. Instead of newing up, we can access the function by injecting the Logger service into `hello.ts` by doing two steps:

1. Import the Logger function from `logger.service.ts`.
2. Adding parameter `private logger: Logger` to the constructor of `hello.ts`.

```typescript
import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class Hello{
    // call Logger function
    constructor(private logger: Logger){}
    clickMe(){
        this.logger.writeConsole("This is message");
    }
}
```