import React from "react";
import { Button } from "../buttons/Button";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { dislike, like, del } from "../../redux/actions";
import "./Card.scss";

function Item({ title, id, category, likes, dislikes }) {
  const dispatcher = useDispatch();

  return (
    <div>
      <div className="movie-item-container">
        <div className="info-details">
          <div></div>
          <p className="movie-title">{title}</p>
          <p className="movie-category">#{category}</p>
        </div>
        <div className="action-buttons">
          <div className="like-dislike">
            <Button
              onClick={() => {
                dispatcher(like(id));
                console.log("like");
              }}
            >
              <AiOutlineLike />
            </Button>
            <Button
              onClick={() => {
                dispatcher(dislike(id));
                console.log("deslike");
              }}
            >
              <AiOutlineDislike />
            </Button>
          </div>
          <Button
            onClick={() => {
              dispatcher(del(id));
              console.log("delete");
            }}
          >
            <TiDeleteOutline />
          </Button>
        </div>

        <div />
        <div style={{ padding: "12px" }}>
          <div>
            Likes : <label style={{ color: "#0064b7" }}>{likes}</label>
          </div>
          <div>
            Dislikes : <label style={{ color: "#b71c1c" }}>{dislikes}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
