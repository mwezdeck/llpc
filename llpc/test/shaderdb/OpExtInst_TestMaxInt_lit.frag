#version 450

layout(binding = 0) uniform Uniforms
{
    int i1_1, i1_2;
    ivec3 i3_1, i3_2;
};

layout(location = 0) out vec4 fragColor;

void main()
{
    int i1_0 = max(i1_1, i1_2);

    ivec3 i3_0 = max(i3_1, i3_2);

    fragColor = (i1_0 != i3_0.x) ? vec4(0.0) : vec4(1.0);
}
// BEGIN_SHADERTEST
/*
; RUN: amdllpc -spvgen-dir=%spvgendir% -v %gfxip %s | FileCheck -check-prefix=SHADERTEST %s
; SHADERTEST-LABEL: {{^// LLPC}} SPIRV-to-LLVM translation results
; SHADERTEST: = icmp slt i32
; SHADERTEST: = select i1 %{{.*}}, i32
; SHADERTEST: = icmp slt <3 x i32>
; SHADERTEST: = select <3 x i1> %{{.*}}, <3 x i32>
; SHADERTEST: AMDLLPC SUCCESS
*/
// END_SHADERTEST
