//Form JS File
function GoalForm_GoalForm_preshow_seq0(eventobject) {
    var goal = SicrediStyleKitFFI.drawGoal(161, 208, 18, 7, 0.45);
    if (goal) {
        GoalForm.goal.base64 = goal;
    }
};

function addWidgetsGoalForm() {
    var goal = new kony.ui.Image2({
        "id": "goal",
        "top": "108dp",
        "left": "113dp",
        "width": "161dp",
        "height": "208dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {});
    GoalForm.add(goal);
    GoalForm.setDefaultUnit(kony.flex.DP);
};

function GoalFormGlobals() {
    var MenuId = [];
    GoalForm = new kony.ui.Form2({
        "id": "GoalForm",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": GoalForm_GoalForm_preshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsGoalForm
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};
//GlobalSequences File
//application.js file
function displayMWError() {
    kony.ui.Alert("Middleware Error ", null, "error", null, null);
};

function displaySessionError() {
    kony.ui.Alert("Session Expired .. Please re-login", null, "error", null, null);
};

function displayError(code, msg) {
    // Commented for SWA: kony.ui.Alert("Error Code: "..code .." Message: " ..msg,null,"error",null,null);
    kony.ui.Alert(code + "- " + msg, null, "error", null, null);
};
var mergeHeaders = function(httpHeaders, globalHeaders) {
    for (var attrName in globalHeaders) {
        httpHeaders[attrName] = globalHeaders[attrName];
    }
    return httpHeaders;
}

function appmiddlewareinvokerasync(inputParam, callBack) {
    var url = appConfig.url;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "wap";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam.httpheaders = mergeHeaders({}, globalhttpheaders);
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
};

function appmiddlewaresecureinvokerasync(inputParam, callBack) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "wap";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = mergeHeaders({}, globalhttpheaders);
        };
    };
    var connHandle = kony.net.invokeServiceAsync(url, inputParam, callBack)
    return connHandle;
};

function appmiddlewaresecureinvokerasyncForMBAAS(inputParam, serviceID, operationID, callBack) {
    var url = appConfig.secureurl;
    var sessionIdKey = "cacheid";
    inputParam.appID = appConfig.appId;
    inputParam.appver = appConfig.appVersion;
    inputParam["channel"] = "wap";
    inputParam["platform"] = kony.os.deviceInfo().name;
    inputParam[sessionIdKey] = sessionID;
    if (globalhttpheaders) {
        if (inputParam["httpheaders"]) {
            inputParam.httpheaders = mergeHeaders(inputParam.httpheaders, globalhttpheaders);
        } else {
            inputParam["httpheaders"] = mergeHeaders({}, globalhttpheaders);
        };
    };
    if (kony.mbaas) {
        kony.mbaas.invokeMbaasServiceFromKonyStudio(url, inputParam, serviceID, operationID, callBack);
    } else {
        alert("Unable to find the MBAAS SDK for KonyStudio. Please download the SDK from the Kony Cloud Console and add as module to the Kony Project.");
    }
};

function makeCall(eventobject) {
    kony.phone.dial(eventobject.text);
};
function skinsInit() {
    lineNormal = "lineNormal";
    dgHead = "dgHead";
    txt2Normal = "txt2Normal";
    listboxNormal = "listboxNormal";
    txtFocus = "txtFocus";
    calNormal = "calNormal";
    hStrip2Focus = "hStrip2Focus";
    tabInactive = "tabInactive";
    sliderLeft = "sliderLeft";
    txtNormal = "txtNormal";
    cboxFocus = "cboxFocus";
    cboxNormal = "cboxNormal";
    tbx2Focus = "tbx2Focus";
    listboxFocus = "listboxFocus";
    dgFocus = "dgFocus";
    galFocus = "galFocus";
    tabActive = "tabActive";
    radioFocus = "radioFocus";
    segFocus = "segFocus";
    camNormal = "camNormal";
    dgRow = "dgRow";
    galNormal = "galNormal";
    segNormal = "segNormal";
    tbxFocus = "tbxFocus";
    btnFocus = "btnFocus";
    hStrip2Normal = "hStrip2Normal";
    cbxFocus = "cbxFocus";
    camFocus = "camFocus";
    hStripNormal = "hStripNormal";
    seg2Normal = "seg2Normal";
    phoneFocus = "phoneFocus";
    seg2Header = "seg2Header";
    tbx2Normal = "tbx2Normal";
    segHeader = "segHeader";
    gal2Normal = "gal2Normal";
    hStripFocus = "hStripFocus";
    seg2Focus = "seg2Focus";
    txt2Focus = "txt2Focus";
    radioNormal = "radioNormal";
    tbxNormal = "tbxNormal";
    btnNormal = "btnNormal";
    frm = "frm";
    phoneNormal = "phoneNormal";
    sliderRight = "sliderRight";
    tabFocus = "tabFocus";
    cbxNormal = "cbxNormal";
    richNormal = "richNormal";
    calFocus = "calFocus";
    lblNormal = "lblNormal";
    titleBar = "titleBar";
    gal2Focus = "gal2Focus";
};
kony.globals["appid"]="KonyPaintCode";
kony.globals["build"]="debug";
/*
 * kony-sdk-ide Version 1.0.0.0
 */
/**
 * Kony namespace
 * @namespace kony
 */
if (typeof(kony) === "undefined") {
    kony = {};
}
/**
 * Constructor for creating the kony client instance.
 * @class
 * @classdesc kony Class
 * @memberof kony
 */
kony.sdk = function() {
    this.mainRef = {};
    var clientParams = {};
    this.tokens = {};
    this.currentClaimToken = null;
    this.currentBackEndToken = null;
    var userId = "";
    var sessionId = "";
    if (kony.internal && kony.internal.sdk && kony.internal.sdk.Services) {
        this.internalSdkObject = new kony.internal.sdk.Services();
    }
    var localDataStore = new konyDataStore();
    this.getDataStore = function() {
        return localDataStore;
    }
    this.setDataStore = function(dataStore) {
        localDataStore = dataStore;
    }
    this.getUserId = function() {
        return userId;
    }
    this.setCurrentUserId = function(newUserID) {
        userId = newUserID;
    }
    this.getSessionId = function() {
        return sessionId;
    }
    this.setSessionId = function(newSessionId) {
        sessionId = newSessionId;
    }
    this.setClientParams = function(clientParamsMap) {
        clientParams = clientParamsMap;
    }
    this.getClientParams = function() {
        return clientParams;
    }
}
kony.mbaas = kony.sdk;
kony.sdk.isDebugEnabled = true;
kony.sdk.isInitialized = false;
kony.sdk.currentInstance = null;
kony.sdk.isLicenseUrlAvailable = true;
kony.sdk.logger = new konyLogger();
kony.sdk.version = "1.0.0.0";
kony.sdk.getDefaultInstance = function() {
    return kony.sdk.currentInstance;
};
// This is to be deprecated with getDefaultInstance
kony.sdk.getCurrentInstance = function() {
    return kony.sdk.currentInstance;
};
kony.sdk.claimsRefresh = function(callback, failureCallback) {
    var konyRef = kony.sdk.getCurrentInstance();
    var logger = new konyLogger();
    var networkProvider = new konyNetworkProvider();
    var loginWithAnonymousProvider = function(successCallback, failureCallback) {
        var identityObject = konyRef.getIdentityService("$anonymousProvider");
        identityObject.login(null, function(res) {
            successCallback();
        }, function(res) {
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(res));
        });
    };
    if (konyRef.currentClaimToken === null) {
        logger.log("claims Token is Unavialable");
        if (konyRef.isAnonymousProvider) {
            loginWithAnonymousProvider(callback, failureCallback);
        } else {
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullClaimsTokenErrObj());
        }
    } else if (konyRef.claimTokenExpiry && new Date().getTime() > konyRef.claimTokenExpiry) {
        if (konyRef.isAnonymousProvider) {
            loginWithAnonymousProvider(callback, failureCallback);
        } else {
            logger.log("claims token has expired. fetching new token..")
            var _serviceUrl = stripTrailingCharacter(konyRef.rec.url, "/");
            var _url = _serviceUrl + "/claims";
            logger.log("service url is " + _url);
            if (konyRef.currentRefreshToken === null) {
                kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullRefreshTokenErrObj());
            } else {
                networkProvider.post(_url, {}, {
                    "Authorization": konyRef.currentRefreshToken,
                    "Content-Type": "application/x-www-form-urlencoded"
                }, function(tokens) {
                    tokens = kony.sdk.formatSuccessResponse(tokens);
                    logger.log("refresh success..acquiring new tokens");
                    konyRef.currentClaimToken = tokens.claims_token.value;
                    konyRef.claimTokenExpiry = tokens.claims_token.exp;
                    konyRef.currentRefreshToken = tokens.refresh_token;
                    callback();
                }, function(data) {
                    logger.log("failed to acquire refresh token");
                    /*reset the claims token*/
                    konyRef.currentClaimToken = null;
                    konyRef.claimTokenExpiry = null;
                    konyRef.currentRefreshToken = null;
                    //setting the anonymous provider as true to access the public protected urls without any issue
                    konyRef.isAnonymousProvider = true;
                    kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(data));
                });
            }
        }
    } else {
        callback();
    }
};
kony.sdk.prototype.setIntegrationServiceEndpoint = function(serviceName, endPoint) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
    }
    var konyRef = kony.sdk.getCurrentInstance();
    if (!konyRef.integsvc) {
        throw new Exception(Errors.INTEGRATION_FAILURE, "no valid integration services available");
    }
    if (!konyRef.integsvc[serviceName]) {
        throw new Exception(Errors.INTEGRATION_FAILURE, "no valid integration services available for " + serviceName);
    }
    konyRef.integsvc[serviceName] = endPoint;
};
kony.sdk.prototype.setAuthServiceEndpoint = function(providerName, endPoint) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
    }
    var konyRef = kony.sdk.getCurrentInstance();
    if (!konyRef.login) {
        throw new Exception(Errors.AUTH_FAILURE, "no valid authentication services available");
    }
    var i = 0;
    for (i = 0; i < konyRef.login.length; i++) {
        var rec = konyRef.login[i];
        if (rec.prov.toUpperCase() === providerName.toUpperCase()) {
            break;
        }
    }
    if (i === konyRef.login.length) {
        throw new Exception(Errors.AUTH_FAILURE, "no valid authentication services available for " + providerName);
    }
    konyRef.login[i].url = endPoint;
};
kony.sdk.prototype.setSyncServiceEndpoint = function(endPoint) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
    }
    var konyRef = kony.sdk.getCurrentInstance();
    if (!konyRef.sync) {
        throw new Exception(Errors.SYNC_FAILURE, "no valid sync services available");
    }
    //assuming only one sync service per app
    konyRef.sync.url = endPoint;
}
kony.sdk.prototype.setReportingServiceEndPoint = function(serviceType, endPoint) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
    }
    var konyRef = kony.sdk.getCurrentInstance();
    if (!serviceType) {
        throw new Exception(Errors.METRICS_FAILURE, serviceType + " is not a valid reporting service");
    }
    serviceType = serviceType.toLowerCase();
    if (serviceType === "custom") {
        konyRef.customReportingURL = endPoint;
    } else if (serviceType === "session") {
        konyRef.sessionReportingURL = endPoint;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, serviceType + " is not a valid reporting service");
    }
}
kony.sdk.prototype.setMessagingServiceEndPoint = function(endPoint) {
        if (!kony.sdk.isInitialized) {
            throw new Exception(Errors.INIT_FAILURE, "Please call init before this, else your changes will be overridden when init is called");
        }
        var konyRef = kony.sdk.getCurrentInstance();
        if (!konyRef.messagingsvc) {
            throw new Exception(Errors.MESSAGING_FAILURE, "no valid reporting services available");
        }
        konyRef.messagingsvc.url = endPoint;
    }
    /**
     * Init success callback method.
     * @callback initSuccessCallback
     * @param {json} mainRef - Application Configuration
     */
    /**
     * Init failure callback method.
     * @callback initFailureCallback
     */
    /**
     * Initialization method for the kony SDK.
     * This method will fetch the app configuration from the kony server and stores in memory.
     * This method has to be invoked before invoking any other SDK methods.
     * @param {string} appKey - Appkey of the kony application
     * @param {string} appSecret - App Secret of the kony application
     * @param {string} serviceUrl - URL of the kony Server
     * @param {initSuccessCallback} successCallback  - Callback method on success
     * @param {initFailureCallback} failureCallback - Callback method on failure
     */
kony.sdk.prototype.init = function(appKey, appSecret, serviceUrl, successCallback, failureCallback) {
    var logger = new konyLogger();
    if (!(appKey && appSecret && serviceUrl)) {
        logger.log("### init:: Invalid credentials passed");
        kony.sdk.verifyAndCallClosure(failureCallback, "Invalid initialization parameters passed. Please check appKey, appSecret and ServiceUrl parameters");
        return;
    }
    var networkProvider = new konyNetworkProvider();
    serviceUrl = serviceUrl.trim();
    this.mainRef.serviceUrl = serviceUrl;
    var konyRef = this;
    logger.log("### init:: calling GET on appConfig to retrieve servicedoc");
    networkProvider.post(serviceUrl, null, {
        "X-Kony-App-Key": appKey,
        "X-Kony-App-Secret": appSecret,
        "X-HTTP-Method-Override": "GET"
    }, function(data) {
        data = kony.sdk.formatSuccessResponse(data);
        logger.log("### init::_doInit fetched servicedoc successfuly");
        logger.log("### init:: retrieved data from service doc");
        logger.log(data);
        konyRef.mainRef.config = data;
        konyRef.servicedoc = data;
        konyRef.mainRef.appId = data.appId;
        var processServiceDocResult = konyRef.initWithServiceDoc(appKey, appSecret, data);
        if (processServiceDocResult === true) {
            logger.log("### init::_doInit processing service document successful");
            var svcDataStr = JSON.stringify(data);
            logger.log("### init::_doInit saving done. Calling success callback");
            konyRef.setCurrentUserId("");
            kony.sdk.initiateSession(konyRef);
            if (kony.sdk.metric) {
                kony.sdk.metric.flushEvents();
            }
            var identityObject = kony.sdk.getCurrentInstance().getIdentityService("$anonymousProvider");
            identityObject.login(null, function(res) {
                kony.sdk.verifyAndCallClosure(successCallback, konyRef.mainRef);
            }, function(res) {
                kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(res));
            });
        } else {
            logger.log("### init::_doInit processing servicedoc failed. Calling failure callback");
            kony.sdk.verifyAndCallClosure(failureCallback, JSON.stringify(processServiceDocResult));
        }
    }, function(data) {
        logger.log("### init::_doInit fetching service document from Server failed" + data);
        logger.log("### init::_doInit calling failure callback");
        kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(data));
    });
};
kony.sdk.prototype.initWithServiceDoc = function(appKey, appSecret, serviceDoc) {
    konyRef = this;
    kony.sdk.currentInstance = this;
    if (serviceDoc instanceof kony.sdk.serviceDoc) {
        var servConfig = serviceDoc.toJSON();
        processServiceDocMap(servConfig);
    } else {
        return processServiceDocMap(serviceDoc);
    }

    function processServiceDocMap(servConfig) {
        var logger = new konyLogger();
        for (var item in servConfig) {
            if (kony.sdk.isEmptyObject(servConfig[item])) {
                delete servConfig[item];
            }
        }
        logger.log("### init::_doInit::_processServiceDoc" + JSON.stringify(servConfig));
        try {
            konyRef.mainRef.appKey = appKey;
            konyRef.mainRef.appSecret = appSecret;
            konyRef.mainRef.appId = servConfig.appId;
            /* if (!servConfig.baseId) {
            	throw new Exception(Errors.INIT_FAILURE, "invalid baseId " + servConfig.baseId);
            } */
            konyRef.mainRef.baseId = servConfig.baseId;
            /* if (!servConfig.name) {
            	throw new Exception(Errors.INIT_FAILURE, "invalid name " + servConfig.name);
            } */
            konyRef.mainRef.name = servConfig.name;
            if (servConfig.login) {
                konyRef.login = servConfig.login;
            } else {
                konyRef.login = [];
            }
            var url = servConfig.selflink;
            if (url) {
                var lastPos = url.indexOf("/appconfig");
                if (lastPos != -1) {
                    url = url.slice(0, lastPos);
                } else {
                    throw new Exception(Errors.INIT_FAILURE, "invalid self link");
                }
                var anonymousLoginProvider = {};
                anonymousLoginProvider.type = "anonymous";
                anonymousLoginProvider.url = url;
                anonymousLoginProvider.prov = "$anonymousProvider";
                konyRef.login.push(anonymousLoginProvider);
            }
            if (typeof(servConfig.integsvc) !== 'undefined') {
                logger.log("### init::_doInit::_processServiceDoc parsing Integration services");
                konyRef.integsvc = servConfig.integsvc;
                logger.log("### init::_doInit::konyRef integration Services" + JSON.stringify(konyRef.integsvc));
            }
            if (typeof(servConfig.messagingsvc) !== 'undefined') {
                logger.log("### init::_doInit::_processServiceDoc parsing Messaging services");
                konyRef.messagingsvc = servConfig.messagingsvc;
            }
            if (typeof(servConfig.sync) !== 'undefined') {
                konyRef.sync = servConfig.sync;
            }
            if (kony.sdk.isLicenseUrlAvailable) {
                if (servConfig.reportingsvc && servConfig.reportingsvc.custom && servConfig.reportingsvc.session) {
                    konyRef.customReportingURL = servConfig.reportingsvc.custom;
                    konyRef.sessionReportingURL = servConfig.reportingsvc.session;
                } else {
                    throw new Exception(Errors.INIT_FAILURE, "invalid url for reporting service");
                }
            }
            if (konyRef.internalSdkObject) {
                konyRef.internalSdkObject.initWithServiceDoc(appKey, appSecret, servConfig);
                if (konyRef.internalSdkObject.setClientParams) {
                    konyRef.internalSdkObject.setClientParams(konyRef.getClientParams());
                }
                logger.log("### init::internal sdk object initialized");
            }
            logger.log("### init::_doInit::_processServiceDoc parsing service document done");
            kony.sdk.isInitialized = true;
            return true;
        } catch (err) {
            logger.log("### init::_doInit::_processServiceDoc failed with an exception: " + err);
            return ("processing the ServiceDoc failed with an exception: " + JSON.stringify(err));
        }
    }
};
kony.sdk.prototype.sessionChangeHandler = function(changes) {
    var konyRef = kony.sdk.getCurrentInstance();
    var sessionId = null;
    var userId = null;
    if (changes["sessionId"] != undefined) {
        sessionId = changes["sessionId"];
        konyRef.setSessionId(sessionId);
        if (konyRef.metricsServiceObject && konyRef.metricsServiceObject.setSessionId) {
            konyRef.metricsServiceObject.setSessionId(sessionId);
        }
    }
    if (changes["userId"] != undefined) {
        userId = changes["userId"];
        konyRef.setCurrentUserId(userId);
        if (konyRef.metricsServiceObject && konyRef.metricsServiceObject.setUserId) {
            konyRef.metricsServiceObject.setUserId(userId);
        }
    }
    // if (konyRef.internalSdkObject) {
    // 	//TODO implement across native sdk's ios/andriod
    // 	//konyRef.internalSdkObject.sessionChangeHandler(changes);
    // 	if(sessionId) {
    // 		konyRef.internalSdkObject.setSessionId(sessionId);
    // 	}
    // 	if(userId) {
    // 		konyRef.internalSdkObject.setUserId(userId);
    // 	}
    // }
};
kony.sdk.getSdkType = function() {
    return "js";
}
if (typeof(kony.sdk) === "undefined") {
    kony.sdk = {};
}
if (typeof(kony.sdk.error) === "undefined") {
    kony.sdk.error = {};
}
kony.sdk.error.getAuthErrObj = function(errResponse) {
    if (errResponse && errResponse.httpresponse) {
        delete errResponse.httpresponse;
    }
    if (errResponse && (errResponse.opstatus == 1013 || errResponse.opstatus == 1011)) {
        errResponse["message"] = errResponse["errmsg"];
        delete errResponse.errmsg;
    }
    try {
        var mfcode = errResponse["mfcode"];
        var message = errResponse["message"];
        var details = errResponse["details"];
        if (mfcode) {
            return kony.sdk.error.getMFcodeErrObj(mfcode, message, details, "");
        }
        return errResponse;
    } catch (err) {
        return errResponse;
    }
}
kony.sdk.error.getNullClaimsTokenErrObj = function() {
    var errorObj = {};
    //TODO move error code and constants in to constants.
    errorObj.opstatus = kony.sdk.errorcodes.cliams_token_null
    errorObj.message = kony.sdk.errormessages.cliams_token_null
    errorObj.details = {};
    errorObj.mfcode = "";
    return errorObj;
}
kony.sdk.error.getNullRefreshTokenErrObj = function() {
    var errorObj = {};
    //TODO move error code and constants in to constants.
    errorObj.opstatus = kony.sdk.errorcodes.invalid_session_or_token_expiry
    errorObj.message = kony.sdk.errormessages.invalid_session_or_token_expiry
    errorObj.details = {};
    errorObj.mfcode = "";
    return errorObj;
}
kony.sdk.error.getIntegrationErrObj = function(errResponse) {
    try {
        var mfcode = errResponse["mfcode"];
        var message = errResponse["errmsg"];
        var details = errResponse["mferrmsg"];
        var service = errResponse["service"];
        if (!service) {
            service = "";
        }
        if (!details) {
            details = "";
        }
        var errorMessagePrefixForIntegration = "";
        if (service) {
            errorMessagePrefixForIntegration = "Integration Service Request Failed for " + service + ":";
        } else {
            errorMessagePrefixForIntegration = "Integration Service Request Failed:";
        }
        if (mfcode) {
            return kony.sdk.error.getMFcodeErrObj(mfcode, message, details, errorMessagePrefixForIntegration);
        }
        return errResponse;
    } catch (err) {
        return errResponse;
    }
}
kony.sdk.error.getMFcodeErrObj = function(mfcode, message, details, errMessagePrefix) {
    var errorObj = {};
    errorObj.details = {};
    if (details) {
        errorObj.details = details;
    }
    errorObj.mfcode = mfcode;
    if (mfcode === "Auth-4") {
        if (!message) {
            message = kony.sdk.errormessages.invalid_user_credentials
        }
        errorObj.opstatus = kony.sdk.errorcodes.invalid_user_credentials
        errorObj.message = errMessagePrefix + message;
    } else if (mfcode === "Auth-9") {
        if (!message) {
            message = kony.sdk.errormessages.invalid_app_credentials
        }
        errorObj.opstatus = kony.sdk.errorcodes.invalid_app_credentials
        errorObj.message = errMessagePrefix + message;
    } else if (mfcode === "Auth-3") {
        if (!message) {
            message = kony.sdk.errormessages.invalid_user_app_credentials
        }
        errorObj.opstatus = kony.sdk.errorcodes.invalid_user_app_credentials
        errorObj.message = errMessagePrefix + message;
    } else if ((mfcode === "Auth-5") || (mfcode === "Auth-6") || (mfcode === "Gateway-31") || (mfcode === "Gateway-33") || (mfcode === "Gateway-35") || (mfcode === "Gateway-36") || (mfcode === "Auth-46") || (mfcode === "Auth-55")) {
        errorObj.opstatus = kony.sdk.errorcodes.invalid_session_or_token_expiry
        errorObj.message = errMessagePrefix + kony.sdk.errormessages.invalid_session_or_token_expiry
    } else if (mfcode === "Auth-7" || mfcode === "Auth-27") {
        if (!message) {
            message = errMessagePrefix + kony.sdk.errormessages.invalid_user_app_services
        }
        errorObj.opstatus = kony.sdk.errorcodes.invalid_user_app_services
        errorObj.message = message;
    } else {
        errorObj.opstatus = kony.sdk.errorcodes.default_code
        errorObj.message = errMessagePrefix + kony.sdk.errormessages.default_message
    }
    return errorObj;
}

