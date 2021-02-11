import React from "react";
// import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Button} from '../stories/Button';
// test('Button Component', () => {
//     const component = renderer.create(
//         <Button color={`ocean`}>Button</Button>
//     );
//     let button = component.toJSON();
//     expect(button).toMatchSnapshot();

    // button.props.onClick();
    //
    // button = component.toJSON();
    // expect(button).toMatchSnapshot();

// });
describe('Button Component',() =>{
    it('renders correctly', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
    } )
})