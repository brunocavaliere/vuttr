import { ChangeEvent, useEffect, useState } from 'react';

import api from '../services/api';

import ModalAddTool from '../components/ModalAddTool';
import ModalDeleteTool from '../components/ModalDeleteTool';

import { Container, Nav, Tools } from '../styles/pages/Home';

interface Tool {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [modalAddTool, setModalAddTool] = useState(false);
  const [modalDeleteTool, setModalDeleteTool] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Tool[]>([]);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, [modalAddTool, modalDeleteTool]);

  useEffect(() => {
    const results = tools.filter(tool =>
      tool.title.toLowerCase().includes(searchTerm),
    );

    setSearchResults(results);
  }, [tools, searchTerm]);

  function handleModalAddTool() {
    setModalAddTool(!modalAddTool);
  }

  function handleModalDeleteTool() {
    setModalDeleteTool(!modalDeleteTool);
  }

  async function handleDeleteTool(id: number): Promise<void> {
    await api.delete(`/tools/${id}`);

    setTools(tools.filter(tool => tool.id !== id));
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value.toLowerCase());
  }

  return (
    <>
      {modalAddTool && (
        <ModalAddTool
          modalTool={modalAddTool}
          handleModal={handleModalAddTool}
        />
      )}

      {modalDeleteTool &&
        tools.map(tool => (
          <ModalDeleteTool
            handleDelete={() => handleDeleteTool(tool.id)}
            modalTool={modalDeleteTool}
            handleModal={handleModalDeleteTool}
          />
        ))}

      <Container>
        <h1>VUTTR</h1>

        <h3>Very Useful Tools to Remember</h3>

        <Nav>
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="search"
          />

          <button onClick={handleModalAddTool} type="button">
            Add
          </button>
        </Nav>

        {searchResults.map(tool => (
          <Tools>
            <header key={tool.title}>
              <h5>
                <a href="teste">{tool.title}</a>
              </h5>

              <button onClick={handleModalDeleteTool} type="button">
                remove
              </button>
            </header>

            <p>{tool.description}</p>
            <div>
              {tool.tags &&
                tool.tags.map((tag, index) => (
                  <span key={index}>{`#${tag}`}</span>
                ))}
            </div>
          </Tools>
        ))}
      </Container>
    </>
  );
}
