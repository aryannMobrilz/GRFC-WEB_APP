import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const LoginRegister = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" , dob: "" , identif: "", name: "", address:"" ,phone: "", });
  const [credentials2, setCredentials2] = useState({ email: "", password: ""});
  const [loader, setLoader]= useState(false
  );
  const [visible, setVisible] = useState(0);
  let url = "https://grfc.mobrilz.digital/api";
  let navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
    console.log("dob ka data",credentials);
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    setCredentials2((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
    console.log(credentials);
  };

  const handleLogin = async (e) => {
    
    e.preventDefault();
    const response = await axios.put(`${url}/login/0`, {
      email: credentials2.email,
      password: credentials2.password,
    });
    // const parsed =  response.JSON();
    console.log(response);
    setLoader(true);
    if (response.status == 200) {
        setLoader(false);
    //   alert("login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const register = await axios.post((`${url}/register`),{
        dob: credentials.dob,
        identif: credentials.identif,
        name: credentials.name,
        address: credentials.address,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
        userType: 0,
        is_admin: 0,
    });
    if (register.status == 200){
        alert("Register successful");
        navigate("/");
    }else{
        alert("Details already exists")
    }
  };
  const [inputType, setInputType] = useState('text');
  const [dateValue, setDateValue] = useState('');

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    if (!(credentials.dob)) {
      setInputType('text');
    }
  };
  console.log("input type" , inputType)
  return (
    <div>
    {loader ? <Loader/> :
    <div>
      <section
        className="banner"
        style={{
          backgroundColor: "#fff",
          backgroundImage: "url(assets/images_new/background_2.png)",
          marginTop:"-150px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h2>Login</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <div className="banner-img-1">
                  <svg
                    width="260"
                    height="260"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src="assets/images_new/banner-img-1-1.jpg" alt="banner" />
                </div>
                <div className="banner-img-2">
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 673 673"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z"
                      fill="#fa441d"
                    ></path>
                  </svg>
                  <img src="assets/images_new/banner-img-2.jpg" alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form>
                  <input
                    type="email"
                    name="email"
                    value={credentials2.email}
                    onChange={handleChange2}
                    placeholder="Username or email address"
                  />
                  <input
                    type="password"
                    name="password"
                    value={credentials2.password}
                    onChange={handleChange2}
                    placeholder="Password"
                  />
                  <div className="remember">
                    <div className="first">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div className="second">
                      <a href="javascript:void(0)">Forget a Password?</a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box register">
                <div
                  className="parallax"
                  style={{ backgroundImage: "url(assets/img/patron.jpg)" }}
                ></div>
                <h3>Create Your Account</h3>
                <form>
                    {visible==0?
                  <div >
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={credentials.name}
                      onChange={handleChange}
                      
                    />
                    <input
                      type="email"
                      name="email"
                      value={credentials.email}
                      placeholder="Username or email address"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm Password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>
                    <button
                      type="button"
                      className="button"
                      onClick={() => setVisible(1)}
                    >
                      Next
                    </button>
                  </div>:null}
                  {visible==1?

                  <div>
                     <input
        type={inputType}
        name="dob"
        placeholder={inputType === 'text' ? 'Date Of Birth' : ''}
        value={credentials.dob}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
                    <input
                      type="text"
                      name="identif"
                      value={credentials.identif}
                      placeholder="Identification"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="address"
                      value={credentials.address}
                      placeholder="Address"
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      value={credentials.phone}
                      onChange={handleChange}
                    />
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>

                    <button
                      type="button"
                      className="button "
                      onClick={() => setVisible(0)}
                    >
                      Previuos
                    </button>
                    <button type="submit" className="button m-lg-2" onClick={handleRegister}>
                      Register
                    </button>
                  </div>:null}

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>}
    </div>
  );
};

export default LoginRegister;
