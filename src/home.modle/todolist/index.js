import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE } from '../../store/actionTypes';

class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input  value={this.props.inputValue} onChange={this.props.changeInputValue}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>dell</li>
                </ul>
            </div>
        )
    }
}

// 把state的数据映射为组件的props
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}
// 把store的dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.log(e.target.value);
            const action = {
                type: CHANGE_INPUT_VALUE,
                value: e.target.value
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
