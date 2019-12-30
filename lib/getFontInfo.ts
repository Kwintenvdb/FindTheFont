export function getFontInfo(element: Element): string {
    const style = getComputedStyle(element);
    console.log('font: ' + style.font);
    console.log('font family: ' + style.fontFamily);
    return style.fontFamily;
}
