v1
```sh
/modal      # complex component with multiple small pieces, and/or pre-built templates presets
    /templates
        /base-modal
            BaseModal.tsx
            ?BaseModal.styles.ts
            ?types.ts
            index.ts
    /components
        /modal-header
            ModalHeader.tsx
            ?ModalHeader.styles.tsx
            ?types.ts
            index.ts
        /modal-body
            ModalBody.tsx
            ?ModalBody.styles.tsx
            ?types.ts
            index.ts
        /close-button
            ModalCloseButton.tsx
            ?ModalCloseButton.styles.ts
            index.ts
    ?/styled-components
        index.ts
    ?/types
        index.ts
    index.ts # re-export templates and components, and pre-styled defaultPrimitives
```
v2
```sh

/modal      # complex component with multiple small pieces, and/or pre-built templates presets
    /templates
        /base-modal
            BaseModal.tsx
            ?BaseModal.styles.ts
            ?types.ts
            index.ts
    /components
        /modal-header
            ModalHeader.tsx
            ?ModalHeader.styles.tsx
            ?types.ts
            index.ts
        /modal-body
            ModalBody.tsx
            ?ModalBody.styles.tsx
            ?types.ts
            index.ts
        /close-button
            ModalCloseButton.tsx
            ?ModalCloseButton.styles.ts
            index.ts
    index.ts # re-export templates and components, and pre-styled defaultPrimitives
    PrimitiveModal.ts
    PrimitiveModal.styles.ts

/button     # simple self-contained component without variations or multiple pieces
    Button.tsx
    Button.styles.tsx
    index.ts
```
