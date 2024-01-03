const apiUrl = "https://calm-plum-jaguar-tutu.cyclic.app/todos";

export const fetchData = async () => {
  try {
    const response = await fetch(`${apiUrl}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    return await response.json();
  } catch (error) {
    console.error("Error deleting data", error);
  }
};

export const updateData = async (id, newData) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating data", error);
  }
};

export const createData = async (newData) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error creating data", error);
  }
};
