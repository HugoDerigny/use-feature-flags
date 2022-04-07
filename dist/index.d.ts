import { FC } from 'react';
import { UseFlagsHook, UseFlagsParams } from './types';
declare const useFlags: () => UseFlagsHook;
declare const FlagsProvider: FC<UseFlagsParams>;
export { useFlags, FlagsProvider };
