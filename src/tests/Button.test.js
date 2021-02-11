import React from "react";
import {Button} from '../stories/Button';
import renderer from 'react-test-renderer'

 it('Render correctly Button component',()=> {
     const ButtonComponent = renderer.create(<Button />).toJSON();
     expect(ButtonComponent).toMatchSnapshot();
 })