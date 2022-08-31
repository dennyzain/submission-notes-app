import React, { useState } from 'react';
import { showFormattedDate } from '../../utils';

export default function CardNote({
  id,
  title,
  body,
  createdAt,
  archived,
  handleDelete,
  handleArchive,
}) {
  return (
    <div className="w-[280px] grid grid-cols-2 grid-rows-[3fr_30px_50px] transition-all border-2 py-3 px-5 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="h-[300px] col-span-2">
        <h2 className="font-extrabold">{title}</h2>
        <p>{body}</p>
      </div>
      <div className="col-span-2">
        <p>{showFormattedDate(createdAt)}</p>
      </div>
      <div className="flex col-span-2 row-start-3 items-center justify-around">
        <button
          onClick={() => handleArchive(id)}
          className="border-2 border-black px-2 transition-all hover:shadow-[12px_12px_0px_0px_orange]"
        >
          <p>Archive</p>
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="border-2 border-black px-2 transition-all hover:shadow-[12px_12px_0px_0px_red]"
        >
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}
