import React, { useRef } from "react";
import { useLoaderPageAnimation } from "../../../hooks/useAnimation";

export default function LoaderPage() {
  const spinner = useRef(null);
  const dotsRef = useRef([]);
  return (
    <div>
      <div></div>
    </div>
  );
}
