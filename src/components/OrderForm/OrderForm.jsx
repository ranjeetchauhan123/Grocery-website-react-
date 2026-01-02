import { useState } from "react";

const OrderForm = ({ orderForm, setOrderForm }) => {
  if (!orderForm) return null;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully ✅");
    setOrderForm(false);
  };

  return (
    /* Overlay */
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 h-auto">
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-2xl 
        border border-orange-200 p-5 sm:p-7 animate-scaleIn">

        {/* Close Button */}
        <button onClick={() => setOrderForm(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-red-300 text-red-500
          hover:bg-red-100 transition"> ✕ </button>

        {/* Title */}
        <h2 className="mb-5 text-center text-2xl font-bold text-orange-500"> Place Your Order </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[75vh] overflow-y-auto pr-2" >
          {/* Left Side */}

          <div className="border rounded-xl p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800"> Customer Details </h2>

            <input type="text" name="name" placeholder="Full Name" required
              className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

            <input type="email" name="email" placeholder="Email Address"required
              className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

            <input type="tel" name="phone" placeholder="Mobile Number"required
              className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

            <textarea name="address" placeholder="House No, Street, Area" rows="1"
              className="w-full border rounded-lg p-1.5 resize-none focus:ring-2 focus:ring-orange-400 outline-none" />

            {/* satet and City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="text" name="state" placeholder="State"required
                className="border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

              <input type="text" name="district" placeholder="District / City"required
                className="border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />
            </div>

            <input type="number" name="pincode" placeholder="Pincode"required
              className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

            <textarea name="notes" placeholder="Delivery Instructions (optional)" rows="1"
              className="w-full border rounded-lg p-1.5 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Right Side */}
          <div className="border rounded-xl p-4 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800"> Payment Method </h2>

            {/* Payment Dropdown */}
            <div className="space-y-2">

              <label className="text-sm font-medium text-gray-600"> Select Payment Method</label>
              <select value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none">
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI / Google Pay / PhonePe</option>
                <option value="card">Debit / Credit Card</option>
              </select>
            </div>

            {/* UPI FIELD */}
            {paymentMethod === "upi" && (
              <div className="mt-3 space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  UPI ID
                </label>
                <input type="text" placeholder="example@upi"required
                  className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />
                <p className="text-xs text-gray-500">
                  Enter your UPI ID to proceed
                </p>
              </div>
            )}

            {/* CARD FIELDS */}
            {paymentMethod === "card" && (
              <div className="mt-3 space-y-3">
                <input type="text" placeholder="Card Number" required
                  className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM / YY"required
                    className="border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />

                  <input type="password" placeholder="CVV"required
                    className="border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />
                </div>

                <input type="text" placeholder="Card Holder Name"required
                  className="w-full border rounded-lg p-1.5 focus:ring-2 focus:ring-orange-400 outline-none" />
              </div>
            )}

            {/* COD INFO */}
            {paymentMethod === "cod" && (
              <p className="text-sm text-green-600 mt-2">
                ✔ Pay in cash when your order is delivered.
              </p>
            )}

            {/* ===== Order Summary ===== */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Items Total</span>
                <span>₹999</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Delivery</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total Payable</span>
                <span>₹999</span>
              </div>
            </div>

            <button type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-medium" >
              Confirm Order
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default OrderForm;
