import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>RED PRODUCT</h3>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <h1>Liste des hôtels</h1>

        </li>
      </ul>

      <div className="user">
        <p>Fatoumata Camara</p>
        <span>● en ligne</span>
      </div>
    </div>
  )
}

export default Sidebar;