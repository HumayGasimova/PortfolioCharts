/**
 * Operators
 */

import { 
    of,
} from 'rxjs';

import { 
    filter,
    mergeMap,
    take
} from 'rxjs/operators';

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
            console.log("messages", messagesHeaderHeight)
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
