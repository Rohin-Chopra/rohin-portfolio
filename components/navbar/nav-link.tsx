import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<any> & {
  href: string;
  className?: string;
  activeClassName?: string;
};

const NavLink = ({
  href,
  children,
  className = "",
  activeClassName = "",
  ...rest
}: PropsWithChildren<Props>) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <a
        className={classNames({
          [className]: true,
          [activeClassName]: isActive,
        })}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};

export { NavLink };
