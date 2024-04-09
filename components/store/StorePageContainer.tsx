"use client";
import { ItemModal } from "@/components/store/ItemModal";
import { StoreDetails } from "@/components/store/StoreDetails";
import Menu from "@/components/store/Menu";
import CategoryModal from "@/components/store/CategoryModal";
import { useEffect, useState } from "react";

interface CustomProps {
  data: any;
}

const StorePageContainer = ({ data }: CustomProps) => {
  console.log(data, "data");
  const [itemPopup, setItemPopup] = useState<any>();
  const [showCategoryPopup, setShowCategoryPopup] = useState<boolean>(false);
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  const [categoryWiseItems, setCategoryWiseItems] = useState<any[]>();

  const handleItemModalOpen = (item: any) => {
    setItemPopup(item);
  };

  const handleItemModalClose = () => {
    setItemPopup({});
  };

  const handleCategoryPopupOpen = () => {
    setShowCategoryPopup(true);
  };

  const handleCategoryPopupClose = () => {
    setShowCategoryPopup(false);
  };

  useEffect(() => {
    const categories: any = {};
    const categoryNamesSet = new Set<string>();
    data?.items?.data?.forEach((item: any) => {
      const categoryName = item.attributes.item_category.data.attributes.name;
      categoryNamesSet.add(categoryName);
      if (!categories[categoryName]) {
        categories[categoryName] = [];
      }
      categories[categoryName].push({
        name: item.attributes.name,
        variant: item.attributes.variant,
        image: item?.attributes?.image,
        shortDescription: item?.attributes?.shortDescription,
        description: item?.attributes?.description,
        ingredients: item?.attributes?.ingredients,
      });
    });

    const formattedData = Object.keys(categories).map((categoryName) => ({
      name: categoryName,
      items: categories[categoryName],
    }));
    setCategoryWiseItems(formattedData);
    setCategoryNames(Array.from(categoryNamesSet));
  }, [data]);

  return (
    <div>
      <ItemModal
        data={itemPopup}
        storeDetails={data}
        handleItemModalClose={handleItemModalClose}
      />
      <CategoryModal
        showCategoryPopup={showCategoryPopup}
        handleCategoryPopupClose={handleCategoryPopupClose}
        data={categoryNames}
      />

      <div className="restaurant">
        <div className="menu-icon" onClick={() => handleCategoryPopupOpen()}>
          <i className="mdi mdi-menu"></i>
        </div>
        <StoreDetails data={data} />
        <Menu
          data={categoryWiseItems}
          storeDetails={data}
          handleItemModalOpen={handleItemModalOpen}
        />
      </div>
    </div>
  );
};

export default StorePageContainer;
