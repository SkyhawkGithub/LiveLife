const isEmpty = (str: string | undefined | null) => {
  if (str) {
    return str.trim().length == 0;
  }

  return true;
};

const stringWithPlaceholders = (str: string, obj: any) => {
  return str.replace(
    /{\w+}/g,
    (placeholder) =>
      obj[placeholder.substring(1, placeholder.length - 1)] || placeholder,
  );
};

export { isEmpty, stringWithPlaceholders };
