function removeSpace(str: string) {
    return str.replace(/\s/g, '');
} 

function formatNumber(text: string): string {
  return text.replace(/[^0-9]/g, '');
};


export { removeSpace, formatNumber };