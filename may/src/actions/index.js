import { SIGN_IN, SIGN_OUT,FETCH_ANIMALS,FETCH_ANIMAL,EDIT_ADOPT,DELETE_ADOPT,CREATE_COMMENT,FETCH_COMMENTS,DELETE_COMMENT,FETCH_COMMENT } from "./types"
import post from "../apis/post";
import animals from "../apis/animals";
import history from "../history";


export const signIn=(userId)=>{
    return{
        type:SIGN_IN,
        payload:userId,
    };
}

export const signOut=()=>{
    return{
        type:SIGN_OUT
    }
}

export const createComment = (formValues)=> async (dispatch,getState) => {
    const { userId} = getState().auth;
    const {data} = await post.post("/post", {...formValues, userId});

    history.push('/adopt/comment-list')
    dispatch ({type:CREATE_COMMENT, payload:data})

}
 export const fetchComment = (id)=>async (dispatch,)=>{
    const { data } = await post.get(`/post/${id}`);

    dispatch ({ type:FETCH_COMMENT, payload:data});
 }


export const fetchComments = ()=> async (dispatch)=>{
    const { data} = await post.get('/post');

    dispatch({type: FETCH_COMMENTS, payload:data})
}

export const deleteComment = (id) => async(dispatch) =>{
    await post.delete(`/post/${id}`)
    dispatch ({type:DELETE_COMMENT, payload:id})
    history.push('/adopt/comment-list')
}

export const fetchAnimal = (id) => async (dispatch)=>{
    const {data} = await animals.get (`/animals/${id}`);

    dispatch ({ type: FETCH_ANIMAL, payload:data});
}

export const fetchAnimals = ()=>async(dispatch)=>{
    const { data } = await animals.get('/animals');

    dispatch ({ type:FETCH_ANIMALS, payload:data})
}

export const editAdopt = (id,values) =>async (dispatch)=>{

    const { data } = await animals.put (`/animals/${id}`,values);

    dispatch ({ type: EDIT_ADOPT, payload: data});
};

export const deleteAdopt = (id)=> async (dispatch)=>{
    await animals.delete(`/animals/${id}`);

    dispatch ({ type: DELETE_ADOPT, payload:id })
};