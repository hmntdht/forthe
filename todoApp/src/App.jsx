import React, { useState } from "react";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    setNotes([...notes, note.trim()]);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col items-center justify-center p-6 selection:bg-neutral-800 selection:text-white">
      {/* Background Radial Subtle Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950 pointer-events-none" />

      <main className="relative z-10 w-full max-w-lg space-y-8">
        {/* Header */}
        <header className="space-y-1 text-left">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Tasks
          </h1>
          <p className="text-sm text-neutral-400">
            Keep track of your day with precision.
          </p>
        </header>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-200 focus:border-neutral-500 focus:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-neutral-100 px-4 py-2.5 text-sm font-medium text-neutral-950 transition-all duration-200 hover:bg-white active:scale-[0.98] disabled:opacity-50"
            disabled={!note.trim()}
          >
            Add
          </button>
        </form>

        {/* Notes List */}
        <div className="space-y-3">
          {notes.length === 0 ? (
            <div className="rounded-xl border border-dashed border-neutral-800 p-8 text-center">
              <p className="text-sm text-neutral-500">No active tasks</p>
            </div>
          ) : (
            <ul className="space-y-2">
              {notes.map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center justify-between rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 backdrop-blur-sm transition-all duration-200 hover:border-neutral-700/80 hover:bg-neutral-900/80"
                >
                  <span className="text-sm font-normal text-neutral-200 break-all pr-4">
                    {item}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="rounded-md px-2.5 py-1 text-xs font-medium text-neutral-500 transition-colors duration-150 hover:bg-red-500/10 hover:text-red-400 opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
