import React from 'react';
import { PlusSquare } from 'react-feather';

export default function NoteForm({
  title, content, setTitle, setContent, onSubmit, disabled,
}) {
  return (
    <div className="m-auto grid grid-rows-[1fr_3fr_1fr] space-y-2">
      <input
        type="text"
        placeholder="Title Note"
        className="p-2"
        value={title}
        onChange={setTitle}
      />
      <textarea
        type="text"
        placeholder="Content Note"
        className="p-2"
        value={content}
        onChange={setContent}
      />
      <button
        onClick={onSubmit}
        className="flex px-2 py-1 mx-auto justify-center border-1 w-1/2 border-2 border-black transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled={disabled}
      >
        Create New Note
        <PlusSquare className="pl-1" />
      </button>
    </div>
  );
}
