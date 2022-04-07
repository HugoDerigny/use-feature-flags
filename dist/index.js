import { useEffect, useState } from 'react';
const useFlags = ({ apiServiceId, apiUrl, debug }) => {
    const url = `${apiUrl}/services/${apiServiceId}/flags`;
    debug && console.debug('[USE-FLAGS DEBUG]', { url });
    const fetchFlags = () => fetch(url).then((res) => res.json());
    const [flags, setFlags] = useState([]);
    useEffect(() => {
        fetchFlags().then(setFlags).catch((error) => {
            debug && console.error('[USE-FLAGS] Could not fetch flags from API.', error);
        });
    }, []);
    const isFlagOn = flagKey => {
        return flags.find(({ key }) => key === flagKey)?.enabled ?? false;
    };
    const getFlag = flagKey => {
        return flags.find(({ key }) => key === flagKey);
    };
    return { flags, isFlagOn, getFlag };
};
export { useFlags };