function getAuthErrorMessage(mfcode) {
    if (mfcode === "Auth-4") {
        return kony.sdk.errormessages.invalid_user_credentials
    } else if (mfcode === "Auth-9") {
        return kony.sdk.errormessages.invalid_app_credentials
    } else if (mfcode === "Auth-3") {
        return kony.sdk.errormessages.invalid_user_app_credentials
    } else if ((mfcode === "Auth-5") || (mfcode === "Auth-6") || (mfcode === "Gateway-31") || (mfcode === "Gateway-33") || (mfcode === "Gateway-35") || (mfcode === "Gateway-36") || (mfcode === "Auth-46") || (mfcode === "Auth-55")) {
        return kony.sdk.errormessages.invalid_session_or_token_expiry
    } else if (mfcode === "Auth-7" || mfcode === "Auth-27") {
        return kony.sdk.errormessages.invalid_user_app_services
    } else {
        return mfcode + ":" + kony.sdk.errormessages.default_message
    }
}
if (typeof(kony.sdk) === "undefined") {
    kony.sdk = {};
}
if (typeof(kony.sdk.errorcodes) === "undefined") {
    kony.sdk.errorcodes = {};
}
if (typeof(kony.sdk.errormessages) === "undefined") {
    kony.sdk.errormessages = {};
}
kony.sdk.errorcodes.invalid_user_credentials = 101;
kony.sdk.errormessages.invalid_user_credentials = "Invalid User Credentials.";
kony.sdk.errorcodes.invalid_app_credentials = 102;
kony.sdk.errormessages.invalid_app_credentials = "Invalid App Credentials.";
kony.sdk.errorcodes.invalid_user_app_credentials = 103;
kony.sdk.errormessages.invalid_user_app_credentials = "Invalid User/App Credentials.";
kony.sdk.errorcodes.invalid_session_or_token_expiry = 104;
kony.sdk.errormessages.invalid_session_or_token_expiry = "Session/Token got invalidated in the backend.Please login.";
kony.sdk.errorcodes.invalid_user_app_services = 105;
kony.sdk.errormessages.invalid_user_app_services = "Invalid provider in appServices.";
kony.sdk.errorcodes.cliams_token_null = 106;
kony.sdk.errormessages.cliams_token_null = "Claims Token is Unavialable";
kony.sdk.errorcodes.default_code = 100;
kony.sdk.errormessages.default_message = "UnhandledMFcode";
kony.sdk.errorcodes.unknown_error_code = 1000;
kony.sdk.errormessages.unknown_error_message = "An unknown error has occured";
kony.sdk.errorcodes.connectivity_error_code = 1011;
kony.sdk.errormessages.connectivity_error_message = "An error occurred while making the request. Please check device connectivity, server url and request parameters";
kony.sdk.errorcodes.invalid_json_code = 1013;
kony.sdk.errormessages.invalid_json_message = "Invalid Json response was returned";
kony.sdk.errorcodes.request_timed_out_code = 1014;
kony.sdk.errormessages.request_timed_out_message = "Request to server has timed out";
/**
 * Method to create the Identity service instance with the provided provider name.
 * @param {string} providerName - Name of the provider
 * @returns {IdentityService} Identity service instance
 */
kony.sdk.prototype.getIdentityService = function(providerName) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    var logger = new konyLogger();
    var provider = null;
    if (providerName) {
        if (this.login != null) {
            for (var i = 0; i < this.login.length; i++) {
                var rec = this.login[i];
                if ((rec.alias && rec.alias.toUpperCase() === providerName.toUpperCase()) || (rec.prov.toUpperCase() === providerName.toUpperCase())) {
                    provider = new IdentityService(this, rec);
                    break;
                }
            }
            if (provider === null) {
                throw new Exception(Errors.AUTH_FAILURE, "Invalid providerName");
            }
            //TODO: what if the providerName is not passed by the user? 
            logger.log("### auth:: returning authService for providerName = " + provider.getProviderName());
            return provider;
        }
    } else {
        throw new Exception(Errors.AUTH_FAILURE, "Invalid providerName");
    }
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Identity service instance for handling login/logout calls.
 */
function IdentityService(konyRef, rec) {
    var logger = new konyLogger();
    var networkProvider = new konyNetworkProvider();
    var serviceObj = rec;
    konyRef.rec = rec;
    var mainRef = konyRef.mainRef;
    if (serviceObj === undefined || serviceObj.prov == undefined || serviceObj.type == undefined) {
        throw new Exception(Errors.INIT_FAILURE, "Invalid service url and service type");
    }
    var _type = serviceObj.type;
    var _serviceUrl = stripTrailingCharacter(serviceObj.url, "/");;
    var _providerName = serviceObj.prov;
    logger.log("### AuthService:: initialized for provider " + _providerName + " with type " + _type);
    var dsKey = _serviceUrl + "::" + _providerName + "::" + _type + "::RAW";

    function resetAllCurrentTokens(konyRef, _providerName) {
        kony.sdk.resetCacheKeys(konyRef, _providerName);
    }
    /**
     * Login success callback method.
     * @callback loginSuccessCallback
     * @param {string} claimsToken - Claims token value
     */
    /**
     * Login failure callback method.
     * @callback loginFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Login with the given credentials asynchronously and executes the given callback.
     * @param {object} options - User name and password
     * @param {loginSuccessCallback} successCallback  - Callback method on success
     * @param {loginFailureCallback} failureCallback - Callback method on failure
     */
    this.login = function(options, successCallback, failureCallback) {
        konyRef.isAnonymousProvider = false;
        logger.log("### AuthService::login Invoked login for provider " + _providerName + " of type " + _type);
        if (typeof(options) == 'undefined') {
            throw new Exception(Errors.AUTH_FAILURE, "Missing required number of arguments to login function");
        }

        function invokeAjaxCall(url, params, headers) {
            if (!headers) {
                headers = {};
            }
            headers["X-Kony-App-Key"] = mainRef.appKey;
            headers["X-Kony-App-Secret"] = mainRef.appSecret;
            headers["Accept"] = "application/json";
            var endPointUrl = null;
            if (_type === "anonymous") {
                endPointUrl = _serviceUrl + url;
            } else {
                endPointUrl = _serviceUrl + url + "?provider=" + _providerName;
                params["provider"] = _providerName;
            }
            networkProvider.post(endPointUrl, params, headers, function(data) {
                data = kony.sdk.formatSuccessResponse(data);
                logger.log("### AuthService::login successful. Retrieved Data:: ");
                konyRef.tokens[_providerName] = data;
                logger.log("### AuthService::login extracted token. Calling success callback");
                konyRef.currentClaimToken = data.claims_token.value;
                konyRef.currentBackEndToken = data.provider_token;
                konyRef.claimTokenExpiry = data.claims_token.exp;
                konyRef.currentRefreshToken = data.refresh_token;
                if (!konyRef.getUserId() && data.profile) {
                    konyRef.setCurrentUserId(data.profile.userid);
                }
                logger.log("userid is " + konyRef.getUserId());
                kony.sdk.verifyAndCallClosure(successCallback, {});
            }, function(data) {
                logger.log("### AuthService::login login failure. retrieved data:: ");
                logger.log(data);
                logger.log("### AuthService::login Calling failure callback");
                /*resetting all the token in case of error */
                resetAllCurrentTokens(konyRef, _providerName);
                failureCallback(kony.sdk.error.getAuthErrObj(data));
            });
        }
        if (_type === "anonymous") {
            konyRef.isAnonymousProvider = true;
            logger.log("### AuthService::login Adapter type is anonymous ");
            invokeAjaxCall("/login", {}, {
                "Content-Type": "application/x-www-form-urlencoded"
            });
        } else if (_type == "basic") {
            var mandatory_fields = ["userid", "password"];
            if (serviceObj.mandatory_fields && kony.sdk.isArray(serviceObj.mandatory_fields)) {
                mandatory_fields = serviceObj.mandatory_fields;
            }
            for (var i = 0; i < mandatory_fields.length; ++i) {
                if (kony.sdk.isNullOrUndefined(options[mandatory_fields[i]])) {
                    throw new Exception(Errors.AUTH_FAILURE, " Require " + mandatory_fields[i]);
                }
            }
            var payload = {};
            for (var option in options) {
                payload[option] = options[option];
            }
            payload["provider"] = _providerName;
            logger.log("### AuthService::login Adapter type is basic ");
            invokeAjaxCall("/login", payload, {
                "Content-Type": "application/x-www-form-urlencoded"
            });
        } else {
            if (options.userid && options.password) {
                var payload = {};
                for (var option in options) {
                    payload[option] = options[option];
                }
                payload["provider"] = _providerName;
                invokeAjaxCall("/login", payload);
            } else {
                logger.log("### AuthService::login Adapter type is " + _type);
                OAuthHandler(_serviceUrl, _providerName, invokeAjaxCall, _type);
            }
        }
    };
    /**
     * Logout success callback method.
     * @callback logoutSuccessCallback
     */
    /**
     * Logout failure callback method.
     * @callback logoutFailureCallback
     */
    /**
     * Logout and executes the given callback.
     * @param {logoutSuccessCallback} successCallback  - Callback method on success
     * @param {logoutFailureCallback} failureCallback - Callback method on failure
     */
    this.logout = function(successCallback, failureCallback) {
        function logoutHandler() {
            _logout(successCallback, failureCallback);
        }
        kony.sdk.claimsRefresh(logoutHandler, failureCallback);
    };

    function _logout(successCallback, failureCallback) {
        logger.log("### AuthService::logout invoked on provider " + _providerName + " of type " + _type);
        var claimsTokenValue = null;
        if (konyRef.tokens[_providerName]) {
            claimsTokenValue = konyRef.tokens[_providerName]["claims_token"]["value"];
            delete konyRef.tokens[_providerName];
        }
        networkProvider.post(_serviceUrl + "/logout", {}, {
            "Authorization": claimsTokenValue,
            "Accept": "*/*"
        }, function(data) {
            logger.log("AuthService::logout successfully logged out. Calling success callback");
            resetAllCurrentTokens(konyRef, _providerName);
            kony.sdk.verifyAndCallClosure(successCallback, {});
        }, function(err) {
            logger.log("### AuthService::logout logged out Failed. Calling failure callback");
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(err));
        });
    };
    /**
     * Fetch backend token callback method.
     * @callback fetchBackendTokenSuccessCallback
     * @param {string} providerToken - Provider token value
     */
    /**
     * Fetch backend token callback method.
     * @callback fetchBackendTokenFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Fetch the backend datasource token.
     * @param {boolean} fromserver - Flag to force fetch from server only.
     * @param {object} options - Options
     * @param {fetchBackendTokenSuccessCallback} successCallback  - Callback method on success
     * @param {fetchBackendTokenFailureCallback} failureCallback - Callback method on failure
     */
    this.getBackendToken = function(fromserver, options, successCallback, failureCallback) {
        logger.log("### AuthService::getBackendToken called for provider " + _providerName + " of type " + _type);
        if (fromserver != undefined && fromserver === true) {
            logger.log("### AuthService::getBackendToken fromserver is enabled. Trying to login");
            _claimsRefresh(null, function(token) {
                konyRef.tokens[_providerName] = token;
                konyRef.currentBackEndToken = token.provider_token;
                kony.sdk.verifyAndCallClosure(successCallback, token.provider_token);
            }, failureCallback);
        } else {
            if (konyRef.tokens[_providerName]) {
                var val = konyRef.tokens[_providerName];
                var _exp = val.provider_token.exp;
                logger.log("token expiry time: " + _exp);
                logger.log("Current time: " + (new Date().getTime()));
                if (_exp && _exp < (new Date().getTime())) {
                    logger.log("### AuthService::getBackendToken Token expired. Fetching refresh from claims api");
                    _claimsRefresh(null, function(token) {
                        konyRef.tokens[_providerName] = token.claims_token.value;
                        logger.log("### AuthService::getBackendToken fetching refresh successfull. Calling success callback");
                        konyRef.currentBackEndToken = token.provider_token;
                        kony.sdk.verifyAndCallClosure(successCallback, token.provider_token);
                    }, function(error) {
                        logger.log("### AuthService::getBackendToken fetching refresh failed. Calling failure callback");
                        konyRef.tokens[_providerName] = null;
                        konyRef.currentBackEndToken = null;
                        kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(error));
                    });
                } else {
                    logger.log("### AuthService::getBackendToken present token is valid/doesn't have expiry time. Calling success callback");
                    konyRef.currentBackEndToken = val.provider_token;
                    kony.sdk.verifyAndCallClosure(successCallback, val.provider_token);
                }
            } else {
                logger.log("### AuthService::getBackendToken failed for find info for key " + dsKey + "in database. calling failure callback");
                kony.sdk.verifyAndCallClosure(failureCallback, null);
            }
        }
    };
    /**
     * Get profile callback method.
     * @callback getProfileSuccessCallback
     * @param {object} profile - Profile object
     */
    /**
     * Get profile callback method.
     * @callback getProfileFailureCallback
     */
    /**
     * Get profile.
     * @param {boolean} fromserver - Flag to force fetch from server only.
     * @param {getProfileSuccessCallback} successCallback  - Callback method on success
     * @param {getProfileFailureCallback} failureCallback - Callback method on failure
     */
    this.getProfile = function(fromserver, successCallback, failureCallback) {
        if (fromserver && fromserver == true) {
            _claimsRefresh(null, function(token) {
                konyRef.tokens[_providerName] = token;
                kony.sdk.verifyAndCallClosure(successCallback, token.profile);
            }, failureCallback)
        } else {
            if (konyRef.tokens[_providerName]) {
                var val = konyRef.tokens[_providerName]
                kony.sdk.verifyAndCallClosure(successCallback, val.profile);
            } else {
                kony.sdk.verifyAndCallClosure(failureCallback, null);
            }
        }
    };
    /**
     * Get the provider name.
     * @returns {string} Provider name.
     */
    this.getProviderName = function() {
        return _providerName;
    };
    /**
     * Get the provider type.
     * @returns {string} Provider type.
     */
    this.getProviderType = function() {
        return _type;
    };
    /**
     * Get the generic session data type.
     * @returns {string} session data.
     */
    this.getUserData = function(successCallback, failureCallback) {
        var userDataUrl = _serviceUrl + "/session/user_data";
        getSessionData(userDataUrl, successCallback, failureCallback);
    };
    /**
     * Get the user attributes returned by a provider
     * @returns {string} user attributes.
     */
    this.getUserAttributes = function(successCallback, failureCallback) {
        var userAttributesUrl = _serviceUrl + "/session/user_attributes?provider=" + _providerName;
        getSessionData(userAttributesUrl, successCallback, failureCallback);
    };
    /**
     * Get the security attributes returned by a provider
     * @returns {string} security attributes.
     */
    this.getSecurityAttributes = function(successCallback, failureCallback) {
        var securityAttributesUrl = _serviceUrl + "/session/security_attributes?provider=" + _providerName;
        getSessionData(securityAttributesUrl, successCallback, failureCallback);
    };
    /**
    	utility method to get session data
    	@private
    */
    var getSessionData = function(sessionAttributesEndPointUrl, successCallback, failureCallback) {
        if (konyRef.currentClaimToken === null) {
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getNullClaimsTokenErrObj());
        }
        networkProvider.post(sessionAttributesEndPointUrl, {}, {
            "Authorization": konyRef.currentClaimToken,
            "X-HTTP-Method-Override": "GET"
        }, function(data) {
            data = kony.sdk.formatSuccessResponse(data);
            kony.sdk.verifyAndCallClosure(successCallback, data);
        }, function(err) {
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getAuthErrObj(err));
        });
    };
    /**
     * Method to refresh the claims token.
     * @private
     */
    var _claimsRefresh = function(options, success, failure) {
        logger.log("### AuthService::_claimsRefresh fetching claims from server for provider " + _providerName);
        var value = konyRef.tokens[_providerName];
        var refreshToken = null;
        if (value) {
            refreshToken = value.refresh_token;
        }
        var _url = _serviceUrl + "/claims";
        if (options && options.requestParams != null) {
            _url = _url + "?"
            for (var i in options.requestParams) {
                if (options.requestParams.hasOwnProperty(i) && typeof(i) !== 'function') {
                    _url = _url + (i + "=" + options.requestParams[i] + "&");
                }
            }
            _url = stripTrailingCharacter(_url, "&");
        }
        if (refreshToken) {
            logger.log("### AuthService::_claimsRefresh making POST request to claims endpoint");
            networkProvider.post(_url, {}, {
                "Authorization": refreshToken,
                "Content-Type": "application/x-www-form-urlencoded"
            }, function(data) {
                data = kony.sdk.formatSuccessResponse(data);
                logger.log("### AuthService::_claimsRefresh Fetching claims succcessfull");
                konyRef.tokens[_providerName] = data;
                logger.log("### AuthService::_claimsRefresh saved locally. Calling success callback");
                kony.sdk.verifyAndCallClosure(success, data);
            }, function(xhr, status, err) {
                logger.log("### AuthService::_claimsRefresh fetching claims failed. Calling failure callback");
                kony.sdk.verifyAndCallClosure(failure, kony.sdk.error.getAuthErrObj(err));
            });
        } else {
            logger.log("### AuthService::_claimsRefresh no refreshtoken found. calling failure callback");
            kony.sdk.verifyAndCallClosure(failure, kony.sdk.error.getNullRefreshTokenErrObj());
        }
    };
};
stripTrailingCharacter = function(str, character) {
    if (str.substr(str.length - 1) == character) {
        return str.substr(0, str.length - 1);
    }
    return str;
};
var Constants = {
    APP_KEY_HEADER: "X-Kony-App-Key",
    APP_SECRET_HEADER: "X-Kony-App-Secret",
    AUTHORIZATION_HEADER: "Authorization"
};
var Errors = {
    INIT_FAILURE: "INIT_FAILURE",
    DATA_STORE_EXCEPTION: "DATASTORE_FAILURE",
    AUTH_FAILURE: "AUTH_FAILURE",
    INTEGRATION_FAILURE: "INTEGRATION_FAILURE",
    MESSAGING_FAILURE: "MESSAGING_FAILURE",
    SYNC_FAILURE: "SYNC_FAILURE",
    METRICS_FAILURE: "METRICS_FAILURE",
    MISC_FAILURE: "MISCELLANEOUS_FAILURE"
};
kony.sdk.prototype.enableDebug = function() {
    kony.sdk.isDebugEnabled = true;
}
kony.sdk.prototype.disableDebug = function() {
    kony.sdk.isDebugEnabled = false;
}

