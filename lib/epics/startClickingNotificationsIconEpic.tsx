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
    startClickingNotificationsIcon,
    setMessagesHeaderHeight
  } from '../slices/portfolioSlice';

/**
 * Utility
 */

// import * as Utility from '../utility';

/**
 * Epic
 */

export const startClickingNotificationsIconEpic = (action$: any ) => //, state$, dependencies$
    action$.pipe(
        filter(startClickingNotificationsIcon.match),
        take(1),
        mergeMap(action => {
            let notificationsHeaderHeight = document.getElementById("notificationsHeader")?.offsetHeight;          
                return of(
                    setMessagesHeaderHeight(notificationsHeaderHeight)
                )
                // .pipe(
                //     delay(1000)
                // )   
            }
        )
    )

export default startClickingNotificationsIconEpic;
