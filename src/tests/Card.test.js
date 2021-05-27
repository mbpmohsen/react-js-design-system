import React from "react";
import renderer from "react-test-renderer";
import {Card} from "../stories/Card/Card"

it('Render correctly Card Component', function () {
    const CardComponent = renderer.create(<Card />).toJSON();
    expect(CardComponent).toMatchSnapshot();
});