export default class RenderPopover {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.renderTooltip = this.renderTooltip.bind(this); 
  }

  renderTooltip(btn) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    const tooltipTitle = document.createElement('h2');
    tooltipTitle.className = 'tooltip-title';
    tooltipTitle.textContent = 'Popover title';
    const tooltipText = document.createElement('p');
    tooltipText.className = 'tooltip-text';
    tooltipText.textContent = 'And here\'s some amazing content. It\'s very engaging. Right?';
    tooltip.insertAdjacentElement('afterbegin', tooltipTitle);
    tooltip.insertAdjacentElement('beforeend', tooltipText);
    this.parentElement.insertAdjacentElement('afterbegin', tooltip);
    const { left, top, width } = btn.getBoundingClientRect();
    tooltip.style.left = left + width / 2 +'px';
    tooltip.style.bottom = top;
    return tooltip;
  }
  
  showTooltip(element) {
    element.classList.toggle('active');
  }

}
