import React from "react";
import renderer from "react-test-renderer";
import {Progress} from "../stories/Progress/Progress";

it('Render correctly Progress component', () => {
    const ProgressComponent = renderer.create(<Progress />).toJSON();
    expect(ProgressComponent).toMatchSnapshot();
});