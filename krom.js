function dropFilesCallback(path) {}
function cutCallback() { return ""; }
function copyCallback() { return ""; }
function pasteCallback(string) {}
function foregroundCallback() {}
function resumeCallback() {}
function pauseCallback() {}
function backgroundCallback() {}
function shutdownCallback() {}
function keyboardDownCallback(key) {}
function keyboardUpCallback(key) {}
function keyboardPressCallback(char) {}
function mouseDownCallback(button, x, y) {}
function mouseUpCallback(button, x, y) {}
function mouseMoveCallback(x, y, mx, my) {}
function mouseWheelCallback(delta) {}
function gamepadAxisCallback(gamepad, axis, value) {}
function gamepadButtonCallback(gamepad, button, value) {}
function penDownCallback(x, y, pressure) {}
function penUpCallback(x, y, pressure) {}
function penMoveCallback(x, y, pressure) {}
function audioCallback(samples) {}

let api = 3;
const resizable = 1;
const minimizable = 2;
const maximizable = 4;
Krom.init("KromApp", 640, 480, 1, true, 0, resizable | minimizable | maximizable, api);
Krom.setCallback(renderCallback);
Krom.setDropFilesCallback(dropFilesCallback);
Krom.setCutCopyPasteCallback(cutCallback, copyCallback, pasteCallback);
Krom.setApplicationStateCallback(foregroundCallback, resumeCallback, pauseCallback, backgroundCallback, shutdownCallback);
Krom.setKeyboardDownCallback(keyboardDownCallback);
Krom.setKeyboardUpCallback(keyboardUpCallback);
Krom.setKeyboardPressCallback(keyboardPressCallback);
Krom.setMouseDownCallback(mouseDownCallback);
Krom.setMouseUpCallback(mouseUpCallback);
Krom.setMouseMoveCallback(mouseMoveCallback);
Krom.setMouseWheelCallback(mouseWheelCallback);
Krom.setGamepadAxisCallback(gamepadAxisCallback);
Krom.setGamepadButtonCallback(gamepadButtonCallback);
Krom.setPenDownCallback(penDownCallback);
Krom.setPenUpCallback(penUpCallback);
Krom.setPenMoveCallback(penMoveCallback);
Krom.setAudioCallback(audioCallback);

var clearColor = 0xff000000;

function renderCallback() {
	Krom.begin(null, null);
	
	let flags = 0;
	flags |= 1; // Color
	flags |= 2; // Depth
	Krom.clear(flags, clearColor, 1.0, null);

	Krom.end();
}

// Run wasm
var wasmbin = Krom.loadBlob("main.wasm");
module = new WebAssembly.Module(wasmbin);
// memory = new WebAssembly.Memory({initial: 10, maximum: 10});
exports = new WebAssembly.Instance(module).exports;
ar = new Float32Array(exports.memory.buffer, exports.getMemory(), 16 * 3);

for (var i = 16; i < 48; i++) {
	ar[i] = 1.0;
}

exports.mat4_multmat();
Krom.log(ar[0].toString());

clearColor = 0xffff0000;
