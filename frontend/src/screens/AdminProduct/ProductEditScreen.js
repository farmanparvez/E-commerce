// import axios from "axios";
import React from "react";
// import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import Loader from "../../components/Loader";
import {
  createProduct,
  // getProductByID,
  uploadProductImage,
  updateProductByID,
} from "../../redux/actions/productAction";
import Container from "react-bootstrap/Container";
import { InputNumber, Form, Select, Input, Button, Upload, Spin } from "antd";
// import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const ProductEditScreen = ({ data, isLoading }) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [image, setImage] = useState("");
  // // const [brand, setBrand] = useState("");
  // const [category, setCategory] = useState("");
  // const [countInStock, setCountInStock] = useState(0);
  // const [description, setDescription] = useState("");
  // const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  // console.log(data)

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    // console.log("Received values of form: ", await values.upload);

//     const image1 = values.upload
// console.log(image1)
    // const image = values.upload[0].then((res) => console.log(res))
    const image = await Promise.resolve(values.upload[0]);
    // console.log(image);
    const productData = {
      name: values.name,
      price: values.price,
      image,
      brand: values.brand,
      category: values.category,
      description: values.description,
      countInStock: values.countInStock,
      type: values.type,
    };
    if (data) {
      dispatch(updateProductByID({ productData, id: data._id }));
    } else {
      dispatch(createProduct(productData));
    }
  };

  // console.log(uploadImage);
  // console.log(image);
  // useEffect(() => {
  //   setImage(uploadImage);
  // }, [uploadImage]);

  // useEffect(() => {
  //   // setImage(uploadImage);
  //   if (data) {
  //     setName(data.name);
  //     setPrice(data.price);
  //     setImage(data.image);
  //     setBrand(data.brand);
  //     setCategory(data.category);
  //     setCountInStock(data.countInStock);
  //     setDescription(data.description);
  //   }
  // }, [data]);

  // const uploadFileHandler = async (e) => {
  //   // console.log(e.target.files[0]);
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   dispatch(uploadProductImage(formData));
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (data) {
  //     const id = data._id;
  //     const updateData = {
  //       name,
  //       price,
  //       image,
  //       brand,
  //       category,
  //       description,
  //       countInStock,
  //     };
  //     dispatch(updateProductByID({ updateData, id }));
  //   } else {
  //     dispatch(
  //       createProduct({
  //         // _id: productId,
  //         name,
  //         price,
  //         image,
  //         brand,
  //         category,
  //         description,
  //         countInStock,
  //       })
  //     );
  //   }
  // };

  // const uploadImageCuston = (e) => {
  //   console.log("Upload event:", e);
  //   const file = e.file.originFileObj;
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   dispatch(uploadProductImage(formData)).then((res) => console.log(res));

  //   // if (Array.isArray(e)) {
  //   //   return e;
  //   // }

  //   // return e?.fileList;
  // };
  // console.log(image);
  // console.log(`http://localhost:8000/${image}`);
  const normFile = (e) => {
    // console.log("Upload event:", e);
    const file = e.file.originFileObj;
    const formData = new FormData();
    formData.append("image", file);
    const res = dispatch(uploadProductImage(formData)).then((res) => {
      // setImage(res);
      return res.payload;
    });

    return [res];
  };

  // const [defaultListOfFiles, setDefaultFileList] = useState([]);
  // const [progress, setProgress] = useState(0);

  // const uploadImageCuston = async (options) => {
  //   const { onSuccess, onError, file, onProgress } = options;

  //   const fmData = new FormData();
  //   fmData.append("image", file);
  //   const res = await dispatch(uploadProductImage(fmData)).unwrap();

  //   console.log("server res: ", res);
  // };

  // const onFinishFailed = () => {
  //   message.error('Submit failed!');
  // };
// console.log("http://localhost:8000/" + data?.image)
  return (
    <>
    {data && <img style={{width: '300px', height: '300px'}} scr={"http://localhost:8000/" + data?.image} alt=''/>}
    {data && <img style={{width: '300px', height: '300px'}} scr={"http://localhost:3000/" + data?.image} alt=''/>}
      <Form
      // onFinishFailed={onFinishFailed}
        layout={"vertical"}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          // image
          name: data?.name,
          price: data?.price,
          upload: (data && [data?.image]) || [],
          brand: data?.brand,
          category: data?.category,
          countInStock: data?.countInStock,
          description: data?.description,
          type: data?.type,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          // customRequest={(res) => console.log(res)}
          // onChange={(res) => console.log(res)}
          getValueFromEvent={normFile}
          // extra="longgggggggggggggggggggggggggggggggggg"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Upload
            maxCount={1}
            accept="image/*"
            // customRequest={uploadImageCuston}
            // onChange={handleOnChange}
            listType="picture-card"
            // fileList={defaultListOfFiles}
            className="image-upload-grid"
          >
            {isLoading ? <Spin /> : <div>Upload Button</div>}
            
            {/* <img scr={"http://localhost:8000/" + image} /> */}
            {/* {defaultListOfFiles.length >= 8 ? null : <div>Upload Button</div>} */}
          </Upload>
        </Form.Item>
        {/* <img scr={`http://localhost:8000/${image}`} /> */}
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <img src="" alt="" />
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input your price!",
            },
          ]}
        >
          <InputNumber styles={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="brand"
          label="Brand"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your brand!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="countInStock"
          label="Count In Stock "
          rules={[
            {
              required: true,
              message: "Please input your Count In Stock !",
            },
          ]}
        >
          <InputNumber styles={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please input your Category!",
            },
          ]}
        >
          <Input
            // addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please select type!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="electronics">Electronics</Option>
            <Option value="Mobile">Mobile</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </Form>
      <Container fluid>
        {/* <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.File
              id="image-file"
              label="Choose File"
              custom
              onChange={uploadFileHandler}
            ></Form.File>
            {isLoading && <Loader />}
          </Form.Group>

          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter countInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            {isVisible.type}
          </Button>
        </Form> */}
      </Container>
    </>
  );
};

export default ProductEditScreen;
