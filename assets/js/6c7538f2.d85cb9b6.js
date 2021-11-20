"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[1928],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6574:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:16},l="Open Policy Agent",c={unversionedId:"CNCF Projects/5.16_Open_Policy_Agent",id:"CNCF Projects/5.16_Open_Policy_Agent",isDocsHomePage:!1,title:"Open Policy Agent",description:"Open Policy Agent, or OPA, is an open source, general purpose policy engine.It\u2019s a project that started in 2016 aimed at unifying policy enforcement across different technologies",source:"@site/docs/CNCF Projects/5.16_Open_Policy_Agent.md",sourceDirName:"CNCF Projects",slug:"/CNCF Projects/5.16_Open_Policy_Agent",permalink:"/docs/CNCF Projects/5.16_Open_Policy_Agent",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"ETCD",permalink:"/docs/CNCF Projects/5.15_etcd"},next:{title:"TiKV",permalink:"/docs/CNCF Projects/5.17_TiKV"}},p=[{value:"What is Policy?",id:"what-is-policy",children:[{value:"Example :",id:"example-",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"open-policy-agent"},"Open Policy Agent"),(0,i.kt)("img",{src:"https://softwareengineeringdaily.com/wp-content/uploads/2018/11/OpenPolicyAgent.png",width:"600",height:"250"}),(0,i.kt)("p",null,"Open Policy Agent, or OPA, is an open source, general purpose policy engine.It\u2019s a project that started in 2016 aimed at unifying policy enforcement across different technologies\nand systems. Today, OPA is used by giant players within the tech industry OPA decouples policy decisions from other responsibilities of an application, like those commonly\nreferred to as business logic. OPA works equally well making decisions for Kubernetes, Microservices, functional application authorization and more, thanks to its single unified\npolicy language."),(0,i.kt)("h2",{id:"what-is-policy"},"What is Policy?"),(0,i.kt)("p",null,"A policy can be thought of as a set of rules. As such, any organization is going to have a number of policies in place, and even an organization without formal policies in place\nwill still need to comply with regulations, agreements and laws. Simply put, policy is everywhere. In software systems, policy might describe things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What tables inside a database contain personally identifiable information (PII)."),(0,i.kt)("li",{parentName:"ul"},"Which machines on a network should be considered trusted."),(0,i.kt)("li",{parentName:"ul"},"Expected salary ranges for employees based on years of experience. "),(0,i.kt)("li",{parentName:"ul"},"Default resource allocation for new application deployments."),(0,i.kt)("li",{parentName:"ul"},"What roles are required to perform different actions in a system.")),(0,i.kt)("p",null,"This last example of a policy is what we normally call authorization, and is a special type of policy that governs who gets to do what in a given system. In order to enforce\nauthorization decisions, a process to establish the identity of the user must normally have been completed. This process is authentication, and while a distinct concept from\nauthorization, authorization often depends on attributes retrieved in the authentication process, such as the roles a user may have, or whether multi-factor authentication (MFA)\nwas used in the login process. This type of attributes is often referred to as claims."),(0,i.kt)("h1",{id:"why-open-policy-agent"},"Why Open Policy Agent?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rego:")," Open Policy Agent uses a high level declarative language called Rego to describe policy. Rego makes it easy to build policy rules around hierarchical structured data,\nsuch as that represented in JSON or YAML, prevalent in almost all systems today. Having a purpose built policy language allows policy to be described succinctly using primitives")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"General-purpose:")," OPA can be used to express policies and rules against arbitrary structured data .Common use cases include application and microservice authorization,\nKubernetes admission control, infrastructure policies and configuration management. OPA can be embedded as a library, deployed as a daemon, or simply run on the command-line.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cloud-native:")," OPA is a graduated project within the Cloud Native Computing Foundation (CNCF) along with other prominent cloud-native projects, such as Kubernetes,\nEnvoy and Prometheus. OPA was built from the ground up to run in containerized, cloud native environments, and its lightweight nature allows it to be deployed in highly\ndistributed environments.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open source:")," All OPA code is released under a liberal Apache 2 license. This allows anyone to read and modify the source code to fit their needs, for personal user or\ncommercial applications. In fact, several companies integrate OPA in their services and products!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community and ecosystem:")," The general-purpose model of OPA, along with its open source licensing and its many qualities as a policy engine, has resulted in a thriving\ncommunity and ecosystem to grow around the project. Check out the project on GitHub. Additionally, the OPA ecosystem page lists more than 50 integrations from both\ncorporations and individuals .")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Centralized management:")," OPA\u2019s management APIs allow for OPA to pull policy and data bundles, report health and status and send decision logs, from/to a central control\nplane component, such as the Styra Declarative Authorization Service (DAS). This enables control, management and monitoring of OPA even in distributed environments with\nhundreds or thousands of OPAs deployed.")),(0,i.kt)("h1",{id:"how-does-opa-work"},"How Does OPA Work?"),(0,i.kt)("p",null,"Let\u2019s say that you\u2019re implementing the Payments service of our example application. This service is responsible for handling customer payments. It exposes an API where\nit accepts payment from the customer. It also allows the user to query which payments were made by a specific customer. So, to obtain an array containing the purchases done\nby Jane, who is one of the company\u2019s customers, you send a GET request to the API with the path /payment/jane. You provide your credential information in the Authorization\nheader and send the request. The response would be a JSON array with the data you requested. However, since you don\u2019t want just anyone with network access to have access to\nthe Payments API to see such sensitive data, you need to enforce an authorization policy. OPA addresses the issue in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Payments API queries OPA for a ",(0,i.kt)("em",{parentName:"li"},"decision"),". It accompanies this query with some ",(0,i.kt)("em",{parentName:"li"},"attributes")," like the HTTP method used in the request, the path, the user, and so on."),(0,i.kt)("li",{parentName:"ul"},"OPA validates those attributes against data already provided to it."),(0,i.kt)("li",{parentName:"ul"},"After validation, OPA sends a decision to the requesting API with either ",(0,i.kt)("em",{parentName:"li"},"allow")," or ",(0,i.kt)("em",{parentName:"li"},"deny"),".")),(0,i.kt)("h3",{id:"example-"},"Example :"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://d33wubrfki0l68.cloudfront.net/ccaa16878b16f07b8f03403662cb483decb11389/37b9e/docs/latest/images/system.svg",alt:"download"})),(0,i.kt)("p",null,"There are three kinds of components in the system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Servers expose zero or more protocols (e.g., http, ssh, etc.)."),(0,i.kt)("li",{parentName:"ul"},"Networks connect servers and can be public or private. Public networks are connected to the Internet."),(0,i.kt)("li",{parentName:"ul"},"Ports attach servers to networks.")),(0,i.kt)("p",null,"All of the servers, networks, and ports are provisioned by a script. The script receives a JSON representation of the system as input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "servers": [\n        {"id": "app", "protocols": ["https", "ssh"], "ports": ["p1", "p2", "p3"]},\n        {"id": "db", "protocols": ["mysql"], "ports": ["p3"]},\n        {"id": "cache", "protocols": ["memcache"], "ports": ["p3"]},\n        {"id": "ci", "protocols": ["http"], "ports": ["p1", "p2"]},\n        {"id": "busybox", "protocols": ["telnet"], "ports": ["p1"]}\n    ],\n    "networks": [\n        {"id": "net1", "public": false},\n        {"id": "net2", "public": false},\n        {"id": "net3", "public": true},\n        {"id": "net4", "public": true}\n    ],\n    "ports": [\n        {"id": "p1", "network": "net1"},\n        {"id": "p2", "network": "net3"},\n        {"id": "p3", "network": "net2"}\n    ]\n}\n')))}d.isMDXComponent=!0}}]);