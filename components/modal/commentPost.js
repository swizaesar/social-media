import React from "react";
import { Modal, Button, Form, Input } from "antd";

const CommentPost = ({
    isShow = false,
    isEdit = false,
    handleEditPost = () => {},
    handleCancel = () => {},
    handleSavePost = () => {},
    onChangeInput = () => {},
    handleCreatePost = () => {},
    titleComment = "",
    emailComment = "",
    descComment = "",
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={isShow}
            onOk={handleSavePost}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleSavePost}>
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Email" required>
                    <Input
                        placeholder="Email"
                        type={"email"}
                        value={emailComment}
                        onChange={(e) =>
                            onChangeInput("emailComment", e.target.value)
                        }
                    />
                </Form.Item>
                <Form.Item label="Title" required>
                    <Input
                        placeholder="Title"
                        type={"email"}
                        value={titleComment}
                        onChange={(e) =>
                            onChangeInput("titleComment", e.target.value)
                        }
                    />
                </Form.Item>
                <Form.Item label="Description" required>
                    <Input.TextArea
                        style={{ height: 130 }}
                        onChange={(e) =>
                            onChangeInput("descComment", e.target.value)
                        }
                        placeholder="Description"
                        value={descComment}
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CommentPost;
