'use strict';

var _uniqBy2 = require('lodash/uniqBy');

var _uniqBy3 = _interopRequireDefault(_uniqBy2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _pluginBase = require('../../pluginBase');

var _pluginBase2 = _interopRequireDefault(_pluginBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Instantiate the plugin
var filterPlugin = new _pluginBase2.default('Filter', 'Core'); /**
                                                                * Mixes in methods used to filter sets of data
                                                                *
                                                                * @class Nextract.Plugins.Core.Filter
                                                                */

module.exports = {

  /**
   * Iterates over elements of collection, returning an array of all elements
   * that equal the given testValue.
   *
   * @method equals
   * @example
   *     ETL.Plugins.Core.Filter.equals(collection, 'foo', 'name');
    * @param {Array|Object} collection The collection to iterate over
   * @param {String|Number} valueToTest The value being against during each iteration
   * @param {String} propertyToTest The object property name being tested against during each iteration
   *
   * @return {Promise} Promise resolved with an array of all elements that equal the testValue
   */
  equals: function equals(collection, propertyToTest, valueToTest) {
    var taskName = 'greaterThan';
    var updatedCollection = void 0;

    return new Promise(function (resolve, reject) {
      filterPlugin.setupTaskEngine().then(filterPlugin.startTask(taskName)).then(function () {
        updatedCollection = (0, _filter3.default)(collection, function (v) {
          return v[propertyToTest] == valueToTest;
        });
      }).then(filterPlugin.endTask(taskName)).then(function () {
        resolve(updatedCollection);
      });
    });
  },

  /**
   * Iterates over elements of collection, returning an array of all elements
   * that are greater than the given number.
   *
   * @method greaterThan
   * @example
   *     ETL.Plugins.Core.Filter.greaterThan(collection, 10);
    * @param {Array|Object} collection The collection to iterate over
   * @param {String|Number} valueToTest The value being against during each iteration
   * @param {String} propertyToTest The object property name being tested against during each iteration
   *
   * @return {Promise} Promise resolved with an array of all elements that are greater than the testValue
   */
  greaterThan: function greaterThan(collection, propertyToTest, valueToTest) {
    var taskName = 'greaterThan';
    var updatedCollection = void 0;

    return new Promise(function (resolve, reject) {
      filterPlugin.setupTaskEngine().then(filterPlugin.startTask(taskName)).then(function () {
        updatedCollection = (0, _filter3.default)(collection, function (v) {
          return v[propertyToTest] > valueToTest;
        });
      }).then(filterPlugin.endTask(taskName)).then(function () {
        resolve(updatedCollection);
      });
    });
  },

  /**
   * Iterates over elements of collection, returning an array of all elements
   * that are less than the given number.
   *
   * @method lessThan
   * @example
   *     ETL.Plugins.Core.Filter.lessThan(collection, 10);
    * @param {Array|Object} collection The collection to iterate over
   * @param {String|Number} valueToTest The value being against during each iteration
   * @param {String} propertyToTest The object property name being tested against during each iteration
   *
   * @return {Promise} Promise resolved with an array of all elements that are less than the testValue
   */
  lessThan: function lessThan(collection, propertyToTest, valueToTest) {
    var taskName = 'lessThan';
    var updatedCollection = void 0;

    return new Promise(function (resolve, reject) {
      filterPlugin.setupTaskEngine().then(filterPlugin.startTask(taskName)).then(function () {
        updatedCollection = (0, _filter3.default)(collection, function (v) {
          return v[propertyToTest] < valueToTest;
        });
      }).then(filterPlugin.endTask(taskName)).then(function () {
        resolve(updatedCollection);
      });
    });
  },

  /**
   * Creates a duplicate-free version of a collection, using SameValueZero for equality comparisons, in which
   * only the first occurrence of each element is kept.
   *
   * For usage reference - https://lodash.com/docs#uniqBy
   *
   * @method uniqBy
   * @example
   *     ETL.Plugins.Core.Filter.uniqBy(collection, 'last_name');
    * @param {Array|Object} collection The collection to iterate over
   * @param {String} propertyToTest The object property name being tested against during each iteration
   *
   * @return {Promise} Promise resolved with the new duplicate free array
   */
  uniqBy: function uniqBy(collection, propertyToTest) {
    var taskName = 'uniqBy';
    var updatedCollection = void 0;

    return new Promise(function (resolve, reject) {
      filterPlugin.setupTaskEngine().then(filterPlugin.startTask(taskName)).then(function () {
        updatedCollection = (0, _uniqBy3.default)(collection, propertyToTest);
      }).then(filterPlugin.endTask(taskName)).then(function () {
        resolve(updatedCollection);
      });
    });
  }

};