test('givenMethodIsConfiguredToThrowException', () => {
    // Mocking MyList class
    const listMock = {
      add: jest.fn().mockImplementation(() => {
        throw new Error('IllegalStateException');
      })
    };
  
    // Verifying if an exception is thrown when calling the method
    expect(() => listMock.add('test')).toThrowError('IllegalStateException');
  });
  
