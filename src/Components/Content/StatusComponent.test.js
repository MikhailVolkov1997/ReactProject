
import React from "react";
import { create } from "react-test-renderer";
import StatusComponent from './StatusComponent';


describe("Status component", () => {
    test("status from props should be in the state", () => {
    const component = create(<StatusComponent status="test"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test");
    });


    test("after creation span with status should by displayed ", () => {
    const component = create(<StatusComponent status="test"/>);
    const root = component.root;
    let div = root.findByType("div");
    expect(div).not.toBeNull();
    });

    // test("input should be displayed in editMode instead of div", () => {
    //     const component = create(<StatusComponent status="test"/>);
    //     const root = component.root;
    //     let div = root.findByType("div");
    //     div.props.onDoubleClick();
    //     let input = root.findByType("input");
    //     expect(input.props.value).toBe("test");
    // });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<StatusComponent status="test" onStatusChange={mockCallback}/>);
        const instance = component.getInstance();
        instance.activateEdit();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});