const fetcher = (relativeUrl) =>
     fetch(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/${relativeUrl}`)
    .then(r => r.json());

export {fetcher};