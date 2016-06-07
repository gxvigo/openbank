module.exports = function(Transaction) {
 
  // hide default created methods
  // https://docs.strongloop.com/display/APIC/Exposing+models+over+REST
  var isStatic = true;
  Transaction.disableRemoteMethod('exists', isStatic);
  Transaction.disableRemoteMethod("upsert", isStatic);
  Transaction.disableRemoteMethod("updateAll", isStatic);
  Transaction.disableRemoteMethod("findById", isStatic);
  Transaction.disableRemoteMethod("findOne", isStatic);
  Transaction.disableRemoteMethod("findById", isStatic);
  Transaction.disableRemoteMethod("deleteById", isStatic);
  Transaction.disableRemoteMethod("prototype.updateAttributes", isStatic);
  Transaction.disableRemoteMethod("count", isStatic);
  Transaction.disableRemoteMethod("createChangeStream", isStatic);  

};
