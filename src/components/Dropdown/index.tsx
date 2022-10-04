import React, { useState, useEffect } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { BsChevronLeft, BsChevronDown } from 'react-icons/bs';

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
  const dispatch = useAppDispatch();

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
        </ContentTrigger>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={5}
        onClick={() => console.log('entrou test')}
      >
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountriesByRegion('europe'));
            setCountryActive('Europe');
            setOpen(false);
          }}
        >
          Europe
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountriesByRegion('africa'));
            setCountryActive('Africa');
            setOpen(false);
          }}
        >
          Africa
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountriesByRegion('america'));
            setCountryActive('America');
            setOpen(false);
          }}
        >
          America
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountriesByRegion('asia'));
            setCountryActive('Asia');
            setOpen(false);
          }}
        >
          Asia
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            dispatch(loadCountriesByRegion('oceania'));
            setCountryActive('Oceania');
            setOpen(false);
          }}
        >
          Oceania
        </DropdownMenuItem>
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
