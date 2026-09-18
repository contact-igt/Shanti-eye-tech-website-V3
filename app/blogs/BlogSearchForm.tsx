"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

export function BlogSearchForm({ initialSearch }: { initialSearch: string }) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();
    const destination = query ? `/blogs?search=${encodeURIComponent(query)}` : "/blogs";

    startTransition(() => {
      router.push(destination, { scroll: false });
    });
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
      <label className={styles.searchLabel} htmlFor="blog-search">Search articles</label>
      <div className={styles.searchRow}>
        <input
          id="blog-search"
          name="search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search eye-care topics"
        />
        <button type="submit" disabled={isPending}>
          {isPending ? "Searching…" : "Search"}
        </button>
      </div>
    </form>
  );
}
