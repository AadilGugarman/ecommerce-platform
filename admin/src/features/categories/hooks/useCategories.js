import { useState } from "react";

const initialData = [
  { id: 1, name: "Electronics", slug: "electronics", parentId: null },
  { id: 2, name: "Mobiles", slug: "mobiles", parentId: 1 },
  { id: 3, name: "Laptops", slug: "laptops", parentId: 1 },
  { id: 4, name: "Fashion", slug: "fashion", parentId: null },
];

export const useCategories = () => {
  const [categories, setCategories] = useState(initialData);

  const addCategory = (data) => {
    setCategories((prev) => [
      ...prev,
      { id: Date.now(), ...data },
    ]);
  };

  const updateCategory = (id, data) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, ...data } : cat
      )
    );
  };

  const deleteCategory = (id) => {
    setCategories((prev) =>
      prev.filter(
        (cat) => cat.id !== id && cat.parentId !== id
      )
    );
  };

  return {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
};
