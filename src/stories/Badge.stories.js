import React from 'react';

import {Badge} from './Badge';

export default {
    title: 'Example/Badge',
    component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const oceanBadge = Template.bind({});
oceanBadge.args = {
    label: 'دکمه',
    color: `ocean`
};