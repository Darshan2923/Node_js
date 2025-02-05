"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
// const darshan1=new TakePhoto("test","Test"); //abstract class can't have objects 
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const dp = new Instagram2("test", "Test", 3);
dp.getReelTime();
