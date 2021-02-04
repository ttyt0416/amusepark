import { createSelector } from 'reselect';

const selectCommunimenu = state => state.communimenu;

export const selectCommunimenuSections = createSelector(
  [selectCommunimenu],
  communimenu => communimenu.sections
);