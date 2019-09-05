# krom_wasmtest
Running WebAssembly in Krom

Compile wasm:

```
./emsdk activate --global --build=Release sdk-incoming-64bit binaryen-master-64bit
source ./emsdk_env.sh
emcc main.c -s WASM=1 -o main.js -O3
```
