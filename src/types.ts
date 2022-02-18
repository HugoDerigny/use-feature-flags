type FlagFetcher = () => Promise<Flag[]>
type isFlagOn = (flagKey: string) => boolean
type getFlag = (flagKey: string) => Flag | undefined

interface UseFlagsParams {
    apiUrl: string
    apiServiceId: string
}

interface UseFlagsHook {
    flags: Flag[]
    getFlag: (key: string) => Flag | undefined
    isFlagOn: (key: string) => boolean
}

interface Flag {
    key: string
    enabled: boolean
    variant: string
}