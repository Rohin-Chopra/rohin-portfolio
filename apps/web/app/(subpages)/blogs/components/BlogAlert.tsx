import { Alert } from "@/components/ui/alert";
import type { ComponentProps } from "react";

export function BlogAlert({
  children,
  ...props
}: ComponentProps<typeof Alert>) {
  return (
    <Alert
      {...props}
      className="border-y-0 border-l-4 border-r-0 border-l-primary bg-darkGray"
    >
      {children}
    </Alert>
  );
}
