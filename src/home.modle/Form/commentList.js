import React from 'react'

const CommentList = ({comments, onRemove}) => {
    return (
        // 注意下面的span事件处理要把调取的方法放到函数内，这里放到了箭头函数内，才好使
            <div className="comment-list-component">
                <label>评论列表</label>
                <ul className="list-group">
                    {comments.map((comment, index) => <li key={index} className="list-group-item">{comment}
                    <span onClick={() => onRemove(index)}>X</span>
                    </li>)}
                </ul>
            </div>
        )
}

export default CommentList
