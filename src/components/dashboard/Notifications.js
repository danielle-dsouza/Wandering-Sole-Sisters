import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Notifications(props) {
  const { notifications } = props;

  const notificationsList =
    notifications &&
    notifications.map((item) => {
      return (
        <Link to={"/blog/" + item.blogId} key={item.id}>
          <li key={item.id}>
            <span className="pink">{item.user}</span>
            <br />
            <span>{item.content}</span>
            <div className="grey-text note-date">
              {moment(item.time.toDate()).fromNow()}
            </div>
          </li>
        </Link>
      );
    });

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">{notificationsList}</ul>
        </div>
      </div>
    </div>
  );
}
