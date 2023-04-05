import React from "react";
import { Button, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./userPage.css";
import Api from "../../api";
import { useNavigate } from "react-router-dom";

function addUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleCreateUser();
  };

  const navigate = useNavigate();

  const handleCreateUser = async () => {
    const createUserDetails = {
      userName: getValues().UserName,
      email: getValues().email,
      password: getValues().password,
    };
    console.log("createUserDetails", createUserDetails);
    await Api.post(`user/addUser`, createUserDetails).then((res) => {
      console.log("res.data", res.data);
      navigate("/table")
    })
    .catch(err => console.log(err))
  };


  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-light p-4 d-flex flex-column"
        style={{ minWidth:"450px", minHeight: "150px", borderRadius: "5px" }}
      >
        <Form.Group className="mb-2">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            {...register("UserName", { required: true })}
            type="UserName"
            placeholder="Enter Your UserName"
          />
          {errors.UserName && (
            <p className="errors px-1">UserName is required</p>
          )}
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && <p className="errors px-1">Email is required</p>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter Your Password"
          />
          {errors.password && (
            <p className="errors px-1">Password is required</p>
          )}
        </Form.Group>
        <Button type="submit">Create User</Button>
      </Form>
    </div>
  );
}

export default addUser;
