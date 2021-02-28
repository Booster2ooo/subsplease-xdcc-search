import { SubsPleaseXdccResult } from "./subsplease-xdcc-result";
declare const horribleSubsCache: {
    set: (terms: string, results: SubsPleaseXdccResult[]) => SubsPleaseXdccResult[];
    get: (terms: string) => SubsPleaseXdccResult[] | null | undefined;
    remove: (terms: string) => void;
    clear: (terms: string) => void;
};
export { horribleSubsCache };
//# sourceMappingURL=subsplease-cache.d.ts.map