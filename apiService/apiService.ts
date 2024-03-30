import { request } from "graphql-request";

const apiUrl =
  process?.env?.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:1337/graphql";

const loadHomePage = async (locale: string) => {
  const query = `
    query GetHomePage($locale: I18NLocaleCode!) {
      homePage(locale: $locale) {
        data {
          id
          attributes {
            header {
              title
              description
            }
            searchStore {
                title
                description
                searchInputPlaceholder
            }
          }
        }
      }
    }
  `;

  const variables = {
    locale: { code: locale },
  };

  try {
    const response: any = await request(apiUrl, query, variables);
    return response?.homePage?.data?.attributes;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

const searchStore = async (searchTerm: string) => {
  const query = `
    query SearchStores($searchTerm: String) {
      stores(filters: { name: { contains: $searchTerm }}) {
        data {
          id
          attributes {
            name,
            slug
         }
        }
      }
    }
  `;

  const variables = {
    searchTerm,
  };

  try {
    const response: any = await request(apiUrl, query, variables);
    return response?.stores?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

export { loadHomePage, searchStore };
