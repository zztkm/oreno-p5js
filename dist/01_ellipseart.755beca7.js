function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=o.parcelRequire373b;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},o.parcelRequire373b=t);new(e(t("3IiGz")))((e=>{const o=e.color("#2a9d8f"),n=e.color("#e63946");let r=1;e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight),e.angleMode(e.DEGREES),e.noStroke(),e.background("#131821"),e.blendMode(e.LIGHTEST),console.log("setup finished!")},e.draw=()=>{e.fill(e.lerpColor(n,o,r)),e.translate(e.width/2,e.height/2),e.rotate(13*e.frameCount),e.ellipse(e.frameCount/2,0,e.frameCount,e.frameCount/4),r*=.995}}));
//# sourceMappingURL=01_ellipseart.755beca7.js.map
