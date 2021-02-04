import { createSelector } from 'reselect';

const selectSocialmenu = state => state.socialmenu;

export const selectSocialmenuSections = createSelector(
  [selectSocialmenu],
  socialmenu => socialmenu.sections
);