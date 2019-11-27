import React, { Component } from 'react'
import ReactSwipe from 'react-swipe';
import './index.css';

export default class AliCloud extends Component {
    constructor (props) {
        super(props);
        this.state = {
            initDone: false,
            index: 0
        }
    }
    ddd(index) {
        console.log(index);
        // setTimeout(() => {
        //     this.setState({initDone: true}); // 只要一设置就不行啊
        // }, 5000);
    }
    render() {
        let reactSwipeEl;
        let opt = { 
            // continuous: false, // 是否是循环播放，false为不循环播放，默认为true
            auto: 1000, 
            callback: function(index) {
                console.log(index);
                this.ddd(index);
                // that.setState({index: ind}); 只要一设置就不ok了，变成每次返回的都是1
            }.bind(this)
        }
        return (
            <div>
                <ReactSwipe
                    className="carousel"
                    swipeOptions={opt}
                    ref={el => (reactSwipeEl = el)}
                >
                    <div>PANE 1</div>
                    <div>PANE 2</div>
                    <div>PANE 3</div>
                </ReactSwipe>
                <button onClick={() => reactSwipeEl.next()}>Next</button>
                <button onClick={() => reactSwipeEl.prev()}>Previous</button>
                <div>{this.state.index}</div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            });
        }, 1000);
        console.log(ReactSwipe);
    }
}

