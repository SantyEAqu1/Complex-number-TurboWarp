class ComplexScratch {
  getInfo() {
    return {
      id: 'complex',
      name: 'Complex Scratch',
      blocks: [
        {
          opcode: 'imaginary',
          blockType: Scratch.BlockType.REPORTER,
          text: 'i'
        }
      ]
    };
  }

  imaginary() {
    return 'i';
  }
}

Scratch.extensions.register(new ComplexScratch());
