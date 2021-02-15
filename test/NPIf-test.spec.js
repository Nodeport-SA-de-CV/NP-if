import React from 'react';
import renderer from 'react-test-renderer';
import NPIf from "../src/NPIF";

it('renders correctly', () => {
    const tree = renderer
        .create(
            <NPIf condition={true}>
                <div>content</div>
            </NPIf>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

