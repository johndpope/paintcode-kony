/**
  * Manages flex container layout
  */

$KW.FlexLayoutEngine = {

	/**
	* Performs layout for a given container.
	* @param : flexLayoutType
	* @param : container - Container for which layout has to perform.
	* @param : subwidgets - List op subwidgets in given container.
	*/
	performFlexLayout : function(layoutType, container, flexNode, widgets){
		switch (layoutType) 
		{
			case kony.flex.FLOW_HORIZONTAL:
				this.performHorizontalLayout(container, flexNode, widgets);
				break;
				
			case kony.flex.FLOW_VERTICAL:
				this.performVerticalLayout(container, flexNode, widgets);
				break;						
			
			default: //kony.flex.FREE_FORM
				this.performFreeFlowLayout(container, flexNode, widgets);
				break;	
		}
	},
	
	/* canMeasureChildrenHeight flag is set to false when any children layout properties are set in %.
	 * When canMeasureChildrenHeight flag is false, flexConatiner gets its preferred height.
	 * autogrowHeight flag is set to true when flexConatiner height can't be computed either thru explicit value or implicit 
	 * caluculation
	 */	
	performAutogrowFlexLayout: function(container, flexNode, widgets){
		var flexHeight = this.getAutoGrowFlexHeight(container, flexNode, widgets);
		if(container.canMeasureChildrenHeight){
			var wrapperNode = $KU.isFlexWidget(container) ? flexNode.parentNode : flexNode;
			wrapperNode.style.height = $KW.Utils.getComputedPreferredHeight(container, flexNode, flexHeight) + 'px';
			container.frame = $KW.Utils.getWidgetFrame(container, wrapperNode);
			container.layoutConfig.children = true;
			$KW.FlexLayoutEngine.performFlexLayout(container.layouttype, container, flexNode, widgets);	
		}	
	},
	
	getAutoGrowFlexHeight: function(flexModel, flexNode, widgets){
		var layoutType = flexModel.layouttype;
		var parentFrame = flexModel.frame;	
		var wModel, wNode;
		var flexHeight = 0;	
		flexModel.canMeasureChildrenHeight = true;
		widgets = widgets || flexModel.widgets();
		
		for(var i=0; i < widgets.length; i++){		
			wModel = widgets[i];
			if(!this.isVisible(wModel, flexNode))
				continue;
				
			wNode = $KW.Utils.getWidgetNode(wModel, flexNode);	
			if(!wNode)
				continue;
			
			this.computeLayoutValues(wModel, flexNode, parentFrame);
			//When any of the following props (centerY, top, bottom, height, minheight & maxHeight) for child widgets are set in %, autogrow flexcontainer gets its default height.
			if(!flexModel.canMeasureChildrenHeight){ 
				var wrapperNode = $KU.isFlexWidget(flexModel) ? flexNode.parentNode : flexNode;
				wrapperNode.style.height = $KW.Utils.getComputedPreferredHeight(flexModel, flexNode) + 'px';
				flexModel.frame = $KW.Utils.getWidgetFrame(flexModel, wrapperNode);
				flexModel.layoutConfig.children = true;
				$KW.FlexLayoutEngine.performFlexLayout(layoutType, flexModel, flexNode, widgets);
				return flexModel.frame.height;
			}
			
			var layoutModel = wModel.layoutModel;
			var wrapperNode = wNode.parentNode;
			
			//Setting width
			$KW.Utils.getWidth(wModel, layoutModel, wrapperNode, flexNode);
			
			var centerY = layoutModel.centerY;
			var top = layoutModel.top;
			var bottom = layoutModel.bottom;
			var height = layoutModel.height;
			var widgetHeight = 0;
			var cph, implicitHeight;
			
			if(centerY){
				if(height){
					widgetHeight = centerY.value + (height.value/2);
				}
				else{
					if(top && layoutType == kony.flex.FREE_FORM){
						implicitHeight = (centerY.value - top.value) * 2;
						widgetHeight = implicitHeight + top.value;
					}
					else{
						cph = $KW.Utils.getChildHeight(wModel, wNode);
						widgetHeight = centerY.value + (cph/2);
					}	
				}
			}
			else if(top){
				if(height){
					widgetHeight = top.value + height.value;
				}
				else{
					cph = $KW.Utils.getChildHeight(wModel, wNode);
					widgetHeight = top.value + cph;
				}
			}
			else{
				if(height){
					widgetHeight = height.value;
				}
				else{
					cph = $KW.Utils.getChildHeight(wModel, wNode);
					widgetHeight = cph;
				}
			}
			
			if(bottom){
				widgetHeight += bottom.value;
			}
			
			wrapperNode.style.height = (height ? height.value : (implicitHeight != undefined ? implicitHeight : cph)) + 'px';
			wrapperNode.style.maxWidth = wrapperNode.style.maxHeight = '';
			var dimensions = $KW.Utils.getWidgetDimensions(wModel, wrapperNode);
			wModel.finalFrame = {};
			
			if(layoutType != kony.flex.FREE_FORM){
				var prevModel, prevSibling, prevFrame;
				var prevWidgetInfo = this.getPreviousNode(wModel, wrapperNode, flexNode)
				if(prevWidgetInfo){
					prevModel = prevWidgetInfo[0];
					prevSibling = prevWidgetInfo[1];
				}
				prevFrame = prevSibling && prevModel.frame;	
			}
			
			if(layoutType == kony.flex.FREE_FORM || layoutType == kony.flex.FLOW_VERTICAL)
				this.determineX(wModel, dimensions, flexNode, parentFrame);
			else	
				this.determineHorizontalFlowX(wModel, dimensions, prevModel, prevFrame);	
			
			if(layoutType == kony.flex.FREE_FORM || layoutType == kony.flex.FLOW_HORIZONTAL)	
				this.determineY(wModel, dimensions, flexNode, parentFrame);
			else		
				this.determineVerticalFlowY(wModel, dimensions, prevModel, prevFrame);
			
			$KW.Utils.setWidgetPosition(wModel, wModel.finalFrame, wrapperNode);
			wModel.frame = this.getWidgetFrame(wModel, dimensions, wModel.finalFrame);
			wModel.dolayout && wModel.dolayout.call(wModel, wModel);
			
			if(layoutType == kony.flex.FLOW_VERTICAL){
				flexHeight += widgetHeight;
			}
			else{ //Free or Horizontal
				if(flexHeight < widgetHeight)
					flexHeight = widgetHeight;
			}				
		}
		return flexHeight;
	},
	/**
	*	Sets CenterX, CenterY, left, right, top &  bottom with respect to flex container		
	*/
	performFreeFlowLayout: function(container, flexNode, widgets){
		
		var parentFrame = container.frame;
		var wModel, wNode, dimensions;
		
		for(var i=0; i < widgets.length; i++){		
		
			wModel = widgets[i];
			if(!this.canLayoutUI(container, wModel, flexNode))
				continue;
				
			wNode = $KW.Utils.getWidgetNode(wModel, flexNode);
			
			if(!wNode)
				continue;
				
			wNode = wNode.parentNode;
			wModel.finalFrame = {};
			
			this.computeLayoutValues(wModel, flexNode, parentFrame);			
			this.determineSize(flexNode, wModel, wNode);
			
			dimensions = $KW.Utils.getWidgetDimensions(wModel, wNode);
			
			this.determineX(wModel, dimensions, flexNode, parentFrame);
			this.determineY(wModel, dimensions, flexNode, parentFrame);

			$KW.Utils.setWidgetPosition(wModel, wModel.finalFrame, wNode);	
			$KW.Utils.saveWidgetFrame(wModel);
			wModel.frame = this.getWidgetFrame(wModel, dimensions, wModel.finalFrame);
			this.onWidgetLayout(wModel, wNode);
		}
		this.onFlexContainerLayout(container);	
	},	
	
	performHorizontalLayout: function(container, flexNode, widgets){
		
		var parentFrame = container.frame;	
		var wModel, wNode, dimensions, prevFrame;
		
		for(var i=0; i < widgets.length; i++){	
		
			wModel = widgets[i];	
			if(!this.canLayoutUI(container, wModel, flexNode))
				continue;
				
			wNode = $KW.Utils.getWidgetNode(wModel, flexNode);
			
			if(!wNode)
				continue;
			
			wNode = wNode.parentNode
			wModel.finalFrame = {};
			
			this.computeLayoutValues(wModel, flexNode, parentFrame);
			
			var prevModel, prevSibling;
			var prevWidgetInfo = this.getPreviousNode(wModel, wNode, flexNode)
			if(prevWidgetInfo){
				prevModel = prevWidgetInfo[0];
				prevSibling = prevWidgetInfo[1];
			}
			prevFrame = prevSibling && prevModel.frame;	
			
			this.determineSize(flexNode, wModel, wNode);
			dimensions = $KW.Utils.getWidgetDimensions(wModel, wNode);
			
			this.determineHorizontalFlowX(wModel, dimensions, prevModel, prevFrame);			
			this.determineY(wModel, dimensions, flexNode, parentFrame);
	
			$KW.Utils.setWidgetPosition(wModel, wModel.finalFrame, wNode);	
			$KW.Utils.saveWidgetFrame(wModel);			
			wModel.frame = this.getWidgetFrame(wModel, dimensions, wModel.finalFrame);
			this.onWidgetLayout(wModel, wNode);			
		}
		this.onFlexContainerLayout(container);	
	},
	
	performVerticalLayout: function(container, flexNode, widgets){
	
		var parentFrame = container.frame;	
		var wModel, wNode, dimensions, prevFrame;
		
		for(var i=0; i < widgets.length; i++){	
		
			wModel = widgets[i];
			if(!this.canLayoutUI(container, wModel, flexNode))
				continue;			
				
			wNode = $KW.Utils.getWidgetNode(wModel, flexNode);
			
			if(!wNode)
				continue;
				
			wNode = wNode.parentNode
			wModel.finalFrame = {};
			
			this.computeLayoutValues(wModel, flexNode, parentFrame);
			
			var prevModel, prevSibling;
			var prevWidgetInfo = this.getPreviousNode(wModel, wNode, flexNode)
			if(prevWidgetInfo){
				prevModel = prevWidgetInfo[0];
				prevSibling = prevWidgetInfo[1];
			}
			prevFrame = prevSibling && prevModel.frame;	
			
			this.determineSize(flexNode, wModel, wNode);
			dimensions = $KW.Utils.getWidgetDimensions(wModel, wNode);
			this.determineX(wModel, dimensions, flexNode, parentFrame);
			this.determineVerticalFlowY(wModel, dimensions, prevModel, prevFrame);	
		
			$KW.Utils.setWidgetPosition(wModel, wModel.finalFrame, wNode);	
			$KW.Utils.saveWidgetFrame(wModel);
			wModel.frame = this.getWidgetFrame(wModel, dimensions, wModel.finalFrame);
			this.onWidgetLayout(wModel, wNode);			
		}
		this.onFlexContainerLayout(container);		
	},
	
	onFlexContainerLayout: function(flexModel){
		flexModel.layoutConfig.children = false;
	},
	
	onWidgetLayout: function(wModel, wNode){
		wModel.dolayout && wModel.dolayout.call(wModel, wModel);
		this.compareFrames(wModel);
		this.layoutNestedConatiners(wModel, wNode);
		wModel.layoutConfig.self = false;
	},
	
	compareFrames: function(wModel){
		if(wModel.wType == 'FlexContainer' || wModel.wType == 'FlexScrollContainer'){
			var oldFrame = wModel.oldFrame;
			var frame = wModel.frame;
			if(oldFrame.width != frame.width || oldFrame.height != frame.height)
				wModel.layoutConfig.children = true;
		}
	},
	
	layoutNestedConatiners: function(wModel, wNode){
		if(wModel.wType == 'FlexContainer' || wModel.wType == 'FlexScrollContainer')
			$KW.FlexContainer.forceLayout(wModel, wNode ? wNode.childNodes[0] : null);		
		if(wModel.wType == 'Segment'){
			var segNode = $KU.getNodeByModel(wModel);
			if(segNode){
				if(wModel.layoutConfig.self){
					$KU.needOptimization = false;
					$KW.FlexContainer.adjustFlexContainers(wModel, segNode);
					if(wModel.viewtype == constants.SEGUI_VIEW_TYPE_PAGEVIEW)
						$KW.touch.computeWidths(segNode, wModel);	
					$KU.needOptimization = true;
				}		
				if(wModel.layoutModel && !wModel.needScroller){
					var wNode = $KW.Utils.getWidgetNode(wModel);
					var cph = $KW.Utils.getComputedPreferredHeight(wModel, wNode);
					wNode.parentNode.style.height = cph + 'px';	
					wModel.frame.height = cph;
				}
			}		
		}
		if(wModel.wType == 'DataGrid'){
			var wNode = $KU.getNodeByModel(wModel);
			if(wModel.layoutConfig.self){
				$KU.needOptimization = false;
				$KW.FlexContainer.adjustFlexContainers(wModel, wNode);
				$KU.needOptimization = true;
			}	
		}
		if(wModel.wType == 'TabPane'){
			var wNode = $KU.getNodeByModel(wModel);
			if(wModel.layoutConfig.self)
				$KU.needOptimization = false;
			$KW.FlexContainer.adjustFlexContainers(wModel, wNode);
			$KU.needOptimization = true;
			$KW.Form.initializeFlexContainersInBox(wModel);
		}
	},
	
	/**
	*	Sets width, minWidth, maxWidth, height, minHeight, maxHeight
	* 	Implicit width and height calculations need to be done in free form only
	*/
	determineSize: function(flexNode, wModel, wNode, updateUI){
	
		//Setting padding of widget with respect to container
		var parent = wModel.parent;
		//For autogrow containers padding is set at the time of prefferd height computation itself. So no need to call set padding again.
		if(typeof updateUI == "undefined" && !parent.autogrowHeight)
			$KW.Utils.setPaddingByParent(wModel, wNode.childNodes[0]);
		
		var layoutModel = wModel.layoutModel;
        var wStyle = $KW.Utils.getWidth(wModel, layoutModel, wNode, flexNode, updateUI);
        var hStyle = $KW.Utils.getHeight(wModel, layoutModel, wNode, flexNode, updateUI);

		wNode.style.maxWidth = wNode.style.maxHeight = '';	
		if(typeof updateUI == "undefined"){
			$KW.Utils.setDimensions(wModel, wNode, flexNode);
		}	
		else{
			var dimensions = wStyle.concat(hStyle);
			for(var i=0; i < dimensions.length ; i++){
				var parts = dimensions[i].split(':');
				wModel.finalFrame[parts[0]] = parts[1];
			}
		}		
	},
	
	/**
	*	gets frame X value with respect to flex container		
	*/
	
	determineX: function(wModel, widgetFrame, flexNode, parentFrame){
		var layoutModel = wModel.layoutModel;
		var finalFrame = wModel.finalFrame;
		var flexContainer = wModel.parent;
		
		if(layoutModel.centerX){
			var centerX = layoutModel.centerX.value;
			var width = widgetFrame.width;
			if(layoutModel.centerX.unit == kony.flex.PERCENTAGE && flexContainer.layouttype == kony.flex.FREE_FORM)
				width = Math.floor((width / parentFrame.width) * 100);
			finalFrame.left = (centerX - (width / 2)) + layoutModel.centerX.unit;
		}					
		else if(layoutModel.left){
			finalFrame.left = layoutModel.left.value + layoutModel.left.unit;
		}
		else if(layoutModel.right){ //Need to set right value as corresponding left value for animation issues (When right is set and animating the left values yields issues)
			var parentWidth = flexNode.clientWidth;
			var value = $KU.getValueByParentFrame(wModel, layoutModel.right, 'x');
			value = parentWidth - parseInt(widgetFrame.width + value, 10);			
			finalFrame.left = value + kony.flex.PX;			
		}		
	},
	
	/**
	*	gets frame X value with respect to previous sibling		
	*/
	determineHorizontalFlowX: function(wModel, widgetFrame, prevModel, prevFrame){
		var layoutModel = wModel.layoutModel;
		var finalFrame = wModel.finalFrame;
		prevFrame = prevFrame || {x: 0, y: 0, width: 0, height: 0};
		var left = prevFrame.x + prevFrame.width;
		
		if(layoutModel.centerX){
			left += layoutModel.centerX.value - (widgetFrame.width / 2);
		}					
		else if(layoutModel.left){
			left += layoutModel.left.value;
		}
		
		if(prevModel && prevModel.layoutModel && prevModel.layoutModel.right){
			left += prevModel.layoutModel.right.value;
		}
		
		finalFrame.left = parseInt(left, 10) + kony.flex.PX;
	},
	
	/**
	*	gets frame Y value with respect to flex container		
	*/	
	determineY: function(wModel, widgetFrame, flexNode, parentFrame){
		var layoutModel = wModel.layoutModel;
		var finalFrame = wModel.finalFrame;
		var flexContainer = wModel.parent;
		
		if(layoutModel.centerY){
			var centerY = layoutModel.centerY.value;
			var height = widgetFrame.height;			
			if(layoutModel.centerY.unit == kony.flex.PERCENTAGE && flexContainer.layouttype == kony.flex.FREE_FORM)
				height = Math.floor((height / parentFrame.height) * 100);
			
			finalFrame.top = (centerY - (height / 2)) + layoutModel.centerY.unit;
		}					
		else if(layoutModel.top){
			finalFrame.top = layoutModel.top.value + layoutModel.top.unit;
		}
		else if(layoutModel.bottom){
			var parentHeight = flexNode.clientHeight;
			var value = $KU.getValueByParentFrame(wModel, layoutModel.bottom, 'y');
			value = parentHeight - parseInt(widgetFrame.height + value, 10);			
			finalFrame.top = value + kony.flex.PX;	
		}
	},
	
	/**
	*	gets frame Y value with respect to previous sibling		
	*/
	determineVerticalFlowY: function(wModel, widgetFrame, prevModel, prevFrame){
		var layoutModel = wModel.layoutModel;
		var finalFrame = wModel.finalFrame;
		prevFrame = prevFrame || {x: 0, y: 0, width: 0, height: 0};
		var top = prevFrame.y + prevFrame.height;
		
		if(layoutModel.centerY){
			top += layoutModel.centerY.value - (widgetFrame.height / 2);
		}					
		else if(layoutModel.top){
			top += layoutModel.top.value;
		}
		
		if(prevModel && prevModel.layoutModel && prevModel.layoutModel.bottom){
			top += prevModel.layoutModel.bottom.value;
		}
		finalFrame.top = top + kony.flex.PX;
	},
	
	/*	Need to set actual unit in case of free flow layout for animations
	 *
	 */	
	getComputedValue: function(wModel, parentFrame, value, axis){
		if(!$KU.isValidCSSLength(value))
			return null;
		var resultObj = $KU.getValueAndUnit(wModel, value);
		var value = resultObj.value;
		var unit = resultObj.unit;
		var parentModel = wModel.parent;
		if(parentModel.wType == 'FlexContainer' && parentModel.autogrowHeight && unit == kony.flex.PERCENTAGE && axis == 'y'){
			parentModel.autogrowHeight = false;
			parentModel.canMeasureChildrenHeight = false;
		}
		
		if(parentModel.layouttype != kony.flex.FREE_FORM && unit == kony.flex.PERCENTAGE){
			if(axis == 'x')
				value = (value * parentFrame.width) / 100;	
			else if(axis == 'y')
				value = (value * parentFrame.height) / 100;
			unit = kony.flex.PX;		
		}			
		return {value: value, unit: unit};
	},
	
	computeLayoutValues: function(wModel, flexNode, parentFrame, frameObj){
		var model = wModel.layoutModel = {};
		var dataModel = frameObj || wModel;
		var centerX, centerY, left, right, top, bottom, width, minWidth, maxWidth, height, minHeight, maxHeight;
		var widgetData = {};
		if(flexNode.dataObj){
			var dataObj = flexNode.dataObj;
			var rowData = dataObj.data;
			var map = dataObj.map;
			var data = rowData[map[wModel.id]];
			if(data && data instanceof Object)
				widgetData = data;
		}
		
		centerX = this.isAvailable(widgetData.centerX) ? widgetData.centerX : dataModel.centerX;
		centerY = this.isAvailable(widgetData.centerY) ? widgetData.centerY : dataModel.centerY;
		left = this.isAvailable(widgetData.left) ? widgetData.left : dataModel.left;
		right = this.isAvailable(widgetData.right) ? widgetData.right : dataModel.right;
		top = this.isAvailable(widgetData.top) ? widgetData.top : dataModel.top;
		bottom = this.isAvailable(widgetData.bottom) ? widgetData.bottom : dataModel.bottom;
		width = this.isAvailable(widgetData.width) ? widgetData.width : dataModel.width;
		minWidth = this.isAvailable(widgetData.minWidth) ? widgetData.minWidth : dataModel.minWidth;
		maxWidth = this.isAvailable(widgetData.maxWidth) ?  widgetData.maxWidth : dataModel.maxWidth;
		height = this.isAvailable(widgetData.height) ? widgetData.height : dataModel.height;
		minHeight = this.isAvailable(widgetData.minHeight) ? widgetData.minHeight : dataModel.minHeight;
		maxHeight = this.isAvailable(widgetData.maxHeight) ?  widgetData.maxHeight : dataModel.maxHeight;
		
		model.centerX = this.getComputedValue(wModel, parentFrame, centerX, 'x');
		model.centerY = this.getComputedValue(wModel, parentFrame, centerY, 'y');		
		model.left = this.getComputedValue(wModel, parentFrame, left, 'x');
		model.right = this.getComputedValue(wModel, parentFrame, right, 'x');
		model.top = this.getComputedValue(wModel, parentFrame, top, 'y');
		model.bottom = this.getComputedValue(wModel, parentFrame, bottom, 'y');		
		
		model.width = this.getComputedValue(wModel, parentFrame, width, 'x');
		model.minWidth = this.getComputedValue(wModel, parentFrame, minWidth, 'x');
		model.maxWidth = this.getComputedValue(wModel, parentFrame, maxWidth, 'x');

		model.height = this.getComputedValue(wModel, parentFrame, height, 'y');
	    model.minHeight = this.getComputedValue(wModel, parentFrame, minHeight, 'y');
		model.maxHeight = this.getComputedValue(wModel, parentFrame, maxHeight, 'y');			
	},
	
	computeKeyFrameValues: function(wModel, frameObj){
		var framesArray = []; 
		var result = {};
		if(frameObj){
			wModel.finalFrame = {};
			
			var wNode = $KW.Utils.getWidgetNode(wModel);
			wNode = wNode.parentNode;
			var parentModel = wModel.parent;
			var flexNode = $KW.Utils.getWidgetNode(parentModel);
			var parentFrame = parentModel.frame;
			
			this.computeLayoutValues(wModel, flexNode, parentFrame, frameObj);
			this.determineSize(flexNode, wModel, wNode, false);
			
			var widgetFrame = $KW.Utils.getWidgetFrame(wModel, wNode, false);
			var layoutModel = wModel.layoutModel;
			
			//When width and centerX are defined in step, respect this width in calculting centerX.  
			if(wModel.finalFrame.width && (layoutModel.centerX || layoutModel.right)){
				var width = wModel.finalFrame.width;
				var valueObj = {value: parseFloat(width), unit: $KU.getUnit(width)};
				widgetFrame.width = $KU.getValueByParentFrame(wModel, valueObj, 'x');
			}
			
			if(wModel.finalFrame.height && (layoutModel.centerY || layoutModel.bottom)){
				var height = wModel.finalFrame.height;
				var valueObj = {value: parseFloat(height), unit: $KU.getUnit(height)};
				widgetFrame.height = $KU.getValueByParentFrame(wModel, valueObj, 'y');
			}	
			
			var widgetIndex = $KW.Utils.getWidgetIndex(wModel);
			var widgets = parentModel.widgets();
			var prevModel, prevSibling;
			var prevWidgetInfo = this.getPreviousNode(wModel, wNode, flexNode)
			if(prevWidgetInfo){
				prevModel = prevWidgetInfo[0];
				prevSibling = prevWidgetInfo[1];
			}
			var	prevFrame = prevSibling && $KW.Utils.getWidgetFrame(prevModel, prevSibling);
			
			if(parentModel.layouttype == kony.flex.FLOW_HORIZONTAL){	
				this.determineHorizontalFlowX(wModel, widgetFrame, prevModel, prevFrame);
			}	
			else
				this.determineX(wModel, widgetFrame, flexNode, parentFrame);
			
			if(parentModel.layouttype == kony.flex.FLOW_VERTICAL){
				this.determineVerticalFlowY(wModel, widgetFrame, prevModel, prevFrame);	
			}	
			else
				this.determineY(wModel, widgetFrame, flexNode, parentFrame);
			
			if(!wModel.finalFrame.left)
				wModel.finalFrame.left = '0px';
			
			if(!wModel.finalFrame.top)
				wModel.finalFrame.top = '0px';	
			
			for(var prop in wModel.finalFrame)
				result[prop] = wModel.finalFrame[prop];
				
			framesArray.push(result);	
			
			//Get previous widget frames information
			if(parentModel.layouttype == kony.flex.FLOW_HORIZONTAL){
				if(result.left || result.width || result["min-width"] || result["max-width"]){
					for(var i = widgetIndex + 1; i<widgets.length; i++){
						var nextWidget = widgets[i];
						var prevWidget = widgets[i - 1];
						var frame = nextWidget.frame;
						if(nextWidget.isvisible && frame){
							var prevFrame = {};
							var width;
							
							prevFrame.x = result.left ? parseInt(result.left, 10) : prevWidget.frame.x;
							
							if(result.width){
								width = parseInt(result.width, 10);
							}
							else if(result["min-width"]){
								width = parseInt(result["min-width"], 10);
								if(width < prevWidget.frame.width){
									width = prevWidget.frame.width;
									result["min-width"] = prevWidget.frame.width + 'px';
								}	
							}
							else if(result["max-width"]){
								width = parseInt(result["max-width"], 10);
								if(width > prevWidget.frame.width){
									width = prevWidget.frame.width;
									result["max-width"] = prevWidget.frame.width + 'px';
								}	
							}
							else 
								width = prevWidget.frame.width;
							
							prevFrame.width = width;
							this.computeLayoutValues(nextWidget, flexNode, parentFrame);
							this.determineHorizontalFlowX(nextWidget, frame, prevWidget, prevFrame);
							result = {left: nextWidget.finalFrame.left};
							framesArray.push(result);
						}	
					}
				}
			}
			
			if(parentModel.layouttype == kony.flex.FLOW_VERTICAL){
				if(result.top || result.height || result["min-height"] || result["max-height"]){
					for(var i = widgetIndex + 1; i<widgets.length; i++){
						var nextWidget = widgets[i];
						var prevWidget = widgets[i - 1];
						var frame = nextWidget.frame;
						if(nextWidget.isvisible && frame){
							var prevFrame = {};
							var height;
							
							prevFrame.y = result.top ? parseInt(result.top, 10) : prevWidget.frame.y;
							
							if(result.height){
									height = parseInt(result.height, 10);
							}
							else if(result["min-height"]){
								height = parseInt(result["min-height"], 10);
								if(height < prevWidget.frame.height){
									height = prevWidget.frame.height;
									result["min-height"] = prevWidget.frame.height + 'px';
								}	
							}
							else if(result["max-height"]){
								height = parseInt(result["max-height"], 10);
								if(height > prevWidget.frame.height){
									height = prevWidget.frame.height;
									result["max-height"] = prevWidget.frame.height + 'px';
								}	
							}
							else 
								height = prevWidget.frame.height;
							
							prevFrame.height = height;
							this.computeLayoutValues(nextWidget, flexNode, parentFrame);
							this.determineVerticalFlowY(nextWidget, frame, prevWidget, prevFrame);
							result = {top: nextWidget.finalFrame.top};
							framesArray.push(result);
						}	
					}
				}
			}
		}
		return framesArray;
	},		

	isAvailable: function(value){
		return value == undefined ? false : true;
	},

	toPointwidget: function(wModel, parentModel, value, axis){
		if(!$KU.isValidCSSLength(value))
			return null;
		var resultObj = $KU.getValueAndUnit(wModel, value);
		var value = resultObj.value;
		var unit = resultObj.unit;
		
		var wNode =  $KW.Utils.getWidgetNode(wModel);
		var elePos = $KW.Utils.getPosition(wNode);
		var parentNode =  $KW.Utils.getWidgetNode(parentModel); 
		var parPos = $KW.Utils.getPosition(parentNode);
		
		if(axis == "x") {
			value = parPos.left - elePos.left + value;		
		}else if(axis == "y") {
			value = parPos.top - elePos.top + value;		
		}
			
		return {value: value, unit: unit};
	},

	/* When previous widget is hidden or data is not set, get the proper previous node to compute previous frame info. 
	 *		
	 */	
	getPreviousNode: function(wModel, wNode, flexNode){
		var widgetIndex = $KW.Utils.getWidgetIndex(wModel);
		if(widgetIndex == 0)
			return null;
		
		var parentModel = wModel.parent;		
		var widgets = parentModel.widgets();
		var prevIndex = widgetIndex - 1;
		var previousNode = wNode.previousSibling;
		if(!previousNode)
			return null;
			
		for(var i = prevIndex; i >= 0; i--){
			var prevModel = widgets[i]; 
			if(!this.isVisible(prevModel, flexNode)){
				if(!flexNode.dataObj)
					previousNode = previousNode.previousSibling;
				continue;
			}
			return [prevModel, previousNode];	
		}	
	},
	
	/* If layout properties are changed after the form is shown, the following rules will be applied to layout the UI for 	
	 * performance issues.
	 * In free form layout, only the effected widget will be layed out.   
	 * In horizontal & vertical layout, the effected widget and its sibilings will be layed out. 
	 */	
	canLayoutUI: function(flexModel, wModel, flexNode){	
		if(!$KU.needOptimization){
			if(!this.isVisible(wModel, flexNode))
				return false;
			return true;
		}	
			
		if($KG.isUILayedOut){
			var widgetConfig = wModel.layoutConfig;
			var containerConfig = flexModel.layoutConfig;
			var layoutType = flexModel.layouttype;
			if(layoutType == kony.flex.FLOW_HORIZONTAL || layoutType == kony.flex.FLOW_VERTICAL){
				if(widgetConfig.self) //Setting this flag to layout its subsequest children
					containerConfig.children = true;	
			}
			
			if(widgetConfig.self || containerConfig.children){
				if(!this.isVisible(wModel, flexNode)){ //Need not layout the widget if the widget is invisibile.
					widgetConfig.self = false;
					return false;
				}	
				return true;
			}	
			else if(wModel.wType == 'FlexContainer' || wModel.wType == 'FlexScrollContainer' || wModel.wType == 'Segment' || wModel.wType == 'TabPane'){ //Calling when the layout properties are updated for widgets of nested container
				this.layoutNestedConatiners(wModel);
				return false;
			}	
			else{
				return false;
			}	
		}
		else if(!this.isVisible(wModel, flexNode))
			return false;
		else if(!$KG.isUILayedOut && wModel.wType == 'Image'){ //During flexcontainers initialization when the form is shown, defer the image layout as the image loading is not complete.
			return false;
		}	
		return true;	
	},

	getWidgetFrame: function(wModel, dimensions, position){
		var left = position.left || '0px';
		var leftObj = {value: parseFloat(left), unit: $KU.getUnit(left)};
		left = $KU.getValueByParentFrame(wModel, leftObj, 'x');
		var top = position.top || '0px';
		var topObj = {value: parseFloat(top), unit: $KU.getUnit(top)};
		top = $KU.getValueByParentFrame(wModel, topObj, 'y');
		return {x: left, y: top, width: dimensions.width, height: dimensions.height};
	},

	isVisible: function(wModel, flexNode){
		if(flexNode && flexNode.dataObj){
			var dataObj = flexNode.dataObj;
			var rowData = dataObj.data;
			var map = dataObj.map;
			var data = rowData[map[wModel.id]];
			//Sumanth: Added else condition to set visible false for widgets having empty data(empty string) in segment.
			if(data && data instanceof Object && typeof data.isVisible != "undefined")
				return data.isVisible;
			else if(typeof data !== "undefined" && data === ""){
				return false;
			}
			if(wModel.wType == 'FlexContainer' && wModel.widgets().length == 0)
				return false;
		}
		return wModel.isvisible;
	}	
}