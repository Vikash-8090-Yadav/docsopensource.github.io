"use strict";(self.webpackChunkgwoc_open_source=self.webpackChunkgwoc_open_source||[]).push([[6207],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={sidebar_position:41},s="Solidity",c={unversionedId:"Popular_Projects/6.40_Solidity",id:"Popular_Projects/6.40_Solidity",isDocsHomePage:!1,title:"Solidity",description:"Solidity is an object-oriented programming language designed for developing smart contracts that run on Ethereum. It is highly influenced by C++, JavaScript and Python and  used for implementing small contracts on various blockchain platforms such as Ethereum. It has been made to target the Ethereum Virtual Machine. It is a statically-   typed curly braces programming language which supports inheritance, libraries and also complex user-defined types among other features.",source:"@site/docs/Popular_Projects/6.40_Solidity.md",sourceDirName:"Popular_Projects",slug:"/Popular_Projects/6.40_Solidity",permalink:"/docs/Popular_Projects/6.40_Solidity",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"tutorialSidebar",previous:{title:"Gun.js",permalink:"/docs/Popular_Projects/6.39_GunJS"},next:{title:"POSTCSS",permalink:"/docs/Popular_Projects/6.41_PostCSS"}},p=[{value:"Methods to setup Solidity compiler on CentOS machine :",id:"methods-to-setup-solidity-compiler-on-centos-machine-",children:[{value:"Method 1 - npm / Node.js",id:"method-1---npm--nodejs",children:[{value:"Now install nodejs",id:"now-install-nodejs",children:[],level:4},{value:"Next install npm (Nodejs Package Manager )",id:"next-install-npm-nodejs-package-manager-",children:[],level:4},{value:"Finally verify installation",id:"finally-verify-installation",children:[],level:4}],level:3}],level:2},{value:"Reserved Keywords :",id:"reserved-keywords-",children:[],level:2},{value:"References :",id:"references-",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"solidity"},"Solidity"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://juanblanco.gallerycdn.vsassets.io/extensions/juanblanco/solidity/0.0.133/1634647058397/Microsoft.VisualStudio.Services.Icons.Default",width:"150",height:"250"})," "),(0,l.kt)("p",null," Solidity is an ",(0,l.kt)("inlineCode",{parentName:"p"},"object-oriented programming language")," designed for developing smart contracts that run on ",(0,l.kt)("inlineCode",{parentName:"p"},"Ethereum"),". It is highly influenced by C++, JavaScript and Python and  used for implementing small contracts on various ",(0,l.kt)("inlineCode",{parentName:"p"},"blockchain")," platforms such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Ethereum"),". It has been made to target the ",(0,l.kt)("inlineCode",{parentName:"p"},"Ethereum Virtual Machine"),". It is a statically-   typed curly braces programming language which supports inheritance, libraries and also complex user-defined types among other features.",(0,l.kt)("br",{parentName:"p"}),"\n","You can create contracts for uses such as crowdfunding, voting and multi-signature wallets with the help of Solidity.   "),(0,l.kt)("h2",{id:"methods-to-setup-solidity-compiler-on-centos-machine-"},"Methods to setup Solidity compiler on CentOS machine :"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"method-1---npm--nodejs"},"Method 1 - npm / Node.js"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"}," Install Node.js by using the following commands -"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},"#### First install epel-release\n$sudo yum install epel-release\n"))),(0,l.kt)("h4",{id:"now-install-nodejs"},"Now install nodejs"),(0,l.kt)("p",null,"$sudo yum install nodejs"),(0,l.kt)("h4",{id:"next-install-npm-nodejs-package-manager-"},"Next install npm (Nodejs Package Manager )"),(0,l.kt)("p",null,"$sudo yum install npm"),(0,l.kt)("h4",{id:"finally-verify-installation"},"Finally verify installation"),(0,l.kt)("p",null,"$npm --version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> After installation, you will get an output something like this -\n\n")),(0,l.kt)("p",null,"3.10.10"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> Install solc(Solidity compiler)\n \n")),(0,l.kt)("p",null,"$sudonpm install -g solc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> The above command will install `solcjs` program. Now you can test your solidity by issuing following command -\n")),(0,l.kt)("p",null,"$solcjs-version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n> If everything goes fine, then this will print something as follows -\n")),(0,l.kt)("p",null,"0.5.2+commit.1df8f40c.Emscripten.clang"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n### Method 2 - Docker Image\n> Following is the command to pull a Solidity Docker Image and start using it to start with Solidity programming -\n")),(0,l.kt)("p",null,"$docker pull ethereum/solc:stable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> You can verify whether a docker image is downloaded or not by using the following command -\n")),(0,l.kt)("p",null,"$docker run ethereum/solc:stable-version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> This will print something as follows -\n")),(0,l.kt)("p",null,"$ docker run ethereum/solc:stable -version"),(0,l.kt)("p",null,"solc, the solidity compiler commandlineinterfaceVersion: 0.5.2+commit.1df8f40c.Linux.g++"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## Solidity - Basic Syntax :\n---\n A Solidity source files can contain an any number of _import directives_, _pragma directives_ and _contract definitions_.  \n Following is an example of a simple source file of Solidity - \n")),(0,l.kt)("p",null," pragma solidity >=0.4.0 <0.6.0;\ncontract SimpleStorage {\nuint storedData;\nfunction set(uint x) public {\nstoredData = x;\n}\nfunction get() public view returns (uint) {\nreturn storedData;\n}\n}"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'## Importing Files :\n---\nSolidity supports import statements similar to those available in JavaScript.  \n> The following statement imports all global symbols from "filename".  \n```js\nimport "filename";\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'The following example makes a new global symbol symbolName whose members are all the global symbols from "filename".'),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import * as symbolName from "filename";\n')),(0,l.kt)("p",{parentName:"blockquote"},'Use import "./x" as x; to import a file from the same directory as the current file.')),(0,l.kt)("h2",{id:"reserved-keywords-"},"Reserved Keywords :"),(0,l.kt)("p",null,"Following are the reserved keywords in Solidity -  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"abstract                  "),(0,l.kt)("li",{parentName:"ul"},"auto"),(0,l.kt)("li",{parentName:"ul"},"default"),(0,l.kt)("li",{parentName:"ul"},"implements"),(0,l.kt)("li",{parentName:"ul"},"macro"),(0,l.kt)("li",{parentName:"ul"},"of"),(0,l.kt)("li",{parentName:"ul"},"reference"),(0,l.kt)("li",{parentName:"ul"},"static"),(0,l.kt)("li",{parentName:"ul"},"typedef "),(0,l.kt)("li",{parentName:"ul"},"after"),(0,l.kt)("li",{parentName:"ul"},"case"),(0,l.kt)("li",{parentName:"ul"},"define"),(0,l.kt)("li",{parentName:"ul"},"match"),(0,l.kt)("li",{parentName:"ul"},"override ")),(0,l.kt)("h2",{id:"references-"},"References :"),(0,l.kt)("hr",null),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/solidity/index.htm"},"tutorialspoint"))))}m.isMDXComponent=!0}}]);