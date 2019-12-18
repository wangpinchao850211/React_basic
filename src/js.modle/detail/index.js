import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';
class Detail extends Component {
    render() {
        // console.log(this.props); 可查看到路由信息
        return (
            <div style={{minHeight: '100vh'}}>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content 
                        dangerouslySetInnerHTML={{__html: this.props.content}}
                    />
                </DetailWrapper>
            </div>
        )
    }
    componentDidMount() {
        // 获取路由传参的值
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
};

const mapDispatch = (dispatch) => {
    return {
        getDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    }
}

export default connect(mapState, mapDispatch)(Detail);
