exports.validateEquipment = (data) => {
  if (!data.name) return "Equipment name is required";
  if (!data.category) return "Category is required";
  return null;
};
