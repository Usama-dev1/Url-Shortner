import React, { useEffect, useState } from "react";

const TableArea = () => {
  const [data, setData] = useState([]); // Initialize state as an empty array
  const [loading, setLoading] = useState(true); // Optional: To handle loading state
  const [error, setError] = useState(null); // Optional: To handle errors

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://url-shortner-backend-omega.vercel.app/api/v1/all"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="bg-secondary font-bold w-50 py-2 border-steal">
        <h1 className="text-steal font-bold text-center text-5xl">MY Links</h1>{" "}
      </div>
      <div className="p-4 bg-secondary min-h-screen flex justify-center ">
        <div className="overflow-x-auto">
          <table className="w-[60rem] bg-white border border-b-2 border-gray-200 hidden md:table">
            <thead className="m-2 bg-sorange text-primary border border-b-2 border-gray-200 ">
              <tr>
                <th className="py-3 px-4 border-r-2 border-gray-200">Name</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Link</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Clicks</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Date</th>
                <th className="py-3 px-4 border-r-2 border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {currentItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b">
                  <td className="py-3 px-4 border-r-2 font-bold border-gray-200 text-primary ">
                    {item.url}
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline">
                      {item.url}
                    </a>
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200">
                    {item.clickCount ? item.clickCount : 0}
                  </td>
                  <td className="py-3 px-4 border-r-2 border-gray-200 text-primary ">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-center border-b border-gray-200">
                    <button
                      onClick={() => copyToClipboard(item.url)}
                      className="bg-secondary text-primary text-sm font-semibold py-2 px-4 hover:bg-steal text-nowrap">
                      Copy Link
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile view */}
          <div className="block w-90 md:hidden">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 w-[25rem] mb-4 p-4 rounded shadow">
                <div className="flex flex-col">
                  <div className="font-bold text-sorange">{item.url}</div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sorange hover:underline">
                    {item.url}
                  </a>
                  <div className="text-gray-600">Clicks: {item.clickCount}</div>
                  <div className="text-gray-600">
                    Date: {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => copyToClipboard(item.url)}
                      className="bg-secondary text-sorange text-md font-bold w-[14rem] py-1 px-2 rounded mt-2 hover:bg-steal">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-primary  hover:bg-steal text-white px-5 py-2 mx-2 rounded disabled:opacity-50">
              Previous
            </button>
            <span className="mx-2 text-center text-primary text-md bg-white py-2 px-4 rounded-sm border border-black">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-primary hover:bg-steal text-white px-8 py-2 mx-2 rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableArea;