function Exception(name, message) {
    alert(name + ": " + message);
    return {
        code: name,
        message: message
    };
};
kony.sdk.verifyAndCallClosure = function(closure, params) {
    if (typeof(closure) === 'function') {
        closure(params);
    } else {
        var logger = new konyLogger();
        logger.log("invalid callback");
    }
}
kony.sdk.formatCurrentDate = function(inputDateString) {
    var dateObj = new Date(inputDateString);
    var year = dateObj.getUTCFullYear();
    var month = kony.sdk.formatDateComponent(dateObj.getUTCMonth() + 1);
    var date = kony.sdk.formatDateComponent(dateObj.getUTCDate());
    var hours = kony.sdk.formatDateComponent(dateObj.getUTCHours());
    var minutes = kony.sdk.formatDateComponent(dateObj.getUTCMinutes());
    var seconds = kony.sdk.formatDateComponent(dateObj.getUTCSeconds());
    var dateSeparator = "-"
    var timeSeparator = ":"
    var dateString = year + dateSeparator + month + dateSeparator + date + " " + hours + timeSeparator + minutes + timeSeparator + seconds;
    return dateString;
}
kony.sdk.formatDateComponent = function(dateComponent) {
    if (dateComponent < 10) {
        dateComponent = "0" + dateComponent;
    }
    return dateComponent;
}
kony.sdk.isNullOrUndefined = function(val) {
    if (val === null || val === undefined) {
        return true;
    } else {
        return false;
    }
};
kony.sdk.constants = {
    reportingType: {
        session: "session",
        custom: "custom"
    }
};
kony.sdk.isEmptyObject = function(obj) {
    for (var prop in obj) {
        return false;
    }
    return true;
};
kony.sdk.isArray = function(data) {
    if (data && Object.prototype.toString.call(data) === '[object Array]') {
        return true;
    }
    return false;
}
kony.sdk.formatSuccessResponse = function(data) {
    if (data && data.httpresponse) {
        delete data.httpresponse;
    }
    return data;
}
kony.sdk.isJson = function(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    //private method to identify whether session/token expired or not based on error code
kony.sdk.isSessionOrTokenExpired = function(mfcode) {
        if (mfcode && (mfcode === "Auth-5" || mfcode === "Auth-6" || mfcode === "Gateway-31" || mfcode === "Gateway-33" || mfcode === "Gateway-35" || mfcode === "Gateway-36" || mfcode === "Auth-46" || mfcode === "Auth-55")) {
            return true;
        }
        return false;
    }
    //private method to clear cache
kony.sdk.resetCacheKeys = function(konyRef, _providerName) {
    try {
        if (konyRef) {
            konyRef.currentClaimToken = null;
            konyRef.currentBackEndToken = null;
            konyRef.claimTokenExpiry = null;
            konyRef.currentRefreshToken = null;
            //setting the anonymous provider as true to access the public protected urls without any issue
            konyRef.isAnonymousProvider = true;
            if (_providerName) {
                if (konyRef.tokens.hasOwnProperty(_providerName)) {
                    konyRef.tokens[_providerName] = null;
                }
            }
        }
    } catch (e) {
        var logger = new konyLogger();
        logger.log("Error while clearing the cache..");
    }
}
kony.sdk.serviceDoc = function() {
    var appId = "";
    var baseId = "";
    var name = "";
    var selflink = "";
    var login = null;
    var integsvc = {};
    var reportingsvc = {};
    var messagingsvc = {};
    var sync = {};
    this.toJSON = function() {
        servConfig = {};
        servConfig.appId = this.getAppId();
        servConfig.baseId = this.getBaseId();
        servConfig.name = this.getAppName();
        servConfig.selflink = this.getSelfLink();
        servConfig.login = this.getAuthServices();
        servConfig.integsvc = this.getIntegrationServices();
        servConfig.messagingsvc = this.getMessagingServices();
        servConfig.sync = this.getSyncServices();
        servConfig.reportingsvc = this.getReportingServices();
        return servConfig;
    }
    this.setAppId = function(appIdStr) {
        appId = appIdStr;
    };
    this.getAppId = function() {
        return appId;
    };
    this.setBaseId = function(baseIdStr) {
        baseId = baseIdStr;
    };
    this.getBaseId = function() {
        return baseId;
    };
    this.setAppName = function(appName) {
        name = appName;
    };
    this.getAppName = function() {
        return name;
    };
    this.setSelfLink = function(selfLinkStr) {
        selflink = selfLinkStr;
    };
    this.getSelfLink = function() {
        return selflink;
    };

    function setEndPoints(providerType, providerValues) {
        for (var provider in providerValues) {
            providerType[provider] = providerValues[provider];
        }
    }
    this.setAuthService = function(loginProvider) {
        if (login === null) {
            login = [];
        }
        login.push(loginProvider);
    };
    //what will this return? name?
    this.getAuthServiceByName = function(authServiceProvider) {
        if (login === null) {
            return null;
        }
        for (var i in login) {
            var provider = login[i];
            if (provider.prov == authServiceProvider) {
                return provider;
            }
        }
    };
    this.getAuthServices = function() {
        return login;
    };
    this.setIntegrationService = function(providerName, endPointUrl) {
        integsvc[providerName] = endPointUrl;
    };
    this.getIntegrationServiceByName = function(integrationServiceProviderName) {
        return integsvc[integrationServiceProviderName];
    };
    this.getIntegrationServices = function() {
        return integsvc;
    };
    this.setReportingService = function(reportingType, url) {
        if (reportingType == kony.sdk.constants.reportingType.session || reportingType == kony.sdk.constants.reportingType.custom) {
            reportingsvc[reportingType] = url;
        } else {
            throw new Exception(Errors.INIT_FAILURE, "invalid reporting type " + reportingType);
        }
    }
    this.getReportingServiceByType = function(reportingServiceProviderType) {
        return reportingsvc[reportingServiceProviderType];
    };
    this.getReportingServices = function() {
        return reportingsvc;
    };
    this.setMessagingService = function(appId, url) {
        messagingsvc[appId] = url;
    };
    this.getMessagingServiceByName = function(messagingServiceProviderName) {
        return messagingsvc[messagingServiceProviderName];
    };
    this.getMessagingServices = function() {
        return messagingsvc;
    }
    this.setSyncService = function(syncServiceProvider) {
        sync = syncServiceProvider;
    };
    this.getSyncServices = function() {
        return sync;
    };
};
if (typeof(kony.sdk.metric) === "undefined") {
    kony.sdk.metric = {};
}
kony.sdk.metric.eventFlowTag = "";
kony.sdk.metric.eventConfig = {
    "confType": "BUFFER",
    "eventBufferAutoFlushCount": kony.sdk.metric.eventBufferAutoFlushValue,
    "eventBufferMaxCount": kony.sdk.metric.eventBufferMaxValue
};
kony.sdk.metric.eventBufferMaxValue = 1000;
kony.sdk.metric.eventBufferAutoFlushValue = 15;
kony.sdk.metric.characterLengthLimit = 256;
kony.sdk.metric.reportEventBufferArray = [];
kony.sdk.metric.reportEventBufferBackupArray = [];
kony.sdk.metric.retrievedDS = false;
kony.sdk.metric.eventBufferCount = 0;
kony.sdk.metric.eventTypeMap = {
    "formentry": "FormEntry",
    "touch": "Touch",
    "servicecall": "ServiceCall",
    "gesture": "Gesture",
    "orientation": "Orientation",
    "custom": "Custom"
};
kony.sdk.metric.errorCodeMap = {
    "1000": true,
    "1011": true,
    "1012": true,
    "1014": true,
    "1015": true,
    "1016": true
};
kony.sdk.metric.setEventFlowTag = function(flowTag) {
    if (kony.sdk.isNullOrUndefined(flowTag)) {
        throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event flow tag");
    } else if (flowTag.length <= kony.sdk.metric.characterLengthLimit) {
        kony.sdk.metric.eventFlowTag = flowTag;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
    }
};
kony.sdk.metric.clearEventFlowTag = function() {
    kony.sdk.metric.eventFlowTag = "";
};
kony.sdk.metric.getEventFlowTag = function() {
    return kony.sdk.metric.eventFlowTag;
};
kony.sdk.metric.setEventConfig = function(confType, eventBufferAutoFlushCount, eventBufferMaxCount) {
    if (kony.sdk.isNullOrUndefined(confType)) {
        throw new Exception(Errors.METRICS_FAILURE, "Config Type can not be null");
    } else {
        confType = confType.toUpperCase();
    }
    if (confType === "BUFFER") {
        kony.sdk.metric.eventConfig["confType"] = confType;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Invalid value for config type");
    }
    if (!kony.sdk.isNullOrUndefined(eventBufferMaxCount) && typeof(eventBufferMaxCount) === "number" && eventBufferMaxCount > 0) {
        kony.sdk.metric.eventConfig["eventBufferMaxCount"] = eventBufferMaxCount;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "eventBufferMaxCount has to be a Number and greater than 0");
    }
    if (!kony.sdk.isNullOrUndefined(eventBufferAutoFlushCount) && typeof(eventBufferAutoFlushCount) === "number" && eventBufferAutoFlushCount > 0 && eventBufferAutoFlushCount <= eventBufferMaxCount) {
        kony.sdk.metric.eventConfig["eventBufferAutoFlushCount"] = eventBufferAutoFlushCount;
    } else if (eventBufferAutoFlushCount >= eventBufferMaxCount) {
        kony.sdk.metric.eventConfig["eventBufferMaxCount"] = 1000;
        throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount can not be greater than eventBufferMaxCount");
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount has to be a Number and greater than 0");
    }
};
kony.sdk.metric.reportEvent = function(evttype, evtSubType, formID, widgetID, flowTag) {
    if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
        kony.sdk.metric.readFromDS();
    }
    kony.sdk.metric.eventBufferCount = kony.sdk.metric.reportEventBufferBackupArray.length + kony.sdk.metric.reportEventBufferArray.length;
    if (kony.sdk.metric.eventBufferCount === kony.sdk.metric.eventConfig["eventBufferMaxCount"]) {
        throw new Exception(Errors.DATA_STORE_EXCEPTION, "Reached maximum limit to store events");
        return;
    }
    var reportEventMap = {};
    reportEventMap.ts = kony.sdk.formatCurrentDate(new Date());
    evttype = evttype.toLowerCase();
    if (kony.sdk.isNullOrUndefined(kony.sdk.metric.eventTypeMap[evttype])) {
        throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event type");
        return;
    } else {
        reportEventMap["evttype"] = kony.sdk.metric.eventTypeMap[evttype];
    }
    if (kony.sdk.isNullOrUndefined(evtSubType)) {
        reportEventMap["evtSubType"] = "";
    } else if (evtSubType.length <= kony.sdk.metric.characterLengthLimit) {
        reportEventMap["evtSubType"] = evtSubType;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
        return;
    }
    if (kony.sdk.isNullOrUndefined(formID)) {
        reportEventMap["formID"] = kony.application.getCurrentForm().id;
    } else if (formID.length <= kony.sdk.metric.characterLengthLimit) {
        reportEventMap["formID"] = formID;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
        return;
    }
    if (kony.sdk.isNullOrUndefined(widgetID)) {
        reportEventMap["widgetID"] = "";
    } else if (widgetID.length <= kony.sdk.metric.characterLengthLimit) {
        reportEventMap["widgetID"] = widgetID;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
        return;
    }
    if (kony.sdk.isNullOrUndefined(flowTag)) {
        reportEventMap["flowTag"] = kony.sdk.metric.getEventFlowTag();
    } else if (flowTag.length <= kony.sdk.metric.characterLengthLimit) {
        reportEventMap["flowTag"] = flowTag;
    } else {
        throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + kony.sdk.metric.characterLengthLimit + " characters");
        return;
    }
    reportEventMap.SID = kony.ds.read("konyUUID")[0];
    kony.sdk.metric.reportEventBufferArray.push(reportEventMap);
    if (kony.sdk.metric.reportEventBufferArray.length % kony.sdk.metric.eventConfig["eventBufferAutoFlushCount"] === 0) {
        kony.sdk.metric.flushEvents();
    }
};
kony.sdk.metric.flushEvents = function() {
    var logger = new konyLogger();
    if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
        kony.sdk.metric.readFromDS();
    }
    if (kony.sdk.metric.reportEventBufferBackupArray.length === 0 && kony.sdk.metric.reportEventBufferArray.length === 0) {
        logger.log("There are no events to flush");
        return;
    }
    var payload = kony.sdk.getPayload(kony.sdk.getCurrentInstance());
    var params = {};
    if (kony.sdk.metric.reportEventBufferArray.length !== 0) {
        kony.sdk.metric.pushEventsToBufferArray();
    }
    var headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    params.httpheaders = headers;
    payload.events = kony.sdk.metric.reportEventBufferBackupArray;
    payload.svcid = "SendEvents";
    payload.rsid = kony.sdk.metric.reportEventBufferBackupArray[0].SID;
    params.konyreportingparams = JSON.stringify(payload);
    kony.net.invokeServiceAsync(kony.sdk.currentInstance.customReportingURL, params, flushCallback);

    function flushCallback(status, response) {
        if (status === 400) {
            if (response.opstatus === 0) {
                kony.sdk.metric.clearBufferEvents();
            } else if (kony.sdk.metric.errorCodeMap[response.opstatus]) {
                kony.sdk.metric.saveInDS();
            } else {
                kony.sdk.metric.clearBufferEvents();
            }
        } else if (status === 300) {
            kony.sdk.metric.saveInDS();
        }
    }
};
/*Stores event data in Data Store on failure of service Call*/
kony.sdk.metric.saveInDS = function() {
    var eventsToSave = [];
    eventsToSave.push(JSON.stringify(kony.sdk.metric.reportEventBufferBackupArray));
    kony.ds.save(eventsToSave, "konyMetricsBuffer");
    kony.sdk.metric.reportEventBufferBackupArray = [];
};
/*Clearing events sent to server */
kony.sdk.metric.clearBufferEvents = function() {
    kony.sdk.metric.reportEventBufferBackupArray = [];
    kony.ds.remove("konyMetricsBuffer");
};
/*Reading any pending events from Data Store */
kony.sdk.metric.readFromDS = function() {
    var eventsFromDS = kony.ds.read("konyMetricsBuffer");
    if (eventsFromDS !== null) {
        var pushToArray = [];
        pushToArray.push(JSON.parse(eventsFromDS[0]));
        kony.sdk.metric.reportEventBufferBackupArray.push.apply(kony.sdk.metric.reportEventBufferBackupArray, pushToArray);
    }
};
/*Pushes events received from user to BufferBackupArray which will be flushed to server */
kony.sdk.metric.pushEventsToBufferArray = function() {
    kony.sdk.metric.reportEventBufferBackupArray.push.apply(kony.sdk.metric.reportEventBufferBackupArray, kony.sdk.metric.reportEventBufferArray);
    kony.sdk.metric.reportEventBufferArray = [];
};
kony.sdk.metric.getEventsInBuffer = function() {
    var eventsFromDS = kony.ds.read("konyMetricsBuffer");
    var eventsToReturn = [];
    if (!kony.sdk.isNullOrUndefined(eventsFromDS)) {
        eventsToReturn.push(JSON.parse(eventsFromDS[0]));
    }
    if (kony.sdk.metric.reportEventBufferArray.length !== 0) {
        eventsToReturn.push.apply(eventsToReturn, kony.sdk.metric.reportEventBufferArray);
    }
    if (eventsToReturn.length !== 0) {
        return eventsToReturn;
    } else {
        return null;
    }
};
/**
 * Method to create the integration service instance with the provided service name.
 * @param {string} serviceName - Name of the service
 * @returns {IntegrationService} Integration service instance
 */
kony.sdk.prototype.getIntegrationService = function(serviceName) {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    var konyRef = kony.sdk.getCurrentInstance();
    if (!this.currentClaimToken && !konyRef.isAnonymousProvider) {
        throw new Exception(Errors.AUTH_FAILURE, "Please call login in Identity Service before invoking this service");
    }
    var logger = new konyLogger();
    var integrationService = null;
    if (this.integsvc != null) {
        if (this.integsvc[serviceName] != null) {
            logger.log("found integration service" + this.integsvc[serviceName]);
            return new IntegrationService(this, serviceName);
        }
    }
    throw new Exception(Errors.INTEGRATION_FAILURE, "Invalid serviceName");
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Integration service instance for invoking the integration services.
 */
function IntegrationService(konyRef, serviceName) {
    var logger = new konyLogger();
    var dataStore = new konyDataStore();
    var homeUrl = konyRef.integsvc[serviceName];
    var networkProvider = new konyNetworkProvider();
    if (homeUrl == undefined || serviceName == undefined) {
        throw new Exception(Errors.INIT_FAILURE, "Invalid homeUrl and serviceName");
    }
    homeUrl = stripTrailingCharacter(homeUrl, "/");
    this.getUrl = function() {
        return homeUrl;
    };
    /**
     * Integration service success callback method.
     * @callback integrationSuccessCallback
     * @param {json} response - Integration service response
     */
    /**
     * Integration service failure callback method.
     * @callback integrationFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Integration service options
     * @object options
     * @param {boolean}enablePreMFCompat - prevents stringification of array during xmlhttprequest.
     */
    /**
     * invoke the specified operation
     * @param {string} operationName - Name of the operation
     * @param {object} headers - Input headers for the operation
     * @param {object} data - Input data for the operation
     * @param {integrationSuccessCallback} successCallback  - Callback method on success
     * @param {integrationFailureCallback} failureCallback - Callback method on failure
     * @param {object} options - map of options example {"enablePreMFCompat" : true}
     */
    this.invokeOperation = function(operationName, headers, data, successCallback, failureCallback, options) {
        function invokeOperationHandler() {
            _invokeOperation(operationName, headers, data, successCallback, failureCallback, options);
        }
        kony.sdk.claimsRefresh(invokeOperationHandler, failureCallback);
    };

    function _invokeOperation(operationName, headers, data, successCallback, failureCallback, options) {
        var requestData = {};
        var logger = new konyLogger();
        var reportingData = kony.sdk.getPayload(konyRef);
        reportingData.rsid = kony.ds.read("konyUUID")[0];
        if (!reportingData.rsid) {
            logger.log("rsid is either empty,null or undefined");
        }
        if (kony.sdk.metric) {
            if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
                kony.sdk.metric.readFromDS();
            }
            kony.sdk.metric.pushEventsToBufferArray();
            requestData.events = kony.sdk.metric.reportEventBufferBackupArray;
        }
        for (var key in data) {
            requestData[key] = data[key];
        }
        reportingData.svcid = operationName;
        var token;
        for (var i in konyRef.tokens) {
            if (konyRef.tokens.hasOwnProperty(i) && typeof(i) !== 'function') {
                token = konyRef.tokens[i];
                break;
            }
        }
        requestData["konyreportingparams"] = JSON.stringify(reportingData);
        var defaultHeaders = {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Kony-Authorization": konyRef.currentClaimToken
            }
            // if the user has defined his own headers, use them
        if (headers) {
            for (var header in headers) {
                defaultHeaders[header] = headers[header];
            }
        }
        networkProvider.post(homeUrl + "/" + operationName, requestData, defaultHeaders, function(res) {
            if (kony.sdk.metric) {
                kony.sdk.metric.clearBufferEvents();
            }
            kony.sdk.verifyAndCallClosure(successCallback, res);
        }, function(xhr, status, err) {
            if (xhr && !(status && err)) {
                err = xhr;
            }
            if (kony.sdk.metric) {
                if (kony.sdk.metric.errorCodeMap[xhr.opstatus]) {
                    kony.sdk.metric.saveInDS();
                }
            }
            if (err["mfcode"]) {
                var konyRef = kony.sdk.getCurrentInstance();
                //clear the cache if the error code related to session/token expiry
                if (kony.sdk.isSessionOrTokenExpired(err["mfcode"])) {
                    kony.sdk.resetCacheKeys(konyRef);
                }
            }
            kony.sdk.verifyAndCallClosure(failureCallback, kony.sdk.error.getIntegrationErrObj(err));
        }, options);
    };
};
/**
 * Method to create the messaging service instance.
 * @returns {MessagingService} Messaging service instance
 */
kony.sdk.prototype.getMessagingService = function() {
        if (!kony.sdk.isInitialized) {
            throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
        }
        return new MessagingService(this);
    }
    /**
     * Should not be called by the developer.
     * @class
     * @classdesc Messaging service instance for invoking the Messaging services.
     *@param reference to kony object
     */
function MessagingService(konyRef) {
    var homeUrl = konyRef.messagingsvc.url;
    var KSID;
    var appId = konyRef.messagingsvc.appId;
    var logger = new konyLogger();
    var networkProvider = new konyNetworkProvider();
    var dsKey = homeUrl + ":KMS:AppId";
    this.getUrl = function() {
        return homeUrl;
    };
    this.setKSID = function(ksid) {
        konyRef.getDataStore().setItem(dsKey, ksid);
        KSID = ksid;
    };
    this.getKSID = function() {
        if (!KSID) {
            KSID = konyRef.getDataStore().getItem(dsKey);
        }
        return KSID;
    };
    this.setKmsAppId = function(id) {
        appId = id;
    };
    this.getKmsAppId = function() {
        return appId;
    };
    /**
     * register success callback method.
     * @callback registerSuccessCallback
     * @param {json} response - register response
     */
    /**
     * Register service failure callback method.
     * @callback registerFailureCallback
     * @param {json} error - Error information
     */
    /**
     * register to messaging service
     * @param {string} osType - Type of the operating system
     * @param {string} deviceId - Device Id
     * @param {string} pnsToken - Token value
     * @param {registerSuccessCallback} successCallback - Callback method on success
     * @param {registerFailureCallback} failureCallback - Callback method on failure
     */
    this.register = function(osType, deviceId, pnsToken, email, successCallback, failureCallback) {
        if (typeof(pnsToken) === 'undefined' || pnsToken === null) {
            throw new Exception(Errors.MESSAGING_FAILURE, "Invalid pnsToken/sId. Please check your messaging provider");
        }
        if (typeof(osType) === 'undefined' || osType === null) {
            throw new Exception(Errors.MESSAGING_FAILURE, "Invalid osType.");
        }
        if (typeof(deviceId) === 'undefined' || deviceId === null) {
            throw new Exception(Errors.MESSAGING_FAILURE, "Invalid deviceId.");
        }
        if (typeof(email) === 'undefined' || email === null) {
            throw new Exception(Errors.MESSAGING_FAILURE, "Invalid email.");
        }
        var uri = homeUrl + "/subscribers";
        jsonParam = {
            "subscriptionService": {
                "subscribe": {
                    "sid": pnsToken,
                    "appId": this.getKmsAppId(),
                    "ufid": email,
                    "osType": osType,
                    "deviceId": deviceId
                }
            }
        };
        logger.log(JSON.stringify(jsonParam));
        var headers = {
            "Content-Type": "application/json"
        };
        var payload = {
            postdata: JSON.stringify(jsonParam)
        };
        networkProvider.post(uri, payload, headers, function(data) {
            KSID = data.id;
            konyRef.getDataStore().setItem(dsKey, KSID);
            logger.log("Device registered to KMS with KSID:" + KSID);
            kony.sdk.verifyAndCallClosure(successCallback, data);
        }, function(data, status, error) {
            logger.log("ERROR: Failed to register device for KMS");
            var errorObj = {};
            errorObj.data = data;
            errorObj.status = status;
            errorObj.error = error;
            kony.sdk.verifyAndCallClosure(failureCallback, errorObj);
        });
    };
    /**
     * unregister success callback method.
     * @callback unregisterSuccessCallback
     */
    /**
     * unregister service failure callback method.
     * @callback unregisterFailureCallback
     */
    /**
     * unregister to messaging service
     * @param {unregisterSuccessCallback} successCallback - Callback method on success
     * @param {unregisterFailureCallback} failureCallback - Callback method on failure
     */
    this.unregister = function(successCallback, failureCallback) {
        var uri = homeUrl + "/subscribers"
        var sub = {
            "ksid": this.getKSID()
        };
        var inp = {
            "subscriptionService": {
                "unsubscribe": sub
            }
        };
        var headers = {
            "Content-Type": "application/json"
        };
        var payload = {
            postdata: JSON.stringify(inp)
        }
        logger.log("unsubscribe uri:" + uri);
        konyRef.getDataStore().removeItem(dsKey);
        networkProvider.post(uri, payload, headers, function(data) {
            kony.sdk.verifyAndCallClosure(successCallback, data);
        }, function(data, status, error) {
            logger.log("ERROR: Failed to unregister device for KMS");
            var errorObj = {};
            errorObj.data = data;
            errorObj.status = status;
            errorObj.error = error;
            kony.sdk.verifyAndCallClosure(failureCallback, errorObj);
        });
    };
    /**
     * Fetch all messages success callback method.
     * @callback fetchAllMessagesSuccessCallback
     * @param {json} response - Fetch all messages response
     */
    /**
     * Fetch all messages service failure callback method.
     * @callback fetchAllMessagesFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Fetch all messages
     * @param {fetchAllMessagesSuccessCallback} successCallback - Callback method on success
     * @param {fetchAllMessagesFailureCallback} failureCallback - Callback method on failure
     */
    this.fetchAllMessages = function(startIndex, pageSize, successCallback, failureCallback) {
        var uri = homeUrl + "/messages/fetch";
        var data = {
            "ksid": this.getKSID(),
            "startElement": startIndex,
            "elementsPerPage": pageSize
        };
        var headers = {
            "Content-Type": "application/json"
        };
        var payload = {
            postdata: JSON.stringify(data)
        };
        networkProvider.post(uri, payload, headers, successCallback, failureCallback);
    };
    /**
     * Update location service success callback method.
     * @callback updateLocationSuccessCallback
     * @param {json} response - Update location response
     */
    /**
     * Update location service failure callback method.
     * @callback updateLocationFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Update the location
     * @param {string} latitude - Latitude value
     * @param {string} longitude - Longitude value
     * @param {string} locationName - Location name
     * @param {updateLocationSuccessCallback} successCallback - Callback method on success
     * @param {updateLocationFailureCallback} failureCallback - Callback method on failure
     */
    this.updateGeoLocation = function(latitude, longitude, locationName, successCallback, failureCallback) {
        if (typeof(latitude) === 'undefined' || latitude === null) {
            throw new Exception(MESSAGING_FAILURE, "invalid latitude paramter value");
        }
        if (typeof(longitude) === 'undefined' || longitude === null) {
            throw new Exception(MESSAGING_FAILURE, "invalid longitude paramter value");
        }
        if (typeof(locationName) === 'undefined' || locationName === null) {
            throw new Exception(MESSAGING_FAILURE, "invalid locationName paramter value");
        }
        var uri = homeUrl + "/location";
        var data = {
            "ksid": this.getKSID(),
            "latitude": latitude,
            "locname": locationName,
            "longitude": longitude
        };
        var headers = {
            "Content-Type": "application/json"
        };
        var payload = {
            postdata: JSON.stringify(data)
        };
        logger.log("updateLocation payload: " + JSON.stringify(payload));
        networkProvider.post(uri, payload, headers, successCallback, failureCallback);
    };
    /**
     * Mark meesage as read service success callback method.
     * @callback markReadSuccessCallback
     * @param {json} response - Mark meesage as read service response
     */
    /**
     * Mark meesage as read service failure callback method.
     * @callback markReadFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Mark the message as read for a given message id
     * @param {string} messageId - Message id
     * @param {markReadSuccessCallback} successCallback - Callback method on success
     * @param {markReadFailureCallback} failureCallback - Callback method on failure
     */
    this.markMessageRead = function(fetchId, successCallback, failureCallback) {
        if (typeof(fetchId) === 'undefined' || fetchId === null) {
            throw new Exception(MESSAGING_FAILURE, "invalid fetchId paramter value");
        }
        var headers = {};
        headers["X-HTTP-Method-Override"] = "get";
        headers["Content-Type"] = "application/json";
        var uri = homeUrl + "/messages/open/" + fetchId;
        networkProvider.post(uri, null, headers, successCallback, failureCallback);
    };
    /**
     * Message content service success callback method.
     * @callback messageContentSuccessCallback
     * @param {json} response - Message content service response
     */
    /**
     * Message content service failure callback method.
     * @callback messageContentFailureCallback
     * @param {json} error - Error information
     */
    /**
     * Fetches the message conetent for a given message id
     * @param {string} messageId - Message id
     * @param {messageContentSuccessCallback} successCallback - Callback method on success
     * @param {messageContentFailureCallback} failureCallback - Callback method on failure
     */
    this.fetchMessageContent = function(fetchId, successCallback, failureCallback) {
        if (typeof(fetchId) === 'undefined' || fetchId === null) {
            throw new Exception(MESSAGING_FAILURE, "invalid fetchId paramter value");
        }
        var uri = homeUrl + "/messages/content/" + fetchId;
        networkProvider.post(uri, null, null, successCallback, failureCallback);
    };
};
/**
 * Method to create the Metrics service instance with the provided service name.
 * @returns {MetricsService} Metrics service instance
 */
