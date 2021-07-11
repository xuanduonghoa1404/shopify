import {
    Autocomplete,
    Card,
    ChoiceList,
    FormLayout,
    Heading,
    RadioButton,
    Select,
    Stack,
    Tag, TextContainer,
    TextField, Thumbnail
} from "@shopify/polaris";
import React, {useCallback, useState} from "react";
import {SelectSpecificProduct} from "./SelectSpecificProduct";

export function ApplyProduct() {
    const [applyProduct, setApplyProduct] = useState('');

    const handleApplyProductChange = useCallback(
        (_checked, newValue) => setApplyProduct(newValue),
        [],
    );
    ///product tag
    const deselectedOptionsProductTag = [
        {value: 'rustic', label: 'Rustic'},
        {value: 'antique', label: 'Antique'},
        {value: 'vinyl', label: 'Vinyl'},
        {value: 'vintage', label: 'Vintage'},
        {value: 'refurbished', label: 'Refurbished'},
    ];
    const [selectedOptionsProductTag, setSelectedOptionsProductTag] = useState([]);
    const [inputValueProductTag, setInputValueProductTag] = useState('');
    const [optionsProductTag, setOptionsProductTag] = useState(deselectedOptionsProductTag);

    const updateTextProductTag = useCallback(
        (value) => {
            setInputValueProductTag(value);

            if (value === '') {
                setOptionsProductTag(deselectedOptionsProductTag);
                return;
            }

            const filterRegex = new RegExp(value, 'i');
            const resultOptions = deselectedOptionsProductTag.filter((option) =>
                option.label.match(filterRegex),
            );
            let endIndex = resultOptions.length - 1;
            if (resultOptions.length === 0) {
                endIndex = 0;
            }
            setOptionsProductTag(resultOptions);
        },
        [deselectedOptionsProductTag],
    );

    const removeTagProductTag = useCallback(
        (tag) => () => {
            const options = [...selectedOptionsProductTag];
            options.splice(options.indexOf(tag), 1);
            setSelectedOptionsProductTag(options);
        },
        [selectedOptionsProductTag],
    );

    const tagsMarkupProductTag = selectedOptionsProductTag.map((option) => {
        let tagLabel = '';
        tagLabel = option.replace('_', ' ');
        tagLabel = titleCase(tagLabel);
        return (
            <Tag key={`option${option}`} onRemove={removeTagProductTag(option)}>
                {tagLabel}
            </Tag>
        );
    });

    const textFieldProductTag = (
        <Autocomplete.TextField
            onChange={updateTextProductTag}
            label="Tags"
            labelHidden
            value={inputValueProductTag}
            placeholder="Vintage, cotton, summer"
        />
    );

    function titleCase(string) {
        return string.toString()
            .toLowerCase()
            .split(' ')
            .map((word) => word.replace(word[0], word[0].toUpperCase()))
            .join('');
    }

///product collection
    const ava = <Thumbnail
        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
        size="large"
        alt="Black choker necklace"
    />;
    const deselectedOptionsProductCollection = [
        {value: 'rustic', label: 'Rustic'},
        {value: 'antique', label: 'Antique'},
        {value: 'vinyl', label: 'Vinyl'},
        {value: 'vintage', label: 'Vintage'},
        {value: 'refurbished', label: 'Refurbished'},
    ];
    const [selectedOptionsProductCollection, setSelectedOptionsProductCollection] = useState([]);
    const [inputValueProductCollection, setInputValueProductCollection] = useState('');
    const [optionsProductCollection, setOptionsProductCollection] = useState(deselectedOptionsProductCollection);

    const updateTextProductCollection = useCallback(
        (value) => {
            setInputValueProductCollection(value);

            if (value === '') {
                setOptionsProductCollection(deselectedOptionsProductCollection);
                return;
            }

            const filterRegex = new RegExp(value, 'i');
            const resultOptions = deselectedOptionsProductCollection.filter((option) =>
                option.label.match(filterRegex),
            );
            let endIndex = resultOptions.length - 1;
            if (resultOptions.length === 0) {
                endIndex = 0;
            }
            setOptionsProductCollection(resultOptions);
        },
        [deselectedOptionsProductCollection],
    );

    const removeTagProductCollection = useCallback(
        (tag) => () => {
            const options = [...selectedOptionsProductCollection];
            options.splice(options.indexOf(tag), 1);
            setSelectedOptionsProductCollection(options);
        },
        [selectedOptionsProductCollection],
    );

    const tagsMarkupProductCollection = selectedOptionsProductCollection.map((option) => {
        let tagLabel = '';
        tagLabel = option.replace('_', ' ');
        tagLabel = titleCase(tagLabel);
        return (
            <Tag key={`option${option}`} onRemove={removeTagProductCollection(option)}>
                {tagLabel}
            </Tag>
        );
    });

    const textFieldProductCollection = (
        <Autocomplete.TextField
            onChange={updateTextProductCollection}
            label="Tags"
            labelHidden
            value={inputValueProductCollection}
            placeholder="Vintage, cotton, summer"
        />
    );
/// choice list
    const [selectedCustomPrice, setSelectedCustomPrice] = useState(['none']);
    const [textFieldValue, setTextFieldValue] = useState('');

    const handleChoiceListChange = useCallback((value) => setApplyProduct(value), []);

    const handleTextFieldChange = useCallback(
        (value) => setTextFieldValue(value),
        [],
    );

    const renderChildrenProductTag = useCallback(
        (isSelected) =>
            isSelected && (
                <>
                    <Autocomplete
                        allowMultiple
                        options={optionsProductTag}
                        selected={selectedOptionsProductTag}
                        textField={textFieldProductTag}
                        onSelect={setSelectedOptionsProductTag}
                        listTitle="Suggested Tags"
                    />
                    <br/>
                    <TextContainer>
                        <Stack>{tagsMarkupProductTag}</Stack>
                    </TextContainer>
                </>
            ),
        [textFieldProductTag],
    );
    const renderChildrenProductCollections = useCallback(
        (isSelected) =>
            isSelected && (
                <>
                    <Autocomplete
                        allowMultiple
                        options={optionsProductCollection}
                        selected={selectedOptionsProductCollection}
                        textField={textFieldProductCollection}
                        onSelect={setSelectedOptionsProductCollection}
                        listTitle="Suggested Collections"
                    />
                    <br/>
                    <TextContainer>
                        <Stack>{tagsMarkupProductCollection}</Stack>
                    </TextContainer>
                </>
            ),
        [textFieldProductCollection],
    );
    const renderChildrenSpecificProduct = useCallback(
        (isSelected) =>
            isSelected && (
                <>
                    {/*<Autocomplete*/}
                    {/*    allowMultiple*/}
                    {/*    options={optionsProductCollection}*/}
                    {/*    selected={selectedOptionsProductCollection}*/}
                    {/*    textField={textFieldProductTag}*/}
                    {/*    onSelect={setSelectedOptionsProductCollection}*/}
                    {/*    listTitle="Suggested Collections"*/}
                    {/*/>*/}
                    <SelectSpecificProduct/>
                    <br/>
                    {/*<TextContainer>*/}
                    {/*    <Stack>{tagsMarkupProductCollection}</Stack>*/}
                    {/*</TextContainer>*/}
                </>
            ),
        [],
    );
    return <Card sectioned>
        <FormLayout>
            <Heading>Apply to Products</Heading>
            {/*<Stack vertical>*/}
            {/*    <RadioButton*/}
            {/*        label="All products"*/}
            {/*        checked={applyProduct === 'all'}*/}
            {/*        id="all"*/}
            {/*        name="products"*/}
            {/*        onChange={handleApplyProductChange}*/}
            {/*    />*/}
            {/*    <RadioButton*/}
            {/*        label="Specific products"*/}
            {/*        id="specific"*/}
            {/*        name="products"*/}
            {/*        checked={applyProduct === 'specific'}*/}
            {/*        onChange={handleApplyProductChange}*/}
            {/*    />*/}
            {/*    <RadioButton*/}
            {/*        label="Product collections"*/}
            {/*        checked={applyProduct === 'collection'}*/}
            {/*        id="collection"*/}
            {/*        name="products"*/}
            {/*        onChange={handleApplyProductChange}*/}
            {/*    />*/}
            {/*    <RadioButton*/}
            {/*        label="Product tags"*/}
            {/*        id="tag"*/}
            {/*        name="products"*/}
            {/*        checked={applyProduct === 'tag'}*/}
            {/*        onChange={handleApplyProductChange}*/}
            {/*    />*/}
            {/*</Stack>*/}
            <ChoiceList
                // title="Discount minimum requirements"
                choices={[
                    {label: 'All products', value: 'all'},
                    {
                        label: 'Specific products', value: 'specific', renderChildren: renderChildrenSpecificProduct
                    },
                    {
                        label: 'Product collections',
                        value: 'collections',
                        renderChildren: renderChildrenProductCollections

                    },
                    {
                        label: 'Product tags',
                        value: 'tag',
                        renderChildren: renderChildrenProductTag,
                    },
                ]}
                selected={applyProduct}
                // onChange={handleApplyProductChange}
                onChange={handleChoiceListChange}
            />
        </FormLayout>
    </Card>
}