import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                    className='topic-pic'
                                    alt='图片正在加载'
                                    src={item.get('imgUrl')} 
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}
const mapState = (state) => {
    return {
        list: state.getIn(['home', 'topicList'])
    }
};
// 与store做链接
export default connect(mapState, null)(Topic);
