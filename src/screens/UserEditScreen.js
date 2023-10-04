import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

function UserEditScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params.id); //{id: '1'}
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate(`/admin/userlist`);
    } else {
      if (!user.name || user._id !== parseInt(params.id)) {
        dispatch(getUserDetails(params.id));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, user, params, successUpdate, navigate]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        _id: user._id,
        name,
        email,
        isAdmin,
      })
    );
  };

  return (
    <div>
      <Link to={"/admin/userlist"}>Go Back</Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant={"danger"}>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"}>{error}</Message>
        ) : (
          <Form onSubmit={sumbitHandler}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin" className="mb-3">
              <Form.Check
                type="checkbox"
                label="is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default UserEditScreen;