(this["webpackJsonpserverless-faucet"] = this["webpackJsonpserverless-faucet"] || []).push([[0],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sleep; });
/* unused harmony export extractError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retryNTimes; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var extractError = function extractError(error) {
  if (typeof error === "object") {
    if (error.response && error.response.request && error.response.request.statusText) {
      return extractError(error.response.request.statusText);
    }

    if (error.response) {
      return extractError(error.response);
    }

    if (error.error) {
      return extractError(error.error);
    }

    if (error.message) {
      return extractError(error.message);
    }

    if (error.data) {
      return extractError(error.data);
    }

    if (error.statusText) {
      return extractError(error.statusText);
    }

    try {
      return JSON.stringify(error);
    } catch (error) {// Ignore JSON error
    }
  }

  return String(error);
};
var fallback = function fallback(fallbacks) {
  var firstError, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fn;

  return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fallback$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = fallbacks[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 21;
            break;
          }

          fn = _step.value;

          if (fn) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("continue", 18);

        case 9:
          _context.prev = 9;
          _context.next = 12;
          return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fn());

        case 12:
          return _context.abrupt("return", _context.sent);

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](9);
          firstError = firstError || _context.t0;

        case 18:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 21:
          _context.next = 27;
          break;

        case 23:
          _context.prev = 23;
          _context.t1 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t1;

        case 27:
          _context.prev = 27;
          _context.prev = 28;

          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }

        case 30:
          _context.prev = 30;

          if (!_didIteratorError) {
            _context.next = 33;
            break;
          }

          throw _iteratorError;

        case 33:
          return _context.finish(30);

        case 34:
          return _context.finish(27);

        case 35:
          throw firstError || new Error("No result returned");

        case 36:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 23, 27, 35], [9, 15], [28,, 30, 34]]);
};
var retryNTimes = function retryNTimes(fnCall, retries) {
  var returnError, i, errorMessage;
  return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function retryNTimes$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < retries)) {
            _context2.next = 22;
            break;
          }

          _context2.prev = 2;
          _context2.next = 5;
          return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fnCall());

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);

          if (!String(_context2.t0).match(/timeout of .* exceeded/)) {
            _context2.next = 14;
            break;
          }

          returnError = _context2.t0;
          _context2.next = 17;
          break;

        case 14:
          errorMessage = extractError(_context2.t0);

          if (errorMessage) {
            // tslint:disable-next-line: no-object-mutation
            _context2.t0.message += " (".concat(errorMessage, ")");
          }

          throw _context2.t0;

        case 17:
          _context2.next = 19;
          return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(sleep(500));

        case 19:
          i++;
          _context2.next = 1;
          break;

        case 22:
          throw returnError;

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export broadcastTransaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blockchair; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_utxo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);





var fetchConfirmations = function fetchConfirmations(network) {
  return function _callee(txid) {
    var url, response, txBlock;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://api.blockchair.com/".concat(network, "/dashboards/transaction/").concat(txid);
            _context.next = 3;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(url)));

          case 3:
            response = _context.sent.data;
            txBlock = response.data[txid].transaction.block_id;
            return _context.abrupt("return", txBlock === -1 ? 0 : response.context.state - txBlock + 1);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var fetchUTXOs = function fetchUTXOs(network) {
  return function _callee2(address, confirmations) {
    var url, response;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "https://api.blockchair.com/".concat(network, "/dashboards/address/").concat(address, "?limit=0,100");
            _context2.next = 3;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url));

          case 3:
            response = _context2.sent.data;
            return _context2.abrupt("return", Object(_lib_utxo__WEBPACK_IMPORTED_MODULE_3__[/* fixValues */ "b"])(response.data[address].utxo.map(function (utxo) {
              return {
                txid: utxo.transaction_hash,
                value: new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(utxo.value).div(100000000).toNumber(),
                // script_hex: "",
                output_no: utxo.index,
                confirmations: utxo.block_id === -1 ? 0 : response.context.state - utxo.block_id + 1
              };
            }).filter(function (utxo) {
              return confirmations === 0 || utxo.confirmations >= confirmations;
            }), 8).sort(_lib_utxo__WEBPACK_IMPORTED_MODULE_3__[/* sortUTXOs */ "c"]));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var broadcastTransaction = function broadcastTransaction(network) {
  return function _callee3(txHex) {
    var url, response;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "https://api.blockchair.com/".concat(network, "/push/transaction");
            _context3.next = 3;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, {
              data: txHex
            }, {
              timeout: 5000
            }));

          case 3:
            response = _context3.sent;

            if (!response.data.error) {
              _context3.next = 6;
              break;
            }

            throw new Error(response.data.error);

          case 6:
            return _context3.abrupt("return", response.data[0]);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};
var Networks;

(function (Networks) {
  Networks["BITCOIN"] = "bitcoin";
  Networks["BITCOIN_CASH"] = "bitcoin-cash";
  Networks["LITECOIN"] = "litecoin";
  Networks["BITCOIN_SV"] = "bitcoin-sv";
  Networks["DOGECOIN"] = "dogecoin";
  Networks["DASH"] = "dash";
  Networks["GROESTLCOIN"] = "groestlcoin";
  Networks["BITCOIN_TESTNET"] = "bitcoin/testnet";
})(Networks || (Networks = {}));

var Blockchair = {
  networks: Networks,
  fetchUTXOs: fetchUTXOs,
  fetchConfirmations: fetchConfirmations,
  broadcastTransaction: broadcastTransaction
};
;
;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sortUTXOs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fixValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fixValues; });
/* unused harmony export getUTXOs */
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var sortUTXOs = function sortUTXOs(a, b) {
  // Sort greater values first
  if (a.value !== b.value) {
    return b.value - a.value;
  }

  ; // Sort older UTXOs first

  if (a.confirmations !== b.confirmations) {
    return a.value - b.value;
  }

  return a.txid <= b.txid ? -1 : 1;
};
var fixValue = function fixValue(value, decimals) {
  return new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(value).multipliedBy(new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(10).exponentiatedBy(decimals)).decimalPlaces(0).toNumber();
}; // Convert values to correct unit

var fixValues = function fixValues(utxos, decimals) {
  return utxos.map(function (utxo) {
    return _objectSpread({}, utxo, {
      value: fixValue(utxo.value, decimals)
    });
  });
};
/**
 * Retrieves UTXOs for a BTC, ZEC or BCH address.
 *
 * @param network The Ren Network object
 * @param currencyName "BTC", "ZEC" or "BCH"
 *
 * @param address The BTC, ZEC or BCH address to retrieve the UTXOS for
 * @param confirmations Restrict UTXOs to having at least this many
 *        confirmations. If confirmations is 0, unconfirmed UTXOs are included.
 * @param endpoint An offset to allow trying different endpoints first, in case
 * o      one is out of sync.
 */

var getUTXOs = function getUTXOs(testnet, currencyName, endpoints) {
  return function _callee(address, confirmations) {
    var endpoint,
        firstError,
        i,
        utxos,
        _args = arguments;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            endpoint = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
            i = 0;

          case 2:
            if (!(i < endpoints.length)) {
              _context.next = 16;
              break;
            }

            _context.prev = 3;
            _context.next = 6;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(endpoints[(i + endpoint) % endpoints.length]());

          case 6:
            utxos = _context.sent;
            return _context.abrupt("return", utxos.filter(function (utxo) {
              return utxo.confirmations >= confirmations;
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            firstError = firstError || _context.t0;

          case 13:
            i++;
            _context.next = 2;
            break;

          case 16:
            throw firstError || new Error("No endpoints found for retrieving ".concat(currencyName, " UTXOs."));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 10]]);
  };
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return newPromiEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return forwardEvents; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);


// Modified from web3-core-method

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * @file PromiEvent.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */
// tslint:disable: no-any


var InternalPromiEvent =
/*#__PURE__*/
function () {
  /**
   * @constructor
   */
  function InternalPromiEvent() {
    var _this = this;

    Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, InternalPromiEvent);

    // tslint:disable-next-line: promise-must-complete
    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    this.eventEmitter = new events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    return new Proxy(this, {
      get: this.proxyHandler
    });
  }
  /**
   * Proxy handler to call the promise or eventEmitter methods
   */


  Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(InternalPromiEvent, [{
    key: "proxyHandler",
    value: function proxyHandler(target, name) {
      if (name === 'resolve' || name === 'reject') {
        return target[name];
      }

      if (name === 'then') {
        return target.promise.then.bind(target.promise);
      }

      if (name === 'catch') {
        return target.promise.catch.bind(target.promise);
      }

      if (target.eventEmitter[name]) {
        return target.eventEmitter[name];
      }
    }
  }]);

  return InternalPromiEvent;
}();

var newPromiEvent = function newPromiEvent() {
  return new InternalPromiEvent();
};
var forwardEvents = function forwardEvents(src, dest) {
  var filterFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_name) {
    return true;
  };
  // const forwardEmitterNewListener = (eventName: string, listener: (...args: any[]) => void) => {
  //     if (filterFn(eventName) && listener.name.indexOf("__forward_emitter_") !== 0) {
  //         console.log(`Forwarding ${eventName} Listener:`);
  //         console.log(listener);
  //         src.on(eventName, listener);
  //         src.on("transactionHash", (txHash) => { console.log(`Got transaction hash on src`); });
  //     } else {
  //         console.log("Can't forward PromiEvent event!");
  //     }
  // };
  // const forwardEmitterRemoveListener = (eventName: string, listener: (...args: any[]) => void) => {
  //     src.removeListener(eventName, listener);
  // };
  // // Listeners bound to the destination emitter should be bound to the source emitter.
  // dest.on("newListener", forwardEmitterNewListener);
  // // When a listener is removed from the destination emitter, remove it from the source emitter
  // // (otherwise it will continue to be called).
  // dest.on("removeListener", forwardEmitterRemoveListener);
  // Until the above is fixed, we manually forward each event name:
  src.on('transactionHash', function (eventReceipt) {
    dest.emit('transactionHash', eventReceipt);
  });
  src.on('receipt', function (eventReceipt) {
    dest.emit('receipt', eventReceipt);
  });
  src.on('confirmation', function (confNumber, eventReceipt) {
    dest.emit('confirmation', confNumber, eventReceipt);
  });
  src.on('error', function (error) {
    dest.emit('error', error);
  });
};

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoAccount; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers_BCH_BCHHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(315);
/* harmony import */ var _handlers_BTC_BTCHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(316);
/* harmony import */ var _handlers_ERC20_ERC20Handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(314);
/* harmony import */ var _handlers_ETH_ETHHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(309);
/* harmony import */ var _handlers_ZEC_ZECHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(317);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(310);










var CryptoAccount = function CryptoAccount(privateKey, options) {
  var _this = this;

  Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, CryptoAccount);

  this.handlers = [];

  this.registerHandler = function (handlerClass, priorityIn) {
    var priority = priorityIn === undefined ? _this.handlers.length === 0 ? 0 : _this.handlers[_this.handlers.length - 1].priority : priorityIn;

    var lastPosition = _this.handlers.reduce(function (index, item, currentIndex) {
      return item.priority <= priority ? currentIndex + 1 : index;
    }, 0);

    _this.handlers.splice(lastPosition, 0, {
      handler: new handlerClass(_this.privateKey, _this.network, _this.constructorOptions, _this.sharedState),
      priority: priority
    });
  };

  this.address = function _callee(assetIn, options) {
    var asset;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            asset = assetIn || _this.defaultAsset;

            if (asset) {
              _context.next = 3;
              break;
            }

            throw new Error("Must provide an asset");

          case 3:
            ;
            return _context.abrupt("return", _this.deferHandler().address(asset, options));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  this.getBalance = function _callee2(assetIn, options) {
    var asset, bn;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            asset = assetIn || _this.defaultAsset;

            if (asset) {
              _context2.next = 3;
              break;
            }

            throw new Error("Must provide an asset");

          case 3:
            ;
            _context2.next = 6;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.deferHandler().getBalance(asset, options));

          case 6:
            bn = _context2.sent;
            return _context2.abrupt("return", options && options.bn ? new options.bn(bn.toFixed()) : bn.toNumber());

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  }; // tslint:disable-next-line: member-ordering


  this.balanceOf = this.getBalance;

  this.getBalanceInSats = function _callee3(assetIn, options) {
    var asset, bn;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            asset = assetIn || _this.defaultAsset;

            if (asset) {
              _context3.next = 3;
              break;
            }

            throw new Error("Must provide an asset");

          case 3:
            ;
            _context3.next = 6;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_this.deferHandler().getBalanceInSats(asset, options));

          case 6:
            bn = _context3.sent;
            return _context3.abrupt("return", options && options.bn ? new options.bn(bn.toFixed()) : bn.toNumber());

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // tslint:disable-next-line: member-ordering


  this.balanceOfInSats = this.getBalanceInSats;

  this.send = function (to, value, assetIn, options) {
    var asset = assetIn || _this.defaultAsset;

    if (!asset) {
      throw new Error("Must provide an asset");
    }

    ;
    return _this.deferHandler().send(to, new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(value.toString()), asset, options);
  };

  this.sendSats = function (to, value, assetIn, options) {
    var asset = assetIn || _this.defaultAsset;

    if (!asset) {
      throw new Error("Must provide an asset");
    }

    ;
    return _this.deferHandler().sendSats(to, new bignumber_js__WEBPACK_IMPORTED_MODULE_2___default.a(value.toString()), asset, options);
  };

  this.deferHandler = function (thisHandler) {
    return {
      address: function address(deferredAsset, deferredOptions) {
        var nextHandler = _this.findHandler(deferredAsset, thisHandler);

        if (nextHandler.address) {
          return nextHandler.address(deferredAsset, deferredOptions || {}, _this.deferHandler(nextHandler));
        } else {
          return _this.deferHandler(nextHandler).address(deferredAsset, deferredOptions);
        }
      },
      getBalance: function getBalance(deferredAsset, deferredOptions) {
        var nextHandler = _this.findHandler(deferredAsset, thisHandler);

        if (nextHandler.getBalance) {
          return nextHandler.getBalance(deferredAsset, deferredOptions || {}, _this.deferHandler(nextHandler));
        } else {
          return _this.deferHandler(nextHandler).getBalance(deferredAsset, deferredOptions);
        }
      },
      getBalanceInSats: function getBalanceInSats(deferredAsset, deferredOptions) {
        var nextHandler = _this.findHandler(deferredAsset, thisHandler);

        if (nextHandler.getBalanceInSats) {
          return nextHandler.getBalanceInSats(deferredAsset, deferredOptions || {}, _this.deferHandler(nextHandler));
        } else {
          return _this.deferHandler(nextHandler).getBalanceInSats(deferredAsset, deferredOptions);
        }
      },
      send: function send(deferredTo, deferredValue, deferredAsset, deferredOptions) {
        var nextHandler = _this.findHandler(deferredAsset, thisHandler);

        if (nextHandler.send) {
          return nextHandler.send(deferredTo, deferredValue, deferredAsset, deferredOptions || {}, _this.deferHandler(nextHandler));
        } else {
          return _this.deferHandler(nextHandler).send(deferredTo, deferredValue, deferredAsset, deferredOptions);
        }
      },
      sendSats: function sendSats(deferredTo, deferredValue, deferredAsset, deferredOptions) {
        var nextHandler = _this.findHandler(deferredAsset, thisHandler);

        if (nextHandler.sendSats) {
          return nextHandler.sendSats(deferredTo, deferredValue, deferredAsset, deferredOptions || {}, _this.deferHandler(nextHandler));
        } else {
          return _this.deferHandler(nextHandler).sendSats(deferredTo, deferredValue, deferredAsset, deferredOptions);
        }
      }
    };
  };

  this.findHandler = function (asset, from) {
    var fromIndex = from ? _this.handlers.findIndex(function (i) {
      return i.handler === from;
    }) : -1;

    for (var i = (fromIndex === -1 ? _this.handlers.length : fromIndex) - 1; i >= 0; i--) {
      var handler = _this.handlers[i].handler; // console.log(handler);

      if (handler.handlesAsset(asset)) {
        return handler;
      }
    }

    var assetString;

    try {
      assetString = JSON.stringify(asset);
    } catch (error) {
      assetString = asset && asset.name || asset;
    }

    throw new Error("Unsupported asset ".concat(assetString));
  };

  this.privateKey = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__[/* strip0x */ "a"])(Buffer.isBuffer(privateKey) ? privateKey.toString("hex") : privateKey); // Buffer.from(privateKey, "base64").toString("hex");

  this.network = options && options.network || 'mainnet';
  this.constructorOptions = options;
  this.sharedState = {};
  this.registerHandler(_handlers_BTC_BTCHandler__WEBPACK_IMPORTED_MODULE_4__[/* BTCHandler */ "a"], 0);
  this.registerHandler(_handlers_ZEC_ZECHandler__WEBPACK_IMPORTED_MODULE_7__[/* ZECHandler */ "a"], 10);
  this.registerHandler(_handlers_BCH_BCHHandler__WEBPACK_IMPORTED_MODULE_3__[/* BCHHandler */ "a"], 20);
  this.registerHandler(_handlers_ETH_ETHHandler__WEBPACK_IMPORTED_MODULE_6__[/* ETHHandler */ "a"], 30);
  this.registerHandler(_handlers_ERC20_ERC20Handler__WEBPACK_IMPORTED_MODULE_5__[/* ERC20Handler */ "a"], 40);

  if (options && options.extraHandlers) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options.extraHandlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var handler = _step.value;
        this.registerHandler(handler);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  this.defaultAsset = options && options.defaultAsset;
};



CryptoAccount.newPrivateKey = function () {
  // @ts-ignore
  if (typeof window !== "undefined") {
    // @ts-ignore
    var array = new Uint32Array(32); // @ts-ignore

    window.crypto.getRandomBytes(array);
    return new Buffer(array).toString("hex");
  } else {
    return __webpack_require__(46).randomBytes(32).toString("hex");
  }
}; ////////////////////////////////////////////////////////////////////////////////
// EXPORTS                                                                    //
// Based on https://github.com/MikeMcl/bignumber.js/blob/master/bignumber.js  //
////////////////////////////////////////////////////////////////////////////////
// tslint:disable: no-object-mutation
// tslint:disable-next-line: no-string-literal


CryptoAccount["default"] = CryptoAccount.CryptoAccount = CryptoAccount;

if (typeof define === 'function' && __webpack_require__(249)) {
  // AMD.
  define(function () {
    return CryptoAccount;
  });
} else if ( true && module.exports) {
  // Node.js and other environments that support module.exports.
  try {
    module.exports = CryptoAccount;
  } catch (error) {// ignore error
  }
} else {
  // Browser.
  if (window) {
    window.CryptoAccount = CryptoAccount;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2).Buffer, __webpack_require__(330)(module)))

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ETHHandler; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_promiEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _ethUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import HDWalletProvider from "@truffle/hdwallet-provider";



