import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";


export const Accordionn = () => {

    let subtitle;

     const AccordionItems = [
        {
            id: 1,
            title: "Producto",
            subtitle: "Productos compuesto por materiales 100% colombianos y 0 contamintanes",
        },
        {
            id: 2,
            title: "Producto",
            subtitle: "Productos compuesto por materiales 100% colombianos y 0 contamintanes",
        },
    
    ]

    

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const itemClasses = {
      base: "py-10 w-full",
      title: "font-normal text-medium",
      trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
      indicator: "text-medium",
      content: "text-small px-2",
    };

  return (
<>

  <Accordion
  motionProps={{
    variants: {
      enter: {
        y: 0,
        opacity: 1,
        height: "auto",
        transition: {
          height: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 1,
          },
          opacity: {
            easings: "ease",
            duration: 1,
          },
        },
      },
      exit: {
        y: -10,
        opacity: 0,
        height: 0,
        transition: {
          height: {
            easings: "ease",
            duration: 0.25,
          },
          opacity: {
            easings: "ease",
            duration: 0.3,
          },
        },
      },
    },
  }}
  >
    <AccordionItem key="1" aria-label="Accordion 1" title="Materiales">
        {defaultContent}
    </AccordionItem>

    <AccordionItem key="2" aria-label="Accordion 2" title="A que no sabias">
        {defaultContent}
    </AccordionItem>
  </Accordion>


</>
       
   
  );
}
