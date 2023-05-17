import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import AdvanceTableWrapper from "MyApp/components/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "MyApp/components/common/advance-table/AdvanceTable";
import AdvanceTableSearchBox from "MyApp/components/common/advance-table/AdvanceTableSearchBox";
import AdvanceTableFooter from "MyApp/components/common/advance-table/AdvanceTableFooter";
import IconButton from "MyApp/components/common/IconButton";
import { Link } from "react-router-dom";
import UsersServices from "MyApp/data/UsersService";
import MyLoadingComponent from "MyApp/my-components/MyLoadingComponent";
import { toast } from "react-toastify";
import MyToastComponent from "MyApp/my-components/MyToastComponent";

const UserListTable = () => {
  const columns = [
    {
      accessor: "id",
      Header: "Id",
    },
    {
      accessor: "name",
      Header: "Nombre",
    },
    {
      accessor: "email",
      Header: "Email",
    },
    {
      accessor: "phone",
      Header: "Contacto",
    },
    {
      accesor: "created_at",
      Header: "Fecha Alta",
    },
    {
      accessor: "sucursal",
      Header: "Sucursal",
    },
    {
      accessor: "role",
      Header: "Rol",
    },
    {
      accessor: "status",
      Header: "Estado",
    },
    {
      accessor: "actions",
      Header: "Acciones",
      Cell: (rowData) => {
        const { id } = rowData.row.original;
        const link = `/usuarios/editar/${id}`;
        return (
          <>
            <Link to={link}>
              <IconButton icon="edit" variant="light" size="sm" />
            </Link>
          </>
        );
      },
    },
  ];

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    UsersServices.GetUsers()
      .then((result) => {
        setInterval(() => setUserList(result), 1000);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  return (
    <>
      <MyToastComponent />
      {userList.length == 0 ? (
        <MyLoadingComponent />
      ) : (
        <>
          <AdvanceTableWrapper
            columns={columns}
            data={userList}
            sortable
            selection
            pagination
            perPage={10}
          >
            <Row className="flex-end-center mb-3">
              <Col xs="auto" sm={6} lg={4}>
                <AdvanceTableSearchBox table />
              </Col>
            </Row>
            <AdvanceTable
              table
              headerClassName="bg-200 text-900 text-nowrap align-middle"
              rowClassName="align-middle white-space-nowrap"
              tableProps={{
                size: "sm",
                bordered: false,
                striped: true,
                className: "fs--1 mb-0 overflow-hidden",
              }}
            ></AdvanceTable>
            <div className="mt-3">
              <AdvanceTableFooter
                rowCount={userList.length}
                table
                rowInfo
                navButtons
                rowsPerPageSelection
              />
            </div>
          </AdvanceTableWrapper>
        </>
      )}
    </>
  );
};

export default UserListTable;
