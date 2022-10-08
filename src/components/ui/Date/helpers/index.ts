export const unixToDate = (unix: number): string => {
  const ISO = new Date(unix * 1000).toISOString().split('T')[0].split('-');
  return [ISO[2], ISO[1], ISO[0]].join('.');
};
