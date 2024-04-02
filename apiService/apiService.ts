import { request } from "graphql-request";

const graphqlUrl =
  process?.env?.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:1337/graphql";
const apiUrl =
  process?.env?.NEXT_PUBLIC_API_URL ?? "http://localhost:1337/api/";

const loadNavigation = async (locale: string) => {
  const query = `
      query GetNavigation($locale: I18NLocaleCode!) {
        navigation(locale: $locale) {
          data {
            id
            attributes {
              navItem {
                name
                url
              }
              logo {
                data {
                  attributes {
                    url
                  }
                }
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
    const response: any = await request(graphqlUrl, query, variables);
    return response?.navigation?.data?.attributes;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

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
            products {
              title
              description
              productItem {
                title
                productFeature {
                  number
                  title
                  description
                }
              }
            }
            client {
              title
              description
              testimonial {
                description
                name
                storeName
              }
            }
            pricing {
              title
              description
              plan {
                name
                amount
                term
                badge
                point {
                  name
                }
              }
            }
            contact {
              title
              description
              contactItem {
                label
                value
                url
              }
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
    const response: any = await request(graphqlUrl, query, variables);
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
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

const loadStoreDetails = async (slug: string) => {
  const query = `
    query GetStore($slug: String) {
      stores(filters: { slug: { eq: $slug }}) {
        data {
          id
          attributes {
            name,
            about,
            phoneNumber,
            phoneNumber2,
            address,
            website,
            email,
            currency,
            slug,
            paymentMethod {
              upi,
              cash,
              card
            },
             socialMedia {
              facebook,
              instagram,
              whatsapp,
              youtube
            },
            store_category {
              data {
                attributes {
                  name
                }
              }
            }
            items {
              data {
                attributes {
                  name,
                  variant {
                    name,
                    price
                  },
                  item_category {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
         }
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  try {
    const response: any = await request(graphqlUrl, query, variables);
    return response?.stores?.data[0]?.attributes;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

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

const loadStoreSlugs = async () => {
  const query = `
    query GetStore() {
      stores {
        data {
          id
          attributes {
            slug
         }
        }
      }
    }
  `;

  try {
    const response: any = await request(graphqlUrl, query);
    console.log(response, "res");
    return response;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
};

export {
  loadNavigation,
  loadHomePage,
  searchStore,
  loadStoreDetails,
  submitContactForm,
  loadStoreSlugs,
};
