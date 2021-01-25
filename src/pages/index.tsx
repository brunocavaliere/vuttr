import { useEffect, useState } from 'react';
import api from '../services/api';

import ModalAddTool from '../components/ModalAddTool';

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
  const [modalTool, setModalTool] = useState(false);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, [tools]);

  function handleModalTool(): void {
    setModalTool(!modalTool);
  }

  async function handleDeleteTool(id: number): Promise<void> {
    await api.delete(`/tools/${id}`);

    setTools(tools.filter(tool => tool.id !== id));
  }

  return (
    <>
      {modalTool && <ModalAddTool />}

      <Container>
        <h1>VUTTR!</h1>

        <h3>Very Useful Tools to Remember</h3>

        <Nav>
          <input type="text" placeholder="search" />

          <button onClick={handleModalTool} type="button">
            Add
          </button>
        </Nav>

        {tools.map(tool => (
          <Tools>
            <header key={tool.title}>
              <h5>
                <a href="teste">{tool.title}</a>
              </h5>

              <button onClick={() => handleDeleteTool(tool.id)} type="button">
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
