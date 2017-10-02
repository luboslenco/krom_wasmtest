
Krom.init("KromApp", 640, 480, 0, false, 0);
Krom.setCallback(renderCallback);
Krom.setDropFilesCallback(dropFilesCallback);
Krom.setKeyboardDownCallback(keyboardDownCallback);
Krom.setKeyboardUpCallback(keyboardUpCallback);
Krom.setKeyboardPressCallback(keyboardPressCallback);
Krom.setMouseDownCallback(mouseDownCallback);
Krom.setMouseUpCallback(mouseUpCallback);
Krom.setMouseMoveCallback(mouseMoveCallback);
Krom.setMouseWheelCallback(mouseWheelCallback);
Krom.setGamepadAxisCallback(gamepadAxisCallback);
Krom.setGamepadButtonCallback(gamepadButtonCallback);
Krom.setAudioCallback(audioCallback);

var clearColor = 0xff000000;

function renderCallback() {
	Krom.begin(null, null);
	
	var flags = 0;
	flags |= 1; // Color
	flags |= 2; // Depth
	Krom.clear(flags, clearColor, 1.0, null);

	Krom.end();
}

function dropFilesCallback(path) {}
function keyboardDownCallback(key) {}
function keyboardUpCallback(key) {}
function keyboardPressCallback(char) {}
function mouseDownCallback(button, x, y) {}
function mouseUpCallback(button, x, y) {}
function mouseMoveCallback(x, y, mx, my) {}
function mouseWheelCallback(delta) {}
function gamepadAxisCallback(gamepad, axis, value) {}
function gamepadButtonCallback(gamepad, button, value) {}
function audioCallback(samples)  {}

// Run wasm
function read(path, type) {
	Krom.log('Read ' + path);
	var buffer = Krom.loadBlob(path);
	return type == 'binary' ? buffer : String.fromCharCode.apply(String, new Uint8Array(buffer));
}
var print = Krom.log;
var jsstr = read('hello.js');
var wasmbin = read('hello.wasm', 'binary');

var Module = {};
Module['wasmBinary'] = wasmbin;
Module['onRuntimeInitialized'] = function() {
	Krom.log('onRuntimeInitialized');

	// Set clear color to red on success
	clearColor = 0xffff0000;

	// timesTwo = Module.cwrap('timesTwo', 'number', ['number'])
	// timesTwo(3);
	// var result = Module.ccall('timesTwo', 'number', ['number'], [3]);
	// Module._timesTwo(3);
}

// Manual wasm init
// Module['instantiateWasm'] = function(importObject, successCallback) {

	// Sync
	// var myModule = new WebAssembly.Module(wasmbin);
	// var myInstance = new WebAssembly.Instance(myModule, importObject);
	// successCallback(myInstance);
	// return myModule.exports;

	// Async
	// WebAssembly.instantiate(new Uint8Array(wasmbin), importObject).then(function(output) {
		// successCallback(output.instance);
	// });
	// return {};
// }

eval.call(null, jsstr);
