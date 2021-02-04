import { createSelector } from 'reselect';

const selectAmusemenu = state => state.amusemenu;

export const selectAmusemenuSections = createSelector(
  [selectAmusemenu],
  amusemenu => amusemenu.sections
);