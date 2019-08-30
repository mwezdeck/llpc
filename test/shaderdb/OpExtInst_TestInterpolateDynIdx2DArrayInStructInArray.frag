#version 450 core

struct Struct_2
{
   float b;
   vec4 array[3][2];
   float c;
};
struct Struct_1
{
   float f;
   Struct_2 s2;
};

layout(location = 0) out vec4 frag_color;
layout(location = 10) in Struct_1 interp[2];
layout(location = 28) in flat int x;
layout(location = 29) in flat int y;
layout(location = 30) in flat int z;


void main()
{
    frag_color = interpolateAtOffset(interp[x].s2.array[y][z], vec2(0));
}
// BEGIN_SHADERTEST
/*
; RUN: amdllpc -spvgen-dir=%spvgendir% -v %gfxip %s | FileCheck -check-prefix=SHADERTEST %s
; SHADERTEST-LABEL: {{^// LLPC}} SPIRV-to-LLVM translation results
; SHADERTEST: %{{[0-9]*}} = call {{.*}} <4 x float> @_Z19interpolateAtOffsetPDv4_fDv2_f(<4 x float> addrspace(64)* %{{.*}}, <2 x float> {{.*}})
; SHADERTEST-LABEL: {{^// LLPC}} SPIR-V lowering results
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 12, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 13, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 14, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 15, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 16, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 17, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 21, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 22, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 23, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 24, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 25, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: %{{[0-9]*}} = call <2 x float> @llpc.input.interpolate.evalij.offset.v2f32(<2 x float> {{.*}})
; SHADERTEST: %{{[0-9]*}} = call <4 x float> @llpc.input.import.interpolant.v4f32.i32.i32.i32.i32.v2f32(i32 26, i32 0, i32 0, i32 0, <2 x float> %{{.*}})
; SHADERTEST: AMDLLPC SUCCESS
*/
// END_SHADERTEST
