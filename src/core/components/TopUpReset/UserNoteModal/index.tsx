import { Button, Modal } from "antd";
import { useState } from "react";
import Styles from "./UserNoteModal.module.scss";
import { UserNoteModalProps } from "./UserNoteModal.type";

export const UserNoteModal = (props: UserNoteModalProps) => {
  const { note, admin_note } = JSON.parse(props.notes);
  console.log("props.notes :");
  console.log("note :", note);
  console.log("admin_note :", admin_note);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>View Notes</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        className={Styles.UserNoteModal}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{
          padding: "0",
        }}
      >
        <h3 className={Styles.contentTitle}>Your Note</h3>
        <p>{note}</p>
        <h3 className={Styles.contentTitle}>Your Note</h3>
        <p>{admin_note}</p>
      </Modal>
    </>
  );
};
