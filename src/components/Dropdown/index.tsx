// LIBS
import React, { useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { BsChevronLeft } from 'react-icons/bs';

// HOOKS
import { useAppDispatch } from '../../hooks';

// STORE
import {
  loadCountries,
  loadCountriesByRegion,
} from '../../store/reducers/countries';

// STYLES
import {
  ContentTrigger,
  NameTrigger,
  StyledContent,
  StyledItem,
} from '../../styles/components/dropdown';

// EXPORTS
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = DropdownMenuPrimitive.Portal;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export default function Dropdown() {
  const dispatch = useAppDispatch();

  const [countryActive, setCountryActive] = useState(null);
  const [open, setOpen] = useState(false);

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

      <DropdownMenuContent>
        <StyledContent sideOffset={5}>
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
        </StyledContent>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