var ETHHandler = function ETHHandler(privateKey, network, options, sharedState) {
  var _this = this;

  Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, ETHHandler);

  this.decimals = 18; // Returns whether or not this can handle the asset

  this.handlesAsset = function (asset) {
    return typeof asset === "string" && ["ETH", "ETHER", "ETHEREUM"].indexOf(asset.toUpperCase()) !== -1;
  };

  this.address = function _callee(asset, options) {
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _this.unlockedAddress);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // (await this.sharedState.web3.eth.getAccounts())[0];
  // Balance


  this.getBalance = function _callee2(asset, options) {
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.getBalanceInSats(asset, options));

          case 2:
            _context2.t0 = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(10).exponentiatedBy(_this.decimals);
            return _context2.abrupt("return", _context2.sent.dividedBy(_context2.t0));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.getBalanceInSats = function _callee3(asset, options) {
    var atBlock, currentBlock, address;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(options && options.confirmations && options.confirmations > 0)) {
              _context3.next = 7;
              break;
            }

            _context3.t0 = bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a;
            _context3.next = 4;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.sharedState.web3.eth.getBlockNumber());

          case 4:
            _context3.t1 = _context3.sent;
            currentBlock = new _context3.t0(_context3.t1);
            atBlock = currentBlock.minus(options.confirmations).plus(1).toNumber();

          case 7:
            _context3.t2 = options && options.address;

            if (_context3.t2) {
              _context3.next = 12;
              break;
            }

            _context3.next = 11;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.address(asset));

          case 11:
            _context3.t2 = _context3.sent;

          case 12:
            address = _context3.t2;
            _context3.t3 = bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a;
            _context3.next = 16;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.sharedState.web3.eth.getBalance(address, atBlock));

          case 16:
            _context3.t4 = _context3.sent;
            return _context3.abrupt("return", new _context3.t3(_context3.t4));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // Transfer


  this.send = function (to, value, asset, options) {
    return _this.sendSats(to, value.times(new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(10).exponentiatedBy(_this.decimals)), asset, options);
  };

  this.sendSats = function (to, valueIn, asset, optionsIn) {
    var promiEvent = Object(_lib_promiEvent__WEBPACK_IMPORTED_MODULE_5__[/* newPromiEvent */ "b"])();
    (function _callee4() {
      var options, value, txOptions, gasPrice, gasLimit, fee, web3PromiEvent;
      return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              options = optionsIn || {};
              value = valueIn;
              txOptions = Object(_ethUtils__WEBPACK_IMPORTED_MODULE_6__[/* getTransactionConfig */ "c"])(options);

              if (!options.subtractFee) {
                _context4.next = 15;
                break;
              }

              _context4.t0 = txOptions.gasPrice;

              if (_context4.t0) {
                _context4.next = 9;
                break;
              }

              _context4.next = 8;
              return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.sharedState.web3.eth.getGasPrice());

            case 8:
              _context4.t0 = _context4.sent;

            case 9:
              gasPrice = _context4.t0;
              gasLimit = txOptions.gas || 21000;
              fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(gasPrice.toString()).times(gasLimit);

              if (!fee.gt(value)) {
                _context4.next = 14;
                break;
              }

              throw new Error("Unable to include fee in value, fee exceeds value (".concat(fee.toFixed(), " > ").concat(value.toFixed(), ")"));

            case 14:
              value = value.minus(fee);

            case 15:
              _context4.t1 = _this.sharedState.web3.eth;
              _context4.t2 = _objectSpread;
              _context4.next = 19;
              return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_this.address(asset));

            case 19:
              _context4.t3 = _context4.sent;
              _context4.t4 = {
                from: _context4.t3,
                gas: 21000
              };
              _context4.t5 = txOptions;
              _context4.t6 = {
                to: to,
                value: value.toFixed()
              };
              _context4.t7 = (0, _context4.t2)(_context4.t4, _context4.t5, _context4.t6);
              web3PromiEvent = _context4.t1.sendTransaction.call(_context4.t1, _context4.t7);
              Object(_lib_promiEvent__WEBPACK_IMPORTED_MODULE_5__[/* forwardEvents */ "a"])(web3PromiEvent, promiEvent);
              web3PromiEvent.then(promiEvent.resolve);

            case 27:
            case "end":
              return _context4.stop();
          }
        }
      });
    })().catch(function (error) {
      promiEvent.reject(error);
    });
    return promiEvent;
  };

  this.network = Object(_ethUtils__WEBPACK_IMPORTED_MODULE_6__[/* getNetwork */ "b"])(network);
  this.privateKey = privateKey;

  var _getWeb = Object(_ethUtils__WEBPACK_IMPORTED_MODULE_6__[/* getWeb3 */ "d"])(this.privateKey, Object(_ethUtils__WEBPACK_IMPORTED_MODULE_6__[/* getEndpoint */ "a"])(this.network, options && options.ethereumNode, options && options.infuraKey)),
      _getWeb2 = Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_getWeb, 2),
      web3 = _getWeb2[0],
      address = _getWeb2[1];

  this.unlockedAddress = address;
  sharedState.web3 = web3;
  this.sharedState = sharedState;
};

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return strip0x; });
/* unused harmony export Ox */
/* unused harmony export shuffleArray */
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
 // Remove 0x prefix from a hex string

var strip0x = function strip0x(hex) {
  return hex.substring(0, 2) === "0x" ? hex.slice(2) : hex;
}; // Add a 0x prefix to a hex value, converting to a string first

