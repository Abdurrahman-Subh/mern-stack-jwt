import React from "react";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div>
      Unauthorized, You don't have access
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}
