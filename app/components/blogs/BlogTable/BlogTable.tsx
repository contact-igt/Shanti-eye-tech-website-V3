import type { BlogTableBlock } from "@/lib/blogApi";
import styles from "./styles.module.css";

export function BlogTable({ data }: { data?: BlogTableBlock }) {
  if (!data || data.enabled === false) return null;

  const headers = Array.isArray(data.headers) ? data.headers : [];
  const rows = Array.isArray(data.rows) ? data.rows : [];

  if (headers.length === 0 || rows.length === 0) return null;

  return (
    <section className={styles.container}>
      {data.heading ? <h2>{data.heading}</h2> : null}
      {data.content ? <p className={styles.description}>{data.content}</p> : null}

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