var Ox = function Ox(hex) {
  var hexString = typeof hex === "string" ? hex : bignumber_js__WEBPACK_IMPORTED_MODULE_0___default.a.isBigNumber(hex) ? hex.toString(16) : hex.toString("hex");
  return hexString.substring(0, 2) === "0x" ? hexString : "0x".concat(hexString);
};
/**
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

var shuffleArray = function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }

  return array;
};

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(25);

// EXTERNAL MODULE: ../send-crypto/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(9);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/promiEvent.js
var lib_promiEvent = __webpack_require__(28);

// EXTERNAL MODULE: ../send-crypto/build/module/handlers/ETH/ethUtils.js
var ethUtils = __webpack_require__(43);

// CONCATENATED MODULE: ../send-crypto/build/module/handlers/ERC20/ERC20ABI.js
var ERC20ABI = [{
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "balance",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_to",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_to",
    "type": "address"
  }, {
    "name": "_value",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}];
// CONCATENATED MODULE: ../send-crypto/build/module/handlers/ERC20/ERC20s.js
var ERC20s = {
  "mainnet": {
    "USDT": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "LEO": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    "LINK": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "HT": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    "MKR": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "USDC": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "VEN": "0xd850942ef8811f2a866692a623011bde52a462c1",
    "CRO": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    "INO": "0xc9859fccc876e6b4b3c749c5d29ea04f48acb74f",
    "BAT": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    "PAX": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "INB": "0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482",
    "SNX": "0xc011a72400e58ecd99ee497cf89e3775d4bd732f",
    "ZRX": "0xe41d2489571d322189246dafa5ebde1f4699f498",
    "CENNZ": "0x1122b6a0e00dce0563082b6e2953f3a943855c1f",
    "HOT": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    "KBC": "0xf3586684107ce0859c44aa2b2e0fb8cd8731a15a",
    "DAI": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    "SAI": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    "XIN": "0xa974c709cfb4566686553a20790685a47aceaa33",
    "ZB": "0xbd0793332e9fb844a52a205a233ef27a5b34b927",
    "EKT": "0x4ecdb6385f3db3847f9c4a9bf3f9917bb27a5452",
    "BTM": "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
    "KCS": "0x039b5649a59967e3e936d7471f9c3700100ee1ab",
    "MOF": "0x653430560be843c4a3d143d0110e896c2ab8ac0d",
    "SXP": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    "THETA": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
    "QNT": "0x4a220e6096b25eadb88358cb44068a3248254675",
    "ICX": "0xb5a5f22694352c15b00323844ad545abb2b11028",
    "IOST": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
    "MATIC": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    "MCO": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
    "NEXO": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    "OKB": "0x75231f58b43240c9718dd58b4967c5114342a86c",
    "DX": "0x973e52691176d36453868d9d86572788d27041a9",
    "AE": "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
    "ENJ": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    "ZIL": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
    "CHZ": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    "LA": "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
    "VEST": "0x37f04d2c3ae075fad5483bb918491f656b12bdb6",
    "NOAH": "0x58a4884182d9e835597f405e5f258290e46ae7c2",
    "FET": "0x1d287cc25dad7ccaf76a26bc660c5f7c8e2a05bd",
    "BTMX": "0xf45f0e16b5e096286e1fb463d34be9f3df5e3602",
    "ENG": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
    "SNT": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    "CRPT": "0x80a7e048f37a50500351c204cb407766fa3bae7f",
    "NPXS": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    "ELF": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
    "MXM": "0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439",
    "EURS": "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    "DGD": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
    "DGTX": "0x1c83501478f1320977047008496dacbd60bb15ef",
    "CIX100": "0x6393e822874728f8afa7e1c9944e417d37ca5878",
    "BF": "0x5b71bee9d961b1b848f8485eec8d8787f80217f5",
    "BCZERO": "0xd45247c07379d94904e0a87b4481f0a1ddfa0c64",
    "KNC": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    "REN": "0x408e41876cccdc0f92210600ef50372656052a38",
    "AOA": "0x9ab165d795019b6d8b3e971dda91071421305e5a",
    "PPT": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
    "TNT": "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
    "BNK": "0xc80c5e40220172b36adee2c951f26f2a577810c5",
    "HPT": "0xa66daa57432024023db65477ba87d4e7f5f95213",
    "RCN": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    "MANA": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    "LAMB": "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
    "BZ": "0x4375e7ad8a01b8ec3ed041399f62d9cd120e0063",
    "WTC": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
    "WIC": "0x4f878c0852722b0976a955d68b376e4cd4ae99e5",
    "LRC": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    "BRD": "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
    "NULS": "0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c",
    "FTM": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    "IOTX": "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
    "XMX": "0x0f8c45b896784a1e408526b9300519ef8660209c",
    "QBIT": "0x1602af2c782cc03f9241992e243290fccf73bb13",
    "WAX": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
    "CVC": "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    "R": "0x48f775efbe4f5ece6e0df2f7b5932df56823b990",
    "TTC": "0x9389434852b94bbad4c8afed5b7bdbc5ff0c2275",
    "FUN": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    "BUSD": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    "LOOM": "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    "QASH": "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
    "XAC": "0xde4c5a791913838027a2185709e98c5c6027ea63",
    "LINA": "0xc05d14442a510de4d3d71a3d316585aa0ce32b50",
    "BNT": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    "CELR": "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
    "DIVX": "0x13f11c9905a08ca76e3e853be63d4f0944326c72",
    "POWR": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    "DRG": "0x814f67fa286f7572b041d041b1d99b432c9155ee",
    "MAN": "0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d",
    "C20": "0x26e75307fc0c021472feb8f727839531f112f317",
    "STORJ": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    "DATA": "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    "ULT": "0xe884cc2795b9c45beeac0607da9539fd571ccf85",
    "SXDT": "0x12b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf",
    "GNO": "0x6810e776880c02933d47db1b9fc05908e5386b96",
    "SAN": "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
    "ROX": "0x574f84108a98c575794f75483d801d1d5dc861a5",
    "ABT": "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
    "CTXC": "0xea11755ae41d889ceec39a63e6ff75a02bc1c00d",
    "ORBS": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
    "ONE": "0x799a4202c12ca952cb311598a024c80ed371a41e",
    "LBA": "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
    "CND": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    "ODEM": "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
    "MEDX": "0xfd1e80508f243e64ce234ea88a5fd2827c71d4b7",
    "TKN": "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    "BQTX": "0x9d8be94d0612170ce533ac4d7b43cc3cd91e5a1a",
    "BTU": "0xb683d83a532e2cb7dfa5275eed3698436371cc9f",
    "DENT": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    "CS": "0x46b9ad944d1059450da1163511069c718f699d31",
    "COCOS": "0x0c6f5f7d555e7518f6841a79436bd2b1eef03381",
    "EDO": "0xced4e93198734ddaff8492d525bd258d49eb388e",
    "ECOREAL": "0xb052f8a33d8bb068414eade06af6955199f9f010",
    "WIX": "0x7ba19b7f7d106a9a1e0985397b94f38eee0b555e",
    "FX": "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
    "TEL": "0x85e076361cc813a908ff672f9bad1541474402b2",
    "XET": "0x054c64741dbafdc19784505494029823d89c3b13",
    "DMT": "0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1",
    "KAN": "0x1410434b0346f5be678d0fb554e5c7ab620f8f4a",
    "CMT": "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
    "MDA": "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
    "REQ": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    "UIP": "0x4290563c2d7c255b5eec87f2d3bd10389f991d68",
    "BIX": "0xb3104b4b9da82025e8b9f8fb28b3553ce2f67069",
    "AGI": "0x8eb24319393716668d768dcec29356ae9cffe285",
    "B2BX": "0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393",
    "RHOC": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
    "QKC": "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
    "BAX": "0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb",
    "ZT": "0xfe39e6a32acd2af7955cb3d406ba2b55c901f247",
    "NKN": "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    "EVN": "0xd780ae2bf04cd96e577d3d014762f831d97129d0",
    "UTT": "0x16f812be7fff02caf662b85d5d58a5da6572d4df",
    "MFT": "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    "POLY": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    "CRE": "0x115ec79f1de567ec68b7ae7eda501b406626478e",
    "BCV": "0x1014613e2b3cbc4d575054d4982e580d9b99d7b1",
    "STORM": "0xd0a4b8946cb52f0661273bfbc6fd0e0c75fc6433",
    "FSN": "0xd0352a019e9ab9d757776f532377aaebd36fd541",
    "ITC": "0x5e6b6d9abad9093fdc861ea1600eba1b355cd940",
    "ST": "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",
    "PLA": "0x0198f46f520f33cd4329bd4be380a25a90536cd5",
    "DEW": "0x20e94867794dba030ee287f1406e100d03c84cd3",
    "EGT": "0x8e1b448ec7adfc7fa35fc2e885678bd323176e34",
    "NMR": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    "NEC": "0xcc80c051057b774cd75067dc48f8987c4eb97a5e",
    "DAC": "0xaad54c9f27b876d2538455dda69207279ff673a5",
    "QRL": "0x697beac28b09e122c4332d163985e8a73121b97f",
    "BHPC": "0xee74110fb5a1007b06282e0de5d73a61bf41d9cd",
    "GTO": "0xc5bbae50781be1669306b9e001eff57a2957b09d",
    "ANKR": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    "VIDY": "0xc77b230f31b517f1ef362e59c173c2be6540b5e8",
    "BMC": "0xdf6ef343350780bf8c3410bf062e0c015b1dd671",
    "DRGN": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
    "STPT": "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
    "UTK": "0x70a72833d6bf7f508c8224ce59ea1ef3d0ea3a38",
    "PLR": "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
    "CDT": "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
    "RDN": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    "OCEAN": "0x985dd3d42de1e256d09e1c10f112bccb8015ad41",
    "KEY": "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    "POE": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
    "BET": "0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2",
    "ELI": "0xc7c03b8a3fc5719066e185ea616e87b88eba44a3",
    "LGO": "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa",
    "DUSK": "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
    "KICK": "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e",
    "CVT": "0xbe428c3867f05dea2a89fc76a102b544eac7f772",
    "AURA": "0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814",
    "AEN": "0x0bef619cf38cf0c22967289b8419720fbd1db9f7",
    "EVX": "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
    "QSP": "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
    "DROP": "0x4672bad527107471cb5067a887f4656d585a8a31",
    "SNM": "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
    "CNN": "0x8713d26637cf49e1b6b4a7ce57106aabc9325343",
    "TOP": "0xdcd85914b8ae28c1e62f1c488e1d968d5aaffe2b",
    "PERL": "0xb5a73f5fc8bbdbce59bfd01ca8d35062e0dad801",
    "TAAS": "0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c",
    "RUFF": "0xf278c1ca969095ffddded020290cf8b5c424ace2",
    "LOC": "0x5e3346444010135322268a4630d2ed5f8d09446c",
    "SOC": "0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3",
    "FOAM": "0x4946fcea7c692606e8908002e55a582af44ac121",
    "USDQ": "0x4954db6391f4feb5468b6b943d4935353596aec9",
    "SNGLS": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
    "TEN": "0xdd16ec0f66e54d453e6756713e533355989040e4",
    "BAAS": "0x3e65e1eefde5ea7ccfc9a9a1634abe90f32262f8",
    "INS": "0x5b2e4a700dfbc560061e957edec8f6eeeb74a320",
    "DGX": "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    "DADI": "0xfb2f26f266fb2805a387230f2aa0a331b4d96fba",
    "KIN": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
    "GUSD": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    "CFI": "0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e",
    "OGO": "0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e",
    "TRIO": "0x8b40761142b9aa6dc8964e61d0585995425c3d94",
    "SNET": "0xff19138b039d938db46bdda0067dc4ba132ec71c",
    "PMA": "0x846c66cf71c43f80403b51fe3906b3599d63336f",
    "HYDRO": "0xebbdf302c940c6bfd49c6b165f457fdb324649bc",
    "MRPH": "0x7b0c06043468469967dba22d1af33d77d44056c8",
    "META": "0xde2f7766c8bf14ca67193128535e5c7454f8387c",
    "MTH": "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
    "BOA": "0x746dda2ea243400d5a63e0700f190ab79f06489e",
    "MWAT": "0x6425c6be902d692ae2db752b3c268afadb099d3b",
    "COSM": "0xd1e10c37a27d95d95720291b1dc6f12f74c71443",
    "OAX": "0x701c244b988a513c945973defa05de933b23fe1d",
    "DOCK": "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
    "MDT": "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
    "DEC": "0x89c6c856a6db3e46107163d0cda7a7ff211bd655",
    "CHSB": "0xba9d4199fab4f26efe3551d490e3821486f135ba",
    "MET": "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
    "BLZ": "0x5732046a883704404f284ce41ffadd5b007fd668",
    "BAND": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    "MOC": "0x865ec58b06bf6305b886793aa20a2da31d034e68",
    "UTNP": "0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7",
    "DOS": "0x70861e862e1ac0c96f853c8231826e469ead37b1",
    "TCT": "0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7",
    "WBTC": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "MLN": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    "STACS": "0x286708f069225905194673755f12359e6aff6fe1",
    "MTC": "0x905e337c6c8645263d3521205aa37bf4d034e745",
    "SRN": "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    "VEE": "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
    "NPX": "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02",
    "ADT": "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
    "FUEL": "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
    "RPL": "0xb4efd85c19999d84251304bda99e90b92300bd93",
    "YOYOW": "0xcbeaec699431857fdb4d37addbbdc20e132d4903",
    "NEU": "0xa823e6722006afe99e91c30ff5295052fe6b8e32",
    "VIBE": "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
    "UPP": "0xc86d054809623432210c107af2e3f619dcfbf652",
    "PRO": "0x226bb599a12c826476e3a771454697ea52e9e220",
    "SENSE": "0x6745fab6801e376cd24f03572b9c9b0d4edddccf",
    "UGAS": "0x8716fc5da009d3a208f0178b637a50f4ef42400f",
    "POA20": "0x6758b7d441a9739b98552b373703d8d3d14f9e62",
    "MOD": "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e",
    "AERGO": "0xae31b85bfe62747d0836b82608b4830361a3d37a",
    "IHF": "0xaf1250fa68d7decd34fd75de8742bc03b29bd58e",
    "VITE": "0x1b793e49237758dbd8b752afc9eb4b329d5da016",
    "DLT": "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
    "APIS": "0x4c0fbe1bb46612915e7967d2c3213cd4d87257ad",
    "OCN": "0x4092678e4e78230f46a1534c0fbc8fa39780892b",
    "HPB": "0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2",
    "JNT": "0xa5fd1a791c4dfcaacc963d4f73c6ae5824149ea7",
    "GOT": "0x613fa2a6e6daa70c659060e86ba1443d2679c9d7",
    "DNT": "0x0abdace70d3790235af448c88547603b945604ea",
    "DAPS": "0x93190dbce9b9bd4aa546270a8d1d65905b5fdd28",
    "AST": "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    "LXT": "0xbc46d9961a3932f7d6b64abfdec80c1816c4b835",
    "GEN": "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
    "UUU": "0x3543638ed4a9006e4840b105944271bcea15605d",
    "EDR": "0xc528c28fec0a90c083328bc45f587ee215760a0f",
    "GET": "0x8a854288a5976036a725879164ca3e91d30c6a1b",
    "QAU": "0x671abbe5ce652491985342e85428eb1b07bc6c64",
    "SWFTC": "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
    "BOX": "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
    "RFR": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
    "XRL": "0xb24754be79281553dc1adc160ddf5cd9b74361a4",
    "BDT": "0x033030feebd93e3178487c35a9c8ca80874353c9",
    "AMB": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
    "XDCE": "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2",
    "QCX": "0xf9e5af7b42d31d51677c75bbbd37c1986ec79aee",
    "APPC": "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
    "PRC": "0xcaa05e82bdcba9e25cd1a3bf1afb790c1758943d",
    "XLAB": "0x8c4e7f814d40f8929f9112c5d09016f923d34472",
    "IPC": "0x622cd54deb2bb7a051515192417109bcf3fe098f",
    "QUN": "0x264dc2dedcdcbb897561a57cba5085ca416fb7b4",
    "OIO": "0xa3efef1a1e3d1ad72b9d0f4253e7c9c084c2c08b",
    "CAS": "0xe8780b48bdb05f928697a5e8155f672ed91462f7",
    "BCPT": "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
    "LKY": "0x49bd2da75b1f7af1e4dfd6b1125fecde59dbec58",
    "CWV": "0xed494c9e2f8e34e53bdd0ea9b4d80305cb15c5c2",
    "REM": "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
    "XYO": "0x55296f69f40ea6d20e478533c15a6b08b654e758",
    "RNT": "0xff603f43946a3a28df5e6a73172555d8c8b02386",
    "SDA": "0x4212fea9fec90236ecc51e41e2096b16ceb84555",
    "VIDT": "0x445f51299ef3307dbd75036dd896565f5b4bf7a5",
    "CAG": "0x7d4b8cce0591c9044a22ee543533b72e976e36c3",
    "PLBT": "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02",
    "NCT": "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
    "ETHOS": "0x5af2be193a6abca9c8817001f45744777db30756",
    "1WO": "0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23",
    "VIN": "0xf3e014fe81267870624132ef3a646b8e83853a96",
    "EBC": "0x31f3d9d1bece0c033ff78fa6da60a6048f3e13c5",
    "RBLX": "0xfc2c4d8f95002c14ed0a7aa65102cac9e5953b5e",
    "GARD": "0x5c64031c62061865e5fd0f53d3cdaef80f72e99d",
    "GIM": "0xae4f56f072c34c0a65b3ae3e4db797d831439d93",
    "CAJ": "0x3c6a7ab47b5f058be0e7c7fe1a4b7925b8aca40e",
    "TRAC": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    "TFD": "0xe5f166c0d8872b68790061317bb6cca04582c912",
    "HBT": "0xdd6c68bb32462e01705011a4e2ad1a60740f217f",
    "ERC20": "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
    "LEV": "0x0f4ca92660efad97a9a70cb0fe969c755439772c",
    "WTT": "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda",
    "GSC": "0x228ba514309ffdf03a81a205a6d040e429d6e80c",
    "GAT": "0x687174f8c49ceb7729d925c3a961507ea4ac7b28",
    "SXUT": "0x2c82c73d5b34aa015989462b2948cd616a37641f",
    "DCC": "0xffa93aacf49297d51e211817452839052fdfb961",
    "SNTVT": "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
    "SKM": "0x048fe49be32adfc9ed68c37d32b5ec9df17b3603",
    "RTH": "0x3fd8f39a962efda04956981c31ab89fab5fb8bc8",
    "VCT": "0x9746953f5b1324a78132895cfd263f417b0faae3",
    "ZIP": "0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd",
    "QDAO": "0x3166c570935a7d8554c8f4ea792ff965d2efe1f2",
    "BTO": "0x36905fc93280f52362a1cbab151f25dc46742fb5",
    "DRP": "0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed",
    "KCASH": "0x32d74896f05204d1b6ae7b0a3cebd7fc0cd8f9c7",
    "ORS": "0xeb9a4b185816c354db92db09cc3b50be60b901b6",
    "DNA": "0x82b0e50478eeafde392d45d1259ed1071b6fda81",
    "HBX": "0x6fe355c62c6faf6946ce888ffaba9fd12355ae27",
    "IQN": "0x0db8d8b76bc361bacbb72e2c491e06085a97ab31",
    "BZNT": "0xe1aee98495365fc179699c1bb3e761fa716bee62",
    "COS": "0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f",
    "CSNO": "0x29d75277ac7f0335b2165d0895e8725cbf658d73",
    "DPY": "0x6c2adc2073994fb2ccc5032cc2906fa221e9b391",
    "PCH": "0xe3f4b4a5d91e5cb9435b947f090a319737036312",
    "ABYSS": "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
    "ISR": "0xd4a293ae8bb9e0be12e99eb19d48239e8c83a136",
    "SWM": "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
    "CREDO": "0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be",
    "SPND": "0xddd460bbd9f79847ea08681563e8a9696867210c",
    "MVL": "0xa849eaae994fb86afa73382e9bd88c2b6b18dc71",
    "CHR": "0x915044526758533dfb918eceb6e44bc21632060d",
    "PNK": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    "ABL": "0xf8b358b3397a8ea5464f8cc753645d42e14b79ea",
    "GNX": "0x6ec8a24cabdc339a06a172f8223ea557055adaa5",
    "ROC": "0x1bcbc54166f6ba149934870b60506199b6c9db6d",
    "HDG": "0xffe8196bc259e8dedc544d935786aa4709ec3e64",
    "INSTAR": "0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d",
    "TAU": "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
    "MXC": "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
    "UKG": "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
    "BTT": "0xfa456cf55250a839088b27ee32a424d7dacb54ff",
    "SENT": "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
    "PAI": "0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3",
    "TTU": "0x9cda8a60dd5afa156c95bd974428d91a0812e054",
    "CZR": "0x0223fc70574214f65813fe336d870ac47e147fae",
    "LIF": "0xeb9951021698b42e4399f9cbb6267aa35f82d59d",
    "AMLT": "0xca0e7269600d353f70b14ad118a49575455c0f2f",
    "TFL": "0xa7f976c360ebbed4465c2855684d1aae5271efa9",
    "SHIP": "0xe25b0bba01dc5630312b6a21927e578061a13f55",
    "CLN": "0x4162178b78d6985480a308b2190ee5517460406d",
    "LND": "0x0947b0e6d821378805c9598291385ce7c791a6b2",
    "CPT": "0x88d50b466be55222019d71f9e8fae17f5f45fca1",
    "WCO": "0xd44bb6663936cab1310584a277f7daa6943d4904",
    "EXC": "0x00c4b398500645eb5da00a1a379a88b11683ba01",
    "CAN": "0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0",
    "UCASH": "0x92e52a1a235d9a103d970901066ce910aacefd37",
    "BBK": "0x4a6058666cf1057eac3cd3a5a614620547559fc9",
    "ATL": "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
    "AIR": "0x27dce1ec4d3f72c3e457cc50354f1f975ddef488",
    "DACS": "0xa31108e5bab5494560db34c95492658af239357c",
    "YEED": "0xca2796f9f61dc7b238aab043971e49c6164df375",
    "BOE": "0x970e035e2a013cf4becd67e300d65bc32a56d826",
    "NGC": "0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131",
    "UBT": "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
    "ALIS": "0xea610b1153477720748dc13ed378003941d84fab",
    "MTV": "0x8aa688ab789d1848d131c65d98ceaa8875d97ef1",
    "SWC": "0xadf8b8050639b6236915f7516d69de714672f0bf",
    "CHP": "0xf3db7560e820834658b590c96234c333cd3d5e5e",
    "IHT": "0xeda8b016efa8b1161208cf041cd86972eee0f31e",
    "SPC": "0x8069080a922834460c3a092fb2c1510224dc066b",
    "BPT": "0x327682779bab2bf4d1337e8974ab9de8275a7ca8",
    "PLTC": "0x0c6e8a8358cbde54f8e4cd7f07d5ac38aec8c5a4",
    "SUB": "0x8d75959f1e61ec2571aa72798237101f084de63a",
    "HBZ": "0xe34e1944e776f39b9252790a0527ebda647ae668",
    "PTT": "0x4689a4e169eb39cc9078c0940e21ff1aa8a39b9c",
    "IDH": "0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0",
    "CBC": "0x26db5439f651caf491a87d48799da81f191bdb6b",
    "PCL": "0x0f02e27745e3b6e9e1310d19469e2b5d7b5ec99a",
    "ECOM": "0x171d750d42d661b62c277a6b486adb82348c3eca",
    "ART": "0xfec0cf7fe078a500abf15f1284958f22049c2c7e",
    "XES": "0xa017ac5fac5941f95010b12570b812c974469c2c",
    "AMPL": "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
    "FDZ": "0x23352036e911a22cfc692b5e2e196692658aded9",
    "ELAC": "0xec6c861c2a2b1e5ff5336731bc80c29dbff88273",
    "QNTU": "0x4234f63b1d202f6c016ca3b6a0d41d7d85f17716",
    "SPANK": "0x42d6622dece394b54999fbd73d108123806f6a18",
    "DTX": "0x765f0c16d1ddc279295c1a7c24b0883f62d33f75",
    "LIKE": "0x02f61fd266da6e8b102d4121f5ce7b992640cf98",
    "YEE": "0x922105fad8153f516bcfb829f56dc097a0e1d705",
    "GRID": "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
    "FLUZ": "0x954b5de09a55e59755acbda29e1eb74a45d30175",
    "ASTRO": "0x7b22938ca841aa392c93dbb7f4c42178e3d65e88",
    "FTN": "0x56325d180ec3878a9028afc7b0edcee7486cc9df",
    "BLT": "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
    "TRST": "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
    "KRL": "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
    "BKX": "0x45245bc59219eeaaf6cd3f382e078a461ff9de7b",
    "INT": "0x0b76544f6c413a555f309bf76260d1e02377c02a",
    "EDN": "0x05860d453c7974cbf46508c06cba14e211c629ce",
    "ZUC": "0x6b4689e4514957699edeb2ee91c947f18e439806",
    "CHX": "0x1460a58096d80a50a2f1f956dda497611fa4f165",
    "IMT": "0x13119e34e140097a507b07a5564bde1bc375d9e6",
    "QCH": "0x687bfc3e73f6af55f0ccca8450114d107e781a0e",
    "CRD": "0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc",
    "CYMT": "0x78c292d1445e6b9558bf42e8bc369271ded062ea",
    "PST": "0x5d4abc77b8405ad177d8ac6682d584ecbfd46cec",
    "AKRO": "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7",
    "SSP": "0x624d520bab2e4ad83935fa503fb130614374e850",
    "COV": "0xe2fb6529ef566a080e6d23de0bd351311087d567",
    "WGP": "0xdd94842c15abfe4c9bafe4222ade02896beb064c",
    "NCC": "0x5d48f293baed247a2d0189058ba37aa238bd4725",
    "UBEX": "0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1",
    "SKCH": "0x70c621f949b6556c4545707a2d5d73a776b98359",
    "FNKOS": "0x0707681f344deb24184037fc0228856f2137b02e",
    "DAX": "0x0b4bdc478791897274652dc15ef5c135cae61e60",
    "LIFE": "0xff18dbc487b4c2e3222d115952babfda8ba52f5f",
    "TIME": "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53",
    "FUCK": "0x65be44c747988fbf606207698c944df4442efe19",
    "BOXX": "0x780116d91e5592e58a3b3c76a351571b39abcec6",
    "ADST": "0x422866a8f0b032c5cf1dfbdef31a20f4509562b0",
    "MTN": "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
    "ZCO": "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
    "CEEK": "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
    "EDG": "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
    "RPD": "0x4bf4f2ea258bf5cb69e9dc0ddb4a7a46a7c10c53",
    "EXRN": "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
    "CEN": "0x0bc61dded5f6710c637cf8288eb6058766ce1921",
    "HMQ": "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
    "SS": "0xbbff862d906e348e9946bfb2132ecb157da3d4b4",
    "NBC": "0x9f195617fa8fbad9540c5d113a99a0a0172aaedc",
    "DAT": "0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
    "HSC": "0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f",
    "DXT": "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
    "LEDU": "0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765",
    "OPENC": "0x9d86b1b2554ec410eccffbf111a6994910111340",
    "PRE": "0x88a3e4f35d64aad41a6d4030ac9afe4356cb84fa",
    "MIC": "0x3a1237d38d0fb94513f85d61679cad7f38507242",
    "OSA": "0xc6abf3c09341741ac6041b0b08195701bdfd460c",
    "LSTR": "0xc80dae9129389c4ef6e7dbfaee40f28de49de3a6",
    "TOL": "0xd07d9fe2d2cc067015e2b4917d24933804f42cfa",
    "PROM": "0xfc82bb4ba86045af6f327323a46e80412b91b27d",
    "MOZO": "0x44bf22949f9cc84b61b9328a9d885d1b5c806b41",
    "ETBS": "0x1b9743f556d65e757c4c650b4555baf354cb8bd3",
    "NEXT": "0x4e005a760e00e17c4912a8070eec047cfecbabbb",
    "ZPR": "0xb5b8f5616fe42d5ceca3e87f3fddbdd8f496d760",
    "BCDT": "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
    "NTK": "0x69beab403438253f13b6e92db91f7fb849258263",
    "C8": "0xd42debe4edc92bd5a3fbb4243e1eccf6d63a4a5d",
    "WET": "0x36d10c6800d569bb8c4fe284a05ffe3b752f972c",
    "EKO": "0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee",
    "CXO": "0xb6ee9668771a79be7967ee29a63d4184f8097143",
    "XNN": "0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
    "RTE": "0x436f0f3a982074c4a05084485d421466a994fe53",
    "MRK": "0xf453b5b9d4e0b5c62ffb256bb2378cc2bc8e8a89",
    "FACE": "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
    "SKB": "0x4af328c52921706dcb739f25786210499169afe6",
    "FTI": "0x943ed852dadb5c3938ecdc6883718df8142de4c8",
    "MAS": "0x23ccc43365d9dd3882eab88f43d515208f832430",
    "BOK": "0x27c743954bce1bfaef8bcbd685527531001d88d7",
    "ORME": "0xc96df921009b790dffca412375251ed1a2b75c60",
    "HAT": "0x9002d4485b7594e3e850f0a206713b305113f69e",
    "FTX": "0xd559f20296ff4895da39b5bd9add54b442596a61",
    "FREE": "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
    "NUG": "0x245ef47d4d0505ecf3ac463f4d81f41ade8f1fd1",
    "BITPARK": "0xf3d29fb98d2dc5e78c87198deef99377345fd6f1",
    "COVA": "0xb37a769b37224449d92aac57de379e1267cd3b00",
    "CARD": "0x954b890704693af242613edef1b603825afcd708",
    "IONC": "0xbc647aad10114b89564c0a7aabe542bd0cf2c5af",
    "VLD": "0x922ac473a3cc241fd3a0049ed14536452d58d73c",
    "AMN": "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c",
    "STK": "0xae73b38d1c9a8b274127ec30160a4927c4d71824",
    "UQC": "0xd01db73e047855efb414e6202098c4be4cd2423b",
    "SNOV": "0xbdc5bac39dbe132b1e030e898ae3830017d7d969",
    "FXT": "0x1829aa045e21e0d59580024a951db48096e01782",
    "MVC": "0xb17df9a3b09583a9bdcf757d6367171476d4d8a3",
    "GMB": "0xa0008f510fe9ee696e7e320c9e5cbf61e27791ee",
    "DBET": "0x9b68bfae21df5a510931a262cecf63f41338f264",
    "DIT": "0xf14922001a2fb8541a433905437ae954419c2439",
    "TALAO": "0x1d4ccc31dab6ea20f461d329a0562c1c58412515",
    "DRT": "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
    "STX": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    "FKX": "0x009e864923b49263c7f10d19b7f8ab7a9a5aad33",
    "X8X": "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
    "HOLD": "0xd6e1401a079922469e9b965cb090ea6ff64c6839",
    "ICNQ": "0xb3e2cb7cccfe139f8ff84013823bf22da6b6390a",
    "ZLA": "0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16",
    "UP": "0x6ba460ab75cd2c56343b3517ffeba60748654d26",
    "FLP": "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
    "AVT": "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
    "CPY": "0xf44745fbd41f6a1ba151df190db0564c5fcc4410",
    "HKN": "0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f",
    "SPD": "0x1dea979ae76f26071870f824088da78979eb91c8",
    "SWT": "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
    "VDX": "0x91e64f39c1fe14492e8fdf5a8b0f305bd218c8a1",
    "UFR": "0xea097a2b1db00627b2fa17460ad260c016016977",
    "MTX": "0x0af44e2784637218dd1d32a322d44e603a8f0c6a",
    "CAPP": "0x04f2e7221fdb1b52a68169b25793e51478ff0329",
    "DEB": "0x151202c9c18e495656f372281f493eb7698961d5",
    "IPL": "0x64cdf819d3e75ac8ec217b3496d7ce167be42e80",
    "AWC": "0xad22f63404f7305e4713ccbd4f296f34770513f4",
    "BC": "0x2ecb13a8c458c379c4d9a7259e202de03c8f3d19",
    "ZAP": "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
    "AID": "0x37e8789bb9996cac9156cd5f5fd32599e6b91289",
    "GLA": "0x71d01db8d6a2fbea7f8d434599c237980c234e4c",
    "INXT": "0xa8006c4ca56f24d6836727d106349320db7fef82",
    "ATN": "0x461733c17b0755ca5649b6db08b3e213fcf22546",
    "DRPU": "0xe30e02f049957e2a5907589e06ba646fb2c321ba",
    "CYFM": "0x32b87fb81674aa79214e51ae42d571136e29d385",
    "FLIXX": "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
    "SPHTX": "0x3833dda0aeb6947b98ce454d89366cba8cc55528",
    "TYPE": "0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f",
    "NXX": "0x7627de4b93263a6a7570b8dafa64bae812e5c394",
    "VSF": "0xac9ce326e95f51b5005e9fe1dd8085a01f18450c",
    "PTOY": "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
    "PLAY": "0xe477292f1b3268687a29376116b0ed27a9c76170",
    "FOTA": "0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c",
    "REAL": "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
    "TRXC": "0xad5fe5b0b8ec8ff4565204990e4405b2da117d8e",
    "TMT": "0x3209f98bebf0149b769ce26d71f7aea8e435efea",
    "GMT": "0xb3bd49e28f8f832b8d1e246106991e546c323502",
    "PARETO": "0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc",
    "A": "0xffc63b9146967a1ba33066fb057ee3722221acf0",
    "LCS": "0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8",
    "HERO": "0x02585e4a14da274d02df09b222d4606b10a4e940",
    "STRC": "0x46492473755e8df960f8034877f61732d718ce96",
    "DOV": "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
    "ELEC": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
    "J8T": "0x0d262e5dc4a06a0f1c90ce79c7a60c09dfc884e4",
    "ESS": "0xfc05987bd2be489accf0f509e44b0145d68240f7",
    "FTT": "0x2aec18c5500f21359ce1bea5dc1777344df4c0dc",
    "SVD": "0xbdeb4b83251fb146687fa19d1c660f99411eefe3",
    "CNUS": "0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308",
    "NER": "0xee5dfb5ddd54ea2fb93b796a8a1b83c3fe38e0e6",
    "MNTP": "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
    "OWN": "0x170b275ced089fffaebfe927f445a350ed9160dc",
    "BANCA": "0x998b3b82bc9dba173990be7afb772788b5acb8bd",
    "KZE": "0x8de67d55c58540807601dbf1259537bc2dffc84d",
    "PBL": "0x55648de19836338549130b1af587f16bea46f66b",
    "BNTY": "0xd2d6158683aee4cc838067727209a0aaf4359de3",
    "PAL": "0xfedae5642668f8636a11987ff386bfd215f942ee",
    "NOW": "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    "QBX": "0x2467aa6b5a2351416fd4c3def8462d841feeecec",
    "LNX": "0x5e3845a1d78db544613edbe43dc1ea497266d3b8",
    "COFI": "0x3136ef851592acf49ca4c825131e364170fa32b3",
    "UBC": "0x2d3e7d4870a51b918919e7b851fe19983e4c38d5",
    "PKT": "0x2604fa406be957e542beb89e6754fcde6815e83f",
    "SPN": "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
    "EMV": "0xb802b24e0637c2b87d2e8b7784c055bbe921011a",
    "SENC": "0xa13f0743951b4f6e3e3aa039f682e17279f52bc3",
    "MIB": "0x146d8d942048ad517479c9bab1788712af180fde",
    "BLUE": "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
    "BETHER": "0x14c926f2290044b647e1bf2072e67b495eff1905",
    "SNTR": "0x2859021ee7f2cb10162e67f33af2d22764b31aff",
    "HTB": "0x6be61833fc4381990e82d7d4a9f4c9b3f67ea941",
    "ATX": "0x1a0f2ab46ec630f9fd638029027b552afa64b94c",
    "PHI": "0x13c2fab6354d3790d8ece4f0f1a3280b4a25ad96",
    "BDG": "0x1961b3331969ed52770751fc718ef530838b6dee",
    "XPA": "0x90528aeb3a2b736b780fd1b6c478bb7e1d643170",
    "BTCONE": "0x87f5e8c3425218837f3cb67db941af0c01323e56",
    "TSL": "0x03806ce5ef69bd9780edfb04c29da1f23db96294",
    "PASS": "0xee4458e052b533b1aabd493b5f8c4d85d7b263dc",
    "PDATA": "0x0db03b6cde0b2d427c64a04feafd825938368f1f",
    "ZXC": "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
    "IXT": "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
    "TIE": "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0",
    "GEM": "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
    "LION": "0x2167fb82309cf76513e83b25123f8b0559d6b48f",
    "PYLNT": "0x7703c35cffdc5cda8d27aa3df2f9ba6964544b6e",
    "RLX": "0x4a42d2c580f83dce404acad18dab26db11a1750e",
    "CTX": "0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66",
    "MFTU": "0x05d412ce18f24040bb3fa45cf2c69e506586d8e8",
    "CMCT": "0x47bc01597798dcd7506dcca36ac4302fc93a8cfb",
    "IFOOD": "0x81e74a3ea4bab2277aa3b941e9d9f37b08ac5374",
    "ONOT": "0xb31c219959e06f9afbeb36b388a4bad13e802725",
    "FID": "0x52fb36c83ad33c1824912fc81071ca5eeb8ab390",
    "BTCA": "0x02725836ebf3ecdb1cdf1c7b02fcbbfaa2736af8",
    "NANJ": "0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265",
    "ADB": "0x2baac9330cf9ac479d819195794d79ad0c7616e3",
    "BETR": "0x763186eb8d4856d536ed4478302971214febc6a9",
    "ETK": "0x3c4a3ffd813a107febd57b2f01bc344264d90fde",
    "RVT": "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
    "E4ROW": "0xce5c603c78d047ef43032e96b5b785324f753a4f",
    "THRT": "0x4f27053f32eda8af84956437bc00e5ffa7003287",
    "ONG": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
    "RMESH": "0x8d5682941ce456900b12d47ac06a88b47c764ce1",
    "ZIPT": "0xedd7c94fd7b4971b916d15067bc454b9e1bad980",
    "TTV": "0xa838be6e4b760e6061d4732d6b9f11bf578f9a76",
    "LNK": "0xe2e6d4be086c6938b53b22144855eef674281639",
    "LALA": "0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9",
    "ONL": "0x6863be0e7cf7ce860a574760e9020d519a8bdc47",
    "FYP": "0x8f0921f30555624143d427b340b1156914882c10",
    "SEAL": "0xd7b3669c7d3e38ab5a441383d41f25e003e02148",
    "MLC": "0xc72ed4445b3fe9f0863106e344e241530d338906",
    "XNK": "0xbc86727e770de68b1060c91f6bb6945c73e10388",
    "ZMN": "0x554ffc77f4251a9fb3c0e3590a6a205f8d4e067d",
    "MOT": "0x263c618480dbe35c300d8d5ecda19bbb986acaed",
    "XD": "0x24dcc881e7dd730546834452f21872d5cb4b5293",
    "LCT": "0x05c7065d644096a4e4c3fe24af86e36de021074b",
    "AOG": "0x8578530205cecbe5db83f7f29ecfeec860c297c2",
    "PRIX": "0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a",
    "RTB": "0xec491c1088eae992b7a214efb0a266ad0927a72a",
    "STQ": "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
    "NPER": "0x4ce6b362bc77a24966dda9078f9cef81b3b886a7",
    "SPX": "0x05aaaa829afa407d83315cded1d45eb16025910c",
    "MNC": "0xbac7a1798350cdf2dbfe0c210c2c9861223f4b31",
    "ZEON": "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
    "OPTI": "0x832904863978b94802123106e6eb491bdf0df928",
    "VIEW": "0xf03f8d65bafa598611c3495124093c56e8f638f0",
    "COB": "0xb2f7eb1f2c37645be61d73953035360e768d81e6",
    "OLE": "0x9d9223436ddd466fc247e9dbbd20207e640fef58",
    "AXN": "0x304281f3d1023a2039ea930c65f8f721d7c746c8",
    "ERO": "0x74ceda77281b339142a36817fa5f9e29412bab85",
    "SKILL": "0x417d6feeae8b2fcb73d14d64be7f192e49431978",
    "MORE": "0x501262281b2ba043e2fbf14904980689cddb0c78",
    "BTB": "0xc429e7b63dc30b51f5a7e4be23fd5eb4baf8a1c3",
    "DTH": "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
    "BCO": "0x865d176351f287fe1b0010805b110d08699c200a",
    "S": "0x96b0bf939d9460095c15251f71fda11e41dcbddb",
    "XBP": "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
    "TIX": "0xea1f346faf023f974eb5adaf088bbcdf02d761f4",
    "NPLC": "0x97fb6fc2ad532033af97043b563131c5204f8a35",
    "WTL": "0x9a0587eae7ef64b2b38a10442a44cfa43edd7d2a",
    "OMX": "0xb5dbc6d3cf380079df3b27135664b6bcf45d1869",
    "ACTP": "0x7b2df125567815ac9b57da04b620f50bc93b320c",
    "CCH": "0x40adfc7c23c22cc06f94f199a4750d7196f46fbe",
    "TRAK": "0x12759512d326303b45f1cec8f7b6fd96f387778e",
    "HB": "0x877c7deb5eb1fc5faad30c71e3a6e39dc8b1519f",
    "LFC": "0x95c9bd1f81cee7391da3eac81693e60f3292c1e0",
    "METM": "0xfef3884b603c33ef8ed4183346e093a173c94da6",
    "CRED": "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd",
    "EVE": "0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c",
    "EBTC": "0xeb7c20027172e5d143fb030d50f91cece2d1485d",
    "ACE": "0x06147110022b768ba8f99a8f385df11a151a9cc8",
    "IPSX": "0x001f0aa5da15585e5b2305dbab2bac425ea71007",
    "RCT": "0x13f25cd52b21650caa8225c9942337d914c9b030",
    "BTR": "0x499a6b77bc25c26bcf8265e2102b1b3dd1617024",
    "CST": "0xbb49a51ee5a66ca3a8cbe529379ba44ba67e6771",
    "BBN": "0x35a69642857083ba2f30bfab735dacc7f0bac969",
    "SUR": "0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf",
    "PSM": "0x1a66e09f7dccc10eae46e27cfa6b8d44a50df1e7",
    "TGAME": "0xf8e06e4e4a80287fdca5b02dccecaa9d0954840f",
    "BBO": "0x84f7c44b6fed1080f647e354d552595be2cc602f",
    "DAV": "0xd82df0abd3f51425eb15ef7580fda55727875f14",
    "ADI": "0x8810c63470d38639954c6b41aac545848c46484a",
    "PARKGENE": "0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d",
    "BBI": "0x37d40510a2f5bc98aa7a0f7bf4b3453bcfb90ac1",
    "MFG": "0x6710c63432a2de02954fc0f851db07146a6c0312",
    "PMNT": "0x81b4d08645da11374a03749ab170836e4e539767",
    "TDP": "0x5b11aacb6bddb9ffab908fdce739bf4aed554327",
    "IND": "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
    "WIN": "0x899338b84d25ac505a332adce7402d697d947494",
    "HGT": "0xba2184520a1cc49a6159c57e61e1844e085615b6",
    "STAR": "0xf70a642bd387f94380ffb90451c2c81d4eb82cbc",
    "EVC": "0xb62d18dea74045e822352ce4b3ee77319dc5ff2f",
    "IDXM": "0xcc13fc627effd6e35d2d2706ea3c4d7396c610ea",
    "CCRB": "0xe4c94d45f7aef7018a5d66f44af780ec6023378e",
    "WPP": "0x056dd20b01799e9c1952c7c9a5ff4409a6110085",
    "RPM": "0x490c95be16384e1f28b9e864e98ffecfcbff386d",
    "ABX": "0x9a794dc1939f1d78fa48613b89b8f9d0a20da00e",
    "INV": "0xece83617db208ad255ad4f45daf81e25137535bb",
    "BOUTS": "0x139d9397274bb9e2c29a9aa8aa0b5874d30d62e3",
    "SRCOIN": "0xef8cf79c21637fc6f951bcac348915508a639a41",
    "TBX": "0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b",
    "ATMI": "0x97aeb5066e1a590e868b511457beb6fe99d329f5",
    "NIO": "0x5554e04e76533e1d14c52f05beef6c9d329e1e30",
    "LUC": "0x5dbe296f97b23c4a6aa6183d73e574d02ba5c719",
    "ROBET": "0x2344871f523cbb28a4f60045531184cf1f03ad24",
    "SCT": "0x63b992e6246d88f07fc35a056d2c365e6d441a3d",
    "HER": "0x491c9a23db85623eed455a8efdd6aba9b911c5df",
    "BNANA": "0x07ef9e82721ac16809d24dafbe1792ce01654db4",
    "BEAT": "0x2fb12bccf6f5dd338b76be784a93ade072425690",
    "HORSE": "0x5b0751713b2527d7f002c0c4e2a37e1219610a6b",
    "BERRY": "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
    "REF": "0x89303500a7abfb178b274fd89f2469c264951e1f",
    "TIG": "0xeee2d00eb7deb8dd6924187f5aa3496b7d06e62a",
    "CAT": "0x56ba2ee7890461f463f7be02aac3099f6d5811a8",
    "PYN": "0x0142c3b2fc51819b5af5dfc4aa52df9722790851",
    "XCLR": "0x1e26b3d07e57f453cae30f7ddd2f945f5bf3ef33",
    "CL": "0xe81d72d14b1516e68ac3190a46c93302cc8ed60f",
    "SCL": "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
    "AUC": "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
    "TEAM": "0x1c79ab32c66acaa1e9e81952b8aaa581b43e54e7",
    "ICE": "0x5a84969bb663fb64f6d015dcf9f622aedc796750",
    "SURE": "0x95382ac82e886a367bac9e1e23beabe569bcfed8",
    "ELY": "0xa95592dcffa3c080b4b40e459c5f5692f67db7f8",
    "JSE": "0x2d184014b5658c453443aa87c8e9c4d57285620b",
    "TNS": "0xb0280743b44bf7db4b6be482b2ba7b75e5da096c",
    "CRC": "0xf41e5fbc2f6aac200dd8619e121ce1f05d150077",
    "BON": "0xcc34366e3842ca1bd36c1f324d15257960fcc801",
    "SGN": "0xb2135ab9695a7678dd590b1a996cb0f37bcb0718",
    "FREC": "0x17e67d1cb4e349b9ca4bc3e17c7df2a397a7bb64",
    "SIG": "0x6888a16ea9792c15a4dcf2f6c623d055c8ede792",
    "MESH": "0xf03045a4c8077e38f3b8e2ed33b8aee69edf869f",
    "ING": "0x24ddff6d8b8a42d835af3b440de91f3386554aa4",
    "DAN": "0x9b70740e708a083c6ff38df52297020f5dfaa5ee",
    "DDF": "0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38",
    "ALT": "0x419b8ed155180a8c9c64145e76dad49c0a4efb97",
    "WISH": "0x1b22c32cd936cb97c28c5690a0695a82abf688e6",
    "OXY": "0x869b1f57380ae501d387b19262efd3c0eb7501b0",
    "300": "0xaec98a708810414878c3bcdf46aad31ded4a4557",
    "PKG": "0x02f2d4a04e6e01ace88bd2cd632875543b2ef577",
    "EZT": "0x5e6016ae7d7c49d347dcf834860b9f3ee282812b",
    "ESZ": "0xe8a1df958be379045e2b46a31a98b93a2ecdfded",
    "SAT": "0xc56b13ebbcffa67cfb7979b900b736b3fb480d78",
    "VIU": "0x464baddce9bd32581a7d59d9bb8350c7c7764668",
    "FLOT": "0x049399a6b048d52971f7d122ae21a1532722285f",
    "WEB": "0x840fe75abfadc0f2d54037829571b2782e919ce4",
    "IFT": "0x7654915a1b82d6d2d0afc37c52af556ea8983c7e",
    "HQT": "0x3e1d5a855ad9d948373ae68e4fe1f094612b1322",
    "WAB": "0x4bbbc57af270138ef2ff2c50dbfad684e9e0e604",
    "WTN": "0x0ea984e789302b7b612147e4e4144e64f21425eb",
    "BTK": "0xdb8646f5b487b5dd979fac618350e85018f557d4",
    "SONIQ": "0x1c62aca2b7605db3606eacda7bc67a1857ddb8ff",
    "SPF": "0x85089389c14bd9c77fc2b8f0c3d1dc3363bf06ef",
    "MCAP": "0x93e682107d1e9defb0b5ee701c71707a4b2e46bc",
    "NAVI": "0x588047365df5ba589f923604aac23d673555c623",
    "FND": "0x4df47b4969b2911c966506e3592c41389493953b",
    "JET": "0x8727c112c712c4a03371ac87a74dd6ab104af768",
    "DOR": "0x906b3f8b7845840188eab53c3f5ad348a787752f",
    "DGS": "0x6aedbf8dff31437220df351950ba2a3362168d1b",
    "PTS": "0x540e5fff293f523acd26291b5bc7ac5713991feb",
    "NOBS": "0xf4faea455575354d2699bc209b0a65ca99f69982",
    "INVE": "0xdac4ae188ace3c8985765edc6c9b4739d4845ddc",
    "THM": "0xf1dd5964eabcc6e86230fa6f222677cfdaaf9f0e",
    "DTRC": "0xc20464e0c373486d2b3335576e83a218b1618a5e",
    "EPY": "0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d",
    "INCO": "0x4d8bfe7ea0f46486fd40fc4df60cf39f7568bee8",
    "WRC": "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
    "WYS": "0xd8950fdeaa10304b7a7fd03a2fc66bc39f3c711a",
    "KUE": "0xdf1338fbafe7af1789151627b886781ba556ef9a",
    "SCC": "0x74fd51a98a4a1ecbef8cc43be801cce630e260bd",
    "TIC": "0x72430a612adc007c50e3b6946dbb1bb0fd3101d1",
    "VRS": "0x92e78dae1315067a8819efd6dca432de9dcde2e9",
    "INCX": "0xa984a92731c088f1ea4d53b71a2565a399f7d8d5",
    "DGPT": "0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1",
    "BTCL": "0x5acd19b9c91e596b1f062f18e3d02da7ed8d1e50",
    "CDX": "0x6fff3806bbac52a20e0d79bc538d527f6a22c96b",
    "SKIN": "0x2bdc0d42996017fce214b21607a515da41a9e0c5",
    "ETA": "0x9195e00402abe385f2d00a32af40b271f2e87925",
    "MCI": "0x138a8752093f4f9a79aaedf48d4b9248fab93c9c",
    "BITX": "0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007",
    "JC": "0xe2d82dc7da0e6f882e96846451f4fabcc8f90528",
    "ETHD": "0xdbfb423e9bbf16294388e07696a5120e4ceba0c5",
    "EMB": "0x386467f1f3ddbe832448650418311a479eecfc57",
    "ELET": "0x6c37bf4f042712c978a73e3fd56d1f5738dd7c43",
    "KIND": "0x4618519de4c304f3444ffa7f812dddc2971cc688",
    "SGP": "0x33c623a2baafeb8d15dfaf3ce44095efec83d72c",
    "BEE": "0x4d8fc1453a0f359e99c9675954e656d80d996fbf",
    "TCH": "0x9972a0f24194447e73a7e8b6cd26a52e02ddfad5",
    "AIX": "0x1063ce524265d5a3a624f4914acd573dd89ce988",
    "ALI": "0x4289c043a12392f1027307fb58272d8ebd853912",
    "EARTH": "0x900b4449236a7bb26b286601dd14d2bde7a6ac6c",
    "QUIN": "0x86e44543164d9b97b14ef7f6f3ab7ba670cab346",
    "TKA": "0xdae1baf249964bc4b6ac98c3122f0e3e785fd279",
    "SNR": "0x47d1a59cbdd19aee060c859c0009277e245328ae",
    "PGT": "0x9b3e946e1a8ea0112b147af4e6e020752f2446bc",
    "CJT": "0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17",
    "MNE": "0x1a95b271b0535d15fa49932daba31ba612b52946",
    "KNDC": "0x8e5610ab5e39d26828167640ea29823fe1dd5843",
    "JOT": "0xdb455c71c1bc2de4e80ca451184041ef32054001",
    "AGLT": "0x72c9fb7ed19d3ce51cea5c56b3e023cd918baadf",
    "ZINC": "0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea",
    "SGR": "0xcb5a05bef3257613e984c17dbcf039952b6d883f",
    "UCN": "0xaaf37055188feee4869de63464937e683d61b2a1",
    "WILD": "0xd3c00772b24d997a812249ca637a921e81357701",
    "LOCI": "0x9c23d67aea7b95d80942e3836bcdf7e708a747c2",
    "WIT": "0xe13ef257cf4d5df928ca11d230427c037666d466",
    "IG": "0x8a88f04e0c905054d2f33b26bb3a46d7091a039a",
    "ARB": "0xafbec4d65bc7b116d85107fd05d912491029bf46",
    "ITT": "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
    "REBL": "0x5f53f7a8075614b699baad0bc2c899f4bad8fbbf",
    "RNTB": "0x1fe70be734e473e5721ea57c8b5b01e6caa52686",
    "WIZ": "0x2f9b6779c37df5707249eeb3734bbfc94763fbe2",
    "ARCT": "0x1245ef80f4d9e02ed9425375e8f649b9221b31d8",
    "IMP": "0x48ff53777f747cfb694101222a944de070c15d36",
    "HELP": "0xbbc2045d335cb224228f1850b29173d9d7d7b989",
    "NDC": "0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970",
    "SPARTA": "0x24aef3bf1a47561500f9430d74ed4097c47f51f2",
    "TKP": "0xd31695a1d35e489252ce57b129fd4b1b05e6acac",
    "ARY": "0xa5f8fc0921880cb7342368bd128eb8050442b1a1",
    "FRV": "0x48df4e0296f908ceab0428a5182d19b31fc037d6",
    "LATX": "0x2f85e502a988af76f7ee6d83b7db8d6c0a823bf9",
    "STU": "0x0371a82e4a9d0a4312f3ee2ac9c6958512891372",
    "NTWK": "0x2233799ee2683d75dfefacbcd2a26c78d34b470d",
    "HAND": "0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7",
    "NOX": "0xec46f8207d766012454c408de210bcbc2243e71c",
    "BTRN": "0x03c780cd554598592b97b7256ddaad759945b125",
    "IXE": "0x7a07e1a0c2514d51132183ecfea2a880ec3b7648",
    "EZW": "0x78a2a1029e3168b49d3a276c787050ff5106dcf2",
    "LNC": "0x63e634330a20150dbb61b15648bc73855d6ccf07",
    "HUR": "0xcdb7ecfd3403eef3882c65b761ef9b5054890a47",
    "KNT": "0xff5c25d2f40b47c4a37f989de933e26562ef0ac0",
    "COU": "0xf091cf09c51811819db705710e9634b8bf18f164",
    "YUP": "0xd9a12cde03a86e800496469858de8581d3a5353d",
    "OTN": "0x881ef48211982d01e2cb7092c915e647cd40d85c",
    "QVT": "0x1183f92a5624d68e85ffb9170f16bf0443b4c242",
    "ORI": "0xd2fa8f92ea72abb35dbd6deca57173d22db2ba49",
    "NRP": "0x3918c42f14f2eb1168365f911f63e540e5a306b5",
    "TEU": "0xeeac3f8da16bb0485a4a11c5128b0518dac81448",
    "STAC": "0x9a005c9a89bd72a4bd27721e7a09a3c11d2b03c4",
    "FBN": "0x568f9f32969e29b5ce1a4545be5398e8cc7c4401",
    "ZNT": "0x4fa000df40c06fc8c7d9179661535846b7cd4f87",
    "RLT": "0xcced5b8288086be8c38e23567e684c3740be4d48",
    "CCO": "0x679badc551626e01b23ceecefbc9b877ea18fc46",
    "PFR": "0xb41422d5a1d5d5c73c229686935b40f881502785",
    "IBT": "0x791425156956e39f2ab8ab06b79de189c18e95e5",
    "ACC": "0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2",
    "KWH": "0xb8ddc930c2bab6c71610a2be639036e829f9c10b",
    "ELTCOIN": "0x44197a4c44d6a059297caf6be4f7e172bd56caaf",
    "TKR": "0xb45a50545beeab73f38f31e5973768c421805e5e",
    "BUL": "0x0775c81a273b355e6a5b76e240bf708701f00279",
    "ZEUS": "0xe7e4279b80d319ede2889855135a22021baf0907",
    "KWATT": "0x241ba672574a78a3a604cdd0a94429a73a84a324",
    "MICRO": "0xbe6c8f2810ef39420d2dc2901b8414c8c45fee6d",
    "HGO": "0xaaa89105dab822dbc9a6de64a23d045d99d5fd36",
    "SMS": "0x39013f961c378f02c2b82a6e1d31e9812786fd9d",
    "SIM": "0x7528e3040376edd5db8263db2f5bd1bed91467fb",
    "CYL": "0x26cb3641aaa43911f1d4cb2ce544eb652aac7c47",
    "NDX": "0x1966d718a565566e8e202792658d7b5ff4ece469",
    "FNTB": "0xbd4b60a138b3fce3584ea01f50c0908c18f9677a",
    "APC": "0x15bda08c3afbf5955d6e9b235fd55a1fd0dbc829",
    "WELL": "0x684e2dcb12bb755237e07242529c82f78a84ea61",
    "CCT": "0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22",
    "SHP": "0xef2463099360a085f1f10b076ed72ef625497a06",
    "HST": "0x554c20b7c486beee439277b4540a434566dc4c02",
    "BNC": "0xef51c9377feb29856e61625caf9390bd0b67ea18",
    "CTRT": "0x8606a8f28e1e2fd50b9074d65c01548b1f040b32",
    "YLC": "0x21d5678a62dfe63a47062469ebb2fac2817d8832",
    "JS": "0x5046e860ff274fb8c66106b0ffb8155849fb0787",
    "VIKKY": "0xd2946be786f35c3cc402c29b323647abda799071",
    "CNCT": "0x54a9ed327f2614316914c3f3a782a77d0aa47aee",
    "TVNT": "0x5635ddeabf9cdda686995fe90beb5411831563fc",
    "POS": "0xee609fe292128cad03b786dbb9bc2634ccdbe7fc",
    "MASH": "0xa0d440c6da37892dc06ee7930b2eede0634fd681",
    "ETG": "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
    "DPP": "0x01b3ec4aae1b8729529beb4965f27d008788b0eb",
    "HSN": "0x567300e14f8d67e1f6720a95291dce2511a86723",
    "ALX": "0x49b127bc33ce7e1586ec28cec6a65b112596c822",
    "IBTC": "0x0784dbabb6c6834bddfb7cfee116ba049e5dafab",
    "EAGLE": "0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9",
    "XBL": "0x49aec0752e68d0282db544c677f6ba407ba17ed7",
    "ICT": "0x187c4b0e3819017a5cf07af81a4e2b16166aabc6",
    "BAS": "0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1",
    "DALC": "0x07d9e49ea402194bf48a8276dafb16e4ed633317",
    "DELTA": "0xde1e0ae6101b46520cf66fdc0b1059c5cc3d106c",
    "XOV": "0x153ed9cc1b792979d2bde0bbf45cc2a7e436a5f9",
    "NTO": "0x8a99ed8a1b204903ee46e733f2c1286f6d20b177",
    "MRL": "0x82125afe01819dff1535d0d6276d57045291b6c0",
    "ETHM": "0xd5dad1db7f112037c0c6cf0792dc2a7866bfd136",
    "FTXT": "0x41875c2332b0877cdfaa699b641402b7d4642c32",
    "TGT": "0xac3da587eac229c9896d919abc235ca4fd7f72c1",
    "BLN": "0x0c658fa2eaa292e8dca085dab0e5cbd2da21c494",
    "GRMD": "0xb444208cb0516c150178fcf9a52604bc04a1acea",
    "BRAT": "0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891",
    "CTIC3": "0x0743392132d1a03a902c477e5a176f256ba3220c",
    "BNN": "0xda80b20038bdf968c7307bb5907a469482cf6251",
    "FAITH": "0xe531642e9bb5d027e9c20e03284287b97919a9a5",
    "POSS": "0x6b193e107a773967bd821bcf8218f3548cfa2503",
    "QURO": "0x076a93a40bf9e0d21d3f75dd1e0584ddbe0f9d1a",
    "AAA": "0xd938137e6d96c72e4a6085412ada2dad78ff89c4",
    "AI": "0x5121e348e897daef1eef23959ab290e5557cf274",
    "TRDT": "0x33f90dee07c6e8b9682dd20f73e6c358b2ed0f03",
    "ORM": "0xd51e852630debc24e9e1041a03d80a0107f8ef0c",
    "RIYA": "0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3",
    "RGS": "0x4c383bdcae52a6e1cb810c76c70d6f31a249ec9b",
    "BITS": "0xc38f1fb49acdf2f1213caf3319f6eb3ea2cb7527"
  }
};
// CONCATENATED MODULE: ../send-crypto/build/module/handlers/ERC20/ERC20Handler.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERC20Handler_ERC20Handler; });




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var ERC20Handler_resolveAsset = function resolveAsset(network, assetIn) {
  if (typeof assetIn !== "object") {
    throw new Error("");
  }

  var asset = assetIn;

  if (asset.address) {
    return _objectSpread({}, asset, {
      address: asset.address
    });
  } else {
    var address = (ERC20s[network] || {})[asset.name || ""];

    if (!address) {
      throw new Error("Unknown ERC20 token ".concat(asset.name || JSON.stringify(asset)));
    }

    return _objectSpread({}, asset, {
      address: address
    });
  }
};

var ERC20Handler_ERC20Handler = function ERC20Handler(_privateKey, network, _options, sharedState) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, ERC20Handler);

  this._decimals = {}; // Returns whether or not this can handle the asset

  this.handlesAsset = function (asset) {
    return typeof asset === "object" && asset.hasOwnProperty("type") && asset.type === "ERC20" && (asset.hasOwnProperty("address") || asset.hasOwnProperty("name"));
  }; // Address


  this.address = function _callee(asset, options, deferHandler) {
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", deferHandler.address("ETH", options));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // Balance


  this.getBalance = function _callee2(assetIn, options, deferHandler) {
    var asset, decimals;
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            asset = ERC20Handler_resolveAsset(_this.network, assetIn);
            _context2.next = 3;
            return regenerator_default.a.awrap(_this.decimals(asset));

          case 3:
            decimals = _context2.sent;
            _context2.next = 6;
            return regenerator_default.a.awrap(_this.getBalanceInSats(asset, options, deferHandler));

          case 6:
            _context2.t0 = new bignumber_default.a(10).exponentiatedBy(decimals);
            return _context2.abrupt("return", _context2.sent.dividedBy(_context2.t0));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.getBalanceInSats = function _callee3(assetIn, options, deferHandler) {
    var asset, address;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            asset = ERC20Handler_resolveAsset(_this.network, assetIn);
            _context3.t1 = options && options.address;

            if (_context3.t1) {
              _context3.next = 9;
              break;
            }

            _context3.t2 = deferHandler;

            if (!_context3.t2) {
              _context3.next = 8;
              break;
            }

            _context3.next = 7;
            return regenerator_default.a.awrap(deferHandler.address("ETH", options));

          case 7:
            _context3.t2 = _context3.sent;

          case 8:
            _context3.t1 = _context3.t2;

          case 9:
            _context3.t0 = _context3.t1;

            if (_context3.t0) {
              _context3.next = 12;
              break;
            }

            _context3.t0 = "";

          case 12:
            address = _context3.t0;
            _context3.t3 = bignumber_default.a;
            _context3.next = 16;
            return regenerator_default.a.awrap(_this.getContract(asset).methods.balanceOf(address).call());

          case 16:
            _context3.t4 = _context3.sent;
            return _context3.abrupt("return", new _context3.t3(_context3.t4));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // Transfer


  this.send = function (to, valueIn, assetIn, options, deferHandler) {
    var asset = ERC20Handler_resolveAsset(_this.network, assetIn);
    var promiEvent = Object(lib_promiEvent["b" /* newPromiEvent */])();
    (function _callee4() {
      var contract, method, call, config, web3PromiEvent;
      return regenerator_default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              contract = _this.getContract(asset);
              method = options.approve ? contract.methods.approve : contract.methods.transfer;
              _context4.t0 = method;
              _context4.t1 = to;
              _context4.t2 = valueIn;
              _context4.t3 = new bignumber_default.a(10);
              _context4.next = 8;
              return regenerator_default.a.awrap(_this.decimals(asset));

            case 8:
              _context4.t4 = _context4.sent;
              _context4.t5 = _context4.t3.exponentiatedBy.call(_context4.t3, _context4.t4);
              _context4.t6 = _context4.t2.times.call(_context4.t2, _context4.t5).toFixed();
              call = (0, _context4.t0)(_context4.t1, _context4.t6);
              _context4.t7 = _objectSpread;
              _context4.next = 15;
              return regenerator_default.a.awrap(deferHandler.address("ETH"));

            case 15:
              _context4.t8 = _context4.sent;
              _context4.t9 = {
                from: _context4.t8
              };
              _context4.t10 = Object(ethUtils["c" /* getTransactionConfig */])(options);
              config = (0, _context4.t7)(_context4.t9, _context4.t10);
              _context4.next = 21;
              return regenerator_default.a.awrap(call.estimateGas(config));

            case 21:
              config.gas = _context4.sent;
              web3PromiEvent = call.send(config);
              Object(lib_promiEvent["a" /* forwardEvents */])(web3PromiEvent, promiEvent);
              web3PromiEvent.then(promiEvent.resolve);

            case 25:
            case "end":
              return _context4.stop();
          }
        }
      });
    })().catch(function (error) {
      promiEvent.reject(error);
    });
    return promiEvent;
  };

  this.sendSats = function (to, valueIn, assetIn, options, deferHandler) {
    var asset = ERC20Handler_resolveAsset(_this.network, assetIn);
    var promiEvent = Object(lib_promiEvent["b" /* newPromiEvent */])();
    (function _callee5() {
      var contract, method, call, config, web3PromiEvent;
      return regenerator_default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              contract = _this.getContract(asset);
              method = options.approve ? contract.methods.approve : contract.methods.transfer;
              call = method(to, valueIn.toFixed());
              _context5.t0 = _objectSpread;
              _context5.next = 6;
              return regenerator_default.a.awrap(deferHandler.address("ETH"));

            case 6:
              _context5.t1 = _context5.sent;
              _context5.t2 = {
                from: _context5.t1
              };
              _context5.t3 = Object(ethUtils["c" /* getTransactionConfig */])(options);
              config = (0, _context5.t0)(_context5.t2, _context5.t3);
              _context5.next = 12;
              return regenerator_default.a.awrap(call.estimateGas(config));

            case 12:
              config.gas = _context5.sent;
              web3PromiEvent = call.send(config);
              Object(lib_promiEvent["a" /* forwardEvents */])(web3PromiEvent, promiEvent);
              web3PromiEvent.then(promiEvent.resolve);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      });
    })().catch(function (error) {
      promiEvent.reject(error);
    });
    return promiEvent;
  };

  this.getContract = function (asset) {
    return new _this.sharedState.web3.eth.Contract(ERC20ABI, ERC20Handler_resolveAsset(_this.network, asset).address);
  };

  this.decimals = function _callee6(asset) {
    var address;
    return regenerator_default.a.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            address = ERC20Handler_resolveAsset(_this.network, asset).address;

            if (!_this._decimals[address]) {
              _context6.next = 3;
              break;
            }

            return _context6.abrupt("return", _this._decimals[address]);

          case 3:
            return _context6.abrupt("return", _this.getContract(asset).methods.decimals().call());

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  };

  this.network = Object(ethUtils["b" /* getNetwork */])(network);
  this.sharedState = sharedState;
};

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(18);

