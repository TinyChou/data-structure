## WEBGL is just rasterization engine

It draw points, lines, and triangles based on code you supply.

## WEBGL run on GPU using GLSL(GL Shader Language)

Shader is typed C/C++ like language called GLSL.Paired together vertex shader and fragment shader called program.

1. a vertex shader is to compute vertex positions.
2. a fragment shader is to compute a color for each pixel of the primitive
currently being drawn.

## WEBGL API is about setting up state for pairs of functions to run.

And then execute a pair of functions calling *gl.drawArrays()* or *gl.drawElements* which executes your shaders on the GPU.

## 4 ways a shader can receive data

1. Attributes and Buffers

  Buffers are arrays of binary data you upload to the GPU.(positions, normals, texture coordinates, vertex colors, etc.)

  Attributes are used to specify how to pull out of your buffers and provide them to your vertex shader.

2. Uniforms

  Uniforms are effectively global variables you set before you execute your shader program.

3. Textures

  Textures are arrays of data you can randomly access in your shader program.

4. Varyings

  Varyings are a way for a vertex shader to pass data to a fragment shader.
