const IconButton: React.FunctionComponent<
  React.PropsWithChildren<{
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }>
> = ({ children, className = "", onClick = () => null }) => {
  const clssName = `rounded-full text-white inline-flex items-center justify-center ${className}`;

  return (
    <button onClick={onClick} className={clssName}>
      {children}
    </button>
  );
};

export default IconButton;
