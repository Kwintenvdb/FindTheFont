console.log('test');

import { getFontInfo } from './getFontInfo';

// getFontInfo();

// document.addEventListener('mouseover', e => {
// getFontInfo(e.target as Element);
// displayInfo();
// });

// const frame = createFrame();
const tooltip = createTooltip();

document.addEventListener('mousemove', e => {
    setTooltipPostion(e.pageX, e.pageY);

    const hoveredElement = document.elementFromPoint(e.x, e.y);
    if (hoveredElement) {
        setTooltipFont(hoveredElement);
    }
});

function setTooltipPostion(x: number, y: number) {
    tooltip.style.top = y + 5 + 'px';
    tooltip.style.left = x + 5 + 'px';
}

function setTooltipFont(e: Element) {
    console.log(e);
    tooltip.innerText = getFontInfo(e);
}

function createTooltip(): HTMLElement {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.backgroundColor = 'rgba(0,0,0,0.75)';
    div.style.color = 'white';
    div.style.padding = '5px 10px';
    div.style.borderRadius = '5px';
    div.innerText = 'testy test';
    div.style.pointerEvents = 'none';
    div.style.zIndex = '1000000';
    document.body.appendChild(div);
    return div;
}

function createFrame(): HTMLElement {
    const frame = document.createElement('iframe');
    frame.style.border = 'none';
    frame.width = '100';
    frame.height = '100';
    frame.style.position = 'absolute';
    frame.src = chrome.runtime.getURL('test.html');
    document.body.appendChild(frame);
    return frame;
}
