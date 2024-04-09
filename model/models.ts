export interface IImage {
  data: {
    attributes: {
      url: string;
    };
  };
}
export interface IImages {
  data: [
    {
      attributes: {
        url: string;
      };
    }
  ];
}
export interface ISeo {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogType:
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | undefined;
  ogImage: IImage;
  ogUrl: string;
  ogSiteName: string;
}
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
  image: IImage;
}

export interface IProduct {
  title: string;
  description: string;
  productItem: IProductItem[];
}

export interface ITestimonial {
  image: IImage;
  description: string;
  name: string;
  storeName: string;
}

export interface IStore {
  relativeUrl: string;
  absoluteUrl: string;
  logo: IImage;
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
  target: string;
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

export interface IIngredient {
  attributes: {
    name: string;
  };
}

export interface IItem {
  name: string;
  variant: IVariant[];
  description: string;
  shortDescription: string;
  ingredients: { data: IIngredient[] };
  image: IImages;
  item_category: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
}
export interface IStoreDetails {
  name: string;
  about: string;
  hours: string;
  phoneNumber: string;
  phoneNumber2: string;
  address: string;
  website: string;
  email: string;
  currency: string;
  slug: string;
  logo: IImage;
  store_category: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
  callButton: {
    label: string;
    absoluteUrl: string;
    relativeUrl: string;
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
