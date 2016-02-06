'use strict';
class MaskManager {
	setup(){
		this.masks = [
			new GridMask(),
			new CloudMask(),
			];
		this.names = [
			"GridMask", 
			"CircleMask"
			];
		this.curMaskNum = 0;
		for(var i = 0 ; i < this.masks.length; i++){
			this.masks[i].setup();
		}
	}
	update(data) {
		this.masks[this.curMaskNum].update(data);
	}
	setMaskByName(name) {
		var index = this.names.indexOf(name.value);
		if (index >= 0){
			this.curMaskNum = index;
		}
	};
	hideMask(settings){
		this.masks[this.curMaskNum].hide();
		this.masks[this.curMaskNum].clearParameters(settings);
	}
	showMask(settings){
		this.masks[this.curMaskNum].show();
		this.masks[this.curMaskNum].addParameters(settings);
	}

};