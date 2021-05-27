import React from "react";
import renderer from "react-test-renderer";
import {Dropdown} from "../stories/Dropdown/Dropdown";

it('Render correctly Dropdown component', () => {
    const DropdownComponent = renderer.create(<Dropdown />).toJSON();
    expect(DropdownComponent).toMatchSnapshot();
});