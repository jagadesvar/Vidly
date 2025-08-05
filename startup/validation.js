const BaseJoi = require('joi');
const JoiObjectId = require('joi-objectid');

module.exports = function () {
  BaseJoi.objectId = JoiObjectId(BaseJoi);
};