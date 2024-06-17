  class FetchExtension {
    getInfo() {
      return {
        id: 'fetchExtension',
        name: 'Fetch Extension',
        blocks: [
          {
            opcode: 'fetchData',
            blockType: 'command',
            text: 'FETCH url [URL] fetch what [QUERY] set fetch result to variable [VAR]',
            arguments: {
              URL: {
                type: 'string',
                defaultValue: 'https://api.example.com/your-url-here    '
              },
              QUERY: {
                type: 'string',
                defaultValue: 'data'
              },
              VAR: {
                type: 'variable'
              }
            }
          }
        ]
      };
    }
  
    fetchData(args, util) {
      const url = args.URL;
      const query = args.QUERY;
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          const result = data[query];
          util.target.variables[args.VAR].value = result;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
  
  Scratch.extensions.register(new FetchExtension());
  