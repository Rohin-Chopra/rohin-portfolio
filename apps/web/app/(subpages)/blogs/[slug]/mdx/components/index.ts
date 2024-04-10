import { BlogAlert } from "@/(subpages)/blogs/components/BlogAlert";
import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MDXAnchor } from "./MDXAnchor";
import { MDXImage } from "./MDXImage";
import { MDXPre } from "./MDXPre";

export const mdxComponents = {
  a: MDXAnchor,
  pre: MDXPre,
  img: MDXImage,
  BlogAlert: BlogAlert,
  AlertDescription: AlertDescription,
  AlertTitle: AlertTitle,
};
