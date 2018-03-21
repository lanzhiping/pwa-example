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
                id: '1', name: 'Zhiping', time: new Date('2018-03-19 21:00'),
                title: 'What a day!', subtitle: 'This is a ready good good good good day',
                picUrl: 'https://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api',
            },
            {
                id: '2', name: 'Zhiping', time: new Date('2018-03-19 21:00'),
                title: 'What a day!', subtitle: 'This is a ready good good good good day',
                picUrl: 'https://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api',
            },
            {
                id: '3', name: 'Zhiping', time: new Date('2018-03-19 21:00'),
                title: 'What a day!', subtitle: 'This is a ready good good good good day',
                picUrl: 'https://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api',
            },
            {
                id: '4', name: 'Zhiping', time: new Date('2018-03-19 21:00'),
                title: 'What a day!', subtitle: 'This is a ready good good good good day',
                picUrl: 'https://tse4.mm.bing.net/th?id=OIP.A6zdfyorlBrvGAWFKeJ_bQHaEe&pid=Api',
            },
        ];

        const cardStyle = {
            margin: 15,
        }

        return content.map(data => (
            <Card key={data.id} style={cardStyle}>
                <CardHeader
                    title={data.name}
                    subtitle={`${timeSince(data.time)} ago`}
                    avatar={<Avatar size={32} color={white100} backgroundColor={blue500}>{data.name[0]}</Avatar>}
                />
                <CardMedia overlay={<CardTitle title={data.title} subtitle={data.subtitle} />}>
                    <img src={data.picUrl} />
                </CardMedia>
            </Card>
        ))
    }
};

export default Content;
