import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "./utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>((props, ref) => (
  <DialogPrimitive.Overlay
    data-slot="dialog-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[90] bg-black/50",
      props.className,
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>((props, ref) => (
  <DialogPortal data-slot="dialog-portal">
    <DialogOverlay />
    <DialogPrimitive.Content
      data-slot="dialog-content"
      className={cn(
        "bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-1/2 left-1/2 z-[100] grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        props.className,
      )}
      ref={ref}
      {...props}
    >
      {props.children}
      <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
        <X />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    data-slot="dialog-header"
    className={cn(
      "flex flex-col gap-2 text-center sm:text-left",
      props.className,
    )}
    ref={ref}
    {...props}
  />
));
DialogHeader.displayName = "div";

const DialogFooter = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
  <div
    data-slot="dialog-footer"
    className={cn(
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      props.className,
    )}
    ref={ref}
    {...props}
  />
));
DialogFooter.displayName = "div";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    className={cn(
      "text-lg leading-none font-semibold",
      props.className,
    )}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<
    typeof DialogPrimitive.Description
  >
>((props, ref) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    className={cn(
      "text-muted-foreground text-sm",
      props.className,
    )}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName =
  DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};