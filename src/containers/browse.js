import React, { useState, useEffect, useContext } from "react";
import { Loading } from "../components";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import Row from "../components/row/Row";
import request, { SearchRequest } from "../request";
import Banner from "../components/banner/Banner";
import Nav from "../components/nav/Nav";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState();
  const [linkRequest, setLinkRequest] = useState();

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setLinkRequest(SearchRequest(searchKeyword));
    console.log(SearchRequest(searchKeyword));
  }, [searchKeyword]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Nav
        setSearchKeyword={setSearchKeyword}
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      ></Nav>
      <Banner></Banner>

      {isSearch && <Row title="Search result" fetchUrl={linkRequest} />}
      {!isSearch && (
        <>
          <Row title="Trending Now" fetchUrl={request.fetchTrending} />
          <Row title="Top Related" fetchUrl={request.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
          <Row
            title="Documentaries Movies"
            fetchUrl={request.fetchDocumentaries}
          />
        </>
      )}
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
