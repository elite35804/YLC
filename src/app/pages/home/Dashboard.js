import React from "react";
import { Card, Image } from "react-bootstrap";
import { Icon } from "@material-ui/core";

export default function Dashboard() {

  return (
    <>
      <div className="row">
        <div className="col-lg-4 mb-5">
          <Card>
            <Card.Body>
              <h1 className="mb-5" style={{ textAlign: "right" }}>QuickPay</h1>
              <Image src="https://yourlocalcall.com:443/YLC/assets/images/master-cards-sm.png" thumbnail/>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 mb-5">
          <Card>
            <Card.Body>
              <div className="row ml-2 mr-2" style={{ justifyContent: "space-between" }}>
                <Icon
                  className="fa fa-credit-card"
                  style={{fontSize: '7em'}}
                />
                <div>
                  <h1 style={{textAlign: 'right'}}>$0.00</h1>
                  <h4 style={{textAlign: 'right'}}>Account Balance</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 mb-5">
          <Card>
            <Card.Body>
              <div className="row ml-2 mr-2" style={{ justifyContent: "space-between" }}>
                <Icon
                  className="fa fa-phone-volume"
                  style={{fontSize: '7em'}}
                />
                <div>
                  <h1 style={{textAlign: 'right'}}>0 Active</h1>
                  <h4 style={{textAlign: 'right'}}>Numbers</h4>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
