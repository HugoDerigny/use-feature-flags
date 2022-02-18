"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlags = void 0;
const react_1 = require("react");
function useFlags({ apiServiceId, apiUrl }) {
    const fetchFlags = () => fetch(`${apiUrl}/services/${apiServiceId}/${flags}`).then((res) => res.json());
    const [flags, setFlags] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetchFlags().then(setFlags).catch((error) => {
            console.error('[QUIZEO-USE-FLAGS] Could not fetch flags from API.', error);
        });
    }, [fetchFlags, setFlags]);
    function isFlagOn(flagKey) {
        var _a, _b;
        return (_b = (_a = flags.find(({ key }) => key === flagKey)) === null || _a === void 0 ? void 0 : _a.enabled) !== null && _b !== void 0 ? _b : false;
    }
    function getFlag(flagKey) {
        return flags.find(({ key }) => key === flagKey);
    }
    return { flags, isFlagOn, getFlag };
}
exports.useFlags = useFlags;
