import React, { useState, useEffect } from "react";
import { Select, Row, Col } from "antd";
import MyInput from "../../commons/MyInput";
import { getBrands } from "../../../services/brandService";
import { getCategories } from "../../../services/categoryService";

const { Option } = Select;

const SpecificFields = props => {
  const {
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
    handleBrandChange,
    handleCategoryChange
  } = props;

  const [brands, setBrands] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getBrandsFromServer = async () => {
      const { data } = await getBrands();
      setBrands(data);
      data[0] && setSelectedBrand(data[0].name);
    };

    const getCategoriesFromServer = async () => {
      const { data } = await getCategories();
      setCategories(data);
      data[0] && setSelectedCategory(data[0].name);
    };

    getBrandsFromServer();
    getCategoriesFromServer();
  }, [setSelectedBrand, setSelectedCategory]);

  return (
    <div>
      <Row type="flex" align="middle" justify="end" gutter={[0, 40]}>
        <Col span={12}>
          <MyInput label="Brand">
            <Select
              style={{ width: 120 }}
              onChange={handleBrandChange}
              loading={brands.length === 0 ? true : false}
              value={selectedBrand}
            >
              {brands.map(brand => (
                <Option key={brand._id} value={brand.name}>
                  {brand.name}
                </Option>
              ))}
            </Select>
          </MyInput>
        </Col>
        <Col span={12}>
          <MyInput label="Category">
            <Select
              style={{ width: 120 }}
              onChange={handleCategoryChange}
              loading={categories.length === 0 ? true : false}
              value={selectedCategory}
            >
              {categories.map(category => (
                <Option key={category._id} value={category.name}>
                  {category.name}
                </Option>
              ))}
            </Select>
          </MyInput>
        </Col>
      </Row>
    </div>
  );
};

export default SpecificFields;
