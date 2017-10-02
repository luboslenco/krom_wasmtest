# krom_wasmtest
Running WebAssembly in Krom

Compile wasm:

```
./emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit
source ./emsdk_env.sh
emcc hello.c -s WASM=1 -o hello.js -O3
```
