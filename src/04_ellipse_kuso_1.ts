import p5 from "p5";

/** とても参考になったコード: https://openprocessing.org/sketch/1244954
 * 色と図形以外(つまりロジックは丸パクリでごめんなさい、、)
*/
const sketch = (p: p5) => {

	// 描画色
	const color1 = "#22259F";
	const color2 = "#55A5FF";
	const color3 = "#A2EA00";

	let objs = [];
	let objsNum = 61;
	let R;

	class block {
		t: number;
		x: number;
		y: number;
		w: number;
		h: number;

		constructor(index: number) {
			this.t = index * 360 / objsNum;
			this.x = R * p.cos(this.t);
			this.y = R * p.sin(this.t);
			this.w = 30;
			this.h = 150;
		}
		move() { }

		display() {
			p.push();
			p.translate(this.x, this.y);
			p.rotateX(this.t + p.frameCount);
			p.rotateY(this.t + 13 + p.frameCount);
			p.rotateZ(this.t + 31 + p.frameCount);
			p.ellipse(this.x, this.y, this.w, this.h);
			p.ellipse(this.x * 0.5, this.y * 0.5, this.w, this.h);
			p.ellipse(this.x * 0.2, this.y * 0.2, this.w, this.h);
			p.torus(50, 20)
			p.pop();
		}
	}

	/** 初期化 */
	p.setup = () => {
		p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
		p.angleMode(p.DEGREES); // 回転の単位を弧度から角度に変更
		p.noStroke(); // 線なし(塗りつぶしのみ)に設定
		p.blendMode(p.LIGHTEST); // 合成モードを「LIGHTEST=明るく」に設定

		R = p.min(p.width, p.height) * 0.345

		let pg = p.createGraphics(300, 500);
		pg.noStroke();
		pg.fill(0);

		let gradientFill = pg.drawingContext.canvas.getContext('2d').createLinearGradient(
			pg.width * 0.5,
			pg.height * 0.0,
			pg.width * 0.5,
			pg.height * 1.0
		);

		gradientFill.addColorStop(0, color1);
		gradientFill.addColorStop(0.5, color2);
		gradientFill.addColorStop(1, color3);

		pg.drawingContext.canvas.getContext('2d').fillStyle = gradientFill;

		pg.rect(0, 0, pg.width, pg.height);

		p.texture(pg);

		for (let i = 0; i < objsNum; i++) {
			objs.push(new block(i))
		}
	};

	/** フレームごとの描画処理 */
	p.draw = () => {
		p.background("#131821");
		p.lights();
		p.ambientLight(40);

		for (let i = 0; i < objs.length; i++) {
			objs[i].move();
			objs[i].display();
		}
	};
};

new p5(sketch)