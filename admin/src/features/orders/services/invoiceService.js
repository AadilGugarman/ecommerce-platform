import jsPDF from "jspdf";
import "jspdf-autotable";

export const generateInvoicePDF = (order) => {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(18);
  doc.text("INVOICE", 14, 20);

  doc.setFontSize(10);
  doc.text("My Store Pvt Ltd", 14, 30);
  doc.text("support@mystore.com", 14, 36);

  // Order info
  doc.text(`Order ID: ${order.id}`, 150, 30);
  doc.text(`Date: ${order.createdAt}`, 150, 36);

  // Customer
  doc.text("Bill To:", 14, 50);
  doc.text(order.customerName, 14, 56);
  doc.text(order.email, 14, 62);

  // Items table
  const tableData = order.items.map((item) => [
    item.name,
    item.qty,
    `₹${item.price}`,
    `₹${item.qty * item.price}`,
  ]);

  doc.autoTable({
    startY: 75,
    head: [["Item", "Qty", "Price", "Total"]],
    body: tableData,
  });

  const finalY = doc.lastAutoTable.finalY || 90;

  // Total
  doc.setFontSize(12);
  doc.text(`Total Amount: ₹${order.total}`, 14, finalY + 10);
  doc.text(`Payment Status: ${order.paymentStatus}`, 14, finalY + 18);

  // Footer
  doc.setFontSize(9);
  doc.text(
    "Thank you for your purchase!",
    14,
    285
  );

  doc.save(`Invoice-${order.id}.pdf`);
};
