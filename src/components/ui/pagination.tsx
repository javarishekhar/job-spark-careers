
import * as React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  className?: string;
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul"> & {
  className?: string;
}) => (
  <ul
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
);

const PaginationItem = ({
  className,
  ...props
}: React.ComponentProps<"li"> & {
  className?: string;
}) => (
  <li className={cn("", className)} {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & React.ComponentProps<"a"> &
  Pick<ButtonProps, "size">;

const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "default" : "outline",
        size,
      }),
      disabled && "pointer-events-none opacity-50",
      className
    )}
    {...props}
  />
);

const PaginationPrev = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span>Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span"> & {
  className?: string;
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <span className="text-sm">...</span>
  </span>
);

type PaginationItemProps = {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const PaginationNumber = ({
  active,
  onClick,
  children,
}: PaginationItemProps) => (
  <PaginationItem>
    <PaginationLink
      onClick={onClick}
      isActive={active}
      className="h-9 w-9"
    >
      {children}
    </PaginationLink>
  </PaginationItem>
);

Pagination.Content = PaginationContent;
Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;
Pagination.Prev = PaginationPrev;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;
Pagination.Number = PaginationNumber;

export { Pagination };
