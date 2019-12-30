export function getFontInfo(element: Element): string {
    const style = getComputedStyle(element);
    return style.fontFamily;
}
