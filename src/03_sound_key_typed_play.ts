import p5 from "p5";

const sketch = (p: p5) => {

	let sound: p5.SoundFile

	console.log("start");

	p.preload = () => {
		const loadSound = (path: string) => ((p as any) as p5.SoundFile).loadSound(path);
		sound = loadSound("assets/maou_cyber_43.mp3");
	};

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background("#131821");
	};

	p.keyTyped = () => {
		sound.play();
	};
};

new p5(sketch)