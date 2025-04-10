/**
 * Operators
 */

import { 
    of,
    empty 
} from 'rxjs';

import { Observable } from 'rxjs'
import { Action } from '@reduxjs/toolkit'
import { 
    delay,
    filter,
    map,
    mergeMap,
    take
  } from 'rxjs/operators';

import { 
    ofType 
} from 'redux-observable';

/**
 * Constants
 */


import {
    startClickingMessagesIcon,
    setMessagesHeaderHeight
  } from '../slices/portfolioSlice';

/**
 * Utility
 */

// import * as Utility from '../utility';

/**
 * Epic
 */

export const startClickingMessagesIconEpic = (action$: any ) => //, state$, dependencies$
    action$.pipe(
        filter(startClickingMessagesIcon.match),
        take(1),
        mergeMap(action => {
            let messagesHeaderHeight = document.getElementById("messagesHeader")?.offsetHeight;          
                return of(
                    setMessagesHeaderHeight(messagesHeaderHeight)
                )
                // .pipe(
                //     delay(1000)
                // )   
            }
        )
    )

export default startClickingMessagesIconEpic;
