import React from "react";

const NotFound = () => {
  return (
    <div id="error-page">
      <div className="content">
        <h2 className="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
