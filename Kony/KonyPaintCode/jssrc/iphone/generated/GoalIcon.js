//Form JS File
function GoalIcon_GoalIcon_preshow_seq0(eventobject) {
    var goalIconBig = StyleKitFFI.drawGoal(161, 208, 18, 9, 0);
    var goalIconSmall = StyleKitFFI.drawGoal(53, 68, 10, 4, 0);
    GoalIcon.goalBig.base64 = goalIconBig;
    GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_button45_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIconBig = StyleKitFFI.drawGoal(161, 208, 18, 9, 0.45);
    var goalIconSmall = StyleKitFFI.drawGoal(53, 68, 10, 4, 0.45);
    GoalIcon.goalBig.base64 = goalIconBig;
    GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_button100_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIconBig = StyleKitFFI.drawGoal(161, 208, 18, 9, 1);
    var goalIconSmall = StyleKitFFI.drawGoal(53, 68, 10, 4, 1);
    GoalIcon.goalBig.base64 = goalIconBig;
    GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_button0_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIconBig = StyleKitFFI.drawGoal(161, 208, 18, 9, 0);
    var goalIconSmall = StyleKitFFI.drawGoal(53, 68, 10, 4, 0);
    GoalIcon.goalBig.base64 = goalIconBig;
    GoalIcon.goalSmall.base64 = goalIconSmall;
};

function addWidgetsGoalIcon() {
    var goalBig = new kony.ui.Image2({
        "id": "goalBig",
        "top": "35dp",
        "left": "49dp",
        "width": "161dp",
        "height": "208dp",
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
        "containerWeight": 47
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var goalSmall = new kony.ui.Image2({
        "id": "goalSmall",
        "top": "35dp",
        "left": "227dp",
        "width": "53dp",
        "height": "68dp",
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
        "containerWeight": 15
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button45 = new kony.ui.Button({
        "id": "button45",
        "top": "308dp",
        "left": "20dp",
        "width": "60dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "45%",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onTouchEnd": GoalIcon_button45_onTouchEnd_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button100 = new kony.ui.Button({
        "id": "button100",
        "top": "358dp",
        "left": "20dp",
        "width": "60dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "100%",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onTouchEnd": GoalIcon_button100_onTouchEnd_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button0 = new kony.ui.Button({
        "id": "button0",
        "top": "258dp",
        "left": "20dp",
        "width": "60dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "0%",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onTouchEnd": GoalIcon_button0_onTouchEnd_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    GoalIcon.add(goalBig, goalSmall, button45, button100, button0);
    GoalIcon.setDefaultUnit(kony.flex.DP);
};

function GoalIconGlobals() {
    var MenuId = [];
    GoalIcon = new kony.ui.Form2({
        "id": "GoalIcon",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": GoalIcon_GoalIcon_preshow_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsGoalIcon
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none",
            "transitionDuration": 0.3
        }
    });
};