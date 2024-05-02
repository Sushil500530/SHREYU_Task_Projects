import React, { useRef, useEffect, forwardRef, useState } from "react";
import {
    useTable,
    useSortBy,
    usePagination,
    useRowSelect,
    useGlobalFilter,
    useAsyncDebounce,
    useExpanded,
} from "react-table";
import classNames from "classnames";


// components
import { Button, Col, Dropdown, ButtonGroup } from "react-bootstrap";
import CustomPagination from "../../../components/CustomPagination";
import FeatherIcon from 'feather-icons-react';

interface GlobalFilterProps {
    preGlobalFilteredRows: any;
    globalFilter: any;
    setGlobalFilter: any;
    searchBoxClass: any;
}

// Define a default UI for filtering
const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    searchBoxClass,
}: GlobalFilterProps) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState<any>(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <div className={classNames(searchBoxClass)}>
            <span className="d-flex align-items-center">
                Search :{" "}
                <input
                    type="search"
                    value={value || ""}
                    onChange={(e: any) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                    placeholder={`${count} records...`}
                    className="form-control w-auto ms-1"
                />
            </span>
        </div>
    );
};

interface IndeterminateCheckboxProps {
    indeterminate: any;
    children?: React.ReactNode;
}

const IndeterminateCheckbox = forwardRef<
    HTMLInputElement,
    IndeterminateCheckboxProps
>(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <>
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    ref={resolvedRef}
                    {...rest}
                />
                <label htmlFor="form-check-input" className="form-check-label"></label>
            </div>
        </>
    );
});

interface TableProps {
    isSearchable?: boolean;
    isSortable?: boolean;
    pagination?: boolean;
    isSelectable?: boolean;
    isExpandable?: boolean;
    sizePerPageList?: {
        text: string;
        value: number;
    }[];
    columns: {
        Header: string;
        accessor: string;
        sort?: boolean;
        Cell?: any;
        className?: string;
    }[];
    data: any[];
    pageSize?: any;
    searchBoxClass?: string;
    tableClass?: string;
    theadClass?: string;
}

