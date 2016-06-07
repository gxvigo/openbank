module.exports = function(Account) {

  // hide default created methods
  // https://docs.strongloop.com/display/APIC/Exposing+models+over+REST
  var isStatic = true;
  Account.disableRemoteMethod('exists', isStatic);
  Account.disableRemoteMethod("upsert", isStatic);
  Account.disableRemoteMethod("updateAll", isStatic);
  Account.disableRemoteMethod("findById", isStatic);
  Account.disableRemoteMethod("findOne", isStatic);
  Account.disableRemoteMethod("findById", isStatic);
  Account.disableRemoteMethod("deleteById", isStatic);
  Account.disableRemoteMethod("prototype.updateAttributes", isStatic);
  Account.disableRemoteMethod("count", isStatic);
  Account.disableRemoteMethod("createChangeStream", isStatic);  

};
