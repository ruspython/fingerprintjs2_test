var suite = new Benchmark.Suite,
    fp,
    hashFunctions,
    otherFunctions,
    clbFunctions,
    keys = []
    ;

//suite.add('RegExp#test', function() {
//    /o/.test('Hello World!');
//})
//    .add('String#indexOf', function() {
//        'Hello World!'.indexOf('o') > -1;
//    })
//    .add('String#match', function() {
//        !!'Hello World!'.match(/o/);
//    })
//// add listeners
//    .on('cycle', function(event) {
//        console.log(String(event.target));
//    })
//    .on('complete', function() {
//        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
//    })
//// run async
//    .run({ 'async': true });

fp = new Fingerprint2();
keysFunctions = [
    "userAgentKey",
    "languageKey",
    "colorDepthKey",
    "screenResolutionKey",
    "timezoneOffsetKey",
    "sessionStorageKey",
    "localStorageKey",
    "indexedDbKey",
    "addBehaviorKey",
    "openDatabaseKey",
    "cpuClassKey",
    "platformKey",
    "doNotTrackKey",
    "pluginsKey",
    "canvasKey",
    "webglKey",
    "adBlockKey",
    "hasLiedLanguagesKey",
    "hasLiedResolutionKey",
    "hasLiedOsKey",
    "hasLiedBrowserKey",
    "touchSupportKey"
];

clbFunctions = [
    "jsFontsKey",
    "fontsKey",
    "flashFontsKey"
];

otherFunctions = [
    "x64hash128"
];

otherFunctions.forEach(function (funcName) {
    suite.add(funcName, function () {
        fp[funcName]();
    })
});

suite
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run({'async': true});