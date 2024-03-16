import { ActionComponent, IActionComponentProps } from "@ui/atoms/_action/ActionComponent";
import { CloseIcon } from "@ui/atoms/_icons/CloseIcon";
import styles from './ButtonWithIcons.module.scss';
import { cn } from "@utils/clxsUtil";

export interface ICloseButtonProps extends Omit<IActionComponentProps, 'text' | 'children' | 'aling'> {}

export function CloseBtn ({ intent, secondaryVariantType, hover, ...restProps }: ICloseButtonProps) {

    return (
        <ActionComponent 
            as="button" 
            intent={intent} 
            hover={hover}
            secondaryVariantType={secondaryVariantType} 
            className={cn(styles['button-with-icon'], 'group')}
            {...restProps}
        >
            Title
            <CloseIcon intent={intent} width={25} height={25} secondaryVariant={secondaryVariantType} hover={hover}/>
        </ActionComponent>
    );
}
