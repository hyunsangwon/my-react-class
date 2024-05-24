import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Table.css';
import { Search } from './Search';
import TableRow from './TableRow';

const UserTable = () => {
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
  };

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
        <TableRow emp={emp} />
      </table>
    </div>
  );
};

export default UserTable;
