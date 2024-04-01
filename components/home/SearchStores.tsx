"use client";
import { searchStore } from "@/apiService/apiService";
import { SearchStore, SuggestionItem } from "@/model/models";
import { useState } from "react";
import Autosuggest from "react-autosuggest";

interface customProps {
  pageData: SearchStore;
}

export default function SearchStores({ pageData }: customProps) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);

  function getSuggestionValue(param: any) {
    return param.name;
  }

  const renderSuggestion = (suggestionItem: SuggestionItem) => {
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

  let onChange = (event: Event, { newValue, method }: any) => {
    setValue(newValue);
  };

  let onSuggestionsFetchRequested = async ({ value }: any) => {
    const stores: SuggestionItem[] = await searchStore(value);
    setSuggestions(stores);
  };

  let onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderInputComponent = (inputProps: any) => (
    <div className="input-container">
      <i className="mdi mdi-magnify"></i>
      <input {...inputProps} />
    </div>
  );

  const inputProps: any = {
    placeholder: pageData?.searchInputPlaceholder,
    value,
    onChange: onChange,
  };

  return (
    <section className="section" id="search-store">
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
}
