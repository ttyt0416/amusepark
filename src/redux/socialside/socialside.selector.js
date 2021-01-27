import { createSelector } from 'reselect';

const selectSocialSide = state => state.socialSide;

export const selectSocialSideSections = createSelector (
    [selectSocialSide],
    socialSide => socialSide.sections
)