import React, { useState, useEffect } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs';

import {
  ContentTrigger,
  NameTrigger,
  StyledContent,
  StyledItem,
} from '../../styles/components/dropdown';

function Content({ children, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

// EXPORTS
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = Content;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export default function Dropdown() {
  const [countryActive, setCountryActive] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log('countryActive', countryActive);
  }, [countryActive]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ContentTrigger openDropdown={open} onClick={() => setOpen(!open)}>
          <NameTrigger>
            {countryActive ? countryActive : 'Filter By Region'}
          </NameTrigger>
          <BsChevronLeft />
          {/* {open ? <BsChevronDown /> : <BsChevronLeft />} */}
        </ContentTrigger>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={5}
        onClick={() => console.log('entrou test')}
      >
        <DropdownMenuItem onClick={() => setCountryActive('Europe')}>
          Europe
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCountryActive('Africa')}>
          Africa
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCountryActive('America')}>
          America
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCountryActive('Asia')}>
          Asia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCountryActive('Oceania')}>
          Oceania
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
