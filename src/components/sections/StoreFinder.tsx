"use client";

import { FormEvent, useState } from "react";

export function StoreFinder() {
  const [note, setNote] = useState("Popular searches: Muir, Lakeview, Boone, PTA");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("store") as HTMLInputElement | null;
    const query = input?.value.trim();

    setNote(
      query
        ? `Searching for "${query}" stores. Live results can connect here next.`
        : "Try searching by school name, team, city, or PTA."
    );
  }

  return (
    <section className="store-finder" id="stores" aria-labelledby="store-title">
      <div className="store-finder-inner">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Find your online store
        </p>
        <h2 id="store-title">Search your school or organization.</h2>
        <form className="search-panel" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="store-search">
            Search for your store
          </label>
          <input
            id="store-search"
            name="store"
            type="search"
            placeholder="Search school, team, or group..."
          />
          <button className="button primary" type="submit">
            Search
          </button>
        </form>
        <p className="search-note">{note}</p>
      </div>
    </section>
  );
}
