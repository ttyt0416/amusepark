import { createSelector } from 'reselect';

const selectInfomenu = state => state.infomenu;

export const selectInfomenuSections = createSelector(
  [selectInfomenu],
  infomenu => infomenu.sections
);