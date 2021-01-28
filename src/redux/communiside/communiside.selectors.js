import { createSelector } from 'reselect';

const selectCommuniSide = state => state.communiSide;

export const selectCommuniSideSections = createSelector (
    [selectCommuniSide],
    communiSide => communiSide.sections
)