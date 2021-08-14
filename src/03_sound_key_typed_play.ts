import p5 from "p5";

async function setupAudio(ctx: AudioContext) {
	const res = await fetch("static/maou_cyber_43.mp3");
	const arrayBuffer = await res.arrayBuffer();
	// Web Audio API で使える形式に変換
	const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
	return audioBuffer;
};

function playAudio(ctx: AudioContext, audioBuffer: AudioBuffer) {
	let source = ctx.createBufferSource();
	source.buffer = audioBuffer;
	source.connect(ctx.destination);
	source.start();
	return source;
};

const sketch = async (p: p5) => {
	const ctx = new AudioContext();
	let source: AudioBufferSourceNode;
	let isPlaying = false;

	const audio = await setupAudio(ctx);

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
		p.background("#131821");
	};

	p.keyTyped = () => {
		if (isPlaying) {
			isPlaying = false;
			source.stop();
		} else {
			source = playAudio(ctx, audio);
			isPlaying = true;
		};
	};
};

new p5(sketch)