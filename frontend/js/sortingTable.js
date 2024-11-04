export function sortingTable() {
  const table = document.querySelector('.main__table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');
  let currentSortColumn = null;
  let sortFlag = 1;

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      if (currentSortColumn === index) {
        sortFlag *= -1;
      } else {
        currentSortColumn = index;
        sortFlag = 1;
      }
      headers.forEach(th => th.classList.remove('up', 'down'));
      if (sortFlag === 1) {
        headers[index].classList.add('up');
      } else {
        headers[index].classList.add('down');
      }

      sortColumn(currentSortColumn, sortFlag);
    });
  });

  function sortColumn(columnIndex, order) {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();

      let comparison = 0;

      switch (columnIndex) {
        case 0: // id
          comparison = Number(aText) - Number(bText);
          break;
        case 1: // текст
          comparison = aText.localeCompare(bText);
          break;
        case 2: // Дата создания
        case 3: // Дата изменения
          comparison = new Date(parseDate(aText)) - new Date(parseDate(bText));
          break;

      }

      return order * comparison;
    });

    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
  }

  function parseDate(dateString) {
    dateString = dateString.replace(/(\d{2}\.\d{2}\.\d{4})(\d{2}:\d{2})/, '$1 $2');
    const [day, month, year, time] = dateString.split(/[\s.]+/);
    const [hour, minute] = time.split(':');
    return `${year}-${month}-${day}T${hour}:${minute}:00`;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  sortingTable();
})
