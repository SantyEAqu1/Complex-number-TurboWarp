class HelloWorld {
  getInfo() {
    return {
      id: 'complex',
      name: 'Complex Scratch',
      blocks: [
        {
          opcode: 'i',
          blockType: Scratch.BlockType.REPORTER,
          text: 'i'
        }
      ]
    };
  }

  i() {
    return 'i!';
  }
}

Scratch.extensions.register(new HelloWorld());