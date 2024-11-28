type IconLinkProps = React.HTMLProps<HTMLAnchorElement> & {
  className?: string;
};

const IconLink: React.FunctionComponent<React.PropsWithChildren<IconLinkProps>> = ({
  children,
  className = '',
  href = '#',
  target = '_blank'
}) => {
  const clssName = `rounded-full text-white inline-flex items-center justify-center decoration-0 ${className}`;

  return (
    <a href={href} target={target} className={clssName}>
      {children}
    </a>
  );
};

export default IconLink;
