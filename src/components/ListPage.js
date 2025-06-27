import React, { useEffect, useState } from 'react';

function ListPage() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://seo-test-backend.onrender.com/api/forms');
        if (response.ok) {
          const data = await response.json();
          setDataList(data);
        } else {
          alert('Failed to fetch data');
        }
      } catch (error) {
        alert('Error fetching data');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>List Page</h2>
      <ul>
        {dataList.map((item, index) => (
          <li key={index}>{item.name} - {item.company} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;