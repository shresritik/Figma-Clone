import React, { useMemo } from "react";
import { Avatar } from "./Avatar";
import { useOthers, useSelf } from "../../liveblocks.config";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";

function ActiveUsers() {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;
  const memoizedUsers = useMemo(
    () => (
      <main className="flex py-2 items-cetner justify-center gap-1">
        <div className="flex pl-3">
          {currentUser && (
            <Avatar
              name="You"
              otherStyles="border-[3px] border-primary-green"
            />
          )}
          {users.slice(0, 3).map(({ connectionId }) => {
            return (
              <Avatar
                key={connectionId}
                otherStyles="-ml-3"
                name={generateRandomName()}
              />
            );
          })}

          {hasMoreUsers && (
            <div className={styles.more}>+{users.length - 3}</div>
          )}
        </div>
      </main>
    ),
    [users.length]
  );
  return memoizedUsers;
}
export default ActiveUsers;
