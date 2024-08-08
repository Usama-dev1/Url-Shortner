import React from "react";

const TableArea = () => {

  // URL data
  const urlData = [
    {
      name: "Example URL 1",
      link: "https://example.com",
      clicks: 120,
      date: "2024-08-08",
    },
    {
      name: "Example URL 2",
      link: "https://example2.com",
      clicks: 85,
      date: "2024-08-07",
    },
    {
      name: "Example URL 3",
      link: "https://example3.com",
      clicks: 45,
      date: "2024-08-06",
    },
  ];

  const copyToClipboard = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying link: ", err);
      });
  };

  return (
    <>
      <div className="bg-secondary font-bold w-50 py-2 border-steal">
        <h1 className="text-steal font-bold text-center text-5xl">MY Links</h1>{" "}
      </div>
      <div className="p-4 bg-secondary min-h-screen flex justify-center ">
        <div className="overflow-x-auto">
          <table className="w-[60rem] bg-white  border border-b-2 border-gray-200 hidden md:table">
            <thead className="m-2 bg-sorange text-primary  border border-b-2 border-gray-200 ">
              <tr>
                <th className="py-3 px-4 border-r-2  border-gray-200">Name</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Link</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Clicks</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Date</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {urlData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b">
                  <td className="py-3 px-4 border-r-2 font-bold border-gray-200 text-primary ">
                    {item.name}
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline">
                      {item.link}
                    </a>
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200">
                    {item.clicks}
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200 text-primary ">
                    {item.date}
                  </td>
                  <td className="py-3 px-4 text-center border-b border-gray-200">
                    <button
                      onClick={() => copyToClipboard(item.link)}
                      className="bg-secondary text-primary font-bold py-2 px-5 hover:bg-steal">
                      Copy Link
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="block w-90 md:hidden">
            {urlData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 w-[25rem] mb-4 p-4 rounded shadow">
                <div className="flex flex-col">
                  <div className="font-bold text-sorange">{item.name}</div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sorange hover:underline">
                    {item.link}
                  </a>
                  <div className="text-gray-600">Clicks: {item.clicks}</div>
                  <div className="text-gray-600">Date: {item.date}</div>
                  <div className="text-center">
                    <button
                      onClick={() => copyToClipboard(item.link)}
                      className="bg-secondary text-sorange text-md font-bold w-[14rem] py-1 px-2 rounded mt-2 hover:bg-steal">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TableArea;
