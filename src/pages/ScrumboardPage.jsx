import CommonCard from '@/components/common-card/common-card';
import { scrumBoardOptions } from '@/config/config';
import { TaskManagerContext } from '@/context';
import { getAllTaskApi, updateTaskApi } from '@/services';
import { Fragment, useContext, useEffect } from 'react';

function ScrumboardPage() {
  const { user, setTaskList, taskList, setLoading } =
    useContext(TaskManagerContext);

  async function fetchTaskList() {
    setLoading(true);
    const response = await getAllTaskApi(user?._id);
    if (response?.success) {
      setTaskList(response?.data);
      setLoading(false);
    }
  }

  function onDragStart(event, getTaskId) {
    event.dataTransfer.setData('id', getTaskId);
  }

  async function updateTaskByStatus(getTask) {
    await updateTaskApi(getTask);
    await fetchTaskList();
  }

  function onDrop(event, getCurrentStatus) {
    const getDraggedTaskId = event.dataTransfer.getData('id');

    let findCurrentTask = taskList.find(
      (item) => item._id.toString() === getDraggedTaskId
    );

    findCurrentTask = {
      ...findCurrentTask,
      status: getCurrentStatus,
    };

    updateTaskByStatus(findCurrentTask);
  }

  function renderTodoByStatus() {
    const taskStatus = {
      todo: [],
      inProgress: [],
      blocked: [],
      review: [],
      done: [],
    };

    taskList.forEach((taskItem) => {
      taskStatus[taskItem.status].push(
        <div
          onDragStart={
            taskItem.status !== 'done'
              ? (event) => onDragStart(event, taskItem._id)
              : null
          }
          draggable={taskItem.status !== 'done' ? true : false}
          className="mb-2"
        >
          <CommonCard
            title={taskItem.title}
            description={
              scrumBoardOptions.find(
                (boardOption) => boardOption.id === taskItem?.status
              ).label
            }
            content={taskItem.content}
            extraTextStyles={taskItem.status === 'done' ? ' line-through ' : ''}
          />
        </div>
      );
    });
    return taskStatus;
  }

  useEffect(() => {
    if (user !== null) fetchTaskList();
  }, [user]);

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-2 h-full">
        {scrumBoardOptions.map((item) => (
          <div
            className="border border-[#333333] rounded overflow-auto"
            key={item?.id}
            onDrop={(event) => onDrop(event, item.id)}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="px-1 py-3 text-center bg-black border-none mb-3">
              <h3 className="text-2xl text-white">{item?.label}</h3>
            </div>
            <div className="p-3">{renderTodoByStatus()[item.id]}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ScrumboardPage;
