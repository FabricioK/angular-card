var hasRequire = typeof require === 'function';

(function (window, document, Card, angular, undefined) {
  'use strict';
  angular
    .module('pagueveloz.checkout', [])
    .controller('CheckoutCtrl', ['$scope', function ($scope) {
    }])
    .directive('paguevelozCheckout', ['$compile', function ($compile) {
      return {
        transclude:true,
        restrict: 'E',
        templateUrl:'src/templates/form-template.html',
        link: function (scope, element, attributes, checkoutCtrl) {
          
        }
      };
    }]);

})(window, window.document, hasRequire ? require('card') : window.Card, hasRequire ? require('angular') : window.angular);

if (typeof module !== 'undefined') {
  module.exports = 'pagueveloz.checkout';
}
