//Form JS File
function GoalIcon_GoalIcon_preshow_seq0(eventobject) {
    //var goalIconBig = StyleKitFFI.drawGoal(161,208,18,9,0);
    //var goalIconSmall = StyleKitFFI.drawGoal(53,68,10,4,0);
    //GoalIcon.goalBig.base64 = goalIconBig;
    //GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_GoalIcon_postshow_seq0(eventobject) {};

function GoalIcon_button45_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIcon = StyleKitFFI.drawGoal(140, 181, 0.45);
    GoalIcon.goal.base64 = goalIcon;
};

function GoalIcon_button100_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIcon = StyleKitFFI.drawGoal(140, 181, 1);
    GoalIcon.goal.base64 = goalIcon;
};

function GoalIcon_button0_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIcon = StyleKitFFI.drawGoal(140, 181, 0);
    GoalIcon.goal.base64 = goalIcon;
};

function GoalIcon_performanceButton_onClick_seq0(eventobject) {
    Performance.show();
};

function addWidgetsGoalIcon() {
    var goal = new kony.ui.Image2({
        "id": "goal",
        "width": "140dp",
        "height": "181dp",
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
        "containerWeight": 41
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var button45 = new kony.ui.Button({
        "id": "button45",
        "bottom": "10.0%",
        "width": "60dp",
        "height": "40dp",
        "centerX": "50%",
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
        "bottom": "10.0%",
        "width": "60dp",
        "height": "40dp",
        "centerX": "70.0%",
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
        "bottom": "10.0%",
        "width": "60dp",
        "height": "40dp",
        "centerX": "30%",
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
    var performanceButton = new kony.ui.Button({
        "id": "performanceButton",
        "top": "0dp",
        "right": "0",
        "width": "120dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Performance",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": GoalIcon_performanceButton_onClick_seq0
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
    GoalIcon.add(goal, button45, button100, button0, performanceButton);
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
        "skin": "WhiteBackground",
        "preShow": GoalIcon_GoalIcon_preshow_seq0,
        "postShow": GoalIcon_GoalIcon_postshow_seq0,
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