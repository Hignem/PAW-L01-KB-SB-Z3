(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const fetchData = document.getElementById("fetchData");
  const answer = document.getElementById("answer");

  // example.addEventListener("click", function () {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((array) => {
  //       console.log(array);
  //       answer.innerHTML = JSON.stringify(array);
  //     });
  // });

  cw1.addEventListener("click", function () {
    const token = "FfICPijyJvJvAGMxNFNMcVvBrsoYmepA";
    const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/stations";

    fetch(url, {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const answer = document.getElementById("answer");
        answer.innerHTML = "";
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
          <th>Station ID</th>
          <th>Name</th>
          <th>State</th>
          <th>Latitude</th>
          <th>Longitude</th>
        `;
        table.appendChild(headerRow);
        data.results.forEach((station) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${station.id}</td>
            <td>${station.name || "N/A"}</td>
            <td>${station.state || "N/A"}</td>
            <td>${station.latitude || "N/A"}</td>
            <td>${station.longitude || "N/A"}</td>
          `;
          table.appendChild(row);
        });
        answer.appendChild(table);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
        answer.innerHTML = "Wystąpił błąd podczas pobierania danych.";
      });
  });

  cw2.addEventListener("click", function () {
    const token = "FfICPijyJvJvAGMxNFNMcVvBrsoYmepA";
    const url = "https://www.ncei.noaa.gov/cdo-web/api/v2/datasets";

    fetch(url, {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        answer.innerHTML = "";
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
        <th>Dataset ID</th>
        <th>Name</th>
        <th>Description</th>
        <th>Begin Date</th>
        <th>End Date</th>
        `;
        table.appendChild(headerRow);
        data.results.forEach((dataset) => {
          const row = document.createElement("tr");
          row.innerHTML = `
          <td>${dataset.id}</td>
          <td>${dataset.name || "N/A"}</td>
          <td>${dataset.description || "N/A"}</td>
          <td>${dataset.mindate || "N/A"}</td>
          <td>${dataset.maxdate || "N/A"}</td>
          `;
          table.appendChild(row);
        });
        answer.appendChild(table);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
        answer.innerHTML = "Wystąpił błąd podczas pobierania danych.";
      });
  });

  fetchData.addEventListener("click", function () {
    const token = "FfICPijyJvJvAGMxNFNMcVvBrsoYmepA";
    const datasetId = document.getElementById("datasetId").value;
    const locationId = document.getElementById("locationId").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=${datasetId}&locationid=${locationId}&startdate=${startDate}&enddate=${endDate}`;

    fetch(url, {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const answer = document.getElementById("answer");
        answer.innerHTML = "";
        const table = document.createElement("table");

        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
          <th>Data</th>
          <th>Station ID</th>
          <th>Value</th>
          <th>Datatype</th>
        `;
        table.appendChild(headerRow);

        data.results.forEach((record) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.station}</td>
            <td>${record.value}</td>
            <td>${record.datatype}</td>
          `;
          table.appendChild(row);
        });

        answer.appendChild(table);
      })
      .catch((error) => {
        console.error("Błąd:", error);
        const answer = document.getElementById("answer");
        answer.innerHTML = `Wystąpił błąd: ${error.message}`;
      });
  });
})();
