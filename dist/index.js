import { useEffect, useState } from 'react';
function useFlags({ apiServiceId, apiUrl }) {
    const fetchFlags = () => fetch(`${apiUrl}/services/${apiServiceId}/${flags}`).then((res) => res.json());
    const [flags, setFlags] = useState([]);
    useEffect(() => {
        fetchFlags().then(setFlags).catch((error) => {
            console.error('[QUIZEO-USE-FLAGS] Could not fetch flags from API.', error);
        });
    }, [fetchFlags, setFlags]);
    const isFlagOn = flagKey => {
        return flags.find(({ key }) => key === flagKey)?.enabled ?? false;
    };
    const getFlag = flagKey => {
        return flags.find(({ key }) => key === flagKey);
    };
    return { flags, isFlagOn, getFlag };
}
export { useFlags };
