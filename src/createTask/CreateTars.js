import React , {useState} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTars = ({ modal, toggle,save}) => {

  const [Taskname,setTaskName] = useState(' ');

  const [description,setDiscription] = useState(' ');

  const handleChange= (e) =>{

    const{name,value} = e.target;
  if(name==="taskName"){
    setTaskName(value);
  }else{
    setDiscription(value);
  }
  }


  const handlesave = () =>{
    let taskobj = {}
    taskobj["Name"] = Taskname
    taskobj["description"] = description
    save(taskobj)
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>create task</ModalHeader>
      <ModalBody>
        <form>
          <div className='form-group'>
            <label>Task name</label>
            <input type="text" className="form-control" value={Taskname} onChange={handleChange} name="taskName"/>
          </div>

          <div className='form-group'>
            <label>description</label>
            <textarea rows="5" className="form-control" value={description}  onChange={handleChange} name="description"></textarea>
          </div>
        </form>

      </ModalBody>
      <ModalFooter>
        <ModalFooter>
          <Button color="primary" onClick={handlesave}>
            create
          </Button>{' '}
          <Button color="secondar{...args}y" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTars;