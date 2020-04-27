import { CHANGE_INPUT_VALUE } from './actionTypes';
export const getInputValue = (value)=>{
    return {
        type: CHANGE_INPUT_VALUE,
        value: value
    }
}