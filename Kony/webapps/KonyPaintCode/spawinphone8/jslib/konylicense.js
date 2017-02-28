$KI.db={changeversion:function(b,e,f,d,c,a){if(window.openDatabase){if(b){b.changeVersion(e,f,d,c,a)}}else{kony.print("Web Databases not supported")}},executesql:function(e,a,d,b,c){if(window.openDatabase){if(e){if(d&&d[0]===null){d=d.slice(1)}e.executeSql(a,d,b,c)}}else{kony.print("Web Databases not supported")}},opendatabase:function(d,b,h,f,a){var c=this.db||null;a=a||kony_dummyForDBCallback;try{if(window.openDatabase){if(!c){c=openDatabase(d,b,h,f,a);this.db=c}}else{kony.print("Web Databases not supported")}}catch(g){if(g==2){kony.print("opendatabase:Invalid database version.")}else{kony.print("opendatabase:Unknown error "+g+".")}return null}return c},readtransaction:function(b,d,c,a){if(window.openDatabase){if(b){b.readTransaction(d,c,a)}}else{kony.print("Web Databases not supported")}},sqlresultsetrowitem:function(c,a,b){if(window.openDatabase){if(b<a.rows.length){return a.rows.item(b)}else{return null}}else{kony.print("Web Databases not supported")}},transaction:function(b,d,c,a){if(window.openDatabase){if(b){b.transaction(d,c,a)}}else{kony.print("Web Databases not supported")}}};function kony_dummyForDBCallback(){};
if(typeof(localStorage)==="object"||kony.appinit.isIE7){$KI.ds={save:function(d,f,a){if(localStorage){try{localStorage.setItem(f,JSON.stringify(d))}catch(c){if(c.name=="QUOTA_EXCEEDED_ERR"){var b=0,g="";if(localStorage.length===0){b=707;g="Private Browsing is switched ON"}else{b=708;g="Data storage limit has exceeded"}return{errcode:b,errmsg:g}}}}else{kony.print("localStorage not supported")}},read:function(b){if(localStorage){var a=JSON.parse(localStorage.getItem(b)||"null");return a}else{kony.print("localStorage readitem failed");return null}},Delete:function(a){if(localStorage){localStorage.removeItem(a);return true}else{kony.print("localStorage delete failed");return false}}};$KI.localstorage={key:function(a){return(localStorage.key(a-IndexJL))},getitem:function(b){var a=JSON.parse(localStorage.getItem(b)||"null");return a},setitem:function(d,b){var a=d,f=b;if(typeof d=="object"){for(x in d){a=x}f=d[x]}try{localStorage.setItem(a,JSON.stringify(f))}catch(c){if(c.name=="QUOTA_EXCEEDED_ERR"){if(localStorage.length===0){console.warn("Private Browsing is switched ON")}else{console.warn("Data storage limit has exceeded")}}}},removeitem:function(a){localStorage.removeItem(a)},clear:function(){localStorage.clear()},length:function(){return localStorage.length}}}else{kony.print("localStorage not supported")};


