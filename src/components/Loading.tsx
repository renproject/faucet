import React from "react";

/**
 * Loading is a visual component that renders a spinning animation
 */
export const Loading = ({ alt }: { alt?: boolean }) => (
    <div className={`loading lds-dual-ring ${alt ? "alt" : ""}`} />
);