// EXTERNAL MODULE: ../send-crypto/node_modules/bitgo-utxo-lib/src/index.js
var src = __webpack_require__(20);

// EXTERNAL MODULE: ../send-crypto/node_modules/bchaddrjs/src/bchaddr.js
var bchaddr = __webpack_require__(122);

// EXTERNAL MODULE: ../send-crypto/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(9);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ../send-crypto/node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(67);

// EXTERNAL MODULE: ../send-crypto/node_modules/axios/index.js
var axios = __webpack_require__(16);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/utxo.js
var utxo = __webpack_require__(27);

// CONCATENATED MODULE: ../send-crypto/build/module/common/apis/bitcoinDotCom.js




var endpoint = function endpoint(testnet) {
  return testnet ? "https://trest.bitcoin.com/v2/" : "https://rest.bitcoin.com/v2/";
};

var bitcoinDotCom_fetchConfirmations = function fetchConfirmations(testnet) {
  return function _callee(txid) {
    var url, response;
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(endpoint(testnet).replace(/\/$/, ""), "/transaction/details/").concat(txid);
            _context.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get("".concat(url)));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", response.data.confirmations);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var bitcoinDotCom_fetchUTXOs = function fetchUTXOs(testnet) {
  return function _callee2(address, confirmations) {
    var url, response;
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(endpoint(testnet).replace(/\/$/, ""), "/address/utxo/").concat(address);
            _context2.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get(url));

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", Object(utxo["b" /* fixValues */])(response.data.utxos.map(function (utxo) {
              return {
                txid: utxo.txid,
                value: utxo.amount,
                // script_hex: utxo.scriptPubKey,
                output_no: utxo.vout,
                confirmations: utxo.confirmations
              };
            }).filter(function (utxo) {
              return confirmations === 0 || utxo.confirmations >= confirmations;
            }), 8).sort(utxo["c" /* sortUTXOs */]));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var bitcoinDotCom_broadcastTransaction = function broadcastTransaction(testnet) {
  return function _callee3(txHex) {
    var url, response;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(endpoint(testnet).replace(/\/$/, ""), "/rawtransactions/sendRawTransaction");
            _context3.next = 3;
            return regenerator_default.a.awrap(axios_default.a.post(url, {
              "hexes": [txHex]
            }, {
              timeout: 5000
            }));

          case 3:
            response = _context3.sent;

            if (!response.data.error) {
              _context3.next = 6;
              break;
            }

            throw new Error(response.data.error);

          case 6:
            return _context3.abrupt("return", response.data[0]);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};
var BitcoinDotCom = {
  fetchUTXOs: bitcoinDotCom_fetchUTXOs,
  fetchConfirmations: bitcoinDotCom_fetchConfirmations,
  broadcastTransaction: bitcoinDotCom_broadcastTransaction
};
// EXTERNAL MODULE: ../send-crypto/build/module/common/apis/blockchair.js
var blockchair = __webpack_require__(24);

// EXTERNAL MODULE: ../send-crypto/build/module/common/libraries/bitgoUtxoLib.js
var bitgoUtxoLib = __webpack_require__(42);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/confirmations.js
var lib_confirmations = __webpack_require__(68);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/promiEvent.js
var lib_promiEvent = __webpack_require__(28);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/retry.js
var retry = __webpack_require__(14);

// CONCATENATED MODULE: ../send-crypto/build/module/handlers/BCH/BCHHandler.js
/* unused harmony export _apiFallbacks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BCHHandler_BCHHandler; });
/* unused harmony export getUTXOs */




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var BCHHandler_toCashAddr = function toCashAddr(legacyAddress) {
  try {
    return Object(bchaddr["toCashAddress"])(legacyAddress);
  } catch (error) {
    return legacyAddress;
  }
};

var _apiFallbacks = {
  fetchConfirmations: function fetchConfirmations(testnet, txHash) {
    return [function () {
      return BitcoinDotCom.fetchConfirmations(testnet)(txHash);
    }, testnet ? undefined : function () {
      return blockchair["a" /* Blockchair */].fetchConfirmations(blockchair["a" /* Blockchair */].networks.BITCOIN_CASH)(txHash);
    }];
  },
  fetchUTXOs: function fetchUTXOs(testnet, address, confirmations) {
    return [function () {
      return BitcoinDotCom.fetchUTXOs(testnet)(address, confirmations);
    }, testnet ? undefined : function () {
      return blockchair["a" /* Blockchair */].fetchUTXOs(blockchair["a" /* Blockchair */].networks.BITCOIN_CASH)(address, confirmations);
    }];
  },
  broadcastTransaction: function broadcastTransaction(testnet, hex) {
    return [function () {
      return BitcoinDotCom.broadcastTransaction(testnet)(hex);
    }, testnet ? undefined : function () {
      return blockchair["a" /* Blockchair */].broadcastTransaction(blockchair["a" /* Blockchair */].networks.BITCOIN_CASH)(hex);
    }];
  }
};
var BCHHandler_BCHHandler = function BCHHandler(privateKey, network) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, BCHHandler);

  this.decimals = 8; // Returns whether or not this can handle the asset

  this.handlesAsset = function (asset) {
    return typeof asset === "string" && ["BCH", "BITCOIN CASH", "BCASH", "BITCOINCASH", "BITCOIN-CASH"].indexOf(asset.toUpperCase()) !== -1;
  };

  this.address = function _callee(asset, options) {
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", BCHHandler_toCashAddr(_this.privateKey.getAddress()));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // Balance


  this.getBalance = function _callee2(asset, options) {
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regenerator_default.a.awrap(_this.getBalanceInSats(asset, options));

          case 2:
            _context2.t0 = new bignumber_default.a(10).exponentiatedBy(_this.decimals);
            return _context2.abrupt("return", _context2.sent.dividedBy(_context2.t0));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.getBalanceInSats = function _callee3(asset, options) {
    var utxos;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = regenerator_default.a;
            _context3.t1 = BCHHandler_getUTXOs;
            _context3.t2 = _this.testnet;
            _context3.t3 = _objectSpread;
            _context3.t4 = {};
            _context3.t5 = options;
            _context3.t6 = options && options.address;

            if (_context3.t6) {
              _context3.next = 11;
              break;
            }

            _context3.next = 10;
            return regenerator_default.a.awrap(_this.address(asset));

          case 10:
            _context3.t6 = _context3.sent;

          case 11:
            _context3.t7 = _context3.t6;
            _context3.t8 = {
              address: _context3.t7
            };
            _context3.t9 = (0, _context3.t3)(_context3.t4, _context3.t5, _context3.t8);
            _context3.t10 = (0, _context3.t1)(_context3.t2, _context3.t9);
            _context3.next = 17;
            return _context3.t0.awrap.call(_context3.t0, _context3.t10);

          case 17:
            utxos = _context3.sent;
            return _context3.abrupt("return", utxos.reduce(function (sum, utxo) {
              return sum.plus(utxo.value);
            }, new bignumber_default.a(0)));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // Transfer


  this.send = function (to, value, asset, options) {
    return _this.sendSats(to, value.times(new bignumber_default.a(10).exponentiatedBy(_this.decimals)), asset, options);
  };

  this.sendSats = function (to, valueIn, asset, options) {
    var promiEvent = Object(lib_promiEvent["b" /* newPromiEvent */])();
    var txHash;
    var errored;
    (function _callee4() {
      var fromAddress, toAddress, changeAddress, utxos, built;
      return regenerator_default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = bchaddr["toLegacyAddress"];
              _context4.next = 3;
              return regenerator_default.a.awrap(_this.address(asset));

            case 3:
              _context4.t1 = _context4.sent;
              fromAddress = (0, _context4.t0)(_context4.t1);
              toAddress = Object(bchaddr["toLegacyAddress"])(to);
              changeAddress = fromAddress;
              _context4.t2 = immutable_es["a" /* List */];
              _context4.next = 10;
              return regenerator_default.a.awrap(BCHHandler_getUTXOs(_this.testnet, _objectSpread({}, options, {
                address: fromAddress
              })));

            case 10:
              _context4.t3 = _context4.sent;

              _context4.t4 = function (utxo) {
                return utxo.value;
              };

              utxos = (0, _context4.t2)(_context4.t3).sortBy(_context4.t4).reverse().toArray();
              _context4.next = 15;
              return regenerator_default.a.awrap(bitgoUtxoLib["a" /* BitgoUTXOLib */].buildUTXO(_this._bitgoNetwork(), // tslint:disable-next-line: no-bitwise
              _this.privateKey, changeAddress, toAddress, valueIn, utxos, _objectSpread({}, options, {
                signFlag: src["Transaction"].SIGHASH_SINGLE | src["Transaction"].SIGHASH_BITCOINCASHBIP143
              })));

            case 15:
              built = _context4.sent;
              _context4.next = 18;
              return regenerator_default.a.awrap(Object(retry["b" /* retryNTimes */])(function () {
                return Object(retry["a" /* fallback */])(_apiFallbacks.broadcastTransaction(_this.testnet, built.toHex()));
              }, 5));

            case 18:
              txHash = _context4.sent;
              promiEvent.emit('transactionHash', txHash);
              promiEvent.resolve(txHash);

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      });
    })().catch(function (error) {
      errored = true;
      promiEvent.reject(error);
    });
    Object(lib_confirmations["a" /* subscribeToConfirmations */])(promiEvent, function () {
      return errored;
    }, function _callee5() {
      return regenerator_default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", txHash ? _this._getConfirmations(txHash) : 0);

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
    return promiEvent;
  };

  this._getConfirmations = function (txHash) {
    return Object(retry["b" /* retryNTimes */])(function () {
      return Object(retry["a" /* fallback */])(_apiFallbacks.fetchConfirmations(_this.testnet, txHash));
    }, 5);
  };

  this._bitgoNetwork = function () {
    return _this.testnet ? src["networks"].bitcoincashTestnet : src["networks"].bitcoincash;
  };

  this.testnet = network !== "mainnet";
  this.privateKey = bitgoUtxoLib["a" /* BitgoUTXOLib */].loadPrivateKey(this._bitgoNetwork(), privateKey);
};
var BCHHandler_getUTXOs = function getUTXOs(testnet, options) {
  var address, confirmations, endpoints;
  return regenerator_default.a.async(function getUTXOs$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          address = BCHHandler_toCashAddr(options.address);
          confirmations = options.confirmations || 0;
          endpoints = _apiFallbacks.fetchUTXOs(testnet, address, confirmations);
          return _context6.abrupt("return", Object(retry["b" /* retryNTimes */])(function () {
            return Object(retry["a" /* fallback */])(endpoints);
          }, 5));

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(18);

// EXTERNAL MODULE: ../send-crypto/node_modules/bitgo-utxo-lib/src/index.js
var src = __webpack_require__(20);

// EXTERNAL MODULE: ../send-crypto/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(9);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ../send-crypto/node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(67);

// EXTERNAL MODULE: ../send-crypto/build/module/common/apis/blockchair.js
var blockchair = __webpack_require__(24);

// EXTERNAL MODULE: ../send-crypto/node_modules/axios/index.js
var axios = __webpack_require__(16);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/utxo.js
var lib_utxo = __webpack_require__(27);

// CONCATENATED MODULE: ../send-crypto/build/module/common/apis/blockstream.js



;

var blockstream_fetchConfirmations = function fetchConfirmations(testnet) {
  return function _callee(txid) {
    var apiUrl, response, heightResponse, utxo;
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            apiUrl = "https://blockstream.info/".concat(testnet ? "testnet/" : "", "api");
            _context.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get("".concat(apiUrl, "/tx/").concat(txid)));

          case 3:
            response = _context.sent;

            heightResponse = function heightResponse() {
              return axios_default.a.get("".concat(apiUrl, "/blocks/tip/height"));
            };

            utxo = response.data;

            if (!utxo.status.confirmed) {
              _context.next = 17;
              break;
            }

            _context.t1 = parseInt;
            _context.next = 10;
            return regenerator_default.a.awrap(heightResponse());

          case 10:
            _context.t2 = _context.sent.data;
            _context.t3 = (0, _context.t1)(_context.t2, 10);
            _context.t4 = 1 + _context.t3;
            _context.t5 = utxo.status.block_height;
            _context.t0 = _context.t4 - _context.t5;
            _context.next = 18;
            break;

          case 17:
            _context.t0 = 0;

          case 18:
            return _context.abrupt("return", _context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var blockstream_fetchUTXOs = function fetchUTXOs(testnet) {
  return function _callee2(address, confirmations) {
    var apiUrl, response, heightResponse;
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            apiUrl = "https://blockstream.info/".concat(testnet ? "testnet/" : "", "api");
            _context2.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get("".concat(apiUrl, "/address/").concat(address, "/utxo")));

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return regenerator_default.a.awrap(axios_default.a.get("".concat(apiUrl, "/blocks/tip/height")));

          case 6:
            heightResponse = _context2.sent;
            return _context2.abrupt("return", response.data.map(function (utxo) {
              return {
                txid: utxo.txid,
                value: utxo.value,
                // script_hex: "",
                output_no: utxo.vout,
                confirmations: utxo.status.confirmed ? 1 + parseInt(heightResponse.data, 10) - utxo.status.block_height : 0
              };
            }).filter(function (utxo) {
              return confirmations === 0 || utxo.confirmations >= confirmations;
            }).sort(lib_utxo["c" /* sortUTXOs */]));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var blockstream_broadcastTransaction = function broadcastTransaction(testnet) {
  return function _callee3(txHex) {
    var response;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regenerator_default.a.awrap(axios_default.a.post("https://blockstream.info/".concat(testnet ? "testnet/" : "", "api/tx"), txHex));

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

var Blockstream = {
  fetchConfirmations: blockstream_fetchConfirmations,
  fetchUTXOs: blockstream_fetchUTXOs,
  broadcastTransaction: blockstream_broadcastTransaction
};
// EXTERNAL MODULE: ../send-crypto/build/module/common/apis/sochain.js
var sochain = __webpack_require__(57);

// EXTERNAL MODULE: ../send-crypto/build/module/common/libraries/bitgoUtxoLib.js
var bitgoUtxoLib = __webpack_require__(42);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/confirmations.js
var lib_confirmations = __webpack_require__(68);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/promiEvent.js
var lib_promiEvent = __webpack_require__(28);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/retry.js
var retry = __webpack_require__(14);

// CONCATENATED MODULE: ../send-crypto/build/module/handlers/BTC/BTCHandler.js
/* unused harmony export _apiFallbacks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BTCHandler_BTCHandler; });
/* unused harmony export getUTXOs */




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var _apiFallbacks = {
  fetchConfirmations: function fetchConfirmations(testnet, txHash) {
    return [function () {
      return Blockstream.fetchConfirmations(testnet)(txHash);
    }, function () {
      return blockchair["a" /* Blockchair */].fetchConfirmations(testnet ? blockchair["a" /* Blockchair */].networks.BITCOIN_TESTNET : blockchair["a" /* Blockchair */].networks.BITCOIN)(txHash);
    }];
  },
  fetchUTXOs: function fetchUTXOs(testnet, address, confirmations) {
    return [function () {
      return Blockstream.fetchUTXOs(testnet)(address, confirmations);
    }, function () {
      return blockchair["a" /* Blockchair */].fetchUTXOs(testnet ? blockchair["a" /* Blockchair */].networks.BITCOIN_TESTNET : blockchair["a" /* Blockchair */].networks.BITCOIN)(address, confirmations);
    }, function () {
      return sochain["a" /* Sochain */].fetchUTXOs(testnet ? "BTCTEST" : "BTC")(address, confirmations);
    }];
  },
  broadcastTransaction: function broadcastTransaction(testnet, hex) {
    return [function () {
      return Blockstream.broadcastTransaction(testnet)(hex);
    }, function () {
      return blockchair["a" /* Blockchair */].broadcastTransaction(testnet ? blockchair["a" /* Blockchair */].networks.BITCOIN_TESTNET : blockchair["a" /* Blockchair */].networks.BITCOIN)(hex);
    }, function () {
      return sochain["a" /* Sochain */].broadcastTransaction(testnet ? "BTCTEST" : "BTC")(hex);
    }];
  }
};
var BTCHandler_BTCHandler = function BTCHandler(privateKey, network) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, BTCHandler);

  this.decimals = 8; // Returns whether or not this can handle the asset

  this.handlesAsset = function (asset) {
    return typeof asset === "string" && ["BTC", "BITCOIN"].indexOf(asset.toUpperCase()) !== -1;
  };

  this.address = function _callee(asset, options) {
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _this.privateKey.getAddress());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // Balance


  this.getBalance = function _callee2(asset, options) {
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regenerator_default.a.awrap(_this.getBalanceInSats(asset, options));

          case 2:
            _context2.t0 = new bignumber_default.a(10).exponentiatedBy(_this.decimals);
            return _context2.abrupt("return", _context2.sent.dividedBy(_context2.t0));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.getBalanceInSats = function _callee3(asset, options) {
    var utxos;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = regenerator_default.a;
            _context3.t1 = BTCHandler_getUTXOs;
            _context3.t2 = _this.testnet;
            _context3.t3 = _objectSpread;
            _context3.t4 = {};
            _context3.t5 = options;
            _context3.t6 = options && options.address;

            if (_context3.t6) {
              _context3.next = 11;
              break;
            }

            _context3.next = 10;
            return regenerator_default.a.awrap(_this.address(asset));

          case 10:
            _context3.t6 = _context3.sent;

          case 11:
            _context3.t7 = _context3.t6;
            _context3.t8 = {
              address: _context3.t7
            };
            _context3.t9 = (0, _context3.t3)(_context3.t4, _context3.t5, _context3.t8);
            _context3.t10 = (0, _context3.t1)(_context3.t2, _context3.t9);
            _context3.next = 17;
            return _context3.t0.awrap.call(_context3.t0, _context3.t10);

          case 17:
            utxos = _context3.sent;
            return _context3.abrupt("return", utxos.reduce(function (sum, utxo) {
              return sum.plus(utxo.value);
            }, new bignumber_default.a(0)));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // Transfer


  this.send = function (to, value, asset, options) {
    return _this.sendSats(to, value.times(new bignumber_default.a(10).exponentiatedBy(_this.decimals)), asset, options);
  };

  this.sendSats = function (to, valueIn, asset, options) {
    var promiEvent = Object(lib_promiEvent["b" /* newPromiEvent */])();
    var txHash;
    var errored;
    (function _callee4() {
      var fromAddress, changeAddress, utxos, built;
      return regenerator_default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regenerator_default.a.awrap(_this.address(asset));

            case 2:
              fromAddress = _context4.sent;
              changeAddress = fromAddress;
              _context4.t0 = immutable_es["a" /* List */];
              _context4.next = 7;
              return regenerator_default.a.awrap(BTCHandler_getUTXOs(_this.testnet, _objectSpread({}, options, {
                address: fromAddress
              })));

            case 7:
              _context4.t1 = _context4.sent;

              _context4.t2 = function (utxo) {
                return utxo.value;
              };

              utxos = (0, _context4.t0)(_context4.t1).sortBy(_context4.t2).reverse().toArray();
              _context4.next = 12;
              return regenerator_default.a.awrap(bitgoUtxoLib["a" /* BitgoUTXOLib */].buildUTXO(_this.testnet ? src["networks"].testnet : src["networks"].bitcoin, _this.privateKey, changeAddress, to, valueIn, utxos, options));

            case 12:
              built = _context4.sent;
              _context4.next = 15;
              return regenerator_default.a.awrap(Object(retry["b" /* retryNTimes */])(function () {
                return Object(retry["a" /* fallback */])(_apiFallbacks.broadcastTransaction(_this.testnet, built.toHex()));
              }, 5));

            case 15:
              txHash = _context4.sent;
              promiEvent.emit('transactionHash', txHash);
              promiEvent.resolve(txHash);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      });
    })().catch(function (error) {
      errored = true;
      promiEvent.reject(error);
    });
    Object(lib_confirmations["a" /* subscribeToConfirmations */])(promiEvent, function () {
      return errored;
    }, function _callee5() {
      return regenerator_default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", txHash ? _this._getConfirmations(txHash) : 0);

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
    return promiEvent;
  };

  this._getConfirmations = function (txHash) {
    return Object(retry["b" /* retryNTimes */])(function () {
      return Object(retry["a" /* fallback */])(_apiFallbacks.fetchConfirmations(_this.testnet, txHash));
    }, 5);
  };

  this.testnet = network !== "mainnet";
  this.privateKey = bitgoUtxoLib["a" /* BitgoUTXOLib */].loadPrivateKey(this.testnet ? src["networks"].testnet : src["networks"].bitcoin, privateKey);
};
var BTCHandler_getUTXOs = function getUTXOs(testnet, options) {
  var confirmations, endpoints;
  return regenerator_default.a.async(function getUTXOs$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          confirmations = options && options.confirmations !== undefined ? options.confirmations : 0;
          endpoints = _apiFallbacks.fetchUTXOs(testnet, options.address, confirmations);
          return _context6.abrupt("return", Object(retry["b" /* retryNTimes */])(function () {
            return Object(retry["a" /* fallback */])(endpoints);
          }, 5));

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(18);

// EXTERNAL MODULE: ../send-crypto/node_modules/bitgo-utxo-lib/src/index.js
var src = __webpack_require__(20);

// EXTERNAL MODULE: ../send-crypto/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(9);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ../send-crypto/node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(67);

// EXTERNAL MODULE: ../send-crypto/node_modules/axios/index.js
var axios = __webpack_require__(16);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/https-browserify/index.js
var https_browserify = __webpack_require__(119);
var https_browserify_default = /*#__PURE__*/__webpack_require__.n(https_browserify);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/utxo.js
var lib_utxo = __webpack_require__(27);

// CONCATENATED MODULE: ../send-crypto/build/module/common/apis/insight.js





var insight_fetchUTXOs = function fetchUTXOs(insightURL) {
  return function _callee(address, confirmations) {
    var url, response, data;
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(insightURL.replace(/\/$/, ""), "/addr/").concat(address, "/utxo");
            _context.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get(url, {
              // TTODO: Remove when certificate is fixed.
              httpsAgent: new https_browserify_default.a.Agent({
                rejectUnauthorized: false
              })
            }));

          case 3:
            response = _context.sent;
            data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
            return _context.abrupt("return", data.map(function (utxo) {
              return {
                txid: utxo.txid,
                value: utxo.satoshis || Object(lib_utxo["a" /* fixValue */])(utxo.amount, 8),
                // script_hex: utxo.scriptPubKey,
                output_no: utxo.vout,
                confirmations: utxo.confirmations
              };
            }).filter(function (utxo) {
              return confirmations === 0 || utxo.confirmations >= confirmations;
            }).sort(lib_utxo["c" /* sortUTXOs */]));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var insight_fetchConfirmations = function fetchConfirmations(insightURL) {
  return function _callee2(txid) {
    var url, response;
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "".concat(insightURL.replace(/\/$/, ""), "/tx/").concat(txid);
            _context2.next = 3;
            return regenerator_default.a.awrap(axios_default.a.get(url));

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response.data.confirmations);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var insight_broadcastTransaction = function broadcastTransaction(insightURL) {
  return function _callee3(txHex) {
    var url, response;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "".concat(insightURL, "/tx/send");
            _context3.next = 3;
            return regenerator_default.a.awrap(axios_default.a.post(url, {
              rawtx: txHex
            }, {
              timeout: 5000
            }));

          case 3:
            response = _context3.sent;

            if (!response.data.error) {
              _context3.next = 6;
              break;
            }

            throw new Error(response.data.error);

          case 6:
            return _context3.abrupt("return", response.data.txid);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};
var Insight = {
  fetchUTXOs: insight_fetchUTXOs,
  fetchConfirmations: insight_fetchConfirmations,
  broadcastTransaction: insight_broadcastTransaction
};
// EXTERNAL MODULE: ../send-crypto/build/module/common/apis/sochain.js
var sochain = __webpack_require__(57);

// EXTERNAL MODULE: ../send-crypto/build/module/common/libraries/bitgoUtxoLib.js
var bitgoUtxoLib = __webpack_require__(42);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/confirmations.js
var lib_confirmations = __webpack_require__(68);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/promiEvent.js
var lib_promiEvent = __webpack_require__(28);

// EXTERNAL MODULE: ../send-crypto/build/module/lib/retry.js
var retry = __webpack_require__(14);

// CONCATENATED MODULE: ../send-crypto/build/module/handlers/ZEC/ZECHandler.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZECHandler_ZECHandler; });
/* unused harmony export getUTXOs */




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ZECHandler_ZECHandler = function ZECHandler(privateKey, network) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, ZECHandler);

  this.decimals = 8; // Returns whether or not this can handle the asset

  this.handlesAsset = function (asset) {
    return typeof asset === "string" && ["ZEC", "ZCASH"].indexOf(asset.toUpperCase()) !== -1;
  };

  this.address = function _callee(asset, options) {
    return regenerator_default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _this.privateKey.getAddress());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }; // Balance


  this.getBalance = function _callee2(asset, options) {
    return regenerator_default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regenerator_default.a.awrap(_this.getBalanceInSats(asset, options));

          case 2:
            _context2.t0 = new bignumber_default.a(10).exponentiatedBy(_this.decimals);
            return _context2.abrupt("return", _context2.sent.dividedBy(_context2.t0));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.getBalanceInSats = function _callee3(asset, options) {
    var utxos;
    return regenerator_default.a.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = regenerator_default.a;
            _context3.t1 = ZECHandler_getUTXOs;
            _context3.t2 = _this.testnet;
            _context3.t3 = _objectSpread;
            _context3.t4 = {};
            _context3.t5 = options;
            _context3.t6 = options && options.address;

            if (_context3.t6) {
              _context3.next = 11;
              break;
            }

            _context3.next = 10;
            return regenerator_default.a.awrap(_this.address(asset));

          case 10:
            _context3.t6 = _context3.sent;

          case 11:
            _context3.t7 = _context3.t6;
            _context3.t8 = {
              address: _context3.t7
            };
            _context3.t9 = (0, _context3.t3)(_context3.t4, _context3.t5, _context3.t8);
            _context3.t10 = (0, _context3.t1)(_context3.t2, _context3.t9);
            _context3.next = 17;
            return _context3.t0.awrap.call(_context3.t0, _context3.t10);

          case 17:
            utxos = _context3.sent;
            return _context3.abrupt("return", utxos.reduce(function (sum, utxo) {
              return sum.plus(utxo.value);
            }, new bignumber_default.a(0)));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    });
  }; // Transfer


  this.send = function (to, value, asset, options) {
    return _this.sendSats(to, value.times(new bignumber_default.a(10).exponentiatedBy(_this.decimals)), asset, options);
  };

  this.sendSats = function (to, valueIn, asset, options) {
    var promiEvent = Object(lib_promiEvent["b" /* newPromiEvent */])();
    var txHash;
    var errored;
    (function _callee4() {
      var fromAddress, changeAddress, utxos, built;
      return regenerator_default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regenerator_default.a.awrap(_this.address(asset));

            case 2:
              fromAddress = _context4.sent;
              changeAddress = fromAddress;
              _context4.t0 = immutable_es["a" /* List */];
              _context4.next = 7;
              return regenerator_default.a.awrap(ZECHandler_getUTXOs(_this.testnet, _objectSpread({}, options, {
                address: fromAddress
              })));

            case 7:
              _context4.t1 = _context4.sent;

              _context4.t2 = function (utxo) {
                return utxo.value;
              };

              utxos = (0, _context4.t0)(_context4.t1).sortBy(_context4.t2).reverse().toArray();
              _context4.next = 12;
              return regenerator_default.a.awrap(bitgoUtxoLib["a" /* BitgoUTXOLib */].buildUTXO(_this.testnet ? src["networks"].zcashTest : src["networks"].zcash, _this.privateKey, changeAddress, to, valueIn, utxos, _objectSpread({}, options, {
                version: src["Transaction"].ZCASH_SAPLING_VERSION,
                versionGroupID: parseInt("0x892F2085", 16)
              })));

            case 12:
              built = _context4.sent;
              _context4.next = 15;
              return regenerator_default.a.awrap(Object(retry["b" /* retryNTimes */])(function () {
                return Object(retry["a" /* fallback */])([function () {
                  return Insight.broadcastTransaction(_this.testnet ? "https://explorer.testnet.z.cash/api" : "https://explorer.z.cash/api")(built.toHex());
                }, // () => Insight.broadcastTransaction(this.testnet ? "https://explorer.testnet.z.cash/api" : "https://zcash.blockexplorer.com/api")(built.toHex()),
                function () {
                  return sochain["a" /* Sochain */].broadcastTransaction(_this.testnet ? "ZECTEST" : "ZEC")(built.toHex());
                }]);
              }, 5));

            case 15:
              txHash = _context4.sent;
              promiEvent.emit('transactionHash', txHash);
              promiEvent.resolve(txHash);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      });
    })().catch(function (error) {
      errored = true;
      promiEvent.reject(error);
    });
    Object(lib_confirmations["a" /* subscribeToConfirmations */])(promiEvent, function () {
      return errored;
    }, function _callee5() {
      return regenerator_default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", txHash ? _this._getConfirmations(txHash) : 0);

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      });
    });
    return promiEvent;
  };

  this._getConfirmations = function (txHash) {
    return Object(retry["b" /* retryNTimes */])(function () {
      return Object(retry["a" /* fallback */])([function () {
        return Insight.fetchConfirmations(_this.testnet ? "https://explorer.testnet.z.cash/api" : "https://explorer.z.cash/api")(txHash);
      }]);
    }, 5);
  };

  this.testnet = network !== "mainnet";
  this.privateKey = bitgoUtxoLib["a" /* BitgoUTXOLib */].loadPrivateKey(this.testnet ? src["networks"].zcashTest : src["networks"].zcash, privateKey);
};
var ZECHandler_getUTXOs = function getUTXOs(testnet, options) {
  var confirmations, endpoints;
  return regenerator_default.a.async(function getUTXOs$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          confirmations = options && options.confirmations !== undefined ? options.confirmations : 0;
          endpoints = testnet ? [function () {
            return Insight.fetchUTXOs("https://explorer.testnet.z.cash/api/")(options.address, confirmations);
          }, function () {
            return sochain["a" /* Sochain */].fetchUTXOs("ZECTEST")(options.address, confirmations);
          }] : [function () {
            return Insight.fetchUTXOs("https://explorer.z.cash/api/")(options.address, confirmations);
          }, function () {
            return sochain["a" /* Sochain */].fetchUTXOs("ZEC")(options.address, confirmations);
          }, function () {
            return Insight.fetchUTXOs("https://zechain.net/api/v1/")(options.address, confirmations);
          }, function () {
            return Insight.fetchUTXOs("https://zcash.blockexplorer.com/api/")(options.address, confirmations);
          }, function () {
            return Insight.fetchUTXOs("https://zecblockexplorer.com/")(options.address, confirmations);
          }];
          return _context6.abrupt("return", Object(retry["b" /* retryNTimes */])(function () {
            return Object(retry["a" /* fallback */])(endpoints);
          }, 5));

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
};

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(789);


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 387:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitgoUTXOLib; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(313);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);






var buildUTXO = function buildUTXO(network, privateKey, changeAddress, toAddress, valueIn, utxos, options) {
  var fees, value, tx, _utxos$reduce, _utxos$reduce2, usedUTXOs, sum, change;

  return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function buildUTXO$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fees = new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(options && options.fee !== undefined ? options.fee : 10000);
          value = options && options.subtractFee ? valueIn.minus(fees) : valueIn;

          if (!value.lt(0)) {
            _context.next = 4;
            break;
          }

          throw new Error("Unable to include fee in value, fee exceeds value (".concat(fees.toFixed(), " > ").concat(valueIn.toFixed(), ")"));

        case 4:
          tx = new bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_3__["TransactionBuilder"](network);

          if (options && options.version) {
            tx.setVersion(options.version);
          }

          if (options && options.versionGroupID) {
            tx.setVersionGroupId(options.versionGroupID);
          } // Only use the required utxos


          _utxos$reduce = utxos.reduce(function (_ref, utxo) {
            var _ref2 = Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, 2),
                utxoAcc = _ref2[0],
                total = _ref2[1];

            return total.lt(value.plus(fees)) ? [[].concat(Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(utxoAcc), [utxo]), total.plus(utxo.value)] : [utxoAcc, total];
          }, [[], new bignumber_js__WEBPACK_IMPORTED_MODULE_4___default.a(0)]), _utxos$reduce2 = Object(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_utxos$reduce, 2), usedUTXOs = _utxos$reduce2[0], sum = _utxos$reduce2[1];

          if (!sum.lt(value.plus(fees))) {
            _context.next = 10;
            break;
          }

          throw new Error("Insufficient balance to broadcast transaction");

        case 10:
          // Add all inputs
          usedUTXOs.map(function (utxo) {
            tx.addInput(utxo.txid, utxo.output_no);
          });
          change = sum.minus(value).minus(fees); // Add outputs

          tx.addOutput(toAddress, value.toNumber());

          if (change.gt(0)) {
            tx.addOutput(changeAddress, change.toNumber());
          } // Sign inputs


          usedUTXOs.map(function (utxo, i) {
            tx.sign(i, privateKey, "", options && options.signFlag !== undefined ? options.signFlag : null, utxo.value);
          });
          return _context.abrupt("return", tx.build());

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

var loadPrivateKey = function loadPrivateKey(network, privateKey) {
  return bitgo_utxo_lib__WEBPACK_IMPORTED_MODULE_3__["ECPair"].fromPrivateKeyBuffer(Buffer.from(privateKey, "hex"), network);
};

var BitgoUTXOLib = {
  buildUTXO: buildUTXO,
  loadPrivateKey: loadPrivateKey
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2).Buffer))

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getWeb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEndpoint; });
/* unused harmony export Network */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTransactionConfig; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(308);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

var getWeb3 = function getWeb3(privateKey, endpoint) {
  // const provider = new HDWalletProvider(privateKey, endpoint);
  var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(endpoint);
  var account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
  web3.eth.accounts.wallet.add(account); // tslint:disable-next-line: no-object-mutation

  web3.eth.defaultAccount = account.address; // return new Web3(provider as any);

  return [web3, account.address];
}; // Free tier - only used as a fallback.

var defaultInfuraKey = "3b7a6c29f9c048d688a848899888aa96";
var getEndpoint = function getEndpoint(network, ethereumNode, infuraKey) {
  return ethereumNode ? ethereumNode : "https://".concat(network, ".infura.io/v3/").concat(infuraKey || defaultInfuraKey);
};
var Network;

(function (Network) {
  Network["Mainnet"] = "mainnet";
  Network["Ropsten"] = "ropsten";
  Network["Kovan"] = "kovan";
  Network["Rinkeby"] = "rinkeby";
  Network["G\xF6rli"] = "goerli";
})(Network || (Network = {}));

var getNetwork = function getNetwork(network) {
  switch (network.toLowerCase()) {
    case "mainnet":
    case "main":
      return Network.Mainnet;

    case "kovan":
      return Network.Kovan;

    case "rinkeby":
      return Network.Rinkeby;

    case "görli":
    case "goerli":
    case "gorli":
      return Network.Görli;

    case "ropsten":
    case "testnet":
    default:
      return Network.Ropsten;
  }
};
var getTransactionConfig = function getTransactionConfig(options) {
  var txConfig = {}; // tslint:disable: no-object-mutation

  if (options.from) {
    txConfig.from = options.from;
  }

  if (options.from) {
    txConfig.from = options.from;
  } // if (options.to) { txConfig.to = options.to; }


  if (options.gasPrice) {
    txConfig.gasPrice = options.gasPrice;
  }

  if (options.gas) {
    txConfig.gas = options.gas;
  }

  if (options.value) {
    txConfig.value = options.value;
  }

  if (options.data) {
    txConfig.data = options.data;
  }

  if (options.nonce) {
    txConfig.nonce = options.nonce;
  } // if (options.chainId) { txConfig.chainId = options.chainId; }
  // if (options.common) { txConfig.common = options.common; }
  // if (options.chain) { txConfig.chain = options.chain; }
  // if (options.hardfork) { txConfig.hardfork = options.hardfork; }


  return txConfig;
};

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sochain; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utxo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




var fetchUTXOs = function fetchUTXOs(network) {
  return function _callee(address, confirmations) {
    var url, response;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://sochain.com/api/v2/get_tx_unspent/".concat(network, "/").concat(address, "/").concat(confirmations);
            _context.next = 3;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url));

          case 3:
            response = _context.sent;
            return _context.abrupt("return", Object(_lib_utxo__WEBPACK_IMPORTED_MODULE_2__[/* fixValues */ "b"])(response.data.data.txs, 8).filter(function (utxo) {
              return confirmations === 0 || utxo.confirmations >= confirmations;
            }).sort(_lib_utxo__WEBPACK_IMPORTED_MODULE_2__[/* sortUTXOs */ "c"]));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

var broadcastTransaction = function broadcastTransaction(network) {
  return function _callee2(txHex) {
    var response;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://chain.so/send_tx/".concat(network), {
              tx_hex: txHex
            }));

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data.data.txid);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

