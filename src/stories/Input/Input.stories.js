import React, {useState} from 'react';

import {Input} from './Input';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};
const Template = (args) => <Input {...args} />;

export const LargeInput = () => {
    const [state, setState] = useState();
    return <Input onChange={e => setState(e.target.value) } value={state} size={`lg`} label={`نام`} name={`name`}/>
}

<LargeInput />

export const MediumInput = () => {
    const [state, setState] = useState();
    return <Input onChange={e => setState(e.target.value) } value={state} size={`md`} label={`آدرس`} name={`address`}/>
}
<MediumInput />

export const SmallInput = () => {
    const [state, setState] = useState();
    return <Input onChange={e => setState(e.target.value) } value={state} size={`sm`} label={`شماره تلفن`} type={`tel`} feedback={`برای مثال 0912...`} name={`phoneNumber`}/>
}
<SmallInput />

export const InvalidInput = () => {
    const [state, setState] = useState();
    return <Input onChange={e => setState(e.target.value) } value={state} size={`sm`} label={`شماره تلفن`} type={`tel`} invalidFeedback={`وارد کردن این فیلد اجباری میباشد`} name={`phoneNumber`}/>
}

<InvalidInput />