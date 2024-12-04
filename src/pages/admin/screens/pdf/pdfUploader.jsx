import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { uploadPDF } from "../../../../services/index/pdf"; // Assuming the uploadPDF service
import { useDataTable } from "../../../../hooks/useDataTable"; // If necessary for pagination or table
import { FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // React icons for a modern look

const PDFUploader = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { mutate: mutateUploadPDF, isLoading: isUploadingPDF } = useMutation({
    mutationFn: ({ file, token }) => {
      return uploadPDF({ file, token });
    },
    onSuccess: (data) => {
      setSuccessMessage(data.message);
      setFile(null); // Reset the file input
      toast.success("PDF uploaded successfully");
    },
    onError: (error) => {
      setError("Error uploading PDF. Please try again.");
      toast.error(error.message || "Error uploading PDF.");
    },
  });

  const { userState } = useDataTable({
    // This can be modified to fetch user data if necessary
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
    setSuccessMessage("");
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a PDF to upload.");
      return;
    }

    const token = userState?.userInfo?.token;

    if (!token) {
      setError("Token is missing or expired.");
      return;
    }

    // Trigger the mutation to upload the PDF
    mutateUploadPDF({
      file,
      token,
    });
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-lg rounded-xl max-w-4xl">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Upload New PDF</h2>
        <p className="text-lg text-gray-500 mb-8 text-center">
          Select a PDF file from your device to upload. Max file size: 10MB.
        </p>

        <div className="space-y-6 w-full">
          {/* Custom File Input Button */}
          <label className="relative w-full flex justify-center items-center cursor-pointer border-2 border-dashed border-blue-500 rounded-xl py-12 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <FaUpload className="text-blue-500 text-4xl" />
            <span className="ml-4 text-xl text-gray-600">Choose PDF</span>
          </label>

          {/* Upload Button */}
          <button
            disabled={isUploadingPDF}
            onClick={handleUpload}
            className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-500 hover:to-blue-600 transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploadingPDF ? (
              <span>Uploading...</span>
            ) : (
              <FaUpload className="mr-2 text-xl" />
            )}
            Upload PDF
          </button>
          {/* {file && {
            {file.filePath.split("\\").pop().split("-").pop()}
          }} */}
          {file && (
            <p className="mt-4 text-lg text-gray-800">
              Selected file: <strong>{file.name}</strong>
            </p>
          )}

          {/* Success/Error Message Section */}
          {successMessage && (
            <div className="mt-6 p-4 bg-green-200 border border-green-400 text-green-800 rounded-lg flex items-center">
              <FaCheckCircle className="mr-3 text-green-500 text-2xl" />
              <p>{successMessage}</p>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-200 border border-red-400 text-red-800 rounded-lg flex items-center">
              <FaTimesCircle className="mr-3 text-red-500 text-2xl" />
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFUploader;
