var admin;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/private/Login.js":
/*!*****************************!*\
  !*** ./js/private/Login.js ***!
  \*****************************/
/***/ (() => {

document.querySelectorAll(".login-form").forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var user = {
      login: form.login.value,
      password: form.password.value
    };
    fetch("/admin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    }).then(function (res) {
      if (res.status != 200) {
        alert("Неверные данные для входа");
        return;
      }

      {
        alert("Добро пожаловать");
        location.href = "/admin/news";
      }
    });
  });
});

/***/ }),

/***/ "./js/private/buttonsChanges.js":
/*!**************************************!*\
  !*** ./js/private/buttonsChanges.js ***!
  \**************************************/
/***/ (() => {

document.querySelectorAll(".button-form").forEach(function (form) {
  var id = form.updateEntity.dataset.idEntity;
  var name = form.updateEntity.dataset.name;
  var urlUpdate = form.updateEntity.dataset.urlEntity;
  var urlDelete = form.deleteEntity.dataset.urlEntity;
  form.updateEntity.addEventListener('click', function () {
    fetch(urlUpdate + id, {
      method: 'GET'
    }).then(function () {
      document.location.href = urlUpdate + id;
    });
  });
  form.deleteEntity.addEventListener('click', function () {
    if (confirm("\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u043B\u0435\u043C\u0435\u043D\u0442 ".concat(name, "?"))) {
      fetch(urlDelete + id, {
        method: 'DELETE'
      }).then(function (result) {
        if (result.status == 200) {
          document.location.reload();
        } else {
          alert('Упс! кажется что то сломалось');
        }
      });
    }
  });
});

/***/ }),

/***/ "./js/private/changes.js":
/*!*******************************!*\
  !*** ./js/private/changes.js ***!
  \*******************************/
/***/ (() => {

document.querySelectorAll('.changes-new-or-old').forEach(function (form) {
  var type = form.formBtn.dataset.type;
  var url, id, method;
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // let arg = $(".changes-new-or-old").serialize().split("&");

    var sendData = {}; // arg.forEach(el => {
    //     let coupleVar = el.split("=");
    //     sendData[coupleVar[0]] = coupleVar[1];
    // })

    var arg = document.querySelector(".changes-new-or-old");
    arg.querySelectorAll('input').forEach(function (input) {
      console.log(input.value);
      sendData[input.name] = input.value;
    });
    console.log(sendData);

    if (type == "add") {
      url = form.formBtn.dataset.url;
      method = 'POST';
    }

    if (type == "update") {
      id = form.formBtn.dataset.id;
      url = form.formBtn.dataset.url + id;
      method = 'PATCH';
    }

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(sendData)
    }).then(function (res) {
      if (res.status == 200) {
        alert("Операция завершина успешно");
        document.location.reload();
      } else {
        alert("Что-то пошло не так");
        document.location.reload();
      }
    });
  });
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
/*!******************************!*\
  !*** ./js/private/script.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changes */ "./js/private/changes.js");
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_changes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttonsChanges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonsChanges */ "./js/private/buttonsChanges.js");
/* harmony import */ var _buttonsChanges__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttonsChanges__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./js/private/Login.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login__WEBPACK_IMPORTED_MODULE_2__);



})();

admin = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map