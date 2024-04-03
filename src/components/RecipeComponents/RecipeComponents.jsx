import {
    RecipeContainer,
    CoverImage,
    RecipeName,
    IngredientsText,
    SeeMoreText
} from './styles';

import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



export default function RecipeComponents({ recipe, seeMoreTextClick }) {
    const [openDialogFlag, setOpenDialogFlag] = useState(false);

    const handleClickOpen = () => {
        setOpenDialogFlag(true);
    }

    const handleClose = () => {
        setOpenDialogFlag(false);
    }

    return recipe ? (
        <>
            <Dialog open={openDialogFlag} onClose={handleClose}>
                <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
                <DialogContent>
                    <table>
                        <thead>
                            <th>Ingredients</th>
                            <th>Weight</th>
                        </thead>
                        <tbody>
                            {
                                recipe.ingredients.map(({ text, weight }) => (
                                    <tr>
                                        <td>{text}</td>
                                        <td>{Math.floor(weight)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <IngredientsText onClick={() => window.open(recipe.url)}>See More</IngredientsText>
                    <SeeMoreText onClick={() => setOpenDialogFlag(false)}>Close</SeeMoreText>
                </DialogActions>
            </Dialog>
            <RecipeContainer>
                <CoverImage src={recipe.image} />
                <RecipeName>{recipe.label}</RecipeName>
                <IngredientsText onClick={handleClickOpen}>Ingridients</IngredientsText>
                <SeeMoreText onClick={() => seeMoreTextClick(recipe.url)}>See Complete Recipe</SeeMoreText>
            </RecipeContainer>
        </>
    ) : null;
}
