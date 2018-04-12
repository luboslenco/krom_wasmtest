#define WASM_EXPORT __attribute__((visibility("default")))

// output, mat1, mat2
float mem[16 * 3];

WASM_EXPORT
void mat4_multmat() { 
	mem[0]  = mem[16 + 0] * mem[32 + 0]  + mem[16 + 4] * mem[32 + 1]  + mem[16 + 8] * mem[32 + 2]   + mem[16 + 12] * mem[32 + 3];
	mem[4]  = mem[16 + 0] * mem[32 + 4]  + mem[16 + 4] * mem[32 + 5]  + mem[16 + 8] * mem[32 + 6]   + mem[16 + 12] * mem[32 + 7];
	mem[8]  = mem[16 + 0] * mem[32 + 8]  + mem[16 + 4] * mem[32 + 9]  + mem[16 + 8] * mem[32 + 10]  + mem[16 + 12] * mem[32 + 11];
	mem[12] = mem[16 + 0] * mem[32 + 12] + mem[16 + 4] * mem[32 + 13] + mem[16 + 8] * mem[32 + 14]  + mem[16 + 12] * mem[32 + 15];

	mem[1]  = mem[16 + 1] * mem[32 + 0]  + mem[16 + 5] * mem[32 + 1]  + mem[16 + 9] * mem[32 + 2]   + mem[16 + 13] * mem[32 + 3];
	mem[5]  = mem[16 + 1] * mem[32 + 4]  + mem[16 + 5] * mem[32 + 5]  + mem[16 + 9] * mem[32 + 6]   + mem[16 + 13] * mem[32 + 7];
	mem[9]  = mem[16 + 1] * mem[32 + 8]  + mem[16 + 5] * mem[32 + 9]  + mem[16 + 9] * mem[32 + 10]  + mem[16 + 13] * mem[32 + 11];
	mem[13] = mem[16 + 1] * mem[32 + 12] + mem[16 + 5] * mem[32 + 13] + mem[16 + 9] * mem[32 + 14]  + mem[16 + 13] * mem[32 + 15];

	mem[2]  = mem[16 + 2] * mem[32 + 0]  + mem[16 + 6] * mem[32 + 1]  + mem[16 + 10] * mem[32 + 2]  + mem[16 + 14] * mem[32 + 3];
	mem[6]  = mem[16 + 2] * mem[32 + 4]  + mem[16 + 6] * mem[32 + 5]  + mem[16 + 10] * mem[32 + 6]  + mem[16 + 14] * mem[32 + 7];
	mem[10] = mem[16 + 2] * mem[32 + 8]  + mem[16 + 6] * mem[32 + 9]  + mem[16 + 10] * mem[32 + 10] + mem[16 + 14] * mem[32 + 11];
	mem[14] = mem[16 + 2] * mem[32 + 12] + mem[16 + 6] * mem[32 + 13] + mem[16 + 10] * mem[32 + 14] + mem[16 + 14] * mem[32 + 15];

	mem[3]  = mem[16 + 3] * mem[32 + 0]  + mem[16 + 7] * mem[32 + 1]  + mem[16 + 11] * mem[32 + 2]  + mem[16 + 15] * mem[32 + 3];
	mem[7]  = mem[16 + 3] * mem[32 + 4]  + mem[16 + 7] * mem[32 + 5]  + mem[16 + 11] * mem[32 + 6]  + mem[16 + 15] * mem[32 + 7];
	mem[11] = mem[16 + 3] * mem[32 + 8]  + mem[16 + 7] * mem[32 + 9]  + mem[16 + 11] * mem[32 + 10] + mem[16 + 15] * mem[32 + 11];
	mem[15] = mem[16 + 3] * mem[32 + 12] + mem[16 + 7] * mem[32 + 13] + mem[16 + 11] * mem[32 + 14] + mem[16 + 15] * mem[32 + 15];
}

WASM_EXPORT
float* getMemory() {
	return &mem[0];
}
