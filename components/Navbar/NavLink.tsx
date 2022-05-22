import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<any> & {
  href: string;
  className?: string;
  activeClassName?: string;
};

const NavLink = ({
  href,
  children,
  className = '',
  ...rest
}: PropsWithChildren<Props>) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <a
        className={classNames({
          'cursor-pointer opacity-70 hover:opacity-100 transition-opacity':
            true,
          [className]: true,
          'opacity-100': isActive,
        })}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
