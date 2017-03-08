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

function GoalIcon_button5512889182583_onClick_seq0(eventobject) {
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
    }, {});
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
    }, {});
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
    }, {});
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
    }, {});
    var button5512889182583 = new kony.ui.Button({
        "id": "button5512889182583",
        "top": "0dp",
        "right": "0",
        "width": "100dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Performance",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": GoalIcon_button5512889182583_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    GoalIcon.add(goal, button45, button100, button0, button5512889182583);
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
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsGoalIcon
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};