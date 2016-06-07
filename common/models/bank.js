

module.exports = function(Bank) {
 
  // hide default created methods
  // https://docs.strongloop.com/display/APIC/Exposing+models+over+REST
  var isStatic = true;
  Bank.disableRemoteMethod('exists', isStatic);
  Bank.disableRemoteMethod("upsert", isStatic);
  Bank.disableRemoteMethod("updateAll", isStatic);
  Bank.disableRemoteMethod("findById", isStatic);
  Bank.disableRemoteMethod("findOne", isStatic);
  Bank.disableRemoteMethod("findById", isStatic);
  Bank.disableRemoteMethod("deleteById", isStatic);
  Bank.disableRemoteMethod("prototype.updateAttributes", isStatic);
  Bank.disableRemoteMethod("count", isStatic);
  Bank.disableRemoteMethod("createChangeStream", isStatic);  

};
