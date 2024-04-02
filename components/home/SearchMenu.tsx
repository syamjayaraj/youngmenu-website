"use client";
import { searchStore } from "@/apiService/apiService";
import {
  ISearchInputProps,
  ISearchMenu,
  ISuggestionItem,
} from "@/model/models";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Autosuggest from "react-autosuggest";

interface customProps {
  pageData: ISearchMenu;
}

interface ISuggestionParam {
  attributes: {
    name: string;
    slug: string;
  };
}

const SearchMenu = ({ pageData }: customProps) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ISuggestionItem[]>([]);

  const getSuggestionValue = (param: ISuggestionParam) => {
    return param?.attributes?.name;
  };

  const renderSuggestion = (suggestionItem: ISuggestionItem) => {
    return <div className="suggestion">{suggestionItem?.attributes?.name}</div>;
  };

  const onChange = (
    event: React.FormEvent,
    { newValue }: { newValue: string }
  ) => {
    if (newValue) {
      setValue(newValue?.trim());
    } else {
      setValue("");
    }
  };

  const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
    const stores: ISuggestionItem[] = await searchStore(value);
    setSuggestions(stores);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderInputComponent = (props: any) => (
    <div className="input-container">
      <i className="mdi mdi-magnify"></i>
      <input {...props} />
    </div>
  );

  const onSuggestionSelected = (event: any, { suggestion }: any) => {
    router.push(`/store/${suggestion?.attributes?.slug}`);
  };

  const inputProps: ISearchInputProps = {
    placeholder: pageData?.searchInputPlaceholder,
    value,
    onChange: onChange,
  };

  return (
    <section className="section" id="search-menu">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title fw-normal">
                <span className="fw-bold">{pageData?.title}</span>
              </h3>
              <p className="heading-desc text-muted mt-4">
                {pageData?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="search-input">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            renderInputComponent={renderInputComponent}
            onSuggestionSelected={onSuggestionSelected}
          />
        </div>
      </div>
    </section>
  );
};
export default SearchMenu;
