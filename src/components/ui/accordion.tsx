'use client';

import * as React from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

import { IN_VIEW_PROPS } from 'constants/motion';
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
    <motion.div {...IN_VIEW_PROPS}>
      <AccordionPrimitive.Header
        className={cn({
          flex: true,
          '[&[data-state=open]>button]:bg-cream-700': className.includes('plus-minus'),
          '[&[data-state=open]>button]:bg-cream-400': className.includes('default'),
        })}
      >
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

          {className.includes('plus-minus') && (
            <>
              {open && <HiMinusSmall size={24} className="fill-gray-800 h-7 w-7 shrink-0" />}
              {!open && <HiPlusSmall size={24} className="fill-gray-800 h-7 w-7 shrink-0" />}
            </>
          )}

          {className.includes('default') && (
            <>
              {open && (
                <MdOutlineKeyboardArrowDown size={20} className="fill-gray-80 h-7 w-7 shrink-0" />
              )}
              {!open && (
                <MdOutlineKeyboardArrowUp
                  size={20}
                  className="fill-gray-800 h-7 w-7 shrink-0 rotate-180"
                />
              )}
            </>
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    </motion.div>
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
