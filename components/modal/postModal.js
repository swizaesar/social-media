import React from "react";
import { Modal, Button, Form, Input } from "antd";

const PostModal = ({
    isShow = false,
    isEdit = false,
    handleEditPost = () => {},
    handleCancel = () => {},
    handleSavePost = () => {},
    onChangeInput = () => {},
    handleCreatePost = () => {},
    title = "",
    titleValue = "",
    descValue = "",
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={isShow}
            onOk={handleSavePost}
            title={title}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={isEdit ? handleEditPost : handleCreatePost}
                >
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Title" required>
                    <Input
                        placeholder="Title"
                        value={titleValue}
                        onChange={(e) => onChangeInput("title", e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Description" required>
                    <Input.TextArea
                        style={{ height: 100 }}
                        onChange={(e) =>
                            onChangeInput("description", e.target.value)
                        }
                        placeholder="Description"
                        value={descValue}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default PostModal;
