import SIZES from './sizes';

export const HIT_SLOP = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

export const ICON_SIZE = 24;

export const ScrollViewPadding = {
  paddingBottom: SIZES.height * 0.2,
};

export const isIPad = SIZES.width > 400;

export const addAlpha = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;
