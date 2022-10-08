import React, { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { BsChevronLeft } from 'react-icons/bs';

import {
  ContentTrigger,
  NameTrigger,
  StyledContent,
  StyledItem,
} from '../../styles/components/dropdown';
import { useAppDispatch } from '../../hooks';
import { loadCountries, loadCountriesByRegion } from '../../store/countries';

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

  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ContentTrigger openDropdown={open} onClick={() => setOpen(!open)}>
          <NameTrigger>
            {countryActive ? countryActive : 'Filter By Region'}
          </NameTrigger>
          <BsChevronLeft />
        </ContentTrigger>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={5}
        onClick={() => console.log('entrou test')}
      >
        {['Europe', 'Africa', 'Asia', 'Oceania', 'America'].map((item) => (
          <DropdownMenuItem
            key={item}
            onClick={() => {
              dispatch(loadCountriesByRegion(item.toLowerCase()));
              setCountryActive(item);
              setOpen(false);
            }}
          >
            {item}
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountries());
            setCountryActive(null);
            setOpen(false);
          }}
        >
          All Countries
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
