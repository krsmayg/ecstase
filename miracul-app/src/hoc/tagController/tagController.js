import React, { Component } from 'react'
import moment from 'moment';

const tagController = BaseComponent => (props) => {
    const tags = [];
    const newRelease= () => {
        const posterDate = moment(props.date);
        const diff = moment(Date.now()).diff(posterDate, 'days');
        if(diff < 5) {
            tags.push('New Release'); 
        }
    }
    const fewLeft = () => {
        if(props.totalAmountLeft < 20) {
            tags.push('Few left');
        }
    }

    newRelease();
    fewLeft();

    return <BaseComponent {...props} tags={tags} />
}

export default tagController;
