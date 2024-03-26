import React, { useState } from "react";


const Category = ({ note, onDelete, onEdit, onSave, onCreateChild }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onSave(note.id, content);
    setEditing(false);
  };

  const handleCreateChild = () => {
    onCreateChild(note.id);
  };
  return (
    <div className="bg-[#A5B74A] p-4  shadow-md ">
      {editing ? (
        <textarea
          className="w-full h-24 p-2 rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <p>{note.content}</p>
      )}
      <div className="mt-2 flex justify-between">
        <div>
          <button
            className="bg-[#093e10] text-white p-1 mr-1  ml-4"
            onClick={() => onDelete(note.id)}
          >
            Delete
          </button>
          <button
            className="bg-[#093e10] text-white p-1 mr-1"
            onClick={handleEdit}
          >
            Edit
          </button>
        </div>
        <div>
          {editing ? (
            <button
              className="bg-[#133d14] text-white px-2 py-1 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-[#093e10] text-white p-1 mr-1"
              onClick={handleCreateChild}
            >
              New Notes
            </button>
          )}
        </div>
      </div>
      {note.children && note.children.length > 0 && (
        <div className="mt-4">
          {note.children.map((childNote) => (
            <div key={childNote.id} className="ml-4">
              <Category
                note={childNote}
                onDelete={onDelete}
                onEdit={onEdit}
                onSave={onSave}
                onCreateChild={onCreateChild}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
