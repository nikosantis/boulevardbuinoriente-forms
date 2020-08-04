import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function Table ({ data }) {
  const columns = useMemo(() => [
    { Header: 'Fecha', accessor: 'date' },
    { Header: 'Nombre', accessor: 'formName' },
    { Header: 'Empresa', accessor: 'company' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Teléfono', accessor: 'phone' },
    { Header: 'Opción', accessor: 'option' },
    { Header: 'Comentarios', accessor: 'comments' }
  ], [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy)

  const firstPageRows = rows

  return (
    <div className='col-12'>
      <div className='table-responsive'>
        <table className='table table-bordered' {...getTableProps()}>
          <thead className='thead-dark'>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    scope='col'
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <FiChevronDown />
                          : <FiChevronUp />
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
      </div>
    </div>
  )
}
