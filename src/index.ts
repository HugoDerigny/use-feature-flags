import {useEffect, useState} from 'react'
import { UseFlagsParams, UseFlagsHook, Flag, FlagFetcher, getFlag, isFlagOn } from './types'

function useFlags({ apiServiceId, apiUrl, debug }: UseFlagsParams): UseFlagsHook {
    const url = `${apiUrl}/services/${apiServiceId}/flags`

    debug && console.debug('[QUIZEO-USE-FLAGS DEBUG]', { url })

    const fetchFlags: FlagFetcher = () => fetch(url).then((res) => res.json())

    const [flags, setFlags] = useState<Flag[]>([])

    useEffect(() => {
        fetchFlags().then(setFlags).catch((error) => {
           debug && console.error('[QUIZEO-USE-FLAGS] Could not fetch flags from API.', error)
        })
    }, [fetchFlags, setFlags])

    const isFlagOn: isFlagOn = flagKey => {
        return flags.find(({ key }) => key === flagKey)?.enabled ?? false
    }

    const getFlag: getFlag = flagKey => {
        return flags.find(({ key }) => key === flagKey)
    }

    return { flags, isFlagOn, getFlag }
}

export { useFlags }