const HomeVisitsCustomTable = (props: TableProps) => {
    const isSearchable = props["isSearchable"] || false;
    const isSortable = props["isSortable"] || false;
    const pagination = props["pagination"] || false;
    const isSelectable = props["isSelectable"] || false;
    const isExpandable = props["isExpandable"] || false;
    const sizePerPageList = props["sizePerPageList"] || [];

    // console.log(columns);


    let otherProps: any = {};

    if (isSearchable) {
        otherProps["useGlobalFilter"] = useGlobalFilter;
    }
    if (isSortable) {
        otherProps["useSortBy"] = useSortBy;
    }
    if (isExpandable) {
        otherProps["useExpanded"] = useExpanded;
    }
    if (pagination) {
        otherProps["usePagination"] = usePagination;
    }
    if (isSelectable) {
        otherProps["useRowSelect"] = useRowSelect;
    }

    const dataTable = useTable(
        {
            columns: props["columns"],
            data: props["data"],
            initialState: { pageSize: props["pageSize"] || 10 },
        },
        otherProps.hasOwnProperty("useGlobalFilter") &&
        otherProps["useGlobalFilter"],
        otherProps.hasOwnProperty("useSortBy") && otherProps["useSortBy"],
        otherProps.hasOwnProperty("useExpanded") && otherProps["useExpanded"],
        otherProps.hasOwnProperty("usePagination") && otherProps["usePagination"],
        otherProps.hasOwnProperty("useRowSelect") && otherProps["useRowSelect"],
        (hooks) => {
            isSelectable &&
                hooks.visibleColumns.push((columns: any) => [
                    // Let's make a column for selection
                    {
                        id: "selection",
                        // The header can use the table's getToggleAllRowsSelectedProps method
                        // to render a checkbox
                        Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
                            <div>
                                <IndeterminateCheckbox
                                    {...getToggleAllPageRowsSelectedProps()}
                                />
                            </div>
                        ),
                        // The cell can use the individual row's getToggleRowSelectedProps method
                        // to the render a checkbox
                        Cell: ({ row }: any) => (
                            <div>
                                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                            </div>
                        ),
                    },
                    ...columns,
                ]);

            isExpandable &&
                hooks.visibleColumns.push((columns: any) => [
                    // Let's make a column for selection
                    {
                        // Build our expander column
                        id: "expander", // Make sure it has an ID
                        Header: ({
                            getToggleAllRowsExpandedProps,
                            isAllRowsExpanded,
                        }: any) => (
                            <span {...getToggleAllRowsExpandedProps()}>
                                {isAllRowsExpanded ? "-" : "+"}
                            </span>
                        ),
                        Cell: ({ row }) =>
                            // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
                            // to build the toggle for expanding a row
                            row.canExpand ? (
                                <span
                                    {...row.getToggleRowExpandedProps({
                                        style: {
                                            // We can even use the row.depth property
                                            // and paddingLeft to indicate the depth
                                            // of the row
                                            paddingLeft: `${row.depth * 2}rem`,
                                        },
                                    })}
                                >
                                    {row.isExpanded ? "-" : "+"}
                                </span>
                            ) : null,
                    },
                    ...columns,
                ]);
        }
    );

    let rows = pagination ? dataTable.page : dataTable.rows;

    return (
        <>
            {isSearchable && (
                <GlobalFilter
                    preGlobalFilteredRows={dataTable.preGlobalFilteredRows}
                    globalFilter={dataTable.state.globalFilter}
                    setGlobalFilter={dataTable.setGlobalFilter}
                    searchBoxClass={props["searchBoxClass"]}
                />
            )}

            <div className="table-responsive">
                <table
                    {...dataTable.getTableProps()}
                    className={classNames(
                        "table table-centered react-table table-striped table-hover",
                        props["tableClass"]
                    )}
                >
                    <thead className={props["theadClass"]}>
                        {(dataTable.headerGroups || []).map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-primary text-white">
                                {(headerGroup.headers || []).map((column: any) => (
                                    <th
                                        {...column.getHeaderProps(
                                            column.sort && column.getSortByToggleProps()
                                        )}
                                        className={classNames({
                                            sorting_desc: column.isSortedDesc === true,
                                            sorting_asc: column.isSortedDesc === false,
                                            sortable: column.sort === true,
                                        })}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    {/* <thead className="bg-primary text-white">
            <tr>
              <th className="border-1" style={{ width: "0px" }}>#</th>
              <th className="border-1" style={{ width: "45%" }}>Title</th>
              <th className="border-1" style={{ width: "45%" }}>Discount</th>
              <th className="border-1" style={{ width: "10%" }}>Action</th>
            </tr>
          </thead> */}
                    <tbody {...dataTable.getTableBodyProps()}>
                        {(rows || []).map((row: any, index: any) => {
                            dataTable.prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={index}>
                                    <td className="border-1">{row.original.id}</td>
                                    <td className="border-1">{row.original.clientName}</td>
                                    <td className="border-1">{row.original.phone}</td>
                                    <td className="border-1">{row.original.address}</td>
                                    <td className="border-1">{row.original.visitDate}</td>
                                    <td className="border-1">
                                        <i className="bi bi-check-all fs-2 text-success fw-bold"></i>
                                    </td>
                                    <td className="border-1">
                                        <div className="form-check form-switch w-100 ">
                                            <input className="form-check-input w-100 p-2 " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label w-100" htmlFor="flexSwitchCheckDefault"></label>
                                        </div>
                                    </td>
                                    <td className="border-1 d-flex align-items-center justify-content-center gap-2 px-1">
                                        <Col md={"auto"}>
                                            <Dropdown as={ButtonGroup} align="end">
                                                <Dropdown.Toggle
                                                    variant="primary"
                                                    id="dropdown-basic"
                                                    className="btn-sm d-flex align-items-center justify-content-center gap-2 rounded-pill" style={{ width: "100px", height: "30px", borderRadius: "20px" }}
                                                >
                                                    <Button variant="primary" className="btn-sm d-flex align-items-center justify-content-center gap-1 rounded-pill" >
                                                        <i className="bi bi-gear-fill" style={{ fontSize: "14px" }}></i>
                                                        Action
                                                        <i className="bi bi-caret-down-fill" style={{ fontSize: "14px" }}></i>
                                                    </Button>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item className="notify-item" href="#/">
                                                        <FeatherIcon
                                                            icon="eye"
                                                            className="icon-dual icon-xs me-2"
                                                        />
                                                        <span>Show</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="notify-item" href="#/">
                                                        <FeatherIcon
                                                            icon="edit"
                                                            className="icon-dual icon-xs me-2"
                                                        />
                                                        <span>Edit</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="notify-item" href="#/">
                                                        <FeatherIcon
                                                            icon="trash-2"
                                                            className="icon-dual icon-xs me-2"
                                                        />
                                                        <span>Delet</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="notify-item" href="#/">
                                                        <FeatherIcon
                                                            icon="filter"
                                                            className="icon-dual icon-xs me-2"
                                                        />
                                                        <span>Clear group tests</span>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {pagination && (
                <CustomPagination tableProps={dataTable} sizePerPageList={sizePerPageList} />
            )}
        </>
    );
};

export default HomeVisitsCustomTable;
