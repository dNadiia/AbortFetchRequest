import React, { useState } from 'react';
import { WelcomeView, LoadingView, StartView } from './components';
import { QueryPromise, startRequest } from './api';

export const App = () => {
    const [loading, setLoading] = useState(false);
    const [player, setPlayer] = useState<string | undefined>();
    const [query, setQuery] = useState<QueryPromise | null>(null);

    const onStart = () => {
        setLoading(true);
        const req = startRequest();
        setQuery(req);
        req.then((res) => {
            setLoading(false);
            setPlayer(res);
        });
    };

    const onCancel = () => {
        setLoading(false);
        query?.cancel();
    };

    if (player) return <WelcomeView player={player} />;

    if (loading) return <LoadingView onCancel={onCancel} />;

    return <StartView onStart={onStart} />;
};
