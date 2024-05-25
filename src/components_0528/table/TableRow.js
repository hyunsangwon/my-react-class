import React from 'react';

const TableRow = (props) => {
  return (
    <tbody>
      {props.emp.length > 0 ? (
        props.emp.map((d) => (
          <tr key={d.uuid}>
            <td>{d.uuid}</td>
            <td>{d.name}</td>
            <td>{d.dname}</td>
            <td>{d.sal}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No data</td>
        </tr>
      )}
    </tbody>
  );
};

export default TableRow;