kony.sdk.prototype.getMetricsService = function() {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    if (!kony.sdk.isLicenseUrlAvailable) {
        throw new Exception(Errors.METRICS_FAILURE, "metrics is not enabled");
    }
    //var metricsServiceObject = null;
    if (this.metricsServiceObject) {
        return this.metricsServiceObject;
    }
    if (this.internalSdkObject) {
        //framework implementation
        this.metricsServiceObject = this.internalSdkObject.getMetricsService();
    } else {
        //sdk local implementation
        this.metricsServiceObject = new MetricsService(this);
    }
    return this.metricsServiceObject;
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Metrics service instance for invoking the Metrics services.
 */
function MetricsService(konyRef) {
    var logger = new konyLogger();
    var url = konyRef.customReportingURL;
    if (typeof(url) === 'undefined') {
        throw new Exception(Errors.METRICS_FAILURE, "reporting url is undefined");
        return;
    }
    var networkProvider = new konyNetworkProvider();
    /**
     * invoke the getUserId operation
     */
    this.getUserId = function(userId) {
            return konyRef.getUserId();
        }
        //start of event api
    var eventFlowTag = "";
    var eventBufferMaxValue = 1000;
    var eventBufferAutoFlushValue = 15;
    var characterLengthLimit = 256;
    var eventConfig = {
        "confType": "BUFFER",
        "eventBufferAutoFlushCount": eventBufferAutoFlushValue,
        "eventBufferMaxCount": eventBufferMaxValue
    };
    var reportEventBufferArray = [];
    var reportEventBufferBackupArray = [];
    var retrievedDS = false;
    var eventBufferCount = 0;
    var eventTypeMap = {
        "formentry": "FormEntry",
        "formexit": "FormExit",
        "touch": "Touch",
        "servicerequest": "ServiceRequest",
        "serviceresponse": "ServiceResponse",
        "gesture": "Gesture",
        "orientation": "Orientation",
        "error": "Error",
        "exception": "Exception",
        "crash": "Crash",
        "custom": "Custom",
        "servicecall": "ServiceCall"
    };
    var errorCodeMap = {
        "1000": true,
        "1011": true,
        "1012": true,
        "1014": true,
        "1015": true,
        "1016": true
    };
    var currentSessionId = "";
    /**
     * This method will take the a String to set a Flow Tag for the reported events.
     * @param {string} flowTag - sets flow tag for reporting the events.
     */
    this.setFlowTag = function(flowTag) {
        if (kony.sdk.isNullOrUndefined(flowTag)) {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event flow tag");
        } else if (flowTag.length <= characterLengthLimit) {
            eventFlowTag = flowTag;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
        }
    };
    /**
     * This method will clear the flow tag set by the user previously.
     */
    this.clearFlowTag = function() {
        eventFlowTag = "";
    };
    /**
     * This method will return the a String to set a Flow Tag for the reported events.
     * @return {string} flowTag - flow tag set by the user for reporting the events.
     */
    this.getFlowTag = function() {
        return eventFlowTag;
    };
    /**
     * This method will take the required values to set the event Configuration values.
     * @param {string} confType - sets the Current Configuration Type
     * 					possible values BUFFER or INSTANT.
     * @param {number} eventBufferAutoFlushCount - event buffer count to auto flush the events
     * 								possible values any positive integer
     * 								Default value 15
     * @param {number} eventBufferMaxCount - Maximum event buffer count to store the events
     * 								possible values any positive integer
     * 								Default value 1000
     */
    this.setEventConfig = function(confType, eventBufferAutoFlushCount, eventBufferMaxCount) {
        if (kony.sdk.isNullOrUndefined(confType)) {
            throw new Exception(Errors.METRICS_FAILURE, "Config Type can not be null");
        } else {
            confType = confType.toUpperCase();
        }
        if (confType === "BUFFER") {
            eventConfig["confType"] = confType;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid value for config type");
        }
        if (!kony.sdk.isNullOrUndefined(eventBufferMaxCount) && typeof(eventBufferMaxCount) === "number" && eventBufferMaxCount > 0) {
            eventConfig["eventBufferMaxCount"] = eventBufferMaxCount;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "eventBufferMaxCount has to be a Number and greater than 0");
        }
        if (!kony.sdk.isNullOrUndefined(eventBufferAutoFlushCount) && typeof(eventBufferAutoFlushCount) === "number" && eventBufferAutoFlushCount > 0 && eventBufferAutoFlushCount <= eventBufferMaxCount) {
            eventConfig["eventBufferAutoFlushCount"] = eventBufferAutoFlushCount;
        } else if (eventBufferAutoFlushCount >= eventBufferMaxCount) {
            eventConfig["eventBufferMaxCount"] = 1000;
            throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount can not be greater than eventBufferMaxCount");
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "eventBufferAutoFlushCount has to be a Number and greater than 0");
        }
    };
    /**
     * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
     * @param {string} evttype - Event Type for the reported event.
     * @param {string} evtSubType - string literal for eventSubType(max 256 Chars)
     * @param {string} formID -   string literal for formID(max 256 Chars)
     * @param {string} widgetID - string literal for widgetID(max 256 Chars)
     * @param {string} flowTag - string literal to override flow tag (max 256 Chars)
     * @param {string} metaData - string to describe metaData
     * @throws Exception
     */
    this.sendEvent = function(evttype, evtSubType, formID, widgetID, flowTag, metaData) {
        if (reportEventBufferBackupArray.length === 0) {
            this.readFromDS();
        }
        eventBufferCount = reportEventBufferBackupArray.length + reportEventBufferArray.length;
        if (eventBufferCount === eventConfig["eventBufferMaxCount"]) {
            throw new Exception(Errors.DATA_STORE_EXCEPTION, "Reached maximum limit to store events");
            return;
        }
        var reportEventMap = {};
        reportEventMap.ts = kony.sdk.formatCurrentDate(new Date());
        evttype = evttype.toLowerCase();
        if (kony.sdk.isNullOrUndefined(eventTypeMap[evttype])) {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid value for event type");
            return;
        } else {
            reportEventMap["evttype"] = eventTypeMap[evttype];
        }
        if (kony.sdk.isNullOrUndefined(evtSubType)) {
            reportEventMap["evtSubType"] = "";
        } else if (evtSubType.length <= characterLengthLimit) {
            reportEventMap["evtSubType"] = evtSubType;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
            return;
        }
        if (kony.sdk.isNullOrUndefined(formID)) {
            reportEventMap["formID"] = kony.application.getCurrentForm().id;
        } else if (formID.length <= characterLengthLimit) {
            reportEventMap["formID"] = formID;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
            return;
        }
        if (kony.sdk.isNullOrUndefined(widgetID)) {
            reportEventMap["widgetID"] = "";
        } else if (widgetID.length <= characterLengthLimit) {
            reportEventMap["widgetID"] = widgetID;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
            return;
        }
        if (kony.sdk.isNullOrUndefined(flowTag)) {
            reportEventMap["flowTag"] = this.getFlowTag();
        } else if (flowTag.length <= characterLengthLimit) {
            reportEventMap["flowTag"] = flowTag;
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Length exceeded, Maximum length of event flow tag is " + characterLengthLimit + " characters");
            return;
        }
        reportEventMap.SID = currentSessionId;
        reportEventMap.metaData = metaData;
        //checking each event data is a proper json or not
        // if (!kony.sdk.isJson(reportEventMap)) {
        // 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for events data");
        // }
        reportEventBufferArray.push(reportEventMap);
        if (reportEventBufferArray.length % eventConfig["eventBufferAutoFlushCount"] === 0) {
            this.flushEvents();
        }
    };
    /**
     * This method will send the buffered events to the server at once.
     */
    this.flushEvents = function() {
        var logger = new konyLogger();
        var ref = this;
        if (reportEventBufferBackupArray.length === 0) {
            ref.readFromDS();
        }
        if (reportEventBufferBackupArray.length === 0 && reportEventBufferArray.length === 0) {
            logger.log("There are no events to flush");
            return;
        }
        var payload = kony.sdk.getPayload(kony.sdk.getCurrentInstance());
        var params = {};
        if (reportEventBufferArray.length !== 0) {
            ref.pushEventsToBufferArray();
        }
        var headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        params.httpheaders = headers;
        payload.events = reportEventBufferBackupArray;
        payload.svcid = "SendEvents";
        payload.rsid = reportEventBufferBackupArray[0].SID;
        params.konyreportingparams = JSON.stringify(payload);
        kony.net.invokeServiceAsync(kony.sdk.currentInstance.customReportingURL, params, flushCallback);

        function flushCallback(status, response) {
            if (status === 400) {
                if (response.opstatus === 0) {
                    ref.clearBufferEvents();
                } else if (errorCodeMap[response.opstatus]) {
                    ref.saveInDS();
                } else {
                    ref.clearBufferEvents();
                }
            } else if (status === 300) {
                ref.saveInDS();
            }
        }
    };
    /*Stores event data in Data Store on failure of service Call*/
    this.saveInDS = function() {
        var eventsToSave = [];
        eventsToSave.push(JSON.stringify(reportEventBufferBackupArray));
        kony.ds.save(eventsToSave, "konyMetricsBuffer");
        reportEventBufferBackupArray = [];
    };
    /*Clearing events sent to server */
    this.clearBufferEvents = function() {
        reportEventBufferBackupArray = [];
        kony.ds.remove("konyMetricsBuffer");
    };
    /*Reading any pending events from Data Store */
    this.readFromDS = function() {
        var eventsFromDS = kony.ds.read("konyMetricsBuffer");
        if (eventsFromDS !== null) {
            var pushToArray = [];
            pushToArray.push(JSON.parse(eventsFromDS[0]));
            reportEventBufferBackupArray.push.apply(reportEventBufferBackupArray, pushToArray);
        }
    };
    /*Pushes events received from user to BufferBackupArray which will be flushed to server */
    this.pushEventsToBufferArray = function() {
        reportEventBufferBackupArray.push.apply(reportEventBufferBackupArray, reportEventBufferArray);
        reportEventBufferArray = [];
    };
    /**
     * This method will return the a List of the buffered events.
     * @return {object} events - list of events stored in buffer.
     */
    this.getEventsInBuffer = function() {
        var eventsFromDS = kony.ds.read("konyMetricsBuffer");
        var eventsToReturn = [];
        if (!kony.sdk.isNullOrUndefined(eventsFromDS)) {
            eventsToReturn.push(JSON.parse(eventsFromDS[0]));
        }
        if (reportEventBufferArray.length !== 0) {
            eventsToReturn.push.apply(eventsToReturn, reportEventBufferArray);
        }
        if (eventsToReturn.length !== 0) {
            return eventsToReturn;
        } else {
            return null;
        }
    };
    /**
     * invoke the sendCustomMetrics operation
     * @param {string} reportingGroupID - reporting Group ID
     * @param {object} metrics - metrics being reported
     */
    this.sendCustomMetrics = function(reportingGroupID, metrics) {
        if (typeof(metrics) !== "object") {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid type for metrics data.");
            return;
        }
        var sessionID = currentSessionId;
        var reportData = konyRef.getDataStore().getItem("konyCustomReportData");
        if (!reportData) {
            reportData = new Array();
        } else {
            reportData = JSON.parse(reportData);
        }
        konyRef.getDataStore().removeItem("konyCustomReportData");
        var currentData = {};
        currentData.ts = kony.sdk.formatCurrentDate(new Date().toString());
        currentData.fid = reportingGroupID;
        currentData.metrics = metrics;
        currentData.rsid = sessionID;
        reportData.push(currentData);
        //nyRef.getDataStore().setItem("konyCustomReportData",JSON.stringify(reportData));
        var payload = kony.sdk.getPayload(konyRef);
        if (kony.sdk.metric) {
            if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
                kony.sdk.metric.readFromDS();
            }
            kony.sdk.metric.pushEventsToBufferArray();
            payload.events = kony.sdk.metric.reportEventBufferBackupArray;
        }
        payload.reportData = reportData;
        payload.rsid = sessionID;
        payload.svcid = "CaptureKonyCustomMetrics";
        // if (!kony.sdk.isJson(payload)) {
        // 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for custom metrics");
        // }
        var newData = {};
        newData["konyreportingparams"] = JSON.stringify(payload);
        networkProvider.post(url, newData, {
            "Content-Type": "application/x-www-form-urlencoded"
        }, function(res) {
            //successcallback
            //konyRef.getDataStore().removeItem("konyCustomReportData");
            if (kony.sdk.metric) {
                kony.sdk.metric.clearBufferEvents();
            }
            logger.log("metric data successfully sent" + JSON.stringify(res));
        }, function(res) {
            var storeData = konyRef.getDataStore().getItem("konyCustomReportData");
            if (!storeData) {
                storeData = reportData;
            } else {
                storeData = JSON.parse(storeData);
                reportData.forEach(function(e) {
                    storeData.push(e);
                });
            }
            if (kony.sdk.metric) {
                if (kony.sdk.metric.errorCodeMap[res.opstatus]) {
                    kony.sdk.metric.saveInDS();
                }
            }
            konyRef.getDataStore().setItem("konyCustomReportData", JSON.stringify(storeData));
            logger.log("Unable to send metric report" + JSON.stringify(res));
        }, true);
    };
    /**
     * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
     * @param {string} errorCode - errorCode of the reported error. Can be empty if not applicable
     * @param {string} errorType -   errorType of the reported error. Can be empty if not applicable
     * @param {string} errorMessage - errorMessage of the reported error. Can be empty if not applicable
     * @param {json} errorDetails - errorDetails of the reported error as a json string that can have key-value pairs for the following
    				keys errfile, errmethod, errline, errstacktrace, formID, widgetID, flowTag.
     * @throws Exception
     */
    this.reportError = function(errorCode, errorType, errorMessage, errorDetails) {
        var metaData = {};
        metaData.errorcode = errorCode ? errorCode : "";
        metaData.errmsg = errorMessage ? errorMessage : "";
        if (errorDetails && kony.sdk.isJson(errorDetails)) {
            metaData.errfile = errorDetails.errfile ? errorDetails.errfile : "";
            metaData.errmethod = errorDetails.errmethod ? errorDetails.errmethod : "";
            metaData.errline = errorDetails.errline ? errorDetails.errline : "";
            metaData.errstacktrace = errorDetails.errstacktrace ? errorDetails.errstacktrace : "";
            metaData.errcustommsg = errorDetails.errcustommsg ? errorDetails.errcustommsg : "";
            var formID = errorDetails.formID ? errorDetails.formID : "";
            var widgetID = errorDetails.widgetID ? errorDetails.widgetID : "";
            var flowTag = errorDetails.flowTag ? errorDetails.flowTag : "";
            var evtSubType = errorType ? errorType : "";
            this.sendEvent("Error", evtSubType, formID, widgetID, flowTag, metaData);
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for error details.");
        }
    };
    /**
     * This method takes the event details from the developer and schedule it for sending to server as per Configuration values set by the developer.
     * @param {string} exceptionCode - Code for the reported exception. Can be empty if not applicable
     * @param {string} exceptionType -   Type of the reported exception. Can be empty if not applicable
     * @param {string} exceptionMessage - Message of the reported exception. Can be empty if not applicable
     * @param {json}   exceptionDetails - Details of the reported exception as a JSON string that can have key-value pairs for the
    				following keys exceptioncode, exceptionfile, exceptionmethod, exceptionline,
    				exceptionstacktrace, formID, widgetID, flowTag.
     * @throws Exception
     */
    this.reportHandledException = function(exceptionCode, exceptionType, exceptionMessage, exceptionDetails) {
        var metaData = {};
        metaData.exceptioncode = exceptionCode ? exceptionCode : "";
        metaData.exceptionmsg = exceptionMessage ? exceptionMessage : "";
        if (exceptionDetails && kony.sdk.isJson(exceptionDetails)) {
            metaData.errfile = exceptionDetails.errfile ? exceptionDetails.errfile : "";
            metaData.errmethod = exceptionDetails.errmethod ? exceptionDetails.errmethod : "";
            metaData.errline = exceptionDetails.errline ? exceptionDetails.errline : "";
            metaData.errstacktrace = exceptionDetails.errstacktrace ? exceptionDetails.errstacktrace : "";
            metaData.errcustommsg = exceptionDetails.errcustommsg ? exceptionDetails.errcustommsg : "";
            var formID = exceptionDetails.formID ? exceptionDetails.formID : "";
            var widgetID = exceptionDetails.widgetID ? exceptionDetails.widgetID : "";
            var flowTag = exceptionDetails.flowTag ? exceptionDetails.flowTag : "";
            var evtSubType = exceptionType ? exceptionType : "";
            this.sendEvent("Exception", evtSubType, formID, widgetID, flowTag, metaData);
        } else {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for exception details.");
        }
    };
    /**
     * sets the current sessionId
     * @param {string} sessionId
     */
    this.setSessionId = function(sessionId) {
            if (sessionId) {
                currentSessionId = sessionId;
            }
        }
        /**
         * get the current sessionID
         *
         */
    this.getSessionId = function() {
            return currentSessionId;
        }
        /**
         * stub method used for event tracking
         *
         */
    this.setEventTracking = function(eventTypes) {
        // Stub.  This is implemented in native->js binding
    }
}
//stub method
kony.sdk.initiateSession = function() {
        return;
    }
    /**
     * Method to create the Reporting service instance with the provided service name.
     * @returns {ReportingService} Reporting service instance
     */
kony.sdk.prototype.getReportingService = function() {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    return new ReportingService(this);
};
/**
 * Should not be called by the developer.
 * @class
 * @classdesc Reporting service instance for invoking the reporting services.
 */
function ReportingService(konyRef) {
    var logger = new konyLogger();
    var url = konyRef.customReportingURL;
    if (typeof(url) === 'undefined') {
        throw new Exception(Errors.METRICS_FAILURE, "reporting url is undefined");
        return;
    }
    var networkProvider = new konyNetworkProvider();
    /**
     * invoke the setUserId operation
     * @param {string} userId - userId specified by user
     */
    this.setUserId = function(userId) {
            konyRef.setCurrentUserId(userId);
        }
        /**
         * invoke the getUserId operation
         */
    this.getUserId = function(userId) {
            return konyRef.getUserId();
        }
        /**
         * invoke the report operation
         * @param {string} reportingGroupID - reporting Group ID
         * @param {object} metrics - metrics being reported
         */
    this.report = function(reportingGroupID, metrics) {
        if (typeof(metrics) !== "object") {
            throw new Exception(Errors.METRICS_FAILURE, "Invalid type for metrics data.");
            return;
        }
        var sessionID = kony.ds.read("konyUUID");
        var reportData = konyRef.getDataStore().getItem("konyCustomReportData");
        if (!reportData) {
            reportData = new Array();
        } else {
            reportData = JSON.parse(reportData);
        }
        konyRef.getDataStore().removeItem("konyCustomReportData");
        var currentData = {};
        currentData.ts = kony.sdk.formatCurrentDate(new Date().toString());
        currentData.fid = reportingGroupID;
        currentData.metrics = metrics;
        currentData.rsid = sessionID;
        reportData.push(currentData);
        //nyRef.getDataStore().setItem("konyCustomReportData",JSON.stringify(reportData));
        var payload = kony.sdk.getPayload(konyRef);
        if (kony.sdk.metric) {
            if (kony.sdk.metric.reportEventBufferBackupArray.length === 0) {
                kony.sdk.metric.readFromDS();
            }
            kony.sdk.metric.pushEventsToBufferArray();
            payload.events = kony.sdk.metric.reportEventBufferBackupArray;
        }
        payload.reportData = reportData;
        payload.rsid = sessionID;
        payload.svcid = "CaptureKonyCustomMetrics";
        // if (!kony.sdk.isJson(payload)) {
        // 	throw new Exception(Errors.METRICS_FAILURE, "Invalid json string passed for custom metrics");
        // }
        var newData = {};
        newData["konyreportingparams"] = JSON.stringify(payload);
        networkProvider.post(url, newData, {
            "Content-Type": "application/x-www-form-urlencoded"
        }, function(res) {
            //successcallback
            //konyRef.getDataStore().removeItem("konyCustomReportData");
            if (kony.sdk.metric) {
                kony.sdk.metric.clearBufferEvents();
            }
            logger.log("metric data successfully sent" + JSON.stringify(res));
        }, function(res) {
            var storeData = konyRef.getDataStore().getItem("konyCustomReportData");
            if (!storeData) {
                storeData = new Array();
            } else {
                storeData = JSON.parse(storeData);
            }
            if (kony.sdk.metric) {
                if (kony.sdk.metric.errorCodeMap[res.opstatus]) {
                    kony.sdk.metric.saveInDS();
                }
            }
            storeData.push(reportData);
            konyRef.getDataStore().setItem("konyCustomReportData", JSON.stringify(storeData));
            logger.log("Unable to send metric report" + JSON.stringify(res));
        }, true);
    }
}
//stub method
kony.sdk.initiateSession = function() {
        return;
    }
    /**
     * Method to create the sync service instance.
     * @returns {SyncService} sync service instance
     */
kony.sdk.prototype.getSyncService = function() {
    if (!kony.sdk.isInitialized) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    return new konySdkSyncService(this);
}

