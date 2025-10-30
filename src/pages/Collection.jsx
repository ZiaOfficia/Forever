import React, { useState, useContext, useEffect, use } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../component/Title";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const[sortType,setsortType]=useState("relevant");
  useEffect(() => {
    setFilterProduct(products);
  }, [products]);
  useEffect(() => {
    console.log(category);
  }, [category]);
  // handle category toggle
  const toggleCateory = (e) => {
    console.log(e.target.value);
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item != e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  //
  // toggleSubcategory
  const toggleSubcategory = (e) => {
    try {
      const val = e?.target?.value;
      if (!val) return;
      if (subCategory.includes(val)) {
        setSubCategory((prev) => prev.filter((item) => item != val));
      } else {
        setSubCategory((prev) => [...prev, val]);
      }
    } catch (err) {
      console.error("toggleSubcategory error:", err);
    }
  };
  useEffect(() => {
    console.log(subCategory);
  }, [subCategory]);

  // Filter products based on selected category and subcategory
  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProduct(productCopy);
  };

  // sorting
  const sortProducts = () => {
    let fpCopy = filterProduct.slice();
    switch (sortType) {
      case "Low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };
  //
  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);
  // sorting useEffect
  useEffect(()=>{sortProducts()},[sortType])

  // -------------------------
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="w-full sm:w-60">
        {/* Make the label+icon a single clickable control so either one toggles the filter */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setshowFilter(!showFilter)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setshowFilter(!showFilter);
          }}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          <span>Filters</span>
          <img
            className={`h-3 sm:hidden transform transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="toggle"
            aria-hidden="true"
          />
        </div>
        {/* Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCateory}
                checked={category.includes("Men")}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCateory}
                checked={category.includes("Women")}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCateory}
                checked={category.includes("Kids")}
              />
              Kids
            </p>
          </div>
        </div>
        {/* SubcategoryFilter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcategory}
                checked={subCategory.includes("Topwear")}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcategory}
                checked={subCategory.includes("Bottomwear")}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcategory}
                checked={subCategory.includes("Winterwear")}
              />
              WinterWear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className=" flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"Collections"}></Title>
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            name=""
            id=""
            onChange={(e)=>setsortType(e.target.value)}
          >
            <option value="relevant">Sort by relavant</option>
            <option value="Low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={item._id ?? index}
              _id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
