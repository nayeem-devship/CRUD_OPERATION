import React, { useState, useEffect } from "react";
import Api from "../../api";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function userTable() {
  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await Api.get(`/user/getUser`)
      .then((res) => {
        setUserList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteUserData = async (id) => {
    await Api.delete(`/user/deleteUser/${id}`)
      .then((res) => {
        getUser();
      })
      .catch((err) => console.log(err));
  };

  const submit = (id) => {
    confirmAlert({
      message: <h2>Are you sure</h2>,
      buttons: [
        {
          label: "yes",
          onClick: () => {
            deleteUserData(id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="d-flex flex-column justify-conent-center align-items-center bg-light rounded p-4">
      <h4>User List</h4>
      <Table responsive striped>
        <tbody>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Password</th>
            <th className="px-3">Action</th>
          </tr>
        </tbody>
        <tbody>
          {userList.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.userName}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td className="d-flex">
                  <Button
                    type="submit"
                    className="btn btn-sm btn-danger mx-2"
                    onClick={() => submit(data._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => navigate(`/${data._id}`)}
                    className="btn btn-sm btn-success"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to UserPage
      </Button>
    </div>
  );
}

export default userTable;