function konySdkSyncService(konyRef) {
    var SyncProvider = konyRef.sync;
    if (!SyncProvider) {
        throw new Exception(Errors.SYNC_FAILURE, "invalid sync provider in serviceDoc");
    }
    //generic apis
    this.init = function(initSuccess, initFailure) {
        sync.init(initSuccess, initFailure);
    }
    this.reset = function(resetSuccess, resetFailure) {
        sync.reset(resetSuccess, resetFailure);
    }
    this.cancelPendingChunkRequests = function(successCallback, errorCallback) {
        sync.cancelPendingChunkRequests(successCallback, errorCallback);
    }
    this.stopSession = function(successCallback) {
        sync.stopSession(successCallback);
    }
    this.rollbackPendingLocalChanges = function(successCallback, errorCallback) {
        sync.rollbackPendingLocalChanges(successCallback, errorCallback);
    }
    this.getPendingAcknowledgement = function(successCallback, errorCallback) {
        sync.getPendingAcknowledgement(successCallback, errorCallback);
    }
    this.getPendingUpload = function(successCallback, errorCallback) {
        sync.getPendingUpload(successCallback, errorCallback);
    }
    this.getDeferredUpload = function(successCallback, errorCallback) {
        sync.getDeferredUpload(successCallback, errorCallback);
    }
    this.getAllPendingUploadInstances = function(retrieveOnlyCount, successcallback, errorcallback) {
        sync.getAllPendingUploadInstances(retrieveOnlyCount, successcallback, errorcallback);
    }
    this.executeSelectQuery = function(query, successcallback, errorcallback) {
        sync.executeSelectQuery(query, successcallback, errorcallback);
    }
    var syncServiceAppid = SyncProvider["appId"];
    var syncServiceUrl = SyncProvider["url"] + "/";

    function genericErrorCallback(res) {
        var logger = new konyLogger();
        logger.log("error occurred in refreshing claims token.. Please call login again " + JSON.stringify(res));
        alert("error occurred in refreshing claims token.. Please call login again " + JSON.stringify(res));
    }
    //modified api
    this.startSession = function(config) {
        var errorCallback;
        if (config.onsyncerror) {
            errorCallback = config.onsyncerror;
        } else {
            errorCallback = genericErrorCallback;
        }
        kony.sdk.claimsRefresh(sdkStartSession, errorCallback);

        function sdkStartSession() {
            config = processConfig(config);
            sync.startSession(config);
        }
    }
    this.performUpgrade = function(config) {
        var errorCallback;
        if (config.onperformupgradeerror) {
            errorCallback = config.onperformupgradeerror;
        } else {
            errorCallback = genericErrorCallback;
        }
        kony.sdk.claimsRefresh(sdkPerformUpgrade, errorCallback);

        function sdkPerformUpgrade() {
            config = processConfig(config);
            sync.performUpgrade(config);
        }
    }
    this.isUpgradeRequired = function(config) {
        var errorCallback;
        if (config.isupgraderequirederror) {
            errorCallback = config.isupgraderequirederror;
        } else {
            errorCallback = genericErrorCallback;
        }
        kony.sdk.claimsRefresh(sdkIsUpgradeRequired, errorCallback);

        function sdkIsUpgradeRequired() {
            config = processConfig(config);
            sync.isUpgradeRequired(config);
        }
    }

    function processConfig(config) {
        var tempConfig = config;
        tempConfig.serverurl = syncServiceUrl;
        tempConfig.appid = syncServiceAppid;
        tempConfig.authtoken = konyRef.currentClaimToken;
        return tempConfig;
    }
    this.startReconciliation = function(config) {
        if (!sync.startReconciliation) throw new Exception(Errors.SYNC_FAILURE, "sync provider doesnot support reconciliation");
        sync.startReconciliation(config);
    }
}

function OAuthHandler(serviceUrl, providerName, callback, type) {
    var urlType = "/" + type + "/";
    var popBasic = {
        id: "popUp",
        skin: null,
        isModal: false,
        transparencyBehindThePopup: 80
    };
    var popLayout = {
        containerWeight: 100,
        padding: [5, 5, 5, 5],
        "paddingInPixel": true
    };
    var popPSP = {
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "slTitleBar"
    };
    //to do.. this is a workaround for android browser issue.. need to refactor this code
    var browserSF = new kony.ui.Browser({
        "id": "browserSF",
        "text": "Browser",
        "isVisible": true,
        "detectTelNumber": true,
        "screenLevelWidget": true,
        "enableZoom": false
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 100
    }, {});
    var prevForm = kony.application.getCurrentForm();
    var popUp = new kony.ui.Form2(popBasic, popLayout, popPSP);
    popUp.add(browserSF);
    popUp.show();
    var urlConf = {
        URL: serviceUrl + urlType + "login?provider=" + providerName,
        requestMethod: constants.BROWSER_REQUEST_METHOD_GET
    };
    browserSF.requestURLConfig = urlConf;
    browserSF.handleRequest = handleRequestCallback;

    function handleRequestCallback(browserWidget, params) {
        var originalUrl = params["originalURL"];
        if (typeof(params.queryParams) !== "undefined" && typeof(params.queryParams.code) !== "undefined") {
            prevForm.show();
            popUp.destroy();
            var headers = {};
            if (type == "oauth2" || type == "saml") {
                headers["Content-Type"] = "application/x-www-form-urlencoded"
            }
            // make request for tokens
            kony.timer.schedule("oauth2callbacktimer", function(url, callback, code, headers) {
                return function() {
                    callback(url, {
                        code: code
                    }, headers);
                }
            }(urlType + "token", callback, decodeURIComponent(params.queryParams.code), headers), 1, false);
        }
        return false;
    }
}
var KNYMobileFabric = null;
var KNYMetricsService = null;
kony.setupsdks = function(initConfig, successCallBack, errorCallBack) {
    // var KNYMobileFabric = null;
    // var KNYMetricsService = null;
    var getServiceDocNonMFApp = function(initConfig) {
        var serviceDoc = new kony.sdk.serviceDoc();
        serviceDoc.setAppId(initConfig.appConfig.appId);
        serviceDoc.setBaseId(initConfig.appConfig.appId);
        serviceDoc.setAppName(initConfig.appConfig.appName);
        serviceDoc.setReportingService(kony.sdk.constants.reportingType.session, getLicenseUrl(initConfig.appConfig));
        serviceDoc.setReportingService(kony.sdk.constants.reportingType.custom, getMetricsUrl(initConfig.appConfig));
        return serviceDoc.toJSON();
    };
    var getLicenseUrl = function(appConfig) {
        var url = "";
        if (appConfig.isturlbase) {
            url = appConfig.isturlbase + "/IST";
        } else if (appConfig.secureurl) {
            url = getFromServerUrl(appConfig.secureurl, "IST");
        } else if (appConfig.url) {
            url = getFromServerUrl(appConfig.url, "IST");
        }
        return url;
    }
    var getMetricsUrl = function(appConfig) {
        var url = "";
        if (appConfig.isturlbase) {
            url = appConfig.isturlbase + "/CMS";
        } else if (appConfig.secureurl) {
            url = getFromServerUrl(appConfig.secureurl, "CMS");
        } else if (appConfig.url) {
            url = getFromServerUrl(appConfig.url, "CMS");
        }
        return url;
    }
    var getFromServerUrl = function(url, path) {
        // ServerURL for non-mf has /mwservlet appended after the context path.
        // We need to remove it to get the base server url
        //url = url.replace(/mwservlet\/*$/i, "");
        //return url + path;
        var newUrl = "";
        var exactSubString = url.match(/mwservlet/i);
        if (exactSubString) {
            var exactSubStringLength = "mwservlet".length;
            var lastSubStringIndex = url.lastIndexOf(exactSubString);
            var subString = url.slice(0, lastSubStringIndex);
            var index = (lastSubStringIndex + exactSubStringLength);
            var subString2 = url.slice(index, url.length);
            var has = /[a-zA-Z0-9]/.test(subString2);
            if (!has) {
                newUrl = subString;
            } else {
                newUrl = url;
            }
        } else {
            newUrl = url;
        }
        return newUrl + path;
    };
    var konyAPMSuccessCallBack = function(metricsObject, initConfig) {
        kony.print("Initializing event tracking");
        KNYMetricsService = metricsObject;
        if (KNYMetricsService) {
            KNYMetricsService.setEventTracking(initConfig.eventTypes);
        }
    };
    var initKNYMobileFabric = function(initConfig) {
        KNYMobileFabric = new kony.sdk();
        clientParams = {};
        clientParams.aid = appConfig.appId;
        clientParams.aname = appConfig.appName;
        KNYMobileFabric.setClientParams(clientParams);
    }
    var isServiceDocPresentInAppConfig = function(initConfig) {
        if ((initConfig) && (initConfig.appConfig) && (initConfig.appConfig.serviceDoc)) {
            return true;
        }
        return false;
    }
    var sdkInit = function(initConfig, successcallback, failurecallback) {
        var isInvalidConfig = false;
        var networkProvider = new konyNetworkProvider();
        var refreshServiceDoc = function() {
            var networkProvider = new konyNetworkProvider();
            networkProvider.post(initConfig.serviceUrl, null, {
                "X-Kony-App-Key": initConfig.appKey,
                "X-Kony-App-Secret": initConfig.appSecret,
                "X-HTTP-Method-Override": "GET"
            }, function(data) {
                kony.store.setItem("serviceDoc", JSON.stringify(data));
            }, function(data) {
                kony.sdk.logger.log("Refresh of serviceDoc failed:" + data);
            });
        }
        if (KNYMobileFabric == null) {
            initKNYMobileFabric(initConfig);
        }
        if (initConfig && initConfig.appConfig && (getLicenseUrl(initConfig.appConfig) === "")) {
            if (kony.license && kony.license.setIsLicenseUrlAvailable) {
                kony.license.setIsLicenseUrlAvailable(false);
                kony.sdk.isLicenseUrlAvailable = false;
            }
        }
        if (kony.sdk.isLicenseUrlAvailable && kony.license && kony.license.createSession) {
            kony.license.createSession();
        }
        if (!initConfig.isMFApp) {
            initWithServiceDocHelper(initConfig, successcallback, failurecallback, getServiceDocNonMFApp(initConfig));
        } else {
            if (!initConfig.appConfig.svcDocRefresh) {
                if (initConfig.appConfig.svcDoc) {
                    initWithServiceDocHelper(initConfig, successcallback, failurecallback, initConfig.appConfig.svcDoc);
                } else {
                    isInvalidConfig = true;
                }
            }
            if (isInvalidConfig || initConfig.appConfig.svcDocRefresh) {
                var cachedServiceDoc = kony.store.getItem("serviceDoc");
                if (cachedServiceDoc) {
                    try {
                        cachedServiceDoc = JSON.parse(cachedServiceDoc);
                    } catch (err) {
                        cachedServiceDoc = "";
                        kony.sdk.logger.log("cached service doc corrupted:" + err);
                    }
                }
                if (initConfig.appConfig.svcDocRefreshTimeSecs && !isInvalidConfig) {
                    if (cachedServiceDoc || initConfig.appConfig.svcDoc) {
                        var offlineServiceDoc = cachedServiceDoc ? cachedServiceDoc : initConfig.appConfig.svcDoc;
                        initWithServiceDocHelper(initConfig, successcallback, failurecallback, offlineServiceDoc);
                        kony.timer.schedule("serviceDocTimer", refreshServiceDoc, initConfig.appConfig.svcDocRefreshTimeSecs, true);
                    } else {
                        networkProvider.post(initConfig.serviceUrl, null, {
                            "X-Kony-App-Key": initConfig.appKey,
                            "X-Kony-App-Secret": initConfig.appSecret,
                            "X-HTTP-Method-Override": "GET"
                        }, function(res) {
                            res = kony.sdk.formatSuccessResponse(res);
                            initWithServiceDocHelper(initConfig, successcallback, failurecallback, res);
                            kony.store.setItem("serviceDoc", JSON.stringify(res));
                        }, function(res) {
                            failurecallback(res);
                        });
                    }
                } else {
                    networkProvider.post(initConfig.serviceUrl, null, {
                        "X-Kony-App-Key": initConfig.appKey,
                        "X-Kony-App-Secret": initConfig.appSecret,
                        "X-HTTP-Method-Override": "GET"
                    }, function(res) {
                        res = kony.sdk.formatSuccessResponse(res);
                        initWithServiceDocHelper(initConfig, successcallback, failurecallback, res);
                        kony.store.setItem("serviceDoc", JSON.stringify(res));
                    }, function(res) {
                        if (cachedServiceDoc || initConfig.appConfig.svcDoc) {
                            var offlineServiceDoc = cachedServiceDoc ? cachedServiceDoc : initConfig.appConfig.svcDoc;
                            initWithServiceDocHelper(initConfig, successcallback, failurecallback, offlineServiceDoc);
                        } else {
                            failurecallback(res);
                        }
                    });
                }
            }
        }
    };
    var initWithServiceDocHelper = function(initConfig, successcallback, failurecallback, serviceDoc) {
            try {
                KNYMobileFabric.initWithServiceDoc(initConfig.appKey, initConfig.appSecret, serviceDoc);
                var MetricsService = null;
                if (kony.sdk.isLicenseUrlAvailable) {
                    MetricsService = KNYMobileFabric.getMetricsService();
                    if (kony.license && kony.license.registerChangeListener) {
                        kony.license.registerChangeListener(KNYMobileFabric.sessionChangeHandler);
                    }
                }
                if (initConfig.isMFApp) {
                    konyRef.isAnonymousProvider = true;
                }
                if (successcallback) {
                    successcallback(MetricsService, initConfig);
                }
            } catch (error) {
                if (failurecallback) failurecallback(error);
            }
        }
        /*
         * isMFApp -- boolean to indicate app is being built for MFapp as backend or plain Konyserver
         * appConfig -- set to appConfig of startup.js
         *
         * --MF Parameters--
         * serviceUrl -- mf appconfig url  
         * appKey -- set to App Key for MF app scenario
         * appSecret -- set to App Secret for MF app scenario
         *
         * -- For APM --
         * eventTypes -- This should be set to comma separated values chosen in the IDE for events chosen for automatic tracking
         *
         * Examples
         * var sdkInitConfigForMF = { 
         *    "isMFApp": true,
              "appConfig" : appconfig,

              "appKey" :"<appkey fetched from MF>",
              "appSecret":"<appsecret fetched from MF>",
              "serviceUrl" : "<appconfig url of the form https://100000013.auth.sit2-konycloud.com/appconfig>",
              "eventTypes" :   ["FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash"]
              }
         * var sdkInitConfigForNonMF = {
              "isMFApp": false,
              "appConfig" : appconfig

              "eventTypes" :   ["FormEntry","FormExit","Touch","ServiceRequest","ServiceResponse","Gesture","Orientation","Error","Crash"]
              }               
         */
    sdkInit(initConfig, function(metricsObject, initConfig) {
        kony.print("sdk initialization done");
        konyAPMSuccessCallBack(metricsObject, initConfig);
        if (successCallBack) successCallBack(KNYMobileFabric);
    }, function(errorObj) {
        kony.print("Error in setup" + errorObj ? errorObj.toString() : "");
        if (errorCallBack) errorCallBack(errorObj);
    });
};﻿
function konyLogger() {
    this.log = function(text) {
        if (kony.sdk.isDebugEnabled) {
            kony.print(text);
        }
    }
}
/*
function konyNetworkProvider() {
	//var logger = new konyLogger();
	this.post = function (url, params, headers, successCallback, failureCallback, includeReportingParams) {

		function networkCallbackStatus(status, result) {
			if (status === 400) {
				logger.log("Response:" + JSON.stringify(result));
				if (result.opstatus !== null && result.opstatus !== undefined && result.opstatus !== 0) {
					failureCallback(result);
				} else {
					successCallback(result);
				}
			}
		}
		if (headers === undefined || headers === null) {
			headers = {}
		} 
		if (headers["Content-Type"] === null || headers["Content-Type"] === undefined) {
			//headers["Content-Type"] = "application/json"; //setting to default header
			//headers["Content-Type"] = "application/x-www-form-urlencoded"; //setting to default header
		}
		// headers = JSON.stringify(headers);

		if (params === undefined || params === null) {
			params = {};
		}
		
		if(typeof(headers) !== 'undefined' && headers !== null){
			params.httpheaders = headers;
		}
		
		var sprop = "konyreportingparams";

	  if (includeReportingParams) {

		if (params[sprop]) {
			//This means is this is a reporting service. The license.js will cleanup this variable.
			// To ensure that our values are nto overridden we take a back up of the same.
			params.konysdktemparams = params[sprop];
			if (Object.defineProperty) {
				Object.defineProperty(params, sprop, {
					get : function () {
						return this.konysdktemparams;
					},
					set : function (value) {}
				});
			} else {
				params.__defineGetter__(sprop, function () {
					return this.konysdktemparams;
				});
				params.__defineSetter__(sprop, function (value) {});
			}
		}
	  } else {
		if (Object.defineProperty) {
			Object.defineProperty(params, sprop, {
				get : function () {},
				set : function () {}
			});
		} else {
			params.__defineGetter__(sprop, function () {});
			params.__defineSetter__(sprop, function () {});
		}
	  }
		
		logger.log("Hitting " + url + " with params " + JSON.stringify(params));
		kony.net.invokeServiceAsync(url, params, networkCallbackStatus, null);
	};
};
*/
function konyNetworkProvider() {
    this.post = function(url, params, headers, successCallback, failureCallback, options) {
        if (typeof(XMLHttpRequest) !== 'undefined') {
            konyXMLHttpRequestWrapper(url, params, headers, successCallback, failureCallback, options);
        } else {
            konyNetHttpRequest(url, params, headers, successCallback, failureCallback);
        }
    }
};

function konyXMLHttpRequestWrapper(url, params, headers, successCallback, failureCallback, options) {
    var logger = new konyLogger();
    if (typeof(window) === 'undefined') {
        logger.log("window is not defined.");
        return;
    }
    var userAgent = window.navigator.userAgent;
    var IE = userAgent.indexOf("MSIE ");
    if (IE != -1 && typeof(xdomain) === "undefined") {
        function callback(xdomain) {
            logger.log("xdomain is " + xdomain);
            xdomain.debug = true;
            var slaves = kony.sdk.getXdomainSlaves();
            xdomain.slaves(slaves);
            konyXMLHttpRequest(url, params, headers, successCallback, failureCallback, options);
        }
        xdomain_init(callback);
    } else {
        konyXMLHttpRequest(url, params, headers, successCallback, failureCallback, options);
    }
};

function konyNetHttpRequest(url, params, headers, successCallback, failureCallback) {
    var logger = new konyLogger();
    var paramsTable = null;
    var httpRequest = new kony.net.HttpRequest({
        "timeoutIntervalForRequest": 120,
        "timeoutIntervalForResource": 36000
    });
    var isInvalidJSON = false;
    httpRequest.backgroundTransfer = true;
    httpRequest.open(constants.HTTP_METHOD_POST, url);

    function localRequestCallback(result) {
        var readyState = Number(httpRequest.readyState.toString());
        var status = Number(httpRequest.status.toString());
        if (readyState === 4) {
            var response = null;
            if (result && result.response) {
                response = kony.sdk.cloneObject(result.response);
            } else if (httpRequest.response) {
                response = kony.sdk.cloneObject(httpRequest.response);
            }
            if (response && typeof(response) === 'string') {
                if (kony.sdk.isJson(response)) {
                    response = JSON.parse(response);
                } else {
                    isInvalidJSON = true;
                }
            }
            if (response && !(isInvalidJSON)) {
                response.httpresponse = {};
                response.httpresponse.headers = httpRequest.getAllResponseHeaders();
                response.httpresponse.url = url;
                response.httpresponse.responsecode = status;
            }
            if (isInvalidJSON || (!response && status == 200)) {
                var errorMessage = {};
                errorMessage.httpresponse = {};
                errorMessage["opstatus"] = kony.sdk.errorcodes.invalid_json_code;
                errorMessage["errmsg"] = kony.sdk.errormessages.invalid_json_message;
                errorMessage["errcode"] = kony.sdk.errorcodes.invalid_json_code;
                errorMessage["httpStatusCode"] = status;
                errorMessage.httpresponse["response"] = response;
                errorMessage.httpresponse.headers = httpRequest.getAllResponseHeaders();
                errorMessage.httpresponse.url = url;
                errorMessage.httpresponse.responsecode = status;
                failureCallback(errorMessage);
            } else if (status === 200) {
                if (!response.opstatus) {
                    response.opstatus = 0;
                }
                if (response.opstatus == 0) {
                    successCallback(response);
                } else {
                    failureCallback(response);
                }
            } else {
                var resultTable = {};
                if (response) {
                    resultTable = response;
                    resultTable.httpStatusCode = httpRequest.status.toString();
                } else {
                    resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
                    resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
                    resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
                }
                failureCallback(resultTable);
            }
        }
    }
    var firstKey = true;
    for (var key in params) {
        if (firstKey) {
            paramsTable = new kony.net.FormData();
            firstKey = false;
        }
        if (typeof(params[key]) != "undefined") {
            if (typeof(params[key]) !== "string") {
                params[key] = JSON.stringify(params[key]);
            }
            paramsTable.append((key), (params[key]));
        }
    }
    if (headers) {
        for (var key in headers) {
            httpRequest.setRequestHeader(key, headers[key]);
        }
    } else {
        httpRequest.setRequestHeader("Content-Type", "application/json");
    }
    httpRequest.onReadyStateChange = localRequestCallback;
    httpRequest.send(paramsTable);
}

