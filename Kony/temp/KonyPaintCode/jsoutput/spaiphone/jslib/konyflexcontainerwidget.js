/*
 * Widget : FlexContainer
 */ 
$KW.FlexContainer =
{	
	initialize: function(){
    	kony.events.addEvent("click", "FlexContainer", this.eventHandler);
    	kony.events.addEvent("onorientationchange", "FlexContainer", this.orientationHandler);
    },
	
	initializeView: function(formId){		
        //this.adjustFlexContainers(formId, "FlexContainer");
        this.attachResizeEvent(formId, "FlexContainer");
	},

    orientationHandler: function(formId, orientation){
		//$KW.FlexContainer.adjustFlexContainers(formId);
    },
	
	/**
     * Updates the view of the FlexContainer widget.
     */
    updateView : function(widgetModel, propertyName, propertyValue, oldPropertyValue){		
       var element = $KU.getNodeByModel(widgetModel);
		if(!element)
			return;
		
		switch (propertyName){ 	
			case "clipbounds":
				var isFlexWidget = $KU.isFlexWidget(widgetModel);
				element = isFlexWidget ? element.parentNode.parentNode : element;
				if(propertyValue == false)
					element.style.overflow = "visible";
				else{
					element.style.overflow = "hidden";
					element.style.boxShadow = "none";
				}
				break;			
		}
    },

	render: function(flexModel, context){
		return this.renderTableLayout(flexModel, context);
    },
	
	renderTableLayout: function(flexModel, context){
		var computedSkin = $KW.skins.getWidgetSkinList(flexModel, context);
		var isFlexWidget = $KU.isFlexWidget(flexModel);
		var overflow = isFlexWidget ? "" : (flexModel.clipbounds == true ? "overflow:hidden;" : "");
		var boxstyle = " position:relative;" + overflow + (flexModel.zindex ? "z-index:" + flexModel.zindex : "");		
		var style = (flexModel.parent && flexModel.parent.wType == 'TabPane') ? '' : $KW.skins.getBaseStyle(flexModel, context);
		
		var htmlString = "";
		htmlString += "<div id='flexcontainer_wrapper' class='" + computedSkin + "' style='width:100%; " + style + "'>";
        htmlString += "<div class = 'kwt100'" + $KW.Utils.getBaseHtml(flexModel, context) + " style='" + boxstyle + "'>";
        
		var wArrary = flexModel.widgets();
        if(wArrary.length > 0){
			htmlString += this.renderChildren(flexModel, wArrary, context);			
		}
		
        htmlString += "</div></div>";
        return htmlString;
	},	
	
	renderChildren: function(flexModel, wArrary, context){
		var htmlString = "";
		for (var i = 0; i < wArrary.length; i++) {
			var childModel = wArrary[i];
			var css ="kcell " + (childModel.wType == "TPW"? "konycustomcss " : "") + (childModel.isvisible ? "" : "hide ");
			var style = $KW.Utils.getFlexLayoutStyle(childModel);
			var overflow = "";
			if(childModel.wType == 'FlexContainer' && !childModel.clipbounds) {
				overflow = ';overflow:visible';
			}
			else {
				overflow = ';overflow:hidden';
				overflow += (childModel.wType == 'FlexContainer' && childModel.clipbounds) ? ";-"+vendor+"-box-shadow:none" : "";
				css +=  childModel.skin;
			}
			htmlString += "<div class = '" + css + "' style='" + style + overflow + ((childModel.wType == 'TextArea' || childModel.wType == 'Switch' || childModel.wType == 'Image') ? 'font-size:0px' : '') + "'>";
			if (childModel.wType == "HBox" || childModel.wType == "VBox") {
				context.topLevelBox = true;				
			}
			htmlString += $KW[childModel.wType].render(childModel, context);
			htmlString += "</div>";
		}
		return htmlString;
	},
	
	adjustFlexContainers: function(containerModel, containerNode){
		if(containerModel.wType == 'Segment'){
			$KW.Segment.adjustFlexContainersInSegment(containerModel, containerNode);
		}
	},	
	
	adjustFlexContainer: function(flexModel, flexNode){
		if(!flexNode){
			if(flexModel.wType == 'Form' || flexModel.wType == 'Popup')
				flexNode = document.getElementById(flexModel.id + "_scroller") || document.getElementById(flexModel.id);
			else	
				flexNode = flexNode || $KW.Utils.getWidgetNode(flexModel);
		}
		if(!flexNode)
			return;	
		var widgets = flexModel.widgets();
		if(widgets.length > 0){
			//Sumanth - 44998 : Added condition for segement object to not compute autogrow height details again, as they are already done by this time.
			if(flexModel.wType == 'FlexContainer' && flexModel.autogrowHeight && ((!flexModel.parent) || (flexModel.parent && !flexModel.parent.autogrowHeight)))
				$KW.FlexLayoutEngine.performAutogrowFlexLayout(flexModel, flexNode, widgets);
			else	
				$KW.FlexLayoutEngine.performFlexLayout(flexModel.layouttype, flexModel, flexNode, widgets);
		}	
	},
	
	forceLayout: function(flexModel, flexNode){
		if(flexModel.wType == 'Form' || flexModel.wType == 'Popup')
			flexNode = document.getElementById(flexModel.id + "_scroller") || document.getElementById(flexModel.id);
		else	
			flexNode = flexNode || $KW.Utils.getWidgetNode(flexModel);
			
		if(flexNode && flexModel.isvisible){
			var containerId = (flexModel.wType == 'FlexContainer') ? flexNode.childNodes[0].getAttribute("kcontainerID") : flexNode.getAttribute("kcontainerID");
			containerId && $KW.Utils.updateContainerDataInDOM(flexNode, containerId);
			
            if((flexModel.parent && !$KU.isFlexWidget(flexModel) && flexModel.wType != 'Form') || (flexModel.wType == 'FlexContainer' && !flexModel.parent)){
				$KW.Utils.setFlexContainerStyle(flexModel, flexNode);
				flexModel.frame = $KW.Utils.getWidgetFrame(flexModel, flexNode);
				flexModel.dolayout && flexModel.dolayout.call(flexModel, flexModel);	
			}
			if(flexModel.wType == 'Form'){
				flexModel.frame = $KW.Utils.getWidgetFrame(flexModel, flexNode);
			}	
			this.adjustFlexContainer(flexModel, flexNode);
		}
	},	
	
    eventHandler: function(eventObject, target) {
        var widgetModel = $KU.getModelByNode(target), containerId = target.getAttribute("kcontainerID");
        widgetModel.blockeduiskin && $KW.Utils.applyBlockUISkin(widgetModel);
        
        //If the widget is a segment child, update segment data i.e focusedindex and focuseditem 
        if (containerId) {
            $KW.Utils.updateContainerData(widgetModel, target, true);
        } 
		else {
            kony.events.executeBoxEvent(widgetModel);
        }
    },
	
	attachResizeEvent: function(formId, type){
        var flexContainers = document.querySelectorAll("#" + formId + " div[kwidgettype='" + type + "']");
		for (var i = 0; i < flexContainers.length; i++) {
			var flexModel = $KU.getModelByNode(flexContainers[i]);
			var flexNode = flexContainers[i];			
			flexModel.onDrag && new $KW.touch.Drag(flexModel, flexNode, flexNode, '', this.dragEvent, flexNode);
			var children = flexModel.children;	
			for(var j=0; children && j < children.length; j++){
				var wModel = flexModel[children[j]];
				this.attachDragEvent(wModel);
			}
		}
	},
	
	attachDragEvent: function(wModel){
		if(wModel.onDrag){
			var node = $KU.getNodeByModel(wModel);
			node = node.parentNode;
			new $KW.touch.Drag(wModel, node, node, '', this.dragEvent, node);
		}
	},
	
	dragEvent: function(dragNode, x, y, type){	
		dragNode = dragNode.getAttribute("kwidgettype") ? dragNode : dragNode.childNodes[0];
		var flexModel = $KU.getModelByNode(dragNode);	
		flexModel.onDrag && flexModel.onDrag(flexModel, x, y, type);
    }
}