//Browser Constructor
kony.ui.Browser = function(bconfig, lconfig, pspconfig) {

	if(arguments.length < 3)
		bconfig = lconfig = pspconfig = $KU.mergeDefaults(bconfig, $KU.getAllDefaults("Browser"));
		
	kony.ui.Browser.baseConstructor.call(this, bconfig, lconfig, pspconfig);
		
	this.onSuccess = bconfig.onSuccess;					//Not Supported	
	this.onFailure = bconfig.onFailure;					//Not Supported	
	this.screenLevelWidget = bconfig.screenLevelWidget; //Not Supported	
	this.enableZoom = bconfig.enableZoom;				//Not Supported	
	this.detectTelNumber = bconfig.detectTelNumber;		//Not Supported	
	
	this.readconfig = function(val) {
    		this.url = val.URL;
    		this.method = val.requestMethod;
    		this.data = val.requestData;
	}
    
    bconfig.requestURLConfig && this.readconfig(bconfig.requestURLConfig);
    this.requesturlconfig = bconfig.requestURLConfig;	
	this.htmlstring =  bconfig.htmlString;

	
	this.containerheight = lconfig.containerHeight;	
	this.containerheightreference = lconfig.containerHeightReference || constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE;
	
    //Internal Usage
    this.wType = "Browser";
    this.name =  "kony.ui.Browser";
	
	this.setGetterSetter();	
};

kony.inherits(kony.ui.Browser,kony.ui.Widget);

kony.ui.Browser.prototype.setGetterSetter = function() {

	defineGetter(this, "htmlString", function() {
		return this.htmlstring;
	});	
	defineSetter(this, "htmlString", function(val) {
		this.htmlstring = val;
		$KW[this.wType]["updateView"](this,  "htmlstring" , val);
	});	

	defineGetter(this, "requestURLConfig", function() {
		return this.requesturlconfig;
	});	
	defineSetter(this, "requestURLConfig", function(val) {
		this.requesturlconfig = val;
		this.readconfig(val);
		$KW[this.wType]["updateView"](this, "requesturlconfig", val);
	});


	defineGetter(this, "containerHeight", function() {
		return this.containerheight;
	});	

	defineSetter(this, "containerHeight", function(val) {
		this.containerheight = val;
		kony.model.updateView(this, "containerheight", val);
	});	

	defineGetter(this, "containerHeightReference", function() {
		return this.containerheightreference;
	});	
	
	defineSetter(this, "containerHeightReference", function(val) {
		this.containerheightreference = val;
		kony.model.updateView(this, "containerheightreference", val);
	});
		
}

//Browser Methods	
kony.ui.Browser.prototype.reload = 
kony.ui.Browser.prototype.goForward = 
kony.ui.Browser.prototype.goBack = 
kony.ui.Browser.prototype.canGoBack = 
kony.ui.Browser.prototype.canGoForward = 
kony.ui.Browser.prototype.clearHistory = function() {	
	console.warn("Browser Methods are not supported in SPA");
};

//FTR691
kony.ui.Browser.prototype.evaluateJavaScript = function(jscript) {
	kony.print("executing javascript in "+this.id + " window handler");	
	var scr = document.createElement('script');
	scr.innerHTML = this.id+"Err = null; try{"+jscript+"}catch(e){"+this.id+"Err=e"+"}";
	if($KG["webView"+this.id] && !$KG["webView"+this.id].closed) {
		//Cross domain execution is not possible, hence throw not supported error
		var anchor = document.createElement('a');
        anchor.href = this.url;
		if(window.location.origin != anchor.origin)
		{
			throw {	 			
	 			"errorCode": "104",
	 			"name" : "Not supported Error",
	 			"message": "Not supported Error"
	 		}
		}
		$KG["webView"+this.id].document.head.appendChild(scr);
		if($KG["webView"+this.id][this.id+"Err"] != null){ //when any script errors, throw KonyError
			throw {	 			
		 			"errorCode": "106",
		 			"name": "Unknown Error",
		 			"message": "Unknown Error"
		 		}
		}
	}
	else {
		document.head.appendChild(scr);
		if(window[this.id+"Err"] != null){ //when any script errors, throw KonyError
			throw {	 			
		 			"errorCode": "106",
		 			"name": "Unknown Error",
		 			"message": "Unknown Error"
		 		}
		}
	}
	
	return null;
};

kony.ui.Browser.prototype.evaluateJavaScriptAsync = function(jscript){
	return null;
}