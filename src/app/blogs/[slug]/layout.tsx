import { PropsWithChildren } from "react";
import "./highlight.css";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
