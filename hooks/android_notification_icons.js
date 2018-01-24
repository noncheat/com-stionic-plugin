#!/usr/bin/env node

var filestocopy = [{
  "resources/stionic/res/drawable-hdpi/ic_stat_onesignal_default.png":
  "platforms/android/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-mdpi/ic_stat_onesignal_default.png":
  "platforms/android/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xhdpi/ic_stat_onesignal_default.png":
  "platforms/android/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xxhdpi/ic_stat_onesignal_default.png":
  "platforms/android/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xxxhdpi/ic_stat_onesignal_default.png":
  "platforms/android/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
}];

var fs = require('fs');
var path = require('path');

console.log("Stionic.com: Creating OneSignal notification icon");
filestocopy.forEach(function (obj) {
  Object.keys(obj).forEach(function (key) {
    var val = obj[key];
    var srcfile = key;
    var destfile = val;
    var destdir = path.dirname(destfile);
    if (fs.existsSync(srcfile)) {
      if (!fs.existsSync(destdir)) fs.mkdirSync(destdir);
      console.log("copying " + srcfile + " to " + destfile);
      fs.createReadStream(srcfile).pipe(
        fs.createWriteStream(destfile));
    }
  });
});