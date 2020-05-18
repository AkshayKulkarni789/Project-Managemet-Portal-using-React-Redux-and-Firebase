import React from 'react'
import moment from 'moment'

const Notif = (props) => {
    const {notifications} = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifis</span>
                    <ul>
                        {notifications && notifications.map(notif => {
                            return (
                                <li key={notif.id}>
                                    <span className="green-text">{notif.user}</span>
                                    <span> {notif.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(notif.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notif