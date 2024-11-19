import { styleToString } from "@app/lib/utils/css";

/**
 * Generates a string representation of the CSS style for an Adobe link.
 * @returns {string} The CSS style string for an Adobe link.
 */
export function getAdobeLinkStyle() {
  return styleToString({
    "color": "#ff0000",
    "text-decoration": "underline",
    "text-underline-offset": "4px",
    "text-decoration-thickness": "2px",
  });
}
