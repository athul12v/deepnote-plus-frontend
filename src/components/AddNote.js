// src/components/AddNote.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { auth } from '../firebase';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("You must be logged in to add a note.");
        return;
      }

      const note = {
        user_id: user.uid,
        title,
        content,
        tags: [],
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
        is_pinned: false,
        source: "manual"
      };

      await addDoc(collection(db, "notes"), note);
      alert("Note added successfully!");
      setTitle('');
      setContent('');
    } catch (error) {
      console.error("Error adding note: ", error);
      alert("Failed to add note.");
    }
  };

  return (
    <div>
      <h2>Add Note</h2>
      <input 
        type="text" 
        placeholder="Note Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Write your note here..." 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
      />
      <button onClick={handleAddNote}>Save Note</button>
    </div>
  );
};

export default AddNote;
