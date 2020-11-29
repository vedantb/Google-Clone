import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import "./Search.css";

function Search({ hideButtons = false }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();
  const buttonClassName = hideButtons ? "search__buttonsHidden" : "";

  const performSearch = (e) => {
    e.preventDefault();

    console.log("You hit search button >>", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    });

    // come back and fix this.. do something with input
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button className={buttonClassName} type="submit" variant="outlined" onClick={performSearch}>
          Google Search
        </Button>
        <Button className={buttonClassName} variant="outlined">
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
}

export default Search;
