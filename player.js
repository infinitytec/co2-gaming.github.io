var flashvars = {
  project: "project.sb2",
  autostart: "false"
};

var params = {
  bgcolor: “#FFFFFF”,
  allowScriptAccess: “always”,
  allowFullScreen: “true”,
  wmode: ‘window’,
  menu: ‘false’

};
var attributes = {};

swfobject.embedSWF(“scratch.swf”, “flashContent”, “100%”, “100%”, “10.2.0”,“expressInstall.swf”, flashvars, params, attributes);
