"use strict";angular.module("cvApp",["ngAnimate","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("cvApp").controller("MainCtrl",function(){}),angular.module("cvApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="container-fluid header templateBG" style="margin-top:-20px"> <div class="container"> <div class="row"> <div class="col-xs-12 col-sm-3"> <a href="docs/CV - Alfredo Pacheco.pdf" target="_blank" class="btn btn-sm btn-default" download>Download Resume</a> <!-- <img ng-src="images/Profile.JPG" class="img-circle center-block" style="width:150px;"> --> </div> <div class="col-xs-12 col-sm-9 text-right"> <span style="font-size: .9em">Last Updated: Jan, 2017</span> <h1>Software Engineer</h1> <h3>Jesus Alfredo Pacheco Figueroa</h3> <a href="mailto:j.alfredo.pacheco@gmail.com">j.alfredo.pacheco@gmail.com</a> </div> </div> </div> </div> <div class="container"> <div class="row"> <h5>Profile</h5> <div class="col-xs-12"> <p>More than 10 years doing the beautiful art of Software Development, I am a full-stack systems engineer, a self-taught person always looking for optimization, efficiency, edge-technologies, best practices for coding.</p> <p>I feel with confidence on making an entire enterprise application, from the database to the CSS styles and I have a set of Reusable Modules with which I can perform your application in faster times.</p> </div> </div> <div class="row"> <h5>Career</h5> <div class="col-xs-12"> "Ingeniero en Sistemas Computacionales" at <a target="_blank" href="http://www.itcj.edu.mx/">Instituto Tecnologico de Ciudad Juarez</a> <br> (With Cedula) </div> </div> <div class="row"> <h5>Courses</h5> <div class="col-xs-12"> <p><a target="_blank" href="https://www.codeschool.com/">Code School:</a></p> <ul> <li>Assembling Sass</li> <li>Fundamentals of Design</li> <li>Shapping up with AngularJS</li> <li>Accelerating Through Angular 2</li> <li>ES2015: The Shape of Javascript to Come</li> <li>Breaking the Ice With Regular Expressions</li> </ul> <p><a target="_blank" href="http://www.educacionit.com/">Educacion IT:</a></p> <ul> <li>Java Standard Programming, J2SE 6.0 (40hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/5035RW43O6G37H8B9HNCKB1Y7RE0KR4"></a> --> </li> <li>Java Advanced Programming: Threads & Networking, J2SE 6.0 (18hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/531411R0D5065MBREP2EF79RATP8X8B"></a> --> </li> <li>Java Web: Servlets, JSP, JSTL, Struts & AJAX (30hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/531884IF70W5S4S0RWGOFP270DY1AS2"></a> --> </li> <li> UML y UP: Análisis y Diseño Orientado a Objetos (15hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/53193R76Q78L9Q3M318V2933U9Z5QFX"></a> --> </li> <li> Java Web Services (12hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/6287HQZ6TN4J65F16B0K406TO9Q1M86"></a> --> </li> <li> Java HIBERNATE (21hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/0/type/aprob/dip/5322EA391UDV1PC2IDKS4XQRR38GV97"></a> --> </li> <li> Java Mobile (15hs) <!-- <a target="_blank" href="https://alumni.educacionit.com/user/diploma/id/9354O46H6Q1V07361UIK5IFV198H60B/type/asist"></a> --> </li> </ul> </div> </div> <div class="row"> <h5>Books / Resources Read</h5> <div class="col-xs-12"> <ul> <li>Book: <a href="http://www.amazon.com/AngularJS-Brad-Green/dp/1449344852">AngularJS (Brad Green &amp; Shyam Seshadri)</a></li> <li>Book: <a href="https://www.amazon.com/Sails-js-Action-Mike-McNeil/dp/1617292613">Sails.js in Action (Mike McNeil, Irl Nathan)</a></li> <li>Book: <a href="https://www.amazon.es/Mastering-Ninject-Dependency-Injection-Baharestani/dp/1782166203">Mastering Ninject for Dependency Injection</a></li> <li>Book: <a href="https://www.amazon.com/Express-Action-Writing-building-applications/dp/1617292427">Express in Action (Evan Hahn)</a></li> <li>Book: <a href="http://www.javascriptenlightenment.com/JavaScript_Enlightenment.pdf">JavaScript Enlightenment (Cody Lindley)</a></li> <li>Book: <a href="http://www.casadellibro.com/ebook-microsoft-c-lenguaje-y-aplicaciones-2-edicion-ebook/9788499643250/2488214">Microsoft C#. Lenguaje y Aplicaciones</a></li> <li>Book: <a href="http://www.amazon.com/Thinking-Java-Edition-Bruce-Eckel/dp/0131872486">Thinking in Java (Bruce Eckel)</a></li> <li>Resource: <a href="http://www.w3schools.com/">w3schools.com</a></li> </ul> </div> </div> <div class="row"> <h5>Skills</h5> <p>(Where 100% is Expert)</p> <div class="col-xs-6"> <h6>Front End</h6> <table class="table table-hover"> <thead> <tr> <td style="width:150px;padding:0"></td> <td style="padding:0"></td> </tr> </thead> <tbody> <tr class="tdTitle"> <td colspan="2">Programming Languages</td> </tr> <tr> <td style="text-align:right">Javascript</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Frameworks</td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://angularjs.org/">AngularJS</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://enyojs.com/">EnyoJS</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://mithril.js.org/">Mithril</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> <span class="sr-only">70%</span>70% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://sailsjs.com/">SailsJS</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://www.meteor.com/">Meteor</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 50%"> <span class="sr-only">50%</span>50% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Important Libraries</td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://jquery.com/">jQuery</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://socket.io/">Socket.IO</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://greensock.com/">GreenSock</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Style</td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://sass-lang.com/">Sass</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> <span class="sr-only">70%</span>70% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://getbootstrap.com/">Bootstrap</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://materializecss.com/">Materialize</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> <span class="sr-only">70%</span>70% </div> </div> </td> </tr> </tbody> </table> <h6>Theory</h6> <table class="table table-hover"> <thead> <tr> <td style="width:200px;padding:0"></td> <td style="padding:0"></td> </tr> </thead> <tbody> <tr> <td style="text-align:right">OOP</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 100%"> <span class="sr-only">100%</span>100% </div> </div> </td> </tr> <tr> <td style="text-align:right">Dependency Injection</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Functional Programming</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Relational Databases</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> <tr> <td style="text-align:right">Responsive Design</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">MVC Pattern</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Repository Pattern</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Async</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Real Time</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> <span class="sr-only">70%</span>70% </div> </div> </td> </tr> </tbody> </table> <h6>Idioms</h6> <table class="table table-hover"> <thead> <tr> <td style="width:150px;padding:0"></td> <td style="padding:0"></td> </tr> </thead> <tbody> <tr> <td style="text-align:right">Technical English</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 75%"> <span class="sr-only">75%</span>75% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://www.duolingo.com/alfredoPacheco">Colloquial English</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 45%"> <span class="sr-only">45%</span>45% </div> </div> </td> </tr> <tr> <td style="text-align:right">Spanish (Native)</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 100%"> <span class="sr-only">100%</span>100% </div> </div> </td> </tr> </tbody> </table> </div> <div class="col-xs-6"> <h6>Back End</h6> <table class="table table-hover"> <thead> <tr> <td style="width:150px;padding:0"></td> <td style="padding:0"></td> </tr> </thead> <tbody> <tr class="tdTitle"> <td colspan="2">Programming Languages</td> </tr> <tr> <td style="text-align:right">C#</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right">Java</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right">VBA</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Databases</td> </tr> <tr> <td style="text-align:right">SQL Server</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right">PostgreSQL</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60%</span>60% </div> </div> </td> </tr> <tr> <td style="text-align:right">MongoDB</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 50%"> <span class="sr-only">50%</span>50% </div> </div> </td> </tr> <tr> <td style="text-align:right">MS Access</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">ORM</td> </tr> <tr> <td style="text-align:right">Entity Framework</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right">Hibernate</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60%</span>60% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Reporting</td> </tr> <tr> <td style="text-align:right">Reporting Services</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 85%"> <span class="sr-only">85%</span>85% </div> </div> </td> </tr> <tr> <td style="text-align:right">Jasper Reports</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 75%"> <span class="sr-only">75%</span>75% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">CMS</td> </tr> <tr> <td style="text-align:right">Sharepoint SDK</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right">Wordpress</td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 70%"> <span class="sr-only">70%</span>70% </div> </div> </td> </tr> <tr class="tdTitle"> <td colspan="2">Important Libraries</td> </tr> <tr> <td style="text-align:right"><a href="http://epplus.codeplex.com/">EPPlus</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> </tbody> </table> <h6>Tools</h6> <table class="table table-hover"> <thead> <tr> <td style="width:150px;padding:0"></td> <td style="padding:0"></td> </tr> </thead> <tbody> <tr> <td style="text-align:right"><a target="_blank" href="https://git-scm.com/">Git</a>, <a target="_blank" href="https://github.com/">GitHub</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 85%"> <span class="sr-only">85%</span>85% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://www.sublimetext.com/">Sublime Text</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://www.visualstudio.com/">Visual Studio</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 90%"> <span class="sr-only">90%</span>90% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://yeoman.io/">Yeoman</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://gruntjs.com/">Grunt</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://gulpjs.com/">Gulp</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 50%"> <span class="sr-only">50%</span>50% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="http://bower.io/">Bower</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 95%"> <span class="sr-only">95%</span>95% </div> </div> </td> </tr> <tr> <td style="text-align:right"><a target="_blank" href="https://trello.com/">Trello</a></td> <td> <div class="progress"> <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80%</span>80% </div> </div> </td> </tr> </tbody> </table> </div> </div> <div class="row"> <h5>Latest Projects</h5> <div class="col-xs-12"> <table class="table table-hover"> <tbody> <tr> <td>2016</td> <td><a target="_blank" href="https://github.com/alfredoPacheco/CMD">CMD</a></td> <td>CMD stands for Capsonic Metrics Dashboard and it is a Dashboard where users can register and watch Company metrics. This is a SPA application made with AngularJS, .Net WebAPI, Entity Framework and Ninject. </td> </tr> <tr> <td>2016</td> <td><a target="_blank" href="https://github.com/alfredoPacheco/BEXU">BEXU</a></td> <td>BEXU stands for Bulk Excel Files Update. This is a standalone "Windows Forms Application" by using Sharepoint SDK, Async and EPPlus to update a bulk of Excel files in Sharepoint. </td> </tr> <tr> <td>2016</td> <td><a target="_blank" href="https://github.com/inspiraCode/IQS">IQS</a></td> <td>Integrated Quotation System. It is a system for processing customer\'s requests for quotations, it calculates prices and finally responds back in a summarized letter.</td> </tr> <tr> <td>2015</td> <td><a target="_blank" href="https://github.com/inspiraCode/APQM">APQM</a></td> <td>Advanced Purchasing Quote Management. This is a system for submitting RFQs (Request for quotes) to vendors via email, and gather their responses, comparing multiple quotations, and allows selecting the best vendor based on delivery times and lower costs.</td> </tr> <tr> <td>2014</td> <td><a target="_blank" href="https://github.com/diego-torres/SISOPREGA">SISOPREGA</a></td> <td>Sistema de Soporte al Proceso de Exportacion Ganadera. System for controlling the inventory and the operations flow for exporting/buying/selling livestock between Mexico and USA.</td> </tr> </tbody> </table> </div> </div> <div class="row"> <h5>About me</h5> <div class="col-xs-12"> <p>At my beginnings by 2005, I started with Visual Basic 6.0 where I learned the programming basics and I began loving to code, made a couple of systems, then I moved on into a more serious language, Java. I learned how to program <i>object-oriented</i> and reinforced my knowledge by taking some courses at Educacion IT.</p> <p>Some friends and I made our own Company called Inspiracode, we did it for about 4 years, and we got failures and successes with several customers and the learning was of multple kinds of aspects, from requirements gathering, deployments to windows/linux, our first SPA framework EnyoJS (from HP) by 2013, Enterprise applications with J2EE, source control with git, and many other things that I don\'t even remember.</p> <p>Capsonic was my first employer as an official Software Developer, and this time I had to move to .Net technologies for Backend side, jQuery and AngularJS for FrontEnd side and Real Time with Web Sockets.</p> <p>Technology is growing rapidly and a programmer needs to be always up to date. It is a habit for me to spend one or two hours per day on learning new stuff regarding to code, technology and frameworks. I\'ve been doing apps or tools to help me out in almost all my jobs, as well as making software independently on my free time.</p> </div> </div> <div class="row"> <h5>Contribution activity (<a href="https://github.com/alfredoPacheco" target="_blank">From GitHub</a>)</h5> <div class="col-xs-12"> <label>294 contributions in 2016</label> <img ng-src="images/GitHub2016.dea1d0a7.png" class="img-responsive img-rounded" alt="Image"> <br> <br> </div> <div class="col-xs-12"> <label>322 contributions in 2015</label> <img ng-src="images/GitHub2015.dc63fb4e.png" class="img-responsive img-rounded" alt="Image"> <br> <br> </div> <div class="col-xs-12"> <label>253 contributions in 2014</label> <img ng-src="images/GitHub2014.c9887455.png" class="img-responsive img-rounded" alt="Image"> <br> <br> </div> <div class="col-xs-12"> <label>668 contributions in 2013</label> <img ng-src="images/GitHub2013.fa00292d.png" class="img-responsive img-rounded" alt="Image"> <br> <br> </div> <div class="col-xs-12"> <label>89 contributions in 2012</label> <img ng-src="images/GitHub2012.b3047cf5.png" class="img-responsive img-rounded" alt="Image"> </div> </div> </div>')}]);