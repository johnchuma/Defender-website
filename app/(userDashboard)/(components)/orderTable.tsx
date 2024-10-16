import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbMoodEmpty } from "react-icons/tb";
import formatDate from "@/app/(userDashboard)/(components)/dateFormatter";

interface OrderTableProps {
  tableData: Array<{
    uuid: string;
    orderNo: string;
    orderedAt: string;
    totalPrice: string;
    paymentStatus: string;
    itemCount: number;
    deliverStatus: string;
  }>;
  onOrderClick: (orderId: string) => void;
  itemsPerPage?: number;
}

const OrderTable: React.FC<OrderTableProps> = ({
  tableData,
  onOrderClick,
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getPaymentStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-200 text-green-800";
      case "cancelled":
        return "bg-red-200 text-red-800";
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="space-y-4 bg-white p-5">
      <h1 className="text-xl font-semibold">My Orders</h1>
      <div className="overflow-x-auto"> 
      <table className="min-w-full table-auto">
        <thead className="bg-backgroundColor">
          <tr>
            <th>ORDER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAYMENT STATUS</th>
            <th>ITEMS</th>
            <th>DELIVERY STATUS</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((order, index) => (
              <tr key={index}>
                <td
                  className="cursor-pointer hover:text-primaryColor"
                  onClick={() => onOrderClick(order.uuid)}
                >
                  #{order.orderNo}
                </td>
                <td>{formatDate(order.orderedAt)}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <button
                    className={`rounded-lg p-2 opacity-90 ${getPaymentStatusStyle(order.paymentStatus)}`}
                  >
                    {order.paymentStatus}
                  </button>
                </td>
                <td>{order.itemCount}</td>
                <td>{order.deliverStatus}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4">
                <div className="flex flex-col items-center justify-center">
                  <TbMoodEmpty className="mb-2 text-5xl text-mutedText" />
                  <span>No orders available</span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4 flex items-center justify-end space-x-5">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <div className="flex items-center space-x-2 text-mutedText">
            <IoIosArrowBack /> <p>Previous</p>
          </div>
        </button>

        <div className="flex space-x-2">
          {totalPages > 0 &&
            Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`rounded-md px-2 py-1 ${
                  currentPage === index + 1
                    ? "bg-primary border-2 border-backgroundColor text-mutedText"
                    : "border-2 border-backgroundColor bg-backgroundColor text-mutedText"
                }`}
              >
                {index + 1}
              </button>
            ))}
        </div>

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <div className="flex items-center space-x-2 text-mutedText">
            <p>Next</p> <IoIosArrowForward />
          </div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default OrderTable;
