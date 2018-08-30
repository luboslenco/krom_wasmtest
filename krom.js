
var clearColor = 0xff000000;

function renderCallback() {
	Krom.begin(null, null);
	
	var flags = 0;
	flags |= 1; // Color
	flags |= 2; // Depth
	Krom.clear(flags, clearColor, 1.0, null);

	Krom.end();
}

// title: String, width: Int, height: Int, samplesPerPixel: Int, vSync: Bool, windowMode: Int, resizable: Bool, maximizable: Bool, minimizable: Bool
Krom.init("Krom", 640, 480, 0, true, 0, false, false, true);
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
function audioCallback(samples) {}

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
