import { CloseIcon } from '@ui/atoms/_icons/CloseIcon';
import { cn } from '@utils/clxsUtil';
import React, { ComponentProps, createContext, useContext } from 'react';

export interface IModalProps {
    onClose?: () => void;
    showOverlay?: boolean;
    open?: boolean;
    children?: React.ReactNode;
}

const ModalContext = createContext<IModalProps>({});

export function Modal(props: IModalProps) {
  return (
    <ModalContext.Provider value={props}>
      {props.children}
    </ModalContext.Provider>
  );
}

const Base = ({ children, className, ...restProps }: ComponentProps<'div'>) => {
    const { onClose, showOverlay, open } = useContext(ModalContext)
    return (
        <div className={cn('fixed inset-0 grid place-content-center place-items-center p-x-10', 'modal-wrapper', className)} {...restProps}>
            { showOverlay && <div className='absolute bg-black/10 inset-0' onClick={onClose}></div> }
            <dialog open={open} className={cn('p-4 w-[50vw] bg-white shadow-sm flex flex-col gap-y-4', 'modal-dialog')}>
                {children}
            </dialog>
        </div>
    );
}

type ButtonTypes = ComponentProps<'button'>;

const Close: React.FC<ButtonTypes> = (props) => {
    const { onClose } = useContext(ModalContext)
    return (
        <button className={cn('absolute right-0 top-0', props.className)} onClick={onClose}>
            { React.isValidElement(props.children) ? props.children : <CloseIcon />}
        </button>
    )
}

type BodyProps = ComponentProps<'div'>;

const Body: React.FC<BodyProps> = (props) => {
    return (
        <div className={cn('flex', props.className)}>
            {props.children}
        </div>
    )
}

type HeaderProps = ComponentProps<'header'>;

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={cn('relative', props.className)}>
            {props.children}
        </header>
    )
}


type FooterProps = ComponentProps<'footer'>;

const Footer: React.FC<FooterProps> = ({ className, children, ...rest }: FooterProps) => {
    return (
        <footer className={cn('flex flex-row w-full gap-x-4', className)} {...rest}>
            {children}
        </footer>
    )
}

Modal.Base = Base;
Modal.Close = Close;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;