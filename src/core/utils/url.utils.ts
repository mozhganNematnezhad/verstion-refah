export const IsSameUrl = (url1: string, url2: string): boolean => {
  return (
    url1.toLowerCase() === url2.toLowerCase() ||
    url1.toLowerCase() === url2.toLowerCase() + "/" ||
    url1.toLowerCase() + "/" === url2.toLowerCase()
  );
};

export const IsIncludes = (url1: string, url2: string): boolean => {
  return (
    url1.toLowerCase().includes(url2.toLowerCase()) ||
    url1.toLowerCase().includes(url2.toLowerCase() + "/") ||
    (url1.toLowerCase() + "/").includes(url2.toLowerCase())
  );
};
