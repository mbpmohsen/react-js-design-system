import React from 'react';

import {Progress} from './Progress';

export default {
    title: 'Example/Progress',
    component: Progress,
};

const Template = (args) => <Progress {...args} />;

export const Leaf = Template.bind({});
Leaf.args = {
    color: `leaf`,
    status: 60,
};

export const Lemon = Template.bind({});
Lemon.args = {
    color: `lemon`,
    status: 90,
};

export const Tomato = Template.bind({});
Tomato.args = {
    color: `tomato`,
    status: 10,
};
