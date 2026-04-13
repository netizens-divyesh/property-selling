// plugins/toJSON.js
function toJSON(schema) {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.password;
    },
  });
}

module.exports = toJSON;