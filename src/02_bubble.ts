import p5 from "p5";

/** とりあえず動かしたかったのでここのコードをパクった: https://github.com/ics-creative/210129_p5ts */

type Bubble = {
	/** 位置(画面サイズに対する0~1の相対位置) */
	position: {
		x: number;
		y: number;
	};
	size: number;
	speed: number;
	isFill: boolean;
};


const sketch = (p: p5) => {

	const maxCount = 40;
	const minSize = 0.005;
	const mazSize = 0.2;
	const minSpeed = 0.005;
	const maxSpeed = 0.02;
	const mouseAciveFrames = 120;
	const backgroundColor = "#121d21";
	const bubbleColor = "#e63946";

	let bubbles: Bubble[] = [];
	let lastMouseMoved = -mouseAciveFrames;

	const addBubble = () => {
		// 仮想の奥行きを定義
		const z = p.random() ** 3;
		const isMousePosition = p.frameCount - lastMouseMoved < mouseAciveFrames;
		const x = isMousePosition
			? p.mouseX / p.width + p.random(-0.05, 0.05)
			: p.random()
		const y = isMousePosition ? p.mouseY / p.height + p.random(-0.05, 0.05) : 1.2;
		bubbles.push({
			position: { x, y },
			size: p.map(z, 0, 1, minSize, mazSize),
			speed: p.map(z, 0, 1, minSpeed, maxSpeed),
			isFill: Math.random() > 0.5,
		});
	};

	/** 画面外に出たバブルを配列から除去する */
	const removeOutBubbles = () => {
		bubbles = bubbles.filter((b) => b.position.y * p.height + b.size >= 0);
	};

	/** バブルの位置を更新する */
	const updateBubbles = () => {
		bubbles.forEach((b) => [
			b.position.y -= b.speed,
		]);
	};

	/** バブルを描画する */
	const drawBubbles = () => {
		bubbles.forEach((b) => {
			// ノイズを使って左右の揺れの値を作る
			const noise = p.noise(b.position.x * 20, b.position.y * 20);
			const xShift = p.map(noise, 0, 1, -15, 15);
			const color = p.color(bubbleColor);
			p.stroke(color);
			b.isFill ? p.fill(color) : p.noFill;
			// バブルの位置に算出したノイズを加えて円を描画する
			p.circle(
				b.position.x * p.width + xShift,
				b.position.y * p.height,
				b.size * p.width
			);
		});
	};


	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight);
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.push();
		p.background(p.color(backgroundColor));
		p.blendMode(p.SCREEN);
		removeOutBubbles();
		while (bubbles.length < maxCount) {
			addBubble();
		};
		updateBubbles();
		drawBubbles();
		p.pop();
	};

	p.mouseMoved = () => {
		lastMouseMoved = p.frameCount;
	};

	p.touchMoved = () => {
		lastMouseMoved = p.frameCount;
	}

	p.windowResized = () => {
		p.resizeCanvas(p.windowWidth, p.windowHeight);
	};
};

new p5(sketch)