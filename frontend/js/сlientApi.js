const serverURL = 'http://localhost:3000';
export async function getClients() {
  const response = await fetch(`${serverURL}/api/clients`, {
      method: 'GET'
  });

  const result = await response.json();
  console.log(result);

  return result;
}

export async function addClient(client) {
  const response = await fetch(`${serverURL}/api/clients`, {
      method: 'POST',
      body: JSON.stringify(client)
  });

  const result = await response.json();
  return result;
}
export async function pathClient(client, id) {
  const response = await fetch(`${serverURL}/api/clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(client)
  });

  const result = await response.json();
}
export async function deleteClient(id) {
  console.log(id);
  const response = await fetch(`${serverURL}/api/clients/${id}`, {
      method: 'DELETE',
  });
  const result = await response.json();
  return result;
}
export async function findClients(value) {
  try {
    const response = await fetch(`${serverURL}/api/clients?search-${value}`, {
      method: 'GET'
    });
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
