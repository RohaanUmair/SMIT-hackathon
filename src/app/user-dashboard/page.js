'use client';
import { useState } from "react";

export default function UserDashboard() {
    // Mock user loan data, this can be fetched from your database
    const [loanHistory, setLoanHistory] = useState([
        {
            id: 1,
            loanType: "Wedding Loans",
            subcategory: "Valima",
            loanAmount: 500000,
            paidAmount: 200000,
            loanPeriod: "3 years",
            paymentHistory: [
                { date: "2024-01-15", amount: 50000 },
                { date: "2024-02-20", amount: 50000 },
                { date: "2024-03-15", amount: 100000 },
            ],
        }
    ]);

    // Calculate remaining balance
    const calculateRemainingBalance = (loanAmount, paidAmount) => loanAmount - paidAmount;

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">User Dashboard</h1>

                <p className="text-lg text-center text-gray-600 mb-6">Here is your loan history and details:</p>

                {loanHistory.length === 0 ? (
                    <p className="text-center text-gray-500">No loan history found.</p>
                ) : (
                    <div>
                        {loanHistory.map((loan) => (
                            <div
                                key={loan.id}
                                className="mb-6 p-6 border-l-4 border-blue-500 rounded-lg shadow-md transition duration-300 hover:shadow-xl"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    {loan.loanType} - {loan.subcategory}
                                </h2>
                                <div className="flex flex-wrap gap-6 mb-4">
                                    <div className="text-gray-700">
                                        <strong>Loan Amount:</strong> PKR {loan.loanAmount}
                                    </div>
                                    <div className="text-gray-700">
                                        <strong>Loan Period:</strong> {loan.loanPeriod}
                                    </div>
                                    <div className="text-gray-700">
                                        <strong>Paid Amount:</strong> PKR {loan.paidAmount}
                                    </div>
                                    <div className="text-gray-700">
                                        <strong>Remaining Balance:</strong> PKR {calculateRemainingBalance(loan.loanAmount, loan.paidAmount)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment History:</h3>
                                <ul className="space-y-2">
                                    {loan.paymentHistory.map((payment, index) => (
                                        <li key={index} className="flex justify-between items-center text-gray-600">
                                            <span>
                                                <strong>Date:</strong> {payment.date}
                                            </span>
                                            <span>
                                                <strong>Amount:</strong> PKR {payment.amount}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
