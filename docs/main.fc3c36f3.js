(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){n("201c"),e.exports=n("7RL8")},"2Lej":function(e,t,n){var o,a=0,i=n("Y3hY");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(t.locals=i.locals),t.use=t.ref=function(){return a++||(o=n("aET+")(i,{hmr:!0})),t},t.unuse=t.unref=function(){a>0&&!--a&&(o(),o=null)}},"7RL8":function(e,t,n){"use strict";n.r(t);n("201c");var o=n("q1tI"),a=n.n(o),i=n("i8i4"),r=(n("ymJX"),n("QOxo"),n("17x9"),n("2Lej")),s=n.n(r),l={throttle:function(e,t,n){var o=void 0,a=void 0,i=void 0,r=null,s=0;n||(n={});var l=function(){s=!1===n.leading?0:+new Date,r=null,i=e.apply(o,a),r||(o=a=null)};return function(){for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];var d=+new Date;s||!1!==n.leading||(s=d);var h=t-(d-s);return o=this,h<=0||h>t?(clearTimeout(r),r=null,s=d,i=e.apply(o,c),r||(o=c=null)):r||!1===n.trailing||(r=setTimeout(l,h)),i}}},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var u="scroll-spy-comp",d=50,h={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scrollToAnchor=function(e){document.getElementById(e).scrollIntoView()},n.setTabActive=function(e){for(var t=n.getTabs(),o=n.getActiveClass(),a=0;a<t.length;a++){var i=t[a];a===e?-1===i.className.indexOf(o)&&(i.className=i.className+o):i.className=i.className.replace(o,"")}},n.scrollHandler=function(){for(var e=n.getScrollItems(),t=0;t<e.length;t++){var o=e[t],a=parseInt(o.id.replace(u,""),10);n.getTabs()[a];n.isElementInViewport(o)&&n.setTabActive(a)}},n.resizeHandler=function(){n.calTabContentHeight()},n.calTabContentHeight=function(){var e=n.getContentDom(),t=n.getTabsContainer(),o=n.state.layout,a=document.body.offsetHeight,i=0;switch(o){case h.TOP:i=document.querySelector(".nav-container").getBoundingClientRect().bottom,e.style.height=a-i-d+"px",t.className=t.className.replace(/[tab-lef|tab-right]/gi,"");break;case h.BOTTOM:i=200,e.style.height=a-i+"px",e.style.marginBottom=d+"px",t.className=t.className.replace(/[tab-lef|tab-right]/gi,"");break;case h.LEFT:t.className=t.className+" tab-left";break;case h.RIGHT:t.className=t.className+" tab-right"}},n.getContentDom=function(){return n.tabContentDom?n.tabContentDom:(n.tabContentDom=document.querySelector(".tab-content"),n.tabContentDom)},n.getScrollItems=function(){return n.scrollItems?n.scrollItems:(n.scrollItems=document.getElementsByClassName("scrollItem"),n.scrollItems)},n.getTabContentHeight=function(){var e=n.getContentDom();return parseFloat(window.getComputedStyle(e).height,10)||0},n.getActiveClass=function(){return" active"},n.getTabs=function(){return document.querySelectorAll(".nav-container>ul")[0].children},n.getTabsContainer=function(){return document.querySelector(".nav-container>ul")},n.isElementInViewport=function(e){return document.body.offsetHeight-n.getTabContentHeight()-d-e.getBoundingClientRect().top>=-150},n.state={layout:n.props.layout},n.scrollHandler=l.throttle(n.scrollHandler,200),n.resizeHandler=l.throttle(n.resizeHandler,200),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),c(t,[{key:"componentDidUpdate",value:function(){this.calTabContentHeight()}},{key:"componentWillUnmount",value:function(){this.getContentDom().removeEventListener("scroll",this.scrollHandler),window.removeEventListener("resize",this.resizeHandler),s.a.unuse()}},{key:"componentDidMount",value:function(){this.getContentDom().addEventListener("scroll",this.scrollHandler),this.calTabContentHeight(),window.addEventListener("resize",this.resizeHandler),this.setTabActive(0)}},{key:"render",value:function(){var e=this,t=a.a.createElement("div",{className:"nav-container"},a.a.createElement("ul",null,this.props.tabs.map(function(t,n){return a.a.createElement("li",{key:"scroll-spy-tab"+n},a.a.createElement("a",{href:"javascript:;",onClick:function(){return e.scrollToAnchor(u+n)}},t))}))),n=a.a.createElement("div",{className:"tab-content"},this.props.components.map(function(e,t){return a.a.createElement("div",{key:u+t,id:u+t,className:"scrollItem"},e)})),o=this.state.layout;return a.a.createElement("div",{className:"ss-root "+o},t," ",n)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return s.a.use(),e.layout!==t.layout?{layout:e.layout}:{layout:h.TOP}}}]),t}(),p=m;m.defaultProps={components:[],tabs:[],layout:h.TOP};var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var g,b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLayoutChange=function(e){n.setState({layout:e.target.value})},n.state={layout:"top"},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),f(t,[{key:"render",value:function(){var e=[[a.a.createElement("div",{className:"text"},a.a.createElement("h3",null,"Facebook Info"),a.a.createElement("p",null,'Facebook is an American online social media and social networking service company based in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes. The founders initially limited the website\'s membership to Harvard students. Later they expanded it to higher education institutions in the Boston area, the Ivy League schools, and Stanford University. Facebook gradually added support for students at various other universities, and eventually to high school students. Since 2006, anyone who claims to be at least 13 years old has been allowed to become a registered user of Facebook, though variations exist in this requirement, depending on local laws. The name comes from the face book directories often given to American university students. Facebook held its initial public offering (IPO) in February 2012, valuing the company at $104 billion, the largest valuation to date for a newly listed public company. It began selling stock to the public three months later. Facebook makes most of its revenue from advertisements that appear onscreen. Facebook can be accessed from a large range of devices with Internet connectivity, such as desktop computers, laptops and tablet computers, and smartphones. After registering, users can create a customized profile indicating their name, occupation, schools attended and so on. Users can add other users as "friends", exchange messages, post status updates, share photos, videos and links, use various software applications ("apps"), and receive notifications of other users\' activity. Additionally, users may join common-interest user groups organized by workplace, school, hobbies or other topics, and categorize their friends into lists such as "People From Work" or "Close Friends". Additionally, users can report or block unpleasant people. Facebook has more than 2.2 billion monthly active users as of January 2018. Its popularity has led to prominent media coverage for the company, including significant scrutiny over privacy and the psychological effects it has on users. In recent years, the company has faced intense pressure over the amount of fake news, hate speech and depictions of violence prevalent on its services, all of which it is attempting to counteract.'))],[a.a.createElement("div",{className:"text"},a.a.createElement("h3",null,"Google Info"),a.a.createElement("p",null,"Google LLC[5] is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet. The company's rapid growth since incorporation has triggered a chain of products, acquisitions, and partnerships beyond Google's core search engine (Google Search). It offers services designed for work and productivity (Google Docs, Sheets, and Slides), email (Gmail/Inbox), scheduling and time management (Google Calendar), cloud storage (Google Drive), social networking (Google+), instant messaging and video chat (Google Allo, Duo, Hangouts), language translation (Google Translate), mapping and navigation (Google Maps, Waze, Google Earth, Street View), video sharing (YouTube), note-taking (Google Keep), and photo organizing and editing (Google Photos). The company leads the development of the Android mobile operating system, the Google Chrome web browser, and Chrome OS, a lightweight operating system based on the Chrome browser. Google has moved increasingly into hardware; from 2010 to 2015, it partnered with major electronics manufacturers in the production of its Nexus devices, and it released multiple hardware products in October 2016, including the Google Pixel smartphone, Google Home smart speaker, Google Wifi mesh wireless router, and Google Daydream virtual reality headset. Google has also experimented with becoming an Internet carrier. In February 2010, it announced Google Fiber, a fiber-optic infrastructure that was installed in Kansas City; in April 2015, it launched Project Fi in the United States, combining Wi-Fi and cellular networks from different providers; and in 2016, it announced the Google Station initiative to make public Wi-Fi available around the world, with initial deployment in India.[6] Alexa Internet monitors commercial web traffic and lists Google.com as the most visited website in the world. Several other Google services also figure in the top 100 most visited websites, including YouTube and Blogger. Google is the most valuable brand in the world as of 2017,[7] but has received significant criticism involving issues such as privacy concerns, tax avoidance, antitrust, censorship, and search neutrality. Google's mission statement is \"to organize the world's information and make it universally accessible and useful\", and its unofficial slogan was \"Don't be evil\". In October 2015, the motto was replaced in the Alphabet corporate code of conduct by the phrase \"Do the right thing\", while the original one was retained in the code of conduct of Google.[8] Around May 2018, the slogan was silently removed from the code's clauses, leaving only one generic reference in its last paragraph.[9]"))],[a.a.createElement("div",{className:"text"},a.a.createElement("h3",null,"Microsoft Info"),a.a.createElement("p",null,'Microsoft Corporation (/ˈmaɪkrəsɒft/,[3][4] abbreviated as MS) is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. As of 2016, it is the world\'s largest software maker by revenue,[5] and one of the world\'s most valuable companies.[6] The word "Microsoft" is a portmanteau of "microcomputer" and "software".[7] Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Microsoft Windows. The company\'s 1986 initial public offering (IPO), and subsequent rise in its share price, created three billionaires and an estimated 12,000 millionaires among Microsoft employees. Since the 1990s, it has increasingly diversified from the operating system market and has made a number of corporate acquisitions, their largest being the acquisition of LinkedIn for $26.2 billion in December 2016,[8] followed by their acquisition of Skype Technologies for $8.5 billion in May 2011.[9] As of 2015, Microsoft is market-dominant in the IBM PC-compatible operating system market and the office software suite market, although it has lost the majority of the overall operating system market to Android.[10] The company also produces a wide range of other consumer and enterprise software for desktops and servers, including Internet search (with Bing), the digital services market (through MSN), mixed reality (HoloLens), cloud computing (Azure) and software development (Visual Studio). Steve Ballmer replaced Gates as CEO in 2000, and later envisioned a "devices and services" strategy.[11] This began with the acquisition of Danger Inc. in 2008,[12] entering the personal computer production market for the first time in June 2012 with the launch of the Microsoft Surface line of tablet computers; and later forming Microsoft Mobile through the acquisition of Nokia\'s devices and services division. Since Satya Nadella took over as CEO in 2014, the company has scaled back on hardware and has instead focused on cloud computing, a move that helped the company\'s shares reach its highest value since December 1999.[13][14]'))],[a.a.createElement("div",{className:"text"},a.a.createElement("h3",null,"IBM Info"),a.a.createElement("p",null,'International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries. The company began in 1911 as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924. IBM manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most U.S. patents generated by a business (as of 2018) for 25 consecutive years.[5] Inventions by IBM include the automated teller machine (ATM), the PC, the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s. IBM has continually shifted its business mix by commoditizing markets focusing on higher-value, more profitable markets. This includes spinning off printer manufacturer Lexmark in 1991 and selling off its personal computer (ThinkPad/ThinkCentre) and x86-based server businesses to Lenovo (2005 and 2014, respectively), and acquiring companies such as PwC Consulting (2002), SPSS (2009), and The Weather Company (2016). Also in 2014, IBM announced that it would go "fabless", continuing to design semiconductors, but offloading manufacturing to GlobalFoundries. Nicknamed Big Blue, IBM is one of 30 companies included in the Dow Jones Industrial Average and one of the world\'s largest employers, with (as of 2017) over 380,000 employees. Known as "IBMers", IBM employees have been awarded five Nobel Prizes, six Turing Awards, ten National Medals of Technology and five National Medals of Science.'))]],t=a.a.createElement(p,{layout:this.state.layout,components:e,tabs:["Facebook","Google","Microsoft","IBM"]}),n=a.a.createElement("div",{className:"optionsContainer"},a.a.createElement("label",{className:"layout-text"},"Layout: "),a.a.createElement("select",{value:this.state.layout,onChange:this.handleLayoutChange,className:"combo"},a.a.createElement("option",{value:"top"},"Top"),a.a.createElement("option",{value:"bottom"},"Bottom"),a.a.createElement("option",{value:"left"},"Left"),a.a.createElement("option",{value:"right"},"Right")));return a.a.createElement("div",{className:"App"},n," ",t)}}]),t}();g=a.a.createElement(b,null),Object(i.render)(g,document.querySelector("#root"))},QOxo:function(e,t,n){},Y3hY:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"/** 组件style  **/\n.ss-root {\n  display: flex;\n  position: relative;\n}\n.top {\n  flex-direction: column;\n}\n.bottom {\n  flex-direction: column-reverse;\n}\n.left {\n  flex-direction: row;\n}\n.right {\n  flex-direction: row-reverse;\n}\n.tab-content {\n  overflow-x: auto;\n  overflow-y: auto;\n  height: 700px;\n}\n.scrollItem {\n  overflow: hidden;\n}\n.nav-container {\n  font-size: 18px;\n  border-bottom: 1px solid #E8E8E8;\n  white-space: nowrap;\n  text-align: left;\n  padding-left: 30px;\n}\n.nav-container ul {\n  list-style: none;\n  padding-left: 0;\n}\n.nav-container li {\n  display: inline;\n  margin-right: 30px;\n}\n.nav-container a {\n  color: #595959;\n  text-decoration: none;\n}\n.nav-container .active {\n  border-bottom: 2px solid #1890ff;\n  padding-bottom: 20px;\n}\n.nav-container .active a {\n  color: #1890ff;\n  text-decoration: none;\n}\n.nav-container .tab-left li {\n  display: block;\n  margin-bottom: 20px;\n}\n.nav-container .tab-right li {\n  display: block;\n  margin-bottom: 20px;\n}\n",""])},ymJX:function(e,t,n){}},[[0,2,1]]]);