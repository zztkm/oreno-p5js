function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},t=o.parcelRequire373b;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in n){var o=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,o.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequire373b=t);new(e(t("3IiGz")))((e=>{let o=[],i=-120;const n=()=>{const n=e.random()**3,t=e.frameCount-i<120,r=t?e.mouseX/e.width+e.random(-.05,.05):e.random(),d=t?e.mouseY/e.height+e.random(-.05,.05):1.2;o.push({position:{x:r,y:d},size:e.map(n,0,1,.005,.2),speed:e.map(n,0,1,.005,.02),isFill:Math.random()>.5})};e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight)},e.draw=()=>{for(e.push(),e.background(e.color("#121d21")),e.blendMode(e.SCREEN),o=o.filter((o=>o.position.y*e.height+o.size>=0));o.length<40;)n();o.forEach((e=>[e.position.y-=e.speed])),o.forEach((o=>{const i=e.noise(20*o.position.x,20*o.position.y),n=e.map(i,0,1,-15,15),t=e.color("#e63946");e.stroke(t),o.isFill?e.fill(t):e.noFill,e.circle(o.position.x*e.width+n,o.position.y*e.height,o.size*e.width)})),e.pop()},e.mouseMoved=()=>{i=e.frameCount},e.windowResized=()=>{e.resizeCanvas(e.windowWidth,e.windowHeight)}}));
//# sourceMappingURL=02_bubble.eb9bce8d.js.map
