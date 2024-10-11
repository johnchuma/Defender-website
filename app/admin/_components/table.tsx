import React from "react";

interface TableHeader {
  name: string; // Used for mapping
  label: string; // Used for displaying
}

interface TableProps {
  headers: TableHeader[];
  data: Array<Record<string, string | number>>;
  className?: string;
}

const Table: React.FC<TableProps> = ({ headers, data, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                {header.label} {/* Display the label */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td
                  key={header.name}
                  className="whitespace-nowrap px-6 py-4 text-sm text-gray-900"
                >
                  {row[header.name] || "-"} {/* Map using name */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
