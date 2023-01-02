import useSWR from "swr";

const fetcher = (url) => {
    return fetch(url)
    .then(r => r.json())
}

export const useFetch = (relativeUrl, options = {}) => {
    const { data, error, isLoading } = useSWR(relativeUrl, () => fetcher(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/${relativeUrl}`),options);
    return { data, error, isLoading };
}