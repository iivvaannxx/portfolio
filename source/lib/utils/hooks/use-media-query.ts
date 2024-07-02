import { useEffect, useState } from "react";

/**
 * A custom hook that returns a boolean indicating whether the specified media query matches the current viewport.
 *
 * @param query - The media query string to match against the viewport.
 * @returns A boolean indicating whether the media query matches the current viewport.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia(query);
    const updateMatches = (e: MediaQueryListEvent) => setMatches(e.matches);

    matcher.addEventListener("change", updateMatches);
    setMatches(matcher.matches);

    return () => {
      matcher.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
}
