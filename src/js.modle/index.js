import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

export default class JanShu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                简书页面
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/js').then(() => console.log('succ')).catch((err) => console.log('err'))
    }
}
