import * as React from "react";

export function Album({
  data,
  clickHandler,
  isSelected,
}: {
  data: Release;
  isSelected: boolean;
  clickHandler: (album: Release) => void;
}) {
  console.log(data.basic_information.thumb);
  return (
    <div
      className={isSelected ? "selected" : "card"}
      onClick={() => clickHandler(data)}
    >
      <div>
        <h4>{data.basic_information.title}</h4>
        <img src={data.basic_information.thumb} height={100} width={100} />
      </div>
    </div>
  );
}
