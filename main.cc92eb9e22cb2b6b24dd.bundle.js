(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module){module.exports={title:"Person",type:"object",properties:{firstName:{type:"string",description:"The person's first name."},lastName:{type:"string",description:"The person's last name."},age:{description:"Age in years which must be equal to or greater than zero.",type:"integer",minimum:0}}}},101:function(module){module.exports={description:"A representation of a person, company, organization, or place",type:"object",properties:{vegetables:{type:"array",items:{allOf:[{type:"object",required:["veggieName"],properties:{veggieName:{type:"string",description:"The name of the vegetable."}}},{type:"object",required:["veggieLike"],properties:{veggieLike:{type:"boolean",description:"Do I like this vegetable?"}}}]}}}}},157:function(module){module.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}},158:function(module,exports,__webpack_require__){__webpack_require__(159),__webpack_require__(239),module.exports=__webpack_require__(240)},240:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(70);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(360)},module)}.call(this,__webpack_require__(123)(module))},360:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(70),_src_Inspector__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72),_schema_person_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(100),_schema_meta_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(157),_schema_show_selection_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(101);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Inspector",module).add("standard",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_2__.a,{schemas:{Person:_schema_person_json__WEBPACK_IMPORTED_MODULE_3__,"Shop Selection":_schema_show_selection_json__WEBPACK_IMPORTED_MODULE_5__}})}).add("with defaultSelectedItems",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_2__.a,{schemas:{Person:_schema_person_json__WEBPACK_IMPORTED_MODULE_3__,"Shop Selection":_schema_show_selection_json__WEBPACK_IMPORTED_MODULE_5__},defaultSelectedItems:["Shop Selection","vegetables"]})}).add("with renderEmptyDetails prop",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_2__.a,{schemas:{"Meta JSON Schema":_schema_meta_json__WEBPACK_IMPORTED_MODULE_4__},renderEmptyDetails:function(columnData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{margin:"1em"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"JSON Schema Inspector"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,'Just click on "',Object.keys(columnData[0].items),'" on the left side in order to traverse its nested properties – but beware of its circular references.'))}})})}.call(this,__webpack_require__(123)(module))},361:function(module,exports,__webpack_require__){},72:function(module,__webpack_exports__,__webpack_require__){"use strict";var classCallCheck=__webpack_require__(19),createClass=__webpack_require__(20),possibleConstructorReturn=__webpack_require__(22),getPrototypeOf=__webpack_require__(21),inherits=__webpack_require__(23),assertThisInitialized=__webpack_require__(32),react=__webpack_require__(0),react_default=__webpack_require__.n(react),memoize_one_cjs=__webpack_require__(156),memoize_one_cjs_default=__webpack_require__.n(memoize_one_cjs),classnames=(__webpack_require__(361),__webpack_require__(71)),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),simpleTypes=prop_types_default.a.oneOf(["string","integer","number","object","array","boolean","null"]),jsonSchemaShape={$id:prop_types_default.a.string,$ref:prop_types_default.a.string,title:prop_types_default.a.string,description:prop_types_default.a.string,examples:prop_types_default.a.array,default:prop_types_default.a.any,type:prop_types_default.a.oneOfType([simpleTypes,prop_types_default.a.arrayOf(simpleTypes)]),enum:prop_types_default.a.array,const:prop_types_default.a.any,minLength:prop_types_default.a.number,maxLength:prop_types_default.a.number,pattern:prop_types_default.a.string,format:prop_types_default.a.string,multipleOf:prop_types_default.a.number,minimum:prop_types_default.a.number,exclusiveMinimum:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.bool]),maximum:prop_types_default.a.number,exclusiveMaximum:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.bool]),required:prop_types_default.a.arrayOf(prop_types_default.a.string),minItems:prop_types_default.a.number,maxItems:prop_types_default.a.number,uniqueItems:prop_types_default.a.bool},JsonSchemaPropType=prop_types_default.a.shape(jsonSchemaShape);jsonSchemaShape.properties=prop_types_default.a.objectOf(prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType])),jsonSchemaShape.items=prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType,prop_types_default.a.array]),jsonSchemaShape.additionalItems=prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType]),jsonSchemaShape.definitions=prop_types_default.a.objectOf(JsonSchemaPropType),jsonSchemaShape.allOf=prop_types_default.a.arrayOf(JsonSchemaPropType);function isNonEmptyObject(target){return null!==target&&"object"==typeof target&&Object.keys(target).length>0}function hasNestedProperties(schema,refTargets){return isNonEmptyObject(getNestedProperties(schema,refTargets))}function getNestedProperties(schema,refTargets){return isNonEmptyObject(schema)?schema.$ref?getNestedProperties(refTargets[schema.$ref],refTargets):schema.properties?schema.properties:schema.allOf?schema.allOf.map(function(part){return getNestedProperties(part,refTargets)}).reduce(mergeValues,{}):"boolean"==typeof schema.items?getNestedProperties(schema.additionalItems,refTargets):Array.isArray(schema.items)?null:schema.items?getNestedProperties(schema.items,refTargets):null:null}function getPropertyValue(schema,propertyName,refTargets){return schema.$ref?getPropertyValue(refTargets[schema.$ref],propertyName,refTargets):schema.allOf?schema.allOf.map(function(part){return getPropertyValue(part,propertyName,refTargets)}).reduce(mergeValues,null):schema[propertyName]}function mergeValues(combined,nextValue){return nextValue||!1===nextValue||0===nextValue?combined||!1===combined||0===combined?Array.isArray(combined)&&Array.isArray(nextValue)?combined.concat(nextValue):"object"==typeof combined&&isNonEmptyObject(nextValue)?Object.assign(combined,nextValue):combined:nextValue:combined}var InspectorItem_InspectorItem=function(_PureComponent){function InspectorItem(){return Object(classCallCheck.a)(this,InspectorItem),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorItem).apply(this,arguments))}return Object(inherits.a)(InspectorItem,_PureComponent),Object(createClass.a)(InspectorItem,[{key:"renderDefaultItemContent",value:function(name){return react_default.a.createElement("div",{className:"jsonschema-inspector-item-content"},react_default.a.createElement("span",{className:"jsonschema-inspector-item-name"},name),react_default.a.createElement("span",{className:"jsonschema-inspector-item-icon"}))}},{key:"render",value:function(){var _this$props=this.props,name=_this$props.name,schema=_this$props.schema,selected=_this$props.selected,refTargets=_this$props.refTargets,onSelect=_this$props.onSelect,renderContent=_this$props.renderContent,itemClassName=classnames_default()({"jsonschema-inspector-item":!0,"has-nested-items":hasNestedProperties(schema,refTargets),selected:selected});return react_default.a.createElement("button",{className:itemClassName,onClick:onSelect},(renderContent||this.renderDefaultItemContent)(name,schema,selected))}}]),InspectorItem}(react.PureComponent);InspectorItem_InspectorItem.defaultProps={selected:!1};var src_InspectorItem=InspectorItem_InspectorItem,src_InspectorColumn=function(_PureComponent){function InspectorColumn(){return Object(classCallCheck.a)(this,InspectorColumn),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorColumn).apply(this,arguments))}return Object(inherits.a)(InspectorColumn,_PureComponent),Object(createClass.a)(InspectorColumn,[{key:"renderItem",value:function(name){var _this$props=this.props,items=_this$props.items,selectedItem=_this$props.selectedItem,refTargets=_this$props.refTargets,_onSelect=_this$props.onSelect,renderItemContent=_this$props.renderItemContent,item=items[name];return react_default.a.createElement(src_InspectorItem,{key:name,name:name,schema:item,selected:name===selectedItem,refTargets:refTargets,onSelect:function(event){return _onSelect(event,name)},renderContent:renderItemContent})}},{key:"render",value:function(){var _this$props2=this.props,items=_this$props2.items,selectedItem=_this$props2.selectedItem,trailingSelection=_this$props2.trailingSelection,onSelect=_this$props2.onSelect,columnClassName=classnames_default()({"jsonschema-inspector-column":!0,"with-selection":selectedItem,"trailing-selection":trailingSelection});return react_default.a.createElement("div",{className:columnClassName,onClick:onSelect},Object.keys(items).sort().map(this.renderItem.bind(this)))}}]),InspectorColumn}(react.PureComponent),src_InspectorColView=function(_PureComponent){function InspectorColView(){return Object(classCallCheck.a)(this,InspectorColView),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorColView).apply(this,arguments))}return Object(inherits.a)(InspectorColView,_PureComponent),Object(createClass.a)(InspectorColView,[{key:"render",value:function(){var _this$props=this.props,columnData=_this$props.columnData,renderItemContent=_this$props.renderItemContent;return react_default.a.createElement("div",{className:"jsonschema-inspector-colview"},columnData.slice().reverse().map(function(singleColumnData,index){return react_default.a.createElement(src_InspectorColumn,Object.assign({key:index,renderItemContent:renderItemContent},singleColumnData))}))}}]),InspectorColView}(react.PureComponent),src_InspectorDetails=function(_PureComponent){function InspectorDetails(props){var _this;return Object(classCallCheck.a)(this,InspectorDetails),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorDetails).call(this,props))).renderDefaultSelectionDetails=_this.renderDefaultSelectionDetails.bind(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this))),_this}return Object(inherits.a)(InspectorDetails,_PureComponent),Object(createClass.a)(InspectorDetails,[{key:"render",value:function(){var _this$props=this.props,columnData=_this$props.columnData,renderSelectionDetails=_this$props.renderSelectionDetails,renderEmptyDetails=_this$props.renderEmptyDetails,trailingSelectionColumnIndex=columnData.length-(columnData[columnData.length-1].trailingSelection?1:2),trailingSelectionColumn=trailingSelectionColumnIndex<0?null:columnData[trailingSelectionColumnIndex],selectedItemSchema=trailingSelectionColumn?trailingSelectionColumn.items[trailingSelectionColumn.selectedItem]:null;return react_default.a.createElement("div",{className:"jsonschema-inspector-details"},selectedItemSchema&&(renderSelectionDetails||this.renderDefaultSelectionDetails)(selectedItemSchema,columnData,trailingSelectionColumnIndex),!selectedItemSchema&&renderEmptyDetails&&renderEmptyDetails(columnData))}},{key:"renderDefaultSelectionDetails",value:function(itemSchema,columnData,selectionColumnIndex){return react_default.a.createElement("div",{className:"jsonschema-inspector-details-content"},react_default.a.createElement("h3",{className:"jsonschema-inspector-details-header"},"Details"),this.renderDetailsForm(itemSchema,columnData,selectionColumnIndex))}},{key:"renderDetailsForm",value:function(itemSchema,columnData,selectionColumnIndex){var refTargets=columnData[0].refTargets,isRequired=this.isSelectionRequiredInParent(columnData,selectionColumnIndex),title=getPropertyValue(itemSchema,"title",refTargets),description=getPropertyValue(itemSchema,"description",refTargets),type=getPropertyValue(itemSchema,"type",refTargets),constValue=getPropertyValue(itemSchema,"const",refTargets),enumValue=getPropertyValue(itemSchema,"enum",refTargets),defaultValue=getPropertyValue(itemSchema,"default",refTargets),examples=getPropertyValue(itemSchema,"examples",refTargets),pattern=getPropertyValue(itemSchema,"pattern",refTargets),format=getPropertyValue(itemSchema,"format",refTargets),minimum=getPropertyValue(itemSchema,"minimum",refTargets),exclusiveMinimum=getPropertyValue(itemSchema,"exclusiveMinimum",refTargets),maximum=getPropertyValue(itemSchema,"maximum",refTargets),exclusiveMaximum=getPropertyValue(itemSchema,"exclusiveMaximum",refTargets),minLength=getPropertyValue(itemSchema,"minLength",refTargets),maxLength=getPropertyValue(itemSchema,"maxLength",refTargets),minItems=getPropertyValue(itemSchema,"minItems",refTargets),maxItems=getPropertyValue(itemSchema,"maxItems",refTargets),uniqueItems=getPropertyValue(itemSchema,"uniqueItems",refTargets),arrayItems=getPropertyValue(itemSchema,"items",refTargets),arrayItemSchema="object"==typeof arrayItems&&arrayItems||"boolean"==typeof arrayItems&&getPropertyValue(itemSchema,"additionalItems",refTargets);return react_default.a.createElement("div",null,react_default.a.createElement("form",{className:"jsonschema-inspector-details-form"},title&&this.renderDetailsFormRow("Title",title),description&&this.renderDetailsFormRow("Description",description),isRequired&&this.renderDetailsFormRow("Required","Yes"),type&&this.renderDetailsFormRow("Type",type),constValue&&this.renderDetailsFormRow("Constant Value",constValue),enumValue&&this.renderDetailsFormRow("Possible Values",enumValue),(defaultValue||!1===defaultValue)&&this.renderDetailsFormRow("Default Value","object"==typeof defaultValue?JSON.stringify(defaultValue):defaultValue),examples&&examples.length&&this.renderDetailsFormRow("Example(s)","object"==typeof examples[0]?JSON.stringify(examples):examples),pattern&&this.renderDetailsFormRow("Value Pattern",pattern),format&&this.renderDetailsFormRow("Value Format",format),(minimum||0===minimum)&&this.renderDetailsFormRow("Min Value",minimum+(exclusiveMinimum?" (exclusive)":" (inclusive)")),!minimum&&0!==minimum&&(exclusiveMinimum||0===exclusiveMinimum)&&this.renderDetailsFormRow("Min Value",exclusiveMinimum+" (exclusive)"),(maximum||0===maximum)&&this.renderDetailsFormRow("Max Value",maximum+(exclusiveMaximum?" (exclusive)":" (inclusive)")),!maximum&&0!==maximum&&(exclusiveMaximum||0===exclusiveMaximum)&&this.renderDetailsFormRow("Max Value",exclusiveMaximum+" (exclusive)"),minLength&&this.renderDetailsFormRow("Min Length",minLength),maxLength&&this.renderDetailsFormRow("Max Length",maxLength),minItems&&this.renderDetailsFormRow("Min Items",minItems),maxItems&&this.renderDetailsFormRow("Max Items",maxItems),"boolean"==typeof uniqueItems&&this.renderDetailsFormRow("Items Unique",uniqueItems?"Yes":"No")),arrayItemSchema&&react_default.a.createElement("hr",null),arrayItemSchema&&react_default.a.createElement("h4",{className:"jsonschema-inspector-details-header"},"Array Entry Details"),arrayItemSchema&&this.renderDetailsForm(arrayItemSchema,columnData,-1))}},{key:"renderDetailsFormRow",value:function(labelText,rowValue){return react_default.a.createElement("div",{className:"jsonschema-inspector-details-form-row",key:labelText},react_default.a.createElement("label",{className:"jsonschema-inspector-details-form-label"},labelText,":"),react_default.a.createElement("span",{className:"jsonschema-inspector-details-form-value"},rowValue.toString()))}},{key:"isSelectionRequiredInParent",value:function(columnData,selectionColumnIndex){if(selectionColumnIndex<1)return!1;var refTargets=columnData[0].refTargets,parentColumn=columnData[selectionColumnIndex-1],requiredPropertiesInParent=getPropertyValue(parentColumn.items[parentColumn.selectedItem],"required",refTargets)||[],selectionName=columnData[selectionColumnIndex].selectedItem;return requiredPropertiesInParent.includes(selectionName)}}]),InspectorDetails}(react.PureComponent),Inspector_Inspector=function(_Component){function Inspector(props){var _this;Object(classCallCheck.a)(this,Inspector),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(Inspector).call(this,props))).getRenderDataForSelection=memoize_one_cjs_default()(function(schemas,selectedItems){var refTargets={};if(selectedItems.length>0){var rootSchema=schemas[selectedItems[0]];refTargets["#"]=rootSchema;var $id=rootSchema.$id,definitions=rootSchema.definitions;$id&&(refTargets[$id]=rootSchema),definitions&&Object.keys(definitions).forEach(function(key){var subSchema=definitions[key];refTargets["#/definitions/"+key]=subSchema,subSchema.$id&&(refTargets[subSchema.$id]=subSchema)})}var nextColumnScope=schemas,lastSelectionIndex=selectedItems.length-1,columnData=selectedItems.map(function(selection,index){var currentColumnScope=nextColumnScope;if(currentColumnScope)return nextColumnScope=getNestedProperties(currentColumnScope[selection],refTargets),{items:currentColumnScope,selectedItem:selection,trailingSelection:lastSelectionIndex===index,onSelect:_this.onSelect(index),refTargets:refTargets};throw new Error("invalid selection in column at index "+(index-1))});return"object"==typeof nextColumnScope&&null!==nextColumnScope&&columnData.push({items:nextColumnScope,selectedItem:null,trailingSelection:!1,onSelect:_this.onSelect(selectedItems.length),refTargets:refTargets}),{columnData:columnData}}),_this.onSelect=function(columnIndex){return function(event,name){event.stopPropagation();var selectedItems=_this.state.selectedItems;if((selectedItems.length!==columnIndex||name)&&(selectedItems.length!==columnIndex+1||selectedItems[columnIndex]!==name)){var newSelection=selectedItems.slice();newSelection.length=columnIndex,name&&newSelection.push(name),_this.setState({selectedItems:newSelection})}}};var defaultSelectedItems=props.defaultSelectedItems;return _this.state={selectedItems:defaultSelectedItems},_this.onSelect=_this.onSelect.bind(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this))),_this}return Object(inherits.a)(Inspector,_Component),Object(createClass.a)(Inspector,[{key:"render",value:function(){var _this$props=this.props,schemas=_this$props.schemas,renderSelectionDetails=_this$props.renderSelectionDetails,renderEmptyDetails=_this$props.renderEmptyDetails,selectedItems=this.state.selectedItems,columnData=this.getRenderDataForSelection(schemas,selectedItems).columnData;return react_default.a.createElement("div",{className:"jsonschema-inspector jsonschema-inspector-container"},react_default.a.createElement(src_InspectorColView,{columnData:columnData}),columnData&&react_default.a.createElement(src_InspectorDetails,{columnData:columnData,renderSelectionDetails:renderSelectionDetails,renderEmptyDetails:renderEmptyDetails}))}}]),Inspector}(react.Component);Inspector_Inspector.defaultProps={defaultSelectedItems:[]};__webpack_exports__.a=Inspector_Inspector}},[[158,1,2]]]);
//# sourceMappingURL=main.cc92eb9e22cb2b6b24dd.bundle.js.map