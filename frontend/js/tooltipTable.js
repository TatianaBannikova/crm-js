export function createContactTooltip(type, value) {
  const tooltip = document.createElement('div');
  const tooltipeType = document.createElement('span');
  const tooltipeValue = document.createElement('a');
  tooltip.classList.add('contact__tooltip');
  tooltipeType.classList.add('contact__tooltip-type');
  tooltipeValue.classList.add('contact__tooltip-value');

  tooltipeValue.textContent = value;
  if (type === 'Телефон') {
    tooltipeValue.classList.add('tel');
    tooltipeType.textContent = '';
  }
  else {
    tooltipeType.textContent = type + ': ';
  }
  //
  tooltip.append(tooltipeType,tooltipeValue);
  //
  console.log(tooltip);
  return (
    tooltip,
    tooltipeType,
    tooltipeValue
  )
}
