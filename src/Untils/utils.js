export function readCSV() {
  return new Promise((resolve, reject) => {
    const delimiter = ";";
    fetch("./data.csv")
      .then((response) => response.text())
      .then((data) => {
        const rows = data.replace(/\r\n/g, "\n").split("\n");
        const columns = [];
        const headline = ["name", "price", "description", "purpose", "model"];

        const firstRow = rows[0].split(delimiter);

        headline.forEach((line) => {
          if (!firstRow.includes(line)) {
            reject(new Error("Wrong Headline. Missing: " + line));
          }
        });

        const rowsToProcess = rows.slice(1);

        rowsToProcess.forEach((row) => {
          columns.push(row);
        });

        const resultArray = columns.map((column) => {
          const columnData = column.split(delimiter);
          const convert = {};

          for (let n = 0; n < firstRow.length; n++) {
            convert[firstRow[n].trim()] = columnData[n];
          }

          return convert;
        });

        resolve(resultArray);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}
