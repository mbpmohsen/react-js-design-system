import React from 'react';
import {Checkbox} from './Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxSmall = () => <Checkbox onChange={e=> e.target.checked} label={`سایز کوچک`} size={`sm`} />

export const CheckboxSmallChecked = () => <Checkbox onChange={e=> e.target.checked} label={`انتخاب شده`} size={`sm`} checked={true} />

export const CheckboxSmallDisabled = () => <Checkbox onChange={e=> e.target.checked} label={`غیر فعال`} size={`sm`} disabled/>

export const CheckboxLarge = () => <Checkbox onChange={e=> e.target.checked} label={`انتخاب شده غیر فعال`} checked disabled />

export const CheckboxLargeChecked = () => <Checkbox onChange={e=> e.target.checked} label={`سایز بزرگ`} size={`lg`} />