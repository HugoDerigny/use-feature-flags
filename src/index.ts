import {useEffect, useState} from 'react'
import { UseFlagsParams, UseFlagsHook, Flag, FlagFetcher, getFlag, isFlagOn } from './types'

function useFlags({ apiServiceId, apiUrl }: UseFlagsParams): UseFlagsHook {
    const fetchFlags: FlagFetcher = () => fetch(`${apiUrl}/services/${apiServiceId}/flags`).then((res) => res.json())

    const [flags, setFlags] = useState<Flag[]>([])

    useEffect(() => {
        fetchFlags().then(setFlags).catch((error) => {
            console.error('[QUIZEO-USE-FLAGS] Could not fetch flags from API.', error)
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