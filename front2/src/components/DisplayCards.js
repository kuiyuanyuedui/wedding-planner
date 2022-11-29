import React, { useState } from "react";
import PropTypes from "prop-types";
import ViewCard from "./ViewCard";
import { FaTrash } from "react-icons/fa";
import "../styles/DisplayCards.css";

export default function DisplayCards({ cards }) {
  const [card, setCard] = useState({
    userid: "",
    cardid: "",
    bride: "",
    groom: "",
    date: "",
    time: "",
    venue: "",
    theme: "",
  });

  async function deletecard(cardid) {
    window.location.reload(false);
    await fetch("/deletecard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: cardid }),
    }).catch((error) => {
      console.log(error);
      return;
    });
  }

  return (
    <div className="container">
      <div className="row display">
        {cards.map((c, idx) => {
          return (
            <div
              onClick={(e) => {
                setCard({
                  userid: c.userid,
                  cardid: c.cardid,
                  bride: c.bride,
                  groom: c.groom,
                  date: c.date,
                  time: c.time,
                  venue: c.venue,
                  theme: c.theme,
                });
              }}
              key={idx}
              className="cardlist"
            >
              {/* <input type="text" readOnly value={c.cardid} hidden></input> */}
              {"Wedding Invite " + (idx + 1)}
              <FaTrash onClick={() => deletecard(c.cardid)} />{" "}
            </div>
          );
        })}
      </div>

      <div className="row">
        <ViewCard card={card}></ViewCard>
      </div>
    </div>
  );
}

DisplayCards.proptype = {
  userid: PropTypes.number,
};
