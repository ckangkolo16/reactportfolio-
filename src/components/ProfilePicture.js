import React from "react";
import { Pfp } from "../assets/images/";

function ProfilePicture() {
  return (
    <figure className="figure">
      <img
        src={Pfp}
        className="img-fluid img-thumbnail figure-img rounded"
        alt="Chobu Kangkolo"
      />
      <figcaption className="figure-caption">Chobu Kangkolo</figcaption>
    </figure>
  );
}

export default ProfilePicture;
