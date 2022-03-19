import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
  className?: string;
  activeClassName?: string;
};

const NavLink = ({
  href,
  children,
  className = "",
  activeClassName = "",
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
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
