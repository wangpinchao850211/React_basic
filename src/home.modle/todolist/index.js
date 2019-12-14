import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM } from '../../store/actionTypes';
import './index.css';

const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, list, removeItem} = props;
    return (
        <div>
            <div>
                <input  value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index} className='list'>
                                {item}
                                <span onClick={() => removeItem(index)} className='remove'>X</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

// 把state的数据映射为组件的props
const mapStateToProps = (state) => {
    return {
        inputValue: state.todolist.inputValue,
        list: state.todolist.list
    }
}
// 把store的dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: CHANGE_INPUT_VALUE,
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: ADD_TODO_ITEM
            }
            dispatch(action);
        },
        removeItem(index) {
            const action = {
                type: DETELE_TODO_ITEM,
                index
            }
            dispatch(action);
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
