import React from 'react';
import {Badge} from './Badge';

export default {
    title: 'Example/Badge',
    component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Ocean = () => <Badge color={`ocean`}>فعال</Badge>