import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
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
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
  },
  defaultVariants: {
    color: "default",
    as: "h1",
    align: "left",
  },
});

export type HeadingProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof headingVariants> &
  Omit<HTMLAttributes<HTMLHeadElement>, "color">;

const Heading = ({
  children,
  as = "h1",
  color,
  align,
  className,
  ...props
}: HeadingProps) => {
  const Components = as as "h1" | "h2" | "h3" | "h4";
  return (
    <Components
      className={classNames(headingVariants({ as, color, align }), className)}
      {...props}
    >
      {children}
    </Components>
  );
};

export default Heading;