var Sochain = {
  fetchUTXOs: fetchUTXOs,
  broadcastTransaction: broadcastTransaction
};

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 606:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscribeToConfirmations; });
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);


var subscribeToConfirmations = function subscribeToConfirmations(promiEvent, cancelled, getConfirmations) {
  var mutex;

  var watchForConfirmations = function watchForConfirmations() {
    var lock, confirmations, newConfirmations;
    return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function watchForConfirmations$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lock = Symbol();
            mutex = lock; // Yield to task manager to let the event subscription finish

            _context.next = 4;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_retry__WEBPACK_IMPORTED_MODULE_1__[/* sleep */ "c"])(0));

          case 4:
            confirmations = 0;

          case 5:
            if (!(!cancelled() && watchingConfirmations && mutex === lock)) {
              _context.next = 20;
              break;
            }

            _context.prev = 6;
            _context.next = 9;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getConfirmations());

          case 9:
            newConfirmations = _context.sent;

            if (newConfirmations > confirmations) {
              confirmations = newConfirmations;
              promiEvent.emit("confirmation", confirmations);
            }

            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](6);
            console.error(_context.t0);

          case 16:
            _context.next = 18;
            return _home_noah_github_renproject_serverless_faucet_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_retry__WEBPACK_IMPORTED_MODULE_1__[/* sleep */ "c"])(5000));

          case 18:
            _context.next = 5;
            break;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[6, 13]]);
  };

  var watchingConfirmations = 0;
  promiEvent.on("newListener", function (eventName) {
    if (eventName === "confirmation") {
      watchingConfirmations++;

      if (watchingConfirmations === 1) {
        watchForConfirmations();
      }
    }
  });
  promiEvent.on("removeListener", function (eventName) {
    if (eventName === "confirmation") {
      watchingConfirmations--;
    }
  });
};

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(56);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(23);

