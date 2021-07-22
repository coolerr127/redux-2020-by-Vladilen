import { INCREMENT, DECREMENT } from './types'

export function rootReducer(state, action) {
	switch (action.type) {
		case INCREMENT:
			return state + 1
			break
		case DECREMENT:
			return state - 1
			break
		default:
			return state
	}
}
