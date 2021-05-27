import React from 'react';
import {RadioButton} from "./Radio";

export default {
    title: 'Example/Radio',
    component: RadioButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <RadioButton {...args} />;

export const RadioButtonSmall = () => <div><RadioButton onChange={e => e.target.checked} label={`سایز کوچک`} name={'radio1'}
                                                     size={`sm`}/><div style={{margin: 10}}/><RadioButton onChange={e => e.target.checked}
                                                                                                          name={'radio1'} label={`سایز کوچک`} size={`sm`}/></div>

export const RadioButtonSmallChecked = () => <RadioButton onChange={e => e.target.checked} label={`انتخاب شده`}
                                                          size={`sm`} checked={true}/>

export const RadioButtonSmallDisabled = () => <RadioButton onChange={e => e.target.checked} label={`غیر فعال`}
                                                           size={`sm`} disabled/>

export const RadioButtonLarge = () => <RadioButton onChange={e => e.target.checked} label={`انتخاب شده غیر فعال`}
                                                   checked disabled/>

export const RadioButtonLargeChecked = () => <RadioButton onChange={e => e.target.checked} label={`سایز بزرگ`}
                                                          size={`lg`}/>