(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(38)},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),s=(t(31),t(23)),i=t(5),o=t(6),m=t.n(o),u=t(10),h=t(11),d=t(12),E=t(14),v=t(13),p=t(15),_=function(){var e=Object(u.a)(m.a.mark(function e(){var a,t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mate-academy.github.io/react_uber-eats/api/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json",e.next=3,fetch("https://mate-academy.github.io/react_uber-eats/api/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"dash uno"}),r.a.createElement("div",{className:"dash dos"}),r.a.createElement("div",{className:"dash tres"}),r.a.createElement("div",{className:"dash cuatro"}))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{class:"main-section__search",method:"GET"},r.a.createElement("label",null,r.a.createElement("input",{class:"main-section__search-field",type:"text",placeholder:"Search for restaurant or cuisine"})),r.a.createElement("label",null,r.a.createElement("input",{class:"main-section__search--button visually-hidden ",type:"button",value:""}))),r.a.createElement("form",{class:"main-section__delivery",method:"POST"},r.a.createElement("span",{class:"header__delivery--text"},"When"),r.a.createElement("span",{class:"header__delivery--text"},"to"),r.a.createElement("label",null,r.a.createElement("select",{class:"header__delivery--asap"},r.a.createElement("option",null,"asap"))),r.a.createElement("label",null,r.a.createElement("input",{class:"header__delivery--adress",type:"text",placeholder:"ul. Tarasivska St, 16",required:""})),r.a.createElement("label",null,r.a.createElement("input",{class:"main-section__delivery--button visually-hidden ",type:"button",value:""}))),r.a.createElement("h1",{class:"main-section__heading"},"London Restaurants"))},b=t(22),y=t.n(b),k=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLocation:!1,isSearch:!1,isDelivered:!1,valueTextInput:"Google",valueRestaurant:"",timeDelivery:"Deliver now"},t.handleDelivery=function(){t.setState({isLocation:!1,isSearch:!1,isDelivered:!t.state.isDelivered})},t.changeTimeDelivery=function(e){t.setState({timeDelivery:e,isDelivered:!t.state.isDelivered})},t.handleLocation=function(){t.setState({isLocation:!t.state.isLocation,isSearch:!1,isDelivered:!1})},t.handleSearch=function(){t.setState({isSearch:!t.state.isSearch,isLocation:!1,isDelivered:!1})},t.filterRestaurant=function(e){var a=e.target.value;t.setState({valueRestaurant:a}),t.props.searchRestaurant(a)},t.updateInputLocation=function(e){t.setState({valueTextInput:e.target.value})},t.clearText=function(){t.setState({valueTextInput:""})},t.clearTextRestaurant=function(){t.setState({valueRestaurant:""}),t.props.searchRestaurant("")},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.isLocation,n=a.isSearch,l=a.isDelivered,c=a.valueTextInput,s=a.valueRestaurant,i=a.timeDelivery;return r.a.createElement("header",null,r.a.createElement("div",{class:"header__top"},r.a.createElement("form",null,r.a.createElement("div",{className:"header__location-section"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg",class:"header__logo"})),t?r.a.createElement("div",{className:"header__location-input"},r.a.createElement("div",null,r.a.createElement("img",{src:"images/icons/location.svg",alt:"map-marker"}),r.a.createElement("input",{onChange:this.updateInputLocation,type:"text",name:"userQuery",placeholder:"Enter shipping address",value:c})),r.a.createElement("button",{onClick:this.clearText,type:"button"},"Clear"),r.a.createElement("div",{className:"header__vertical-line"}),r.a.createElement("button",{onClick:this.handleLocation,type:"button"},r.a.createElement("img",{src:"images/icons/close.svg",alt:"map-marker"}))):r.a.createElement("button",{onClick:this.handleLocation},r.a.createElement("div",{className:"header__button"},r.a.createElement("img",{src:"images/icons/location.svg",alt:"map-marker"}),r.a.createElement("span",null,"London"))),r.a.createElement("div",{className:"header__dropdown"},r.a.createElement("button",{onClick:this.handleDelivery},r.a.createElement("div",{className:y()({header__button:!0,header__active:l})},r.a.createElement("img",{src:"images/icons/time.svg",alt:"map-marker"}),r.a.createElement("span",null,i))),l?r.a.createElement("div",{className:"header__dropdown-child"},r.a.createElement("button",{onClick:function(){return e.changeTimeDelivery("Deliver now")}},r.a.createElement("div",{className:"header__button"},r.a.createElement("img",{src:"images/icons/time.svg",alt:"map-marker"}),r.a.createElement("span",null,"Deliver now"))),r.a.createElement("button",{onClick:function(){return e.changeTimeDelivery("Schedule for later")}},r.a.createElement("div",{className:"header__button"},r.a.createElement("img",{src:"images/icons/calendar.svg",alt:"map-marker"}),r.a.createElement("span",null,"Schedule for later")))):""))),r.a.createElement("div",{className:"header__auth"},n?r.a.createElement("div",{className:"header__location-input"},r.a.createElement("div",null,r.a.createElement("img",{src:"images/icons/search.svg",alt:"map-marker"}),r.a.createElement("input",{onChange:this.filterRestaurant,type:"text",name:"userQuery",placeholder:"What would you like?",value:s})),r.a.createElement("button",{onClick:this.clearTextRestaurant,type:"button"},"Clear"),r.a.createElement("div",{className:"header__vertical-line"}),r.a.createElement("button",{onClick:this.handleSearch,type:"button"},r.a.createElement("img",{src:"images/icons/close.svg",alt:"map-marker"}))):r.a.createElement("button",{onClick:this.handleSearch},r.a.createElement("div",{className:"header__button"},r.a.createElement("img",{src:"images/icons/search.svg",alt:"map-marker"}),r.a.createElement("span",null,"Search"))),r.a.createElement("a",{href:"#/",class:"header__button--auth"},"Sign In"))))}}]),a}(r.a.Component),w=function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("section",{class:"footer__section"},r.a.createElement("div",{class:"footer__logo"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"images/icons/white-logo.svg",alt:"logo"}))),r.a.createElement("hr",{class:"hr"}),r.a.createElement("div",{class:"footer__nav"},r.a.createElement("div",{class:"footer__column"},r.a.createElement("form",{class:"footer__nav-lang"},r.a.createElement("select",{class:"footer__nav-lang-input"},r.a.createElement("option",{class:"footer__nav-lang-input",value:"\u0420\u0423\u0421\u0421\u041a\u0418\u0419"},"\u0420\u0423\u0421\u0421\u041a\u0418\u0419"),r.a.createElement("option",{class:"footer__nav-lang-input",selected:!0,value:"ENGLISH"},"ENGLISH"),r.a.createElement("option",{class:"footer__nav-lang-input",value:"\u0423\u041a\u0420\u0410\u0407\u041d\u0421\u042c\u041a\u0410"},"\u0423\u041a\u0420\u0410\u0407\u041d\u0421\u042c\u041a\u0410"))),r.a.createElement("p",{class:"footer__nav-name"},r.a.createElement("span",{class:"footer__nav-name-hash"},"#"),r.a.createElement("span",{class:"footer__nav-name-name"},"UberEats")),r.a.createElement("div",{class:"footer__social"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"images/icons/facebook.svg",alt:"facebook-icon"})),r.a.createElement("a",{class:"footer__social--twitter",href:"#"},r.a.createElement("img",{src:"images/icons/twitter.svg",alt:"twitter-icon"})),r.a.createElement("a",{class:"footer__social--instagram",href:"#"},r.a.createElement("img",{src:"images/icons/instagram.svg",alt:"instagram-icon"})))),r.a.createElement("div",{class:"footer__column"},r.a.createElement("a",{href:"#/"},"About UberEats"),r.a.createElement("a",{href:"#/"},"Become a Delivery Partner"),r.a.createElement("a",{href:"#/"},"Become a Restaurant Partner")),r.a.createElement("div",{class:"footer__column"},r.a.createElement("a",{href:"#/"},"See all cities"),r.a.createElement("a",{href:"#/"},"Pricing"),r.a.createElement("a",{href:"#/"},"Help"),r.a.createElement("a",{href:"#/"},"FAQs"))),r.a.createElement("hr",{class:"hr"}),r.a.createElement("div",{class:"footer__app"},r.a.createElement("a",{class:"appstore",href:"#/",target:"_blank"},r.a.createElement("img",{src:"images/download_apple.png",alt:"appstore-icon"})),r.a.createElement("a",{class:"gplay",href:"#/",target:"_blank"},r.a.createElement("img",{src:"images/google_play.png",alt:"googleplay-icon"}))),r.a.createElement("hr",{class:"hr"}),r.a.createElement("div",{class:"footer__rights"},r.a.createElement("p",null,"\xa9 2019 Uber Technologies Inc."),r.a.createElement("a",{class:"link",href:"#/"},"Privacy"),r.a.createElement("a",{class:"link",href:"#/"},"Terms")),r.a.createElement("a",{href:"#",class:"arrow-to-top"})))},S=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={restaurants:[],loading:!1,errors:null,filterRestaurants:""},t.searchRestaurant=function(e){t.setState({filterRestaurants:t.state.restaurants.filter(function(a){return-1!==a.title.toLowerCase().indexOf(e.toLowerCase())})})},t}return Object(p.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark(function e(){var a,t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:a=e.sent,t=a.data.feedItems.map(function(e){return a.data.storesMap[e.uuid]}),this.setState({restaurants:t,filterRestaurants:t,loading:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({errors:"Phone was not found"});case 11:case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.errors,n=e.filterRestaurants;return r.a.createElement("main",null,t?r.a.createElement("h1",{className:"error-title centr"},t):a?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{searchRestaurant:this.searchRestaurant}),r.a.createElement(g,null),r.a.createElement("section",{class:"catalog"},n.map(function(e){return r.a.createElement("a",{href:"#/",class:"catalog__item"},r.a.createElement("div",{href:"#/",class:"catalog__item--image"},r.a.createElement("img",{src:e.heroImageUrl,alt:"mcdonalds"})),r.a.createElement("div",{href:"#/",class:"catalog__item--name"},r.a.createElement("h2",null,e.title)),r.a.createElement("div",{className:"catalog__item--categoria"},e.categories.map(function(e){return r.a.createElement("p",{class:"catalog__item--cuisine"},e)})),r.a.createElement("p",{class:"catalog__item--delivery-time"},e.etaRange?e.etaRange.text:"10\u201330 min"))})),r.a.createElement(w,null)):r.a.createElement(f,null))}}]),a}(r.a.Component),x=function(){return r.a.createElement(s.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:S})))},R=t(9),N=t.n(R);function C(){0==N()(window).scrollTop()?N()(".header__top").removeClass("header__fixed"):N()(".header__top").addClass("header__fixed")}c.a.render(r.a.createElement(x,null),document.getElementById("root")),C(),N()(window).scroll(function(){C()})}},[[26,1,2]]]);
//# sourceMappingURL=main.7193c00c.chunk.js.map