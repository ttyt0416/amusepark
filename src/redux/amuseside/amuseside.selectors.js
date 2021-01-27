import { createSelector } from 'reselect';

const selectAmuseSide = state => state.amuseSide;

export const selectAmuseSideSections = createSelector (
    [selectAmuseSide],
    amuseSide => amuseSide.sections
)