import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

function Blog({ visible, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addBlogs = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        title="Create a New Blog Post"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={addBlogs}>
            Submit
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Title" required>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title"
              required
            />
          </Form.Item>
          <Form.Item label="Content" required>
            <TextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Enter the content"
              required
            />
          </Form.Item>
          <Form.Item label="Organization" required>
            <Select placeholder="Select an organization" required>
              <Option value="Org1">Organization 1</Option>
              <Option value="Org2">Organization 2</Option>
              <Option value="Org3">Organization 3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Status" required>
            <Select placeholder="Select status" required>
              <Option value="publish">Publish</Option>
              <Option value="unpublish">Hidden</Option>
              <Option value="archive">Archive</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Blog;