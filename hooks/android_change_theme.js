#!/usr/bin/env node

var fs = require("fs");
var manifest = 'platforms/android/app/src/main/AndroidManifest.xml';

if (!fs.existsSync(manifest)) {
  manifest = 'platforms/android/AndroidManifest.xml'
}

if(!fs.existsSync(manifest)) { 
  console.log('Stionic.com: Can not change application theme');
};

var data = fs.readFileSync(manifest, 'utf8');
var result = data.replace(
  'android:theme="@android:style/Theme.DeviceDefault.NoActionBar"',
  'android:theme="@style/Stionic"'
);
fs.writeFileSync(manifest, result, 'utf8');
console.log('Stionic.com: Changed application theme');