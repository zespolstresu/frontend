interface IMakeFontStyles {
  fontSize: number;
  lineHeight: string;
  color?: string
}

export const makeFontStyles = (fontSize: number, lineHeight: string, color?: string) => ({
  fontSize,
  letterSpacing: 0.4,
  lineHeight,
  color,
});

export const makeFlexCenter = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const makeBorder = (color: string) => (`1px solid ${color}`);
