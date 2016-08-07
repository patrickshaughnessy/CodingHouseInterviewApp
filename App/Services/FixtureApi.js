export default {
  // Functions return fixtures
  getCity: (city) => {
    // This fixture only supports Boise or else returns toronto
    const boiseData = require('../Fixtures/boise.json')
    const torontoData = require('../Fixtures/toronto.json')
    return {
      ok: true,
      data: city.toLowerCase() === 'boise' ? boiseData : torontoData
    }
  },

  getQuestions: () => {
    const questionData = require('../Fixtures/questions.json')

    return {
      ok: true,
      data: questionData
    }
  }
}
