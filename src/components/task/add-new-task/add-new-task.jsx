import CommonDialog from '@/components/common-dialog/common-dialog';
import { addNewTaskFormControls } from '@/config/config';

function AddNewTask({
  showDialog,
  setShowDialog,
  handleSubmit,
  taskFormData,
  currentEditedId,
  setCurrentEditedId,
}) {
  return (
    <CommonDialog
      formControls={addNewTaskFormControls}
      showDialog={showDialog}
      onOpenChange={() => {
        setShowDialog(false);
        currentEditedId ? taskFormData.reset() : null;
        setCurrentEditedId(null);
      }}
      setShowDialog={setShowDialog}
      title={currentEditedId !== null ? 'Edit Task' : 'Add New Task'}
      btnText={currentEditedId !== null ? 'Edit' : 'Add'}
      handleSubmit={handleSubmit}
      formData={taskFormData}
    />
  );
}

export default AddNewTask;
