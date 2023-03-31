import React, { useEffect, useState } from "react";
import useShow from "@hooks/useShow";
import useUser from "@hooks/useUser";

export const isHost = () => {
  const [role, setRole] = useState(false);
  const show = useShow();
  const user = useUser();
  const user_uuid = show.user_uuid;

  useEffect(() => {
    if (user_uuid === user.uuid) {
      setRole(true);
    } else {
      setRole(false);
    }
    return () => {};
  }, [user_uuid]);
  return role;
};

export default isHost;
