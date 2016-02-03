var maskBase = {
	// any var which should be copied with children
    isMoving: true, 
    counter: 0,
};
// this is static data
maskBase.print = function(){
	console.log(this.counter);
}
maskBase.setup = function(){
	this.leftEyeGroup = new paper.Group();
}
// subscribe any mask to Group, group will have a position, rotation and scale
// TODO: unsubscribe from a Group in case of changing mask. Maybe detach all before attaching
// TODO: make one function to subscribe all elements
maskBase.attachToLeftEye = function(obj){
	this.leftEyeGroup.addChild(obj);
}
maskBase.detachAll = function(){

}
maskBase.update = function (obj) {
	this.counter++;
	this.leftEyeGroup.position = obj['leftEye'];
}