export function link(href: string, text: string, targetBlank = false) {
  return `<a href="${href}"${targetBlank ? ' target="_blank" rel="noopener noreferrer"' : ""}>${text}</a>`;
}

export function strong(content: string) {
  return `<strong>${content}</strong>`;
}

export function bold(content: string) {
  return `<b>${content}</b>`;
}

export function italic(content: string) {
  return `<i>${content}</i>`;
}
