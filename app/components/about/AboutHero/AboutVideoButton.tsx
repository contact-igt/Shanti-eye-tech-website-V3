"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import styles from "./AboutHero.module.css";

export function AboutVideoButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [playing, setPlaying] = useState(false);

  function open() {
    setMounted(true);
    setPlaying(true);
  }

  return <>
    <button ref={buttonRef} className={styles.videoPlay} type="button" aria-label="Play Shanti EyeTech hospital video" aria-haspopup="dialog" onClick={open}>
      <Play size={28} fill="currentColor" aria-hidden="true" />
    </button>
    {mounted && createPortal(
      <dialog
        ref={(dialog) => { dialogRef.current = dialog; if (dialog && playing && !dialog.open) dialog.showModal(); }}
        className={styles.videoDialog}
        aria-label="Shanti EyeTech hospital video"
        onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
        onClose={() => { setPlaying(false); setMounted(false); buttonRef.current?.focus(); }}
      >
        <button autoFocus className={styles.videoClose} type="button" aria-label="Close video" onClick={() => dialogRef.current?.close()}><X size={24} aria-hidden="true" /></button>
        {playing && <iframe title="Shanti EyeTech hospital video" src="https://www.youtube-nocookie.com/embed/nqjwSk2KRGk?autoplay=1" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
      </dialog>, document.body
    )}
  </>;
}
