import React, { Component } from 'react'

export default class CommentBox extends Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        // console.log(this.textInput.value); // 注意这种原始获取dom的方式也可以
        this.props.onAddComment(this.textInput.value); // 值传出去
        this.textInput.value = '';
        this.textInput.focus();
        event.preventDefault(); // 这个生效必须使用bind(this),使用箭头函数也不行，因为箭头函数指向的不是form, 而是当前的类。只有form有这个event的提交事件
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                    <label>留言内容</label>
                    <br />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="请输入内容"
                      ref={(textInput) => {this.textInput = textInput}} 
                    />
                    <button type="submit" className="btn-primary">
                        留言
                    </button>
                    <p>已有{this.props.commentsLength}条评论</p>
                </div>
            </form>
        )
    }
}
