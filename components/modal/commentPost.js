import React from "react";
import { Modal, Button, Form, Input } from "antd";
import { validateEmail } from "../../helpers/regex";

const CommentPost = ({
    isShow = false,
    isEdit = false,
    isSubmit = false,
    handleCancel = () => {},
    handleSavePost = () => {},
    onChangeInput = () => {},
    handleEditCommentSubmit = () => {},
    titleComment = "",
    emailComment = "",
    descComment = "",
    loadingButton = false,
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
                <Button
                    loading={loadingButton}
                    key="submit"
                    type="primary"
                    onClick={isEdit ? handleEditCommentSubmit : handleSavePost}
                >
                    Save
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Email" required>
                    <Input
                        className={
                            validateEmail(emailComment)
                                ? ""
                                : emailComment === "" && !isSubmit
                                ? ""
                                : "input-error"
                        }
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
                        className={
                            titleComment === "" && isSubmit ? "input-error" : ""
                        }
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
                        className={
                            descComment === "" && isSubmit ? "input-error" : ""
                        }
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