// EXTERNAL MODULE: ./src/styles/App.scss
var styles_App = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(1);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(120);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);

// EXTERNAL MODULE: ./node_modules/react-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__(94);
var AutosizeInput_default = /*#__PURE__*/__webpack_require__.n(AutosizeInput);

// EXTERNAL MODULE: ../send-crypto/build/module/index.js
var build_module = __webpack_require__(307);

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/bch.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react_default.a.createElement("defs", null, react_default.a.createElement("style", null, ".cls-1{fill:#6cc64b;fill-rule:evenodd;}"));

var _ref3 =
/*#__PURE__*/
react_default.a.createElement("g", {
  id: "Layer_2",
  "data-name": "Layer 2"
}, react_default.a.createElement("g", {
  id: "Layer_1-2",
  "data-name": "Layer 1"
}, react_default.a.createElement("path", {
  id: "Fill-1-Copy-3",
  className: "cls-1",
  d: "M55.36,38.24c1.56,6.12-8.24,7.86-11.3,8.64L41.3,36.05c3.06-.78,12.43-4.2,14.06,2.19m6.81,16.2c1.72,6.73-10,8.9-13.68,9.84l-3-11.94c3.67-.93,14.93-4.93,16.72,2.1m2.68-21.2c-2.25-6.27-8.34-7-15.5-5.84l-2.27-8.91-5.43,1.38,2.21,8.68c-1.42.36-2.87.76-4.31,1.16L37.32,21,31.9,22.36l2.27,8.9c-1.17.33-2.32.64-3.44.93v0l-7.48,1.9,1.48,5.8s4-1.1,3.93-1a2.89,2.89,0,0,1,3.73,1.58L35,50.58a4.66,4.66,0,0,1,.58-.11l-.57.15L38.6,64.84A2,2,0,0,1,37,67.16c.09,0-3.94,1-3.94,1l.57,6.75,7.06-1.8,3.88-1,2.3,9,5.42-1.38L50,70.87c1.45-.33,2.9-.69,4.34-1.06l2.26,8.88,5.42-1.38-2.28-9c9-2.85,14.78-6.77,13.39-15.53C72,45.72,68,43.47,62.52,43.54c2.74-2.4,4-5.72,2.33-10.3m28.24-7.19a49.5,49.5,0,1,1-67-20.13,49.5,49.5,0,0,1,67,20.13"
})));

