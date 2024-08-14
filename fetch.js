fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const tableContainer = document.getElementById('table-container');

    // TABLE DIVISION

    const table = document.createElement('table');
    table.border = 1;


    // TABLE HEADER

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['ID', 'Name', 'Username', 'Email', 'Address', 'Phone', 'Website', 'Company'];
    headers.map(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      th.style.color = "brown"
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // TABLE BODY

    const tbody = document.createElement('tbody');

    data.map(user => {
      const row = document.createElement('tr');

      const cells = [
        user.id,
        user.name,
        user.username,
        user.email,
        `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        user.phone,
        user.website,
        user.company.name
      ];

      cells.map(cellText => {
        const td = document.createElement('td');
        td.textContent = cellText;
        td.style.color = "green";
        row.appendChild(td);
      });

      tbody.appendChild(row);
      table.appendChild(tbody);
      tableContainer.appendChild(table);
    });

    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
