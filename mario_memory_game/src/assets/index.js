import bowser from "./bowser.jpg";
import luigi from "./luigi.jpg";
import mario from "./mario.jpg";
import waluigi from "./waluigi.jpg";
import wario from "./wario.jpg";
import yoshi from "./yoshi.jpg";
import bowserjr from "./bowserjr.jpg";
import peach from "./peach.jpg";
import daisy from "./daisy.jpg";
import dk from "./dk.jpg";
import rosalina from "./rosalina.jpg";
import toad from "./toad.jpg";
import star from "./star.jpg";
import background from "./background.jpg";
import win_bg from "./win_bg.jpg";
import logo from "./logo.jpg";
import useShuffleArray from "../Hooks/useShuffleArray.js";

const all = [
  bowser,
  luigi,
  mario,
  waluigi,
  wario,
  yoshi,
  bowserjr,
  peach,
  daisy,
  dk,
  rosalina,
  toad,
];
const fourPairs = [...useShuffleArray(all).slice(0, 4)];
const sixPairs = [...useShuffleArray(all).slice(0, 6)];

export {
  bowser,
  luigi,
  mario,
  waluigi,
  wario,
  yoshi,
  bowserjr,
  peach,
  daisy,
  dk,
  rosalina,
  toad,
  star,
  win_bg,
  background,
  logo,
  all,
  fourPairs,
  sixPairs,
};
