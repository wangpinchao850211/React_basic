import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
					list.map((item, index) => {
						return (
							<Link key={index} to={'js/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		list: state.getIn(['home', 'articleList']),
	    page: state.getIn(['home', 'articlePage'])
	}
}
const mapDispathToProps = (dispatch) => {
	return {
		getMoreList(page) {
            dispatch(actionCreators.getMoreList(page))
        }
	}
}

export default connect(mapStateToProps, mapDispathToProps)(List);
