import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import classNames from "classnames";

import JsonSchemaPropType from "./JsonSchemaPropType";
import InspectorItem from "./InspectorItem";

class InspectorColumn extends PureComponent {
    renderItem(name) {
        const {
            items, selectedItem, trailingSelection, refTargets, onSelect, renderItemContent
        } = this.props;
        const item = items[name];
        const selected = name === selectedItem;
        return (
            <InspectorItem
                key={name}
                name={name}
                schema={item}
                selected={selected}
                refTargets={refTargets}
                onSelect={event => onSelect(event, name)}
                renderContent={renderItemContent}
                autoFocus={selected && trailingSelection}
            />
        );
    }

    render() {
        const {
            items, selectedItem, trailingSelection, onSelect
        } = this.props;
        const columnClassName = classNames({
            "jsonschema-inspector-column": true,
            "with-selection": selectedItem,
            "trailing-selection": trailingSelection
        });
        return (
            <div
                className={columnClassName}
                onClick={onSelect}
                role="presentation"
                tabIndex={-1}
            >
                {Object.keys(items).sort().map(this.renderItem.bind(this))}
            </div>
        );
    }
}

InspectorColumn.propTypes = {
    items: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, JsonSchemaPropType])).isRequired,
    refTargets: PropTypes.objectOf(JsonSchemaPropType).isRequired,
    selectedItem: ({ items, selectedItem }) => {
        if (selectedItem !== undefined && selectedItem !== null) {
            if (typeof selectedItem !== "string") {
                return new Error("`selectedItem` is not a `string`");
            }
            if (!items[selectedItem]) {
                return new Error("`selectedItem` is not part of `items`");
            }
        }
        // assume all ok
        return null;
    },
    trailingSelection: ({ selectedItem, trailingSelection }) => {
        if (trailingSelection && !selectedItem) {
            return new Error("`trailingSelection` is true while there is no `selectedItem`");
        }
        return null;
    },
    onSelect: PropTypes.func.isRequired, // func(SyntheticEvent: event, string: name)
    renderItemContent: PropTypes.func // func({ string: name, boolean: hasNestedItems, boolean: selected, JsonSchema: schema, refTargets })
};

InspectorColumn.defaultProps = {
    selectedItem: null,
    trailingSelection: false,
    renderItemContent: null
};

export default InspectorColumn;
