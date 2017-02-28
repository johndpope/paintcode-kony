//Form JS File
function GoalForm_GoalForm_preshow_seq0(eventobject) {
    var goal = SicrediStyleKitFFI.drawGoal(161, 208, 18, 7, 0.45);
    if (goal) {
        kony.print("oooooiiimmmm");
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