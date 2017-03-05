import React from "react"

export const DataList = (props) => {
  const list = (
    <ul>
      {props.stickers.map((sticker, index) => {
        return(
          <li key={index}>
            {sticker}
            </li>
          )
      })}
    </ul>
  );
}