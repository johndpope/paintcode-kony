/* 
 * Widget : Label
 */
$KW.Label =
{
	 initialize: function(){             
     	kony.events.addEvent("click", "Label", this.eventHandler);
    },
	
	initializeView: function(formId) {
		$KW.Label.updateLineSpacing(formId);
	},

    updateView : function(widgetModel, propertyName, propertyValue, oldPropertyValue)
    {
        var element = $KU.getNodeByModel(widgetModel);
        if(!element)
            return;

        switch (propertyName) {  
			// FTR 1124 : lineSpacing property for Label Widget. 
			case "linespacing":
				this.updateLineHeight(widgetModel, element); 
				break;		
			case "text":
				if(!$KW.Utils.belongsToSegment(element))
					element.childNodes[0].innerHTML = propertyValue;
				break;		
			case "textCopyable":
				if(propertyValue && !widgetModel.disabled){
					$KU.addClassName(element, "enableSelection");
					$KU.removeClassName(element, "disableSelection");
				}
				else{
					$KU.addClassName(element, "disableSelection");
					$KU.removeClassName(element, "enableSelection");
				}
				break;	
        }
    },
	
	/*
	* FTR 1124 : lineSpacing property for Label Widget
	* Numberic value will be input for lineSpacing and will be applied for label content.
	* Only positive values will be applied including zero. 
	* Negative values will be ignored.
	*/
	updateLineHeight: function(labWidgetModel, element){ 
		var lineSpacingValue = labWidgetModel.linespacing;
		element = element.childNodes[0];// Requires actual label element to update lineHeight property.
		if(lineSpacingValue > 0){
			var fontSize = parseInt($KU.getStyle(element, "font-size"), 10);
			if(fontSize > 0){
				element.style.lineHeight = (fontSize+parseInt(lineSpacingValue, 10))+"px";
			}				
		}else {
			element.style.lineHeight = "";
		}
	},
	
	/*
	* UpdateLineSpacing will be called from intializeView once Label widget is rendered on DOM. 
	* Since we don't have fontSize before rendering the widget.
	* FTR 1124 : lineSpacing property for Label Widget.
	*/ 
	updateLineSpacing: function(formId){
		var	labelNodes = document.querySelectorAll("#" + formId + " div[kwidgettype='Label']");
		for (var i = 0; i < labelNodes.length; i++){
			var labelNode = labelNodes[i]; 
			var labWidgetModel = $KU.getModelByNode(labelNode);
			this.updateLineHeight(labWidgetModel, labelNode); 
		}
	},
	
    render: function(labelModel, context){
		
        var computedSkin = $KW.skins.getWidgetSkinList(labelModel, context);  
		var cAlign = $KW.skins.getContentAlignment(labelModel);	
        var htmlString ="";
         htmlString = "<div" + $KW.Utils.getBaseHtml(labelModel, context)  + "class = '" + computedSkin + "' style='text-align:" + cAlign + ";xoverflow:hidden;" + $KW.skins.getBaseStyle(labelModel, context);

        if(context.ispercent === false) 
            htmlString += "display:inline-block;" + (context.layoutDir ? ("float:" + context.layoutDir) : "");

        htmlString += "'";
			
		var accessAttr = $KU.getAccessibilityValues(labelModel);
		
        htmlString += "><label  " + accessAttr + " style='white-space:pre-wrap;word-wrap:break-word;text-align:" + cAlign + ";'>" + $KU.escapeHTMLSpecialEntities(labelModel.text) + "</label></div>";            
        return htmlString;
    },
	
 
	
	eventHandler: function(eventObject, target) {
        var labWidgetModel = $KU.getModelByNode(target), containerId = target.getAttribute("kcontainerID");
        //If the widget is a segment child, update segment data i.e focusedindex and focuseditem         
        if(containerId) {
            $KW.Utils.updateContainerData(labWidgetModel, target, true);
        } else {
            kony.events.executeBoxEvent(labWidgetModel);
        }
    }
}
