//Form JS File
function GoalForm_GoalForm_preshow_seq0(eventobject) {
    var goal = SicrediStyleKitFFI.drawGoal(161, 208, 18, 7, 0.45);
    if (goal) {
        kony.print("Goal icon generated!");
        GoalForm.goal.base64 = goal;
    }
};

function addWidgetsGoalForm() {
    var goal = new kony.ui.Image2({
        "id": "goal",
        "width": "161dp",
        "height": "208dp",
        "centerX": "50%",
        "centerY": "50%",
        "zIndex": 1,
        "isVisible": true,
        "src": "macale.jpg",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
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
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsGoalForm
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