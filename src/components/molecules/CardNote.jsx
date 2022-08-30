import React, { useState } from 'react';
import { showFormattedDate } from '../../utils';

export default function CardNote({ id, title, body, createdAt, archived }) {
  const [state, setState] = useState(false);
  console.log(state, 'boolean show more');
  return (
    <div className="w-[250px] grid grid-cols-2 grid-rows-[3fr_30px_50px] transition-all border-2 py-3 px-5 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="h-[250px] col-span-2">
        <h2 className="font-extrabold">{title}</h2>
        <p>{body.length > 150 ? `${body.substring(70)}...` : body}</p>
        <button className="font-bold" onClick={() => setState(!state)}>
          show more
        </button>
      </div>
      <div className="col-span-2">
        <p>{showFormattedDate(createdAt)}</p>
      </div>
      <div className="flex col-span-2 row-start-3 items-center justify-around">
        <button className="border-2 border-black px-2 transition-all hover:shadow-[12px_12px_0px_0px_orange]">
          <p>Archive</p>
        </button>
        <button className="border-2 border-black px-2 transition-all hover:shadow-[12px_12px_0px_0px_red]">
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}
