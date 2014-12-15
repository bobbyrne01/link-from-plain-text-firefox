var ContextMenu = require("sdk/context-menu"),
  Data = require("./Data"),
  Tabs = require("sdk/tabs"),
  Notification = require("./Notification");

exports.init = function() {
	
  ContextMenu.Item({
    label: "Open Plain Text as Link",
    context: ContextMenu.SelectionContext(),
    contentScriptFile: [ Data.get("js/ListenForContextClick.js") ],
    onMessage: function (text) {    	

      Notification.sendMsg("Opening in current tab");
      Tabs.activeTab.url = text;
    }
  });

  ContextMenu.Item({
    label: "Open Plain Text as Link in New Tab",
    context: ContextMenu.SelectionContext(),
    contentScriptFile: [ Data.get("js/ListenForContextClick.js") ],
    onMessage: function (text) {

      Notification.sendMsg("Opening in new tab");
      Tabs.open(text);
    }
  });
};
