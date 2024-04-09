"use client";
import { searchStore } from "@/apiService/apiService";
import {
  ISearchInputProps,
  ISearchMenu,
  ISuggestionItem,
} from "@/model/models";
import { useState } from "react";
import Autosuggest from "react-autosuggest";
import RichText from "../RichText";

interface customProps {
  pageData: ISearchMenu;
}

interface ISuggestionParam {
  attributes: {
    name: string;
    slug: string;
  };
}

const VirtualMenu = ({ pageData }: customProps) => {
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
    window.open(`/store/${suggestion?.attributes?.slug}`, "_ blank");
  };

  const inputProps: ISearchInputProps = {
    placeholder: pageData?.searchInputPlaceholder,
    value,
    onChange: onChange,
  };

  return (
    <section className="section" id="virtual-menu">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="heading-box text-center">
              <h3 className="heading-title fw-normal">
                <span className="fw-bold">{pageData?.title}</span>
              </h3>
              <div className="heading-desc text-muted mt-4">
                <RichText data={pageData?.description} />
              </div>
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
export default VirtualMenu;