function konyXMLHttpRequest(url, params, headers, successCallback, errorCallback, options) {
    var logger = new konyLogger();
    var paramsTable = "";
    var firstVal = true;
    var resultTable = {};
    var httpRequest = new XMLHttpRequest();
    if (typeof(errorCallback) === 'undefined') {
        errorCallback = successCallback;
    }
    if (!params) {
        params = "";
    }
    httpRequest.onerror = function(res) {
        resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
        resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
        resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
        errorCallback(resultTable);
    };
    httpRequest.onload = function(res) {
        var isInvalidJSON = false;
        if (res) {
            if (httpRequest.responseText !== "") {
                if (kony.sdk.isJson(httpRequest.responseText)) {
                    resultTable = JSON.parse(httpRequest.responseText);
                } else {
                    isInvalidJSON = true;
                }
            }
            if (isInvalidJSON || (httpRequest.status == 200 && !httpRequest.responseText)) {
                resultTable = {};
                resultTable.httpresponse = {};
                resultTable["opstatus"] = kony.sdk.errorcodes.invalid_json_code;
                resultTable["errmsg"] = kony.sdk.errormessages.invalid_json_message;
                resultTable["errcode"] = kony.sdk.errorcodes.invalid_json_code;
                resultTable["httpStatusCode"] = httpRequest.status;
                resultTable.httpresponse["response"] = httpRequest.responseText;
                resultTable.httpresponse.headers = httpRequest.getAllResponseHeaders();
                resultTable.httpresponse.responsecode = httpRequest.status;
                resultTable.httpresponse.url = url;
                errorCallback(resultTable);
            } else if (httpRequest.status === 200) {
                resultTable.httpresponse = {};
                resultTable.httpresponse.headers = httpRequest.getAllResponseHeaders();
                resultTable.httpresponse.responsecode = httpRequest.status;
                resultTable.httpresponse.url = url;
                if (!resultTable.opstatus) {
                    resultTable.opstatus = 0;
                }
                if (resultTable["opstatus"] === 0) {
                    successCallback(resultTable);
                } else {
                    errorCallback(resultTable);
                }
            } else {
                if (httpRequest.responseText) {
                    resultTable["httpStatusCode"] = httpRequest.status;
                    resultTable.httpresponse = {};
                    resultTable.httpresponse.headers = httpRequest.getAllResponseHeaders();
                    resultTable.httpresponse.responsecode = httpRequest.status;
                    resultTable.httpresponse.url = url;
                    errorCallback(resultTable);
                } else {
                    resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
                    resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
                    resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
                    errorCallback(resultTable);
                }
            }
        } else {
            resultTable["opstatus"] = kony.sdk.errorcodes.unknown_error_code;
            resultTable["errcode"] = kony.sdk.errorcodes.unknown_error_code;
            resultTable["errmsg"] = kony.sdk.errormessages.unknown_error_message;
            errorCallback(resultTable);
        }
    };
    httpRequest.ontimeout = function(res) {
        resultTable["opstatus"] = kony.sdk.errorcodes.connectivity_error_code;
        resultTable["errcode"] = kony.sdk.errorcodes.connectivity_error_code;
        resultTable["errmsg"] = kony.sdk.errormessages.connectivity_error_message;
        errorCallback(resultTable);
    }
    httpRequest.open("POST", url, true);
    if (typeof(headers) !== 'undefined' && headers !== null) {
        if (typeof(headers["Content-Type"]) === 'undefined') {
            headers["Content-Type"] = "application/json";
        }
        for (var header in headers) {
            httpRequest.setRequestHeader(header, headers[header]);
        }
    }
    if (params && params.httpconfig && params.httpconfig.timeout) {
        httpRequest.timeout = params.httpconfig.timeout * 1000;
    }
    if (headers["Content-Type"] === "application/x-www-form-urlencoded" || headers["Content-Type"] === "application/json") {
        var paramsTable = "";
        var firstVal = true;
        for (var key in params) {
            if (!firstVal) {
                paramsTable += "&";
            }
            firstVal = false;
            if (typeof(params[key]) != "undefined") {
                if (typeof(params[key]) !== "string") {
                    logger.log("### Checking for enablePreMFCompat Flag **Customer Defect 54897**");
                    if (!(params[key] instanceof Array && typeof(options) != "undefined" && options != null && typeof(options["enablePreMFCompat"]) != "undefined" && options["enablePreMFCompat"] === true)) params[key] = JSON.stringify(params[key]);
                }
                paramsTable = paramsTable + key + "=" + encodeURIComponent(params[key]); 
            } 
        }
        params = paramsTable;
    } else if (typeof(params) !== "string") {
        params = JSON.stringify(params);
    }
    try {
        httpRequest.send(params);
    } catch (e) {
        alert("error occurred " + JSON.stringify(e));
    }
}

