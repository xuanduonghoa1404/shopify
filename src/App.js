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
    Select, Stack, RadioButton,
    TextContainer, Autocomplete, Tag,Thumbnail
} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';
import {GeneralInfo} from "./GeneralInfo";
import {CustomPrice} from "./CustomPrice";
import {ApplyProduct} from "./ApplyProduct";
import {TableResult} from "./TableResult";

export function App() {

    const breadcrumbs = [{content: 'Sample apps'}, {content: 'Create React App'}];
    const primaryAction = {content: 'New product'};
    const secondaryActions = [{content: 'Import', icon: ImportMinor}];
    return (
        <Page
            // title="Polaris"
            // breadcrumbs={breadcrumbs}
            // primaryAction={primaryAction}
            // secondaryActions={secondaryActions}
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

                <Layout.Section
                    // title="Form"
                    // description="A sample form using Polaris components."
                >
                    <GeneralInfo/>
                    <ApplyProduct/>
                    <CustomPrice/>
                </Layout.Section>
                <Layout.Section secondary>
                    <TableResult/>
                </Layout.Section>
                {/*<Layout.Section>*/}
                {/*    <FooterHelp>*/}
                {/*        For more details on Polaris, visit our{' '}*/}
                {/*        <Link url="https://polaris.shopify.com">style guide</Link>.*/}
                {/*    </FooterHelp>*/}
                {/*</Layout.Section>*/}
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
