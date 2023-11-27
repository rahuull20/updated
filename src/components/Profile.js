import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

const ProfilePage = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  //calls api in use effect
  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/users/${params.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`//to send token in headers, bearer to verify token 
      }
    });
    result = await result.json();
    setArticles(result);
  }

  return (
    <>
      <section style={{ backgroundColor: 'white' }}>
        <MDBContainer className="py-5">


          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">Publisher</p>
                  <p className="text-muted mb-4">JIIT Noida</p>
                  <div className="d-flex justify-content-center mb-2">
                    <a rel='noreferrer' href={'/EditProfile'} target="_blank" className="btn btn-dark btn-space">Edit Profile</a>
                    <a rel='noreferrer' href={'/'} target="_blank" className="btn btn-outline-dark">Uploads</a>
                  </div>
                </MDBCardBody>
              </MDBCard>



            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>

                  {articles.map((element) => {
                    return (

                      <div className="col-md-4" key={element._id}>
                        <MDBRow >
                          <MDBCol sm="3">
                            <MDBCardText>Full Name</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{element.name}</MDBCardText>
                          </MDBCol>

                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{element.email}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>Institute</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">Jaypee Institute of Information Technology</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText>N. of Publications</MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                      </div>

                    )
                  })}{/*takes all news from artiles as different objects */}

                </MDBCardBody>
              </MDBCard>


            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default ProfilePage