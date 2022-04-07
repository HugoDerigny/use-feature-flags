export declare type FlagFetcher = () => Promise<Flag[]>;
export declare type isFlagOn = (flagKey: string) => boolean;
export declare type getFlag = (flagKey: string) => Flag | undefined;
export interface UseFlagsParams {
    config: {
        apiUrl: string;
        apiServiceId: string;
        apiAuthorization: string;
        debug?: boolean;
    };
}
export interface UseFlagsHook {
    flags: Flag[];
    getFlag: (key: string) => Flag | undefined;
    isFlagOn: (key: string) => boolean;
}
export interface Flag {
    key: string;
    enabled: boolean;
    variant: string;
}
