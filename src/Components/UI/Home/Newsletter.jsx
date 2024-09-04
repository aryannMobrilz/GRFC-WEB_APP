import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section class="gap">
        <div class="container">
          <div class="dog-walker">
            <img src="assets/images_new/image (4).png" alt="dog walker" />
            {/* <!-- <img src="assets/img/line.png" class="line" alt="line">
            <img src="assets/img/dabal-foot.png" class="dabal-foot" alt="dabal-foot"> --> */}
            <div class="dog-walker-text">
              <h2>Find a dog walker or pet care</h2>
              <p>
                Place your trust in We Love Pets, an award-winning dog walking
                and pet care
              </p>
              <form>
                <input
                  placeholder="Enter address or postcode..."
                  name="Enter address"
                  type="text"
                />
                <button class="button">Find Branch</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
