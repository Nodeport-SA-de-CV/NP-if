import React from 'react';
import renderer from 'react-test-renderer';
import NPIf from "../src/NPIF";
import NPElse from "../src/NPElse";

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

it('shows content when the condition is met', () => {
    const tree = renderer
        .create(
            <NPIf condition={true}>
                <div>content</div>
            </NPIf>
        ).root;
    const div = tree.findByType("div");
    expect(div).toBeTruthy();
});
it('hides content when the condition is met', () => {
    const tree = renderer
        .create(
            <NPIf condition={false}>
                <div>content</div>
            </NPIf>
        ).root;
    expect(tree.children.length).toBe(0);
});
it('shows only content under NPIF when the condition is met', () => {
    const tree = renderer
        .create(
            <NPIf condition={true}>
                <div>content</div>
                <NPElse>
                    other content
                </NPElse>
            </NPIf>
        )
    expect(tree.root.children.length).toBe(1);
    expect(tree.toJSON().children[0]).toBe('content');
});
it('shows only content under NPElse when the condition is not met', () => {
    const tree = renderer
        .create(
            <NPIf condition={false}>
                <div>content</div>
                <NPElse>
                    other content
                </NPElse>
            </NPIf>
        )
    expect(tree.toJSON()).toBe('other content')
});