kony.application = {
  createAppMenu : $KW.Appmenu && $KW.Appmenu.createappmenu,
  setCurrentAppMenu : $KW.Appmenu && $KW.Appmenu.setcurrentappmenu,
  getCurrentAppMenu : $KW.Appmenu && $KW.Appmenu.getcurrentappmenu,
  setAppMenuFocusByID : $KW.Appmenu && $KW.Appmenu.setappmenufocusbyid,
  addAppMenuItemAt : $KW.Appmenu && $KW.Appmenu.addappmenuitemat,
  removeAppMenuItemAt : $KW.Appmenu && $KW.Appmenu.removeappmenuitemat,
  setAppMenu : $KW.Appmenu && $KW.Appmenu.setappmenu,
  setAppMenuFocusIndex : $KW.Appmenu && $KW.Appmenu.setappmenufocusindex,
  showAppMenuItems : $KW.Appmenu && $KW.Appmenu.showappmenuitems,
  hideAppMenuItems : $KW.Appmenu && $KW.Appmenu.hideappmenuitems,
  setBMState : kony.bm.setBMState,
  resetBMState : kony.bm.resetBMState,
  getBMState : kony.bm.getBMState,
  getFormId : kony.bm.getFormId,
  addBMState : kony.bm.addBMState,
  removeBMState : kony.bm.removeBMState,
  exit : $KI.exit,
  getPreviousForm : $KW.Form && $KW.Form.getPreviousForm,
  getCurrentForm : $KW.Form && $KW.Form.getCurrentForm,
  removeGestureRecognizerForAllForms : $KW.Widget
    && $KW.Widget.removegesturerecognizerforallforms,
  setGestureRecognizerForAllForms : $KW.Widget
    && $KW.Widget.addgesturerecognizerforallforms,
  getApplicationMode : $KI.os && $KI.os.getapplicationmode,
  setApplicationMode : $KI.os && $KI.os.setapplicationmode,
  setApplicationInitializationEvents : $KI.setappevents,
  registerForIdleTimeout : $KI.appevents
    && $KI.appevents.registerforidletimeout,
  unregisterForIdleTimeout : $KI.appevents
    && $KI.appevents.unregisterforidletimeout,
  setApplicationBadgeValue : tobeimplemented,
  getApplicationBadgeValue : tobeimplemented,
  setAppMenuBadgeValue : tobeimplemented,
  getAppMenuBadgeValue : tobeimplemented,
  appReset : $KI.appreset,
  setAppHeaders : $KI.setappheaders,
  setAppFooters : $KI.setappfooters,
  setApplicationCallbacks : $KI.setapplicationcallbacks,
  setApplicationBehaviors : $KI.setapplicationbehaviors,
  showLoadingScreen : $KI.window && $KI.window.showLoadingScreen,
  dismissLoadingScreen : $KI.window && $KI.window.dismissLoadingScreen,
  openURL : $KI.window.openURL
 };
kony.cloud = {}
 kony.cloud.appevents = (function() {
	
	var idletimeout = {id:null, value:0, cb:null, enabled:false, expired: false, lastInteraction: 0};
		
	return {			

		timercb: function(){
			var currentform = $KW.Form.getCurrentForm();
			idletimeout.cb && idletimeout.cb(currentform);			
		},
		
		registerforidletimeout: function(time, cb){
			if (!idletimeout.enabled) {
				//kony.print("registerforidletimeout: " + time);
				idletimeout.value = time * 60 * 1000;
				idletimeout.id = setTimeout(kony.cloud.appevents.timercb, idletimeout.value);
				idletimeout.lastInteraction = new Date().getTime();
				idletimeout.enabled = true;
				idletimeout.expired = false;
				idletimeout.cb = cb;
				$KG["__cloudidletimeout"] = idletimeout;
			}
		},
		
		unregisterforidletimeout: function() {			
			clearTimeout(idletimeout.id);
			idletimeout.enabled = false;
			$KG["__cloudidletimeout"] = "";
		},
		
		resettimer: function() {
			//kony.print("resettimer: " + idletimeout.value);	
			var curTime = new Date().getTime();
			if( (curTime - idletimeout.lastInteraction)  >= idletimeout.value ){
				$KI.appevents.timercb();
				return;
			}else{
				clearTimeout(idletimeout.id);
				idletimeout.id = setTimeout(kony.cloud.appevents.timercb, idletimeout.value);
				idletimeout.lastInteraction = curTime;
			}
		}
	}
})();

/*
*
*	File      : license.js  6.0 Dev
*	Version   : 6.0.Dev_v201410111835
*   TimeStamp : 07-01-2014 17:45:00
*	
*/

kony.license = {};
kony.metric = {};
kony.license.lastIdleTimeoutTime = 0;
kony.license.timeoutVal=30;
kony.license.nextSession = true;
kony.license.disableMetricReporting = function(){
	kony.ds.save(["true"], "LicenseDisableFlag");
}

var appConfig = undefined;

kony.licensevar = {};

kony.licensevar.currentSessionId = "";

kony.licensevar.changeHandlers = [];

kony.licensevar.isLicenseUrlAvailable = true;

kony.license.isLicenseUrlAvailable = function() {
	return kony.licensevar.isLicenseUrlAvailable;
}

