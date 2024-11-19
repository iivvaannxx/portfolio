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
  return `<a href="${href}" ${targetBlank ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>` as const;
}

/**
 * Wraps the provided content in a <strong> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the strong element.
 */
export function strong<const T extends string>(content: T) {
  return wrapInTags(content, "strong");
}

/**
 * Wraps the provided content in a <b> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the bold element.
 */
export function bold<const T extends string>(content: T) {
  return wrapInTags(content, "b");
}

/**
 * Wraps the provided content in a <i> HTML tag.
 *
 * @param content - The content to be wrapped.
 * @returns The HTML string representing the italic element.
 */
export function italic<const T extends string>(content: T) {
  return wrapInTags(content, "i");
}

/**
 * Wraps the provided content in an HTML <small> tag.
 *
 * @param content - The content to be wrapped.
 * @returns The wrapped content.
 */
export function small<const T extends string>(content: T) {
  return wrapInTags(content, "small");
}

/**
 * Wraps the given content in HTML <q> tags.
 *
 * @param content - The content to be wrapped.
 * @returns The content wrapped in <q> tags.
 */
export function quote<const T extends string>(content: T) {
  return wrapInTags(content, "q");
}

/**
 * Wraps the given content in a styled `<span>` element.
 *
 * @param content - The text content to be wrapped.
 * @param style - The CSS style to be applied to the `<span>` element.
 * @returns A string representing an HTML `<span>` element with the specified content and style.
 */
export function styled<const T extends string, const S extends string>(
  content: T,
  style: S,
) {
  return `<span style="${style}">${content}</span>` as const;
}

/**
 * Wraps the given content in HTML tags.
 *
 * @param content - The content to be wrapped.
 * @param tag - The HTML tag to wrap the content with.
 * @returns The content wrapped in the specified HTML tag.
 */
function wrapInTags<const T extends string, const Tag extends string>(
  content: T,
  tag: Tag,
) {
  return `<${tag}>${content}</${tag}>` as const;
}
