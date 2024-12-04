import axios from "axios";

// Upload a PDF file
export const uploadPDF = async ({ file, token }) => {
    try {
        // Create a FormData object to handle the file upload
        const formData = new FormData();
        formData.append("pdf", file);

        // Set up the configuration for the request
        const config = {
            headers: {
                Authorization: `Bearer ${token}`, // Pass the token in the headers
                "Content-Type": "multipart/form-data"
            },
        };

        // Make the POST request to upload the file
        const { data } = await axios.post(`api/pdf/upload`, formData, config);
        return data;
    } catch (error) {
        // Handle errors and return appropriate messages
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};

// Fetch all uploaded PDFs
export const getAllPDFs = async () => {
    try {
        // Make a GET request to fetch all PDFs with optional query parameters
        const { data, headers } = await axios.get(
            `/api/pdf`
        );

        return { data, headers };
    } catch (error) {
        // Handle errors and return appropriate messages
        if (error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
};
