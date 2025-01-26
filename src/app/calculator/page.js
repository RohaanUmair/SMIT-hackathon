'use client'
import React, { useState } from "react";

export default function Home() {
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [deposit, setDeposit] = useState("");
    const [loanPeriod, setLoanPeriod] = useState("");

    const categories = [
        { name: "Wedding Loans", subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"] },
        { name: "Home Construction Loans", subcategories: ["Structure", "Finishing", "Loan"] },
        { name: "Business Startup Loans", subcategories: ["Buy Stall", "Advance Rent", "Shop Assets", "Shop Machinery"] },
        { name: "Education Loans", subcategories: ["University Fees", "Child Fees"] }
    ];

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory(""); 
    };

    const handleSubcategoryChange = (e) => setSubcategory(e.target.value);

    const handleCalculate = (e) => {
        e.preventDefault();
        alert(`Calculating loan for ${category} - ${subcategory} with deposit ${deposit} and period ${loanPeriod}`);
    };

    const loanPeriods = ["6 months", "1 year", "2 years", "5 years"];

    const selectedCategory = categories.find((cat) => cat.name === category);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Loan Management System</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            {category.subcategories.map((sub, i) => (
                                <li key={i}>{sub}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleCalculate}>
                    <select className="p-2 border rounded" value={category} onChange={handleCategoryChange}>
                        <option>Select Category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat.name}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <select
                        className="p-2 border rounded"
                        value={subcategory}
                        onChange={handleSubcategoryChange}
                        disabled={!category}
                    >
                        <option>Select Subcategory</option>
                        {selectedCategory &&
                            selectedCategory.subcategories.map((sub, i) => (
                                <option key={i} value={sub}>
                                    {sub}
                                </option>
                            ))}
                    </select>

                    <input
                        type="number"
                        placeholder="Initial Deposit"
                        className="p-2 border rounded"
                        value={deposit}
                        onChange={(e) => setDeposit(e.target.value)}
                    />

                    <select
                        className="p-2 border rounded"
                        value={loanPeriod}
                        onChange={(e) => setLoanPeriod(e.target.value)}
                    >
                        <option>Select Loan Period</option>
                        {loanPeriods.map((period, i) => (
                            <option key={i} value={period}>
                                {period}
                            </option>
                        ))}
                    </select>

                    <button className="col-span-2 bg-green-500 text-white py-2 rounded hover:bg-green-600">
                        Calculate
                    </button>
                </form>
            </div>
        </div>
    );
}
