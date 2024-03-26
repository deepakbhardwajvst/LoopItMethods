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
      
    </div>
  );
};

export default Category;
