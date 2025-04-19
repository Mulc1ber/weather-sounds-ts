/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./style.scss */ "./style.scss");
const IMAGES_PATH = "./images/";
const SOUNDS_PATH = "./sounds/";
const audio = new Audio();
audio.loop = true;
let currentSound = null;
const buttons = document.querySelectorAll(".buttons button");
const volumeControl = document.querySelector("#volume");
document.body.style.backgroundImage = `url('${IMAGES_PATH}summer-bg.jpg')`;
buttons.forEach((button) => {
    const images = button.getAttribute("data-image");
    images && (button.style.backgroundImage = `url('${IMAGES_PATH}${images}')`);
    button.addEventListener("click", () => handleButtonClick(button));
});
volumeControl === null || volumeControl === void 0 ? void 0 : volumeControl.addEventListener("input", () => handleVolumeChange(volumeControl));
const handleButtonClick = (button) => {
    const sound = button.getAttribute("data-sound");
    const image = button.getAttribute("data-image");
    if (currentSound === sound) {
        (audio === null || audio === void 0 ? void 0 : audio.paused) ? audio === null || audio === void 0 ? void 0 : audio.play() : audio === null || audio === void 0 ? void 0 : audio.pause();
    }
    else {
        playNewAudio(sound, image);
    }
};
const handleVolumeChange = (volumeControl) => {
    audio && (audio.volume = +volumeControl.value);
};
const playNewAudio = (sound, image) => {
    if (!sound)
        return;
    audio === null || audio === void 0 ? void 0 : audio.pause();
    audio.src = `${SOUNDS_PATH}${sound}.mp3`;
    volumeControl && (audio.volume = +volumeControl.value);
    audio.play();
    currentSound = sound;
    image &&
        (document.body.style.backgroundImage = `url('${IMAGES_PATH}${image}')`);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NGZiOTYwMTlmNjNmYmIwMWMyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsa0NBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0Esc0RBQXNELFlBQVksRUFBRSxPQUFPO0FBQzNFO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZLEVBQUUsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxZQUFZLEVBQUUsTUFBTTtBQUMzRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlLnNjc3M/OTkxMSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3N0eWxlLnNjc3NcIik7XG5jb25zdCBJTUFHRVNfUEFUSCA9IFwiLi9pbWFnZXMvXCI7XG5jb25zdCBTT1VORFNfUEFUSCA9IFwiLi9zb3VuZHMvXCI7XG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpO1xuYXVkaW8ubG9vcCA9IHRydWU7XG5sZXQgY3VycmVudFNvdW5kID0gbnVsbDtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbnMgYnV0dG9uXCIpO1xuY29uc3Qgdm9sdW1lQ29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lXCIpO1xuZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0lNQUdFU19QQVRIfXN1bW1lci1iZy5qcGcnKWA7XG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGltYWdlcyA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWltYWdlXCIpO1xuICAgIGltYWdlcyAmJiAoYnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7SU1BR0VTX1BBVEh9JHtpbWFnZXN9JylgKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKGJ1dHRvbikpO1xufSk7XG52b2x1bWVDb250cm9sID09PSBudWxsIHx8IHZvbHVtZUNvbnRyb2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZvbHVtZUNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IGhhbmRsZVZvbHVtZUNoYW5nZSh2b2x1bWVDb250cm9sKSk7XG5jb25zdCBoYW5kbGVCdXR0b25DbGljayA9IChidXR0b24pID0+IHtcbiAgICBjb25zdCBzb3VuZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNvdW5kXCIpO1xuICAgIGNvbnN0IGltYWdlID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtaW1hZ2VcIik7XG4gICAgaWYgKGN1cnJlbnRTb3VuZCA9PT0gc291bmQpIHtcbiAgICAgICAgKGF1ZGlvID09PSBudWxsIHx8IGF1ZGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhdWRpby5wYXVzZWQpID8gYXVkaW8gPT09IG51bGwgfHwgYXVkaW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF1ZGlvLnBsYXkoKSA6IGF1ZGlvID09PSBudWxsIHx8IGF1ZGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhdWRpby5wYXVzZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGxheU5ld0F1ZGlvKHNvdW5kLCBpbWFnZSk7XG4gICAgfVxufTtcbmNvbnN0IGhhbmRsZVZvbHVtZUNoYW5nZSA9ICh2b2x1bWVDb250cm9sKSA9PiB7XG4gICAgYXVkaW8gJiYgKGF1ZGlvLnZvbHVtZSA9ICt2b2x1bWVDb250cm9sLnZhbHVlKTtcbn07XG5jb25zdCBwbGF5TmV3QXVkaW8gPSAoc291bmQsIGltYWdlKSA9PiB7XG4gICAgaWYgKCFzb3VuZClcbiAgICAgICAgcmV0dXJuO1xuICAgIGF1ZGlvID09PSBudWxsIHx8IGF1ZGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhdWRpby5wYXVzZSgpO1xuICAgIGF1ZGlvLnNyYyA9IGAke1NPVU5EU19QQVRIfSR7c291bmR9Lm1wM2A7XG4gICAgdm9sdW1lQ29udHJvbCAmJiAoYXVkaW8udm9sdW1lID0gK3ZvbHVtZUNvbnRyb2wudmFsdWUpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBjdXJyZW50U291bmQgPSBzb3VuZDtcbiAgICBpbWFnZSAmJlxuICAgICAgICAoZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0lNQUdFU19QQVRIfSR7aW1hZ2V9JylgKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=