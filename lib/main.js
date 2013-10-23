var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "https://www.facebook.com/groups/hackersandhustlers/*",
  contentScriptFile: [self.data.url("jquery-1.8.3.min.js"),
                      self.data.url("script.js")]
});
