import React from 'react';

import {Pallet} from './Pallet';

export default {
    title: 'Example/Pallet',
    component: Pallet,
    argTypes: {
        color: {
            default: 'tomato',
            description: `Use one of the ocean, devil, dark, angle, light, violet, orange, flamingo, lea, sky, lemon, tomato`
        },
        name: {default: 'tomato', description: `Color name`},
        code: {default: '#E05A67', description: `Color code`},
    },
};

const Template = (args) => <Pallet {...args} />;

export const Tomato = Template.bind({});
Tomato.args = {
    color: `tomato`,
    name: `tomato`,
    code: `#E05A67`,
};

export const Devil = Template.bind({});
Devil.args = {
    color: `devil`,
    name: `devil`,
    code: `#1f1d2b`,
};

export const Dark = Template.bind({});
Dark.args = {
    color: `dark`,
    name: `dark`,
    code: `#252836`,
};

export const Angle = Template.bind({});
Angle.args = {
    color: `angle`,
    name: `angle`,
    code: `#f3f3f8`,
};

export const Light = Template.bind({});
Light.args = {
    color: `light`,
    name: `light`,
    code: `#FFFFFF`,
};

export const Violets = Template.bind({});
Violets.args = {
    color: `violets`,
    name: `violets`,
    code: `#525298`,
};

export const Orange = Template.bind({});
Orange.args = {
    color: `orange`,
    name: `orange`,
    code: `#ff8702`,
};

export const Ocean = Template.bind({});
Ocean.args = {
    color: `ocean`,
    name: `ocean`,
    code: `#08a0f7`,
};

export const Flamingo = Template.bind({});
Flamingo.args = {
    color: `flamingo`,
    name: `flamingo`,
    code: `#ae46bf`,
};

export const Leaf = Template.bind({});
Leaf.args = {
    color: `leaf`,
    name: `leaf`,
    code: `#22b07d`,
};

export const Sky = Template.bind({});
Sky.args = {
    color: `sky`,
    name: `sky`,
    code: `#13cdd9`,
};

export const Lemon = Template.bind({});
Lemon.args = {
    color: `lemon`,
    name: `lemon`,
    code: `#ffbf47`,
};
