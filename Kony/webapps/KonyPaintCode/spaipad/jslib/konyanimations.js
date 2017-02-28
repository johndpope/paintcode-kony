/* 
 * konyAnimations.js
 */
$KW.Animator = function(animationDef){
	this.validateKeyFrame(animationDef);
	this.animationDef = animationDef;	
}
	
$KW.Animator.prototype ={

	getNextAnimationValue : function(){	 
		return ($KW.Animator.indexCounter>=0) ? (++$KW.Animator.indexCounter): ($KW.Animator.indexCounter = 0);
	},
	
	getAnimationTime : function () {
	
		return new Date().getTime();
	},

	validateKeyFrame : function(animationDef){
	
		for(var i in animationDef)
		{
			if(i>100)
			{
				throw new KonyError(1000, "AnimationError", "Invalid Animation Definition Exception: Animation Definition can not be greater than 100");
			}		
		
		}		
		if(animationDef["100"]== undefined)
		{
			throw new KonyError(1000, "AnimationError", "Invalid Animation Definition Exception: Animation Definition does not have 100 value");
		}

	},
	
	
	/**
	* @name: getComputedAnimationFrames
	* @param : animationDef - Animation Defination provided by developer.
	* @param : widgetModel - Widget Model for which animation frames need to be calculated.
	* @return  : animationFrames - Frames calculated using Flex Layout Engine.
	*/
	getComputedAnimationFrames : function(widgetModel, node){
		
	
        var stepFrame = {};
        var animationDef = this.animationDef;
        var widgetAnimationDef = {};
		var layoutFrames = {};
		var skinFrames = {};
		widgetModel.originalFrames = {};
		this.flexDepFrames = {};
		var imageFrames = {};
		var flexprops = ["width", "height", "centerX", "centerY", "left", "top","bottom", "left", "right","minWidth", "maxWidth", "minHeight", "maxHeight", "transform", "opacity", "zIndex","anchorPoint"];

		var flexFrame = {};
		var flexComputedFrame = null;	
		
		//collection all widget model properties.
		for(var i = 0; i< flexprops.length; i++) {
			var j = flexprops[i];
			flexFrame[j] = widgetModel[j];			
		}

		//if 0th step is not given in animation def then we are placing with frame proprties.
		if(!animationDef[0]){				
			this.flexDepFrames[0] = $KW.FlexLayoutEngine.computeKeyFrameValues(widgetModel, flexFrame);	
			flexComputedFrame = this.flexDepFrames[0][0];
			
			if(widgetModel.wType == "Image"){				
				var imgNode = node.childNodes[0];	
				var dimensions = {width: flexComputedFrame.width, height: flexComputedFrame.height};
				if(widgetModel.imagescalemode == constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO){
					dimensions = $KU.setImgAspectRatio(widgetModel, imgNode, dimensions, false);
					var margintop = $KU.getImageCenterAlign(imgNode, false, {spanHeight: flexComputedFrame.height , imgHeight: dimensions.height});
					if(margintop > 0){
						stepFrame.margintop = margintop;
					}			
				}	
				else
					dimensions = $KU.setImgDimensions(widgetModel, imgNode, dimensions, false);
				stepFrame.width = dimensions.width;
				stepFrame.height = dimensions.height;
			}			
			
			layoutFrames[0] = flexComputedFrame;
			skinFrames[0] = stepFrame;	
			if(widgetModel.wType == "Slider") {
				imageFrames[0] ={};
				imageFrames[0].left = $KW.Slider.animSlider(layoutFrames[0].width, widgetModel, "left");
				skinFrames[0].width = $KW.Slider.animSlider(layoutFrames[0].width, widgetModel, "width");			
			}			
		}

		var animsteps = [];		
		for(var i in animationDef) {		
			animsteps.push(i);
		}
		animsteps.sort(function(a, b){return a-b});

        for(var i =0; i< animsteps.length; i++)
        {				
			var step = animsteps[i];	
            stepFrame = $KU.cloneObj(animationDef[step]);			
 			for(var j in stepFrame ){
				if(flexprops.contains(j)){
					flexFrame[j] = stepFrame[j];
					delete stepFrame[j];
				}			
			}		
			
			//Invoke flex layout engine and get computed frame per given widget model.
			// flexFrames contains one entry in case of freeform layout. It may contain more entries of subsequent widgets in case horizontal & vertical flow.
			this.flexDepFrames[step] = $KW.FlexLayoutEngine.computeKeyFrameValues(widgetModel, flexFrame);
			flexComputedFrame = this.flexDepFrames[step][0];
			
			//Image widget require layout parameters in both frames
			if(widgetModel.wType == "Image"){
				var imgNode = node.childNodes[0];	
				var dimensions = {width: flexComputedFrame.width, height: flexComputedFrame.height};
				if(widgetModel.imagescalemode == constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO){
					dimensions = $KU.setImgAspectRatio(widgetModel, imgNode, dimensions, false);
					var margintop = $KU.getImageCenterAlign(imgNode, false, {spanHeight: flexComputedFrame.height , imgHeight: dimensions.height});
					if(margintop > 0){
						stepFrame.margintop = margintop;
					}			
				}	
				else
					dimensions = $KU.setImgDimensions(widgetModel, imgNode, dimensions, false);
				stepFrame.width = dimensions.width;
				stepFrame.height = dimensions.height;
			}			
			
			if(flexFrame.transform)
				flexComputedFrame.transform = flexFrame.transform;
			if(typeof(flexFrame.opacity) != "undefined")
				flexComputedFrame.opacity = flexFrame.opacity;			
			if(flexFrame.zIndex)
				flexComputedFrame.zIndex = flexFrame.zIndex;
			if(flexFrame.anchorPoint)
				flexComputedFrame.anchorPoint = flexFrame.anchorPoint;  
				
			if(stepFrame["stepConfig"]){
				stepFrame.timingFunction = flexComputedFrame.timingFunction = stepFrame["stepConfig"].timingFunction;	
				for (var k in this.flexDepFrames[step]) {
					this.flexDepFrames[step][k].timingFunction = stepFrame["stepConfig"].timingFunction;
				}
			}
			
			//in min-height animation both frames need the information.
			if(flexComputedFrame["min-height"] != undefined){
				stepFrame["min-height"] = flexComputedFrame["min-height"];				
			}		
						   
			layoutFrames[step] = flexComputedFrame;
			skinFrames[step] = stepFrame;
			var cloneFrame = owl.deepCopy(flexFrame);
			cloneFrame.backgroundColor = stepFrame.backgroundColor;
			widgetModel.originalFrames[step]= cloneFrame;
			
			if(widgetModel.wType == "Slider") {
				imageFrames[step] ={};
				imageFrames[step].left = $KW.Slider.animSlider(layoutFrames[step].width, widgetModel, "left");
				skinFrames[step].width = $KW.Slider.animSlider(layoutFrames[step].width, widgetModel, "width");			
			}
		
		}
	
		this.cellFrame = layoutFrames;
		this.skinFrame = skinFrames;
		if(widgetModel.wType == "Slider")
			this.imageFrame = imageFrames;	
	},
		
	
    createKeyFrames:function(widgetModel, animationFrames, animationName, frametype) {
	
		var currentStyleSheet = $KG["animStyleSheet"];
		if(currentStyleSheet && animationFrames){
			
			var cssFrame = "";
			for(var i in animationFrames){
				var stepFrame= "", stepAnimation = "";
				var stepObj = animationFrames[i];
				for(var j in stepObj ){			
					if(j=="timingFunction") {
						if(typeof stepObj[j] =="string")	{							
							stepAnimation +=  "-"+vendor+"-animation-timing-function :" +stepObj[j] + ";";
						}	
						else {							
							stepAnimation += "-"+vendor+"-animation-timing-function : cubic-bezier(" +stepObj[j] + ");"; 
						}	
					}
					else if(j =="zIndex") {
						stepFrame +=  "z-index" + ":" + stepObj[j] + ";";
					}                    
					else if (j =="transform") {
						var style = $KW.animUtils.applyTransform(widgetModel, stepObj[j]);
						stepFrame +=  "-"+vendor+"-transform" + ":" + style + ";";				
					}
					else if(j=="anchorPoint") {
						if(stepObj[j]) {
							if((stepObj[j].x >= 0) && (stepObj[j].x <=1) && (stepObj[j].y >= 0) || (stepObj[j].y <=1) )						
							stepFrame +=  "-"+vendor+"-transform-origin" + ":" + ( stepObj[j].x*100) +"% "+ ( stepObj[j].y*100)+"%; ";
						}								
					}
					else if (j == "backgroundColor" || j == "borderColor") {
						var validate = $KW.skins.validateHexValue(stepObj[j]);
						if(validate) {
							var result = $KW.skins.convertHexValuetoRGBA(stepObj[j]);
						}
						if(j == "backgroundColor") {
							if(widgetModel.wType=="ComboBox" ||widgetModel.wType=="ListBox")
								stepFrame +=  "background-color:" + result + ";";
							else
								stepFrame +=  "background:" + result + ";";
						}	
						else if(j == "borderColor")	
							stepFrame +=  "border-color:" + result + ";";
					}
					else if (j=="margintop") {
						stepFrame +=  "margin-top:" + stepObj[j] + "px;";
					}
					else
					{
						stepFrame +=  j + ":" + stepObj[j] + ";";
					}	
				}
				cssFrame += " " + i + "%{" + stepFrame +" " +stepAnimation +  "}" ;				
			} 
			//TODO: need to remove css rules from css file
			if($KG.appbehaviors["captureAniamtionData"]) {
				$KG.animataionData[this.animatorID].data[frametype] = cssFrame;
			}
			currentStyleSheet.insertRule("@-" + vendor + "-keyframes " + animationName +" { "+ cssFrame + "}" , currentStyleSheet.cssRules.length );
		
		}
		else {
				kony.print("kony css style sheet is not found");
		}
    },
	
	
	/**
	* @name: animate
	* @param : widgetModel
	* @param : animationConfig
	* @param : callbackConfig
	*/
	animate: function(widgetModel , animationConfig, callBackConfig){

		if(widgetModel){			
			var node = $KW.Utils.getWidgetNode(widgetModel);
			if(!node){
				return;
			}
			
			this.animatorID = "anim_"  +widgetModel.id + "_" + this.getNextAnimationValue();
			this.animator1ID = this.animatorID  +"_skin";
			if($KG.appbehaviors["captureAniamtionData"]) {
				if(!$KG.animataionData){
					$KG.animataionData = {};
				}			
				$KG.animataionData[this.animatorID] = {};
				var animInfo = $KG.animataionData[this.animatorID];
				animInfo.animationID  = this.animatorID
				animInfo.data = {startFrame: widgetModel.frame};
				animInfo.animationRequestTime = animInfo.animationRequestHandleBeginTime = this.getAnimationTime();
			}
			
			if(widgetModel.wType == 'Image' && !widgetModel.loaded){
				widgetModel.animInfo = {instance: this, animConfig: animationConfig, animCallback: callBackConfig};
				return;
			}			

			if((widgetModel.parent.wType == "FlexContainer" || widgetModel.parent.wType == "FlexScrollContainer"   || ((widgetModel.parent.wType == 'Form' || widgetModel.parent.wType == 'Popup') && widgetModel.parent.layouttype != kony.flex.VBOX_LAYOUT)))
			{		
				this.getComputedAnimationFrames(widgetModel, node);
				var depKeyFrames = this.flexDepFrames;				
				
				this.createKeyFrames(widgetModel, this.cellFrame, this.animatorID, "widgetFrame");
				this.createKeyFrames(widgetModel, this.skinFrame, this.animator1ID, "skinFrame");
				
				var duration = animationConfig["duration"] || 0;
				var iterations = animationConfig["iterationCount"] || 1;
				if(animationConfig["iterationCount"] == 0)
					iterations = "infinite";
				var direction = animationConfig["direction"] || "normal";
				var animationDelay = animationConfig["delay"] || 0;
				var fillMode = animationConfig["fillMode"] || "none";
				
				node.direction = direction;
				node.fillMode  = fillMode;
				node.iterations = iterations;
				node.wModel = widgetModel;
				
				var animKey = vendor + 'Animation';
				var animSkinDef = this.animator1ID + " " + duration + "s " + animationDelay + "s " +  iterations + " " + direction + " " + fillMode +" ";

				var animCellDef = this.animatorID + " " + duration + "s " + animationDelay + "s " +  iterations + " " + direction + " " + fillMode +" ";				
				
				
				if(widgetModel.wType == "Slider"){
					this.animator2ID = this.animatorID  +"_image";
					this.createKeyFrames(widgetModel, this.imageFrame, this.animator2ID);
					var imgCellDef  = this.animator2ID + " " + duration + "s " + animationDelay + "s " +  iterations + " " + direction + " " + fillMode +" ";
					node.childNodes[0].childNodes[0].childNodes[0].style[animKey] = imgCellDef;
				}
								
				//animation need to be appplied on wrapper, because it is absoulte node
				var wrapper = node.parentNode;
				
				if(widgetModel.wType == "Image"){
					node.childNodes[0].style[animKey] =  animSkinDef;
				}
				else if (widgetModel.wType =="Slider") {
					node.childNodes[0].childNodes[0].style[animKey] = animSkinDef;
				}
				else{
					node.style[animKey] = animSkinDef;
				}				
				wrapper.style[animKey] = animCellDef; 
				
				if($KG.appbehaviors["captureAniamtionData"]) {
					animInfo.animationRequestHandleEndTime = animInfo.animationInvokeTime = this.getAnimationTime();
				}

				//updating flex Properties in widget Model based on fill mode
				if(fillMode == kony.anim.FILL_MODE_BACKWARDS ||fillMode == kony.anim.FILL_MODE_BOTH ){ 
					var applyFrame = [];
					var initialPosition = [];
					if(direction == kony.anim.DIRECTION_NONE || direction == kony.anim.DIRECTION_ALTERNATE) {				
						 applyFrame = this.animationDef[0];
					}
				
					for(var i in applyFrame){					
						initialPosition[i] = widgetModel[i];
						widgetModel[i] = applyFrame[i];					
					}
					node.initialPosition = initialPosition;
				}

				wrapper.callBackConfig = callBackConfig || {};							
				if(kony.appinit.isFirefox || kony.appinit.isIE10 || kony.appinit.isIE11) { 	
					kony.events.addEventListener(wrapper, "animationstart", this, false);				
					kony.events.addEventListener(wrapper, "animationiteration", this, false);
					kony.events.addEventListener(wrapper, "animationend", this, false);
				}
				else if(kony.appinit.isIE8 || kony.appinit.isIE9) {
					this.start(wrapper);
					this.move(wrapper);
					this.end(wrapper);
				
				}				
				else
				{				
					kony.events.addEventListener(wrapper, vendor + "AnimationStart", this, false);				
					kony.events.addEventListener(wrapper, vendor + "AnimationIteration", this, false);
					kony.events.addEventListener(wrapper, vendor + "AnimationEnd", this, false);				
				}

				var parentModel = widgetModel.parent;				
				if(parentModel.layoutType == kony.flex.FLOW_HORIZONTAL || parentModel.layoutType == kony.flex.FLOW_VERTICAL ){
					widgetIndex = $KW.Utils.getWidgetIndex(widgetModel);
					//depKeyFrames
					if(widgetIndex != -1) {					
						//var length = parentModel.widgets().length;
						var widgets = parentModel.widgets();
						var length = widgets.length;
						var j =1;
						for (var i = (widgetIndex+1); i< length; i++)
						{	
							var	siblingModel = 	widgets[i];	
							if(!siblingModel.isvisible)	
								continue;
							var animFrame = {};
							for(var k in depKeyFrames ) {
								animFrame[k] = depKeyFrames[k][j];
							
							}
							//var	siblingModel = 	parentModel.widgets()[i];
							var siblingNode = $KW.Utils.getWidgetNode(siblingModel);
							var depAnimId = "dep_"  +widgetModel.id + "_" + this.getNextAnimationValue();// "dep" +Math.floor(Math.random()*1000000);
							var depAnimDef = depAnimId + " " + duration + "s " + animationDelay + "s " +  iterations + " " + direction + " " + fillMode +" ";
							
							this.createKeyFrames(widgetModel, animFrame, depAnimId, "depFrame"+i);
							j++;
							
							siblingNode.parentNode.style[animKey] = depAnimDef;
							var endEvent;
							if(kony.appinit.isFirefox || kony.appinit.isIE10 || kony.appinit.isIE11){
								endEvent = "animationend";
							}
							else{			
								endEvent = vendor + "AnimationEnd";
							}
							kony.events.addEventListener(siblingNode.parentNode, endEvent, function(e){e.currentTarget.style[animKey] = "";}, false);
						}					
					}
				}
				
			}				
		}		
	},
	
	handleEvent : function(event) {
	
		var node = event.target;
		if(!node.childNodes[0])
			return;
		var widgetNode = node.childNodes[0];	
		var widgetModel = widgetNode.wModel;
		if(!widgetModel)
			return;
			
		//TO DO:-- widget onclick need to be disabled before animationstart, need to enable at the end of animation.
		switch(event.type)
        {
            case vendor + "AnimationStart":
			case "animationstart":
					this.start(node);
			break;
			
            case vendor + "AnimationIteration":
				this.move(node);
			break;       
			
            case vendor + "AnimationEnd": 
			case "animationend":
					this.end(node);
			
        }
	},
	
	
	start: function(node) {
		var widgetNode = node.childNodes[0];	
		var widgetModel = widgetNode.wModel;
		if($KG.appbehaviors["captureAniamtionData"]) {
					$KG.animataionData[this.animatorID].animationBeginTime = this.getAnimationTime();
		}		
		var eventhandler = node.callBackConfig && $KU.returnEventReference(node.callBackConfig.animationStart);
		this.execute(eventhandler, widgetModel);		  
	},
	
	move: function(node) {
		  //var eventhandler = node.callBackConfig && $KU.returnEventReference(node.callBackConfig.animationIterationEnd);		  
	},
	
	end: function(node, eventhandler) {
	
		var widgetNode = node.childNodes[0];	
		var widgetModel = widgetNode.wModel;
		var fillMode = widgetNode.fillMode;
		var direction = widgetNode.direction;
		var iterations = widgetNode.iterations;
		if(!widgetModel)
			return;		
		var flexprops = ["width", "height", "centerX", "centerY", "left", "top","bottom", "right","minWidth", "maxWidth", "minHeight", "maxHeight", "transform", "opacity", "zIndex","anchorPoint", "backgroundColor"];		
		if($KG.appbehaviors["captureAniamtionData"]) {
					$KG.animataionData[this.animatorID].animationEndTime = this.getAnimationTime();
				}			
               var eventhandler = node.callBackConfig && $KU.returnEventReference(node.callBackConfig.animationEnd);
				
				//updating flex Properties in widget Model
				var applyFrame = [];
				if(fillMode == kony.anim.FILL_MODE_FORWARDS ||fillMode == kony.anim.FILL_MODE_BOTH ){					
					if(direction == kony.anim.DIRECTION_NONE) {				
						 applyFrame = widgetModel.originalFrames[100];
					}
					else if (direction == kony.anim.DIRECTION_ALTERNATE) {
						if(iterations%2 == 0){	
							applyFrame = widgetModel.originalFrames[0];
						}
						else {
							applyFrame = widgetModel.originalFrames[100];
						}						
					}					
				}
				if(fillMode == kony.anim.FILL_MODE_BACKWARDS ) {
					//TO DO: get the intial frame.and set					
					applyFrame = widgetNode.initialPosition;
					
				}
				for(var i in applyFrame){
					if(flexprops.contains(i)){
						widgetModel[i] = applyFrame[i];
					}
				}				
			
				this.removeListeners(node);
				//ToDo: if it is forwards, i have to set final frame to widget Model.
				if(fillMode != kony.anim.FILL_MODE_NONE){
					if(kony.appinit.isIE8)
						$KU.updateLayoutConfig(widgetModel);
					widgetModel.parent.forceLayout && widgetModel.parent.forceLayout();
				}	
				node.style[vendor + 'Animation'] = "";
				if($KG.appbehaviors["captureAniamtionData"]) {
					$KG.animataionData[this.animatorID].data["endFrame"] = widgetModel.frame;
				}				
				if(widgetModel.wType == 'Image')
					delete widgetModel.animInfo;				
		
		this.execute(eventhandler, widgetModel);
	},
	
	execute: function(eventhandler, widgetModel) {
	
		var animationHandle = {};
		eventhandler && setTimeout( function () {eventhandler.call(widgetModel, widgetModel, animationHandle)}, 0);
	},
	
	removeListeners : function(target) {
	
		if(kony.appinit.isFirefox || kony.appinit.isIE10 || kony.appinit.isIE11) { 	
			kony.events.removeEventListener(target, "animationstart", this, false);				
			kony.events.removeEventListener(target, "animationiteration", this, false);
			kony.events.removeEventListener(target, "animationend", this, false);
		}
		else
		{				
			kony.events.removeEventListener(target, vendor + "AnimationStart", this, false);				
			kony.events.removeEventListener(target, vendor + "AnimationIteration", this, false);
			kony.events.removeEventListener(target, vendor + "AnimationEnd", this, false);				
		}
	
	},
	
	cancel: function(widgetModel) {	
	/*
		node.style[vendor + 'Animation'] = "";	
	*/
	}
	
}



