import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { star, sixPairs } from "../assets";
import { Link } from "react-router-dom";
import useShuffleArray from "../Hooks/useShuffleArray";
import IsWin from "./IsWin";
import "../App.css";

function Game() {
  const Location = useLocation();
  const cards = Location.state ? Location.state.arr : sixPairs;
  const [fullArray, setFullArray] = useState([]);
  const [previousSelect, setPreviousSelect] = useState();
  const [cardStates, setCardStates] = useState(
    Array(cards.length * 2).fill({ img: star, guessed: false })
  );
  const [canClick, setCanClick] = useState(true);
  const [count, SetCount] = useState(0);
  const [win, setWin] = useState();

  function resetCards(index1, index2) {
    setCanClick(false);
    setTimeout(() => {
      setCardStates((prev) => {
        let newAray = [...prev];
        newAray[index1] = { ...newAray[index1], img: star };
        newAray[index2] = { ...newAray[index2], img: star };
        return newAray;
      });
      setPreviousSelect();
      setCanClick(true);
    }, 800);
  }

  function handleClick(e) {
    let clickedIndex = e.target.dataset.index;

    if (
      cardStates[clickedIndex].guessed ||
      (previousSelect && clickedIndex === previousSelect) ||
      !canClick
    ) {
      return;
    }

    let newCardState = [...cardStates];
    newCardState[clickedIndex] = {
      ...newCardState[clickedIndex],
      img: fullArray[clickedIndex],
    };
    setCardStates(newCardState);

    if (!previousSelect) {
      setPreviousSelect(clickedIndex);
    } else {
      if (cardStates[previousSelect].img === fullArray[clickedIndex]) {
        newCardState[previousSelect].guessed = true;
        newCardState[clickedIndex].guessed = true;
        setWin((prev) => (prev ? prev + 1 : 1));
        setCardStates(newCardState);
        setPreviousSelect();
        SetCount((prev) => prev + 1);
      } else {
        SetCount((prev) => prev + 1);
        resetCards(previousSelect, clickedIndex);
      }
    }
  }

  function refresh() {
    window.location.reload(false);
  }

  useEffect(() => {
    setFullArray(useShuffleArray([...cards, ...cards]));
  }, []);

  useEffect(() => {
    win === cardStates.length / 2 ? setWin(true) : "";
  }, [win]);

  return (
    <>
      {win === true ? (
        <IsWin score={count} />
      ) : (
        <>
          <div
            className={
              cards.length * 2 === 8 || cards.length * 2 === 12
                ? "main"
                : "main_12"
            }
          >
            <h2>Score: {count}</h2>
            <div
              className={
                cards.length * 2 === 8
                  ? "under_main_4"
                  : cards.length * 2 === 12
                  ? "under_main_6"
                  : "under_main_12"
              }
            >
              {cardStates.map((element, i) => (
                <img
                  src={cardStates[i].img}
                  alt="star"
                  data-index={i}
                  className={
                    cards.length * 2 === 8
                      ? "image-show_4"
                      : cards.length * 2 === 12
                      ? "image-show_6"
                      : "image-show_12"
                  }
                  onClick={handleClick}
                  key={i}
                />
              ))}
            </div>
          </div>
          <Link to="/">
            <button className="button">Home</button>
          </Link>
          <button className="button" onClick={refresh}>
            Reset
          </button>
        </>
      )}
    </>
  );
}

export default Game;
