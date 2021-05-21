var app;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/public/abult.js":
/*!****************************!*\
  !*** ./js/public/abult.js ***!
  \****************************/
/***/ (() => {

document.querySelectorAll('.adult').forEach(function (adult) {
  adult.querySelector('.adult__btn_green').onclick = function () {
    // alert(1);
    adult.style.display = "none";
  };
});

/***/ }),

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
    zoom: 11,
    controls: ['zoomControl']
  });
  map.behaviors.disable('scrollZoom');
  var Vorosh = new ymaps.Placemark([47.287588, 39.709174]);
  var Kashirskay = new ymaps.Placemark([47.199791, 39.623645]);
  var Pyshkin = new ymaps.Placemark([47.227543, 39.724283]);
  var Dovatora = new ymaps.Placemark([47.241946, 39.589141]);
  map.geoObjects.add(Vorosh);
  map.geoObjects.add(Kashirskay);
  map.geoObjects.add(Pyshkin);
  map.geoObjects.add(Dovatora);
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

/***/ }),

/***/ "./js/public/popUp.js":
/*!****************************!*\
  !*** ./js/public/popUp.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
document.querySelectorAll(".product-card").forEach(function (card) {
  var popUpContent = card.dataset.popup;

  card.onclick = function () {
    $(".toPopUp").append(popUpContent);
    document.querySelectorAll('.toPopUp').forEach(function (popup) {
      popup.querySelector('.product-full__close').onclick = function () {
        $(".toPopUp").empty();
      };
    });
  };
});

/***/ }),

/***/ "./js/public/script.js":
/*!*****************************!*\
  !*** ./js/public/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_wrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news__wrap */ "./js/public/news__wrap.js");
/* harmony import */ var _news_wrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_news_wrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_swap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-swap */ "./js/public/header-swap.js");
/* harmony import */ var _header_swap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_swap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./js/public/map.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _abult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abult */ "./js/public/abult.js");
/* harmony import */ var _abult__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_abult__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popUp */ "./js/public/popUp.js");
/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_popUp__WEBPACK_IMPORTED_MODULE_4__);






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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_name_"] = self["webpackChunk_name_"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./js/public/script.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	app = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map