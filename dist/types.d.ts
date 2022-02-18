declare type FlagFetcher = () => Promise<Flag[]>;
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
