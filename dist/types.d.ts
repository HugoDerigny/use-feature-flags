declare type FlagFetcher = () => Promise<Flag[]>;
declare type isFlagOn = (flagKey: string) => boolean;
declare type getFlag = (flagKey: string) => Flag | undefined;
interface UseFlagsParams {
    apiUrl: string;
    apiServiceId: string;
}
interface UseFlagsHook {
    flags: Flag[];
    getFlag: (key: string) => Flag | undefined;
    isFlagOn: (key: string) => boolean;
}
interface Flag {
    key: string;
    enabled: boolean;
    variant: string;
}
