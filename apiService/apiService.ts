import { request } from "graphql-request";

const graphqlUrl =
  process?.env?.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:1337/graphql";
const apiUrl =
  process?.env?.NEXT_PUBLIC_API_URL ?? "http://localhost:1337/api/";
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
      body: JSON.stringify(data),
    });
    console.log(response, "res");
    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export { loadHomePage, searchStore, loadStoreDetails, submitContactForm };
