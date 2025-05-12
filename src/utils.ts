export const getBoolean = (val = '', def = 'N') => {
  return ['TRUE', 'YES', '1', 'Y', 'T', 'ON', 'ENABLE'].includes(
    (val || def).toUpperCase().trim(),
  )
}
