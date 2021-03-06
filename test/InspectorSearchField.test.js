import React from "react";
import { shallow } from "enzyme";
import InspectorSearchField from "../src/InspectorSearchField";

describe("renders correctly", () => {
    it("with minimal/default props", () => {
        const component = shallow((
            <InspectorSearchField
                searchFilter=""
                onSearchFilterChange={() => { }}
            />
        ));
        expect(component).toMatchSnapshot();
    });
    it("with searchFilter set", () => {
        const component = shallow((
            <InspectorSearchField
                searchFilter="test-value"
                onSearchFilterChange={() => { }}
            />
        ));
        expect(component.find("input").prop("value")).toEqual("test-value");
    });
});
describe("calls onSearchFilterChange", () => {
    let mockEvent;
    let onSearchFilterChange;
    beforeEach(() => {
        mockEvent = {
            stopPropagation: () => { }
        };
        onSearchFilterChange = jest.fn(() => { });
    });

    it("on input's onChange", () => {
        const component = shallow((
            <InspectorSearchField
                searchFilter="old-filter-value"
                onSearchFilterChange={onSearchFilterChange}
            />
        ));
        const onChange = component.find("input").prop("onChange");
        mockEvent.target = { value: "new-filter-value" };
        onChange(mockEvent);
        expect(onSearchFilterChange).toHaveBeenCalledWith("new-filter-value");
    });
});
