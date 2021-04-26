var app;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/public/header-swap.js":
/*!**********************************!*\
  !*** ./js/public/header-swap.js ***!
  \**********************************/
/***/ (() => {

var product = document.querySelector(".product");
var news = document.querySelector(".news");
var about = document.querySelector(".about");
var kontacts = document.querySelector(".kontacts");
document.querySelectorAll(".header__bar").forEach(function (bar) {
  bar.querySelectorAll(".header__bar-item").forEach(function (item) {
    item.onclick = function () {
      var key = item.dataset.url;

      switch (key) {
        case "/":
          product.style.display = "block";
          news.style.display = "block";
          about.style.display = "none";
          kontacts.style.display = "none";
          break;

        case "/about":
          product.style.display = "none";
          news.style.display = "none";
          kontacts.style.display = "none";
          about.style.display = "block";
          break;

        case "/kontacts":
          product.style.display = "none";
          news.style.display = "none";
          about.style.display = "none";
          kontacts.style.display = "block";
          break;

        default:
          break;
      }
    };
  });
});

/***/ }),

/***/ "./js/public/map.js":
/*!**************************!*\
  !*** ./js/public/map.js ***!
  \**************************/
/***/ (() => {

ymaps.ready(init);

function init() {
  // Создание карты.
  var map = new ymaps.Map("map", {
    center: [47.287588, 39.709174],
    zoom: 13,
    controls: ['zoomControl']
  });
  map.behaviors.disable('scrollZoom');
  var myPlacemark = new ymaps.Placemark([47.287588, 39.709174]);
  map.geoObjects.add(myPlacemark);
}

/***/ }),

/***/ "./js/public/news__wrap.js":
/*!*********************************!*\
  !*** ./js/public/news__wrap.js ***!
  \*********************************/
/***/ (() => {

document.querySelector(".news__wrap").querySelectorAll(".news-card").forEach(function (newsCard) {
  var src = newsCard.dataset.src;
  if (src == undefined) return;

  switch (src) {
    case "0":
      newsCard.style.background = "url(\"/images/Fon-News.png\") no-repeat ";
      newsCard.style.backgroundSize = "cover";
      console.log(src);
      break;

    case "1":
      newsCard.style.background = "url(\"/images/fon.jpg\") no-repeat ";
      newsCard.style.backgroundSize = "cover";
      break;

    case "2":
      newsCard.style.background = "url(\"/images/Fon-News2.png\") no-repeat ";
      newsCard.style.backgroundSize = "cover";
      break;

    default:
      break;
  }
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./js/public/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_wrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news__wrap */ "./js/public/news__wrap.js");
/* harmony import */ var _news_wrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_news_wrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_swap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-swap */ "./js/public/header-swap.js");
/* harmony import */ var _header_swap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_swap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./js/public/map.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_2__);



})();

app = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=app.js.map