kony.license.setIsLicenseUrlAvailable = function(value) {
	 kony.licensevar.isLicenseUrlAvailable = value;
}

kony.license.getSessionId = function() {
	return kony.licensevar.currentSessionId;
}

kony.license.registerChangeListener = function(changeHandler){
	
	if(!changeHandler){
		return;
	}
	// We give the initial values once
	var changes = {};
	var userId = kony.ds.read("konyUserID");
	changes["sessionId"] = kony.licensevar.currentSessionId;
	if(userId != undefined && userId[0] != undefined && userId[0]!=null){
	   changes["userId"] = userId[0] ;
	} 
	changeHandler(changes);

	// Add to my listeners
	kony.licensevar.changeHandlers.push(changeHandler);
};

kony.license.notifyChangesToListeners = function(){
	for(var i = 0; i < kony.licensevar.changeHandlers.length; i++){		
		var changes = {};
		var userId = kony.ds.read("konyUserID");
		changes["sessionId"] = kony.licensevar.currentSessionId;
		if(userId != undefined && userId[0] != undefined && userId[0]!=null){
		   changes["userId"] = userId[0];
		} 
		var changeHandler = kony.licensevar.changeHandlers[i];
		changeHandler(changes);
	}
};

 
/*
*	Name      : kony.setUserID
*	Author    : None
*	Purpose   : Stores the userID in device local, once set.
*/

kony.setUserID = function(userId){ "use strict";
	var user = new Array;
	user.push(userId);
	kony.ds.save(user, "konyUserID");
	kony.license.notifyChangesToListeners();
}

