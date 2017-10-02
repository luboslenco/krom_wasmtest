#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int timesTwo(int x) {
	return x * 2;
}
