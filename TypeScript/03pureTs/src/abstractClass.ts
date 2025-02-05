abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation
        return 8;
    }
}

// const darshan1=new TakePhoto("test","Test"); //abstract class can't have objects 

class Instagram2 extends TakePhoto2 {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");

    }
}

const dp = new Instagram2("test", "Test", 3);

dp.getReelTime();