$KW.Transform = function () {
	this.transform = {};	
}

$KW.Transform.prototype ={ 

	rotate : function(angle) {
		if(angle == "undefined")
			angle = 0;
		if( angle <0)
			this.transform.rotate = "rotate(" + Math.abs(angle) + "deg) ";
		else 	
			this.transform.rotate = "rotate( -" + angle + "deg) ";
		return this;

	},

	translate : function(x, y) {
		if(x =="undefined")
			x = 0;
		if(y =="undefined")
			y = 0;		
		var translate = {};
		translate.x =x;
		translate.y =y;
		this.transform.translate = "translate(" + translate.x + "px, " + translate.y + "px) ";
		return this;		
	},

	scale : function (x, y) {
		if(x =="undefined")
			x = 1;
		if(y =="undefined")
			y = 1;			
		this.transform.scale = "scale(" + x + ", " + y + ") ";
		return this;		
	}
}

$KW.animUtils = {

	applyTransform : function(widgetModel, propertyValue) {
		if(!propertyValue)
			return ($KU.hasWebkitTransform) ? "translateZ(0px)" : "";
			
		var style ="";
		
		if(propertyValue.transform.scale)
			style += propertyValue.transform.scale;
		if(propertyValue.transform.translate)	
			style += propertyValue.transform.translate;
		if(propertyValue.transform.rotate)
			style +=  propertyValue.transform.rotate;
		/*
		for(var i = 0; i<propertyValue.transform.length; i++){
			if(typeof (propertyValue.transform[i]) == "string"){
				style += propertyValue.transform[i];
			}
			else {					
				var translate = propertyValue.transform[i];
				
				style +=  " translate(" + translate.x + "px, " + translate.y + "px)";
			}
		}
		*/
		return style;	
	},

	AnimationDataComapre : function (mode) {
			
		if(mode == "record") {
			var recordedInfo = JSON.stringify($KG["animataionData"]);
			localStorage.setItem("animataionData", recordedInfo); 		
		}
		else if(mode == "play"){
			var recordedStr = localStorage.getItem("animataionData");
			var recordedInfo = JSON.parse(recordedStr);
			var capturedInfo = $KG["animataionData"];
			for(var anim in recordedInfo){
				kony.print("Animation Testing for: "+ recordedInfo[anim].animationID);
				var recordedData = recordedInfo[anim].data;
				var capturedData = capturedInfo[anim].data;
					
				for(var frames in recordedData){
					if(frames != "startFrame" && frames != "endFrame"){
						if(recordedData[frames] == capturedData[frames]){							
							kony.print("PASSED Frame is \n"	+ recordedData[frames] +  " \n"+ capturedData[frames]);
						}
						else
							kony.print("FAILED Frame is \n"	+ recordedData[frames] +  " \n"+ capturedData[frames]);						
					}
					else {
					
					
					}
				}	
			}
		
		}
	}		

}