function konyDataStore() {
    var logger = new konyLogger();
    this.setItem = function(key, value) {
        logger.log("Setting item:" + value + " with key:" + key);
        if (typeof(key) !== "string") {
            throw new Exception(Errors.DATA_STORE_EXCEPTION, "Invalid Key");
        } else {
            try {
                key = key.replace(/\//gi, "");
                kony.store.setItem(key, value);
            } catch (e) {
                logger.log("Failed to set item in dtastore:" + e);
            }
        }
    };
    this.getItem = function(key) {
        logger.log("Getting item for key:" + key);
        if (typeof(key) !== "string") {
            throw new Exception(Errors.DATA_STORE_EXCEPTION);
        } else {
            key = key.replace(/\//gi, "");
            var value = kony.store.getItem(key);
            if (value === null || value === undefined) {
                logger.log("No value found with key:" + key);
                return null;
            } else {
                return value;
            }
        }
    };
    this.removeItem = function(key) {
        logger.log("Removing item for key:" + key);
        if (typeof(key) !== "string") {
            throw new Exception(Error.DATA_STORE_EXCEPTION);
        } else {
            key = key.replace(/\//gi, "");
            kony.store.removeItem(key); //If no item with that key exists, the method does not perform any action. Thus no need to check for key availablity.
        }
    };
    this.destroy = function() {
        logger.log("Destroying data store for this app");
        kony.store.clear();
    };
    this.getAllItems = function() {
        logger.log("Getting all item from data store");
        var items = {};
        var len = kony.store.length(); //get key length
        for (var i = 0; i < len; i++) {
            var key = kony.store.key(i); //get ith key
            var value = kony.store.getItem(key); //get value
            items[key] = value; //prepare itemset
        }
        return items;
    }
};
kony.sdk.getPayload = function(konyRef) {
    var payload = {};
    payload.os = kony.os.deviceInfo().version + "";
    payload.dm = kony.os.deviceInfo().model;
    payload.did = kony.os.deviceInfo().deviceid;
    payload.ua = kony.os.userAgent();
    var clientParams = konyRef.getClientParams();
    payload.aid = clientParams.aid ? clientParams.aid : konyRef.mainRef.baseId;
    payload.aname = clientParams.aname ? clientParams.aname : konyRef.mainRef.name;
    payload.chnl = kony.sdk.getChannelType();
    payload.plat = kony.sdk.getPlatformName();
    if (payload.plat === "ios") {
        payload.did = getDeviceIdForIOSPlatform();
    }
    payload.aver = appConfig.appVersion;
    payload.atype = "native";
    payload.stype = "b2c";
    payload.kuid = konyRef.getUserId();
    payload.mfaid = konyRef.mainRef.appId;
    payload.mfbaseid = konyRef.mainRef.baseId;
    payload.mfaname = konyRef.mainRef.name;
    payload.sdkversion = kony.sdk.version;
    payload.sdktype = kony.sdk.getSdkType();
    return payload;
}
kony.sdk.getChannelType = function() {
    var returnVal = "";
    return returnVal;
};
kony.sdk.getPlatformName = function() {
    var returnVal = "";
    return returnVal;
};
kony.mbaas.invokeMbaasServiceFromKonyStudio = function(url, inputParam, serviceID, operationID, callBack) {
    var currentInstance = kony.sdk.getCurrentInstance();
    if (!currentInstance) {
        throw new Exception(Errors.INIT_FAILURE, "Please call init before invoking this service");
    }
    var integrationService = currentInstance.getIntegrationService(serviceID);
    var headers = null;
    if (inputParam && inputParam["httpheaders"]) {
        headers = inputParam["httpheaders"];
        delete inputParam["httpheaders"];
    }
    integrationService.invokeOperation(operationID, headers, inputParam, function(res) {
        if (typeof(callBack) === 'function') {
            callBack(400, res);
        }
    }, function(res) {
        if (typeof(callBack) === 'function') {
            callBack(400, res);
        }
    });
}
kony.sdk.XdomainSlaves = {};
kony.sdk.XdomainLibPath = null;
kony.sdk.getXdomainSlaves = function() {
    function isEmptyObject(obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    }
    if (isEmptyObject(kony.sdk.XdomainSlaves)) {
        throw new Exception(Errors.MISC_FAILURE, "No XdomainSlaves defined. Please use the kony.sdk.setXdomainSlaves({'http://authtenant.konycloud.com':'xdomain'}) to set the Xdomain slaves");
    }
    return kony.sdk.XdomainSlaves;
};
kony.sdk.setXdomainSlaves = function(slaveEndPointMap) {
    if (!slaveEndPointMap) {
        throw new Exception(Errors.MISC_FAILURE, "Invalid slave end points");
    }
    for (var key in slaveEndPointMap) {
        kony.sdk.XdomainSlaves[key] = slaveEndPointMap[key];
    }
}
kony.sdk.getXdomainLibPath = function() {
    return kony.sdk.XdomainLibPath;
}
kony.sdk.setXdomainLibPath = function(path) {
    if (!path) {
        throw new Exception(Errors.MISC_FAILURE, "Invalid path");
    }
    kony.sdk.XdomainLibPath = path;
}

function xdomain_init(callback) {
    var logger = new konyLogger();
    jQuery.getScript(kony.sdk.getXdomainLibPath()).done(function() {
        if (typeof(xdomain) !== 'undefined') {
            logger.log("xdomain Script loading done");
            callback(xdomain);
        } else {
            throw new Exception(Errors.MISC_FAILURE, "not able to fetch xdomain library from " + kony.sdk.getXdomainLibPath());
        }
    }).fail(function() {
        //TODO: handle failure case
        throw new Exception(Errors.MISC_FAILURE, "xdomain library load failed from " + kony.sdk.getXdomainLibPath());
    });
}

function getDeviceIdForIOSPlatform() {
    if (kony.os.deviceInfo().osversion >= 6.0) {
        return kony.os.deviceInfo().identifierForVendor;
    }
    return kony.os.deviceInfo().customdeviceid;
}
kony.sdk.cloneObject = function(obj) {
    var clonedObject;
    try {
        clonedObject = JSON.parse(JSON.stringify(obj));
    } catch (err) {
        kony.sdk.logger.log("cloning object failed, reverting back to copy");
        clonedObject = obj;
    }
    return clonedObject;
}

	kony.decrement = function(num){
		if(typeof(num) === "number"){
			return num - 1;
		}else{
			return num;
		}
	};
	
	kony.increment = function(num){
		if(typeof(num) === "number"){
			return num + 1;
		}else{
			return num;
		}
	};

	kony.decrementIndices = function(arr){
		var tArr = [];
		for(var i=0; i < arr.length; i++) {
			tArr[i] = arr[i] - 1;		
		}
		return tArr;
	};
	
	kony.incrementIndices = function(arr){
		var tArr = [];
		for(var i=0; i < arr.length; i++) {
			tArr[i] = arr[i] + 1;		
		}
		return tArr;
	};	
/**The Math Library has APIs that you can use to perform mathematical operations.*/
kony.math = {
	/**@Deprecated. This API returns the value of pi. Note: math.pi is not a function, but a property in math namespace.*/
	pi: Math.PI,

	/**@Deprecated. This API generates pseudo-random numbers which are uniformly distributed. This API generates a real number between 0 and 1.*/
	random: function () {
		
		return (Math.random());
		/*var result = Math.random();
	
		if (0 === args.length) {
			return result;
		} else if (1 === args.length) {
			args[0] -= 0;
			if (isNaN(args[0])) {
				throw new Error("Invalid argument to math.random");
			}
	
			result = Math.floor(result * args[0]) + 1;
		} else if (2 === args.length) {
			args[0] -= 0; args[1] -= 0;
			if (isNaN(args[0]) || isNaN(args[1])) {
				throw new Error("Invalid argument(s) to math.random");
			}
	
			result = Math.floor(result * (args[1] - args[0] + 1)) + args[0];
		} else {
			throw new Error("Invalid number of arguments to math.random");
		}
	
		return result;*/
	},
	
	/*
	randomseed: function (args) {
		return null;
	},
	*/
/**@Deprecated. This API sets the input parameter as the "seed" for the pseudo-random generator.
Note: Equal seeds produce equal sequences of numbers.*/
	randomSeed: function (num) {
		pseudoRandomArray = [];
	
		if (isNaN(num))
			throw new Error("Invalid argument to math.randomseed");
		
		if(!pseudoRandomArray[num])
		{
			pseudoRandomArray[num] = Math.random();
		}
		return pseudoRandomArray[num];
	},
/**@Deprecated. This API converts the float value to an integer. The converted integer value is always the integer part of the specified float number (number before the decimal).*/
	toInteger: function (num) {
		num -= 0;
		if (isNaN(num)) {
			throw new Error("Invalid argument to math.tointeger");
		}
	
		return Math.floor(num);
	},
	
	/**@Deprecated. This API raises the first parameter to the power of the second parameter and returns the result.*/
	pow: function (num1, num2) {
		
		num1 -= 0;
		num2 -= 0;
		
		if (isNaN(num1) || isNaN(num2)) {
			throw new Error("Invalid argument(s) to math.pow");
		}
	
		return Math.pow(num1, num2);
	},

		findExtreme: function(extreme, args) {
		if (args.length < 2) {
			throw new Error((extreme ? "math.max" : "math.min") + " needs atleast two arguments");
		}
	
		var result = args[0] - 0;
		if (isNaN(result)) {
			throw new Error("Invalid argument to " + (extreme ? "math.max" : "math.min"));
		}
	
		for (var i = 1; i < args.length; i++) {
			args[i] -= 0;
			if (isNaN(args[i])) {
				throw new Error("Invalid argument to " + (extreme ? "math.max" : "math.min"));
			}
	
			if (extreme) {
				if (result < args[i]) {
					result = args[i];
				}
			} else {
				if (result > args[i]) {
					result = args[i];
				}
			}
		}
	
		return result;
	},

	/**@Deprecated. This API returns the minimum value among the arguments.*/
	min: function () {
		return kony.math.findExtreme(false, arguments);
	},

	/**@Deprecated. This API returns the maximum value among the arguments.*/
	max: function () {
		return kony.math.findExtreme(true, arguments);
	},

	/**@Deprecated. This API returns the square root of the given number.*/
	sqrt: function (num) {
		
		num -= 0;
		if (isNaN(num)) {
			throw new Error("Invalid argument to math.sqrt");
		}
		var result = Math.sqrt(num);
		return isNaN(result) ? "nan" : result;
	}
}

/**The string Library has APIs that you can use to manipulate strings. The kony.string name space provides static string APIs. These static APIs augment the APIs in the Global string object which is available by default. For more information refer, https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/string.*/
kony.string = {

/**@Deprecated This API finds the first occurrence of the search string in the source string. */
    find : function () {
		if (arguments.length < 2) {
			throw new Error("string.find needs atleast two arguments");
		}
	
		for (var i = 0; i < 2; i++) {
			if (typeof(arguments[i]) === "number") {
				arguments[i] = arguments[i].toString();
			} else if (typeof(arguments[i]) !== "string") {
				throw new Error("Invalid argument(s) to string.find");
			}
		}
	
		var beginIndex = 0;
		if (arguments.length > 2) {
			beginIndex = arguments[2] - 0;
			if (!isNaN(beginIndex)) {
				if (beginIndex < 0) {
					beginIndex += arguments[0].length;
					if (beginIndex < 0) beginIndex = 0;
				}
			} else {
				beginIndex = 0;
			}
		}
	
		var result = arguments[0].indexOf(arguments[1], beginIndex - 1);
		if (-1 === result) {
			return null;
		} else {
			////result++;
			//return result, result + arguments[1].length - 1;
			return result;
		}
	},
	
	/**@Deprecated This API returns the length of the source string. */
	len: function (s) {
		if (0 === arguments.length) {
			throw new Error("string.len needs atleast one argument");
		}
		
		if (typeof(s) === "number") {
			s = s.toString();
		} else if (typeof(s) !== "string") {
			throw new Error("Invalid argument to string.len");
		}

		return arguments[0].length;
    },

	/**@Deprecated This API compares the contents of two strings numerically. For example, "Adam" is smaller than "adam" as per the ASCII table because A(65) is smaller than a(97). */
    compare: function (s1, s2) {
		if (arguments.length < 2) {
			throw new Error("string.compare needs atleast two arguemnts");
		}
			
		if (typeof(s1) == "string" && typeof(s2) == "string") {
			if (s1 < s2) {
				return -1;
			} else if (s1 == s2) {
				return 0;
			} else {
				return 1;
			}
		} else {
			throw new Error("Invalid argument(s) to string.compare");
		}
    },

    /**@Deprecated This API returns a string which contains a single character from the source string at the specified index. */
	charat: function (s1, index) {
		if (arguments.length < 2) {
			throw new Error("string.charat needs atleast two arguments");
		}
	
		if (typeof(s1) === "number") {
			s1 = s1.toString();
		} else if (typeof(s1) !== "string") {
			throw new Error("Invalid argument to string.charat");
		}
	
		index -= 0;
		if (isNaN(index)) {
			throw new Error("Invalid argument to string.charat");
		}
	
		////index--;
		if (index < 0 || index >= s1.length) {
			return null;
		}
	
		return s1.charAt(index);
    },

    flipCase: function(args, flag) {
	    if (0 === args.length) {
	            throw new Error(flag ? "string.upper" : "string.lower" + " needs atleast one argument");
	    }
	
	    if (typeof(args[0]) !== "string") {
	            throw new Error("Invalid argment to " + flag ? "string.upper" : "string.lower");
	    }
	
	    if (flag) {
	            return args[0].toUpperCase();
	    } else {
	            return args[0].toLowerCase();
	    }
    },
	/**@Deprecated This API changes the upper case characters of the source string to lower case characters. */
	lower: function () {
		return kony.string.flipCase(arguments, false);
	},
/**@Deprecated This API changes the lower case characters of the source string to upper case characters.*/
	upper: function () {
		return kony.string.flipCase(arguments, true);
	},

	/**This API generates a string which is equivalent to "n copies of the source string concatenated together".*/
	rep: function (s,n) {
		if (arguments.length < 2) {
			throw new Error("Insufficient arguments to string.rep");
		}
	
		if (typeof(s) === "number") {
			s = s.toString();
		} else if (typeof(s) !== "string") {
			throw new Error("Invalid argument to string.rep");
		}
	
		n -= 0;
		if (isNaN(n)) {
			throw new Error("Invalid argument to string.rep");
		}
	
		var resultStr = "";
		for (var i = 0; i < n; i++) {
			resultStr += s;
		}
	
		return resultStr;
	},
	
	/**This API reverses the characters in the source string.*/
	reverse: function (s) {
		if (0 === arguments.length) {
			throw new Error("string.reverse needs atleast one argument");
		}
	
		if (typeof(s) === "number") {
			s = s.toString();
		} else if (typeof(s) !== "string") {
			throw new Error("Invalid argument to string.reverse");
		}
	
		var resultStr = "";
		for (var i = s.length - 1; i >= 0; i--) {
			resultStr += s.charAt(i);
		}
	
		return resultStr;
	},
	/**This API removes the leading and ending spaces from the source string.*/
	trim: function (s) {
        if (0 === arguments.length) {
              throw new Error("string.trim needs atleast one argument");
        }

        if(s === undefined) {
              return s;
        }    
        else if (typeof(s) !== "string") {
              return s.toString();
              //throw new Error("Invalid argument to string.trim");
        }
 
        return s.replace(/^\s*/, "").replace(/\s*$/, "");
  },
	/**Determines whether two strings contain the same data, ignoring the case of the letters in the String. */
	equalsIgnoreCase: function (s1, s2) {
		if (arguments.length < 2) {
			throw new Error("string.equalsIgnoreCase needs atleast two arguments");
		}
	
		if (typeof(s1) !== "string" || typeof(s2) !== "string") {
			throw new Error("Invalid argument(s) to string.equalsIgnoreCase");
		}
	
	    return (s1.toLowerCase() === s2.toLowerCase());
	},
	
	equals: function (s1, s2) {
		if (arguments.length < 2) {
			throw new Error("string.equals needs atleast two arguments");
		}
	
		if (typeof(s1) !== "string" || typeof(s2) !== "string") {
			throw new Error("Invalid argument(s) to string.equals");
		}
	
		return (s1 === s2);
	},
	
	matchEnds: function (args, end) {
		if (args.length < 2) {
			throw new Error(end ? "string.endsWith" : "string.startsWith" +
									" needs atleast two arguments");
		}
	
		if (typeof(args[0]) !== "string" || typeof(args[1]) !== "string") {
			throw new Error("Invalid argument(s) to " + end ? "string.endsWith" : "string.startsWith");
		}
	
		if (!(args.length > 2 && (args[2] === false || args[2] === null))) {
			args[0] = args[0].toLowerCase();
			args[1] = args[1].toLowerCase();
		}
	
	    if (end) {
	    	var ll = args[0].lastIndexOf(args[1]);
	    	if(ll < 0){
	    		return false;
	    	}else{
	        	return (args[0].lastIndexOf(args[1]) === args[0].length - args[1].length);
	        }
	    }
	    else {
	        return (args[0].indexOf(args[1]) === 0);
	    }
	},
	/**This API returns a boolean value indicating if the source string begins with the specified string. */
	startsWith: function (sourcestring, comparestring, ignorecase) {
		return kony.string.matchEnds(arguments, false);
	},
	/**This API returns a boolean value indicating if the source string ends with the specified string. */
	endsWith: function (sourcestring, comparestring, ignorecase) {
		return kony.string.matchEnds(arguments, true);
	},
	/**@Deprecated This API splits the source string based on the separator (default is comma) and returns a table containing the string. */
	split: function (s, sep) {
		if (0 === arguments.length) {
			throw new Error("string.split needs atleast one argument");
		}
	
		if (typeof(s) !== "string") {
			throw new Error("Invalid argument to string.split");
		}
	
		var delim;
		if (arguments.length > 1) {
			if (typeof(sep) !== "string") {
				throw new Error("The optional delimitor for string.split must be a string");
			}
	
			delim = sep;
		} else {
			delim = ",";
		}
		
		var splitstr = new Array();
		
		if(delim == "") {
			splitstr[1] = s;
		} else {
			splitstr = s.split(delim);
			splitstr.unshift(null); //To match lua Array indexing.
		}
		return splitstr;
	},
	/**@Deprecated This API returns the substring of the source string. */
	sub: function () {
		function getIndex(i, len) {
			if (typeof(i) === "string") {
				i -= 0;
			} else if (typeof(i) !== "number") {
				throw new Error("Invalid argument to string.sub");
			}
	
			if (i < 0) {
				////return (i + len + 1);
				return( i + len - 1);
			} else if (i > len) {
				return len;
			}
	
			return i;
		}
	
		function adjustIndex(i) {
			if (i > 0) {
				return i - 1;
			} else {
				return 0;
			}
		}
	
		if (arguments.length < 2) {
			throw new Error("string.sub needs atleast two arguments");
		}
		
		var args = [];
		for(var i=0; i < arguments.length; i++) {
			args[i] = arguments[i];		
		}
	
		if (typeof(args[0]) === "number") {
			args[0] = args[0].toString();
		} else if (typeof(args[0]) !== "string") {
			throw new Error("Invalid argument to string.sub");
		}
	
		var startIndex = getIndex(args[1], args[0].length);
		var endIndex = args[0].length;
		if (args.length > 2) {
			endIndex = getIndex(args[2], args[0].length);
		}
	
		if (endIndex < startIndex || (0 === startIndex && endIndex === startIndex)) {
			return "";
		} else {
			////startIndex = adjustIndex(startIndex); endIndex = adjustIndex(endIndex);
			return args[0].slice(startIndex, endIndex + 1);
		}
	},
	/**@Deprecated This API finds and replaces the occurrences of a string in the source string with a string you specify. */
	replace: function (s, f, rep) {
		if (arguments.length < 3) {
			throw new Error("string.replace needs atleast three arguments");
		}
	
		if (typeof(s) !== "string" || typeof(f) !== "string" ||
			typeof(rep) !== "string") {
			throw new Error("Invalid argument(s) to string.replace");
		}
	
		//return [s.replace(f, rep)];
	
		// Replace all occurrences
	    //var exp1 = new RegExp(f, "g");
		var exp1 = new RegExp(kony.string.escapeRegExp(f), "g");
	    return (s != "" && f == "") ? s : s.replace(exp1, rep);
	},
	/*
	format: function (args) {
		if (0 === args.length) {
			throw new Error("string.format needs atleast one argument");
		}
	
		if (typeof(args[0]) === "number") {
			return args[0].toString();
		} else if (typeof(args[0]) === "string") {
			var toks = args[0].split(/(%[f,s,b])/);
	
			var flag = false;
			var result = "";
			for (var i = 0, j = 1; i < toks.length; i++) {
				if ("%f" === toks[i] || "%s" === toks[i] || "%b" === toks[i]) {
					if (j === args.length) {
						throw new Error("Insufficient number of arguments to string.format");
					}
	
					if ("%f" === toks[i]) {
						var num = args[j] - 0;
	
						if (isNaN(num)) {
							throw new Error("Invalid argument to string.format");
						}
	
						result += num;
					} else if ("%s" === toks[i]) {
						result += args[j].toString();
					} else if ("%b" === toks[i]) {
						if (args[j] === false || args[j] === null) {
							result += "false";
						} else {
							result += "true";
						}
					}
	
					j++;
				} else {
					result += toks[i];
				}
			}
	
			return result;
		} else {
			throw new Error("Invalid first argument to string.format");
		}
	}, */
	/** This API verifies if the input string contains only ASCII alphabet characters and returns a boolean value. */
	isAsciiAlpha: function (s) {
	
		if (arguments.length === 0) {
			throw new Error("string.isAsciiAlpha needs atleast 1 argument");
		}
	
		if (typeof(s) !== "string") {
			throw new Error("Invalid argument(s) to string.isAsciiAlpha");
		}
	
		var regexp = new RegExp("[^a-zA-Z]","g");
	    return (s == "") ? false : !(regexp.test(s));	
	},
	/** This API verifies if the input string contains only ASCII alphabet characters and numbers, and returns a boolean value.*/
	isAsciiAlphaNumeric: function (str) {
	
		if (arguments.length === 0) {
			throw new Error("string.isAsciiAlphaNumeric needs atleast 1 argument");
		}
		var p1 = /[^a-zA-Z0-9]/i;	// Elimimate non alpha numeric chars //Added cap letters also 
		var p2 = /^[a-zA-Z0-9]*$/i; /* Wrong regex   /([a-z]+[0-9])|([0-9]+[a-z])/i; */
		var r1 = str.match(p1);
		var r2 = str.match(p2);	
		return (!r1 && r2 && str) ? true : false;	
	},
	
	/** This API verifies if the input string contains only numeric characters, and returns a boolean value.*/
	isNumeric: function (s) {
		if (arguments.length === 0) {
			throw new Error("string.isNumeric needs atleast 1 argument");
		}
	
		/*if (typeof(args[0]) !== "string") {
			throw new Error("Invalid argument(s) to string.isNumeric");
		}*/
	
	    return (s == "" || (typeof(s) == "string" && s.replace(/\s/g,'').length == 0)) ? false : !(isNaN(s));
	},
	/** This API verifies if any one of the specified set of characters is available in the given string and returns a boolean value.*/
	containsChars: function (s, a) {
		if (arguments.length === 0) {
			throw new Error("string.containsChars needs 2 arguments");
		}
	
		if (typeof(s) !== "string") {
			throw new Error("Invalid argument(s) to string.containsChars");
		}
	
		if (a instanceof Array === false) {
			throw new Error("Invalid argument to table.containsChars");
		}
	
		var charset = [];
		var charstr = "";
		var chararray = a;
		var len = chararray.length;
		var result = false;
	
		for(var i=0; i<len; i++) {
			charset[i] = chararray[i];
			if(s == "" || charset[i] == "") return true;
		}
	
		charstr = charset.join("");
		charstr = "[" + kony.string.escapeRegExp(charstr) + "]";
	
		var regexp = new RegExp(charstr,"g");
		result = regexp.test(s);
	
		return result;
	},
	/** This API verifies if only (and only) the specified set of characters is available in the given string and returns a boolean value.*/
	containsOnlyGivenChars: function (s, a) {
		if (arguments.length === 0) {
			throw new Error("string.containsOnlyGivenChars needs atleast 1 argument");
		}
	
		if (typeof(s) !== "string") {
			throw new Error("Invalid argument(s) to string.containsOnlyGivenChars");
		}
	
		var charset = [];
		var charstr = "";
		var chararray = a;
		var len = chararray.length;
		var result = false;
	
		for(var i=0; i<len; i++) {
			charset[i] = chararray[i];
		}
	
		charstr = charset.join("");
		//charstr = charstr.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		charstr = "[^" + kony.string.escapeRegExp(charstr) + "]";
	
		var regexp = new RegExp(charstr,"g");
		result = regexp.test(s);
	
		if(result === false) {
			return true;
		} else {
			return false;
		}	
	},
	/** This API verifies that the input string does not contain any of the specified characters and returns a boolean value.*/
	containsNoGivenChars: function (s, a) {
		if (arguments.length === 0) {
			throw new Error("string.containsNoGivenChars needs 2 arguments");
		}
	
		if (typeof(s) !== "string") {
			throw new Error("Invalid argument(s) to string.containsNoGivenChars");
		}
	
		if (a instanceof Array === false) {
			throw new Error("Invalid argument to table.containsNoGivenChars");
		}
	
		var charset = [];
		var charstr = "";
		var chararray = a;
		var len = chararray.length;
		var result = false;
	
		for(var i=0; i<len; i++) {
			charset[i] = chararray[i];
			if(charset[i] == "") return false;
		}
	
		charstr = charset.join("");
		charstr = "[" + kony.string.escapeRegExp(charstr) + "]";
	
		var regexp = new RegExp(charstr,"g");
		result = regexp.test(s);
	
		if(result === false) {
			return true;
		} else {
			return false;
		}	
	},
	/** This API verifies if the input string is a valid email address and returns a boolean value.*/
	isValidEmail: function (s) {
		if (arguments.length === 0)
			throw new Error("string.isValidEmail needs atleast 1 argument");
	
		var value = s;
		if (typeof(value) !== "string")
			return false;
		//(99.9% syntactic accuracy)
		var emailPattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
		if((value.length - value.lastIndexOf('.')) < 3){
			return false;
		}

		return emailPattern.test(value);
	},
	
	escapeRegExp: function (text)
	{
	    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	}
}

/**@Deprecated This library provides generic functions for table manipulation. It provides all its functions inside the table.

Most functions in the Table library assume that the table represents an array or a list. For these functions, when we talk about the "length" of a table we mean the result of the length operator.

Note: This library is also available in JavaScript under the namespace kony.table. This is only for maintaining the backward compatibility for the application converted from Lua to JavaScript.*/
kony.table = {
/**@Deprecated This API extracts all the elements of a table and concatenates the elements to form a string. A separator can be specified which can be placed between concatenated elements.*/
	concat: function(inputtable, separator, startposition, endposition) {
	
	    var isArgsError = false;
	    var isInternalError = false;
	    var result = null;
	    
	    if (!arguments[0] instanceof Object) 
	        isArgsError = true;
	    if (!isArgsError) {
	        var len = arguments[0].length;
	        var begin = 0, end = len, sep = "";//4901
	        var numArgs = arguments.length > 4 ? 4 : (arguments.length - 1);
	        switch (arguments.length) {
	            case 4:
	                arguments[3] -= 0;
	                if (isNaN(arguments[3])) {
	                    isArgsError = true;
	                }
	                end = arguments[3];
	            case 3:
	                arguments[2] -= 0;
	                if (isNaN(arguments[2]) || arguments[2] < 0) {
	                    isArgsError = true;
	                }
	                begin = arguments[2];
	            case 2:
	                sep = arguments[1];
	            default:
	                break;
	        }
	        
	        if (len == 0) 
	            return kony.table.returnResult("", isArgsError, isInternalError);
	        
	        if (isArgsError) 
	            return kony.table.returnResult(result, isArgsError, isInternalError);
	        
	        if (begin > end) {
	            //isArgsError = true; // return empty string -- lua std
				return kony.table.returnResult("", isArgsError, isInternalError);
	        }
	        else 
	            if (end > len) {
	                isArgsError = true;
	            }
	            else 
	                if (!isArgsError) {
	                    result = "";
	                    try {
	                        for (var i = begin; i < end; i++) {
								if(arguments[0][i] == null || arguments[0][i] instanceof Object) 
									return kony.table.returnResult(null, true, isInternalError);   
	                            result += arguments[0][i].toString() + sep;
	                        }
	                        result += arguments[0][i].toString();
     
	                    } 
	                    catch (e) {
	                        isInternalError = true;
	                    }
	                }
	    }
	    return kony.table.returnResult(result, isArgsError, isInternalError);
	},
	
	/*maxn: function(args) {
	    if (0 === arguments.length) {
	        throw new Error("table.maxn needs atleast one argument");
	    }
	    
	    if (args[0] instanceof LuaTable === false) {
	        throw new Error("Invalid argument to table.maxn");
	    }
	    
	    var maxIndex = args[0].arrayContainer.length - 1;
	    for (var obj in args[0].hashContainer) {
	        var key = args[0].hashContainer[obj].key;
	        if (args[0].hashContainer[obj].value !== null &&
	        typeof(key) === "number" &&
	        maxIndex < key) {
	            maxIndex = key;
	        }
	    }	    
	    return maxIndex;
	},*/
	/**@Deprecated This API inserts a specified value into the given table in the list part. If a position is specified, the value is inserted before the element currently at that position. If no position is specified, the value is appended to the end of the table. If the specified position is not within the range of the list part of the table, the new element is added to the hash part of the table.*/
	insert: function(inputtable, position, value) {
	
	    var isArgsError = false;
	    var isInternalError = false;
	    var result = null;	
	    
	    if (arguments.length < 2 || !(arguments[0] instanceof Object)) {
	        isArgsError = true;
	    }
	    
	    if (!isArgsError) {
	    
	        var pos, newItem;
	       // var arr = arguments[0];	
	        if (arguments.length > 2) {  
			    pos = arguments[1];      
	            if (typeof pos == "string" || isNaN(pos)) {                
	                return kony.table.returnResult(true, isInternalError);            
				}            
	            newItem = arguments[2];
	        }
	        else {
	            pos = arguments[0].length;
	            newItem = arguments[1];
				/*if(args[1] == null) // don't insert nil at the end of table -- lua std 
					return kony.table.returnResult(args[0], isArgsError, isInternalError);*/
	        }
	        
	        try {      
					if (typeof pos == "string" || pos >= arguments[0].length || pos <= 0) {
						if (pos == 0) {	
							//DEF 3809
							arguments[0].splice(pos,0,newItem);						
							//arguments[0][pos] = newItem;
						}
						else {
							arguments[0][pos] = newItem;
						}
	                }
	                else{
	                 /*   var pre = arguments[0].slice(0, pos);
	                    var post = arguments[0].slice(pos);
	                    pre.push(newItem);
	                    arguments[0] = pre.concat(post);*/
						arguments[0].splice(pos,0,newItem);
	                }		
					//arguments[0] = arr;		
	        } 
	        catch (e) {
	            isInternalError = true;
	        }
	    }
	    return kony.table.returnResult(isArgsError, isInternalError);
	},
		/**@Deprecated This API removes an element from the list part of the table. If a position is specified, the element at the position is removed. If no position is specified, the last element in the table is removed. The removed element is returned. This API operates only on the list part of the table.*/
	remove: function(inputtable, position) {
	
	    var isArgsError = false;
	    var result = null;
	    
	    if (0 === arguments.length || !(arguments[0] instanceof Array)) {
	        isArgsError = true;
	    }
	    
		if (!isArgsError) {
			var pos = arguments[0].length - 1 ;
			if (pos >= 0) {
				if (arguments.length > 1 && arguments[1] != null) {
					arguments[1] -= 0;
					if (isNaN(arguments[1]) || arguments[1] > pos || arguments[1] < 0) {
						isArgsError = true;
						return kony.table.returnResult(result, isArgsError, false);
					}
	
					if (arguments[1] < pos && arguments[1] >= 0) {
						pos = arguments[1]   //-1;//5.0 Decremented
					}
				}
				result = arguments[0].splice(pos, 1);
				result = result[0] ;
				/*for(var i=pos;i > 0;i--){
					result = args[0].arrayContainer.splice(i, 1);
					if(result[0] == null && i == args[0].length()+1)
						continue;
					else
						break;				
				}*/
			}
			else
	    		  return kony.table.returnResult(null, isArgsError, false);
		}
	    return kony.table.returnResult(result, isArgsError, false);
	},
	
/**@Deprecated This API sorts the elements of the input table and returns the modified table. This API sorts only the list part of the table and the hash part of the table is ignored.*/
	sort: function(inputtable, sortkey, comparisonfunction) {
	
	    var isArgsError = false;
	    var isInternalError = false;
	    var result = null;
	    var comparator = null;
		
	    
	   if (0 === arguments.length || !(arguments[0] instanceof Array)) {
	        isArgsError = true;
	    }
	    
	    if (typeof(arguments[1]) == "function") {
			comparator = arguments[1];
		}
		else 
			if (typeof(arguments[2]) == "function") {
				comparator = arguments[2];
			}
	    
	    if (!isArgsError) {
	    	var len = arguments[0].length;
			var pre = arguments[0];

			if(arguments[0].length < 2){
				//Can't do aything. Need more than one element to sort
				return kony.table.returnResult(inputtable,false,false);
			}
			
	        try {        
	            for (var i = 0; i < len; i++) { //5.0 Decremented i
	                var elemType = typeof(arguments[0][1]);
	                if (arguments[0][i] == null || typeof(arguments[0][i]) != elemType) {
	                	
	                    return kony.table.returnResult(true, isInternalError);
	                }                
	            }
	            
	           // pre = arguments[0].slice(1);
	            //var zeroth = arguments[0].shift();
				
				//This is to splice the array to the length to which it has to be sorted
				if(arguments[1] !== null && !isNaN(arguments[1]))						
					pre.splice(arguments[1],pre.slice(arguments[1],pre.length).length);
					
	            if (comparator) {
	                pre.sort(function(a, b){
	                    var retVals = comparator(a, b);
	                    
	                    return (retVals ? -1 : 1);
	                });
	            }
	            else 
	                if (typeof arguments[1] == "string") {
	                    comparator = arguments[1];
	                    pre.sort(function(a, b){
	                        if (a[comparator] != null && typeof a[comparator] == typeof b[comparator] && typeof a[comparator] == "string") {
	                                var nameA = a[comparator].toLowerCase(), nameB = b[comparator].toLowerCase()
	                                if (nameA < nameB) //sort string ascending
	                                    return -1
	                                if (nameA > nameB) 
	                                    return 1
	                                return 0 //default return value (no sorting)				
	                            }
	                            else {
	                                return a[comparator] - b[comparator];
	                            }
	                    });
	                }
	                else {	
	                    pre.sort(function(a, b){
	                        if (typeof a == "string") {
	                            var A = a.toLowerCase();
	                            var B = b.toLowerCase();
	                            if (A < B) {
	                                return -1;
	                            }
	                            else 
	                                if (A > B) {
	                                    return 1;
	                                }
	                                else {
	                                    return 0;
	                                }
	                        }
	                        else 
	                            return a - b;
	                        
	                    });
	                    
	                }
	           // pre.unshift(zeroth);
	           // pre = pre.concat(arguments[0]);
	        } 
	        catch (e) {
	            isInternalError = true;
				pre = null;
	        }
	    }
	    if (!isArgsError && !isInternalError)        
	   		 return kony.table.returnResult(pre, isArgsError, isInternalError);
		else 
			return kony.table.returnResult(true, isInternalError);
	},
/**@Deprecated This API filters the given table based on the provided criteria and returns a set of values that match the given criteria.*/
	filter: function(srctable, mapfunc) {
	
	
	    var isArgsError = false;
	    var isInternalError = false;
	    var tgttable;
	    
	    if (arguments.length < 2 || !(srctable instanceof Object)  || !(typeof(mapfunc)  == "function")) {
	        isArgsError = true;
	    }
		
	    if (!isArgsError) {
	        
	        var key, value, retVals;
	        
	        if ((srctable instanceof Array)  && mapfunc) {
				try {
					tgttable = [];
					for (var i = 0; i < srctable.length; i++) {//5.0 Decremented i
						value = srctable[i];
						if (value instanceof Object) {
							/*var innerLen = value.length();
							 var innerValue;
							 var count = 0;
							 for (var k = 0; k < innerLen; k++) {
							 innerValue = value.arrayContainer[k + 1];
							 retVals = executeClosure(mapfunc, [k + 1, innerValue]);
							 if (retVals[0] == true)
							 count++;
							 }
							 if (count == innerLen)
							 tgttable.arrayContainer.push(value);*/
							return kony.table.returnResult(null, true, isInternalError);
						}
						else {
						
							if (value != null) 
								retVals = mapfunc(i, value);
							if (retVals === true) 
								tgttable.push(value);
							retVals = false;
						}
						
					}
				} 
				catch (e) {
					isArgsError = true;
				}
			}
			else 
				if (srctable && mapfunc) {
					tgttable = new Object();
					
					try {
						for (var j in srctable) {
							key = j
							value = srctable[j];
							if (value != null) 
								retVals = mapfunc(j, value);
							if (retVals === true) {
								tgttable[key] = value;
							}
							retVals = false;
						}
					} 
					catch (e) {
						isArgsError = true;
					}
				}
	    }
	    
	    if (isArgsError || isInternalError) 
	        tgttable = null;
	    
	    return kony.table.returnResult(tgttable, isArgsError, isInternalError);
	},
	/**@Deprecated This API performs the given action on the input table and returns the modified table.*/
	map : function(srctable, mapfunc) {
	
	    var isArgsError = false;
	    var isInternalError = false;
		
	    if (arguments.length < 2 || (srctable instanceof Object === false) || !(typeof(mapfunc) == "function")) {
	        isArgsError = true;
	    }
	    
	    if (!isArgsError) {
	    	
			try {
					
				var key, value, retVals;
					
				if (srctable instanceof Array && mapfunc) {
					var len = srctable.length;
					
					for (var i = 0; i < len; i++) {//5.0 Decremented i
						if (srctable[i] instanceof Array || srctable[i] == null) {
							return kony.table.returnResult(true, isInternalError);
						}
					}
					
					try {
						for (var i = 0; i < len; i++) {//5.0 Decremented i
							value = srctable[i];
							retVals = mapfunc(i, value);
							if (retVals !== false) {
								key = retVals[0];
								value = retVals[1];
								srctable[key] = value;
								retVals = false;
							}
							else 
								return kony.table.returnResult(true, isInternalError);
						}
					} 
					catch (e) {
						isArgsError = true;
					}
				} else	
					if (srctable && mapfunc) {
						
						try {
							for (var j in srctable) {
								key = j;
								value = srctable[key];
								retVals = mapfunc(key, value);
								
								if (retVals !== false) {
									key = retVals[0];
									value = retVals[1];
									srctable[key] =  value;
									retVals = false;
								}
								else 
									return kony.table.returnResult(true, isInternalError);
							}
						} 
						catch (e) {
							isArgsError = true;
						}
					}
			}
			catch(e){
				isInternalError = true;
			}
	    }
	    //srctable added for JSPFQA5653
	    return kony.table.returnResult(srctable, isArgsError, isInternalError);
	    
	},
	/**@Deprecated This API performs the given action on the input table and returns a new table.*/	
	mapNew: function(srctable, mapfunc){
	
	    var isArgsError = false;
	    var isInternalError = false;
	    
	    if (arguments.length < 2 || (srctable instanceof Object === false) || !(typeof(mapfunc) == "function")) {
	        isArgsError = true;
	    }
		
		if(srctable == null)
			return kony.table.returnResult(null, isArgsError, isInternalError);
	    
		try {
			
			var tgttable = null;   
			var key, value, retVals;
			
			if (!isArgsError) {
						
				if (srctable instanceof Array && mapfunc) {
					var len = srctable.length;
				
					for (var i = 0; i < len; i++) {//5.0 Decremented i
						if (srctable[i] instanceof Object || srctable[i] == null) {
							return kony.table.returnResult(null, true, isInternalError);
						}
					}
					
					try {
						
						tgttable = []; 
						for (var i = 0; i < len; i++) {//5.0 Decremented i
							value = srctable[i];
							retVals = mapfunc(i, value);
							key = retVals[0];
							value = retVals[1];
							tgttable[key] = value;
						}
					} 
					catch (e) {
						isArgsError = true;
					}
					
				} else
					if (srctable && mapfunc) {
				
						try {
							tgttable = new Object();
							for (var j in srctable) {
								key = j;
								value = srctable[key];
								retVals = mapfunc(key, value);
								
								if (retVals !== false) {
									key = retVals[0];
									value = retVals[1];
									tgttable[key] =  value;
									retVals = false;
								}
								else 
									return kony.table.returnResult(true, isInternalError);
							}
						} 
						catch (e) {
							isArgsError = true;
						}
					}
				}	
		}
	    catch (e) {
			isInternalError = true;
		}
					
	    if (isArgsError || isInternalError) 
	        tgttable = null;
	    return kony.table.returnResult(tgttable, isArgsError, isInternalError);
	    
	},
/**@Deprecated This API searches the given input table and returns the value at the specified key; if the key is a number, this API returns the value at the index.*/	
	get: function(srctable, key) {
	
	    var isArgsError = false;
	    var isInternalError = false;
		var invalidKey = false;
	    var result = null;
	    
		//TODO:Error Check
	    if (arguments.length < 2 || srctable instanceof Object === false || key == null) {
	        isArgsError = true;
	        return kony.table.returnResult(result, isArgsError, isInternalError);
	    }
	
	    try {
	        if (key in srctable) {
	            result = srctable[key];				
	        } else 
			  invalidKey = true;
	    } 
	    catch (e) {
	        isInternalError = true;
	    }
		
	    return kony.table.returnResult(result, isArgsError, isInternalError, invalidKey);
	},
/**@Deprecated Tests if the specified key is part of the table.*/	
	contains: function(srctable, key) {
	
	    var isArgsError = false;
	    var isInternalError = false;
	    var result = false;
	    
	    if (arguments.length < 2 || srctable instanceof Object === false || key == null) {        
	        return kony.table.returnResult(result, true, isInternalError);
	    }
	    
	    try {
			 if (key in srctable) 
            	result = true;				        
	    } 
	    catch (e) {
	        isInternalError = true;
	    }
	    return kony.table.returnResult(result, isArgsError, isInternalError);
	},
/**@Deprecated This API appends the content of the source table to the target table and returns the modified target table.*/	
	append: function(tgttable, srctable) {
	
	    var isArgsError = false;
	    var isInternalError = false;
	    
	    if (arguments.length != 2 || !(tgttable instanceof Object) || !(srctable instanceof Object)) {
	        isArgsError = true;
	        return kony.table.returnResult(null, isArgsError, isInternalError);
	    }
	      
	    try {
	        if (tgttable.length && srctable.length) {
	          ////  var srcarray = srctable.slice(1);   //4906
				for (var i = 0; i < srctable.length; i++) {
					tgttable.push(srctable[i]);
				}
	        } else {
	                    
	            for (var j in srctable) {
	                tgttable[j] = srctable[j];
	            }
	        }
	    } 
	    catch (e) {
	        isInternalError = true;
	    }
	
	    return kony.table.returnResult(tgttable, isArgsError, isInternalError);
	},
	/**@Deprecated This API removes data from the table represented by the table id.*/	
	removeAll: function(srctable) {
	
	    if (arguments.length < 1) {
	        throw new Error("table.removeAll needs atleast 1 argument");
	    }
	    
		//TODO:Proper error function to distinguish between table (object) & other types
	    if (typeof(srctable) != "object") {
	        throw new Error("Invalid  arguments to table.removeAll");
	    }
	    
		if(srctable.length)
	    	srctable.length = 0;
		else {
			for (var key in srctable) {
				delete srctable[key];
			}
		}
	    
	    return;
	},
	
	/**@Deprecated unpack

This API returns the elements from the given table. This function is equivalent to

return list[i], list[i+1], .... list[j].*/	
	unpack: function (t1) {
       
	    if (0 === arguments.length) {
                throw new Error("unpack needs atleast one argument");
        }

        if (t1 instanceof Object === false) {
                throw new Error("Invalid first argument to unpack");
        }

        var numArgs = arguments.length > 3 ? 3 : arguments.length;
        var maxIndex = arguments[0].length;
        var beginIndex = 0 /*5.0 Decremented beginIndex*/, endIndex = maxIndex;
        switch (numArgs) {
                case 3:
                        arguments[2] -= 0;
                        if (isNaN(arguments[2])) {
                                throw new Error("Invalid argument to unpack");
                        }
                        endIndex = arguments[2];
                case 2:
                        arguments[1] -= 0;
                        if (isNaN(arguments[1])) {
                                throw new Error("Invalid argument to unpack");
                        }
                        beginIndex = arguments[1];
                default:
                        break;
        }

        if (beginIndex > endIndex) {
                return [""];
        } else {
                var retVals = "";//[];		//4907		
                for (var i = beginIndex; i < endIndex; i++) {
                        //retVals.push(arguments[0][i]);
                        if(i == 0){
                        	retVals = arguments[0][i];
                        }else{
                        	retVals = retVals + " " + arguments[0][i];
                        }
                }
                return  retVals;
        }
	},

	// local myjson = '{ "name": "Shasank", "id": "417" }'
	// table.parsejson(myjson)
	/*parsejson: function(args){
	
	    if (arguments.length < 1) {
	        throw new Error("table.parsejson needs atleast 1 argument");
	    }
	    
	    var jsObj = args[0].evalJSON();
	    
	    try {
	        var tgttable = kony.utils.json2LuaTable(jsObj);
	    } 
	    catch (e) {
	        throw new Error("table.parsejson - SyntaxError: Badly formed JSON string");
	    }
	    
	    return tgttable;
	},*/

	/*keys: function(args){
	
	    if (arguments.length < 1) {
	        throw new Error("table.keys needs atleast 1 argument");
	    }
	    
	    if (args[0] instanceof LuaTable === false) {
	        throw new Error("Invalid  arguments to table.keys");
	    }
	    
	    var srctable = args[0];
	    
	    if (srctable.hashKeys.length) {
	    
	        var innerlen = srctable.hashKeys.length;
	        var key;
	        var keysarray = [];
	        for (var j = 0; j < innerlen; j++) {
	            key = srctable.hashKeys[j];
	            keysarray.push(key);
	        }
	        
	        return keysarray;
	    }
	},*/

	returnResult: function() {
	
	    var errorNo = null;
	    var errorMsg = null;
		var isArgsError = false;
		var isInternalError = false;
		
		if (arguments.length >= 3) {
			
			var retArray = arguments[0];
			isArgsError = arguments[1];
			isInternalError = arguments[2];
			var invalidKey = arguments[3];		
		}
		else{
			isArgsError = arguments[0];
			isInternalError = arguments[1];
		}
	    if(isArgsError) {
	        errorNo = 100;
	        errorMsg = "INVALID ARGUMENTS";
	    }
	    else if(isInternalError){
	            errorNo = 101;
	            errorMsg = "INTERNAL ERROR";
	    }
	    else if(invalidKey){
	                errorNo = 0;
	                errorMsg = "INVALID KEY";
		}	
		if (arguments.length >= 3) 			
	    	//return ([retArray, errorNo, errorMsg]);
			return retArray;
		else if(arguments.length == 2 && (isArgsError || isInternalError))
			return ([errorNo, errorMsg]);
		else	
			return;	
	}
}

/**@Deprecated This API returns the current time as a string in hh:mm:ss format. The time is represented in 12 hour format.*/
	kony.os.time = function () {
		var timeStr = (new Date()).toTimeString();
	
		return timeStr.slice(0, timeStr.indexOf(" "));
	};
	/**@Deprecated This API returns the number of seconds between the first input parameter (t1) to the second input parameter (t2).*/
	kony.os.diffDateTime = function (time1, time2) {
		
		if (typeof(time1) !== "string" || typeof(time2) !== "string") {
			throw new Error("Invalid argument(s) to os.diffDateTime");
		}
	
		var t1 = time1.split(":");t1[2] = t1[2] - 0;
		var t2 = time2.split(":");t2[2] = t2[2] - 0;
		var one_day = 86400;  
		var t1sec = t1[0] * 3600 + t1[1] * 60 + t1[2];
		var t2sec = t2[0] * 3600 + t2[1] * 60 + t2[2];	
	
		return (t1sec > one_day || t2sec > one_day ) ? null : t1sec - t2sec;
	};
	/**@Deprecated This API formats the current date to the given format.*/
	kony.os.date = function () {
			
		var result;
		var currentDate = new Date();
		    
	    if (0 === arguments.length) {
	        var timeStr = currentDate.toTimeString();
	        result = kony.os.padZero(currentDate.getMonth() + 1) + "/" + kony.os.padZero(currentDate.getDate()) + "/" + kony.os.padZero(currentDate.getFullYear() % 100) + " " + timeStr.slice(0, timeStr.indexOf(" "));
	        return result;
	    }
	    else if (typeof(arguments[0]) == "string") {        
	        
	        if (arguments[0].toLowerCase().indexOf("dd") != -1) {        
			
	            return kony.os.formatdate(arguments[0], currentDate);            
	        }
	         else {
	                var utc = arguments[0].charAt(0) === '!';
	                var index = utc ? 1 : 0;
	                if ('*' === arguments[0].charAt(index) && 't' === arguments[0].charAt(index + 1)) {
	                    var day = utc ? currentDate.getUTCDate() : currentDate.getDate();
	                    var mon = (utc ? currentDate.getUTCMonth() : currentDate.getMonth()) + 1;
	                    var year = utc ? currentDate.getUTCFullYear() : currentDate.getFullYear();
	                    
	                    result = new Object();
	                    result["year"] =  year;
	                    result["month"] = mon;
	                    result["day"] = day;
	                    result["hour"]  = utc ? currentDate.getUTCHours() : currentDate.getHours();
	                    result["min"] = utc ? currentDate.getUTCMinutes() : currentDate.getMinutes();
	                    result["sec"] = utc ? currentDate.getUTCSeconds() : currentDate.getSeconds();
	                    result["wday"] = utc ? currentDate.getUTCDay() : currentDate.getDay() + 1;
	                    result["yday"] = kony.os.getDayOfYear(day, mon, year);
	                    result["isdst"] = utc ? false : kony.os.checkForDst();
	                    return result;
	           	}
	           else 
	                    return null;
	            }
	      } else 
	          return null;
	};
/**This API allows you to convert the given number to represent currency. At present, only USA currency is supported.*/
	kony.os.toCurrency = function (arg) {
		
		arg -= 0;
		if (isNaN(arg)) {
			throw new Error("Invalid argument to os.toCurrency");
		}
	
		if (arg < 0) arg *= -1;
		var str = arg.toFixed(3);
		str = str.substr(0,str.length-1); 
		var outStr = "";
		for (var i = 0; i < str.length - 4; i++) {
			outStr += str.charAt(i);
			if ((str.length - i - 1) % 3 === 0) outStr += ",";
		}
	
		for (; i < str.length; i++) {
			outStr += str.charAt(i);
		}
	
		return "$" + outStr;
	};
	/**This API converts the argument to a number. If the argument is already a number or a string convertible to a number, then the API returns this number; otherwise, it returns null for JavaScript and nil for Lua.*/
	kony.os.toNumber = function (arg) {
		
		if (arguments.length != 1) {
			throw new Error("Invalid argument to os.toNumber");
		}
		
		if (typeof(arg) === "number") {
			return arg;
		} else if (typeof(arg) === "string") {	
			
			var str = arg.replace(/^\s*/, '').replace(/\s*$/, '');
			if (str === '') {
				return null;
			} else {
				var num = str - 0;
				return (isNaN(num) ? null : num);
			}
		
		} else {
			return null;
		}
	};
	/**@Deprecated This API returns the difference in dates or compares two dates for equality.*/
	//os.compareDates(date1,date2,"format") - dd,mm,yyyy,yy 
	kony.os.compareDates = function (d1, d2, frmt){
		
		if(d1 == null || d2 == null || frmt == null || !kony.os.isvaliddate(d1,frmt) || !kony.os.isvaliddate(d2,frmt))
			return null 
			
		var date1 = kony.os.getDate(d1, frmt);
		var date2 = kony.os.getDate(d2, frmt);
		var oneday = 24*60*60*1000;
		
		return parseInt((date1.getTime() - date2.getTime())/oneday);	
	};
/**@Deprecated This API adds or subtracts units (days, hours, minutes, month, or years) to the given date.*/
	//os.addToDate(date1,format,units,count) - units : days,hours,minutes,month,years
	// Format"dd/mm/yyyy" or "mm/dd/yyyy" or mm/dd/yy
	kony.os.addToDate = function (d1, frmt, unt, cnt){
		
		if (d1 == null || frmt == null || unt == null || cnt == null) {
			return null;
		}
		var inputDate = d1;
		var fmt = frmt;
		var unit = unt;
		var count = cnt;   
		var dateParts = inputDate.split("/");
		
		if(!kony.os.isvaliddate(inputDate,fmt))
			return null;
		
		var dateObj = kony.os.getDate(inputDate, fmt);
			
		if (dateObj) {
	        switch (unit) {
	            case "years":
	                dateObj.setFullYear(dateObj.getFullYear() + count);
	                break;
	            case "months":
	                dateObj.setMonth(dateObj.getMonth() + count);
	                break;
	            case "days":
	                dateObj.setDate(dateObj.getDate() + count);
	                break;
	            case "hours":
	                dateObj.setHours(dateObj.getHours() + count);
	                break;
	            case "minutes":
	                dateObj.setMinutes(dateObj.getMinutes() + count);
	                break;
	            default:
	                break;
	        }
			if(kony.os.isLeapYear([d1,fmt]) && dateObj.getMonth() >= 1 && (unit == "years" || (unit == "months" && (count == -12 || count == 12))) )
					dateObj.setDate(dateObj.getDate() - 1);
			
			return kony.os.formatdate(fmt,dateObj);
			
		}		
		return null;
	};
	/**@Deprecated This API checks if the input year is a leap year.*/
	//os.isLeapYear(yyyy) 
	kony.os.isLeapYear = function (d1, frmt) {
		var year;
		var date = new Date();  //Take the current year;
		year = date.getFullYear();
		    
	    if (typeof(d1) == "string" && typeof(frmt) == "string") {
			
			if(!kony.os.isvaliddate(d1, frmt))
				return false;
				        
	        var yearPart = d1.split("/")[2];
	        year = (yearPart.length == 2) ? parseInt(date.getFullYear().toString().substr(0, 2) + yearPart) : parseInt(yearPart);
	    }
		
		if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
	 		return true;  		
	 	} 
		else {
	  		return false;
	 	} 		 
	};
/**@Deprecated This API converts a given date string to the target format and returns the formatted date. Format will use the tokens dd,mm,yyyy to indicate day, month, and year respectively. The delimiter used between the tokens can be any character. For example, dd/mm/yyyy and (dd)(mm)(yyyy) are valid inputs.*/
	//os.formatdate(inputdate[string],sourceformat[string],targetformat[string])
	kony.os.formatDate = function (d1, sfrmt, tgtfrmt) {
		
		var year;
		if(d1 == null || sfrmt == null || tgtfrmt == null) {
			return null;
		}
		else if(typeof(d1) === "string" && typeof(sfrmt) === "string" && typeof(tgtfrmt) === "string") {
			
	        var inputDate = d1
	        var srcfmt = sfrmt;
	        var targetfmt = tgtfrmt;
	        
	        var datePos = srcfmt.indexOf("dd");
	        var monthPos = srcfmt.indexOf("mm");
	        var yearPos = (srcfmt.indexOf("yyyy") != -1) ? srcfmt.indexOf("yyyy") : srcfmt.indexOf("yy");
	        
	        if ((srcfmt == "dd/mm/yyyy" && !kony.os.isvaliddate(inputDate, srcfmt)) || datePos == -1 || monthPos == -1 || yearPos == -1 || srcfmt.indexOf("ddd") != -1 || srcfmt.indexOf("mmm") != -1) {
	            return null;
	        }
	        
	        var dateStrSep = srcfmt.charAt(datePos - 1);
	        var dateEndSep = srcfmt.charAt(datePos + 2);
	        dateEndSep = (dateEndSep == "(") ? "" : dateEndSep;
	        
	        var monthStrSep = srcfmt.charAt(monthPos - 1);
	        var monthEndSep = srcfmt.charAt(monthPos + 2);
	        
	        var yearStrSep = srcfmt.charAt(yearPos - 1);
	        var yearEndSep = srcfmt.charAt(yearPos + 4);
	        
	        var startDateIndex = (dateStrSep == "") ? inputDate.indexOf(dateStrSep, datePos - 1) : inputDate.indexOf(dateStrSep, datePos - 2) + 1;
	        var startMonthIndex = (monthStrSep == "") ? inputDate.indexOf(monthStrSep, monthPos - 1) : inputDate.indexOf(monthStrSep, monthPos - 2) + 1;
	        var startYearIndex = (yearStrSep == "") ? inputDate.indexOf(yearStrSep, yearPos - 1) : ((inputDate.indexOf(yearStrSep, yearPos - 2) != -1) ? inputDate.indexOf(yearStrSep, yearPos - 2) + 1 : inputDate.indexOf(yearStrSep, yearPos - 4) + 1);
	        
	        var endDateIndex = (dateEndSep != "") ? inputDate.indexOf(dateEndSep, datePos) : inputDate.indexOf(dateEndSep, datePos + 2);
	        var endMonthIndex = (monthEndSep != "") ? inputDate.indexOf(monthEndSep, monthPos) : inputDate.indexOf(monthEndSep, monthPos + 2);
	        var endYearIndex = (yearEndSep != "") ? inputDate.indexOf(yearEndSep, yearPos) : inputDate.indexOf(yearEndSep, yearPos + 4);
	        
	        var dateVal = inputDate.substring(startDateIndex, endDateIndex);
	        var monthVal = inputDate.substring(startMonthIndex, endMonthIndex);
	        var yearVal = inputDate.substring(startYearIndex, endYearIndex);
	        
	        if ((yearVal.length == 2 && targetfmt.indexOf("yyyy") != -1)) 
	            var fullyr = new Date().getFullYear().toString().substr(0, 2) + yearVal;
	        
	        targetfmt = targetfmt.replace(/dd/, kony.os.padZero(parseInt(dateVal,10)));
	        targetfmt = targetfmt.replace(/mm/, kony.os.padZero(parseInt(monthVal,10)));
	        targetfmt = targetfmt.replace(/(yyyy|yy)/, fullyr ? fullyr : ((targetfmt.indexOf("yyyy") == -1 && yearVal.length == 4) ? yearVal.substr(2, 2) : yearVal));
	        
	        return targetfmt;	
		}	
		return null;
	};
/**@Deprecated This API returns the various date components of a specified date (in a specified format) or the current system date.*/
	//os.isvaliddate(date,format) 
	kony.os.isValidDate = function (date, frmt) {		
		return (arguments.length != 2 || date == null || frmt == null) ? false :kony.os.isvaliddate(date, frmt);		
	};
/**@Deprecated This API returns the various date components of a specified date (in a specified format) or the current system date.*/
	//os.dateComponents(date, format);
	//Formats supported:  (dd/mm/yyyy , mm/dd/yyyy, dd/mm/yy , mm/dd/yy) 
	kony.os.dateComponents = function (date,frmt){
		
	    var result;
		var dateObject;
		if (arguments.length == 0) {
			dateObject = new Date();
		}
		else if (date != null && frmt != null) {
				if(!kony.os.isvaliddate(date,frmt))
					return null;			 
				dateObject = kony.os.getDate(date, frmt);
				var yearfmt = frmt.split("/")[2];
			}
		if (dateObject) {	
			
			var day = dateObject.getDate();
			var mon = dateObject.getMonth() + 1;
			var year = (yearfmt && yearfmt.length == 2) ? parseInt(dateObject.getFullYear().toString().substr(2,2)) : dateObject.getFullYear();		
			
			result = new Object();		
			result["year"] = year;
			result["month"] = mon;
			result["day"] = day;
			result["hour"] = dateObject.getHours();
			result["min"] = dateObject.getMinutes();
			result["sec"] = dateObject.getSeconds();
			result["wday"] = dateObject.getDay() + 1;
			result["yday"] = kony.os.getDayOfYear(day, mon, year);
			result["isdst"] = kony.os.checkForDst();
			return result;
		} 
		else
			return null;
		
	};
	
	kony.os.padZero = function (num) {
	    return num < 10 ? ("0"+num) : num;
	};
/**@Deprecated This API converts a given date string to the target format and returns the formatted date. Format will use the tokens dd,mm,yyyy to indicate day, month, and year respectively. The delimiter used between the tokens can be any character. For example, dd/mm/yyyy and (dd)(mm)(yyyy) are valid inputs.*/	
	kony.os.formatdate = function (fmt, dateObj) {
		fmt = fmt.toLowerCase();
	    fmt = fmt.replace(/dd/, kony.os.padZero(dateObj.getDate()));
	    fmt = fmt.replace(/mm/, kony.os.padZero(dateObj.getMonth() + 1));
	    return fmt.replace(/(yyyy|yy)/, fmt.indexOf("yyyy") == -1 ? dateObj.getFullYear().toString().substr(2, 2) : dateObj.getFullYear());
	};
/**@Deprecated This API returns the various date components of a specified date (in a specified format) or the current system date.*/
	 //Valid formats mm/dd/yy and mm/dd/yyyy and dd/mm/yyyy		
    kony.os.isvaliddate = function(dtStr, format){
        var minYear = 1900;
        var maxYear = 2100;
        var dtCh = "/";
        var daysInMonth = kony.os.daysArray(12);

        var pos1 = dtStr.indexOf(dtCh)
        var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
        var dateFormat = format || "dd/mm/yyyy";
        
        if (dateFormat == "dd/mm/yyyy" || dateFormat == "dd/mm/yy") {
            var strDay = dtStr.substring(0, pos1)
            var strMonth = dtStr.substring(pos1 + 1, pos2)
        }
        else 
            if (dateFormat == "mm/dd/yy" || dateFormat == "mm/dd/yyyy") {
                var strDay = dtStr.substring(pos1 + 1, pos2);
                var strMonth = dtStr.substring(0, pos1);
            }
            else 
                return false;
        
        var strYear = dtStr.substring(pos2 + 1);
        /*if(strYear.length == 2 && dateFormat.indexOf("yyyy") != -1)				
         return false;*/
        var today = new Date();
        
        strYr = strYear
        if (strDay.charAt(0) == "0" && strDay.length > 1) 
            strDay = strDay.substring(1)
        if (strMonth.charAt(0) == "0" && strMonth.length > 1) 
            strMonth = strMonth.substring(1)
        if (strYr.length == 2) {
            strYr = (today.getFullYear() + "").substr(0, 2) + strYr;
        }
        for (var i = 1; i <= 3; i++) {
            if (strYr.charAt(0) == "0" && strYr.length > 1) 
                strYr = strYr.substring(1)
        }
        month = parseInt(strMonth)
        day = parseInt(strDay)
        year = parseInt(strYr)
        
        if (!kony.os.isInteger(strMonth) || !kony.os.isInteger(strDay) || !kony.os.isInteger(strYear) || strMonth.length < 1 || month < 1 || month > 12 || strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > kony.os.daysInFebruary(year)) || day > daysInMonth[month] || strYr.length != 4 || year == 0 || year < minYear || year > maxYear) {
            //alert("invalid date");
            return false
        }
        return true
    };
	
    kony.os.daysArray = function(n){
        for (var i = 1; i <= n; i++) {
            this[i] = 31
            if (i == 4 || i == 6 || i == 9 || i == 11) {
                this[i] = 30
            }
            if (i == 2) {
                this[i] = 29
            }
        }
        return this
    };
	
    kony.os.daysInFebruary = function(year){
        // February has 29 days in any year evenly divisible by four,
        // EXCEPT for centurial years which are not also divisible by 400.
        return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
    };
	
    kony.os.isInteger = function(s){
        var i;
        for (i = 0; i < s.length; i++) {
            // Check that current character is number.
            var c = s.charAt(i);
            if (((c < "0") || (c > "9"))) 
                return false;
        }
        // All characters are numbers.
        return true;
    };
    
    kony.os.getDate = function(date, format){
        var dateObj;
        if (typeof date === "string" && typeof format === "string") {
            var dateParts = date.split("/");
            var yr = new Date().getFullYear().toString().substr(0, 2);
            if (format.indexOf("yyyy") == -1 || dateParts[2].length == 2) 
                dateParts[2] = yr + dateParts[2];
            
            if (format == "mm/dd/yyyy" || format == "mm/dd/yy") 
                dateObj = new Date(dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2]);
            else 
                dateObj = new Date(dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2]);
            
            return dateObj;
        }
    };
    
    kony.os.getDayOfYear = function(day, month, year){
        var i, j;
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        if (0 === year % 4) {
            days[1]++;
        }
        
        for (i = 1, j = 0; i < month; j += days[i - 1], i++) 
            ;
        
        return j + day;
    };

    kony.os.checkForDst = function(){

        var rightNow = new Date();
        var jan1 = new Date(rightNow.getFullYear(), 0, 1, 0, 0, 0, 0);
        var temp = jan1.toGMTString();
        var jan2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
        var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);

        var june1 = new Date(rightNow.getFullYear(), 6, 1, 0, 0, 0, 0);
        temp = june1.toGMTString();
        var june2 = new Date(temp.substring(0, temp.lastIndexOf(" ") - 1));
        var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);
        var dst;
        if (std_time_offset == daylight_time_offset) {
            //dst = "0"; // daylight savings time is NOT observed
            return false;
        }
        else {
            //dst = "1"; // daylight savings time is observed
            return true;
        }
    };
	

	
	
function getKonyMBAASAppKey() {
    return '${mbaasappkey}';
}

function getKonyMBAASAppSecret() {
    return '${mbaasappsecret}';
}
/*
 RequireJS 2.1.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1==c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,
k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,
k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);
if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback&&q(a,"error",u(this,this.errback))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,
nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,
a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=
!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==
e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&s(a).enable()},completeLoad:function(a){var b,
c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,
e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror",
"Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,
Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};
g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.14";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=
    b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};b.completeLoad(c);};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=
O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===b.readyState)return N=b}),e=N;e&&(b||
(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);
//startup.js file
var appConfig = {
    appId: "KonyPaintCode",
    appName: "KonyPaintCode",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.9",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    url: "http://192.168.0.9:80/middleware/MWServlet",
    secureurl: "https://192.168.0.9:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    GoalFormGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            GoalForm.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
