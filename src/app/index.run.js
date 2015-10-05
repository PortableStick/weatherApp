(function() {
  'use strict';

  angular
    .module('weatherApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
