import "./Success.css";
function Success({ email, onLogout }) {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h2>Login Successful!</h2>
        <p>
          Welcome,{email || "User"}!
        </p>
        <p className="success-desc">
          You have successfully logged into your account.
        </p>
        {onLogout && (
          <button className="logout-btn" onClick={onLogout}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}
export default Success;