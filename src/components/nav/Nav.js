import React, { useState, useEffect, useContext } from "react";
import "../../components/nav/Nav.css";
import { FirebaseContext } from "../../context/firebase";
import { Header } from "../../components";
import axios from "../../axios";
import { SearchRequest } from "../../request";

function Nav({ setSearchKeyword, setIsSearch, isSearch }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [show, handleShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchKeyword(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />
      <Header.Group className="nav__avatar">
        <Header.Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
        <Header.Profile>
          <Header.Picture src={user.photoURL} />
          <Header.Dropdown>
            <Header.Group>
              <Header.Picture src={user.photoURL} />
              <Header.TextLink>{user.displayName}</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.TextLink onClick={() => firebase.auth().signOut()}>
                Sign out
              </Header.TextLink>
            </Header.Group>
          </Header.Dropdown>
        </Header.Profile>
      </Header.Group>
    </div>
  );
}

export default Nav;
