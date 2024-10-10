import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbMoodEmpty } from "react-icons/tb";

interface OrderTableProps {
  tableData: Array<{
    order: string;
    date: string;
    total: string;
    paymentStatus: string;
    items: number;
    deliveryStatus: string;
  }>;
  itemsPerPage?: number;
}

const OrderTable: React.FC<OrderTableProps> = ({
  tableData,
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

  return (
    <div className="space-y-4 bg-white p-5">
      <h1 className="text-xl font-semibold">My Orders</h1>
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
              <tr key={index} >
                <td>{order.order}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.items}</td>
                <td>{order.deliveryStatus}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4">
                <div className="flex flex-col items-center justify-center">
                  <TbMoodEmpty className="text-5xl mb-2 text-mutedText" />
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
                className={`px-2 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-primary text-mutedText border-2 border-backgroundColor"
                    : "bg-backgroundColor text-mutedText border-2 border-backgroundColor"
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
  );
};

export default OrderTable;