/*
*	Name      : kony.license.startLicenseService
*	Author    : None
*	Purpose   : Single global function which contains definitions of all required functions for session tracking.
*/
Object.defineProperty(kony.license, "startLicenseService", {enumerable: false, configurable: false, writable: false, value: function() { "use strict";

/*
*	Name      : getLicenseUrl
*	Author    : None
*	Purpose   : Internal function to get the appropriate IST url for session calls
*/

function getLicenseUrl() {
	var url = "";
	if(appConfig.isturlbase){
		url = appConfig.isturlbase + "/IST";
	}
	else if(appConfig.secureurl){
		url = getFromServerUrl(appConfig.secureurl , "IST");
	}
	else if(appConfig.url){
		url = getFromServerUrl(appConfig.url, "IST");
	}
	else{
		url = null;
	}
	return url;
}

/*
*	Name      : getMetricsUrl
*	Author    : None
*	Purpose   : Internal function to get the appropriate CMS url for custom metrics calls
*/

function getMetricsUrl() {
	var url = "";
	if(appConfig.isturlbase){
		url = appConfig.isturlbase + "/CMS";
	}
	else if(appConfig.secureurl){
		url = getFromServerUrl(appConfig.secureurl , "CMS");
	}
	else if(appConfig.url){
		url = getFromServerUrl(appConfig.url, "CMS");
	}
	else{
		url = null;
	}
	return url;
}

/*
*	Name      : getFromServerUrl
*	Author    : None
*	Purpose   : Helper method to form a proper url 
*/


function getFromServerUrl(url, path){
 	if (! url) {
 		return null;
 	}
 	// ServerURL for non-mf has /mwservlet appended after the context path.
 	// We need to remove it to get the base server url
 	url = url.replace(/mwservlet\/*$/i, "");
	return url + path;
}


/*
*	Name      : kony.setUserID
*	Author    : None
*	Purpose   : Stores the userID in device local, once set.
*/

kony.setUserID = function(userId){ "use strict";
	var user = new Array;
	user.push(userId);
	kony.ds.save(user, "konyUserID");
	kony.license.notifyChangesToListeners();
}

Object.defineProperty(kony.metric, "reportCallback", {enumerable: false, configurable: false, writable: false, value: function(status, result) { "use strict";
	kony.print("Status : " + status);
	kony.print("Result : " + result);
	if (status === 400){
		if(result.opstatus === 0) {
			//If reports are successfully logged at server. Removing offline report data.
			kony.ds.remove("konyCustomReportData");
		}
	}
}});

Object.defineProperty(kony.metric, "report", {enumerable: false, configurable: false, writable: false, value: function(formId, metrics) { "use strict";
	if(formId === undefined || metrics === undefined){
		kony.print("Invalid parameters to kony.metric.report");
		return;
	}
	if(typeof metrics !== "object"){
		kony.print("Invalid parameters to kony.metric.report");
		return;
	}
	if(typeof formId !== "string"){
		if(typeof formId === "object")
		{
			if(formId.id === undefined || formId.id === null || typeof formId.id !== "string"){
			kony.print("Invalid parameters to kony.metric.report");
			return;
			}
			formId = formId.id.toString();
		}
		else{
			kony.print("Invalid parameters to kony.metric.report");
			return;
		}
	}
	var input = {};
	var reportData = kony.ds.read("konyCustomReportData");
	if (reportData === undefined || reportData === null) {
		reportData = new Array();
	}
	kony.ds.remove("konyCustomReportData");
	var currentData = {};
	var uuid = kony.ds.read("konyUUID");
	if (uuid !== undefined && uuid !== null && uuid.length > 0) {
		currentData.rsid = uuid[0];
	} else {
		currentData.rsid = new Date().getTime().toString();
	}
	currentData.fid = formId;
	if(!formId){
		var frm = document.getElementsByTagName("form")[0]
		if(frm != null && (frm.id != undefined || frm.id != null))
			currentData.fid = frm.id
	}
	currentData.metrics = metrics;
	currentData.ts = kony.license.getCurrentDateTime();
	reportData.push(currentData);
	//kony.ds.save(reportData, "konyCustomReportData");
	var reportURL = "";
	if (appConfig.url !== undefined && appConfig.url !== null) {
		reportURL = getMetricsUrl();
	}
	input.httpconfig={timeout:60};
	$KI.net.invokeserviceasync(reportURL, input, function(status, result) {
	kony.print("Status : " + status);
	kony.print("Result : " + result);
	if (status === 400){
		if(result.opstatus === 0) {
			//If reports are successfully logged at server. Removing offline report data.
			//kony.ds.remove("konyCustomReportData");
			kony.print("metrics data successfully sent");
		}
		else{
			var storeData = kony.ds.read("konyCustomReportData");
			if (!storeData) {
				storeData = new Array();
			}
			storeData.push(reportData);
			kony.ds.save(storeData, "konyCustomReportData");
		}
	}
}, null, "metric",reportData);
}});

Object.defineProperty(kony.license, "generateUUID", {enumerable: false, configurable: false, writable: false, value: function() {
	var S4 = function() {
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
	};
	return (new Date().getTime() + '-' + S4()+'-'+S4()+'-'+S4());
} });
/*
*	Name      : kony.license.isCloud
*	Author    : None
*	Purpose   : Returns true if it is cloud enviroment, else returns false.
*/
Object.defineProperty(kony.license, "isCloud", {enumerable: false, configurable: false, writable: false, value: function() {
	//starting 6.0 the licensing approach is also applicable for On-Prem customers.Hence the license usage //posting will be enabled for on-prem customers as well. So removing the check for the Kony Cloud URLs.
	var isLicenseEnabled = true;
	var LicenseCheck = kony.ds.read("LicenseDisableFlag");
	if (LicenseCheck && LicenseCheck[0] === "true") {
		isLicenseEnabled = false;
	}
	if(kony.license.isLicenseUrlAvailable() === false) {
		isLicenseEnabled = false;
	}
	return isLicenseEnabled;
} });

/*
*	Name      : kony.license.getCurrentDateTime
*	Author    : None
*	Purpose   : Returns current date and time details in required string format for service input.
*/
Object.defineProperty(kony.license, "getCurrentDateTime", {enumerable: false, configurable: false, writable: false, value: function() {
	var nowDate, month, formatDate;
	nowDate = new Date();
	month = new Date().getUTCMonth() + 1;
	formatDate = (("00" + nowDate.getUTCFullYear()).slice(-4)) + "-" + (("00" + month).slice(-2)) + "-" + (("00" + nowDate.getUTCDate()).slice(-2)) + " " + (("00" + nowDate.getUTCHours()).slice(-2)) + ":" + (("00" + nowDate.getUTCMinutes()).slice(-2)) + ":" + (("00" + nowDate.getUTCSeconds()).slice(-2));
	return formatDate;
} });

/*
*	Name      : kony.license.appendLicenseTrackingKeys
*	Author    : None
*	Purpose   : Returns input object after appending the required tracking keys for provided input object.
*/
Object.defineProperty(kony.license, "appendLicenseTrackingKeys", {enumerable: false, configurable: false, writable: false, value: function(requestType, reportData) { 
	var inputParams = {};
	if(kony.license.isCloud() === true){
		inputParams.plat = kony.os.deviceInfo().name;
		inputParams.aid = appConfig.appId;
		inputParams.aver = appConfig.appVersion;
		inputParams.aname = appConfig.appName;
		var deviceID = kony.ds.read("deviceID");
		if(!deviceID)
		{
			deviceID = kony.license.generateUUID().toString();
			kony.ds.save(deviceID,"deviceID");
		}
		inputParams.did = deviceID;
		inputParams.os = kony.os.deviceInfo().version;
		inputParams.stype = "b2c";
		inputParams.dm = kony.os.deviceInfo().model;
		inputParams.ua = kony.os.userAgent();
		inputParams.chnl = getChannel();
		inputParams.plat = getPlatform();
		inputParams.atype = "spa";
		var frm = document.getElementsByTagName("form")[0]
		if(frm != null && (frm.id != undefined || frm.id != null))
			inputParams.fid = frm.id
		var userId = $KI.ds.read("konyUserID");
		if (userId !== undefined && userId !== null && userId.length > 0) {
			inputParams.kuid = userId[0];
		} else {
			inputParams.kuid = "";
		}
		if(requestType === "session"){
			//Getting the offline access time details and passing as input to service
			kony.license.checkAndCreateSession();
			var uuid = kony.licensevar.currentSessionId;
			var offlineData = kony.ds.read("konyOfflineAccessData");
			if (offlineData === undefined || offlineData === null) {
				offlineData = new Array();
			}
			var currentSession = new Array();
			currentSession.push(uuid);
			currentSession.push(kony.license.getCurrentDateTime());
			offlineData.push(currentSession);
			kony.ds.save(offlineData, "konyOfflineAccessData");
			if (offlineData === undefined || offlineData === null) {
				inputParams.launchDates = currentSession;
			} else {
				inputParams.launchDates = offlineData;
			}
			var metrics = new Array();
			inputParams.metrics = metrics;
			inputParams.svcid = "RegisterKonySession";
			kony.print("---------->LaunchDates : "+inputParams.launchDates);
		} else if(requestType === "metric"){
			//var reportData = kony.ds.read("konyCustomReportData");
			if (reportData === undefined || reportData === null) {
				reportData = new Array();
			}
			inputParams.reportData = reportData;
			inputParams.svcid = "CaptureKonyCustomMetrics";
		} else {
			var uuid = kony.ds.read("konyUUID");
			if (uuid !== undefined && uuid !== null && uuid.length > 0) {
				inputParams.rsid = uuid[0];
			} else {
				inputParams.rsid = kony.license.generateUUID().toString();
			}
			var metrics = new Array();
			inputParams.metrics = metrics;
		}
	}
	return inputParams; 
} });

	/*
	 *	Name      : kony.license.checkAndCreateSession
	 *	Author    : None
	 *	Purpose   : creates a new session (if session is not created).
	 */
	Object.defineProperty(kony.license, "checkAndCreateSession", {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function() {
			var uuid = kony.ds.read("konyUUID");
			if (uuid !== undefined && uuid !== null && uuid.length > 0) {
				kony.licensevar.currentSessionId = uuid[0];
			} else {
				kony.license.createSession();
			} 
		}
	});

	/*
	 *	Name      : kony.license.createSession
	 *	Author    : None
	 *	Purpose   : creates a new session (if session is not created).
	 */
	Object.defineProperty(kony.license, "createSession", {
		enumerable: false,
		configurable: false,
		writable: false,
		value: function() {
			var uuid = new Array();
			kony.licensevar.currentSessionId = kony.license.generateUUID().toString();
			uuid.push(kony.licensevar.currentSessionId);
			kony.ds.save(uuid, "konyUUID");
			kony.license.notifyChangesToListeners();
		}
	});



/*
*	Name      : kony.license.licenseUsageServiceCallback
*	Author    : None
*	Purpose   : Service Callback function for session tracking. Displays alert if service responds with 'expired' status.
*				Stores the session details offline if service fails to respond.
*/
Object.defineProperty(kony.license, "licenseUsageServiceCallback", {enumerable: false, configurable: false, writable: false, value: function(status, result) { 
	kony.print("Status : " + status);
	kony.print("Result : " + result);
	if (status === 400){
		if(result.opstatus === 0) {
		//If launchDetails are successfully logged at server. Removing offline access details.
			kony.ds.remove("konyOfflineAccessData");
			kony.ds.remove("konyOfflineSessionsCount");
		} else {
			//Storing offline access time details in case of network/service issues.
			var count, offlineCount;
			//Storing the offline sessions count.
			offlineCount = kony.ds.read("konyOfflineSessionsCount");
			if (offlineCount === undefined || offlineCount === null || offlineCount.length < 1) {
				offlineCount = new Array();
				offlineCount.push(1);
			}else if( !(offlineCount[0] >= 500) ){
               //Stop updating the count if greater than 500
                count = offlineCount[0] + 1;
                offlineCount[0] = count;
            }
			kony.ds.save(offlineCount, "konyOfflineSessionsCount");
		}
	}
} });

/*
*	Name      : kony.license.captureKonyLicenseUsage
*	Author    : None
*	Purpose   : Makes service call for session tracking if the app is built with cloud environment and last access is made 30 minutes ago.
*				Sends required tracking keys for the service.
*/
Object.defineProperty(kony.license, "captureKonyLicenseUsage", { enumerable: false, configurable: false, writable: false, value: function(newLaunch) { 
	//Count session only if the time difference between last access and current access is more than 1 minute (30 minutes)
	var nowDate, lastDate, diff, sessionURL;
	var isNewSession = true;
	if(newLaunch === undefined || newLaunch === null){
		newLaunch = false;
	} else if(newLaunch !== true){
		newLaunch = false;
	}
	if(kony.license.isCloud() === false){
		kony.print("Not Cloud");
		isNewSession = false;
	}
	if (kony.ds.read("konyLastAccessTime") !== undefined && kony.ds.read("konyLastAccessTime") !== null) {
		nowDate = new Date();
		lastDate = new Date(kony.ds.read("konyLastAccessTime")[0]);
		diff = nowDate.getTime() - lastDate.getTime();
		if (diff < 1800000 && newLaunch === false) {
			isNewSession = false;
		}
		else {
			kony.ds.remove("konyLastAccessTime");
		}
	}
	if(isNewSession === true){
		sessionURL = "";
		if(window.location.protocol === "https:"){
			if (appConfig.secureurl !== undefined && appConfig.secureurl !== null) {
				sessionURL = getLicenseUrl();
			}
		}
		else{
			if (appConfig.url !== undefined && appConfig.url !== null) {
				sessionURL = getLicenseUrl();
			}
		}
		var input = {}; 
		input.httpconfig={};
		$KI.net.invokeserviceasync(sessionURL, input, kony.license.licenseUsageServiceCallback, null, "session");
	}
} });

/*
*	Name      : kony.license.backgroundTimeCapture
*	Author    : None
*	Purpose   : Stores the time stamp when app is sent to background.
*/
Object.defineProperty(kony.license, "backgroundTimeCapture", {enumerable: false, configurable: false, writable: false, value: function() {
	if(kony.license.isCloud() === true){
		var accessDetails = new Array();
		accessDetails.push(new Date().toString());
		kony.ds.save(accessDetails, "konyLastAccessTime");
	}
} });

/*
*	Name      : kony.license.clearLastAccess
*	Author    : None
*	Purpose   : Clears last access details on the termination of app.
*/
Object.defineProperty(kony.license, "clearLastAccess", {enumerable: false, configurable: false, writable: false, value: function() {
	if(kony.license.isCloud() === true){
		kony.ds.remove("konyLastAccessTime");
	}
} });
	
/*
*	Name      : kony.license.setAppCallbacksOverride
*	Author    : None
*	Purpose   : Overrides the API setApplicationCallbacks. Prepends onforeground, onbackground and onappterminate events with required 
*				session tracking methods.
*/
Object.defineProperty(kony.license, "setAppCallbacksOverride", {enumerable: false, configurable: false, writable: false, value: function() { 
	var oldImplementation = kony.application.setApplicationCallbacks;
	function newImplementation(eventsDefinition)
	{
		if(kony.license.isCloud() === true){
			if(eventsDefinition !== undefined && eventsDefinition !== null){
				if(eventsDefinition.onforeground !== undefined && eventsDefinition.onforeground !== null){
					var userForeFunction = eventsDefinition.onforeground;
					var newForeFunction = function(){
						kony.license.captureKonyLicenseUsage(false);
						userForeFunction();
					};
					eventsDefinition.onforeground = newForeFunction;
				}
				if(eventsDefinition.onbackground !== undefined && eventsDefinition.onbackground !== null){
					var userBackFunction = eventsDefinition.onbackground;
					var newBackFunction = function(){
						kony.license.backgroundTimeCapture();
						userBackFunction();
					};
					eventsDefinition.onbackground = newBackFunction;
				}
				if(eventsDefinition.onappterminate !== undefined && eventsDefinition.onappterminate !== null){
					var userTerminateFunction = eventsDefinition.onappterminate;
					var newTerminateFunction = function(){
						kony.license.clearLastAccess();
						userTerminateFunction();
					};
					eventsDefinition.onappterminate = newTerminateFunction;
				}
			}
		}
		return oldImplementation(eventsDefinition);
	}
	kony.application.setApplicationCallbacks = newImplementation;
} });


/*
*	Name      : kony.license.invokeServiceAsyncOverride
*	Author    : None
*	Purpose   : Overrides the API invokeServiceAsync. Appends tracking keys to the input param.
*/
Object.defineProperty(kony.license, "invokeServiceAsyncOverride", {enumerable: false, configurable: false, writable: false, value: function() { 
	var oldImplementation = $KI.net.invokeserviceasync;
	function newImplementation(url, input, callback, config, requestType, reportData)
	{
		if(kony.license.isCloud() === true){
			if(input === undefined || input === null)
			{
				input = {};
			}
			if(input !== undefined && input !== null){
				if(requestType !== undefined && requestType !== null)
				{
					input.konyreportingparams = processKonyReportingParams(input.konyreportingparams, requestType, reportData);
				} else {
					input.konyreportingparams = processKonyReportingParams(input.konyreportingparams, null, null);
				}
			}
		}
		return oldImplementation(url, input, callback, config);
		function processKonyReportingParams(params, requestType, reportData){
			var params2 = kony.license.appendLicenseTrackingKeys(requestType,reportData);
			if(!params){
				return JSON.stringify(params2);
			}
			else{
				try{
					if(typeof(params) === "string"){
						params  = JSON.parse(params);
					}
					for(var key in params2){
						if(typeof(params[key]) === "undefined"){
							params[key] = params2[key];
						}
					}
					return JSON.stringify(params);
				}
				catch(e){
					kony.print("unable to parse params " + params);
					return JSON.stringify(params2);
				}


			}
		}
	}
	$KI.net.invokeserviceasync = newImplementation;
} });

/*
*	Name      : kony.license.invokeServiceSyncOverride
*	Author    : None
*	Purpose   : Overrides the API invokeServiceSync. Appends tracking keys to the input param.
*/
 Object.defineProperty(kony.license, "invokeServiceSyncOverride", {enumerable: false, configurable: false, writable: false, value: function() { 
	var oldImplementation = $KI.net.invokeservicesync;
	function newImplementation(url, input, isblocking)
	{
		if(kony.license.isCloud() === true){
			if(input === undefined || input === null)
			{
				input = {};
			}
			if(input !== undefined && input !== null){
				input.konyreportingparams  = JSON.stringify(kony.license.appendLicenseTrackingKeys(null));
			}
		}
		return oldImplementation(url, input, isblocking);
	}
	$KI.net.invokeservicesync = newImplementation;
 } });
 
/*
*	Name      : kony.license.setAppInitializationEventsOverride
*	Author    : None
*	Purpose   : Overrides the API setAppplicationInitializationEvents. Prepends postappinit event with required session tracking method.
*				If postappinit is undefiend, sets postappinit with required session tracking method.
*/
Object.defineProperty(kony.license, "setAppInitializationEventsOverride", {enumerable: false, configurable: false, writable: false, value: function() { 
	var oldImplementation = $KI.setappevents;
	function newImplementation(eventsDefinition)
	{
		if(kony.license.isCloud() === true){
		
			if(eventsDefinition !== undefined && eventsDefinition !== null){
				//kony.print("Registering session time out");
				//kony.cloud.appevents.registerforidletimeout(30, cloudSessionCallback)
				//kony.application.registerForIdleTimeout(kony.license.timeoutVal, cloudSessionCallback);
				if(eventsDefinition.postappinit !== undefined && eventsDefinition.postappinit !== null){
					var userFunction = eventsDefinition.postappinit;
					var newFunction = function(){
						kony.license.captureKonyLicenseUsage(true);
						var userForm = userFunction();
						if(userForm !== undefined || userForm !== null){
							return userForm;
						} 
					};
					eventsDefinition.postappinit = newFunction;
				}
				else{
					var newFunction = function(){
						kony.license.captureKonyLicenseUsage(true);
					};
					eventsDefinition.postappinit = newFunction;
				}
			}
		}
		return oldImplementation(eventsDefinition);
	}
	$KI.setappevents = newImplementation;
 } });
 
/*
*	Name      : kony.license.apiOverride
*	Author    : None
*	Purpose   : Sets initial application callbacks. Calls the API overriding functions
*/
Object.defineProperty(kony.license, "apiOverride", {enumerable: false, configurable: false, writable: false, value: function() { 
	// Setting our callbacks before override.
	//var callbackEvents = {onforeground : kony.license.captureKonyLicenseUsage, onbackground : kony.license.backgroundTimeCapture, onappterminate : kony.license.clearLastAccess};
	//kony.application.setApplicationCallbacks(callbackEvents);
	//Overriding APIs
	//kony.license.setAppCallbacksOverride();
	kony.license.invokeServiceAsyncOverride();
	kony.license.invokeServiceSyncOverride();
	kony.license.setAppInitializationEventsOverride();
 } });

kony.license.apiOverride();
//Object.seal(kony.license);
//Object.freeze(kony.license);

} });

kony.license.startLicenseService();

function cloudSessionCallback(){
	kony.print("Cloud session timed out.");
	kony.ds.remove("konyLastAccessTime");
	kony.ds.remove("konyUUID");
	kony.ds.remove("konyCustomReportData");
	kony.ds.remove("konyOfflineAccessData");
	kony.license.captureKonyLicenseUsage();
	kony.cloud.appevents.unregisterforidletimeout();
	kony.cloud.appevents.registerforidletimeout(30, cloudSessionCallback);	
}

function getPlatform()
{
	if((/android/gi).test(navigator.userAgent))
		return "android";
	else if((/iphone|ipad|ipod/gi).test(navigator.userAgent))
		return "ios";
	else if((/bb10/gi).test(navigator.userAgent) || (/blackberry/gi).test(navigator.userAgent))
		return "blackberry";
	else if((/Windows/gi).test(navigator.userAgent))
		return "windows";
	else if((/j2me/gi).test(navigator.userAgent))
		return "j2me";
	else
		return "";
}

function getChannel()
{
	if((/hp-tablet|ipad|playbook/gi).test(navigator.userAgent) || ((/android/gi).test(navigator.userAgent) && !(/mobile/gi).test(navigator.userAgent)))
		return "tablet";
	else if((/mobile/gi).test(navigator.userAgent))
		return "mobile";	
	else
		return "desktop";
}
