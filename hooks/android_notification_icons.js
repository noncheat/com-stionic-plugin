#!/usr/bin/env node

var filestocopy = [{
  "resources/stionic/res/drawable-hdpi/ic_stat_onesignal_default.png":
  "drawable-hdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-mdpi/ic_stat_onesignal_default.png":
  "drawable-mdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xhdpi/ic_stat_onesignal_default.png":
  "drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xxhdpi/ic_stat_onesignal_default.png":
  "drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/res/drawable-xxxhdpi/ic_stat_onesignal_default.png":
  "drawable-xxxhdpi/ic_stat_onesignal_default.png"
}, {
  "resources/stionic/ic_onesignal_large_icon_default.png":
  "drawable-xxxhdpi/ic_onesignal_large_icon_default.png"
}];

var fs = require('fs');
var path = require('path');

console.log("Stionic.com: Creating OneSignal notification icon");
filestocopy.forEach(function (obj) {
  Object.keys(obj).forEach(function (key) {
    var val = obj[key];
    var srcfile = key;
    var destfile = val;
    var destdir = null;
    if(fs.existsSync('platforms/android/app/src/main/res/')) {
      var destdir = 'platforms/android/app/src/main/res/' + path.dirname(destfile);
    } else if(fs.existsSync('platforms/android/res/')) {
      var destdir = 'platforms/android/res/' + path.dirname(destfile);
    }
    if(!destdir) return;
    destfile = destdir + '/' + path.basename(destfile);
    if (fs.existsSync(srcfile)) {
      if (!fs.existsSync(destdir)) fs.mkdirSync(destdir);
      console.log("copying " + srcfile + " to " + destfile);
      fs.createReadStream(srcfile).pipe(
        fs.createWriteStream(destfile));
    }
  });
});