function SvgBch(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", _extends({
    viewBox: "0 0 99.01 99.01",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), _ref2, title === undefined ? react_default.a.createElement("title", {
    id: titleId
  }, "icon-bch") : title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, _ref3);
}

var ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgBch, _extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var bch = (__webpack_require__.p + "static/media/bch.e57f2d22.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/btc.svg
function btc_extends() { btc_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return btc_extends.apply(this, arguments); }

function btc_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = btc_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function btc_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var btc_ref2 =
/*#__PURE__*/
react_default.a.createElement("desc", null, "Created with Sketch.");

var btc_ref3 =
/*#__PURE__*/
react_default.a.createElement("g", {
  id: "Page-1",
  stroke: "none",
  strokeWidth: 1,
  fill: "none",
  fillRule: "evenodd"
}, react_default.a.createElement("g", {
  id: "btc"
}, react_default.a.createElement("circle", {
  id: "Oval",
  fill: "#F09242",
  cx: 12.5,
  cy: 12.5,
  r: 12.5
}), react_default.a.createElement("path", {
  d: "M17.9873,9.54464 C17.8004,7.58259 16.1118,6.92299 13.98263,6.73214 L13.98263,4.0100446 L12.34071,4.0100446 L12.34071,6.66183 C11.90688,6.66183 11.46303,6.66183 11.00583,6.67857 L11.00583,4 L9.35724,4 L9.35724,6.73214 L8.30602,6.73214 L6.0233605,6.73214 L6.0233605,8.50335 C6.0233605,8.50335 7.24478,8.47991 7.22476,8.50335 C7.68601,8.44561 8.10863,8.76846 8.17587,9.22991 L8.17587,16.6931 C8.16643,16.8486 8.09565,16.9939 7.97917,17.097 C7.86269,17.2 7.71011,17.2523 7.55514,17.2422 C7.57517,17.2623 6.353745,17.2422 6.353745,17.2422 L6,19.221 L8.14917,19.221 L9.33054,19.221 L9.33054,22 L11.00583,22 L11.00583,19.2612 L12.34071,19.2612 L12.34071,22 L14.00932,22 L14.00932,19.2377 C16.7892,19.0804 18.7315,18.3772 18.9751,15.7623 C19.172,13.65625 18.1842,12.7154 16.6057,12.3337 C17.5635,11.84487 18.1642,10.99442 18.024,9.54464 L17.9873,9.54464 Z M15.67793,15.4342 C15.67793,17.3233 12.72015,17.2792 11.36845,17.259 C11.24681,17.2572 11.13818,17.2556 11.04587,17.2556 L11.04587,13.60603 C11.15838,13.60637 11.29537,13.60346 11.45074,13.60017 C12.83474,13.57084 15.67793,13.5106 15.67793,15.4342 Z M11.31379,11.93845 C12.44339,11.95701 14.90704,11.99748 14.90704,10.28125 C14.90704,8.52874 12.53714,8.59065 11.38034,8.62086 C11.25087,8.62425 11.13659,8.62723 11.04254,8.62723 L11.04254,11.93527 C11.12013,11.93527 11.21149,11.93677 11.31379,11.93845 Z",
  id: "Shape",
  fill: "#FFFFFF"
})));

function SvgBtc(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = btc_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", btc_extends({
    width: "20px",
    height: "20px",
    viewBox: "0 0 25 25",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? react_default.a.createElement("title", {
    id: titleId
  }, "btc") : title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, btc_ref2, btc_ref3);
}

var btc_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgBtc, btc_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var btc = (__webpack_require__.p + "static/media/btc.4ef09d53.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/dai.svg
function dai_extends() { dai_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return dai_extends.apply(this, arguments); }

function dai_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = dai_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function dai_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var dai_ref2 =
/*#__PURE__*/
react_default.a.createElement("circle", {
  cx: 314.15,
  cy: 314.15,
  r: 309,
  fill: "#fff",
  stroke: "#ffce45",
  strokeMiterlimit: 10,
  strokeWidth: 10.3
});

var dai_ref3 =
/*#__PURE__*/
react_default.a.createElement("path", {
  fill: "#ffce45",
  d: "M314.152 72.307L550.856 309.01 314.152 545.715 77.448 309.01z"
});

var _ref4 =
/*#__PURE__*/
react_default.a.createElement("path", {
  fill: "#febe44",
  d: "M314.15 386.25L77.25 309l236.9-236.7L551.05 309l-236.9 77.25z"
});

var _ref5 =
/*#__PURE__*/
react_default.a.createElement("path", {
  fill: "#fff",
  d: "M159.65 293.55H267.8l46.35-51.5 51.5 51.5H473.8L314.15 121.03l-154.5 172.52z"
});

var _ref6 =
/*#__PURE__*/
react_default.a.createElement("path", {
  fill: "#d9a547",
  opacity: 0.42,
  d: "M314.15 545.7V72.3L550.85 309l-236.7 236.7z"
});

function SvgDai(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = dai_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", dai_extends({
    "data-name": "Layer 1",
    viewBox: "0 0 628.3 628.3",
    width: "20px",
    height: "20px",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? react_default.a.createElement("title", {
    id: titleId
  }, "dai") : title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, dai_ref2, dai_ref3, _ref4, _ref5, _ref6);
}

var dai_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgDai, dai_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var dai = (__webpack_require__.p + "static/media/dai.a9d5285c.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/eth.svg
function eth_extends() { eth_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return eth_extends.apply(this, arguments); }

function eth_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = eth_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function eth_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var eth_ref2 =
/*#__PURE__*/
react_default.a.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, react_default.a.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 16,
  fill: "#627eea"
}), react_default.a.createElement("g", {
  fill: "#FFF",
  fillRule: "nonzero",
  transform: "translate(9 4)"
}, react_default.a.createElement("polygon", {
  fillOpacity: 0.602,
  points: "7.498 0 7.498 8.87 14.995 12.22"
}), react_default.a.createElement("polygon", {
  points: "7.498 0 0 12.22 7.498 8.87"
}), react_default.a.createElement("polygon", {
  fillOpacity: 0.602,
  points: "7.498 17.968 7.498 23.995 15 13.616"
}), react_default.a.createElement("polygon", {
  points: "7.498 23.995 7.498 17.967 0 13.616"
}), react_default.a.createElement("polygon", {
  fillOpacity: 0.2,
  points: "7.498 16.573 14.995 12.22 7.498 8.872"
}), react_default.a.createElement("polygon", {
  fillOpacity: 0.602,
  points: "0 12.22 7.498 16.573 7.498 8.872"
})));

function SvgEth(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = eth_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", eth_extends({
    width: "20px",
    height: "20px",
    viewBox: "0 0 32 32",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, eth_ref2);
}

var eth_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgEth, eth_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var eth = (__webpack_require__.p + "static/media/eth.a0e920e8.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/ren.svg
function ren_extends() { ren_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ren_extends.apply(this, arguments); }

function ren_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ren_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ren_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ren_ref2 =
/*#__PURE__*/
react_default.a.createElement("g", {
  fill: "#001c3a"
}, react_default.a.createElement("polygon", {
  points: "18.3,19.1 21.6,17.2 22.1,18 34.2,11 33.3,10.4 32.4,9.9 32,9.7 12.2,21.1 12.2,21.6 17.9,18.3  "
}), react_default.a.createElement("polygon", {
  points: "18.3,26.3 27.9,20.8 28.3,21.6 40.4,14.5 39.6,14 38.7,13.5 38.2,13.3 12.2,28.3 12.2,28.8 17.9,25.5  "
}), react_default.a.createElement("polygon", {
  points: "18.3,29.9 31,22.6 31.4,23.3 43.6,16.3 42.7,15.8 41.8,15.3 41.3,15.1 12.2,31.9 12.2,32.4 17.9,29.1  "
}), react_default.a.createElement("polygon", {
  points: "18.3,33.5 34.2,24.3 34.6,25.1 46.7,18.1 45.8,17.6 44.9,17.1 44.4,16.9 12.2,35.5 12.2,36 17.9,32.7  "
}), react_default.a.createElement("polygon", {
  points: "18.3,37.1 37.3,26.1 37.7,26.9 49.8,19.9 48.9,19.4 48,18.9 47.6,18.6 12.2,39.1 12.2,39.6 17.9,36.3  "
}), react_default.a.createElement("polygon", {
  points: "51.1,20.7 50.7,20.4 12.2,42.7 12.2,43.2 17.9,39.9 18.3,40.7 37.3,29.7 37.7,30.5 51.8,22.4 51.8,21.3 51.8,21.1  "
}), react_default.a.createElement("polygon", {
  points: "14.7,45.3 17.8,43.5 18.3,44.3 37.2,33.4 37.6,34.1 51.8,26 51.8,24.9 51.8,23.9 51.8,23.4 14.2,45.1  "
}), react_default.a.createElement("polyline", {
  points: "37.2,37 37.6,37.7 51.8,29.6 51.8,28.5 51.8,27.5 51.8,27 17.3,46.9 17.8,47.1 21,45.3 21.5,46  "
}), react_default.a.createElement("polygon", {
  points: "20.9,48.9 24.1,47.1 24.6,47.8 37.2,40.5 37.6,41.3 51.8,33.2 51.8,32.1 51.8,31.1 51.8,30.6 20.4,48.7  "
}), react_default.a.createElement("polygon", {
  points: "24,50.7 27.2,48.9 27.7,49.6 37.2,44.1 37.6,44.9 51.8,36.7 51.8,35.7 51.8,34.7 51.8,34.2 23.6,50.5  "
}), react_default.a.createElement("polygon", {
  points: "26.7,52.3 27.1,52.5 30.3,50.7 30.8,51.4 37.2,47.7 37.6,48.5 51.8,40.3 51.8,39.3 51.8,38.3 51.8,37.8  "
}), react_default.a.createElement("polygon", {
  points: "30.2,54.3 33.5,52.5 33.9,53.2 37.2,51.3 37.6,52.1 51.8,43.9 51.8,42.9 51.8,41.9 51.8,41.4 29.8,54.1  "
}), react_default.a.createElement("polygon", {
  points: "37.3,12.7 36.4,12.2 36.4,12.2 35.6,11.7 35.1,11.5 12.2,24.7 12.2,25.2 17.9,21.9 18.3,22.7 24.8,19 25.2,19.8  "
}));

function SvgRen(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = ren_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", ren_extends({
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "9 9 46 46",
    style: {
      enableBackground: "new 9 9 46 46"
    },
    xmlSpace: "preserve",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, ren_ref2);
}

var ren_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgRen, ren_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var ren = (__webpack_require__.p + "static/media/ren.8353410b.svg");

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/img/zec.svg
function zec_extends() { zec_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return zec_extends.apply(this, arguments); }

function zec_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = zec_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function zec_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var zec_ref2 =
/*#__PURE__*/
react_default.a.createElement("path", {
  fill: "#231f20",
  d: "M245.4,20C121.11,20,20,121.11,20,245.39s101.11,225.4,225.4,225.4,225.39-101.11,225.39-225.4S369.68,20,245.4,20Zm0,413.58c-103.77,0-188.19-84.42-188.19-188.19S141.63,57.21,245.4,57.21s188.18,84.42,188.18,188.18S349.16,433.58,245.4,433.58Z"
});

var zec_ref3 =
/*#__PURE__*/
react_default.a.createElement("circle", {
  fill: "#f4b728",
  cx: 245.4,
  cy: 245.39,
  r: 177.65
});

var zec_ref4 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "325.78 175.13 325.78 140.75 264.28 140.75 264.28 103.02 226.51 103.02 226.51 140.75 165.02 140.75 165.02 186.29 260.35 186.29 182.39 293.58 165.02 315.66 165.02 350.04 226.51 350.04 226.51 387.65 231.04 387.65 231.04 387.81 259.75 387.81 259.75 387.65 264.28 387.65 264.28 350.04 325.78 350.04 325.78 304.5 230.44 304.5 308.4 197.21 325.78 175.13"
});

function SvgZec(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = zec_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", zec_extends({
    id: "Layer_1",
    "data-name": "Layer 1",
    viewBox: "0 0 493.33 490.18",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? react_default.a.createElement("title", {
    id: titleId
  }, "headerArtboard 7") : title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, zec_ref2, zec_ref3, zec_ref4);
}

var zec_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgZec, zec_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var zec = (__webpack_require__.p + "static/media/zec.ef5cb6e2.svg");

// CONCATENATED MODULE: ./src/lib/sendCrypto.tsx
var Token;(function(Token){Token["ETH"]="ETH";Token["REN"]="REN";Token["DAI"]="DAI";Token["BTC"]="BTC";Token["ZEC"]="ZEC";Token["BCH"]="BCH";Token["zBTC"]="zBTC";Token["zBCH"]="zBCH";Token["zZEC"]="zZEC";})(Token||(Token={}));var getCryptoAccountToken=function getCryptoAccountToken(token){switch(token){case Token.ETH:case Token.BTC:case Token.ZEC:case Token.BCH:return token;case Token.REN:return{type:"ERC20",address:"0x2CD647668494c1B15743AB283A0f980d90a87394"};case Token.DAI:return{type:"ERC20",address:"0xC4375B7De8af5a38a93548eb8453a498222C4fF2"};case Token.zBTC:return{type:"ERC20",address:"0xc6069E8DeA210C937A846db2CEbC0f58ca111f26"};case Token.zBCH:return{type:"ERC20",address:"0x7bdb2A8231eB4E4795749F01f0241940a8166575"};case Token.zZEC:return{type:"ERC20",address:"0xB9b5B5346BF8CA9bc02f4F9d8947916b7CA9C97E"};}};var getExplorerLink=function getExplorerLink(token,transactionHash){switch(token){case Token.ETH:case Token.REN:case Token.zBTC:case Token.zBCH:case Token.zZEC:case Token.DAI:return"https://kovan.etherscan.io/tx/".concat(transactionHash);case Token.BTC:return"https://chain.so/tx/BTCTEST/".concat(transactionHash);case Token.ZEC:return"https://chain.so/tx/ZECTEST/".concat(transactionHash);case Token.BCH:return"https://explorer.bitcoin.com/tbch/tx/".concat(transactionHash);}};var TokenIcons=Object(immutable_es["b" /* OrderedMap */])().set(Token.ETH,eth_ForwardRef).set(Token.REN,ren_ForwardRef).set(Token.DAI,dai_ForwardRef).set(Token.BTC,btc_ForwardRef).set(Token.ZEC,zec_ForwardRef).set(Token.BCH,ForwardRef).set(Token.zBTC,btc_ForwardRef).set(Token.zZEC,zec_ForwardRef).set(Token.zBCH,ForwardRef);var sendCrypto_sendTokens=function sendTokens(cryptoAccount,token,recipient,amount,addMessage){var txHash;return regenerator_default.a.async(function sendTokens$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!isNaN(parseInt(amount))){_context.next=2;break;}throw new Error("Invalid amount ".concat(amount));case 2:_context.prev=2;_context.next=5;return regenerator_default.a.awrap(new Promise(function(resolve,reject){cryptoAccount.send(recipient,amount,getCryptoAccountToken(token)).on("transactionHash",resolve).catch(reject);}));case 5:txHash=_context.sent;addMessage({type:MessageType.INFO,key:token,message:react["createElement"]("span",null,"Sending ",amount," ",token," (",react["createElement"]("a",{href:getExplorerLink(token,txHash)},"Explorer Link"),")")});_context.next=15;break;case 9:_context.prev=9;_context.t0=_context["catch"](2);console.error(_context.t0);if(!(_context.t0.message&&_context.t0.message.match("newBlockHeaders "))){_context.next=14;break;}return _context.abrupt("return");case 14:addMessage({type:MessageType.ERROR,key:token,message:react["createElement"]("span",null,"Error sending ",token,": ",_context.t0.message)});case 15:case"end":return _context.stop();}}},null,null,[[2,9]]);};var sendCrypto_balanceOf=function balanceOf(cryptoAccount,token){return cryptoAccount.balanceOf(getCryptoAccountToken(token),{bn:bignumber_default.a});};var extractError=function extractError(error){if(typeof error==="object"){if(error.response){return extractError(error.response);}if(error.data){return extractError(error.data);}if(error.error){return extractError(error.error);}if(error.message){return extractError(error.message);}if(error.statusText){return extractError(error.statusText);}try{return JSON.stringify(error);}catch(error){// Ignore JSON error
}}return String(error);};
// CONCATENATED MODULE: ./src/components/Addresses.tsx
var Addresses_Addresses=function Addresses(_ref){var cryptoAccount=_ref.cryptoAccount;var _React$useState=react["useState"](null),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),ETHAddress=_React$useState2[0],setETHAddress=_React$useState2[1];var _React$useState3=react["useState"](null),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),BTCAddress=_React$useState4[0],setBTCAddress=_React$useState4[1];var _React$useState5=react["useState"](null),_React$useState6=Object(slicedToArray["a" /* default */])(_React$useState5,2),ZECAddress=_React$useState6[0],setZECAddress=_React$useState6[1];var _React$useState7=react["useState"](null),_React$useState8=Object(slicedToArray["a" /* default */])(_React$useState7,2),BCHAddress=_React$useState8[0],setBCHAddress=_React$useState8[1];react["useEffect"](function(){(function _callee(){return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:cryptoAccount.address("ETH").then(setETHAddress);cryptoAccount.address("BTC").then(setBTCAddress);cryptoAccount.address("ZEC").then(setZECAddress);cryptoAccount.address("BCH").then(setBCHAddress);case 4:case"end":return _context.stop();}}});})().catch(console.error);},[]);var _React$useState9=react["useState"](false),_React$useState10=Object(slicedToArray["a" /* default */])(_React$useState9,2),showingAddresses=_React$useState10[0],setShowingAddresses=_React$useState10[1];var showAddresses=react["useCallback"](function(){setShowingAddresses(!showingAddresses);},[showingAddresses]);return react["createElement"]("div",{className:"show-addresses"},showingAddresses?react["createElement"]("span",{style:{position:"absolute",top:"20px",right:"20px"}},"ETH address: ",ETHAddress||"",react["createElement"]("br",null),"BTC address: ",BTCAddress||"",react["createElement"]("br",null),"ZEC address: ",ZECAddress||"",react["createElement"]("br",null),"BCH address: ",BCHAddress||""):react["createElement"]("span",{onClick:showAddresses,role:"button",className:"show-addresses-button",style:{cursor:"pointer",position:"absolute",top:"20px",right:"20px"}},"Show addresses"));};
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.browser.esm.js + 25 modules
var react_select_browser_esm = __webpack_require__(312);

