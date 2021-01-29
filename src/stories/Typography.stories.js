import '../styles/css/typography.css';
import React from "react";
export const Typography = () => {
    return (
        <div className="font">
            <p className="font-30">font-30 , لورم ایپسوم متن ساختگی</p>
            <p className="font-28">font-28 , لورم ایپسوم متن ساختگی</p>
            <p className="font-26">font-26 , لورم ایپسوم متن ساختگی</p>
            <p className="font-24">font-24 , لورم ایپسوم متن ساختگی</p>
            <p className="font-22">font-22 , لورم ایپسوم متن ساختگی</p>
            <p className="font-20">font-20 , لورم ایپسوم متن ساختگی</p>
            <p className="font-18">font-18 , لورم ایپسوم متن ساختگی</p>
            <p className="font-16">font-16 , لورم ایپسوم متن ساختگی</p>
            <p className="font-14">font-14 , لورم ایپسوم متن ساختگی</p>
            <p className="font-12">font-12 , لورم ایپسوم متن ساختگی</p>
            <p className="font-10">font-10 , لورم ایپسوم متن ساختگی</p>
            <p className="font-8">font-8 , لورم ایپسوم متن ساختگی</p>
        </div>
    )
}
export default {
    title: 'Example/Typography',
    component: Typography,
};

const TextEmaple = (args) => <Typography {...args} />;

export const TypographyExample = () => <Typography color={`ocean`}>دکمه</Typography>


