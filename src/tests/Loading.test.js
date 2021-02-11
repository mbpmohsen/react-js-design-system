import renderer from "react-test-renderer";
import {Loading} from "../stories/Loading";

it('Render correctly Loading Component', () => {
    const LoadingComponent = renderer.create(Loading).toJSON();
    expect(LoadingComponent).toMatchSnapshot();
});