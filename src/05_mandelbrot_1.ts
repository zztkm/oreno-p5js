import p5 from "p5";

/** wiki: https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%B3%E3%83%87%E3%83%AB%E3%83%96%E3%83%AD%E9%9B%86%E5%90%88 */
/** inspire: https://tony-mooori.blogspot.com/2015/10/processing_5.html */
const sketch = (p: p5) => {

	// 描画色1, 2
	const N = 255;
	const L = 255;
	const SCALE = 3.8;

	const calc = (x: number, y: number) => {
		let tx
		let ty
		let zx = 0.0;
		let zy = 0.0;

		for (let i = 1; i <= N; i++) {
			tx = zx;
			ty = zy;

			zx = tx * tx - ty * ty + x;
			zy = 2 * tx * ty + y;

			if (zx * zx + zy * zy > L) {
				return i;
			};
		};
	};

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(600, 600);
		p.noLoop();
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.translate(p.width / 2, p.height / 2);
		p.background(0);

		for (let i = -p.width / 2; i <= p.width / 2; i++) {
			for (let j = -p.height / 2; j <= p.height / 2; j++) {
				let x = SCALE * i / p.width;
				let y = SCALE * j / p.height;
				let r = calc(x, y);
				p.stroke(r % 256, r * 6 % 256, r * 16 % 256);
				p.rect(i, j, 1, 1);
			};
		};
	};

};

new p5(sketch)