// EXTERNAL MODULE: ./node_modules/emotion/dist/emotion.esm.js + 1 modules
var emotion_esm = __webpack_require__(174);

// CONCATENATED MODULE: ./src/components/selectToken/Select.tsx
var extendClassName=function extendClassName(className,extra){return!className?extra:"".concat(className," ").concat(extra);};var Select_CustomValue=function CustomValue(props){var className=props.className,cx=props.cx,getStyles=props.getStyles,isDisabled=props.isDisabled,innerProps=props.innerProps,propChilren=props.children;var option=props.data;var children=react["createElement"](react["Fragment"],null,react["createElement"](option.image),propChilren);return react["createElement"]("div",Object.assign({className:extendClassName(cx(// tslint:disable-next-line: no-any
Object(emotion_esm["a" /* css */])(getStyles("singleValue",props)),{"single-value":true,"single-value--is-disabled":isDisabled},className),"Select--currency__value")},innerProps),children);};var Select_CustomOption=function CustomOption(props){var children=props.children,className=props.className,cx=props.cx,getStyles=props.getStyles,isDisabled=props.isDisabled,isFocused=props.isFocused,isSelected=props.isSelected,innerRef=props.innerRef,innerProps=props.innerProps;var option=props.data;return react["createElement"]("div",Object.assign({ref:innerRef,className:extendClassName(extendClassName(cx(Object(emotion_esm["a" /* css */])(getStyles("option",props)),{option:true,"option--is-disabled":isDisabled,"option--is-focused":isFocused,"option--is-selected":isSelected},className),"Select--currency__option"),isSelected?"Select--currency__option--selected":"")},innerProps),react["createElement"](option.image),children,react["createElement"]("span",{className:"option-balance"},"(",option.balance.decimalPlaces(5).toString()," ",option.value,")"));};
// EXTERNAL MODULE: ./src/components/selectToken/styles.scss
var selectToken_styles = __webpack_require__(765);

// CONCATENATED MODULE: ./src/components/selectToken/SelectToken.tsx
/**
 * SelectToken allows the user to select a market from two token dropdowns
 */var SelectToken_SelectToken=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(SelectToken,_React$Component);function SelectToken(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,SelectToken);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(SelectToken)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.handleChange=function(event){var newToken=event.value;_this.props.onChange(newToken);};return _this;}Object(createClass["a" /* default */])(SelectToken,[{key:"render",/**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */value:function render(){// Retrieve the order inputs from the store.
var _this$props=this.props,token=_this$props.token,allTokens=_this$props.allTokens,disabled=_this$props.disabled;var customStyles={// tslint:disable-next-line: no-any
option:function option(provided,state){return Object(objectSpread2["a" /* default */])({},provided,{backgroundColor:state.isSelected?"rgba(0, 27, 58, 0.1)":"transparent","&:hover":{backgroundColor:"rgba(219, 224, 232, 0.3)"}});}};var tokens=allTokens.valueSeq().toArray();return react["createElement"](react_select_browser_esm["a" /* default */],{className:"Select--currency",classNamePrefix:"Select--currency",name:"quoteCode",value:tokens.find(function(option){return option.value===token;})||null,onChange:this.handleChange,options:tokens,components:{SingleValue:Select_CustomValue,Option:Select_CustomOption},isClearable:false,backspaceRemovesValue:false,styles:customStyles,placeholder:"",isDisabled:disabled});}// tslint:disable-next-line:no-any
}]);return SelectToken;}(react["Component"]);
// CONCATENATED MODULE: ./src/components/Faucet.tsx
var MessageType;(function(MessageType){MessageType["ERROR"]="error";MessageType["INFO"]="info";})(MessageType||(MessageType={}));var Faucet_Faucet=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Faucet,_React$Component);function Faucet(props,context){var _this;Object(classCallCheck["a" /* default */])(this,Faucet);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Faucet).call(this,props,context));_this.timeout=void 0;_this.showAddresses=function(){_this.setState({showingAddresses:true});};_this.addMessage=function(msg){var messages=_this.state.messages;_this.setState({messages:messages.push(msg)});};_this.handleSelect=function(selectedToken){_this.setState({selectedToken:selectedToken});};_this.handleInput=function(event){var element=event.target;_this.setState(function(state){return Object(objectSpread2["a" /* default */])({},state,Object(defineProperty["a" /* default */])({},element.name,element.value));});};_this.handleFaucet=function _callee(event){var _this$state,recipient,cryptoAccount,selectedToken,value,submitting;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:event.preventDefault();_this$state=_this.state,recipient=_this$state.recipient,cryptoAccount=_this$state.cryptoAccount,selectedToken=_this$state.selectedToken,value=_this$state.value,submitting=_this$state.submitting;if(!(!selectedToken||recipient===""||value===""||submitting)){_context.next=4;break;}return _context.abrupt("return");case 4:_this.setState({submitting:true,messages:Object(immutable_es["a" /* List */])()});_context.prev=5;_context.next=8;return regenerator_default.a.awrap(sendCrypto_sendTokens(cryptoAccount,selectedToken,recipient,value,_this.addMessage));case 8:_context.next=14;break;case 10:_context.prev=10;_context.t0=_context["catch"](5);console.error(_context.t0);_this.addMessage({key:"general",type:MessageType.ERROR,message:react["createElement"](react["Fragment"],null,extractError(_context.t0))});case 14:_this.setState({submitting:false});case 15:case"end":return _context.stop();}}},null,null,[[5,10]]);};_this.state={recipient:"",value:"",selectedToken:undefined,messages:Object(immutable_es["a" /* List */])(),balances:Object(immutable_es["b" /* OrderedMap */])(),balancesLoading:true,cryptoAccount:new build_module["a" /* default */](props.privateKey,{network:"kovan"}),submitting:false,showingAddresses:false};return _this;}Object(createClass["a" /* default */])(Faucet,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var cryptoAccount,loop;return regenerator_default.a.async(function componentDidMount$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:cryptoAccount=this.state.cryptoAccount;loop=function loop(){return regenerator_default.a.async(function loop$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_this2.setState({balancesLoading:true});_context3.next=3;return regenerator_default.a.awrap(Promise.all(TokenIcons.map(function _callee2(_icon,token){var balance;return regenerator_default.a.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return regenerator_default.a.awrap(sendCrypto_balanceOf(cryptoAccount,token));case 3:balance=_context2.sent;_this2.setState(function(state){return Object(objectSpread2["a" /* default */])({},state,{balances:state.balances.set(token,balance)});});_context2.next=10;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);console.error(_context2.t0);case 10:case"end":return _context2.stop();}}},null,null,[[0,7]]);})));case 3:_this2.setState({balancesLoading:false});if(_this2.timeout){clearTimeout(_this2.timeout);}_this2.timeout=setTimeout(loop,30*1000);case 6:case"end":return _context3.stop();}}});};loop();case 3:case"end":return _context4.stop();}}},null,this);}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.timeout){clearTimeout(this.timeout);}}},{key:"render",value:function render(){var _this$state2=this.state,recipient=_this$state2.recipient,messages=_this$state2.messages,balances=_this$state2.balances,submitting=_this$state2.submitting,cryptoAccount=_this$state2.cryptoAccount;return react["createElement"](react["Fragment"],null,react["createElement"](Addresses_Addresses,{cryptoAccount:cryptoAccount}),react["createElement"]("form",{className:"big-text",onSubmit:this.handleFaucet},"I want to receive",react["createElement"]("br",null),react["createElement"]("input",{disabled:submitting,className:"dashed input",name:"value",onChange:this.handleInput})," ",react["createElement"](SelectToken_SelectToken,{token:this.state.selectedToken,allTokens:TokenIcons.map(function(icon,token){return{label:token,image:icon,value:token,balance:balances.get(token,new bignumber_default.a(0))};}),onChange:this.handleSelect,disabled:submitting}),react["createElement"]("br",null),"at the address",react["createElement"]("br",null),react["createElement"](AutosizeInput_default.a,{disabled:submitting,className:"input dashed-address",value:recipient,name:"recipient",onChange:this.handleInput}),react["createElement"]("input",{disabled:submitting,type:"submit",style:{position:"absolute",left:"-9999px"}}),messages.map(function(msg){if(!msg){return react["createElement"](react["Fragment"],null);}return react["createElement"]("div",{key:msg.key,className:"message message-".concat(msg.type)},msg.message);})));}}]);return Faucet;}(react["Component"]);/* harmony default export */ var components_Faucet = (Faucet_Faucet);
// EXTERNAL MODULE: ./node_modules/localforage/dist/localforage.js
var localforage = __webpack_require__(173);
var localforage_default = /*#__PURE__*/__webpack_require__.n(localforage);

// EXTERNAL MODULE: ./node_modules/crypto-js/index.js
var crypto_js = __webpack_require__(123);

// CONCATENATED MODULE: ./src/components/Loading.tsx
/**
 * Loading is a visual component that renders a spinning animation
 */var Loading_Loading=function Loading(_ref){var alt=_ref.alt;return react["createElement"]("div",{className:"loading lds-dual-ring ".concat(alt?"alt":"")});};
// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/components/Lock.svg
function Lock_extends() { Lock_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Lock_extends.apply(this, arguments); }

function Lock_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Lock_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Lock_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Lock_ref2 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "155.47 168.67 214.45 134.76 222.41 148.47 439.74 23 423.96 13.86 407.89 4.57 399.93 0 45.63 204.64 45.63 213.78 147.51 154.96 155.47 168.67"
});

var Lock_ref3 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "155.47 297.53 325.91 199.04 333.87 212.9 551.2 87.43 535.27 78.14 519.5 69 511.54 64.43 45.63 333.36 45.63 342.5 147.37 283.67 155.47 297.53"
});

var Lock_ref4 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "155.47 361.96 381.64 231.33 389.61 245.04 607.08 119.42 591.15 110.43 575.23 101.14 567.12 96.57 45.63 397.64 45.63 406.93 147.37 348.1 155.47 361.96"
});

var Lock_ref5 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "155.47 426.24 438.85 262.59 446.96 276.3 662.81 151.71 646.74 142.43 630.82 133.28 622.85 128.71 45.63 462.07 45.63 471.21 147.37 412.38 155.47 426.24"
});

var Lock_ref6 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "155.47 490.53 494.58 294.73 502.54 308.59 718.39 183.86 702.47 174.71 686.69 165.43 678.73 160.85 45.63 526.36 45.63 535.5 147.37 476.81 155.47 490.53"
});

var _ref7 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "742.42 197.72 734.46 193 45.63 590.78 45.63 599.93 147.37 541.25 155.47 554.96 494.58 359.16 502.54 372.87 754.37 227.65 754.37 209.22 754.37 204.64 742.42 197.72"
});

var _ref8 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "89.42 639 146.48 606.12 154.44 619.83 493.11 424.33 501.07 438.19 754.37 291.93 754.37 273.5 754.37 255.07 754.37 245.93 81.46 634.43 89.42 639"
});

var _ref9 =
/*#__PURE__*/
react_default.a.createElement("polyline", {
  points: "493.11 488.76 501.07 502.62 754.37 356.36 754.37 337.93 754.37 319.5 754.37 310.36 137.19 666.57 145.15 671.14 203.24 637.67 211.06 651.53"
});

var _ref10 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "200.88 703.43 258.98 669.81 266.94 683.67 493.11 553.04 501.07 566.9 754.37 420.64 754.37 402.21 754.37 383.93 754.37 374.64 192.92 698.71 200.88 703.43"
});

var _ref11 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "256.62 735.57 314.71 702.1 322.67 715.81 493.11 617.47 501.07 631.18 754.37 484.92 754.37 466.64 754.37 448.21 754.37 439.07 248.66 731 256.62 735.57"
});

var _ref12 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "304.39 763.14 312.35 767.71 370.44 734.24 378.25 748.1 493.11 681.75 501.07 695.61 754.37 549.36 754.37 530.92 754.37 512.5 754.37 503.35 304.39 763.14"
});

var _ref13 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "368.08 800 426.17 766.38 434.13 780.24 493.11 746.04 501.07 759.9 754.37 613.78 754.37 595.36 754.37 576.93 754.37 567.78 360.12 795.43 368.08 800"
});

var _ref14 =
/*#__PURE__*/
react_default.a.createElement("polygon", {
  points: "495.61 55.14 479.54 46 479.54 46 463.62 36.86 455.66 32.14 45.63 268.93 45.63 278.07 147.37 219.39 155.47 233.1 270.18 166.9 278.14 180.76 495.61 55.14"
});

function SvgLock(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      titleId = _ref.titleId,
      props = Lock_objectWithoutProperties(_ref, ["svgRef", "title", "titleId"]);

  return react_default.a.createElement("svg", Lock_extends({
    id: "Layer_1",
    "data-name": "Layer 1",
    viewBox: "0 0 800 800",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title === undefined ? react_default.a.createElement("title", {
    id: titleId
  }, "icon") : title ? react_default.a.createElement("title", {
    id: titleId
  }, title) : null, Lock_ref2, Lock_ref3, Lock_ref4, Lock_ref5, Lock_ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14);
}

var Lock_ForwardRef = react_default.a.forwardRef(function (props, ref) {
  return react_default.a.createElement(SvgLock, Lock_extends({
    svgRef: ref
  }, props));
});
/* harmony default export */ var Lock = (__webpack_require__.p + "static/media/Lock.eee4a708.svg");

// CONCATENATED MODULE: ./src/components/Unlock.tsx
// Private key encrypted using AES
var cipher="U2FsdGVkX19cnGOapO8s2mn3c59JmPwh8D71r5Cb6XgjPSsmIutqxbIPr+kae4+s1C8Z+tZDXUHTvK/iKZvVsjLKaZOXE2v9zSvs0zYOrOJeSMYCKZM6a8vwGGjECqg9"||false;var Unlock_Unlock=function Unlock(_ref){var unlockCallback=_ref.unlockCallback;var _React$useState=react["useState"](""),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),password=_React$useState2[0],setPassword=_React$useState2[1];var _React$useState3=react["useState"](null),_React$useState4=Object(slicedToArray["a" /* default */])(_React$useState3,2),error=_React$useState4[0],setError=_React$useState4[1];var _React$useState5=react["useState"](false),_React$useState6=Object(slicedToArray["a" /* default */])(_React$useState5,2),loading=_React$useState6[0],setLoading=_React$useState6[1];var updatePassword=function updatePassword(event){var element=event.target;password=element.value;setPassword(password);};var handleUnlock=react["useCallback"](function(event){if(event){event.preventDefault();}setLoading(true);setError(null);setTimeout(function(){checkPassword(password).then(function(){return setLoading(false);}).catch(function(err){console.error(err);setLoading(false);});},100);},[password]);var checkPassword=react["useCallback"](function _callee(password){var originalPassword,passwordHash,i,privateKey;return regenerator_default.a.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:originalPassword=password;passwordHash=password;// This doesn't improve the encryption security, but slows down password
// attempts in the front-end.
for(i=0;i<100000;i++){passwordHash=Object(crypto_js["SHA256"])(passwordHash);}passwordHash=passwordHash.toString();// Decrypt
_context.prev=4;privateKey=crypto_js["AES"].decrypt(cipher.toString(),passwordHash).toString(crypto_js["enc"].Utf8);if(!(privateKey==="")){_context.next=8;break;}throw new Error("Access Denied");case 8:_context.next=15;break;case 10:_context.prev=10;_context.t0=_context["catch"](4);console.error(_context.t0);setError("Access Denied");return _context.abrupt("return");case 15:localforage_default.a.setItem("faucet-password",originalPassword);if(!unlockCallback){_context.next=20;break;}unlockCallback(privateKey);_context.next=21;break;case 20:return _context.abrupt("return");case 21:case"end":return _context.stop();}}},null,null,[[4,10]]);},[unlockCallback]);react["useEffect"](function(){(function _callee2(){var storedPassword;return regenerator_default.a.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regenerator_default.a.awrap(localforage_default.a.getItem("faucet-password"));case 2:storedPassword=_context2.sent;if(storedPassword){password=storedPassword;setPassword(password);setTimeout(handleUnlock,100);}case 4:case"end":return _context2.stop();}}});})().catch(console.error);},[]);return react["createElement"](react["Fragment"],null,react["createElement"]("div",{className:"Unlock"},react["createElement"](Lock_ForwardRef,{className:"logo"}),react["createElement"]("form",{onSubmit:handleUnlock},react["createElement"]("input",{className:"password",placeholder:"Password",type:"password",value:password,name:"password",onChange:updatePassword}))),react["createElement"]("div",{className:"Unlock--after"},loading?react["createElement"]("div",{className:"error"},react["createElement"](Loading_Loading,null)):null,error!==null?react["createElement"]("div",{className:"error"},error):null));};/* harmony default export */ var components_Unlock = (Unlock_Unlock);
// CONCATENATED MODULE: ./src/components/App.tsx
var App_App=function App(){var _React$useState=react["useState"](null),_React$useState2=Object(slicedToArray["a" /* default */])(_React$useState,2),privateKey=_React$useState2[0],setPrivateKey=_React$useState2[1];return react["createElement"]("div",{className:"app"},privateKey===null?react["createElement"](components_Unlock,{unlockCallback:setPrivateKey}):react["createElement"](components_Faucet,{privateKey:privateKey}));};/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx
var ErrorBoundary_ErrorBoundary=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(ErrorBoundary,_React$Component);function ErrorBoundary(props){var _this;Object(classCallCheck["a" /* default */])(this,ErrorBoundary);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(ErrorBoundary).call(this,props));_this.componentDidCatch=function(error,errorInfo){_this.setState({error:error,errorInfo:errorInfo});};_this.state={error:null,errorInfo:null};return _this;}Object(createClass["a" /* default */])(ErrorBoundary,[{key:"render",/**
     * The main render function.
     * @dev Should have minimal computation, loops and anonymous functions.
     */value:function render(){if(this.state.errorInfo){// Error path
return react["createElement"]("div",null,react["createElement"]("h2",null,"Something went wrong."),react["createElement"]("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),react["createElement"]("br",null),this.state.errorInfo.componentStack));}// Normally, just render children
return this.props.children;}}]);return ErrorBoundary;}(react["Component"]);// tslint:disable-next-line: variable-name
var ErrorBoundary_catch_=function _catch_(children){return react["createElement"](ErrorBoundary_ErrorBoundary,null,children);};
// CONCATENATED MODULE: ./src/index.tsx
react_dom["render"](ErrorBoundary_catch_(react["createElement"](components_App,null)),document.getElementById("root"));

/***/ })

},[[318,1,2]]]);
//# sourceMappingURL=main.eaa5acf8.chunk.js.map