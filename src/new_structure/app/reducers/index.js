// Redux
import { combineReducers } from 'redux';

// Custom
import QuestionsReducer from '../../questions/reducers/reducer_questions';
import CurrentQuestionReducer from '../../questions/reducers/reducer_current_question';
import HistoryReducer from '../../history/reducers/reducer_history';

const rootReducer = combineReducers({
	questions: QuestionsReducer,
	history: HistoryReducer,
	currentQuestion: CurrentQuestionReducer
});

export default rootReducer;
