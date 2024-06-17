class FetchExtension {
  getInfo() {
      return {
          id: 'fetchExtension',
          name: 'Fetch',
          blocks: [
              {
                  opcode: 'fetchUrl',
                  blockType: Scratch.BlockType.REPORTER, // REPORTER block is rounded
                  text: 'FETCH url [URL] fetch what [DATA]',
                  arguments: {
                      URL: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'https://jsonplaceholder.typicode.com/todos/1'
                      },
                      DATA: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'title'
                      }
                  }
              }
          ]
      };
  }

  fetchUrl(args) {
      const url = args.URL;
      const dataKey = args.DATA;

      return fetch(url)
          .then(response => response.json())
          .then(data => data[dataKey])
          .catch(error => {
              console.error('Error:', error);
              return 'Error';
          });
  }
}

Scratch.extensions.register(new FetchExtension());
