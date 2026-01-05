const CheckoutLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl p-4 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default CheckoutLayout;
