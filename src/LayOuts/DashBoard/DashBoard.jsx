import {  FaHamburger, FaHome, FaRegBookmark,  FaBook, FaUsers, FaShoppingCart, FaCalendar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {

  // TODO: load data from the server to have dynamic isAdmin based on data:
  const isAdmin = false;
  const isInstructor = true;
  // const isStudent=true;
  // const [isAdmin] = UseAdmin();

  return (
    <div className="drawer drawer-mobile lg:drawer-open " >

      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-pink-50">
        <Outlet></Outlet>

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side bg-red-400 text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">

          {
            isAdmin ? <>


              <li><NavLink to='/dashBoard/manageClasses'><FaBook></FaBook> Manage Classes</NavLink></li>
              <li><NavLink to='/dashBoard/manageUsers'><FaUsers></FaUsers> Manage Users</NavLink></li>

            </>
              : isInstructor ?
                <>

                  <li><NavLink to='/dashBoard/addClass'><FaCalendar></FaCalendar>Add A Class</NavLink></li>

                  <li><NavLink to='/dashBoard/myClass'><FaCalendar></FaCalendar>My Class</NavLink></li>

                 
                </>
                :
                // student:
                <>
                  <li><NavLink to='/dashBoard/selectedClass'><FaShoppingCart></FaShoppingCart> My Selected Class
                    <span className="badge inl badge-secondary">+0</span>

                  </NavLink></li>
                  <li><NavLink to='/dashBoard/enrolledClass'><FaShoppingCart></FaShoppingCart> My Enrolled Class
                    <span className="badge inl badge-secondary">+0</span>

                  </NavLink></li>

                  <li><NavLink to='/dashBoard/payment'><FaCalendar></FaCalendar>Payment</NavLink></li>

                  <li><NavLink to='/dashBoard/paymentHistory'><FaCalendar></FaCalendar>Payment History</NavLink></li>



                </>
          }


          {/* Sidebar content here */}
          <div className="divider"></div>
          <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
          <li><NavLink to="/menu"><FaHamburger></FaHamburger> OUR MENU</NavLink></li>
          <li><NavLink to="/order/pizza"><FaRegBookmark></FaRegBookmark> ORDER FOOD</NavLink></li>



        </ul>

      </div>
    </div >
  );
};

export default DashBoard;