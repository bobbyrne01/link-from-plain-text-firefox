var notification = require("sdk/notifications"),
  Data = require("./Data");

exports.sendMsg = function(msg) {
  notification.notify({
    title: "Link from Plain Text",
    text: msg,
    iconURL: Data.get("images/ico.png")
  });
};
