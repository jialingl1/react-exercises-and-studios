import styles from './Description.module.css';
import React from 'react'; 

function RecipeAuthor() {
    const authorLink = "https://natashaskitchen.com/apple-pie-recipe/";
    const authorPhoto =  "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
    const authorName = "Natasha Kravchuk";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
        <div>
           <h1>Apple Pie</h1>
           <p>A pie for any season</p>
        </div>
        <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription;