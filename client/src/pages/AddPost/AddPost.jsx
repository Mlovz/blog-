import React, { useState } from "react";
import "./add-post.scss";
import { Button, Heading, Input, Select } from "components";

const AddPost = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="add-post">
      <Heading>Добавить пост</Heading>

      <form>
        <div className="add-post_file">
          <label htmlFor="file">
            <input type="file" multiple id="file" onChange={() => {}} hidden />

            <div>
              <div></div>
              <span className="fs-14">Выберите файл(ы)</span>
            </div>
          </label>
        </div>

        <Input
          name="title"
          value={data.title}
          placeholder="Введите название поста"
          required
          onChange={handleChange}
        />

        <Select required select={category} setSelect={setCategory} />

        <Input
          name="content"
          value={data.content}
          placeholder="Введите описание поста"
          textarea
          required
          onChange={handleChange}
        />

        <Button fullWidth>Добавить</Button>
      </form>
    </div>
  );
};

export default AddPost;
