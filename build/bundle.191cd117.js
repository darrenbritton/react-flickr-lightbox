webpackJsonp([2],{0:function(t,e,n){t.exports=n("Cao3")},P2B4:function(t,e,n){"use strict";function _taggedTemplateLiteralLoose(t,e){return t.raw=e,t}var i=n("KSGD"),o=n.n(i),r=n("GiK3"),a=n.n(r),s=n("zs/6"),l=n("l4Zv"),p=n.n(l),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},h=_taggedTemplateLiteralLoose(["\n  margin-right: ",";\n  overflow: hidden;\n  color: palevioletred;\n\n\t@media (max-width: 500px) {\n\t\tmargin-right: -",";\n\t}\n"],["\n  margin-right: ",";\n  overflow: hidden;\n  color: palevioletred;\n\n\t@media (max-width: 500px) {\n\t\tmargin-right: -",";\n\t}\n"]),u=_taggedTemplateLiteralLoose(["\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tfloat: left;\n\tline-height: 0;\n\tpadding-right: ",";\n\tpadding-bottom: ",";\n\toverflow: hidden;\n\n\t","\n\n\t","\n\n\t@media (max-width: 500px) {\n\t\tpadding-right: ",";\n\t\tpadding-bottom: ",";\n\t}\n"],["\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tfloat: left;\n\tline-height: 0;\n\tpadding-right: ",";\n\tpadding-bottom: ",";\n\toverflow: hidden;\n\n\t","\n\n\t","\n\n\t@media (max-width: 500px) {\n\t\tpadding-right: ",";\n\t\tpadding-bottom: ",";\n\t}\n"]),g=_taggedTemplateLiteralLoose(["\n\t\twidth: 30%;\n  "],["\n\t\twidth: 30%;\n  "]),d=_taggedTemplateLiteralLoose(["\n\t\tpadding-bottom: 0;\n\t\twidth: 40%;\n\t\t@media (max-width: 500px) {\n\t\t\tpadding-bottom: 0;\n\t\t}\n\t"],["\n\t\tpadding-bottom: 0;\n\t\twidth: 40%;\n\t\t@media (max-width: 500px) {\n\t\t\tpadding-bottom: 0;\n\t\t}\n\t"]),m=_taggedTemplateLiteralLoose(["\n\tborder: 0;\n\tdisplay: block;\n\theight: auto;\n\tmax-width: 100%;\n\twidth: auto;\n"],["\n\tborder: 0;\n\tdisplay: block;\n\theight: auto;\n\tmax-width: 100%;\n\twidth: auto;\n"]),b="2px",f="4px",y=s.b.div(h,b,f),x=s.b.a(u,b,b,function(t){return t.landscape&&Object(s.a)(g)},function(t){return t.square&&Object(s.a)(d)},f,f),_=s.b.img(m),k=function(t){function Gallery(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Gallery);var e=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return e.state={lightboxIsOpen:!1,currentImage:0},e.closeLightbox=e.closeLightbox.bind(e),e.gotoNext=e.gotoNext.bind(e),e.gotoPrevious=e.gotoPrevious.bind(e),e.gotoImage=e.gotoImage.bind(e),e.handleClickImage=e.handleClickImage.bind(e),e.openLightbox=e.openLightbox.bind(e),e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Gallery,t),Gallery.prototype.openLightbox=function openLightbox(t,e){e.preventDefault(),this.setState({currentImage:t,lightboxIsOpen:!0})},Gallery.prototype.closeLightbox=function closeLightbox(){this.setState({currentImage:0,lightboxIsOpen:!1})},Gallery.prototype.gotoPrevious=function gotoPrevious(){this.setState({currentImage:this.state.currentImage-1})},Gallery.prototype.gotoNext=function gotoNext(){this.setState({currentImage:this.state.currentImage+1})},Gallery.prototype.gotoImage=function gotoImage(t){this.setState({currentImage:t})},Gallery.prototype.handleClickImage=function handleClickImage(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},Gallery.prototype.renderGallery=function renderGallery(){var t=this,e=this.props.images;if(e){var n=e.map(function(e,n){return a.a.createElement(x,c({href:e.src,key:n,onClick:function onClick(e){return t.openLightbox(n,e)}},e.orientation),a.a.createElement(_,{src:e.thumbnail}))});return a.a.createElement(y,null,n)}},Gallery.prototype.render=function render(){return a.a.createElement("div",null,this.props.heading&&a.a.createElement("h2",null,this.props.heading),this.props.subheading&&a.a.createElement("p",null,this.props.subheading),this.renderGallery(),a.a.createElement(p.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox,showThumbnails:this.props.showThumbnails,spinner:this.props.spinner,spinnerColor:this.props.spinnerColor,spinnerSize:this.props.spinnerSize,theme:this.props.theme}))},Gallery}(r.Component);k.displayName="Gallery",k.propTypes={heading:o.a.string,images:o.a.array,showThumbnails:o.a.bool,subheading:o.a.string},e.a=k},V1lK:function(t,e,n){var i={react:n("GiK3")},o=n("kCi/").bind(null,i),r=n("grFk").bind(null,"var React = require('react');",o);t.exports=[{type:"markdown",content:"basic example:"},{type:"code",content:"<FlickrLightbox api_key='1b4e5b0203fab0d5731afe68f0a543e1' user_id='132343752@N06' limit={9} />",settings:{},evalInContext:r},{type:"markdown",content:"example with just searchTerm example:"},{type:"code",content:"<FlickrLightbox api_key='1b4e5b0203fab0d5731afe68f0a543e1' searchTerm='cats' limit={9} />",settings:{},evalInContext:r},{type:"markdown",content:"example with no user id, album id or searchTerm example:"},{type:"code",content:"<FlickrLightbox api_key='1b4e5b0203fab0d5731afe68f0a543e1' limit={9} />",settings:{},evalInContext:r}]},lVK7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o,r=n("GiK3"),a=n.n(r),s=n("KSGD"),l=n.n(s),p=n("al8W"),c=n.n(p),h=n("P2B4"),u=n("rplX"),g=(n.n(u),i=function(t){function FlickrLightbox(e){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,FlickrLightbox);var n=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,e));return o.call(n),n.state={images:[]},n}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(FlickrLightbox,t),FlickrLightbox.prototype.componentWillMount=function componentWillMount(){this.queryFlickrApi(this.props)},FlickrLightbox.prototype.componentWillReceiveProps=function componentWillReceiveProps(t){this.queryFlickrApi(t)},FlickrLightbox.prototype.render=function render(){return a.a.createElement(h.a,{images:this.state.images,className:this.props.className})},FlickrLightbox}(r.Component),o=function _initialiseProps(){var t=this;this.generateApiUrl=function(t){return c()("https://api.flickr.com",{path:"services/rest/",queryParams:{method:t.user_id||t.album_id||t.searchTerm?"flickr.photos.search":"flickr.photos.getRecent",format:"json",api_key:t.api_key||"",user_id:t.user_id||"",album_id:t.album_id||"",text:t.searchTerm||"",per_page:t.limit||Number.MAX_SAFE_INTEGER,nojsoncallback:"?",extras:["url_o","url_m","url_sq","license","date_upload","date_taken","icon_server","original_format","last_update","geo","tags","machine_tags","o_dims","views","media","path_alias","owner_name"].join(",")}})},this.queryFlickrApi=function(e){fetch(t.generateApiUrl(e)).then(function(t){return t.json()}).then(function(e){if(!e.photos)throw e;t.setState({images:e.photos.photo.map(function(t){return{src:t.url_o||t.url_m||"https://s.yimg.com/pw/images/en-us/photo_unavailable.png",thumbnail:t.url_sq,caption:(t.title||"Untitled")+": Photo by "+t.ownername}})})}).catch(function(t){return console.error(t)})}},i);g.propTypes={api_key:l.a.string.isRequired,user_id:l.a.string,album_id:l.a.string,limit:l.a.number,searchTerm:l.a.string,className:l.a.string},e.default=g},pt6B:function(t,e,n){t.exports={description:"generates a gallery and lightbox using the given flickr api key and details\n",displayName:"FlickrLightbox",methods:[],props:{api_key:{type:{name:"string"},required:!0,description:"api key for accessing flickr (see [here](https://www.flickr.com/services/api/misc.api_keys.html) for more details)",tags:{}},user_id:{type:{name:"string"},required:!1,description:"flickr user id of user to fetch photos from",tags:{}},album_id:{type:{name:"string"},required:!1,description:"flickr album id to fetch photos from",tags:{}},limit:{type:{name:"number"},required:!1,description:"integer limit of photos to be displayed",tags:{}},searchTerm:{type:{name:"string"},required:!1,description:"search term used to filter photos (searches using title, description and tags)",tags:{}},className:{type:{name:"string"},required:!1,description:"class name to be applied to root div",tags:{}}},doclets:{},tags:{},examples:n("V1lK")}}},[0]);