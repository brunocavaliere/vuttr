import { useState, ChangeEvent, FocusEvent, FormEvent } from 'react';

import api from '../services/api';

import { Container } from '../styles/components/ModalAddTools';

export default function ModalAddTool() {
  const [inputData, setInputData] = useState({
    title: '',
    link: '',
    description: '',
    tags: [],
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = event.target;

    setInputData({ ...inputData, [id]: value });
  }

  function handleInputTagsBlur(event: FocusEvent<HTMLInputElement>): void {
    const { value, id } = event.target;

    const arrayTags = value.split(' ');

    setInputData({ ...inputData, [id]: arrayTags });
  }

  async function handleAddTool(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    await api.post('/tools', {
      headers: {
        'Content-Type': 'application/json',
      },
      title: inputData.title,
      description: inputData.description,
      link: inputData.link,
      tags: inputData.tags,
    });
  }

  return (
    <Container>
      <form onSubmit={handleAddTool}>
        <nav>
          <h3>Add new tool</h3>

          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61.414"
              height="61.42"
              viewBox="0 0 61.414 61.42"
            >
              <g transform="translate(-568.793 -714.793)">
                <path
                  className="a"
                  d="M80,20.005l-60,60m60,0L20,20"
                  transform="translate(549.501 695.5)"
                />
              </g>
            </svg>
          </button>
        </nav>
        <fieldset>
          <label htmlFor="title">
            Tool Name
            <input
              type="text"
              id="title"
              value={inputData.title}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="link">
            Tool Link
            <input
              type="text"
              id="link"
              value={inputData.link}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="description">
            Tool Description
            <input
              type="text"
              id="description"
              value={inputData.description}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="tag">
            Tags
            <input
              type="text"
              id="tags"
              value={inputData.tags}
              onChange={handleInputChange}
              onBlur={handleInputTagsBlur}
            />
          </label>
        </fieldset>

        <button type="submit">Add tool</button>
      </form>
    </Container>
  );
}
