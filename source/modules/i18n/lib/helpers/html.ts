/**
 * Creates an HTML link element with the specified href and text.
 *
 * @param href - The URL of the link.
 * @param text - The text to be displayed as the link.
 * @param targetBlank - Optional. Specifies whether the link should open in a new tab. Default is false.
 * @returns The HTML link element as a string.
 */
export function link<const H extends string, const T extends string>(
  href: H,
  text: T,
  targetBlank = false,
) {
  return `<a href="${href}"${targetBlank ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>` as const;
}

/**
 * Wraps the provided content in a <strong> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the strong element.
 */
export function strong<const T extends string>(content: T) {
  return `<strong>${content}</strong>` as const;
}

/**
 * Wraps the provided content in a <b> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the bold element.
 */
export function bold<const T extends string>(content: T) {
  return `<b>${content}</b>` as const;
}

/**
 * Wraps the provided content in a <i> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the italic element.
 */
export function italic<const T extends string>(content: T) {
  return `<i>${content}</i>` as const;
}
