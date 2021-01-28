import { createSelector } from 'reselect';

const selectInfoSide = state => state.infoSide;

export const selectInfoSideSections = createSelector (
    [selectInfoSide],
    infoSide => infoSide.sections
)