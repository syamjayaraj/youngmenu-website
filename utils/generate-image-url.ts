const domainUrl = process?.env?.NEXT_PUBLIC_DOMAIN_URL;
const imageUrl = (url: string) => {
  return `${domainUrl}${url}`;
};
export default imageUrl;
