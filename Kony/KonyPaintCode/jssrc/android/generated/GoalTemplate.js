//Template File
function initializeGoalTemplate() {
    var goal01 = new kony.ui.Image2({
        "id": "goal01",
        "top": "0dp",
        "left": "0dp",
        "width": "46dp",
        "height": "60dp",
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
        "containerWeight": 0
    }, {});
    var goal02 = new kony.ui.Image2({
        "id": "goal02",
        "top": "0dp",
        "width": "46dp",
        "height": "60dp",
        "centerX": "50%",
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
        "containerWeight": 0
    }, {});
    var goal03 = new kony.ui.Image2({
        "id": "goal03",
        "top": "0dp",
        "right": "0",
        "width": "46dp",
        "height": "60dp",
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
        "containerWeight": 0
    }, {});
    flexGoalContainer = new kony.ui.FlexContainer({
        "id": "flexGoalContainer",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "60dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexGoalContainer.setDefaultUnit(kony.flex.DP)
    flexGoalContainer.add(goal01, goal02, goal03);
};