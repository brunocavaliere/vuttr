import { useEffect, useState } from 'react';
import api from '../services/api';

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

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, []);

  return (
    <Container>
      <h1>VUTTR!</h1>

      <h3>Very Useful Tools to Remember</h3>

      <Nav>
        <input type="text" placeholder="search" />

        <button type="button">Add</button>
      </Nav>

      {tools.map(tool => (
        <Tools>
          <header key={tool.title}>
            <h5>
              <a href="teste">{tool.title}</a>
            </h5>

            <button type="button">remove</button>
          </header>

          <p>{tool.description}</p>
          <p>{tool.tags}</p>
        </Tools>
      ))}
    </Container>
  );
}
