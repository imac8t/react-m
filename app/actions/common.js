import {
  createAction,
} from 'redux-actions'
import {
  // common,
} from 'api'
import {
  // createAjaxAction,
  // fakeAjaxAction,
} from 'utils'


export const pageTransition = createAction('pageTransition', payload => payload)
export const recevieAmList = createAction('receive am list')
// export const fetchAmList = createAjaxAction(common.amList, requestAmList, recevieAmList)
// export const resetAmList = createAction('reset am list')

