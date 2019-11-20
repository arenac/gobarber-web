import React from 'react';

import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification } from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7519c1" size={20} />
      </Badge>

      <NotificationList>
        <Notification unread>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
        <Notification>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
        <Notification>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
        <Notification>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
        <Notification>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
        <Notification>
          <p>You have a new appoitment</p>
          <time>2 days ago</time>
          <button type="button">Set as read</button>
        </Notification>
      </NotificationList>
    </Container>
  );
}
