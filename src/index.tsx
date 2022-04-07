import React, {createContext, FC, useContext, useEffect, useState} from 'react'
import {Flag, FlagFetcher, getFlag, isFlagOn, UseFlags, UseFlagsHook, UseFlagsParams} from './types'

const FlagsContext = createContext<UseFlagsHook>({
  flags: [],
  getFlag: (key: string) => undefined,
  isFlagOn: (key: string) => false,
});

const useFlags = () => useContext(FlagsContext);

const FlagsProvider: FC<UseFlagsParams> = ({ children, apiUrl, debug, apiServiceId }) => {
    const [flags, setFlags] = useState<Flag[]>([])

    const url = `${apiUrl}/services/${apiServiceId}/flags`

    debug && console.debug('[USE-FLAGS DEBUG]', { url })

    const fetchFlags: FlagFetcher = () => fetch(url).then((res) => res.json())


    useEffect(() => {
        fetchFlags().then(setFlags).catch((error) => {
            debug && console.error('[USE-FLAGS] Could not fetch flags from API.', error)
        })
    }, [])

    const isFlagOn: isFlagOn = flagKey => {
        return flags.find(({ key }) => key === flagKey)?.enabled ?? false
    }

    const getFlag: getFlag = flagKey => {
        return flags.find(({ key }) => key === flagKey)
    }

    return <FlagsContext.Provider value={{ flags, isFlagOn, getFlag }}>
        {children}
    </FlagsContext.Provider>
}

export { useFlags, FlagsProvider }