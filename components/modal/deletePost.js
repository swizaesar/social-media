import React from "react";
import { Modal, Button } from "antd";

const DeletePost = ({
    isShow = false,
    data,
    loadingButton = false,
    handleCancel = () => {},
    handleConfirmDelete = () => {},
}) => {
    return (
        <Modal
            visible={isShow}
            closable={false}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    loading={loadingButton}
                    key="submit"
                    type="danger"
                    onClick={handleConfirmDelete}
                >
                    Delete
                </Button>,
            ]}
        >
            <div style={{ textAlign: "center" }}>
                Are you sure you want to remove <b>{data.title}</b> from the
                post ?
            </div>
        </Modal>
    );
};

export default DeletePost;
