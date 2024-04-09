const seo = `{
    title,
    description,
    keywords,
    ogType,
    ogImage {
      data {
        attributes {
          url
        }
      }
    },
    ogTitle,
    ogDescription,
    ogUrl,
    ogSiteName
  }`;
const navigationQuery = `query GetNavigation($locale: I18NLocaleCode!) {
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
  }`;
const homePageQuery = `
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
              image {
                data {
                  attributes {
                    url
                  }
                }
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
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            store {
              relativeUrl
              absoluteUrl
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
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
              target
            }
          }
        }
      }
    }
  }
`;

const homePageSeoQuery = `
query GetHomePage($locale: I18NLocaleCode!) {
  homePage(locale: $locale) {
    data {
      id
      attributes {
        seo ${seo}
      }
    }
  }
}
`;
const searchStoreQuery = `
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
const storeDetailsQuery = `
query GetStore($slug: String) {
  stores(filters: { slug: { eq: $slug }}) {
    data {
      id
      attributes {
        name,
        about,
        hours
        phoneNumber,
        phoneNumber2,
        address,
        website,
        email,
        currency,
        slug,
        logo {
          data {
            attributes {
              url
            }
          }
        },
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
        callButton {
          label,
          absoluteUrl,
          relativeUrl
        },
        items {
          data {
            attributes {
              name,
              shortDescription,
              description,
              ingredients {
                data {
                  attributes {
                    name
                  }
                }
              },
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
const storePageSeoQuery = `
query GetStore($slug: String) {
  stores(filters: { slug: { eq: $slug }}) {
    data {
      id
      attributes {
        seo ${seo}
     }
    }
  }
}
`;
const storeSlugsQuery = `
query GetStores($locale: I18NLocaleCode!) {
  stores(locale: $locale) {
    data {
      id
      attributes {
        slug
     }
    }
  }
}
`;
export {
  navigationQuery,
  homePageQuery,
  homePageSeoQuery,
  searchStoreQuery,
  storeDetailsQuery,
  storePageSeoQuery,
  storeSlugsQuery,
};
