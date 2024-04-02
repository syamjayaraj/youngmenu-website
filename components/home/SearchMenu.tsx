"use client";
import { searchStore } from "@/apiService/apiService";
import {
  ISearchInputProps,
  ISearchMenu,
  ISuggestionItem,
} from "@/model/models";
import { useState } from "react";
import Autosuggest from "react-autosuggest";

interface customProps {
  pageData: ISearchMenu;
}

const SearchMenu = ({ pageData }: customProps) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<ISuggestionItem[]>([]);

  const getSuggestionValue = (param: any) => {
    return param.name;
  };

  const renderSuggestion = (suggestionItem: ISuggestionItem) => {
    if (suggestionItem?.attributes?.name) {
      return (
        <a
          href={`/store/${suggestionItem?.attributes?.slug}`}
          className="suggestion"
          target="_blank"
        >
          {suggestionItem?.attributes?.name}
        </a>
      );
    }
  };

  const onChange = (event: Event, { newValue }: { newValue: string }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
    const stores: ISuggestionItem[] = await searchStore(value);
    setSuggestions(stores);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderInputComponent = (inputProps: any) => (
    <div className="input-container">
      <i className="mdi mdi-magnify"></i>
      <input {...inputProps} />
    </div>
  );

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
          />
        </div>
      </div>
    </section>
  );
};
export default SearchMenu;
