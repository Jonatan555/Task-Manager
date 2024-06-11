import { TaskDataTypes } from "../TaskCard";
import { Container } from "./styles";

type ModalTaskDetailsTypes = {
  toggleModal?: () => void;
  task:TaskDataTypes;
};

export function ModalTaskDetails({ toggleModal,task }: ModalTaskDetailsTypes) {
  return (
    <Container onClick={toggleModal}>
      <div className="handleTaskContainer">
      <div className="formContainer" onClick={toggleModal}>
      <div className="headerForm">
        <h2>Detalhes de tarefa</h2>
         <i className="material-icons closeicon" onClick={toggleModal}> close</i>
       </div>
       {task.title}
       {/* form */}
      </div>
      </div>
    </Container>
  );
}
