// Custom
import {
  FETCH_QUESTIONS
} from '../../app/actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			return action.payload.data.questions;
		default:
			return state;
	}
}
