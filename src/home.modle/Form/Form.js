import React, { Component } from 'react'
import './Form.css';
import CommentList from './commentList';
import CommentBox from './commentBox';

// 引入theme-context进行主题切换
import ThemeContext from '../../theme.context';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: ['this is my first reply']
        }
    }
    addComment(comment) { // 添加comments
        if (!!comment) {
            this.setState({
                comments: [...this.state.comments, comment]
            })
        }
    }
    remove(index) {
        if (this.state.comments.length > 0) {
            // console.log(this.state.comments.slice(0, index));
            // console.log(this.state.comments.slice(index+1));
            // 去除数组中某个元素的方法
            this.setState({
                comments: [...this.state.comments.slice(0, index), ...this.state.comments.slice(index+1)]
            })
        }
    }
    render() {
        return (
            <div className="route_basic">
                <ThemeContext.Consumer>
                    {/* consumer接受一个函数，参数就是传过来的值 */}
                    {
                        theme => {
                            console.log(theme);
                            return (
                                <div className="Lyb-wrapper" style={ {backgroundColor: theme.bgColor, color: theme.color} }>
                                    <h3>留言板</h3>
                                    <CommentList 
                                    comments={this.state.comments} 
                                    onRemove={this.remove.bind(this)}/>
                                    <CommentBox 
                                    commentsLength={this.state.comments.length} 
                                    onAddComment={this.addComment.bind(this)}
                                    />
                                </div>
                            )
                        }
                    }
                </ThemeContext.Consumer>
            </div>
        )
    }
}
