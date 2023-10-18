'use client';

import * as React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2';

import { cn } from 'utils/cn';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-none text-gray-800', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className="flex [&[data-state=open]>button]:bg-cream-700">
      <AccordionPrimitive.Trigger
        onClick={() => setOpen(!open)}
        ref={ref}
        className={cn(
          'bg-cream-400 text-base md:text-lg rounded-lg flex flex-1 items-center justify-between p-6 text-left md:font-semibold transition-all [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        <div className="w-2/3 md:w-5/6">{children}</div>

        {open && (
          <HiMinusSmall size={16} className="fill-gray-800 md:h-4 md:w-4 h-6 w-6 shrink-0" />
        )}
        {!open && (
          <HiPlusSmall size={16} className="fill-gray-800 md:h-4 md:w-4 h-6 w-6 shrink-0 " />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      '-mt-2 overflow-hidden rounded-b-lg bg-cream-700 text-base p-6 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0 font-sans">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
