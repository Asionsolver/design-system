import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
const headingVariants = cva("", {
  variants: {
    as: {
      h1: "text-4xl tracking-xl",
      h2: "text-3xl tracking-lg ",
      h3: "text-2xl tracking-md",
      h4: "text-xl tracking-sm",
    },
    color: {
      default: "text-text",
      muted: "text-neutral-500 dark:text-neutral-400",
      primary: "text-primary",
    },
  },
  defaultVariants: {},
});

export type HeadingProps = {
  children: ReactNode;
} & VariantProps<typeof headingVariants> &
  Omit<HTMLAttributes<HTMLHeadElement>, "color">;

const Heading = ({ children, as = "h1", color, ...props }: HeadingProps) => {
  const Components = as as "h1" | "h2" | "h3" | "h4";
  return (
    <Components className={headingVariants({ as, color })} {...props}>
      {children}
    </Components>
  );
};

export default Heading;
