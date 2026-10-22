import { useState } from "react";
import SeperateForm1 from "./SeperateFrom1";
import SeperateForm2 from "./SeperateForm2";
function MultiPageForm() {
  const [formData, setFormData] = useState({
    page1: {
      name: "",
      email: "",
      course: "",
      phone: "",
    },
    page2: {
      address1: "",
      address2: "",
      pinCode: "",
      landmark: "",
    },
    page3: {
      accountHolder: "",
      bankName: "",
      accountNumber: "",
      IFSC: "",
    },
    page4: {
      feedback: "",
      rating: "",
    },
  });

  const [page, setPage] = useState(0);

  const pageKeys = ["page1", "page2", "page3", "page4"];

  const currentPage = pageKeys[page];

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      const currentPageData = prev[currentPage] || {};

      return {
        ...prev,
        [currentPage]: {
          ...currentPageData,
          [name]: value,
        },
      };
    });
  }

  function handleNext() {
    if (page < pageKeys.length - 1) {
      setPage((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Final Form Data:", formData);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow-md"
      >
        {page === 0 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Personal Details
            </h2>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter the Name"
                value={formData.page1.name}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter the Email"
                value={formData.page1.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Course
              </label>
              <input
                id="course"
                name="course"
                type="text"
                placeholder="Enter the Course"
                value={formData.page1.course}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter the Phone number"
                value={formData.page1.phone}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <SeperateForm1 />
          </div>
        )}

        {page === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Address Details
            </h2>

            <div className="space-y-2">
              <label
                htmlFor="address1"
                className="block text-sm font-medium text-gray-700"
              >
                Address 1
              </label>
              <input
                id="address1"
                name="address1"
                type="text"
                placeholder="Enter Address"
                value={formData.page2.address1}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="address2"
                className="block text-sm font-medium text-gray-700"
              >
                Address 2
              </label>
              <input
                id="address2"
                name="address2"
                type="text"
                placeholder="Enter Address 2"
                value={formData.page2.address2}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="pinCode"
                className="block text-sm font-medium text-gray-700"
              >
                Pin Code
              </label>
              <input
                id="pinCode"
                name="pinCode"
                type="text"
                placeholder="Enter Pin Code"
                value={formData.page2.pinCode}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="landmark"
                className="block text-sm font-medium text-gray-700"
              >
                Landmark
              </label>
              <input
                id="landmark"
                name="landmark"
                type="text"
                placeholder="Enter Landmark"
                value={formData.page2.landmark}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <SeperateForm2 />
          </div>
        )}

        {page === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Bank Details</h2>

            <div className="space-y-2">
              <label
                htmlFor="accountHolder"
                className="block text-sm font-medium text-gray-700"
              >
                Account Holder
              </label>
              <input
                id="accountHolder"
                name="accountHolder"
                type="text"
                placeholder="Enter Account Holder Name"
                value={formData.page3.accountHolder}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="bankName"
                className="block text-sm font-medium text-gray-700"
              >
                Bank Name
              </label>
              <input
                id="bankName"
                name="bankName"
                type="text"
                placeholder="Enter Bank Name"
                value={formData.page3.bankName}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Account Number
              </label>
              <input
                id="accountNumber"
                name="accountNumber"
                type="text"
                placeholder="Enter Account Number"
                value={formData.page3.accountNumber}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="IFSC"
                className="block text-sm font-medium text-gray-700"
              >
                IFSC
              </label>
              <input
                id="IFSC"
                name="IFSC"
                type="text"
                placeholder="Enter IFSC"
                value={formData.page3.IFSC}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {page === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Feedback</h2>

            <div className="space-y-2">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Enter your feedback"
                value={formData.page4.feedback}
                onChange={handleChange}
                required
                className="min-h-28 w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={formData.page4.rating}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3">
          {page > 0 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="rounded border border-gray-300 bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
            >
              Previous
            </button>
          )}

          {page < pageKeys.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              className="rounded bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Next
            </button>
          )}

          {page === pageKeys.length - 1 && (
            <button
              type="submit"
              className="rounded bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
        
      </form>
    </div>
  );
}

export default MultiPageForm;
