import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    console.log(availablebal);
  }

  function refrushForm() {
    setDeposit("");
    setShow(true);
  }

  return (
    <>
      <form>
        <div className="table1">
          <div className="deposit">
            <center>
              <h3
 style={{
  backgroundColor: "darkblue",
  width: "1100px",
  minHeight: "80px"
}}

              >Deposit in Your Account</h3>
            </center>
          </div>

          <div className="balance">
            <label>
              <h4>Balance : $ {availablebal}</h4>
            </label>
          </div>

          <div className="dep">
            <label>
              <h4>Deposit</h4>
            </label>
          </div>
          <div className="input">
            {/* <i class="bi bi-bank"></i> */}
            <input
              type="number"
              className="form-control"
              placeholder="Enter  The Amount "
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
          </div>

          <div>
            <center>
              <br />
              <button className="btn" type="submit" onClick={handleCreate}>
                Deposit
              </button>
            </center>
          </div>
        </div>
      </form>
    </>
  );
}
