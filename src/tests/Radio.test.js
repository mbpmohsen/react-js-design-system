import renderer from "react-test-renderer";
import {RadioButton} from "../stories/Radio/Radio";

it('Render correctly RadioButton component', () => {
    const RadioButtonComponent = renderer.create(<RadioButton/>).toJSON();
    expect(RadioButtonComponent).toMatchSnapshot();
});