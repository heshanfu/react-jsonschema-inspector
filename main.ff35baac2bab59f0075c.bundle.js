(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(module){module.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}},189:function(module){module.exports={description:"A representation of a shop's inventory.",type:"object",properties:{vegetables:{type:"array",description:"List of available vegetables.",items:{allOf:[{type:"object",required:["veggieName"],properties:{veggieName:{type:"string",description:"The name of the vegetable."}}},{type:"object",required:["veggieLike"],properties:{veggieLike:{type:"boolean",description:"Do I like this vegetable?"}}}]}}}}},293:function(module){module.exports={title:"Person",properties:{alias:{type:"string",description:"The person's login name."},friends:{type:"array",description:"List of friends",items:{$ref:"#"}}},required:["alias"]}},294:function(module,exports,__webpack_require__){__webpack_require__(295),__webpack_require__(375),module.exports=__webpack_require__(376)},376:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(131);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function(){__webpack_require__(471)},module)}.call(this,__webpack_require__(210)(module))},471:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(131),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(187),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(291),_src_Inspector__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(83),_schema_person_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(293),_schema_meta_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(188),_schema_shop_selection_json__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(189),onChangeAction=function(){return Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("selection-changed")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Inspector",module).addDecorator(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)({inline:!0,header:!1,maxPropsIntoLine:1,maxPropArrayLength:5,propTablesExclude:[_src_Inspector__WEBPACK_IMPORTED_MODULE_4__.a]})).add("minimal",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_4__.a,{schemas:{Person:_schema_person_json__WEBPACK_IMPORTED_MODULE_5__},onChange:onChangeAction()})}).add("with empty Details",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_4__.a,{schemas:{"Meta JSON Schema":_schema_meta_json__WEBPACK_IMPORTED_MODULE_6__},onChange:onChangeAction(),renderEmptyDetails:function(_ref){var rootColumnSchemas=_ref.rootColumnSchemas;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"1em","background-color":"#80cbc4"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"JSON Schema Inspector"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,'Just click on "',Object.keys(rootColumnSchemas),'" on the left side in order to traverse its nested properties – but beware of its circular references.'))}})}).add("with custom Details",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_4__.a,{schemas:{Shop:_schema_shop_selection_json__WEBPACK_IMPORTED_MODULE_7__},defaultSelectedItems:["Shop","vegetables"],onChange:onChangeAction(),renderSelectionDetails:function(_ref2){var itemSchema=_ref2.itemSchema,columnData=_ref2.columnData,selectionColumnIndex=_ref2.selectionColumnIndex;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:"1em","background-color":"#80cbc4"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,"Custom Details"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,itemSchema.description),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",null,"Selection Path"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"//"+columnData.filter(function(column,index){return index<=selectionColumnIndex}).map(function(column){return column.selectedItem}).join("/")))}})}).add("with custom Items",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_Inspector__WEBPACK_IMPORTED_MODULE_4__.a,{schemas:{Shop:_schema_shop_selection_json__WEBPACK_IMPORTED_MODULE_7__,"Meta JSON Schema":_schema_meta_json__WEBPACK_IMPORTED_MODULE_6__},defaultSelectedItems:["Meta JSON Schema"],onChange:onChangeAction(),renderItemContent:function(_ref3){var name=_ref3.name,hasNestedItems=_ref3.hasNestedItems,focused=(_ref3.selected,_ref3.focused);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"jsonschema-inspector-item-content",style:{"background-color":focused?"#005b4f":"#80cbc4",color:focused?"white":"black"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"jsonschema-inspector-item-name"},(hasNestedItems?"■ ":"□ ")+name))}})})}.call(this,__webpack_require__(210)(module))},579:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":268,"./nestedObjectAssign.js":268};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=579},684:function(module,exports,__webpack_require__){},83:function(module,__webpack_exports__,__webpack_require__){"use strict";var classCallCheck=__webpack_require__(32),createClass=__webpack_require__(33),possibleConstructorReturn=__webpack_require__(35),getPrototypeOf=__webpack_require__(34),inherits=__webpack_require__(36),assertThisInitialized=__webpack_require__(53),react=__webpack_require__(1),react_default=__webpack_require__.n(react),memoize_one_cjs=__webpack_require__(292),memoize_one_cjs_default=__webpack_require__.n(memoize_one_cjs),classnames=(__webpack_require__(684),__webpack_require__(132)),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),simpleTypes=prop_types_default.a.oneOf(["string","integer","number","object","array","boolean","null"]),jsonSchemaShape={$id:prop_types_default.a.string,$ref:prop_types_default.a.string,title:prop_types_default.a.string,description:prop_types_default.a.string,examples:prop_types_default.a.array,default:prop_types_default.a.any,type:prop_types_default.a.oneOfType([simpleTypes,prop_types_default.a.arrayOf(simpleTypes)]),enum:prop_types_default.a.array,const:prop_types_default.a.any,minLength:prop_types_default.a.number,maxLength:prop_types_default.a.number,pattern:prop_types_default.a.string,format:prop_types_default.a.string,multipleOf:prop_types_default.a.number,minimum:prop_types_default.a.number,exclusiveMinimum:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.bool]),maximum:prop_types_default.a.number,exclusiveMaximum:prop_types_default.a.oneOfType([prop_types_default.a.number,prop_types_default.a.bool]),required:prop_types_default.a.arrayOf(prop_types_default.a.string),minItems:prop_types_default.a.number,maxItems:prop_types_default.a.number,uniqueItems:prop_types_default.a.bool},JsonSchemaPropType=prop_types_default.a.shape(jsonSchemaShape);jsonSchemaShape.properties=prop_types_default.a.objectOf(prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType])),jsonSchemaShape.items=prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType,prop_types_default.a.array]),jsonSchemaShape.additionalItems=prop_types_default.a.oneOfType([prop_types_default.a.bool,JsonSchemaPropType]),jsonSchemaShape.definitions=prop_types_default.a.objectOf(JsonSchemaPropType),jsonSchemaShape.allOf=prop_types_default.a.arrayOf(JsonSchemaPropType);function isNonEmptyObject(target){return isDefined(target)&&"object"==typeof target&&Object.keys(target).length>0}function isDefined(target){return null!=target}function getPropertyParentFieldValue(schema,fieldName,refTargets){return function getPropertyParentSchemas(schema,refTargets){if(!isNonEmptyObject(schema))return[];if(schema.$ref){var referencedSchema=refTargets[schema.$ref];if(!isDefined(referencedSchema))throw new Error('Cannot resolve $ref: "'+schema.$ref+'", only known references are: '+Object.keys(refTargets).join(", "));return getPropertyParentSchemas(referencedSchema,refTargets)}if(schema.allOf){var returnedSchemas=[schema];return schema.allOf.forEach(function(part){return returnedSchemas=returnedSchemas.concat(getPropertyParentSchemas(part,refTargets))}),returnedSchemas}if(isNonEmptyObject(schema.items))return getPropertyParentSchemas(schema.items,refTargets);if(isNonEmptyObject(schema.additionalItems))return getPropertyParentSchemas(schema.additionalItems,refTargets);return[schema]}(schema,refTargets).map(function(part){return part[fieldName]}).reduce(mergeValues,null)}function getFieldValue(schema,fieldName,refTargets){if(schema.$ref){if(!refTargets)return null;var referencedSchema=refTargets[schema.$ref];if(!isDefined(referencedSchema))throw new Error('Cannot resolve $ref: "'+schema.$ref+'", only known references are: '+Object.keys(refTargets).join(", "));return getFieldValue(referencedSchema,fieldName,refTargets)}var value=schema[fieldName];return schema.allOf?schema.allOf.map(function(part){return getFieldValue(part,fieldName,refTargets)}).reduce(mergeValues,value):value}function mergeValues(combined,nextValue){return isDefined(combined)?isDefined(nextValue)?Array.isArray(combined)&&Array.isArray(nextValue)?combined.concat(nextValue):"object"==typeof combined&&isNonEmptyObject(nextValue)?Object.assign({},combined,nextValue):combined:combined:nextValue}var InspectorItem_InspectorItem=function(_PureComponent){function InspectorItem(){return Object(classCallCheck.a)(this,InspectorItem),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorItem).apply(this,arguments))}return Object(inherits.a)(InspectorItem,_PureComponent),Object(createClass.a)(InspectorItem,[{key:"componentDidUpdate",value:function(){this.buttonRef&&this.buttonRef.focus()}},{key:"renderDefaultContent",value:function(_ref){var name=_ref.name;return react_default.a.createElement("div",{className:"jsonschema-inspector-item-content"},react_default.a.createElement("span",{className:"jsonschema-inspector-item-name"},name),react_default.a.createElement("span",{className:"jsonschema-inspector-item-icon"}))}},{key:"render",value:function(){var _this=this,_this$props=this.props,name=_this$props.name,schema=_this$props.schema,selected=_this$props.selected,autoFocus=_this$props.autoFocus,refTargets=_this$props.refTargets,onSelect=_this$props.onSelect,renderContent=_this$props.renderContent,hasNestedItems=isNonEmptyObject(getPropertyParentFieldValue(schema,"properties",refTargets)),buttonAttributes={className:classnames_default()({"jsonschema-inspector-item":!0,"has-nested-items":hasNestedItems,selected:selected}),onClick:onSelect,onFocus:onSelect};autoFocus&&(buttonAttributes.ref=function(ref){return _this.buttonRef=ref});var renderParameters={name:name,hasNestedItems:hasNestedItems,selected:selected,focused:autoFocus,schema:schema,refTargets:refTargets};return react_default.a.createElement("button",buttonAttributes,(renderContent||this.renderDefaultContent)(renderParameters))}}]),InspectorItem}(react.PureComponent);InspectorItem_InspectorItem.defaultProps={selected:!1};var src_InspectorItem=InspectorItem_InspectorItem,src_InspectorColumn=function(_PureComponent){function InspectorColumn(){return Object(classCallCheck.a)(this,InspectorColumn),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorColumn).apply(this,arguments))}return Object(inherits.a)(InspectorColumn,_PureComponent),Object(createClass.a)(InspectorColumn,[{key:"renderItem",value:function(name){var _this$props=this.props,items=_this$props.items,selectedItem=_this$props.selectedItem,trailingSelection=_this$props.trailingSelection,refTargets=_this$props.refTargets,_onSelect=_this$props.onSelect,renderItemContent=_this$props.renderItemContent,item=items[name],selected=name===selectedItem;return react_default.a.createElement(src_InspectorItem,{key:name,name:name,schema:item,selected:selected,refTargets:refTargets,onSelect:function(event){return _onSelect(event,name)},renderContent:renderItemContent,autoFocus:selected&&trailingSelection})}},{key:"render",value:function(){var _this$props2=this.props,items=_this$props2.items,selectedItem=_this$props2.selectedItem,trailingSelection=_this$props2.trailingSelection,onSelect=_this$props2.onSelect,columnClassName=classnames_default()({"jsonschema-inspector-column":!0,"with-selection":selectedItem,"trailing-selection":trailingSelection});return react_default.a.createElement("div",{className:columnClassName,onClick:onSelect,tabIndex:-1},Object.keys(items).sort().map(this.renderItem.bind(this)))}}]),InspectorColumn}(react.PureComponent),src_InspectorColView=function(_PureComponent){function InspectorColView(){return Object(classCallCheck.a)(this,InspectorColView),Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorColView).apply(this,arguments))}return Object(inherits.a)(InspectorColView,_PureComponent),Object(createClass.a)(InspectorColView,[{key:"componentDidUpdate",value:function(prevProps){prevProps.columnData.length<this.props.columnData.length&&(this.colViewContainerRef.scrollLeft=this.colViewContainerRef.scrollWidth)}},{key:"render",value:function(){var _this=this,_this$props=this.props,columnData=_this$props.columnData,refTargets=_this$props.refTargets,appendEmptyColumn=_this$props.appendEmptyColumn,renderItemContent=_this$props.renderItemContent;return react_default.a.createElement("div",{className:"jsonschema-inspector-colview",ref:function(_ref){return _this.colViewContainerRef=_ref}},columnData.map(function(singleColumnData,index){return react_default.a.createElement(src_InspectorColumn,Object.assign({key:index,refTargets:refTargets,renderItemContent:renderItemContent},singleColumnData))}),appendEmptyColumn&&react_default.a.createElement("div",{className:"jsonschema-inspector-column-placeholder"}))}}]),InspectorColView}(react.PureComponent),src_InspectorDetails=function(_PureComponent){function InspectorDetails(props){var _this;return Object(classCallCheck.a)(this,InspectorDetails),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(InspectorDetails).call(this,props))).renderDefaultSelectionDetails=_this.renderDefaultSelectionDetails.bind(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this))),_this}return Object(inherits.a)(InspectorDetails,_PureComponent),Object(createClass.a)(InspectorDetails,[{key:"render",value:function(){var _this$props=this.props,columnData=_this$props.columnData,refTargets=_this$props.refTargets,renderSelectionDetails=_this$props.renderSelectionDetails,renderEmptyDetails=_this$props.renderEmptyDetails,selectionColumnIndex=columnData.length-(columnData[columnData.length-1].trailingSelection?1:2),trailingSelectionColumn=selectionColumnIndex<0?null:columnData[selectionColumnIndex],itemSchema=trailingSelectionColumn?trailingSelectionColumn.items[trailingSelectionColumn.selectedItem]:null;return react_default.a.createElement("div",{className:"jsonschema-inspector-details"},itemSchema&&(renderSelectionDetails||this.renderDefaultSelectionDetails)({itemSchema:itemSchema,refTargets:refTargets,columnData:columnData,selectionColumnIndex:selectionColumnIndex}),!itemSchema&&renderEmptyDetails&&renderEmptyDetails({rootColumnSchemas:columnData[0].items,refTargets:refTargets}))}},{key:"renderDefaultSelectionDetails",value:function(parameters){return react_default.a.createElement("div",{className:"jsonschema-inspector-details-content"},react_default.a.createElement("h3",{className:"jsonschema-inspector-details-header"},"Details"),this.renderDetailsForm(parameters))}},{key:"renderDetailsForm",value:function(_ref){var itemSchema=_ref.itemSchema,refTargets=_ref.refTargets,columnData=_ref.columnData,selectionColumnIndex=_ref.selectionColumnIndex,isRequired=this.isSelectionRequiredInParent(columnData,selectionColumnIndex,refTargets),title=getFieldValue(itemSchema,"title",refTargets),description=getFieldValue(itemSchema,"description",refTargets),type=getFieldValue(itemSchema,"type",refTargets),constValue=getFieldValue(itemSchema,"const",refTargets),enumValue=getFieldValue(itemSchema,"enum",refTargets),defaultValue=getFieldValue(itemSchema,"default",refTargets),examples=getFieldValue(itemSchema,"examples",refTargets),pattern=getFieldValue(itemSchema,"pattern",refTargets),format=getFieldValue(itemSchema,"format",refTargets),minimum=getFieldValue(itemSchema,"minimum",refTargets),exclusiveMinimum=getFieldValue(itemSchema,"exclusiveMinimum",refTargets),maximum=getFieldValue(itemSchema,"maximum",refTargets),exclusiveMaximum=getFieldValue(itemSchema,"exclusiveMaximum",refTargets),minLength=getFieldValue(itemSchema,"minLength",refTargets),maxLength=getFieldValue(itemSchema,"maxLength",refTargets),minItems=getFieldValue(itemSchema,"minItems",refTargets),maxItems=getFieldValue(itemSchema,"maxItems",refTargets),uniqueItems=getFieldValue(itemSchema,"uniqueItems",refTargets),arrayItems=getFieldValue(itemSchema,"items",refTargets),arrayItemSchema="object"==typeof arrayItems&&arrayItems||"boolean"==typeof arrayItems&&getFieldValue(itemSchema,"additionalItems",refTargets);return react_default.a.createElement("div",null,react_default.a.createElement("form",{className:"jsonschema-inspector-details-form"},this.renderDetailsFormRow("Title",title),this.renderDetailsFormRow("Description",description),isRequired&&this.renderDetailsFormRow("Required","Yes"),this.renderDetailsFormRow("Type",type),this.renderDetailsFormRow("Constant Value",constValue),this.renderDetailsFormRow("Possible Values",enumValue),isDefined(minimum)&&this.renderDetailsFormRow("Min Value",minimum+(exclusiveMinimum?" (exclusive)":" (inclusive)")),!isDefined(minimum)&&isDefined(exclusiveMinimum)&&this.renderDetailsFormRow("Min Value",exclusiveMinimum+" (exclusive)"),isDefined(maximum)&&this.renderDetailsFormRow("Max Value",maximum+(exclusiveMaximum?" (exclusive)":" (inclusive)")),!isDefined(maximum)&&isDefined(exclusiveMaximum)&&this.renderDetailsFormRow("Max Value",exclusiveMaximum+" (exclusive)"),this.renderDetailsFormRow("Default Value","object"==typeof defaultValue?JSON.stringify(defaultValue):defaultValue),isDefined(examples)&&examples.length&&this.renderDetailsFormRow("Example(s)","object"==typeof examples[0]?JSON.stringify(examples):examples),this.renderDetailsFormRow("Value Pattern",pattern),this.renderDetailsFormRow("Value Format",format),this.renderDetailsFormRow("Min Length",minLength),this.renderDetailsFormRow("Max Length",maxLength),this.renderDetailsFormRow("Min Items",minItems),this.renderDetailsFormRow("Max Items",maxItems),"boolean"==typeof uniqueItems&&this.renderDetailsFormRow("Items Unique",uniqueItems?"Yes":"No")),arrayItemSchema&&react_default.a.createElement("hr",null),arrayItemSchema&&react_default.a.createElement("h4",{className:"jsonschema-inspector-details-header"},"Array Entry Details"),arrayItemSchema&&this.renderDetailsForm({itemSchema:arrayItemSchema,refTargets:refTargets,columnData:columnData,selectionColumnIndex:-1}))}},{key:"renderDetailsFormRow",value:function(labelText,rowValue){return isDefined(rowValue)?react_default.a.createElement("div",{className:"jsonschema-inspector-details-form-row",key:labelText},react_default.a.createElement("label",{className:"jsonschema-inspector-details-form-label"},labelText,":"),react_default.a.createElement("span",{className:"jsonschema-inspector-details-form-value"},rowValue.toString())):null}},{key:"isSelectionRequiredInParent",value:function(columnData,selectionColumnIndex,refTargets){if(selectionColumnIndex<1)return!1;var parentColumn=columnData[selectionColumnIndex-1],requiredPropertiesInParent=getPropertyParentFieldValue(parentColumn.items[parentColumn.selectedItem],"required",refTargets);if(requiredPropertiesInParent){var selectionName=columnData[selectionColumnIndex].selectedItem;return requiredPropertiesInParent.includes(selectionName)}return!1}}]),InspectorDetails}(react.PureComponent),Inspector_Inspector=function(_Component){function Inspector(props){var _this;Object(classCallCheck.a)(this,Inspector),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(Inspector).call(this,props))).getRenderDataForSelection=memoize_one_cjs_default()(function(schemas,selectedItems){var refTargets={};if(selectedItems.length>0){var rootSchema=schemas[selectedItems[0]];refTargets["#"]=rootSchema;var $id=rootSchema.$id,definitions=rootSchema.definitions;$id&&(refTargets[$id]=rootSchema),definitions&&Object.keys(definitions).forEach(function(key){var subSchema=definitions[key];refTargets["#/definitions/"+key]=subSchema,subSchema.$id&&(refTargets[subSchema.$id]=subSchema)})}var nextColumnScope=schemas,lastSelectionIndex=selectedItems.length-1,columnData=selectedItems.map(function(selection,index){var currentColumnScope=nextColumnScope;if(currentColumnScope)return nextColumnScope=getPropertyParentFieldValue(currentColumnScope[selection],"properties",refTargets),{items:currentColumnScope,selectedItem:selection,trailingSelection:lastSelectionIndex===index,onSelect:_this.onSelect(index)};throw new Error("invalid selection in column at index "+(index-1))});return isNonEmptyObject(nextColumnScope)&&columnData.push({items:nextColumnScope,selectedItem:null,trailingSelection:!1,onSelect:_this.onSelect(selectedItems.length)}),{columnData:columnData,refTargets:refTargets}}),_this.onSelect=function(columnIndex){return function(event,name){event.stopPropagation();var _this$state=_this.state,selectedItems=_this$state.selectedItems,appendEmptyColumn=_this$state.appendEmptyColumn;if((selectedItems.length!==columnIndex||name)&&(selectedItems.length!==columnIndex+1||selectedItems[columnIndex]!==name)){var newSelection=selectedItems.slice();newSelection.length=columnIndex,name&&newSelection.push(name);var _this$props=_this.props,schemas=_this$props.schemas,onChange=_this$props.onChange,oldColumnCount=(appendEmptyColumn?1:0)+_this.getRenderDataForSelection(schemas,selectedItems).columnData.length,newRenderData=_this.getRenderDataForSelection(schemas,newSelection);_this.setState({selectedItems:newSelection,appendEmptyColumn:newRenderData.columnData.length<oldColumnCount},onChange?function(){return onChange(event,newSelection,newRenderData)}:null)}}};var defaultSelectedItems=props.defaultSelectedItems;return _this.state={selectedItems:defaultSelectedItems,appendEmptyColumn:!1},_this.onSelect=_this.onSelect.bind(Object(assertThisInitialized.a)(Object(assertThisInitialized.a)(_this))),_this}return Object(inherits.a)(Inspector,_Component),Object(createClass.a)(Inspector,[{key:"render",value:function(){var _this$props2=this.props,schemas=_this$props2.schemas,renderItemContent=_this$props2.renderItemContent,renderSelectionDetails=_this$props2.renderSelectionDetails,renderEmptyDetails=_this$props2.renderEmptyDetails,_this$state2=this.state,selectedItems=_this$state2.selectedItems,appendEmptyColumn=_this$state2.appendEmptyColumn,_this$getRenderDataFo=this.getRenderDataForSelection(schemas,selectedItems),columnData=_this$getRenderDataFo.columnData,refTargets=_this$getRenderDataFo.refTargets;return react_default.a.createElement("div",{className:"jsonschema-inspector jsonschema-inspector-container"},columnData&&react_default.a.createElement(src_InspectorColView,{columnData:columnData,refTargets:refTargets,appendEmptyColumn:appendEmptyColumn,renderItemContent:renderItemContent}),columnData&&react_default.a.createElement(src_InspectorDetails,{columnData:columnData,refTargets:refTargets,renderSelectionDetails:renderSelectionDetails,renderEmptyDetails:renderEmptyDetails}))}}]),Inspector}(react.Component);Inspector_Inspector.defaultProps={defaultSelectedItems:[]};__webpack_exports__.a=Inspector_Inspector}},[[294,1,2]]]);
//# sourceMappingURL=main.ff35baac2bab59f0075c.bundle.js.map