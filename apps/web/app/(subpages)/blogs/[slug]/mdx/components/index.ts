import {
  BlogAlert,
  BlogAlertDescription,
} from "@/(subpages)/blogs/components/BlogAlert";
import { AlertTitle } from "@/components/ui/alert";
import { MDXAnchor } from "./MDXAnchor";
import { MDXImage } from "./MDXImage";
import { MDXPre } from "./MDXPre";

export const mdxComponents = {
  a: MDXAnchor,
  pre: MDXPre,
  img: MDXImage,
  BlogAlert: BlogAlert,
  BlogAlertDescription: BlogAlertDescription,
  AlertTitle: AlertTitle,
};
