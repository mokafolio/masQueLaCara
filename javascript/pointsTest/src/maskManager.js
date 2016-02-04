var maskManager = {
	masks: {},
	currentMask: "mask1",
	currentMaskNum: 0,
	names: ["mask1", "mask2"]
};
// add all existing masks to `masks`



maskManager.setup = function () {
	this.masks[this.names[0]] = new Mask1();
	this.masks[this.names[0]].setup();
	this.masks[this.names[1]] = new Mask2();
	this.masks[this.names[1]].setup();
};
maskManager.update = function (obj) {
	this.masks[this.getCurMaskName()].update(obj);
};
maskManager.getCurMask = function () {
	return this.masks[this.getCurMaskName()];
};

maskManager.setMaskByName = function (name) {
	index = this.names.indexOf(name.value);
	if (index >= 0){
		this.currentMaskNum = index;
	}
};

maskManager.getCurMaskName = function(){
	return this.names[this.currentMaskNum];
};
maskManager.hideMask = function(settings){
	this.masks[this.getCurMaskName()].hide();
	this.masks[this.getCurMaskName()].clearParameters(settings);
}
maskManager.showMask = function(settings){
	this.masks[this.getCurMaskName()].show();
	this.masks[this.getCurMaskName()].addParameters(settings);
}
maskManager.nextMask = function(){
	this.masks[this.getCurMaskName()].hide();

	this.currentMaskNum++;
	if(this.currentMaskNum > this.names.length-1){
		this.currentMaskNum = 0;
	} 

	this.masks[this.getCurMaskName()].show();

	console.log("currentMaskNum = " + this.getCurMaskName());
};