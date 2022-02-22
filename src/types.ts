export type FlagFetcher = () => Promise<Flag[]>
export type isFlagOn = (flagKey: string) => boolean
export type getFlag = (flagKey: string) => Flag | undefined

export interface UseFlagsParams {
    apiUrl: string
    apiServiceId: string
}

export interface UseFlagsHook {
    flags: Flag[]
    getFlag: (key: string) => Flag | undefined
    isFlagOn: (key: string) => boolean
}

export interface Flag {
    key: string
    enabled: boolean
    variant: string
}