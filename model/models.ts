export interface IHeader {
  title: string;
  description: string;
}
export interface ISearchMenu {
  title: string;
  description: string;
  searchInputPlaceholder: string;
}

export interface IProductFeature {
  number: string;
  title: string;
  description: string;
}

export interface IProductItem {
  title: string;
  productFeature: IProductFeature[];
}

export interface IProduct {
  title: string;
  description: string;
  productItem: IProductItem[];
}

export interface ITestimonial {
  image: any;
  description: string;
  name: string;
  storeName: string;
}

export interface IStore {
  logo: any;
  relativeUrl: string;
  absoluteUrl: string;
}

export interface IClient {
  title: string;
  description: string;
  testimonial: ITestimonial[];
  store: IStore[];
}

export interface IPoint {
  name: string;
}

export interface IPlan {
  name: string;
  amount: string;
  term: string;
  point: IPoint[];
  badge: string;
}

export interface IPricing {
  title: string;
  description: string;
  plan: IPlan[];
}

export interface IContactItem {
  label: string;
  value: string;
  url: string;
}
export interface IContact {
  title: string;
  description: string;
  contactItem: IContactItem[];
}

export interface HomePage {
  header: IHeader;
  searchMenu: ISearchMenu;
  contact: IContact;
}

export interface IFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface ISearchInputProps {
  placeholder: string;
  value: string;
  onChange: any;
}

export interface ISuggestionItem {
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
