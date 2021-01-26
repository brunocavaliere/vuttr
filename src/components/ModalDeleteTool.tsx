import { Container } from '../styles/components/ModalDeleteTools';

interface Props {
  handleDelete: () => {};
  modalTool: boolean;
  handleModal: () => void;
}

export default function ModalDeleteTool({
  handleDelete,
  handleModal,
  modalTool,
}: Props) {
  return (
    <Container modalTool={modalTool}>
      <form onSubmit={handleDelete}>
        <h4>Remove tool</h4>

        <p>Are you sure you want to remove tool?</p>

        <div>
          <button onClick={handleModal} type="button">
            Cancel
          </button>

          <button type="submit">Remove tool</button>
        </div>
      </form>
    </Container>
  );
}
