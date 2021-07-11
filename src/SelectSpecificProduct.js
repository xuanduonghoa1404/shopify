import {TextField, Button, Modal, Stack, TextContainer, Scrollable} from "@shopify/polaris";
import React, {useCallback, useState, useRef} from "react";
import {TableSelect} from "./TableSelect";

export function SelectSpecificProduct() {
    const DISCOUNT_LINK = 'https://polaris.shopify.com/';

    const [active, setActive] = useState(false);
    const node = useRef(null);

    const handleClick = useCallback(() => {
        node.current && node.current.input.focus();
    }, []);

    const handleFocus = useCallback(() => {
        if (node.current == null) {
            return;
        }
        node.current.input.select();
        document.execCommand('copy');
    }, []);

    const toggleModal = useCallback(() => setActive((active) => !active), []);

    const activator = <TextField
        value={name}
        label="Search product"
        labelHidden
        placeholder="Search product"
        onChange={toggleModal}
    />;

    return (
        <>
            <Modal
                activator={activator}
                open={active}
                onClose={toggleModal}
                title="SELECT SPECIFIC PRODUCTS"
                primaryAction={{
                    content: 'Close',
                    onAction: toggleModal,
                }}
            >
                <Modal.Section>
                    {/*<Scrollable>*/}
                    {/*    */}
                    {/*</Scrollable>*/}
                    <TableSelect/>
                </Modal.Section>
            </Modal>
        </>
    );
}