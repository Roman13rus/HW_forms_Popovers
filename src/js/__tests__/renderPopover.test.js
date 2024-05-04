import RenderPopover from '../renderPopover/renderPopover'

test('render to my tooltip', () => {
  document.body.innerHTML = `<div class="btn__container">
                                    <button class="toggle__popover" type="submit">Click to toggle popover</button>
                                </div>`
  const parentElement = document.querySelector('.btn__container');
  const btn =  parentElement.querySelector('.toggle__popover');
  const tooltip = new RenderPopover(parentElement);
  const element = tooltip.renderTooltip(btn);
  expect(element.classList.contains('tooltip')).toEqual(true);
});

test('visual to my tooltip', () => {
  document.body.innerHTML = `<div class="btn__container">
                                    <button class="toggle__popover" type="submit">Click to toggle popover</button>
                                </div>`
  const parentElement = document.querySelector('.btn__container');
  const btn =  parentElement.querySelector('.toggle__popover');
  const tooltip = new RenderPopover(parentElement);
  const element = tooltip.renderTooltip(btn);

  btn.click()
  tooltip.showTooltip(element)
  expect(element.classList.contains('active')).toEqual(true)
});
