import React, { useState, useEffect } from "react";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
import Navbar from "../components/Navbar/Navbar";
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';

export default function DashboardScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const id = 3;
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/auth/user/users"
      );
      setPosts(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    loadPost();
  }, []);

  // Load user
  const LoadUser = async () => {
    const results = await axios.get(`http://localhost:5000/api/users/${id}`);
    setUsers(results.data);
  };
  // Delete Users
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/delete/user/${id}`);
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div style={{ width: "80%", margin: "auto", paddingTop: "2%" }}>
        <br />
      

        <table className="table table-hover">
        <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Role</th>
              <th scope="col">Email Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {loading ? (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <center>
                <ScaleLoader color="#36d7b7" height={35} width={4} />
              </center>
            </div>
          ) : (
            <tbody>
              {posts.map((item, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.roles}</td>
                  <td>{item.email}</td>
                  <td>
                    <a
                      href={`edit/${item.id}`}
                     className="editBtn"
                    >
                      <FiEdit style={{color: "#36d7b7"}}/>
                    </a>
                    &nbsp;&nbsp;
                    <button
                      onClick={() => deleteUser(item.id)}
                   style={{border: "0px solid #fff", backgroundColor: "#fff"}}
                    >
                      <MdOutlineDelete/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
