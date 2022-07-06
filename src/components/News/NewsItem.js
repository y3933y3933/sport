import Tag from "../UI/Tag/Tag";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";

const NewsItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center  py-1  gap-x-2">
      <div className="w-11 shrink-0">
        {props.tag ? (
          <Tag primary={props.tag?.type === 0 ? true : null}>
            {props.tag?.text}
          </Tag>
        ) : null}
      </div>
      <span className="text-sm text-gray-400">{props?.date}</span>
      <p
        className="text-primary-1 font-semibold hover:text-primary-2 cursor-pointer line-clamp-1"
        onClick={openModal}
      >
        {props?.title}
      </p>
      <Modal show={showModal} onClose={closeModal} title={props.title} >
        <p>{props.content}</p>
      </Modal>
    </div>
  );
};

export default NewsItem;
