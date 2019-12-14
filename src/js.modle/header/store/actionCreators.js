import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});