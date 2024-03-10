export interface IAppProps extends React.HTMLAttributes<HTMLButtonElement> {
    text?: string
}

export function Button ({ children, text = 'Button', ...restProps }: IAppProps) {
  return (
    <button {...restProps}>
      {children ?? text}
    </button>
  );
}
