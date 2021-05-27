import renderer from "react-test-renderer"
import {Checkbox} from "../stories/Checkbox/Checkbox";

it('Render correctly Checkbox component', () => {
    const CheckboxComponent = renderer.create(Checkbox).toJSON();
    expect(CheckboxComponent).toMatchSnapshot();
});