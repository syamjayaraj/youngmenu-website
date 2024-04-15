import { cache } from "react";
import { request } from "graphql-request";
import {
  homePageQuery,
  homePageSeoQuery,
  loadStoresQuery,
  navigationQuery,
  searchStoreQuery,
  storeDetailsQuery,
  storePageSeoQuery,
  storeSlugsQuery,
} from "./query";

const graphqlUrl: any = process?.env?.NEXT_PUBLIC_GRAPHQL_URL;
const apiUrl: any = process?.env?.NEXT_PUBLIC_API_URL;

const loadNavigation = cache(async (locale: string) => {
  const query = navigationQuery;
  const variables = {
    locale: { code: locale },
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.navigation?.data?.attributes;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const loadHomePage = cache(async (locale: string) => {
  const query = homePageQuery;
  const variables = {
    locale: { code: locale },
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.homePage?.data?.attributes;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const loadHomePageSeo = cache(async (locale: string) => {
  const query = homePageSeoQuery;
  const variables = {
    locale: { code: locale },
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.homePage?.data?.attributes?.seo;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const searchStore = async (searchTerm: string) => {
  const query = searchStoreQuery;
  const variables = {
    searchTerm,
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

const loadStoresPath = async () => {
  const query = loadStoresQuery;
  const variables = {};
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

const loadStoreDetails = cache(async (slug: string) => {
  const query = storeDetailsQuery;
  const variables = {
    slug,
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data[0]?.attributes;
  } catch (error: any) {
    return null;
    // return error?.response?.data?.stores?.data[0]?.attributes;
  }
});
const loadStorePageSeo = cache(async (slug: string) => {
  const query = storePageSeoQuery;
  const variables = {
    slug,
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data[0]?.attributes?.seo;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
});

const submitContactForm = async (data: any) => {
  try {
    const response = await fetch(`${apiUrl}contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    });
    if (response.ok) {
      return true;
    } else {
      false;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const loadStoreSlugs = async (locale: string) => {
  const query = storeSlugsQuery;
  const variables = {
    locale: { code: locale },
  };
  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

export {
  loadNavigation,
  loadHomePage,
  loadHomePageSeo,
  searchStore,
  loadStoresPath,
  loadStoreDetails,
  loadStorePageSeo,
  submitContactForm,
  loadStoreSlugs,
};
