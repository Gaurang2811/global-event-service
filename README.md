# A Glober event handler for angular

This is a global event emitter for your Angular applicaion.
If you want to trigger changes in mutiple components/ places with change in one component/ place.
You can publish or emit an event( data change) with a name/ id on which you want to perform some action and then catch that event with name/ id in other components/ modules.

> Use Case: With update in profile picture/ username the header components picture/ name must be updated instantly.

#### Steps to use
##### Install
run `npm install global-event-service --save`
Done :) Now you can use this with in your application.

##### Usage
###### Emitting/ Creating/ Generating an event from `component-A`
* Import in your component.
~~~
    import { GlobalEvent } from 'global-event-service';
~~~
* Inject dependency
~~~
    constructor( private global: GlobalEvent) { }
~~~
* Emitting Event
~~~
    this.global.notifyDataChanged('profile-pic-update', 'base64-profile-picture');
~~~
###### Catching the event on `component-B`
* Import in your component.
~~~
    import { GlobalEvent } from 'global-event-service';
~~~
* Inject dependency
~~~
    constructor( private global: GlobalEvent) { }
~~~
* Catching Event
~~~
    constructor( private global: GlobalEvent) {
        this.global.subscribe('profile-pic-update', (pic) => 
        console.log('Profile pic updated', pic);
    )
  }
~~~