import React from "react";
import renderer from 'react-test-renderer';
import {Badge} from "../stories/Badge/Badge";

it('Render correctly Badge component', () => {
    const BadgeComponent = renderer.create(<Badge />).toJSON();
    expect(BadgeComponent).toMatchSnapshot();
});