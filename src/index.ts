import {useEffect, useState} from 'react'
import {Flag, FlagFetcher, getFlag, isFlagOn, UseFlags} from './types'

const useFlags: UseFlags = ({ apiServiceId, apiUrl, debug }) => {
    const url = `${apiUrl}/services/${apiServiceId}/flags`

    debug && console.debug('[USE-FLAGS DEBUG]', { url })

    const fetchFlags: FlagFetcher = () => fetch(url).then((res) => res.json())

    const [flags, setFlags] = useState<Flag[]>([])

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

    return { flags, isFlagOn, getFlag }
}

export { useFlags }