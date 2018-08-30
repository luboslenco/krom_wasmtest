
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
const wasmbin = Krom.loadBlob("main.wasm");
const memObj = new WebAssembly.Memory({initial:1});
const module = new WebAssembly.Module(wasmbin);
const instance = new WebAssembly.Instance(module, { "dummy" : { "memory" : memObj } }).exports;
const arr = new Float32Array(memObj.buffer);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;

arr[4] = 1;
arr[5] = 2;
arr[6] = 3;
arr[7] = 4;

// instance.func_f32x4_mul();
instance["func_f32x4_mul"]();
// Krom.log(arr[0].toString());

clearColor = 0xffff0000;
