import React, { Component } from 'react'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import './index.css';

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            <React.Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={2000}
                    classNames='fade-wpc'
                    unmountOnExit
                    onEntered={(el) => {el.style.color = 'red'}}
                    appear={true}
                    >
                    <div>hello wpc</div>
                </CSSTransition>
                {/* <div className={this.state.show?'show':'hide'}>hello wpc</div> */}
                <button onClick={this.handleToggle}>toggle</button>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    timeout={2000}
                                    classNames='fade-wpc'
                                    unmountOnExit
                                    onEntered={(el) => {el.style.color = 'red'}}
                                    appear={true}
                                    key={index}
                                    >
                                        <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>AddList</button>
            </React.Fragment>
        )
    }
    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
