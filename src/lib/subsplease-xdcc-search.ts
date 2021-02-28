import { EventEmitter } from 'events';
import { horribleSubsClient } from './subsplease-http-client';
import { horribleSubsCache } from './subsplease-cache';
import { SubsPleaseXdccResult } from './subsplease-xdcc-result';
import * as searchEvents from './subsplease-events';

export class SubsPleaseXdccSearch extends EventEmitter {

  constructor() {
    super();
  }

  search(terms: string, cache: boolean): Promise<SubsPleaseXdccResult[]> {
    if (!terms) {
      return Promise.reject('no search temrs provided');
    }
    if (cache) {
      let results = horribleSubsCache.get(terms);
      if (results && results.length) {
        this.emit(searchEvents.completed, { terms, results });
        return Promise.resolve(results as SubsPleaseXdccResult[]);
      }
    }
    return horribleSubsClient.get(terms)
      .then((results: SubsPleaseXdccResult[]) => {
        if (cache) {
          horribleSubsCache.set(terms, results);
        }
        this.emit(searchEvents.completed, { terms, results });
        return Promise.resolve(results)
      })
      .catch(error => {        
        this.emit(searchEvents.error, { terms, error });
        return Promise.reject(error);
      });
  }

};