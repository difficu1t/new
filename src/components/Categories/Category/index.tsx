import { useEffect,useState } from "react"
import { Category, Restaurant } from "../../../common/types/restaurant"
import { useRestaurantsActions } from "../../../utils/hooks/useRestaurantsActions"
import "./index.css"

const Category = ({ category, restaurant }: { category: Category, restaurant: Restaurant }) => {

  const [ itemClass, setItemClass ] = useState("categories__item");

  const { changeCategory } = useRestaurantsActions();

  useEffect(() => {
    if(category.active){
      setItemClass("categories__item categories__item_selected");
    } else {
      setItemClass("categories__item");
    }
  }, [restaurant.categories])

  const changeCategoryStatus = () =>  {
    changeCategory({categoryTitle: category.title, restaurantName: restaurant.name});
  }

  return (
    <li>
      <button className={itemClass} onClick={changeCategoryStatus}>{category.title}</button>
    </li>
  )
}

export default Category;