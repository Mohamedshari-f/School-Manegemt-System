import React from "react";

export default function InvoiceCard() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-2xl rounded-2xl p-8 border relative">
      {/* School Logo */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Alhadi Academy
          </h1>
          <p className="text-gray-500 text-sm">Mogadishu, Somalia</p>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.85bzEu5yWcn_Y3oK4astHQHaJG?w=133&h=180&c=7&r=0&o=7&pid=1.7&rm=3" // 👉 halkan geli logo-ga iskuulka
          alt="School Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Invoice Title */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-700">
        Student Fee Invoice
      </h2>

      {/* Student Info */}
      <div className="mb-6 space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">Student Name:</span> Mohamed Sharif
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Student ID:</span> STD-1024
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Class:</span> Grade 12
        </p>
      </div>

      {/* Fee Details */}
      <div className="bg-gray-50 p-5 rounded-xl mb-6 border">
        <p className="text-gray-800">
          <span className="font-semibold">Month:</span> September 2025
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Fee Amount:</span>{" "}
          <span className="text-green-700 font-bold">$150</span>
        </p>
        <p className="text-gray-800">
          <span className="font-semibold">Paid Date:</span> 14/09/2025
        </p>
      </div>

      <div className="border-t pt-4 text-center">
        <p className="text-gray-500 text-sm">Thank you for your payment 🙏</p>
      </div>
    </div>
  );
}
