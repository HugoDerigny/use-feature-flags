import React, { createContext, useContext, useEffect, useState } from 'react';
const FlagsContext = createContext({
    flags: [],
    getFlag: (key) => undefined,
    isFlagOn: (key) => false,
});
const useFlags = () => useContext(FlagsContext);
const FlagsProvider = ({ children, apiUrl, debug, apiServiceId }) => {
    const [flags, setFlags] = useState([]);
    const url = `${apiUrl}/services/${apiServiceId}/flags`;
    debug && console.debug('[USE-FLAGS DEBUG]', { url });
    const fetchFlags = () => fetch(url).then((res) => res.json());
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
    return React.createElement(FlagsContext.Provider, { value: { flags, isFlagOn, getFlag } }, children);
};
export { useFlags, FlagsProvider };
