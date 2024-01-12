import React from 'react'
const Contact = () => {
  return (
    <>
      <div className='for-contact'>
        <div className="for-form">
          <div className="row m-0">
            <div className="col-lg-6 col-sm-6">
              <div className="map-section">
                <div className="map-container p-5">
                  <iframe id='gmap_canvas' width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                   src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Medical%20square%20Nagpur,Maharashtra+(Trends)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
                </div>
              </div>
            </div>

            <div className=" col-lg-6 col-sm-6">
              <h1 className='c-heading text-center'>Contact Us</h1>
              <form>
                <div className="from-container" style={{ alignItems:"center"}} >
                  <div class="mb-3" >
                    <label htmlFor="exampleFormControlInput1" class="form-label ">Full Name</label>
                    <input type="text" class="form-control " id="exampleFormControlInput1"
                      name="fullname"
                      placeholder="Enter your Name" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1"
                      placeholder="mobile number" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                      placeholder="name@example.com" />
                  </div>
                  <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    ></textarea>
                  </div>
                  <div className="d-flex">
                    <div class="col-12 mb-5">
                      <button class="btn btn-outline-primary" type="submit">Submit form</button>
                      <button class="btn btn-outline-primary mx-3" type="reset">Reset</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;