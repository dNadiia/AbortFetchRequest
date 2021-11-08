interface CancelablePromise<T> extends Promise<T> {
    cancel: () => void;
}

export type QueryPromise = CancelablePromise<string>;

const BASE_URL = 'http://127.0.0.1:3000';

export function startRequest(): QueryPromise {
    const controller = new AbortController();

    const promise: Partial<QueryPromise> = new Promise((resolve) => {
        fetch(BASE_URL, { method: 'get', signal: controller.signal })
            .then((response) => response.text())
            .then((text) => resolve(text))
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Request was canceled');
                }
            });
    });
    promise.cancel = () => controller.abort();

    return promise as QueryPromise;
}
