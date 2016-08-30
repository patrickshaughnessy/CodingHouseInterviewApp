import { take, put, call, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

const mapAnswersToQuestions = (settings, answers, questionsById, categoriesById) => {
  return settings.map(setting => {
    const { category, questions } = setting
    const questionsWithAnswers = questions.map(q => {
      let question = questionsById[q].asMutable()
      question.answers = answers[category] && answers[category][q] || []
      return question
    })
    return {
      category: categoriesById[category],
      questions: questionsWithAnswers
    }
  })
}

export default (api) => {
  function * worker (payload) {
    const response = yield call(api.submitInterview, payload)
    if (response.ok && typeof response.data === 'object') {
      yield put(Actions.submitInterviewSuccess(response.data))
    } else if (response.data) {
      const { status, data: {message} } = response
      yield put(Actions.submitInterviewFailure({ message, status }))
    } else {
      const { status, problem } = response
      yield put(Actions.submitInterviewFailure({ message: problem, status }))
    }
  }

  function * watcher () {
    while (true) {
      yield take(Types.SUBMIT_INTERVIEW)
      const user = yield select((state) => state.user.info)
      const questionsById = yield select((state) => state.questions.byId)
      const categoriesById = yield select((state) => state.categories.byId)
      const settings = yield select((state) => state.settings.categories)
      const interview = yield select((state) => state.interview)

      const payload = {
        intervieweeID: interview.interviewee._id,
        interviewee: interview.interviewee,
        interviewerID: user._id,
        interviewer: user,
        data: mapAnswersToQuestions(settings, interview.answers, questionsById, categoriesById),
        intervieweeTime: interview.intervieweeTime,
        interviewerTime: interview.interviewerTime
      }
      console.log(payload)
      yield call(worker, payload)
    }
  }

  return {
    watcher,
    worker
  }
}
