import React from "react";
import renderer from 'react-test-renderer'
import {Input} from "../stories/Input/Input";

it('Render correctly Input component', () => {
    const InputComponent = renderer.create(<Input/>).toJSON();
    expect(InputComponent).toMatchSnapshot();
});