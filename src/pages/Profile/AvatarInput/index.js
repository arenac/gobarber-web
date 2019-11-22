import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function AvatarInput() {
  /**
   * useField will get the avatar property from (the user state) profile,
   * initialData of Form component where the AvatarInput is in.
   */
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, []);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]); // e.target.files[0] will restrict to send a single file

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt="Add your avatar"
        />
        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file} // the unform will recover this info and use as reference
          onChange={handleChange}
          ref={ref} // the unform will recover this info and use as reference
        />
      </label>
    </Container>
  );
}
