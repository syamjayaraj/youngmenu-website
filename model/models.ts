export interface Header {
  title: string;
  description: string;
}
export interface SearchStore {
  title: string;
  description: string;
  searchInputPlaceholder: string;
}

export interface HomePage {}

export interface SuggestionItem {
  attributes: {
    name: string;
    slug: string;
  };
}

export interface IVariant {
  name: string;
  variant: IVariant;
}

export interface IItem {
  attributes: {
    name: string;
    variant: IVariant[];
    item_category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}
export interface IStoreDetails {
  name: string;
  about: string;
  phoneNumber: string;
  phoneNumber2: string;
  address: string;
  website: string;
  email: string;
  currency: string;
  slug: string;
  store_category: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
  paymentMethod: {
    upi: boolean;
    cash: boolean;
    card: boolean;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    youtube: string;
  };
  items: {
    data: IItem[];
  };
}
