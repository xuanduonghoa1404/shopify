import React, {useState, useCallback} from 'react';
import {
    Layout,
    Page,
    FooterHelp,
    Card,
    Link, Heading,
    Button,
    FormLayout,
    TextField,
    AccountConnection,
    ChoiceList,
    SettingToggle,
    Select, Stack, RadioButton
} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';

export function App() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [checkboxes, setCheckboxes] = useState([]);
    const [connected, setConnected] = useState(false);

    const handleFirstChange = useCallback((value) => setFirst(value), []);
    const handleLastChange = useCallback((value) => setLast(value), []);
    const handleEmailChange = useCallback((value) => setEmail(value), []);
    const handleCheckboxesChange = useCallback(
        (value) => setCheckboxes(value),
        [],
    );

    const toggleConnection = useCallback(() => {
        setConnected(!connected);
    }, [connected]);

    const breadcrumbs = [{content: 'Sample apps'}, {content: 'Create React App'}];
    const primaryAction = {content: 'New product'};
    const secondaryActions = [{content: 'Import', icon: ImportMinor}];

    const choiceListItems = [
        {label: 'I accept the Terms of Service', value: 'false'},
        {label: 'I consent to receiving emails', value: 'false2'},
    ];

    const accountSectionDescription = connected
        ? 'Disconnect your account from your Shopify store.'
        : 'Connect your account to your Shopify store.';

    const accountMarkup = connected ? (
        <DisconnectAccount onAction={toggleConnection}/>
    ) : (
        <ConnectAccount onAction={toggleConnection}/>
    );
/////////////////////////////////////////
    const [name, setName] = useState('');
    const [priority, setPriority] = useState(0);
    const [amount, setAmount] = useState(0);
    const [selected, setSelected] = useState('enable');
    const options = [
        {label: 'Enable', value: 'enable'},
        {label: 'Disable', value: 'disable'},
    ];

    const handleNameChange = useCallback((value) => setName(value), []);
    const handlePriorityChange = useCallback((value) => setPriority(value), []);
    const handleAmountChange = useCallback((value) => setAmount(value), []);
    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const [applyProduct, setApplyProduct] = useState('');
    const [priceCustom, setPriceCustom] = useState('');

    const handleApplyProductChange = useCallback(
        (_checked, newValue) => setApplyProduct(newValue),
        [],
    );
    const handlePriceCustomChange = useCallback(
        (_checked, newValue) => setPriceCustom(newValue),
        [],
    );

    return (
        <Page
            title="Polaris"
            breadcrumbs={breadcrumbs}
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
        >
            <Layout>
                {/*<Layout.AnnotatedSection*/}
                {/*    title="Style"*/}
                {/*    description="Customize the style of your checkout"*/}
                {/*>*/}
                {/*    <SettingToggle*/}
                {/*        action={{*/}
                {/*            content: 'Customize Checkout',*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Upload your store’s logo, change colors and fonts, and more.*/}
                {/*    </SettingToggle>*/}
                {/*</Layout.AnnotatedSection>*/}

                {/*<Layout.AnnotatedSection*/}
                {/*    title="Account"*/}
                {/*    description={accountSectionDescription}*/}
                {/*>*/}
                {/*    {accountMarkup}*/}
                {/*</Layout.AnnotatedSection>*/}

                <Layout.AnnotatedSection
                    title="Form"
                    description="A sample form using Polaris components."
                >
                    <Card sectioned>
                        <FormLayout>
                            <Heading>General Information</Heading>
                            <TextField
                                value={name}
                                label="Name"
                                placeholder="Name"
                                onChange={handleNameChange}
                            />
                            <TextField
                                value={priority}
                                label="Priority"
                                type={"number"}
                                // placeholder="0"
                                
                                onChange={handlePriorityChange}
                                helpText="Please enter an integer from 0 to 99 is the highest priority."
                            />
                            {/*<FormLayout.Group>*/}
                            {/*</FormLayout.Group>*/}
                            <Select
                                label="Status"
                                options={options}
                                onChange={handleSelectChange}
                                value={selected}
                            />
                            {/*<Button primary>Submit</Button>*/}
                        </FormLayout>
                    </Card>
                    <Card sectioned>
                        <FormLayout>
                            <Heading>Apply to Products</Heading>
                            <Stack vertical>
                                <RadioButton
                                    label="All products"
                                    checked={applyProduct === 'all'}
                                    id="all"
                                    name="products"
                                    onChange={handleApplyProductChange}
                                />
                                <RadioButton
                                    label="Specific products"
                                    id="specific"
                                    name="products"
                                    checked={applyProduct === 'specific'}
                                    onChange={handleApplyProductChange}
                                />
                                <RadioButton
                                    label="Product collections"
                                    checked={applyProduct === 'collection'}
                                    id="collection"
                                    name="products"
                                    onChange={handleApplyProductChange}
                                />
                                <RadioButton
                                    label="Product tags"
                                    id="tag"
                                    name="products"
                                    checked={applyProduct === 'tag'}
                                    onChange={handleApplyProductChange}
                                />
                            </Stack>

                        </FormLayout>
                    </Card>
                    <Card sectioned>
                        <FormLayout>
                            <Heading>Custom Prices</Heading>
                            <Stack vertical>
                                <RadioButton
                                    label="Apply a price to selected products"
                                    checked={priceCustom === 'apply'}
                                    id="apply"
                                    name="price"
                                    onChange={handlePriceCustomChange}
                                />
                                <RadioButton
                                    label="Decrease a fixed amount of original prices of selected products"
                                    id="fixed"
                                    name="price"
                                    checked={priceCustom === 'fixed'}
                                    onChange={handlePriceCustomChange}
                                />
                                <RadioButton
                                    label="Decrease the original prices of selected products by a percentage (%)"
                                    checked={priceCustom === 'percentage'}
                                    id="percentage"
                                    name="price"
                                    onChange={handlePriceCustomChange}
                                />
                            </Stack>
                            <TextField
                                value={amount}
                                label="Amount"
                                type={"number"}
                                onChange={handleAmountChange}
                            />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>

                <Layout.Section>
                    <FooterHelp>
                        For more details on Polaris, visit our{' '}
                        <Link url="https://polaris.shopify.com">style guide</Link>.
                    </FooterHelp>
                </Layout.Section>
            </Layout>
        </Page>
    );
}

function ConnectAccount({onAction}) {
    return (
        <AccountConnection
            action={{content: 'Connect', onAction}}
            details="No account connected"
            termsOfService={
                <p>
                    By clicking Connect, you are accepting Sample’s{' '}
                    <Link url="https://polaris.shopify.com">Terms and Conditions</Link>,
                    including a commission rate of 15% on sales.
                </p>
            }
        />
    );
}

function DisconnectAccount({onAction}) {
    return (
        <AccountConnection
            connected
            action={{content: 'Disconnect', onAction}}
            accountName="Tom Ford"
            title={<Link url="http://google.com">Tom Ford</Link>}
            details="Account id: d587647ae4"
        />
    );
}
