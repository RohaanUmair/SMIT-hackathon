'use client';
import { useState } from "react";

export default function LoanRequestForm() {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [guarantor1, setGuarantor1] = useState({ name: "", email: "", location: "", cnic: "" });
    const [guarantor2, setGuarantor2] = useState({ name: "", email: "", location: "", cnic: "" });
    const [salarySheet, setSalarySheet] = useState(null);
    const [personalInfo, setPersonalInfo] = useState({ address: "", phone: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and handle form submission logic here
        if (!category || !subcategory || !guarantor1.name || !guarantor2.name || !personalInfo.address || !personalInfo.phone) {
            setError("Please fill in all required fields");
        } else {
            alert("Loan request submitted successfully!");
            // Reset form or redirect as needed
        }
    }; 

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Loan Request Form</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {/* Loan Category and Subcategory */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Loan Category</label>
                        <select
                            id="category"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Wedding Loans">Wedding Loans</option>
                            <option value="Home Construction Loans">Home Construction Loans</option>
                            <option value="Business Startup Loans">Business Startup Loans</option>
                            <option value="Education Loans">Education Loans</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">Loan Subcategory</label>
                        <select
                            id="subcategory"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={subcategory}
                            onChange={(e) => setSubcategory(e.target.value)}
                            required
                        >
                            <option value="">Select Subcategory</option>
                            {category === "Wedding Loans" && (
                                <>
                                    <option value="Valima">Valima</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Valima Food">Valima Food</option>
                                    <option value="Jahez">Jahez</option>
                                </>
                            )}
                            {category === "Home Construction Loans" && (
                                <>
                                    <option value="Structure">Structure</option>
                                    <option value="Finishing">Finishing</option>
                                    <option value="Loan">Loan</option>
                                </>
                            )}
                            {category === "Business Startup Loans" && (
                                <>
                                    <option value="Buy Stall">Buy Stall</option>
                                    <option value="Advance Rent">Advance Rent</option>
                                    <option value="Shop Assets">Shop Assets</option>
                                    <option value="Shop Machinery">Shop Machinery</option>
                                </>
                            )}
                            {category === "Education Loans" && (
                                <>
                                    <option value="University Fees">University Fees</option>
                                    <option value="Child Fees Loan">Child Fees Loan</option>
                                </>
                            )}
                        </select>
                    </div>

                    {/* Guarantor Details */}
                    <h3 className="text-lg font-semibold mb-2">Guarantor 1 Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor1.name}
                            onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor1.email}
                            onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor1.location}
                            onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">CNIC</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor1.cnic}
                            onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
                            required
                        />
                    </div>

                    {/* Guarantor 2 Details */}
                    <h3 className="text-lg font-semibold mb-2">Guarantor 2 Details</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor2.name}
                            onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor2.email}
                            onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor2.location}
                            onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">CNIC</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={guarantor2.cnic}
                            onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
                            required
                        />
                    </div>

                    {/* Personal Information */}
                    <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={personalInfo.address}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            value={personalInfo.phone}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                            required
                        />
                    </div>

                    {/* Optional Salary Sheet */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Salary Sheet (Optional)</label>
                        <input
                            type="file"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                            onChange={(e) => setSalarySheet(e.target.files[0])}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Submit Loan Request
                    </button>
                </form>
            </div>
        </div>
    );
}
