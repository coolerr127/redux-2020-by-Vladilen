import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS } from './types'

function counterReducer(state = 0, action) {
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

const initialThemeState = {
	value: 'light',
	disabled: false,
}

function themeReducer(state = initialThemeState, action) {
	switch (action.type) {
		case CHANGE_THEME:
			return { ...state, value: action.payload }
			break
		case ENABLE_BUTTONS:
			return { ...state, disabled: false }
			break
		case DISABLE_BUTTONS:
			return { ...state, disabled: true }
			break
		default:
			return state
	}
}

export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
})
