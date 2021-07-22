import React from "react";

export default function Book({ title, authors, slug}) {
  return (
    <>
      <a href={slug}>{title}</a> by<span> </span>
      <span id="Authors">{authors}</span>
    </>
  );
}