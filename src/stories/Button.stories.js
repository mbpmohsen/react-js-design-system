import React from 'react';

import {Button} from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template = (args) => <Button {...args} />;

export const Ocean = () => <Button color={`ocean`}>دکمه</Button>

export const Angle = () => <Button color={`angle`}>دکمه</Button>

export const Violets = () => <Button color={`violets`}>دکمه</Button>

export const Orange = () => <Button color={`orange`}>دکمه</Button>

export const Flamingo = () => <Button color={`flamingo`}>دکمه</Button>

export const Dark = () => <Button color={`dark`}>دکمه</Button>

export const Leaf = () => <Button color={`leaf`}>دکمه</Button>

export const Sky = () => <Button color={`sky`}>دکمه</Button>

export const Lemon = () => <Button color={`lemon`}>دکمه</Button>

export const Tomato = () => <Button color={`tomato`}>دکمه</Button>

export const outlineDark = () => <Button color={`dark`} outline>دکمه</Button>

export const outlineViolets =  () => <Button color={`violets`} outline>دکمه</Button>

export const outlineOrange =  () => <Button color={`orange`} outline>دکمه</Button>

export const outlineOcean =  () => <Button color={`ocean`} outline>دکمه</Button>

export const outlineFlamingo =  () => <Button color={`flamingo`} outline>دکمه</Button>

export const outlineLeaf =  () => <Button color={`leaf`} outline>دکمه</Button>

export const outlineSky =  () => <Button color={`sky`} outline>دکمه</Button>

export const outlineLemon =  () => <Button color={`lemon`} outline>دکمه</Button>

export const outlineTomato =  () => <Button color={`tomato`} outline>دکمه</Button>

export const Block =  () => <Button color={`ocean`} size={`lg`} block>دکمه</Button>

export const BlockOutline =  () => <Button color={`ocean`} size={`lg`} block outline>دکمه</Button>

export const Loading =  () => <Button color={`ocean`} loading outlin>دکمه</Button>
