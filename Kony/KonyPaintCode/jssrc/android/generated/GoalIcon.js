//Form JS File
function GoalIcon_GoalIcon_preshow_seq0(eventobject) {
    //var goalIconBig = StyleKitFFI.drawGoal(161,208,18,9,0);
    //var goalIconSmall = StyleKitFFI.drawGoal(53,68,10,4,0);
    //GoalIcon.goalBig.base64 = goalIconBig;
    //GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_GoalIcon_postshow_seq0(eventobject) {};

function GoalIcon_button45_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    var goalIconBig = StyleKitFFI.drawGoal(161, 208, 18, 9, 0.45);
    var goalIconSmall = StyleKitFFI.drawGoal(53, 68, 10, 4, 0.45);
    GoalIcon.goalBig.base64 = goalIconBig;
    GoalIcon.goalSmall.base64 = goalIconSmall;
};

function GoalIcon_button100_onClick_seq0(eventobject) {
    if (kony.store.getItem("doesntExist") != null && typeof kony.store.getItem("doesntExist") != "undefined") {
        kony.print("IT EXISTS HOWWWWW");
    } else {
        kony.print("IT DOESN'T EXISSSTT");
    }
};

function GoalIcon_button100_onTouchEnd_seq0(eventobject, x, y, contextInfo) {
    //var goalIconBig = StyleKitFFI.drawGoal(161,208,18,9,1);
    //var goalIconSmall = StyleKitFFI.drawGoal(53,68,10,4,1);
    //GoalIcon.goalBig.base64 = goalIconBig;
    //GoalIcon.goalSmall.base64 = goalIconSmall;
    if (kony.store.getItem("doesntExist") != null && typeof kony.store.getItem("doesntExist") != "undefined") {
        kony.print("IT EXISTS HOWWWWW");
    } else {
        kony.print("IT DOESN'T EXISSSTT");
    }
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
    }, {});
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
    }, {});
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
    }, {});
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
        "onClick": GoalIcon_button100_onClick_seq0,
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
    }, {});
    GoalIcon.add(goalBig, goalSmall, button45, button100, button0);
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
    GoalIcon.setDefaultUnit(kony.flex.DP);
};