import React from 'react';

export default function CardNote({ id, title, body, createdAt, archived }) {
  return (
    <>
      <div className="w-[200px] grid grid-cols-2 grid-flow-row transition-all border-2 p-5 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="h-[300px]">
          <h2 className="font-extrabold">{title}</h2>
          <p>{body.length > 100 ? `${body.substring(100)}...` : body}</p>
        </div>
        <div className="space-x-2">
          <button className="border-2 border-black px-2 transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p>Archive</p>
          </button>
          <button className="border-2 border-black px-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <p>Delete</p>
          </button>
        </div>
      </div>
    </>
  );
}
