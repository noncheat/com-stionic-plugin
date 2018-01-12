#!/usr/bin/env node

var fs = require("fs");
var path = require('path');
var et = require('cordova-android/node_modules/elementtree');
var manifest = 'platforms/android/AndroidManifest.xml';

if (fs.existsSync(manifest)) {
  var data = fs.readFileSync(manifest, 'utf8');
  var result = data.replace(
    'android:theme="@android:style/Theme.DeviceDefault.NoActionBar"',
    'android:theme="@style/Stionic"'
  );
  fs.writeFileSync(manifest, result, 'utf8');
  console.log('Stionic.com: Changed application theme');
}