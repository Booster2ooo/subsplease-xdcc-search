/// <reference types="node" />
import { EventEmitter } from 'events';
import { SubsPleaseXdccResult } from './subsplease-xdcc-result';
export declare class SubsPleaseXdccSearch extends EventEmitter {
    constructor();
    search(terms: string, cache: boolean): Promise<SubsPleaseXdccResult[]>;
}
//# sourceMappingURL=subsplease-xdcc-search.d.ts.map