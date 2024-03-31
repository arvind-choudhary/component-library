import { Meta, StoryObj } from '@storybook/react';
import { ActionComponent } from '@ui/atoms/_action/ActionComponent';
import { Modal as ModalComponent } from '@ui/molecules/_modal/Modal';

const ModalMeta:  Meta<typeof ModalComponent> = {
    component: ModalComponent,
    args: {
        open: true,
        showOverlay: true
    },
};

export default ModalMeta;
type ModalStory = StoryObj<typeof ModalComponent>

export const Modal: ModalStory = {
    args: {
        open: true,
        children: <ModalComponent.Base className='px-4'>
                    <ModalComponent.Header>
                        <h2 className='col-span-2'>Modal Header</h2>
                        <ModalComponent.Close />
                    </ModalComponent.Header>
                    <ModalComponent.Body>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old. Richard McClintock, a Latin professor 
                            at Hampden-Sydney College in Virginia, looked up one of the more obscure 
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                            the cites of the word in classical literature, discovered the undoubtable source. 
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </ModalComponent.Body>
                    <ModalComponent.Footer >
                        <ActionComponent intent={'warning'} size={'full'}>Close</ActionComponent>
                        <ActionComponent intent={'success'} size={'full'}>Send</ActionComponent>
                    </ModalComponent.Footer>
                </ModalComponent.Base>
    },
};