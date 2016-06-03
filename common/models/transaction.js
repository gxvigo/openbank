
// https://github.com/Neil-UWA/loopback-remote-routing
// https://docs.strongloop.com/display/APIC/Exposing+models+over+REST
var RemoteRouting = require('loopback-remote-routing');

module.exports = function(Transaction) {
  // use only to expose specified remote methods
  // symbol @ denotes static method
  // scope methods are static method
  RemoteRouting(Transaction, {only: [
      '@find',
      '@create',
      '@count'
  ]});

  //disable all remote methods omitting options

  // RemoteRouting(Bank)

};
