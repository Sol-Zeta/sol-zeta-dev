export const trimText = (text: string): string => {
    const maxLength = 54;
  
    if (!text) return "";
    if (text.length <= maxLength) return text;
  
    let trimmed = text.slice(0, maxLength + 1);
    let lastSpace = trimmed.lastIndexOf(" ");
  
    trimmed = trimmed.slice(0, lastSpace);
    return trimmed + " ...";
  };