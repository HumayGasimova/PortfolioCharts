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
    startClickingProfileIcon,
    setProfileHeaderHeight
  } from '../slices/portfolioSlice';

/**
 * Utility
 */

// import * as Utility from '../utility';

/**
 * Epic
 */

export const startClickingProfileIconEpic = (action$: any ) => //, state$, dependencies$
    action$.pipe(
        filter(startClickingProfileIcon.match),
        take(1),
        mergeMap(action => {
            let profileHeaderHeight = document.getElementById("profileHeader")?.offsetHeight;
            console.log("profile", profileHeaderHeight)
                return of(
                    setProfileHeaderHeight(profileHeaderHeight)
                )
                // .pipe(
                //     delay(1000)
                // )   
            }
        )
    )

export default startClickingProfileIconEpic;
