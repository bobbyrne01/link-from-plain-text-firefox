var { Hotkey } = require("sdk/hotkeys"),
  Tabs = require("sdk/tabs"),
  Notification = require("./Notification"),
  selection = require("sdk/selection");

exports.init = function() {
	
  Hotkey({
    combo: "accel-shift-c",
    onPress: function() {
      if(selection.text === "" || selection.text === null){
        Notification.sendMsg("No text selected");
      }else{
        Notification.sendMsg("Opening in current tab");
        Tabs.activeTab.url = selection.text;
      }
    }
  });

  Hotkey({
    combo: "accel-shift-t",
    onPress: function() {
      if(selection.text === "" || selection.text === null){
        Notification.sendMsg("No text selected");
      }else{
        Notification.sendMsg("Opening in new tab");
        Tabs.open(selection.text);
      }
    }
  });
};
