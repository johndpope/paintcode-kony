//application.js file
function displayMWError()
{
 kony.ui.Alert("Middleware Error ",null,"error",null,null);
};
function displaySessionError()
{
 kony.ui.Alert("Session Expired .. Please re-login",null,"error",null,null);
};
function displayError(code, msg)
{
// Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
	kony.ui.Alert(code+"- "+msg,null,"error",null,null);
};

//#ifdef xadvip
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvbb
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvand
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvnth
 //#define TC_PLATFORMS
//#endif
//#ifdef xadvpalm
 //#define TC_PLATFORMS
//#endif
//#ifdef basic
 //#define TC_PLATFORMS
//#endif
//#ifdef bjs
 //#define TC_PLATFORMS
//#endif


var mergeHeaders = function (httpHeaders,globalHeaders){
 for (var attrName in globalHeaders) { 
 httpHeaders[attrName] = globalHeaders[attrName];
 }
 return httpHeaders;
}

//#ifdef spaip
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaan
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spabb
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef desktopweb
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spawindows
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spawinphone8
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spatabwindows
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spabbnth
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaipad
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spatabandroid
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef spaplaybook
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef playbook
 //#define SpaMiddlewareInvoker
//#endif
//#ifdef SpaMiddlewareInvoker

//#else
function appmiddlewareinvoker (inputParam, isBlocking, indicator, datasetID)
{
 var url = appConfig.url;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "6.5.GA_v201702081246_r23";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "6.5.GA_v201512031120_r1";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;
 
 if (indicator) {
 inputParam["indicator"] = indicator;
 };

 if (datasetID){
 inputParam["datasetID"] = datasetID ;
 };
 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders ,globalhttpheaders);
 }
	else
	{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
 if (resulttable){
 if (resulttable[sessionIdKey]){
 sessionID = resulttable[sessionIdKey];
 };
 };
 
 return resulttable;

};

function appmiddlewaresecureinvoker (inputParam, isBlocking, indicator, datasetID)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 	 	 //#ifdef android
		 inputParam["platformver"] = "6.5.GA_v201702081246_r23";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "6.5.GA_v201512031120_r1";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;
 
 if (indicator) {
 inputParam["indicator"] = indicator;
 };

 if (datasetID){
 inputParam["datasetID"] = datasetID ;
 };
 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var resulttable = kony.net.invokeService(url, inputParam, isBlocking);
 if (resulttable){
 if (resulttable[sessionIdKey]){
 sessionID = resulttable[sessionIdKey];
 };
 };
 
 return resulttable;

};
//#endif

function appmiddlewareinvokerasync (inputParam, callBack)
{
 var url = appConfig.url;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "6.5.GA_v201702081246_r23";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "6.5.GA_v201512031120_r1";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders ,globalhttpheaders);
 }
	else
	{
 inputParam.httpheaders = mergeHeaders({},globalhttpheaders);
 };
 };

 var connHandle = kony.net.invokeServiceAsync (url, inputParam, callBack)
 return connHandle;
};

function appmiddlewaresecureinvokerasync (inputParam, callBack)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "6.5.GA_v201702081246_r23";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "6.5.GA_v201512031120_r1";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders,globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 var connHandle = kony.net.invokeServiceAsync (url, inputParam, callBack)
 return connHandle;
};

function appmiddlewaresecureinvokerasyncForMBAAS (inputParam, serviceID, operationID, callBack)
{
 var url = appConfig.secureurl;
 var sessionIdKey = "cacheid";
 
 inputParam.appID = appConfig.appId;
 inputParam.appver = appConfig.appVersion;
 //#ifdef TC_PLATFORMS
 inputParam["channel"] = "wap";
 //#else
 //#ifdef SpaMiddlewareInvoker
 inputParam["channel"] = "wap";
 //#else
 inputParam["channel"] = "rc";
 //#endif
 //#endif

 	 	 //#ifdef android
		 inputParam["platformver"] = "6.5.GA_v201702081246_r23";
		 //#endif
 		 	 //#ifdef wap
		 inputParam["platformver"] = "6.5.GA_v201512031120_r1";
		 //#endif
 	 	 	 inputParam["platform"] = kony.os.deviceInfo().name;


 inputParam[sessionIdKey] = sessionID;

 if(globalhttpheaders){
 if(inputParam["httpheaders"]){
 inputParam.httpheaders = mergeHeaders(inputParam.httpheaders,globalhttpheaders);
 }else{
 inputParam["httpheaders"] = mergeHeaders({},globalhttpheaders);
 };
 };

 if(kony.mbaas)
 {
 kony.mbaas.invokeMbaasServiceFromKonyStudio(url,inputParam,serviceID,operationID,callBack);
 }
 else
 {
 alert("Unable to find the MBAAS SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
 }

};
function makeCall(eventobject)
{
 kony.phone.dial(eventobject.text);
};
