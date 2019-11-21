import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <hr />
        <Input
          name="oldPasswor"
          type="password"
          placeholder="Your current password"
        />
        <Input name="passwor" type="password" placeholder="Your new password" />
        <Input
          name="confirmPasswor"
          type="password"
          placeholder="Repreat your new password"
        />
        <button type="submit">Update profile</button>
      </Form>
      <button type="button">Log out</button>
    </Container>
  );
}
