import React from 'react';
import {Card} from './Card';
import cat from '../styles/img/Cat.jpg';
import '../styles/css/dmeo.css';

export default {
    title: 'Example/Card',
    component: Card,
}

export const CardPadding = () => {
    return (
        <div style={{width: '300px'}}>
            <Card>
                <img className="card-img img-top-radius" src={cat} alt="post-picture"/>
                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </Card>
        </div>
    )

};

export const CardDefault = () => {
    return (
        <div style={{width: '300px'}}>
            <Card padding>
                <img className="card-img img-radius" src={cat} alt="post-picture"/>
                <p className="card-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                    طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                    فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </Card>
        </div>
    )

};