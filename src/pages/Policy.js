import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
<img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTf-7HQ9vA-XJ4Hw1f5BlXgMVlMuUdAX58qw&usqp=CAU"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>SHARING YOUR PERSONAL INFORMATION</b></p>

          <p>
            We share your Personal Information with third parties to help us use
            your Personal Information, as described above. We also use Google
            Analytics to help us understand how our customers use (Store Name).
            How Google uses your Personal Information. Finally, we may also
            share your Personal Information to comply with applicable laws and
            regulations, to respond to a subpoena, search warrant or other
            lawful requests for information we receive, or to otherwise protect
            our rights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
