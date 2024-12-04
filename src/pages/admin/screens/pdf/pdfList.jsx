import React, { useState, useEffect } from "react";
import { getAllPDFs } from "../../../../services/index/pdf"; // assuming pdfService has getAllPDFs
import { FaFileDownload } from "react-icons/fa"; // Icon for download

const PDFList = () => {
  const [pdfs, setPDFs] = useState([]);
  const [error, setError] = useState("");

  // Fetch PDFs when the component mounts
  const fetchPDFs = async () => {
    try {
      const response = await getAllPDFs();
      setPDFs(response.data.pdfs || []);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      setError("Error fetching PDFs. Please try again.");
    }
  };

  useEffect(() => {
    fetchPDFs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Available PDFs</h2>

      {error && (
        <p className="text-red-600 bg-red-100 p-4 rounded-lg text-center mb-6">
          {error}
        </p>
      )}

      {pdfs.length === 0 ? (
        <p className="text-gray-500 text-center">No PDFs available at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {pdfs.map((pdf) => (
            <li key={pdf._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
              <a
                href={`http://localhost:5000/api/pdf/${encodeURIComponent(pdf._id)}`}
                download
                className="flex items-center text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                <FaFileDownload className="mr-2 text-xl" />
                {pdf.filePath.split("\\").pop().split("-").pop()} {/* Show file name only */}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PDFList;
