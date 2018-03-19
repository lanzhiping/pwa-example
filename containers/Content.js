import React, { Component } from 'react';
import { blue500, white100 } from 'material-ui/styles/colors'
import Avatar from 'material-ui/Avatar'
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import { timeSince } from '../util'

class Content extends Component {
    render() {
        const content = [
            {
                id: '1', name: 'ZP', time: new Date('2018-03-19 21:00'),
                title: 'What a day!', subtitle: 'This is a ready good good good good day'
            }
        ];

        return content.map(data => (
            <Card key={data.id}>
                <CardHeader
                    title={data.name}
                    subtitle={timeSince(data.time)}
                    avatar={<Avatar size={32} color={white100} backgroundColor={blue500}>{data.name}</Avatar>}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia overlay={<CardTitle title={data.title} subtitle={data.subtitle} />}>
                    <img src="" alt="" style={{ height: 100 }} />
                </CardMedia>
            </Card>
        ))
    }
};

export default Content;
