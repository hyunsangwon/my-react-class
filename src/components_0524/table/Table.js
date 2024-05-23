import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Table.css';
import { Search } from './Search';

const colums = ['uuid', 'name', 'dname', 'sal'];
let data = [
  {
    uuid: uuidv4(),
    name: 'brian',
    dname: 'sales',
    sal: 2500,
  },
  {
    uuid: uuidv4(),
    name: 'allen',
    dname: 'manager',
    sal: 3500,
  },
  {
    uuid: uuidv4(),
    name: 'smith',
    dname: 'clerk',
    sal: 1800,
  },
  {
    uuid: uuidv4(),
    name: 'jones',
    dname: 'clerk',
    sal: 1800,
  },
];

export const Table = () => {
  const [emp, setEmp] = useState(data);

  const init = () => {
    setEmp(data);
  };

  const searchEmp = (keyword, value) => {
    if (keyword === 'dname') {
      setEmp(
        emp.filter((e) => {
          return e.dname.toLowerCase().includes(value.toLowerCase());
        }),
      );
    }
    if (keyword === 'name') {
      setEmp(
        emp.filter((e) => {
          return e.name.toLowerCase().includes(value.toLowerCase());
        }),
      );
    }
  }; //사원 검색

  return (
    <div>
      <h2>사원 목록</h2>
      <Search searchEmp={searchEmp} init={init}></Search>
      <table>
        <thead>
          <tr>
            {colums.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {emp.length > 0 ? (
            emp.map((d) => (
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
      </table>
    </div>
  );
};
