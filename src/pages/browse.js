import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import request, { SearchRequest } from "../request";
import axios from "../axios";
import { useEffect } from "react";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  const requestSearch = SearchRequest("iron");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requestSearch);
      console.log("result", result);
      return result;
    }
    fetchData();
  }, []);

  return <BrowseContainer slides={slides} />;
}
