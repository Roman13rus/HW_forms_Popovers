import RenderPopover from './renderPopover/renderPopover';

document.addEventListener('DOMContentLoaded', () => {
  const parentElement = document.querySelector('.btn__container');
  const btn =  parentElement.querySelector('.toggle__popover');
  const tooltip = new RenderPopover(parentElement)
  const element = tooltip.renderTooltip(btn)
  btn.addEventListener('click', () => {
    tooltip.showTooltip(element)
  })
});
