import * as actions from './Constants'

export const receivePeopleSuccess = (people, page, pageSize) => {
  return {
    type: actions.RECEIVE_PEOPLE_SUCCESS,
    people,
    page,
    pageSize
  }
}

export const receivePeopleFailure = (err) => ({ type: actions.RECEIVE_PEOPLE_FAILURE, err })

export const setCurrentPeople = (page, pageSize) => ({ type: actions.SET_CURRENT_PEOPLE, page, pageSize })

export const updateEmailLetterCount = (letterCount) => ({ type: actions.UPDATE_EMAIL_CHARS, letterCount })

export const toggleCountLettersForAllEmails = () => ({ type: actions.TOGGLE_COUNT_LETTERS_FOR_ALL_EMAILS })

export const updatePage = (page) => ({ type: actions.UPDATE_PAGE, page })
